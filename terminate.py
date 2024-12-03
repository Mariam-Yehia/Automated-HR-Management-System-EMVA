import psutil
import socket

def find_processes_using_port(port):
    processes = []
    for proc in psutil.process_iter(['pid', 'name', 'connections']):
        for conn in proc.info['connections']:
            if conn.laddr.port == port:
                processes.append(proc)
    return processes

def terminate_processes(processes):
    for proc in processes:
        try:
            proc.terminate()
            proc.wait(timeout=3)
            print(f'Terminated process {proc.info["pid"]} ({proc.info["name"]})')
        except psutil.NoSuchProcess:
            print(f'Process {proc.info["pid"]} no longer exists')
        except psutil.AccessDenied:
            print(f'Access denied to terminate process {proc.info["pid"]} ({proc.info["name"]})')
        except psutil.TimeoutExpired:
            print(f'Failed to terminate process {proc.info["pid"]} ({proc.info["name"]}) in time')

def main():
    port = 3000
    processes = find_processes_using_port(port)
    if not processes:
        print(f'No processes found using port {port}')
    else:
        print(f'Found {len(processes)} process(es) using port {port}')
        terminate_processes(processes)

if __name__ == '__main__':
    main()
