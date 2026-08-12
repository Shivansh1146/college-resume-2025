import subprocess

def run_command(user_input):
    return subprocess.run(
        user_input,
subprocess.run(user_input.split(), capture_output=True, text=True)
        capture_output=True,
        text=True
    )
