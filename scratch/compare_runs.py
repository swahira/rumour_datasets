import json

def analyze(file_path):
    with open(file_path, 'r') as f:
        # Find the start of the JSON object in case there's terminal noise
        content = f.read()
        start = content.find('{')
        data = json.loads(content[start:])
    
    results = {}
    # Results is a dictionary { node_path: { status, reason, ... } }
    raw_results = data.get('results', {})
    for node, info in raw_results.items():
        results[node] = {
            'status': info['status'],
            'reason': str(info.get('reason', 'N/A'))
        }
    return results

seq = analyze('sequential_results.json')
par = analyze('parallel_results.json')

all_nodes = set(seq.keys()) | set(par.keys())

print(f"{'Node':<60} | {'Sequential':<20} | {'Parallel':<20}")
print("-" * 110)

drift_count = 0
for node in sorted(all_nodes):
    s = seq.get(node, {'status': 'MISSING', 'reason': ''})
    p = par.get(node, {'status': 'MISSING', 'reason': ''})
    
    if s['status'] != p['status']:
        drift_count += 1
        s_str = f"{s['status']} ({s['reason'][:12]})"
        p_str = f"{p['status']} ({p['reason'][:12]})"
        print(f"{node:<60} | {s_str:<20} | {p_str:<20}")

print("-" * 110)
print(f"Total Drift: {drift_count} nodes changed status.")

