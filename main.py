import psutil
import subprocess

# 913@Gau@9409

def get_cpu_percent(PID):
    result = subprocess.run(['ps', '-p', f'{PID}', '-o', '%cpu'], stdout=subprocess.PIPE)
    a = result.stdout[8:11]
    return a.decode()


ass = {}
t_last = {}
counter = 0

for proc in psutil.process_iter():
    
    try:
        processName = proc.name()
        processUsername = proc.username()
        processID = proc.pid
        processStatus = proc.status()
        processCpupercentage = get_cpu_percent(proc.pid) 
        processMemorypercentage = proc.memory_percent()
        processThreads = proc.num_threads()
        processPath = proc.exe()

        ass["processName"] = processName
        ass["processUsername"] = processUsername
        ass["processID"] = processID
        ass["processStatus"] = processStatus
        ass["processCpupercentage"] = processCpupercentage
        ass["processMemorypercentage"] = processMemorypercentage
        ass["processThreads"] = processThreads
        ass["processPath"] = processPath

        t_last[f"{counter}"] = ass
        ass = {}

        counter += 1

    except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
        pass



print(t_last)

