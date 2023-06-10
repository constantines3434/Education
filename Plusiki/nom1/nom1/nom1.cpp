#include <stdio.h>
#include <Windows.h>
#include <conio.h>
#include <string.h>
#include <filesystem>
#include <tchar.h>
#include <psapi.h>


void main1()
{
    STARTUPINFO cif;
    ZeroMemory(&cif, sizeof(STARTUPINFO));
    PROCESS_INFORMATION pi;


    wchar_t path[] = L"C:\\VS\\Suzuya\\Suzuya\\x64\\Debug\\Suzuya.exe"; 
    //путь к исполняемому файлу
    CreateProcess(path, NULL,
        NULL, NULL, FALSE, NULL, NULL, NULL, &cif, &pi); //создание процесса
    printf("Process created\n"); 
    WaitForSingleObject(pi.hProcess, INFINITE); //ожидание пока процесс завершится
    CloseHandle(pi.hProcess); //закрытие процесса
    CloseHandle(pi.hThread); //закрытие потока
}



void main2(void)
{
    DWORD Process[2048]; //процесс
    DWORD BytesN; //количество байтов
    DWORD ProcCount; //количество процессов

    EnumProcesses(Process, sizeof(Process), &BytesN);

    ProcCount = BytesN / sizeof(DWORD);

    for (unsigned i = 0; i < ProcCount; i++)
    {
        if (Process[i] != 0)
        {
            TCHAR ProcName[MAX_PATH] = TEXT("unknown process");
            HANDLE hProcess = OpenProcess(PROCESS_QUERY_INFORMATION | PROCESS_VM_READ, FALSE, Process[i]);

            if (NULL != hProcess) 
            {
                HMODULE hMod; //Адрес модуля
                DWORD BytesN;

                if (EnumProcessModules(hProcess, &hMod, sizeof(hMod),
                    &BytesN))
                {
                    GetModuleBaseName(hProcess, hMod, ProcName,
                        sizeof(ProcName) / sizeof(TCHAR));
                }
            }
            wprintf(TEXT("PID: %d \t%s\n"), Process[i], ProcName);

            CloseHandle(hProcess);
        }
    }

}


int main()
{
    int num = 1;
    if (num == 1) main1();
    else if (num == 2) main2();
    else printf("Pass\n");
}