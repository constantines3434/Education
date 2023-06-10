#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <dirent.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/wait.h>
#include <limits.h>
#include <errno.h>

int maxLength = 0;

int addDir(char** dirs, char* path, char* dirName, int countDirs){
	if (strlen(dirName) < 4){
		for (int i = 0; i < 2; i++){
			if (dirName[i] == '.')
				return 1;
		}
	}

	int newPathLength = strlen(path) + strlen(dirName) + 2;
	dirs = (char**)realloc(dirs, sizeof(char*) * (countDirs+1));
	dirs[countDirs] = (char*)malloc(newPathLength);
	char *newPath = (char*)malloc(newPathLength);
	if (!dirs || !dirs[countDirs] || !newPath){
		printf("Ошибка выделения памяти!"); return 1;
	}

	strcpy(newPath, path);
	strcpy(newPath+strlen(newPath), (char*)"/");
	strcpy(newPath+strlen(newPath), dirName);

	strcpy(dirs[countDirs], newPath);
	free(newPath);
	printf("Добавлена папка %s\n", dirs[countDirs]);
	return 0;
}

int dirProcessing(char* path){
	int countDirs = 0;
	int fileNameLength = 0;
	char** dirs = (char**)malloc(sizeof(char*) * (countDirs+1));
	struct dirent *pDirent;
	struct stat fStat;
	DIR *pDir;

	pDir = opendir(path);
	if (pDir == NULL){
		printf("Папка не найдена!\n"); return 1;
	}
	printf("\nsearching in \"%s\"\n", path);
	while ((pDirent = readdir(pDir)) != NULL){
		char *filePath = (char*)malloc(strlen(path) + strlen(pDirent->d_name) + 2);
		strcpy(filePath, path);
		strcpy(filePath+strlen(filePath), (char*)"/");
		strcpy(filePath+strlen(filePath), pDirent->d_name);
		if (!stat(filePath, &fStat)){
			if (fStat.st_mode & S_IFDIR){
				if (!addDir(dirs, path, pDirent->d_name, countDirs))
					countDirs++;
			}
			else{
				fileNameLength = strlen(pDirent->d_name);
				if (maxLength < fileNameLength){
					maxLength = fileNameLength;
				}
			}
		}
		else{
			printf("*%s\n", strerror(errno)); return 1;
		}
	}
	closedir(pDir);

	if (dirs){
		for (int i = 0; i < countDirs; i++){
			int pid = fork();
			int status;
			switch(pid){
				case -1: printf("Произошло вселенское зло\n"); return 1;
				case 0: dirProcessing(dirs[i]); exit(0);
				default: waitpid(pid, &status, 0); free(dirs[i]);
			}
		}
		free(dirs);
	}
	return 0;
}

int main(int argc, char* paths[]){
	if (argc == 2){
		dirProcessing(realpath(paths[1], NULL));
		printf("%d\n", maxLength);
	}
	else
		printf("Недостаточно аргументов\n"); return 1;
	return 0;
}
