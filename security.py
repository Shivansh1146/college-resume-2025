import subprocess

def run_command():
    user_input = input("Enter command: ")
subprocess.run(user_input.split(), capture_output=True, text=True, check=True)
