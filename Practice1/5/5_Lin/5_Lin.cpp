#include <dirent.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#include <string>
#include <memory>
#include <vector>
#include <stdlib.h>
#include <malloc.h>

#include <sys/stat.h>
#include <sys/wait.h>
#include <limits.h>
#include <errno.h>
#include <pthread.h>
#include <sys/mman.h>

#define PATH "/media/maxvog2020/main_files/ProjectsForTests/Cpp/Constantine/test/"
#define BUFFER_SIZE 256


#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>

#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>

void* create_shared_memory(size_t size) {
  // Our memory buffer will be readable and writable:
  int protection = PROT_READ | PROT_WRITE;

  // The buffer will be shared (meaning other processes can access it), but
  // anonymous (meaning third-party processes cannot obtain an address for it),
  // so only this process and its children will be able to use it:
  int visibility = MAP_SHARED | MAP_ANONYMOUS;

  // The remaining parameters to `mmap()` are not important for this use case,
  // but the manpage for `mmap` explains their purpose.
  return mmap(NULL, size, protection, visibility, -1, 0);
}


int* empty_file_number = (int*)create_shared_memory(4);

bool is_pseudodirectory(struct dirent *ent)
{
    return strcmp(ent->d_name, (".")) == 0 || strcmp(ent->d_name, ("..")) == 0;
}

void get_old_name(char *path, struct dirent *ent, char *old_file_name)
{
    sprintf(old_file_name, "%s%s", path, ent->d_name);
}

void get_new_name(char *path, struct dirent *ent, char *new_file_name)
{
    sprintf(new_file_name, "%s%s%d%s",
            path, "zero", *empty_file_number, ".txt");
}

// ia?aeiaiiauaaiea oaeea
bool rename_file(struct dirent *ent, char *path)
{
    char old_file_name[BUFFER_SIZE] = "";
    get_old_name(path, ent, old_file_name);

    char new_file_name[BUFFER_SIZE] = "";
    get_new_name(path, ent, new_file_name);

 //   printf("Success_rename\n");
    return rename(old_file_name, new_file_name);
}

void get_new_path(char *path, struct dirent *ent, char *new_path)
{
    sprintf(new_path, "%s%s%s", path, ent->d_name, "/");
}

bool is_directory(char *path_, struct stat *st)
{
    stat(path_, st);
    return S_ISDIR(st->st_mode);
}

void search_file(char *path)
{
    DIR *dir = opendir(path);
    // printf("%s","0");
    while (struct dirent *ent = readdir(dir))
    {
        struct stat sb;
        char file_name[BUFFER_SIZE] = "";

        get_old_name(path, ent, file_name);

        // printf("%s","1");

        if (stat(file_name, &sb) == -1) 
        {
            continue;
        }
        // printf("%s","2");
        if ((sb.st_mode & S_IFMT) != S_IFREG) 
        {
            continue;
        }
        // printf("%s","3");
        if (is_pseudodirectory(ent))
        {
            continue;
        }
        // printf("%s","4");
        if (sb.st_size != 0) 
        {
            continue;
        }
        //  printf("%s","5");
        rename_file(ent, path);
        *empty_file_number += 1;
        
    }
    closedir(dir);
}

void rec_dir(char *path) // DIRECTORY_NAME
{
   // printf("%s", "odin");
    search_file(path); 
    DIR *dir = opendir(path);
    std::vector<std::unique_ptr<char[]>> paths;
    std::vector<int> procs;

    while (struct dirent *ent = readdir(dir))
    {
        struct stat sb;
        //printf("%s", "dva");
        char dir_path[BUFFER_SIZE] = "";
        get_old_name(path, ent, dir_path);

        if (!(is_directory(dir_path, &sb))) 
        {
            continue;
        }
        //printf("%s", "tri");
        if (is_pseudodirectory(ent))
        {
            continue;
        } 
        //printf("%s", "chert");
        paths.emplace_back(new char[BUFFER_SIZE]());

        get_new_path(path, ent, paths.back().get());

        int pid = fork();
        switch (pid)
        {
            case -1:
                printf("Process error\n");
                exit(1);
            case 0:
                rec_dir(paths.back().get());
                exit(0);
            default:
                procs.push_back(pid);
                break;
        }
    }

    for (int i = 0; i < procs.size(); i += 1) {
        int status;
        waitpid(procs[i], &status, 0);
    }

    closedir(dir); 
}

int main(int argc, char *argv[])
{
    *empty_file_number = 1;
    rec_dir(PATH);
    return 0;
}