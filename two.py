
# import psutil
 
# mem_usage = psutil.virtual_memory()

# print(f"Free: {mem_usage.percent}%")
# print(f"Total: {mem_usage.total/(1024**3):.2f}G")
# print(f"Used: {mem_usage.used/(1024**3):.2f}G")
import subprocess

ppp = 61826

def get_cpu_percent(PID):
    result = subprocess.run(['ps', '-p', f'{PID}', '-o', '%cpu'], stdout=subprocess.PIPE)
    a = result.stdout[8:11]
    return a.decode()

