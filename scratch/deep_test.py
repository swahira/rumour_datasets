import os
import subprocess
import json
import time

BASE_DIR = "../data/master_suite"

def run_rumour(path):
    # Using absolute path to rumour binary to avoid cargo overhead in every call
    bin_path = "./target/debug/rumour"
    cmd = f"{bin_path} run {path} --json"
    start = time.time()
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        duration = (time.time() - start) * 1000 # ms
        
        json_str = result.stdout.strip()
        if not json_str:
            return {"success": False, "error": "No JSON output", "duration": duration, "passed": 0, "failed": 1}
            
        try:
            data = json.loads(json_str)
        except json.JSONDecodeError:
            # Try finding JSON in output
            lines = result.stdout.splitlines()
            data = None
            for line in reversed(lines):
                if line.strip().startswith("{") and line.strip().endswith("}"):
                    data = json.loads(line.strip())
                    break
            if not data:
                return {"success": False, "error": "Invalid JSON", "duration": duration, "passed": 0, "failed": 1}

        failed_list = data.get("failed", [])
        return {
            "success": len(failed_list) == 0 and data.get("error") is None,
            "total": data.get("total_requests", 0),
            "passed": len(data.get("successful", [])),
            "failed": len(failed_list),
            "duration": duration,
            "report_time": data.get("total_time_ms", 0)
        }
    except Exception as e:
        return {"success": False, "error": str(e), "duration": (time.time() - start) * 1000, "passed": 0, "failed": 1}

def main():
    # Build first
    print("Building Rumour...")
    subprocess.run("cargo build", shell=True)
    
    results = []

    # 1. Entire Workspace
    print("Testing Entire Workspace...")
    res = run_rumour(BASE_DIR)
    results.append(["Entire Workspace", "N/A", "PASS" if res["success"] else "FAIL", res.get("passed", 0), res.get("failed", 0), f"{res['duration']:.2f}ms"])

    # 2. Each Collection
    collections = sorted([d for d in os.listdir(BASE_DIR) if os.path.isdir(os.path.join(BASE_DIR, d))])
    for col in collections:
        if col.startswith("."): continue
        print(f"Testing Collection: {col}...")
        col_path = os.path.join(BASE_DIR, col)
        res = run_rumour(col_path)
        results.append([f"Collection: {col}", "N/A", "PASS" if res["success"] else "FAIL", res.get("passed", 0), res.get("failed", 0), f"{res['duration']:.2f}ms"])

        # 3. Each Request in Collection
        files = sorted([f for f in os.listdir(col_path) if f.endswith(".toml") and not f.endswith(".env.toml") and f != "collection.toml"])
        for f in files:
            req_path = os.path.join(col_path, f)
            res = run_rumour(req_path)
            results.append(["", f, "PASS" if res["success"] else "FAIL", res.get("passed", 0), res.get("failed", 0), f"{res['duration']:.2f}ms"])

    # Generate Markdown Table
    report = "# Rumour CLI In-Depth Performance Report\n\n"
    report += "| Scope | Item | Status | Passed | Failed | Duration |\n"
    report += "| :--- | :--- | :--- | :--- | :--- | :--- |\n"
    for r in results:
        report += f"| {r[0]} | {r[1]} | {r[2]} | {r[3]} | {r[4]} | {r[5]} |\n"

    with open("deep_report.md", "w") as f:
        f.write(report)
    print("Report generated: deep_report.md")

if __name__ == "__main__":
    main()
