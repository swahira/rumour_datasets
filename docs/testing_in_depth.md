
## advanced_stress/1_race_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/race"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/1_race_node_1.toml
DEBUG: Resolved Request for 1_race_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_1)
DEBUG: Resolved Request for 1_race_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_1)
DEBUG: Resolved Request for 1_race_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1520ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/1_race_node_1.toml
  Reason: HTTP 404
```

---

## advanced_stress/1_race_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/race"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/1_race_node_2.toml
DEBUG: Resolved Request for 1_race_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_2)
DEBUG: Resolved Request for 1_race_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_2)
DEBUG: Resolved Request for 1_race_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/race
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/race (1_race_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1531ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/1_race_node_2.toml
  Reason: HTTP 404
```

---

## advanced_stress/2_backoff_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/retry-backoff?id=stress-run-1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/2_backoff_node_1.toml
DEBUG: Resolved Request for 2_backoff_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_1)
DEBUG: Resolved Request for 2_backoff_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_1)
DEBUG: Resolved Request for 2_backoff_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/2_backoff_node_1.toml
  Reason: HTTP 404
```

---

## advanced_stress/2_backoff_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/retry-backoff?id=stress-run-1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/2_backoff_node_2.toml
DEBUG: Resolved Request for 2_backoff_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_2)
DEBUG: Resolved Request for 2_backoff_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_2)
DEBUG: Resolved Request for 2_backoff_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/2_backoff_node_2.toml
  Reason: HTTP 404
```

---

## advanced_stress/2_backoff_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/retry-backoff?id=stress-run-1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/2_backoff_node_3.toml
DEBUG: Resolved Request for 2_backoff_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_3)
DEBUG: Resolved Request for 2_backoff_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_3)
DEBUG: Resolved Request for 2_backoff_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/retry-backoff?id=stress-run-1 (2_backoff_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/2_backoff_node_3.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_1.toml
DEBUG: Resolved Request for 3_quota_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_1)
DEBUG: Resolved Request for 3_quota_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_1)
DEBUG: Resolved Request for 3_quota_node_1:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_1.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_2.toml
DEBUG: Resolved Request for 3_quota_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_2)
DEBUG: Resolved Request for 3_quota_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_2)
DEBUG: Resolved Request for 3_quota_node_2:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_2.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_3.toml
DEBUG: Resolved Request for 3_quota_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_3)
DEBUG: Resolved Request for 3_quota_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_3)
DEBUG: Resolved Request for 3_quota_node_3:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_3.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_4.toml
DEBUG: Resolved Request for 3_quota_node_4:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_4)
DEBUG: Resolved Request for 3_quota_node_4:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_4)
DEBUG: Resolved Request for 3_quota_node_4:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_4)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_4.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_5.toml
DEBUG: Resolved Request for 3_quota_node_5:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_5)
DEBUG: Resolved Request for 3_quota_node_5:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_5)
DEBUG: Resolved Request for 3_quota_node_5:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_5)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1530ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_5.toml
  Reason: HTTP 404
```

---

## advanced_stress/3_quota_node_6.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quota?id=user-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/advanced_stress/3_quota_node_6.toml
DEBUG: Resolved Request for 3_quota_node_6:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_6)
DEBUG: Resolved Request for 3_quota_node_6:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_6)
DEBUG: Resolved Request for 3_quota_node_6:
  URL: http://localhost:3000/api/v2/advanced-stress/quota?id=user-99
RUNNING: GET http://localhost:3000/api/v2/advanced-stress/quota?id=user-99 (3_quota_node_6)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/advanced_stress/3_quota_node_6.toml
  Reason: HTTP 404
```

---

## async/1_start_task.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/task"

[extract]
taskId = "task_id"
pollUrl = "header.Location"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/async/1_start_task.toml
DEBUG: Resolved Request for 1_start_task:
  URL: http://localhost:3000/api/v2/async/task
RUNNING: POST http://localhost:3000/api/v2/async/task (1_start_task)
  SET: 1_start_task.taskId = task-1778322246766
  SET: 1starttask.taskId = task-1778322246766
  SET: 1_start_task.taskId = task-1778322246766
  SET: 1_start_task.taskId = task-1778322246766
  SET: taskId = task-1778322246766
  SET: 1_start_task.task_id = task-1778322246766
  SET: 1starttask.task_id = task-1778322246766
  SET: 1_start_task.task_id = task-1778322246766
  SET: 1_start_task.task_id = task-1778322246766
  SET: task_id = task-1778322246766
  SET: task.task_id = task-1778322246766
  SET: task.task_id = task-1778322246766
  SET: task.task_id = task-1778322246766
  SET: task.task_id = task-1778322246766
  SET: task_id = task-1778322246766
  SET: 1_start_task.1_start_task.task_id = task-1778322246766
  SET: 1starttask.1_start_task.task_id = task-1778322246766
  SET: 1_start_task.1_start_task.task_id = task-1778322246766
  SET: 1_start_task.1_start_task.task_id = task-1778322246766
  SET: 1_start_task.task_id = task-1778322246766
  SET: task.1_start_task.task_id = task-1778322246766
  SET: task.1_start_task.task_id = task-1778322246766
  SET: task.1_start_task.task_id = task-1778322246766
  SET: task.1_start_task.task_id = task-1778322246766
  SET: 1_start_task.task_id = task-1778322246766
Running: data/master_suite/async/1_start_task.toml → PASS
```

---

## async/2_poll_status.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/status/{{taskId}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/async/2_poll_status.toml
DEBUG: Resolved Request for 1_start_task:
  URL: http://localhost:3000/api/v2/async/task
RUNNING: POST http://localhost:3000/api/v2/async/task (1_start_task)
  SET: 1_start_task.taskId = task-1778322246797
  SET: 1starttask.taskId = task-1778322246797
  SET: 1_start_task.taskId = task-1778322246797
  SET: 1_start_task.taskId = task-1778322246797
  SET: taskId = task-1778322246797
  SET: 1_start_task.1_start_task.task_id = task-1778322246797
  SET: 1starttask.1_start_task.task_id = task-1778322246797
  SET: 1_start_task.1_start_task.task_id = task-1778322246797
  SET: 1_start_task.1_start_task.task_id = task-1778322246797
  SET: 1_start_task.task_id = task-1778322246797
  SET: task.1_start_task.task_id = task-1778322246797
  SET: task.1_start_task.task_id = task-1778322246797
  SET: task.1_start_task.task_id = task-1778322246797
  SET: task.1_start_task.task_id = task-1778322246797
  SET: 1_start_task.task_id = task-1778322246797
  SET: 1_start_task.task_id = task-1778322246797
  SET: 1starttask.task_id = task-1778322246797
  SET: 1_start_task.task_id = task-1778322246797
  SET: 1_start_task.task_id = task-1778322246797
  SET: task_id = task-1778322246797
  SET: task.task_id = task-1778322246797
  SET: task.task_id = task-1778322246797
  SET: task.task_id = task-1778322246797
  SET: task.task_id = task-1778322246797
  SET: task_id = task-1778322246797
DEBUG: Resolved Request for 2_poll_status:
  URL: http://localhost:3000/api/v2/async/status/task-1778322246797
RUNNING: GET http://localhost:3000/api/v2/async/status/task-1778322246797 (2_poll_status)
  SET: 2_poll_status.status = pending
  SET: 2pollstatus.status = pending
  SET: 2_poll_status.status = pending
  SET: 2_poll_status.status = pending
  SET: status = pending
  SET: status.status = pending
  SET: status.status = pending
  SET: status.status = pending
  SET: status.status = pending
  SET: status = pending
  SET: 2_poll_status.2_poll_status.status = pending
  SET: 2pollstatus.2_poll_status.status = pending
  SET: 2_poll_status.2_poll_status.status = pending
  SET: 2_poll_status.2_poll_status.status = pending
  SET: 2_poll_status.status = pending
  SET: status.2_poll_status.status = pending
  SET: status.2_poll_status.status = pending
  SET: status.2_poll_status.status = pending
  SET: status.2_poll_status.status = pending
  SET: 2_poll_status.status = pending

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          11ms
```

---

## auth/1_admin_login.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"username": "superadmin", "password": "admin-secret-99", "role": "admin"}
"""

[extract]
auth_admin_token = "token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/auth/1_admin_login.toml
DEBUG: Resolved Request for 1_admin_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (1_admin_login)
  SET: 1_admin_login.auth_admin_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1adminlogin.auth_admin_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.auth_admin_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.auth_admin_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: auth_admin_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1adminlogin.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1adminlogin.1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
  SET: 1_admin_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzgzMjIyNDYsImV4cCI6MTc3ODMyNTg0Nn0.wFRH7XNLR1bx7_IYWH2EAUGPCgZWBCMJ5ctooKHCN9A
Running: data/master_suite/auth/1_admin_login.toml → PASS
```

---

## auth/1_login.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"username": "admin", "password": "password123"}
"""

[extract]
# Namespaced variable
auth_token = "token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/auth/1_login.toml
DEBUG: Resolved Request for 1_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (1_login)
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
Running: data/master_suite/auth/1_login.toml → PASS
```

---

## auth/2_validate.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/auth/validate"

[headers]
# Using namespaced variable
Authorization = "{{auth_prefix}} {{auth_token}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/auth/2_validate.toml
DEBUG: Resolved Request for 1_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (1_login)
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: auth_token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
  SET: 1_login.accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
DEBUG: Resolved Request for 2_validate:
  URL: http://localhost:3000/api/v2/auth/validate
  Header: Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlhdCI6MTc3ODMyMjI0NiwiZXhwIjoxNzc4MzI1ODQ2fQ.fFGx8HktDtcEUjZ5fE8tbuuoA06Gj3Y029u-BdoSvWQ
RUNNING: GET http://localhost:3000/api/v2/auth/validate (2_validate)
  SET: 2_validate.valid = true
  SET: 2validate.valid = true
  SET: 2_validate.valid = true
  SET: 2_validate.valid = true
  SET: valid = true
  SET: validate.valid = true
  SET: validate.valid = true
  SET: validate.valid = true
  SET: validate.valid = true
  SET: valid = true
  SET: 2_validate.2_validate.valid = true
  SET: 2validate.2_validate.valid = true
  SET: 2_validate.2_validate.valid = true
  SET: 2_validate.2_validate.valid = true
  SET: 2_validate.valid = true
  SET: validate.2_validate.valid = true
  SET: validate.2_validate.valid = true
  SET: validate.2_validate.valid = true
  SET: validate.2_validate.valid = true
  SET: 2_validate.valid = true

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          11ms
```

---

## auth/3_fail_login.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/auth/login"

[body]
type = "json"
raw = """
{"username": "hacker", "password": "fail"}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/auth/3_fail_login.toml
DEBUG: Resolved Request for 3_fail_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (3_fail_login)
DEBUG: Resolved Request for 3_fail_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (3_fail_login)
DEBUG: Resolved Request for 3_fail_login:
  URL: http://localhost:3000/api/v2/auth/login
RUNNING: POST http://localhost:3000/api/v2/auth/login (3_fail_login)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1532ms

Failure Intelligence:
- Node: data/master_suite/auth/3_fail_login.toml
  Reason: HTTP 401
```

---

## auth/4_expired_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/auth/expired-token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/auth/4_expired_test.toml
DEBUG: Resolved Request for 4_expired_test:
  URL: http://localhost:3000/api/v2/auth/expired-token
RUNNING: GET http://localhost:3000/api/v2/auth/expired-token (4_expired_test)
DEBUG: Resolved Request for 4_expired_test:
  URL: http://localhost:3000/api/v2/auth/expired-token
RUNNING: GET http://localhost:3000/api/v2/auth/expired-token (4_expired_test)
DEBUG: Resolved Request for 4_expired_test:
  URL: http://localhost:3000/api/v2/auth/expired-token
RUNNING: GET http://localhost:3000/api/v2/auth/expired-token (4_expired_test)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/auth/4_expired_test.toml
  Reason: HTTP 401
```

---

## batch/1_bulk_operations.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/bulk"

[body]
type = "json"
raw = """
[
  { "action": "create", "name": "Bulk_1" },
  { "action": "fail", "name": "Bulk_Fail" },
  { "action": "create", "name": "Bulk_2" }
]
"""

[extract]
firstBulkId = "results.0.id"
lastBulkId = "results.2.id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/batch/1_bulk_operations.toml
DEBUG: Resolved Request for 1_bulk_operations:
  URL: http://localhost:3000/api/v2/batch/bulk
RUNNING: POST http://localhost:3000/api/v2/batch/bulk (1_bulk_operations)
  SET: 1_bulk_operations.1_bulk_operations.id = bulk-0-1778322250048
  SET: 1bulkoperations.1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.id = bulk-0-1778322250048
  SET: bulk.1_bulk_operations.id = bulk-0-1778322250048
  SET: bulk.1_bulk_operations.id = bulk-0-1778322250048
  SET: bulk.1_bulk_operations.id = bulk-0-1778322250048
  SET: bulk.1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.status = 201
  SET: 1bulkoperations.status = 201
  SET: 1_bulk_operations.status = 201
  SET: 1_bulk_operations.status = 201
  SET: status = 201
  SET: bulk.status = 201
  SET: bulk.status = 201
  SET: bulk.status = 201
  SET: bulk.status = 201
  SET: status = 201
  SET: 1_bulk_operations.id = bulk-0-1778322250048
  SET: 1bulkoperations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.id = bulk-0-1778322250048
  SET: 1_bulk_operations.id = bulk-0-1778322250048
  SET: id = bulk-0-1778322250048
  SET: bulk.id = bulk-0-1778322250048
  SET: bulk.id = bulk-0-1778322250048
  SET: bulk.id = bulk-0-1778322250048
  SET: bulk.id = bulk-0-1778322250048
  SET: id = bulk-0-1778322250048
  SET: bulk_id = bulk-0-1778322250048
  SET: 1_bulk_operations.1_bulk_operations.status = 201
  SET: 1bulkoperations.1_bulk_operations.status = 201
  SET: 1_bulk_operations.1_bulk_operations.status = 201
  SET: 1_bulk_operations.1_bulk_operations.status = 201
  SET: 1_bulk_operations.status = 201
  SET: bulk.1_bulk_operations.status = 201
  SET: bulk.1_bulk_operations.status = 201
  SET: bulk.1_bulk_operations.status = 201
  SET: bulk.1_bulk_operations.status = 201
  SET: 1_bulk_operations.status = 201
Running: data/master_suite/batch/1_bulk_operations.toml → PASS
```

---

## binary_adv/1_fetch_framed.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/framed-data"

[headers]
Accept = "application/x-rumour-framed"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/binary_adv/1_fetch_framed.toml
DEBUG: Resolved Request for 1_fetch_framed:
  URL: http://localhost:3000/api/v2/binary-adv/framed-data
  Header: Accept: application/x-rumour-framed
RUNNING: GET http://localhost:3000/api/v2/binary-adv/framed-data (1_fetch_framed)
DEBUG: Resolved Request for 1_fetch_framed:
  URL: http://localhost:3000/api/v2/binary-adv/framed-data
  Header: Accept: application/x-rumour-framed
RUNNING: GET http://localhost:3000/api/v2/binary-adv/framed-data (1_fetch_framed)
DEBUG: Resolved Request for 1_fetch_framed:
  URL: http://localhost:3000/api/v2/binary-adv/framed-data
  Header: Accept: application/x-rumour-framed
RUNNING: GET http://localhost:3000/api/v2/binary-adv/framed-data (1_fetch_framed)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1533ms

Failure Intelligence:
- Node: data/master_suite/binary_adv/1_fetch_framed.toml
  Reason: HTTP 404
```

---

## binary_adv/2_fetch_related.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/related"

[headers]
Accept = "multipart/related"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/binary_adv/2_fetch_related.toml
DEBUG: Resolved Request for 2_fetch_related:
  URL: http://localhost:3000/api/v2/binary-adv/related
  Header: Accept: multipart/related
RUNNING: GET http://localhost:3000/api/v2/binary-adv/related (2_fetch_related)
DEBUG: Resolved Request for 2_fetch_related:
  URL: http://localhost:3000/api/v2/binary-adv/related
  Header: Accept: multipart/related
RUNNING: GET http://localhost:3000/api/v2/binary-adv/related (2_fetch_related)
DEBUG: Resolved Request for 2_fetch_related:
  URL: http://localhost:3000/api/v2/binary-adv/related
  Header: Accept: multipart/related
RUNNING: GET http://localhost:3000/api/v2/binary-adv/related (2_fetch_related)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1530ms

Failure Intelligence:
- Node: data/master_suite/binary_adv/2_fetch_related.toml
  Reason: HTTP 404
```

---

## binary_deep/1_fetch_pdf.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/pdf"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/binary_deep/1_fetch_pdf.toml
DEBUG: Resolved Request for 1_fetch_pdf:
  URL: http://localhost:3000/api/v2/binary-deep/pdf
RUNNING: GET http://localhost:3000/api/v2/binary-deep/pdf (1_fetch_pdf)
DEBUG: Resolved Request for 1_fetch_pdf:
  URL: http://localhost:3000/api/v2/binary-deep/pdf
RUNNING: GET http://localhost:3000/api/v2/binary-deep/pdf (1_fetch_pdf)
DEBUG: Resolved Request for 1_fetch_pdf:
  URL: http://localhost:3000/api/v2/binary-deep/pdf
RUNNING: GET http://localhost:3000/api/v2/binary-deep/pdf (1_fetch_pdf)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/binary_deep/1_fetch_pdf.toml
  Reason: HTTP 404
```

---

## binary_deep/2_fetch_image.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/image"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/binary_deep/2_fetch_image.toml
DEBUG: Resolved Request for 2_fetch_image:
  URL: http://localhost:3000/api/v2/binary-deep/image
RUNNING: GET http://localhost:3000/api/v2/binary-deep/image (2_fetch_image)
DEBUG: Resolved Request for 2_fetch_image:
  URL: http://localhost:3000/api/v2/binary-deep/image
RUNNING: GET http://localhost:3000/api/v2/binary-deep/image (2_fetch_image)
DEBUG: Resolved Request for 2_fetch_image:
  URL: http://localhost:3000/api/v2/binary-deep/image
RUNNING: GET http://localhost:3000/api/v2/binary-deep/image (2_fetch_image)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1523ms

Failure Intelligence:
- Node: data/master_suite/binary_deep/2_fetch_image.toml
  Reason: HTTP 404
```

---

## binary_merge/1_fetch_composite.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/composite"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/binary_merge/1_fetch_composite.toml
DEBUG: Resolved Request for 1_fetch_composite:
  URL: http://localhost:3000/api/v2/binary-merge/composite
RUNNING: GET http://localhost:3000/api/v2/binary-merge/composite (1_fetch_composite)
DEBUG: Resolved Request for 1_fetch_composite:
  URL: http://localhost:3000/api/v2/binary-merge/composite
RUNNING: GET http://localhost:3000/api/v2/binary-merge/composite (1_fetch_composite)
DEBUG: Resolved Request for 1_fetch_composite:
  URL: http://localhost:3000/api/v2/binary-merge/composite
RUNNING: GET http://localhost:3000/api/v2/binary-merge/composite (1_fetch_composite)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/binary_merge/1_fetch_composite.toml
  Reason: HTTP 404
```

---

## blocking/1_start_heavy_work.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/start"

[extract]
activeWorkId = "work_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/blocking/1_start_heavy_work.toml
DEBUG: Resolved Request for 1_start_heavy_work:
  URL: http://localhost:3000/api/v2/blocking/start
RUNNING: POST http://localhost:3000/api/v2/blocking/start (1_start_heavy_work)
  SET: 1_start_heavy_work.activeWorkId = work-1778322257820
  SET: 1startheavywork.activeWorkId = work-1778322257820
  SET: 1_start_heavy_work.activeWorkId = work-1778322257820
  SET: 1_start_heavy_work.activeWorkId = work-1778322257820
  SET: activeWorkId = work-1778322257820
  SET: 1_start_heavy_work.work_id = work-1778322257820
  SET: 1startheavywork.work_id = work-1778322257820
  SET: 1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.work_id = work-1778322257820
  SET: work_id = work-1778322257820
  SET: start.work_id = work-1778322257820
  SET: start.work_id = work-1778322257820
  SET: start.work_id = work-1778322257820
  SET: start.work_id = work-1778322257820
  SET: work_id = work-1778322257820
  SET: 1_start_heavy_work.1_start_heavy_work.work_id = work-1778322257820
  SET: 1startheavywork.1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.work_id = work-1778322257820
  SET: start.1_start_heavy_work.work_id = work-1778322257820
  SET: start.1_start_heavy_work.work_id = work-1778322257820
  SET: start.1_start_heavy_work.work_id = work-1778322257820
  SET: start.1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.work_id = work-1778322257820
  SET: 1_start_heavy_work.status = Accepted
  SET: 1startheavywork.status = Accepted
  SET: 1_start_heavy_work.status = Accepted
  SET: 1_start_heavy_work.status = Accepted
  SET: status = Accepted
  SET: start.status = Accepted
  SET: start.status = Accepted
  SET: start.status = Accepted
  SET: start.status = Accepted
  SET: status = Accepted
  SET: 1_start_heavy_work.1_start_heavy_work.status = Accepted
  SET: 1startheavywork.1_start_heavy_work.status = Accepted
  SET: 1_start_heavy_work.1_start_heavy_work.status = Accepted
  SET: 1_start_heavy_work.1_start_heavy_work.status = Accepted
  SET: 1_start_heavy_work.status = Accepted
  SET: start.1_start_heavy_work.status = Accepted
  SET: start.1_start_heavy_work.status = Accepted
  SET: start.1_start_heavy_work.status = Accepted
  SET: start.1_start_heavy_work.status = Accepted
  SET: 1_start_heavy_work.status = Accepted
Running: data/master_suite/blocking/1_start_heavy_work.toml → PASS
```

---

## blocking/2_check_lock.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/check"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/blocking/2_check_lock.toml
DEBUG: Resolved Request for 2_check_lock:
  URL: http://localhost:3000/api/v2/blocking/check
RUNNING: GET http://localhost:3000/api/v2/blocking/check (2_check_lock)
DEBUG: Resolved Request for 2_check_lock:
  URL: http://localhost:3000/api/v2/blocking/check
RUNNING: GET http://localhost:3000/api/v2/blocking/check (2_check_lock)
DEBUG: Resolved Request for 2_check_lock:
  URL: http://localhost:3000/api/v2/blocking/check
RUNNING: GET http://localhost:3000/api/v2/blocking/check (2_check_lock)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/blocking/2_check_lock.toml
  Reason: HTTP 423
```

---

## cache/1_initial_fetch.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[extract]
etag = "header.ETag"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cache/1_initial_fetch.toml
DEBUG: Resolved Request for 1_initial_fetch:
  URL: http://localhost:3000/api/v2/cache/data
RUNNING: GET http://localhost:3000/api/v2/cache/data (1_initial_fetch)
  SET: 1_initial_fetch.id = cached-001
  SET: 1initialfetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: id = cached-001
  SET: data_id = cached-001
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1initialfetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
Running: data/master_suite/cache/1_initial_fetch.toml → PASS
```

---

## cache/2_conditional_fetch.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
If-None-Match = "{{etag}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cache/2_conditional_fetch.toml
DEBUG: Resolved Request for 1_initial_fetch:
  URL: http://localhost:3000/api/v2/cache/data
RUNNING: GET http://localhost:3000/api/v2/cache/data (1_initial_fetch)
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1initialfetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: data.1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: 1initialfetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: 1_initial_fetch.id = cached-001
  SET: id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: data.id = cached-001
  SET: id = cached-001
  SET: data_id = cached-001

Workflow Execution Summary:
Total Requests:      2
Successful:          1
Failed:              1
Skipped:             0
Total Time:          1529ms

Failure Intelligence:
- Node: data/master_suite/cache/2_conditional_fetch.toml
  Reason: Variable resolution failed in 2_conditional_fetch: Variable resolution failed: Missing environment variable(s): etag. Define them in any .env.toml file or runtime overrides.
```

---

## chaos/1_chaos_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_1.toml
DEBUG: Resolved Request for 1_chaos_node_1:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_1)
DEBUG: Resolved Request for 1_chaos_node_1:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_1)
DEBUG: Resolved Request for 1_chaos_node_1:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1530ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_1.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_10.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_10.toml
DEBUG: Resolved Request for 1_chaos_node_10:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_10)
DEBUG: Resolved Request for 1_chaos_node_10:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_10)
DEBUG: Resolved Request for 1_chaos_node_10:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_10)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1523ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_10.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_2.toml
DEBUG: Resolved Request for 1_chaos_node_2:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_2)
DEBUG: Resolved Request for 1_chaos_node_2:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_2)
DEBUG: Resolved Request for 1_chaos_node_2:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1514ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_2.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_3.toml
DEBUG: Resolved Request for 1_chaos_node_3:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_3)
DEBUG: Resolved Request for 1_chaos_node_3:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_3)
DEBUG: Resolved Request for 1_chaos_node_3:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1521ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_3.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_4.toml
DEBUG: Resolved Request for 1_chaos_node_4:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_4)
DEBUG: Resolved Request for 1_chaos_node_4:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_4)
DEBUG: Resolved Request for 1_chaos_node_4:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_4)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_4.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_5.toml
DEBUG: Resolved Request for 1_chaos_node_5:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_5)
DEBUG: Resolved Request for 1_chaos_node_5:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_5)
DEBUG: Resolved Request for 1_chaos_node_5:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_5)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_5.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_6.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_6.toml
DEBUG: Resolved Request for 1_chaos_node_6:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_6)
DEBUG: Resolved Request for 1_chaos_node_6:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_6)
DEBUG: Resolved Request for 1_chaos_node_6:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_6)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_6.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_7.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_7.toml
DEBUG: Resolved Request for 1_chaos_node_7:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_7)
DEBUG: Resolved Request for 1_chaos_node_7:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_7)
DEBUG: Resolved Request for 1_chaos_node_7:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_7)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1523ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_7.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_8.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_8.toml
DEBUG: Resolved Request for 1_chaos_node_8:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_8)
DEBUG: Resolved Request for 1_chaos_node_8:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_8)
DEBUG: Resolved Request for 1_chaos_node_8:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_8)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_8.toml
  Reason: HTTP 404
```

---

## chaos/1_chaos_node_9.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/random"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/chaos/1_chaos_node_9.toml
DEBUG: Resolved Request for 1_chaos_node_9:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_9)
DEBUG: Resolved Request for 1_chaos_node_9:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_9)
DEBUG: Resolved Request for 1_chaos_node_9:
  URL: http://localhost:3000/api/v2/chaos/random
RUNNING: GET http://localhost:3000/api/v2/chaos/random (1_chaos_node_9)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/chaos/1_chaos_node_9.toml
  Reason: HTTP 404
```

---

## compatibility/1_postman_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/postman-env"

[headers]
Postman-Token = "token-uuid-123"
x-postman-env-var = "{{postman_env}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/compatibility/1_postman_test.toml
DEBUG: Resolved Request for 1_postman_test:
  URL: http://localhost:3000/api/v2/compatibility/postman-env
  Header: x-postman-env-var: prod
  Header: Postman-Token: token-uuid-123
RUNNING: GET http://localhost:3000/api/v2/compatibility/postman-env (1_postman_test)
Running: data/master_suite/compatibility/1_postman_test.toml → PASS
```

---

## compatibility/2_bruno_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/bruno-vars"

[headers]
x-bruno-var = "{{bruno_var}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/compatibility/2_bruno_test.toml
DEBUG: Resolved Request for 2_bruno_test:
  URL: http://localhost:3000/api/v2/compatibility/bruno-vars
  Header: x-bruno-var: bruno-secret-123
RUNNING: GET http://localhost:3000/api/v2/compatibility/bruno-vars (2_bruno_test)
Running: data/master_suite/compatibility/2_bruno_test.toml → PASS
```

---

## cookies/1_login_cookie.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/cookies/login"

[body]
type = "json"
raw = """
{"user": "cookie_monster"}
"""

[headers]
X-Session-ID = "{{test_session_id}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cookies/1_login_cookie.toml
DEBUG: Resolved Request for 1_login_cookie:
  URL: http://localhost:3000/api/v2/cookies/login
  Header: X-Session-ID: sess-888
RUNNING: POST http://localhost:3000/api/v2/cookies/login (1_login_cookie)
Running: data/master_suite/cookies/1_login_cookie.toml → PASS
```

---

## cookies/2_check_profile.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/cookies/profile"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cookies/2_check_profile.toml
DEBUG: Resolved Request for 2_check_profile:
  URL: http://localhost:3000/api/v2/cookies/profile
RUNNING: GET http://localhost:3000/api/v2/cookies/profile (2_check_profile)
DEBUG: Resolved Request for 2_check_profile:
  URL: http://localhost:3000/api/v2/cookies/profile
RUNNING: GET http://localhost:3000/api/v2/cookies/profile (2_check_profile)
DEBUG: Resolved Request for 2_check_profile:
  URL: http://localhost:3000/api/v2/cookies/profile
RUNNING: GET http://localhost:3000/api/v2/cookies/profile (2_check_profile)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1522ms

Failure Intelligence:
- Node: data/master_suite/cookies/2_check_profile.toml
  Reason: HTTP 401
```

---

## cookies/3_logout.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/cookies/logout"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cookies/3_logout.toml
DEBUG: Resolved Request for 3_logout:
  URL: http://localhost:3000/api/v2/cookies/logout
RUNNING: POST http://localhost:3000/api/v2/cookies/logout (3_logout)
Running: data/master_suite/cookies/3_logout.toml → PASS
```

---

## cors/1_cors_preflight.toml

### File Content

```toml
[request]
method = "OPTIONS"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://trusted-rumour.com"
Access-Control-Request-Method = "GET"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cors/1_cors_preflight.toml
DEBUG: Resolved Request for 1_cors_preflight:
  URL: http://localhost:3000/api/v2/cors/restricted
  Header: Access-Control-Request-Method: GET
  Header: Origin: http://trusted-rumour.com
RUNNING: OPTIONS http://localhost:3000/api/v2/cors/restricted (1_cors_preflight)
Running: data/master_suite/cors/1_cors_preflight.toml → PASS
```

---

## cors/2_cors_valid.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://trusted-rumour.com"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cors/2_cors_valid.toml
DEBUG: Resolved Request for 2_cors_valid:
  URL: http://localhost:3000/api/v2/cors/restricted
  Header: Origin: http://trusted-rumour.com
RUNNING: GET http://localhost:3000/api/v2/cors/restricted (2_cors_valid)
Running: data/master_suite/cors/2_cors_valid.toml → PASS
```

---

## cors/3_cors_violation.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/restricted"

[headers]
Origin = "http://malicious-site.com"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/cors/3_cors_violation.toml
DEBUG: Resolved Request for 3_cors_violation:
  URL: http://localhost:3000/api/v2/cors/restricted
  Header: Origin: http://malicious-site.com
RUNNING: GET http://localhost:3000/api/v2/cors/restricted (3_cors_violation)
DEBUG: Resolved Request for 3_cors_violation:
  URL: http://localhost:3000/api/v2/cors/restricted
  Header: Origin: http://malicious-site.com
RUNNING: GET http://localhost:3000/api/v2/cors/restricted (3_cors_violation)
DEBUG: Resolved Request for 3_cors_violation:
  URL: http://localhost:3000/api/v2/cors/restricted
  Header: Origin: http://malicious-site.com
RUNNING: GET http://localhost:3000/api/v2/cors/restricted (3_cors_violation)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1537ms

Failure Intelligence:
- Node: data/master_suite/cors/3_cors_violation.toml
  Reason: HTTP 403
```

---

## data_adv/1_fetch_geo.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/geo"

[extract]
firstPointLong = "features.0.geometry.coordinates.0"
firstPointLat = "features.0.geometry.coordinates.1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/data_adv/1_fetch_geo.toml
DEBUG: Resolved Request for 1_fetch_geo:
  URL: http://localhost:3000/api/v2/data-adv/geo
RUNNING: GET http://localhost:3000/api/v2/data-adv/geo (1_fetch_geo)
DEBUG: Resolved Request for 1_fetch_geo:
  URL: http://localhost:3000/api/v2/data-adv/geo
RUNNING: GET http://localhost:3000/api/v2/data-adv/geo (1_fetch_geo)
DEBUG: Resolved Request for 1_fetch_geo:
  URL: http://localhost:3000/api/v2/data-adv/geo
RUNNING: GET http://localhost:3000/api/v2/data-adv/geo (1_fetch_geo)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/data_adv/1_fetch_geo.toml
  Reason: HTTP 404
```

---

## data_adv/2_fetch_msgpack.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/msgpack"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/data_adv/2_fetch_msgpack.toml
DEBUG: Resolved Request for 2_fetch_msgpack:
  URL: http://localhost:3000/api/v2/data-adv/msgpack
RUNNING: GET http://localhost:3000/api/v2/data-adv/msgpack (2_fetch_msgpack)
DEBUG: Resolved Request for 2_fetch_msgpack:
  URL: http://localhost:3000/api/v2/data-adv/msgpack
RUNNING: GET http://localhost:3000/api/v2/data-adv/msgpack (2_fetch_msgpack)
DEBUG: Resolved Request for 2_fetch_msgpack:
  URL: http://localhost:3000/api/v2/data-adv/msgpack
RUNNING: GET http://localhost:3000/api/v2/data-adv/msgpack (2_fetch_msgpack)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1522ms

Failure Intelligence:
- Node: data/master_suite/data_adv/2_fetch_msgpack.toml
  Reason: HTTP 404
```

---

## data_diff/1_fetch_suffix.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/suffix-range"

[headers]
Range = "bytes=-50"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/data_diff/1_fetch_suffix.toml
DEBUG: Resolved Request for 1_fetch_suffix:
  URL: http://localhost:3000/api/v2/data-diff/suffix-range
  Header: Range: bytes=-50
RUNNING: GET http://localhost:3000/api/v2/data-diff/suffix-range (1_fetch_suffix)
DEBUG: Resolved Request for 1_fetch_suffix:
  URL: http://localhost:3000/api/v2/data-diff/suffix-range
  Header: Range: bytes=-50
RUNNING: GET http://localhost:3000/api/v2/data-diff/suffix-range (1_fetch_suffix)
DEBUG: Resolved Request for 1_fetch_suffix:
  URL: http://localhost:3000/api/v2/data-diff/suffix-range
  Header: Range: bytes=-50
RUNNING: GET http://localhost:3000/api/v2/data-diff/suffix-range (1_fetch_suffix)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1542ms

Failure Intelligence:
- Node: data/master_suite/data_diff/1_fetch_suffix.toml
  Reason: HTTP 404
```

---

## data_diff/2_fetch_delta.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/delta"

[headers]
If-None-Match = "abc"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/data_diff/2_fetch_delta.toml
DEBUG: Resolved Request for 2_fetch_delta:
  URL: http://localhost:3000/api/v2/data-diff/delta
  Header: If-None-Match: abc
RUNNING: GET http://localhost:3000/api/v2/data-diff/delta (2_fetch_delta)
DEBUG: Resolved Request for 2_fetch_delta:
  URL: http://localhost:3000/api/v2/data-diff/delta
  Header: If-None-Match: abc
RUNNING: GET http://localhost:3000/api/v2/data-diff/delta (2_fetch_delta)
DEBUG: Resolved Request for 2_fetch_delta:
  URL: http://localhost:3000/api/v2/data-diff/delta
  Header: If-None-Match: abc
RUNNING: GET http://localhost:3000/api/v2/data-diff/delta (2_fetch_delta)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1532ms

Failure Intelligence:
- Node: data/master_suite/data_diff/2_fetch_delta.toml
  Reason: HTTP 404
```

---

## datetime/1_get_timestamps.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/now"

[extract]
isoNow = "iso"
unixNow = "unix"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/datetime/1_get_timestamps.toml
DEBUG: Resolved Request for 1_get_timestamps:
  URL: http://localhost:3000/api/v2/datetime/now
RUNNING: GET http://localhost:3000/api/v2/datetime/now (1_get_timestamps)
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: 1gettimestamps.unixNow = 1778322285
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: unixNow = 1778322285
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.880Z
  SET: 1gettimestamps.isoNow = 2026-05-09T10:24:45.880Z
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.880Z
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.880Z
  SET: isoNow = 2026-05-09T10:24:45.880Z
Running: data/master_suite/datetime/1_get_timestamps.toml → PASS
```

---

## datetime/2_validate_date.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "deadline": "{{isoNow}}"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/datetime/2_validate_date.toml
DEBUG: Resolved Request for 1_get_timestamps:
  URL: http://localhost:3000/api/v2/datetime/now
RUNNING: GET http://localhost:3000/api/v2/datetime/now (1_get_timestamps)
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: 1gettimestamps.unixNow = 1778322285
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: 1_get_timestamps.unixNow = 1778322285
  SET: unixNow = 1778322285
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.910Z
  SET: 1gettimestamps.isoNow = 2026-05-09T10:24:45.910Z
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.910Z
  SET: 1_get_timestamps.isoNow = 2026-05-09T10:24:45.910Z
  SET: isoNow = 2026-05-09T10:24:45.910Z
DEBUG: Resolved Request for 2_validate_date:
  URL: http://localhost:3000/api/v2/datetime/validate
RUNNING: POST http://localhost:3000/api/v2/datetime/validate (2_validate_date)
  SET: 2_validate_date.status = Accepted
  SET: 2validatedate.status = Accepted
  SET: 2_validate_date.status = Accepted
  SET: 2_validate_date.status = Accepted
  SET: status = Accepted
  SET: validate.status = Accepted
  SET: validate.status = Accepted
  SET: validate.status = Accepted
  SET: validate.status = Accepted
  SET: status = Accepted
  SET: 2_validate_date.2_validate_date.status = Accepted
  SET: 2validatedate.2_validate_date.status = Accepted
  SET: 2_validate_date.2_validate_date.status = Accepted
  SET: 2_validate_date.2_validate_date.status = Accepted
  SET: 2_validate_date.status = Accepted
  SET: validate.2_validate_date.status = Accepted
  SET: validate.2_validate_date.status = Accepted
  SET: validate.2_validate_date.status = Accepted
  SET: validate.2_validate_date.status = Accepted
  SET: 2_validate_date.status = Accepted

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          10ms
```

---

## docs/1_fetch_swagger.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/swagger.json"

[extract]
apiTitle = "info.title"
apiVersion = "info.version"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/docs/1_fetch_swagger.toml
DEBUG: Resolved Request for 1_fetch_swagger:
  URL: http://localhost:3000/api/v2/docs/swagger.json
RUNNING: GET http://localhost:3000/api/v2/docs/swagger.json (1_fetch_swagger)
  SET: 1_fetch_swagger.apiTitle = Rumour Master API
  SET: 1fetchswagger.apiTitle = Rumour Master API
  SET: 1_fetch_swagger.apiTitle = Rumour Master API
  SET: 1_fetch_swagger.apiTitle = Rumour Master API
  SET: apiTitle = Rumour Master API
  SET: 1_fetch_swagger.apiVersion = 2.0.0
  SET: 1fetchswagger.apiVersion = 2.0.0
  SET: 1_fetch_swagger.apiVersion = 2.0.0
  SET: 1_fetch_swagger.apiVersion = 2.0.0
  SET: apiVersion = 2.0.0
  SET: 1_fetch_swagger.version = 2.0.0
  SET: 1fetchswagger.version = 2.0.0
  SET: 1_fetch_swagger.version = 2.0.0
  SET: 1_fetch_swagger.version = 2.0.0
  SET: version = 2.0.0
  SET: swagger.json.version = 2.0.0
  SET: swaggerjson.version = 2.0.0
  SET: swagger.json.version = 2.0.0
  SET: swagger.json.version = 2.0.0
  SET: version = 2.0.0
  SET: 1_fetch_swagger.1_fetch_swagger.version = 2.0.0
  SET: 1fetchswagger.1_fetch_swagger.version = 2.0.0
  SET: 1_fetch_swagger.1_fetch_swagger.version = 2.0.0
  SET: 1_fetch_swagger.1_fetch_swagger.version = 2.0.0
  SET: 1_fetch_swagger.version = 2.0.0
  SET: swagger.json.1_fetch_swagger.version = 2.0.0
  SET: swaggerjson.1_fetch_swagger.version = 2.0.0
  SET: swagger.json.1_fetch_swagger.version = 2.0.0
  SET: swagger.json.1_fetch_swagger.version = 2.0.0
  SET: 1_fetch_swagger.version = 2.0.0
Running: data/master_suite/docs/1_fetch_swagger.toml → PASS
```

---

## docs/2_validate_schema.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/validate-schema"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/docs/2_validate_schema.toml
DEBUG: Resolved Request for 2_validate_schema:
  URL: http://localhost:3000/api/v2/docs/validate-schema
RUNNING: GET http://localhost:3000/api/v2/docs/validate-schema (2_validate_schema)
  SET: 2_validate_schema.2_validate_schema.status = Schema is valid
  SET: 2validateschema.2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.status = Schema is valid
  SET: validate-schema.2_validate_schema.status = Schema is valid
  SET: validateschema.2_validate_schema.status = Schema is valid
  SET: validate-schema.2_validate_schema.status = Schema is valid
  SET: validate-schema.2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.status = Schema is valid
  SET: 2validateschema.status = Schema is valid
  SET: 2_validate_schema.status = Schema is valid
  SET: 2_validate_schema.status = Schema is valid
  SET: status = Schema is valid
  SET: validate-schema.status = Schema is valid
  SET: validateschema.status = Schema is valid
  SET: validate-schema.status = Schema is valid
  SET: validate-schema.status = Schema is valid
  SET: status = Schema is valid
Running: data/master_suite/docs/2_validate_schema.toml → PASS
```

---

## ecommerce/1_list_products.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/ecommerce/products?page=1&limit=2"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/ecommerce/1_list_products.toml
DEBUG: Resolved Request for 1_list_products:
  URL: http://localhost:3000/api/v2/ecommerce/products?page=1&limit=2
RUNNING: GET http://localhost:3000/api/v2/ecommerce/products?page=1&limit=2 (1_list_products)
  SET: 1_list_products.id = 1
  SET: 1listproducts.id = 1
  SET: 1_list_products.id = 1
  SET: 1_list_products.id = 1
  SET: id = 1
  SET: products.id = 1
  SET: products.id = 1
  SET: products.id = 1
  SET: products.id = 1
  SET: id = 1
  SET: products_id = 1
  SET: 1_list_products.1_list_products.id = 1
  SET: 1listproducts.1_list_products.id = 1
  SET: 1_list_products.1_list_products.id = 1
  SET: 1_list_products.1_list_products.id = 1
  SET: 1_list_products.id = 1
  SET: products.1_list_products.id = 1
  SET: products.1_list_products.id = 1
  SET: products.1_list_products.id = 1
  SET: products.1_list_products.id = 1
  SET: 1_list_products.id = 1
Running: data/master_suite/ecommerce/1_list_products.toml → PASS
```

---

## ecommerce/2_create_product.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/ecommerce/products"

[body]
type = "json"
raw = """
{
  "name": "Super Fluid CPU",
  "price": 899
}
"""

[extract]
eco_new_product_id = "id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/ecommerce/2_create_product.toml
DEBUG: Resolved Request for 2_create_product:
  URL: http://localhost:3000/api/v2/ecommerce/products
RUNNING: POST http://localhost:3000/api/v2/ecommerce/products (2_create_product)
  SET: 2_create_product.eco_new_product_id = 23
  SET: 2createproduct.eco_new_product_id = 23
  SET: 2_create_product.eco_new_product_id = 23
  SET: 2_create_product.eco_new_product_id = 23
  SET: eco_new_product_id = 23
  SET: 2_create_product.2_create_product.id = 23
  SET: 2createproduct.2_create_product.id = 23
  SET: 2_create_product.2_create_product.id = 23
  SET: 2_create_product.2_create_product.id = 23
  SET: 2_create_product.id = 23
  SET: products.2_create_product.id = 23
  SET: products.2_create_product.id = 23
  SET: products.2_create_product.id = 23
  SET: products.2_create_product.id = 23
  SET: 2_create_product.id = 23
  SET: 2_create_product.id = 23
  SET: 2createproduct.id = 23
  SET: 2_create_product.id = 23
  SET: 2_create_product.id = 23
  SET: id = 23
  SET: products.id = 23
  SET: products.id = 23
  SET: products.id = 23
  SET: products.id = 23
  SET: id = 23
  SET: products_id = 23
Running: data/master_suite/ecommerce/2_create_product.toml → PASS
```

---

## ecommerce/3_place_order.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/ecommerce/orders"

[headers]
X-Idempotency-Key = "key-{{eco_new_product_id}}"

[body]
type = "json"
raw = """
{
  "product_id": "{{eco_new_product_id}}",
  "qty": 1
}
"""

[extract]
eco_order_id = "id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/ecommerce/3_place_order.toml
DEBUG: Resolved Request for 2_create_product:
  URL: http://localhost:3000/api/v2/ecommerce/products
RUNNING: POST http://localhost:3000/api/v2/ecommerce/products (2_create_product)
  SET: 2_create_product.eco_new_product_id = 24
  SET: 2createproduct.eco_new_product_id = 24
  SET: 2_create_product.eco_new_product_id = 24
  SET: 2_create_product.eco_new_product_id = 24
  SET: eco_new_product_id = 24
  SET: 2_create_product.id = 24
  SET: 2createproduct.id = 24
  SET: 2_create_product.id = 24
  SET: 2_create_product.id = 24
  SET: id = 24
  SET: products.id = 24
  SET: products.id = 24
  SET: products.id = 24
  SET: products.id = 24
  SET: id = 24
  SET: products_id = 24
  SET: 2_create_product.2_create_product.id = 24
  SET: 2createproduct.2_create_product.id = 24
  SET: 2_create_product.2_create_product.id = 24
  SET: 2_create_product.2_create_product.id = 24
  SET: 2_create_product.id = 24
  SET: products.2_create_product.id = 24
  SET: products.2_create_product.id = 24
  SET: products.2_create_product.id = 24
  SET: products.2_create_product.id = 24
  SET: 2_create_product.id = 24
DEBUG: Resolved Request for 3_place_order:
  URL: http://localhost:3000/api/v2/ecommerce/orders
  Header: X-Idempotency-Key: key-24
RUNNING: POST http://localhost:3000/api/v2/ecommerce/orders (3_place_order)
  SET: 3_place_order.eco_order_id = 16
  SET: 3placeorder.eco_order_id = 16
  SET: 3_place_order.eco_order_id = 16
  SET: 3_place_order.eco_order_id = 16
  SET: eco_order_id = 16
  SET: 3_place_order.id = 16
  SET: 3placeorder.id = 16
  SET: 3_place_order.id = 16
  SET: 3_place_order.id = 16
  SET: id = 16
  SET: orders.id = 16
  SET: orders.id = 16
  SET: orders.id = 16
  SET: orders.id = 16
  SET: id = 16
  SET: orders_id = 16
  SET: 3_place_order.product_id = 24
  SET: 3placeorder.product_id = 24
  SET: 3_place_order.product_id = 24
  SET: 3_place_order.product_id = 24
  SET: product_id = 24
  SET: orders.product_id = 24
  SET: orders.product_id = 24
  SET: orders.product_id = 24
  SET: orders.product_id = 24
  SET: product_id = 24
  SET: 3_place_order.3_place_order.product_id = 24
  SET: 3placeorder.3_place_order.product_id = 24
  SET: 3_place_order.3_place_order.product_id = 24
  SET: 3_place_order.3_place_order.product_id = 24
  SET: 3_place_order.product_id = 24
  SET: orders.3_place_order.product_id = 24
  SET: orders.3_place_order.product_id = 24
  SET: orders.3_place_order.product_id = 24
  SET: orders.3_place_order.product_id = 24
  SET: 3_place_order.product_id = 24
  SET: 3_place_order.3_place_order.id = 16
  SET: 3placeorder.3_place_order.id = 16
  SET: 3_place_order.3_place_order.id = 16
  SET: 3_place_order.3_place_order.id = 16
  SET: 3_place_order.id = 16
  SET: orders.3_place_order.id = 16
  SET: orders.3_place_order.id = 16
  SET: orders.3_place_order.id = 16
  SET: orders.3_place_order.id = 16
  SET: 3_place_order.id = 16

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          12ms
```

---

## ecommerce/4_invalid_data.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/ecommerce/validate"

[body]
type = "json"
raw = """
{
  "email": "bad-email",
  "quantity": 0
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/ecommerce/4_invalid_data.toml
DEBUG: Resolved Request for 4_invalid_data:
  URL: http://localhost:3000/api/v2/ecommerce/validate
RUNNING: POST http://localhost:3000/api/v2/ecommerce/validate (4_invalid_data)
DEBUG: Resolved Request for 4_invalid_data:
  URL: http://localhost:3000/api/v2/ecommerce/validate
RUNNING: POST http://localhost:3000/api/v2/ecommerce/validate (4_invalid_data)
DEBUG: Resolved Request for 4_invalid_data:
  URL: http://localhost:3000/api/v2/ecommerce/validate
RUNNING: POST http://localhost:3000/api/v2/ecommerce/validate (4_invalid_data)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1541ms

Failure Intelligence:
- Node: data/master_suite/ecommerce/4_invalid_data.toml
  Reason: HTTP 422
```

---

## environment/1_fetch_vault_secret.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/vault/secret"

[extract]
vaultSecret = "secret"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/environment/1_fetch_vault_secret.toml
DEBUG: Resolved Request for 1_fetch_vault_secret:
  URL: http://localhost:3000/api/v2/environment/vault/secret
RUNNING: GET http://localhost:3000/api/v2/environment/vault/secret (1_fetch_vault_secret)
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: 1fetchvaultsecret.vaultSecret = secret_29638538
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: vaultSecret = secret_29638538
Running: data/master_suite/environment/1_fetch_vault_secret.toml → PASS
```

---

## environment/2_validate_vault.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/validate-secret"

[body]
type = "json"
raw = """
{
  "secret": "{{vaultSecret}}"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/environment/2_validate_vault.toml
DEBUG: Resolved Request for 1_fetch_vault_secret:
  URL: http://localhost:3000/api/v2/environment/vault/secret
RUNNING: GET http://localhost:3000/api/v2/environment/vault/secret (1_fetch_vault_secret)
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: 1fetchvaultsecret.vaultSecret = secret_29638538
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: 1_fetch_vault_secret.vaultSecret = secret_29638538
  SET: vaultSecret = secret_29638538
DEBUG: Resolved Request for 2_validate_vault:
  URL: http://localhost:3000/api/v2/environment/validate-secret
RUNNING: POST http://localhost:3000/api/v2/environment/validate-secret (2_validate_vault)
  SET: 2_validate_vault.2_validate_vault.status = valid
  SET: 2validatevault.2_validate_vault.status = valid
  SET: 2_validate_vault.2_validate_vault.status = valid
  SET: 2_validate_vault.2_validate_vault.status = valid
  SET: 2_validate_vault.status = valid
  SET: validate-secret.2_validate_vault.status = valid
  SET: validatesecret.2_validate_vault.status = valid
  SET: validate-secret.2_validate_vault.status = valid
  SET: validate-secret.2_validate_vault.status = valid
  SET: 2_validate_vault.status = valid
  SET: 2_validate_vault.identity = vault-app-01
  SET: 2validatevault.identity = vault-app-01
  SET: 2_validate_vault.identity = vault-app-01
  SET: 2_validate_vault.identity = vault-app-01
  SET: identity = vault-app-01
  SET: validate-secret.identity = vault-app-01
  SET: validatesecret.identity = vault-app-01
  SET: validate-secret.identity = vault-app-01
  SET: validate-secret.identity = vault-app-01
  SET: identity = vault-app-01
  SET: 2_validate_vault.status = valid
  SET: 2validatevault.status = valid
  SET: 2_validate_vault.status = valid
  SET: 2_validate_vault.status = valid
  SET: status = valid
  SET: validate-secret.status = valid
  SET: validatesecret.status = valid
  SET: validate-secret.status = valid
  SET: validate-secret.status = valid
  SET: status = valid
  SET: 2_validate_vault.2_validate_vault.identity = vault-app-01
  SET: 2validatevault.2_validate_vault.identity = vault-app-01
  SET: 2_validate_vault.2_validate_vault.identity = vault-app-01
  SET: 2_validate_vault.2_validate_vault.identity = vault-app-01
  SET: 2_validate_vault.identity = vault-app-01
  SET: validate-secret.2_validate_vault.identity = vault-app-01
  SET: validatesecret.2_validate_vault.identity = vault-app-01
  SET: validate-secret.2_validate_vault.identity = vault-app-01
  SET: validate-secret.2_validate_vault.identity = vault-app-01
  SET: 2_validate_vault.identity = vault-app-01

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          10ms
```

---

## environment/3_tenant_check.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/tenant/tenant-ABC-123/config"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/environment/3_tenant_check.toml
DEBUG: Resolved Request for 3_tenant_check:
  URL: http://localhost:3000/api/v2/environment/tenant/tenant-ABC-123/config
RUNNING: GET http://localhost:3000/api/v2/environment/tenant/tenant-ABC-123/config (3_tenant_check)
  SET: 3_tenant_check.status = isolated
  SET: 3tenantcheck.status = isolated
  SET: 3_tenant_check.status = isolated
  SET: 3_tenant_check.status = isolated
  SET: status = isolated
  SET: config.status = isolated
  SET: config.status = isolated
  SET: config.status = isolated
  SET: config.status = isolated
  SET: status = isolated
  SET: 3_tenant_check.3_tenant_check.status = isolated
  SET: 3tenantcheck.3_tenant_check.status = isolated
  SET: 3_tenant_check.3_tenant_check.status = isolated
  SET: 3_tenant_check.3_tenant_check.status = isolated
  SET: 3_tenant_check.status = isolated
  SET: config.3_tenant_check.status = isolated
  SET: config.3_tenant_check.status = isolated
  SET: config.3_tenant_check.status = isolated
  SET: config.3_tenant_check.status = isolated
  SET: 3_tenant_check.status = isolated
Running: data/master_suite/environment/3_tenant_check.toml → PASS
```

---

## exhaustion/1_load_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_1.toml
DEBUG: Resolved Request for 1_load_node_1:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_1)
  SET: 1_load_node_1.status = ok
  SET: 1loadnode1.status = ok
  SET: 1_load_node_1.status = ok
  SET: 1_load_node_1.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_1.1_load_node_1.status = ok
  SET: 1loadnode1.1_load_node_1.status = ok
  SET: 1_load_node_1.1_load_node_1.status = ok
  SET: 1_load_node_1.1_load_node_1.status = ok
  SET: 1_load_node_1.status = ok
  SET: heavy-load.1_load_node_1.status = ok
  SET: heavyload.1_load_node_1.status = ok
  SET: heavy-load.1_load_node_1.status = ok
  SET: heavy-load.1_load_node_1.status = ok
  SET: 1_load_node_1.status = ok
Running: data/master_suite/exhaustion/1_load_node_1.toml → PASS
```

---

## exhaustion/1_load_node_10.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_10.toml
DEBUG: Resolved Request for 1_load_node_10:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_10)
  SET: 1_load_node_10.status = ok
  SET: 1loadnode10.status = ok
  SET: 1_load_node_10.status = ok
  SET: 1_load_node_10.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_10.1_load_node_10.status = ok
  SET: 1loadnode10.1_load_node_10.status = ok
  SET: 1_load_node_10.1_load_node_10.status = ok
  SET: 1_load_node_10.1_load_node_10.status = ok
  SET: 1_load_node_10.status = ok
  SET: heavy-load.1_load_node_10.status = ok
  SET: heavyload.1_load_node_10.status = ok
  SET: heavy-load.1_load_node_10.status = ok
  SET: heavy-load.1_load_node_10.status = ok
  SET: 1_load_node_10.status = ok
Running: data/master_suite/exhaustion/1_load_node_10.toml → PASS
```

---

## exhaustion/1_load_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_2.toml
DEBUG: Resolved Request for 1_load_node_2:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_2)
  SET: 1_load_node_2.status = ok
  SET: 1loadnode2.status = ok
  SET: 1_load_node_2.status = ok
  SET: 1_load_node_2.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_2.1_load_node_2.status = ok
  SET: 1loadnode2.1_load_node_2.status = ok
  SET: 1_load_node_2.1_load_node_2.status = ok
  SET: 1_load_node_2.1_load_node_2.status = ok
  SET: 1_load_node_2.status = ok
  SET: heavy-load.1_load_node_2.status = ok
  SET: heavyload.1_load_node_2.status = ok
  SET: heavy-load.1_load_node_2.status = ok
  SET: heavy-load.1_load_node_2.status = ok
  SET: 1_load_node_2.status = ok
Running: data/master_suite/exhaustion/1_load_node_2.toml → PASS
```

---

## exhaustion/1_load_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_3.toml
DEBUG: Resolved Request for 1_load_node_3:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_3)
  SET: 1_load_node_3.status = ok
  SET: 1loadnode3.status = ok
  SET: 1_load_node_3.status = ok
  SET: 1_load_node_3.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_3.1_load_node_3.status = ok
  SET: 1loadnode3.1_load_node_3.status = ok
  SET: 1_load_node_3.1_load_node_3.status = ok
  SET: 1_load_node_3.1_load_node_3.status = ok
  SET: 1_load_node_3.status = ok
  SET: heavy-load.1_load_node_3.status = ok
  SET: heavyload.1_load_node_3.status = ok
  SET: heavy-load.1_load_node_3.status = ok
  SET: heavy-load.1_load_node_3.status = ok
  SET: 1_load_node_3.status = ok
Running: data/master_suite/exhaustion/1_load_node_3.toml → PASS
```

---

## exhaustion/1_load_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_4.toml
DEBUG: Resolved Request for 1_load_node_4:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_4)
  SET: 1_load_node_4.status = ok
  SET: 1loadnode4.status = ok
  SET: 1_load_node_4.status = ok
  SET: 1_load_node_4.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_4.1_load_node_4.status = ok
  SET: 1loadnode4.1_load_node_4.status = ok
  SET: 1_load_node_4.1_load_node_4.status = ok
  SET: 1_load_node_4.1_load_node_4.status = ok
  SET: 1_load_node_4.status = ok
  SET: heavy-load.1_load_node_4.status = ok
  SET: heavyload.1_load_node_4.status = ok
  SET: heavy-load.1_load_node_4.status = ok
  SET: heavy-load.1_load_node_4.status = ok
  SET: 1_load_node_4.status = ok
Running: data/master_suite/exhaustion/1_load_node_4.toml → PASS
```

---

## exhaustion/1_load_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_5.toml
DEBUG: Resolved Request for 1_load_node_5:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_5)
  SET: 1_load_node_5.status = ok
  SET: 1loadnode5.status = ok
  SET: 1_load_node_5.status = ok
  SET: 1_load_node_5.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_5.1_load_node_5.status = ok
  SET: 1loadnode5.1_load_node_5.status = ok
  SET: 1_load_node_5.1_load_node_5.status = ok
  SET: 1_load_node_5.1_load_node_5.status = ok
  SET: 1_load_node_5.status = ok
  SET: heavy-load.1_load_node_5.status = ok
  SET: heavyload.1_load_node_5.status = ok
  SET: heavy-load.1_load_node_5.status = ok
  SET: heavy-load.1_load_node_5.status = ok
  SET: 1_load_node_5.status = ok
Running: data/master_suite/exhaustion/1_load_node_5.toml → PASS
```

---

## exhaustion/1_load_node_6.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_6.toml
DEBUG: Resolved Request for 1_load_node_6:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_6)
  SET: 1_load_node_6.status = ok
  SET: 1loadnode6.status = ok
  SET: 1_load_node_6.status = ok
  SET: 1_load_node_6.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_6.1_load_node_6.status = ok
  SET: 1loadnode6.1_load_node_6.status = ok
  SET: 1_load_node_6.1_load_node_6.status = ok
  SET: 1_load_node_6.1_load_node_6.status = ok
  SET: 1_load_node_6.status = ok
  SET: heavy-load.1_load_node_6.status = ok
  SET: heavyload.1_load_node_6.status = ok
  SET: heavy-load.1_load_node_6.status = ok
  SET: heavy-load.1_load_node_6.status = ok
  SET: 1_load_node_6.status = ok
Running: data/master_suite/exhaustion/1_load_node_6.toml → PASS
```

---

## exhaustion/1_load_node_7.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_7.toml
DEBUG: Resolved Request for 1_load_node_7:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_7)
  SET: 1_load_node_7.1_load_node_7.status = ok
  SET: 1loadnode7.1_load_node_7.status = ok
  SET: 1_load_node_7.1_load_node_7.status = ok
  SET: 1_load_node_7.1_load_node_7.status = ok
  SET: 1_load_node_7.status = ok
  SET: heavy-load.1_load_node_7.status = ok
  SET: heavyload.1_load_node_7.status = ok
  SET: heavy-load.1_load_node_7.status = ok
  SET: heavy-load.1_load_node_7.status = ok
  SET: 1_load_node_7.status = ok
  SET: 1_load_node_7.status = ok
  SET: 1loadnode7.status = ok
  SET: 1_load_node_7.status = ok
  SET: 1_load_node_7.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
Running: data/master_suite/exhaustion/1_load_node_7.toml → PASS
```

---

## exhaustion/1_load_node_8.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_8.toml
DEBUG: Resolved Request for 1_load_node_8:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_8)
  SET: 1_load_node_8.status = ok
  SET: 1loadnode8.status = ok
  SET: 1_load_node_8.status = ok
  SET: 1_load_node_8.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
  SET: 1_load_node_8.1_load_node_8.status = ok
  SET: 1loadnode8.1_load_node_8.status = ok
  SET: 1_load_node_8.1_load_node_8.status = ok
  SET: 1_load_node_8.1_load_node_8.status = ok
  SET: 1_load_node_8.status = ok
  SET: heavy-load.1_load_node_8.status = ok
  SET: heavyload.1_load_node_8.status = ok
  SET: heavy-load.1_load_node_8.status = ok
  SET: heavy-load.1_load_node_8.status = ok
  SET: 1_load_node_8.status = ok
Running: data/master_suite/exhaustion/1_load_node_8.toml → PASS
```

---

## exhaustion/1_load_node_9.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/heavy-load"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/1_load_node_9.toml
DEBUG: Resolved Request for 1_load_node_9:
  URL: http://localhost:3000/api/v2/exhaustion/heavy-load
RUNNING: GET http://localhost:3000/api/v2/exhaustion/heavy-load (1_load_node_9)
  SET: 1_load_node_9.1_load_node_9.status = ok
  SET: 1loadnode9.1_load_node_9.status = ok
  SET: 1_load_node_9.1_load_node_9.status = ok
  SET: 1_load_node_9.1_load_node_9.status = ok
  SET: 1_load_node_9.status = ok
  SET: heavy-load.1_load_node_9.status = ok
  SET: heavyload.1_load_node_9.status = ok
  SET: heavy-load.1_load_node_9.status = ok
  SET: heavy-load.1_load_node_9.status = ok
  SET: 1_load_node_9.status = ok
  SET: 1_load_node_9.status = ok
  SET: 1loadnode9.status = ok
  SET: 1_load_node_9.status = ok
  SET: 1_load_node_9.status = ok
  SET: status = ok
  SET: heavy-load.status = ok
  SET: heavyload.status = ok
  SET: heavy-load.status = ok
  SET: heavy-load.status = ok
  SET: status = ok
Running: data/master_suite/exhaustion/1_load_node_9.toml → PASS
```

---

## exhaustion/2_spike_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/2_spike_node_1.toml
DEBUG: Resolved Request for 2_spike_node_1:
  URL: http://localhost:3000/api/v2/exhaustion/gc-spike
RUNNING: GET http://localhost:3000/api/v2/exhaustion/gc-spike (2_spike_node_1)
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2spikenode1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: gc-spike.2_spike_node_1.status = ok
  SET: gcspike.2_spike_node_1.status = ok
  SET: gc-spike.2_spike_node_1.status = ok
  SET: gc-spike.2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2spikenode1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: status = ok
  SET: gc-spike.status = ok
  SET: gcspike.status = ok
  SET: gc-spike.status = ok
  SET: gc-spike.status = ok
  SET: status = ok
Running: data/master_suite/exhaustion/2_spike_node_1.toml → PASS
```

---

## exhaustion/2_spike_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/2_spike_node_2.toml
DEBUG: Resolved Request for 2_spike_node_2:
  URL: http://localhost:3000/api/v2/exhaustion/gc-spike
RUNNING: GET http://localhost:3000/api/v2/exhaustion/gc-spike (2_spike_node_2)
  SET: 2_spike_node_2.status = ok
  SET: 2spikenode2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: status = ok
  SET: gc-spike.status = ok
  SET: gcspike.status = ok
  SET: gc-spike.status = ok
  SET: gc-spike.status = ok
  SET: status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2spikenode2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: gc-spike.2_spike_node_2.status = ok
  SET: gcspike.2_spike_node_2.status = ok
  SET: gc-spike.2_spike_node_2.status = ok
  SET: gc-spike.2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
Running: data/master_suite/exhaustion/2_spike_node_2.toml → PASS
```

---

## exhaustion/2_spike_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/2_spike_node_3.toml
DEBUG: Resolved Request for 2_spike_node_3:
  URL: http://localhost:3000/api/v2/exhaustion/gc-spike
RUNNING: GET http://localhost:3000/api/v2/exhaustion/gc-spike (2_spike_node_3)
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2spikenode3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: gc-spike.2_spike_node_3.status = ok
  SET: gcspike.2_spike_node_3.status = ok
  SET: gc-spike.2_spike_node_3.status = ok
  SET: gc-spike.2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: 2spikenode3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: status = ok
  SET: gc-spike.status = ok
  SET: gcspike.status = ok
  SET: gc-spike.status = ok
  SET: gc-spike.status = ok
  SET: status = ok
Running: data/master_suite/exhaustion/2_spike_node_3.toml → PASS
```

---

## exhaustion/2_spike_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/2_spike_node_4.toml
DEBUG: Resolved Request for 2_spike_node_4:
  URL: http://localhost:3000/api/v2/exhaustion/gc-spike
RUNNING: GET http://localhost:3000/api/v2/exhaustion/gc-spike (2_spike_node_4)
  SET: 2_spike_node_4.status = ok
  SET: 2spikenode4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: status = ok
  SET: gc-spike.status = ok
  SET: gcspike.status = ok
  SET: gc-spike.status = ok
  SET: gc-spike.status = ok
  SET: status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2spikenode4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: gc-spike.2_spike_node_4.status = ok
  SET: gcspike.2_spike_node_4.status = ok
  SET: gc-spike.2_spike_node_4.status = ok
  SET: gc-spike.2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
Running: data/master_suite/exhaustion/2_spike_node_4.toml → PASS
```

---

## exhaustion/2_spike_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gc-spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/exhaustion/2_spike_node_5.toml
DEBUG: Resolved Request for 2_spike_node_5:
  URL: http://localhost:3000/api/v2/exhaustion/gc-spike
RUNNING: GET http://localhost:3000/api/v2/exhaustion/gc-spike (2_spike_node_5)
  SET: 2_spike_node_5.2_spike_node_5.status = ok
  SET: 2spikenode5.2_spike_node_5.status = ok
  SET: 2_spike_node_5.2_spike_node_5.status = ok
  SET: 2_spike_node_5.2_spike_node_5.status = ok
  SET: 2_spike_node_5.status = ok
  SET: gc-spike.2_spike_node_5.status = ok
  SET: gcspike.2_spike_node_5.status = ok
  SET: gc-spike.2_spike_node_5.status = ok
  SET: gc-spike.2_spike_node_5.status = ok
  SET: 2_spike_node_5.status = ok
  SET: 2_spike_node_5.status = ok
  SET: 2spikenode5.status = ok
  SET: 2_spike_node_5.status = ok
  SET: 2_spike_node_5.status = ok
  SET: status = ok
  SET: gc-spike.status = ok
  SET: gcspike.status = ok
  SET: gc-spike.status = ok
  SET: gc-spike.status = ok
  SET: status = ok
Running: data/master_suite/exhaustion/2_spike_node_5.toml → PASS
```

---

## failover/1_trigger_failover.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/service?simulate_fail=true"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/failover/1_trigger_failover.toml
DEBUG: Resolved Request for 1_trigger_failover:
  URL: http://localhost:3000/api/v2/failover/service?simulate_fail=true
RUNNING: GET http://localhost:3000/api/v2/failover/service?simulate_fail=true (1_trigger_failover)
  SET: 1_trigger_failover.status = Failover Active
  SET: 1triggerfailover.status = Failover Active
  SET: 1_trigger_failover.status = Failover Active
  SET: 1_trigger_failover.status = Failover Active
  SET: status = Failover Active
  SET: service.status = Failover Active
  SET: service.status = Failover Active
  SET: service.status = Failover Active
  SET: service.status = Failover Active
  SET: status = Failover Active
  SET: 1_trigger_failover.1_trigger_failover.status = Failover Active
  SET: 1triggerfailover.1_trigger_failover.status = Failover Active
  SET: 1_trigger_failover.1_trigger_failover.status = Failover Active
  SET: 1_trigger_failover.1_trigger_failover.status = Failover Active
  SET: 1_trigger_failover.status = Failover Active
  SET: service.1_trigger_failover.status = Failover Active
  SET: service.1_trigger_failover.status = Failover Active
  SET: service.1_trigger_failover.status = Failover Active
  SET: service.1_trigger_failover.status = Failover Active
  SET: 1_trigger_failover.status = Failover Active
Running: data/master_suite/failover/1_trigger_failover.toml → PASS
```

---

## failover/2_fetch_multiplexed.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/multiplex"

[headers]
Accept = "multipart/mixed"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/failover/2_fetch_multiplexed.toml
DEBUG: Resolved Request for 2_fetch_multiplexed:
  URL: http://localhost:3000/api/v2/failover/multiplex
  Header: Accept: multipart/mixed
RUNNING: GET http://localhost:3000/api/v2/failover/multiplex (2_fetch_multiplexed)
Running: data/master_suite/failover/2_fetch_multiplexed.toml → PASS
```

---

## files/1_upload_file.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/upload"

[body]
type = "form-data"
raw = "file=@/home/bugsfounder/Documents/rumour/generators/gen_files.sh"

[extract]
file_asset_id = "file_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/files/1_upload_file.toml
DEBUG: Resolved Request for 1_upload_file:
  URL: http://localhost:3000/api/v2/files/upload
RUNNING: POST http://localhost:3000/api/v2/files/upload (1_upload_file)
  SET: 1_upload_file.file_asset_id = b0332203399e40e926be86b70f72addd
  SET: 1uploadfile.file_asset_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_asset_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_asset_id = b0332203399e40e926be86b70f72addd
  SET: file_asset_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1uploadfile.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1uploadfile.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: 1_upload_file.file_id = b0332203399e40e926be86b70f72addd
  SET: file_id = b0332203399e40e926be86b70f72addd
  SET: upload.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.file_id = b0332203399e40e926be86b70f72addd
  SET: upload.file_id = b0332203399e40e926be86b70f72addd
  SET: file_id = b0332203399e40e926be86b70f72addd
Running: data/master_suite/files/1_upload_file.toml → PASS
```

---

## files/2_binary_raw.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/binary-validate"

[body]
type = "binary"
raw = "BINARY_PAYLOAD_v3_{{random}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/files/2_binary_raw.toml
DEBUG: Resolved Request for 2_binary_raw:
  URL: http://localhost:3000/api/v2/files/binary-validate
RUNNING: POST http://localhost:3000/api/v2/files/binary-validate (2_binary_raw)
Running: data/master_suite/files/2_binary_raw.toml → PASS
```

---

## files/3_download_asset.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/download/{{file_asset_id}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/files/3_download_asset.toml
DEBUG: Resolved Request for 1_upload_file:
  URL: http://localhost:3000/api/v2/files/upload
RUNNING: POST http://localhost:3000/api/v2/files/upload (1_upload_file)
  SET: 1_upload_file.file_asset_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1uploadfile.file_asset_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_asset_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_asset_id = 5f48f13d39b335d498d58765ef9943ac
  SET: file_asset_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1uploadfile.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1uploadfile.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: upload.1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 1_upload_file.file_id = 5f48f13d39b335d498d58765ef9943ac
DEBUG: Resolved Request for 3_download_asset:
  URL: http://localhost:3000/api/v2/files/download/5f48f13d39b335d498d58765ef9943ac
RUNNING: GET http://localhost:3000/api/v2/files/download/5f48f13d39b335d498d58765ef9943ac (3_download_asset)
  SET: 3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3downloadasset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.id = 5f48f13d39b335d498d58765ef9943ac
  SET: id = 5f48f13d39b335d498d58765ef9943ac
  SET: download_id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3downloadasset.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: download.3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac
  SET: 3_download_asset.id = 5f48f13d39b335d498d58765ef9943ac

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          13ms
```

---

## formats_adv/1_fetch_cbor.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/cbor"

[headers]
Accept = "application/cbor"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/formats_adv/1_fetch_cbor.toml
DEBUG: Resolved Request for 1_fetch_cbor:
  URL: http://localhost:3000/api/v2/formats-adv/cbor
  Header: Accept: application/cbor
RUNNING: GET http://localhost:3000/api/v2/formats-adv/cbor (1_fetch_cbor)
DEBUG: Resolved Request for 1_fetch_cbor:
  URL: http://localhost:3000/api/v2/formats-adv/cbor
  Header: Accept: application/cbor
RUNNING: GET http://localhost:3000/api/v2/formats-adv/cbor (1_fetch_cbor)
DEBUG: Resolved Request for 1_fetch_cbor:
  URL: http://localhost:3000/api/v2/formats-adv/cbor
  Header: Accept: application/cbor
RUNNING: GET http://localhost:3000/api/v2/formats-adv/cbor (1_fetch_cbor)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1531ms

Failure Intelligence:
- Node: data/master_suite/formats_adv/1_fetch_cbor.toml
  Reason: HTTP 404
```

---

## formats_adv/2_fetch_bson.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/bson"

[headers]
Accept = "application/bson"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/formats_adv/2_fetch_bson.toml
DEBUG: Resolved Request for 2_fetch_bson:
  URL: http://localhost:3000/api/v2/formats-adv/bson
  Header: Accept: application/bson
RUNNING: GET http://localhost:3000/api/v2/formats-adv/bson (2_fetch_bson)
DEBUG: Resolved Request for 2_fetch_bson:
  URL: http://localhost:3000/api/v2/formats-adv/bson
  Header: Accept: application/bson
RUNNING: GET http://localhost:3000/api/v2/formats-adv/bson (2_fetch_bson)
DEBUG: Resolved Request for 2_fetch_bson:
  URL: http://localhost:3000/api/v2/formats-adv/bson
  Header: Accept: application/bson
RUNNING: GET http://localhost:3000/api/v2/formats-adv/bson (2_fetch_bson)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1533ms

Failure Intelligence:
- Node: data/master_suite/formats_adv/2_fetch_bson.toml
  Reason: HTTP 404
```

---

## formats_adv/3_fetch_secure.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/secure-content"

[extract]
contentDigest = "header.Digest"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/formats_adv/3_fetch_secure.toml
DEBUG: Resolved Request for 3_fetch_secure:
  URL: http://localhost:3000/api/v2/formats-adv/secure-content
RUNNING: GET http://localhost:3000/api/v2/formats-adv/secure-content (3_fetch_secure)
DEBUG: Resolved Request for 3_fetch_secure:
  URL: http://localhost:3000/api/v2/formats-adv/secure-content
RUNNING: GET http://localhost:3000/api/v2/formats-adv/secure-content (3_fetch_secure)
DEBUG: Resolved Request for 3_fetch_secure:
  URL: http://localhost:3000/api/v2/formats-adv/secure-content
RUNNING: GET http://localhost:3000/api/v2/formats-adv/secure-content (3_fetch_secure)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/formats_adv/3_fetch_secure.toml
  Reason: HTTP 404
```

---

## fuzzing/1_fetch_synthetic.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/synthetic?count=50"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/1_fetch_synthetic.toml
DEBUG: Resolved Request for 1_fetch_synthetic:
  URL: http://localhost:3000/api/v2/fuzzing/synthetic?count=50
RUNNING: GET http://localhost:3000/api/v2/fuzzing/synthetic?count=50 (1_fetch_synthetic)
  SET: 1_fetch_synthetic.id = 0
  SET: 1fetchsynthetic.id = 0
  SET: 1_fetch_synthetic.id = 0
  SET: 1_fetch_synthetic.id = 0
  SET: id = 0
  SET: synthetic.id = 0
  SET: synthetic.id = 0
  SET: synthetic.id = 0
  SET: synthetic.id = 0
  SET: id = 0
  SET: synthetic_id = 0
  SET: 1_fetch_synthetic.1_fetch_synthetic.id = 0
  SET: 1fetchsynthetic.1_fetch_synthetic.id = 0
  SET: 1_fetch_synthetic.1_fetch_synthetic.id = 0
  SET: 1_fetch_synthetic.1_fetch_synthetic.id = 0
  SET: 1_fetch_synthetic.id = 0
  SET: synthetic.1_fetch_synthetic.id = 0
  SET: synthetic.1_fetch_synthetic.id = 0
  SET: synthetic.1_fetch_synthetic.id = 0
  SET: synthetic.1_fetch_synthetic.id = 0
  SET: 1_fetch_synthetic.id = 0
Running: data/master_suite/fuzzing/1_fetch_synthetic.toml → PASS
```

---

## fuzzing/2_spike_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_1.toml
DEBUG: Resolved Request for 2_spike_node_1:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_1)
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2spikenode1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: spike.2_spike_node_1.status = ok
  SET: spike.2_spike_node_1.status = ok
  SET: spike.2_spike_node_1.status = ok
  SET: spike.2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2spikenode1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: 2_spike_node_1.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_1.toml → PASS
```

---

## fuzzing/2_spike_node_10.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_10.toml
DEBUG: Resolved Request for 2_spike_node_10:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_10)
  SET: 2_spike_node_10.2_spike_node_10.status = ok
  SET: 2spikenode10.2_spike_node_10.status = ok
  SET: 2_spike_node_10.2_spike_node_10.status = ok
  SET: 2_spike_node_10.2_spike_node_10.status = ok
  SET: 2_spike_node_10.status = ok
  SET: spike.2_spike_node_10.status = ok
  SET: spike.2_spike_node_10.status = ok
  SET: spike.2_spike_node_10.status = ok
  SET: spike.2_spike_node_10.status = ok
  SET: 2_spike_node_10.status = ok
  SET: 2_spike_node_10.status = ok
  SET: 2spikenode10.status = ok
  SET: 2_spike_node_10.status = ok
  SET: 2_spike_node_10.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_10.toml → PASS
```

---

## fuzzing/2_spike_node_11.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_11.toml
DEBUG: Resolved Request for 2_spike_node_11:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_11)
  SET: 2_spike_node_11.2_spike_node_11.status = ok
  SET: 2spikenode11.2_spike_node_11.status = ok
  SET: 2_spike_node_11.2_spike_node_11.status = ok
  SET: 2_spike_node_11.2_spike_node_11.status = ok
  SET: 2_spike_node_11.status = ok
  SET: spike.2_spike_node_11.status = ok
  SET: spike.2_spike_node_11.status = ok
  SET: spike.2_spike_node_11.status = ok
  SET: spike.2_spike_node_11.status = ok
  SET: 2_spike_node_11.status = ok
  SET: 2_spike_node_11.status = ok
  SET: 2spikenode11.status = ok
  SET: 2_spike_node_11.status = ok
  SET: 2_spike_node_11.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_11.toml → PASS
```

---

## fuzzing/2_spike_node_12.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_12.toml
DEBUG: Resolved Request for 2_spike_node_12:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_12)
  SET: 2_spike_node_12.2_spike_node_12.status = ok
  SET: 2spikenode12.2_spike_node_12.status = ok
  SET: 2_spike_node_12.2_spike_node_12.status = ok
  SET: 2_spike_node_12.2_spike_node_12.status = ok
  SET: 2_spike_node_12.status = ok
  SET: spike.2_spike_node_12.status = ok
  SET: spike.2_spike_node_12.status = ok
  SET: spike.2_spike_node_12.status = ok
  SET: spike.2_spike_node_12.status = ok
  SET: 2_spike_node_12.status = ok
  SET: 2_spike_node_12.status = ok
  SET: 2spikenode12.status = ok
  SET: 2_spike_node_12.status = ok
  SET: 2_spike_node_12.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_12.toml → PASS
```

---

## fuzzing/2_spike_node_13.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_13.toml
DEBUG: Resolved Request for 2_spike_node_13:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_13)
  SET: 2_spike_node_13.status = ok
  SET: 2spikenode13.status = ok
  SET: 2_spike_node_13.status = ok
  SET: 2_spike_node_13.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_13.2_spike_node_13.status = ok
  SET: 2spikenode13.2_spike_node_13.status = ok
  SET: 2_spike_node_13.2_spike_node_13.status = ok
  SET: 2_spike_node_13.2_spike_node_13.status = ok
  SET: 2_spike_node_13.status = ok
  SET: spike.2_spike_node_13.status = ok
  SET: spike.2_spike_node_13.status = ok
  SET: spike.2_spike_node_13.status = ok
  SET: spike.2_spike_node_13.status = ok
  SET: 2_spike_node_13.status = ok
Running: data/master_suite/fuzzing/2_spike_node_13.toml → PASS
```

---

## fuzzing/2_spike_node_14.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_14.toml
DEBUG: Resolved Request for 2_spike_node_14:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_14)
  SET: 2_spike_node_14.2_spike_node_14.status = ok
  SET: 2spikenode14.2_spike_node_14.status = ok
  SET: 2_spike_node_14.2_spike_node_14.status = ok
  SET: 2_spike_node_14.2_spike_node_14.status = ok
  SET: 2_spike_node_14.status = ok
  SET: spike.2_spike_node_14.status = ok
  SET: spike.2_spike_node_14.status = ok
  SET: spike.2_spike_node_14.status = ok
  SET: spike.2_spike_node_14.status = ok
  SET: 2_spike_node_14.status = ok
  SET: 2_spike_node_14.status = ok
  SET: 2spikenode14.status = ok
  SET: 2_spike_node_14.status = ok
  SET: 2_spike_node_14.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_14.toml → PASS
```

---

## fuzzing/2_spike_node_15.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_15.toml
DEBUG: Resolved Request for 2_spike_node_15:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_15)
  SET: 2_spike_node_15.status = ok
  SET: 2spikenode15.status = ok
  SET: 2_spike_node_15.status = ok
  SET: 2_spike_node_15.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_15.2_spike_node_15.status = ok
  SET: 2spikenode15.2_spike_node_15.status = ok
  SET: 2_spike_node_15.2_spike_node_15.status = ok
  SET: 2_spike_node_15.2_spike_node_15.status = ok
  SET: 2_spike_node_15.status = ok
  SET: spike.2_spike_node_15.status = ok
  SET: spike.2_spike_node_15.status = ok
  SET: spike.2_spike_node_15.status = ok
  SET: spike.2_spike_node_15.status = ok
  SET: 2_spike_node_15.status = ok
Running: data/master_suite/fuzzing/2_spike_node_15.toml → PASS
```

---

## fuzzing/2_spike_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_2.toml
DEBUG: Resolved Request for 2_spike_node_2:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_2)
  SET: 2_spike_node_2.status = ok
  SET: 2spikenode2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2spikenode2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
  SET: spike.2_spike_node_2.status = ok
  SET: spike.2_spike_node_2.status = ok
  SET: spike.2_spike_node_2.status = ok
  SET: spike.2_spike_node_2.status = ok
  SET: 2_spike_node_2.status = ok
Running: data/master_suite/fuzzing/2_spike_node_2.toml → PASS
```

---

## fuzzing/2_spike_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_3.toml
DEBUG: Resolved Request for 2_spike_node_3:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_3)
  SET: 2_spike_node_3.status = ok
  SET: 2spikenode3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2spikenode3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
  SET: spike.2_spike_node_3.status = ok
  SET: spike.2_spike_node_3.status = ok
  SET: spike.2_spike_node_3.status = ok
  SET: spike.2_spike_node_3.status = ok
  SET: 2_spike_node_3.status = ok
Running: data/master_suite/fuzzing/2_spike_node_3.toml → PASS
```

---

## fuzzing/2_spike_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_4.toml
DEBUG: Resolved Request for 2_spike_node_4:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_4)
  SET: 2_spike_node_4.status = ok
  SET: 2spikenode4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2spikenode4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
  SET: spike.2_spike_node_4.status = ok
  SET: spike.2_spike_node_4.status = ok
  SET: spike.2_spike_node_4.status = ok
  SET: spike.2_spike_node_4.status = ok
  SET: 2_spike_node_4.status = ok
Running: data/master_suite/fuzzing/2_spike_node_4.toml → PASS
```

---

## fuzzing/2_spike_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_5.toml
DEBUG: Resolved Request for 2_spike_node_5:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_5)
DEBUG: Resolved Request for 2_spike_node_5:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_5)
DEBUG: Resolved Request for 2_spike_node_5:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_5)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/fuzzing/2_spike_node_5.toml
  Reason: HTTP 503
```

---

## fuzzing/2_spike_node_6.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_6.toml
DEBUG: Resolved Request for 2_spike_node_6:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_6)
DEBUG: Resolved Request for 2_spike_node_6:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_6)
DEBUG: Resolved Request for 2_spike_node_6:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_6)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/fuzzing/2_spike_node_6.toml
  Reason: HTTP 503
```

---

## fuzzing/2_spike_node_7.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_7.toml
DEBUG: Resolved Request for 2_spike_node_7:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_7)
DEBUG: Resolved Request for 2_spike_node_7:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_7)
DEBUG: Resolved Request for 2_spike_node_7:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_7)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1520ms

Failure Intelligence:
- Node: data/master_suite/fuzzing/2_spike_node_7.toml
  Reason: HTTP 503
```

---

## fuzzing/2_spike_node_8.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_8.toml
DEBUG: Resolved Request for 2_spike_node_8:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_8)
DEBUG: Resolved Request for 2_spike_node_8:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_8)
  SET: 2_spike_node_8.2_spike_node_8.status = ok
  SET: 2spikenode8.2_spike_node_8.status = ok
  SET: 2_spike_node_8.2_spike_node_8.status = ok
  SET: 2_spike_node_8.2_spike_node_8.status = ok
  SET: 2_spike_node_8.status = ok
  SET: spike.2_spike_node_8.status = ok
  SET: spike.2_spike_node_8.status = ok
  SET: spike.2_spike_node_8.status = ok
  SET: spike.2_spike_node_8.status = ok
  SET: 2_spike_node_8.status = ok
  SET: 2_spike_node_8.status = ok
  SET: 2spikenode8.status = ok
  SET: 2_spike_node_8.status = ok
  SET: 2_spike_node_8.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
Running: data/master_suite/fuzzing/2_spike_node_8.toml → PASS
```

---

## fuzzing/2_spike_node_9.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/spike"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/2_spike_node_9.toml
DEBUG: Resolved Request for 2_spike_node_9:
  URL: http://localhost:3000/api/v2/fuzzing/spike
RUNNING: GET http://localhost:3000/api/v2/fuzzing/spike (2_spike_node_9)
  SET: 2_spike_node_9.status = ok
  SET: 2spikenode9.status = ok
  SET: 2_spike_node_9.status = ok
  SET: 2_spike_node_9.status = ok
  SET: status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: spike.status = ok
  SET: status = ok
  SET: 2_spike_node_9.2_spike_node_9.status = ok
  SET: 2spikenode9.2_spike_node_9.status = ok
  SET: 2_spike_node_9.2_spike_node_9.status = ok
  SET: 2_spike_node_9.2_spike_node_9.status = ok
  SET: 2_spike_node_9.status = ok
  SET: spike.2_spike_node_9.status = ok
  SET: spike.2_spike_node_9.status = ok
  SET: spike.2_spike_node_9.status = ok
  SET: spike.2_spike_node_9.status = ok
  SET: 2_spike_node_9.status = ok
Running: data/master_suite/fuzzing/2_spike_node_9.toml → PASS
```

---

## fuzzing/3_fuzz_node.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/fuzz"

[body]
type = "json"
raw = """
{
  "random_str": "{{random}}",
  "nested": {
    "val": {{random}}
  }
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/fuzzing/3_fuzz_node.toml
DEBUG: Resolved Request for 3_fuzz_node:
  URL: http://localhost:3000/api/v2/fuzzing/fuzz
RUNNING: POST http://localhost:3000/api/v2/fuzzing/fuzz (3_fuzz_node)
DEBUG: Resolved Request for 3_fuzz_node:
  URL: http://localhost:3000/api/v2/fuzzing/fuzz
RUNNING: POST http://localhost:3000/api/v2/fuzzing/fuzz (3_fuzz_node)
DEBUG: Resolved Request for 3_fuzz_node:
  URL: http://localhost:3000/api/v2/fuzzing/fuzz
RUNNING: POST http://localhost:3000/api/v2/fuzzing/fuzz (3_fuzz_node)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1545ms

Failure Intelligence:
- Node: data/master_suite/fuzzing/3_fuzz_node.toml
  Reason: HTTP 400
```

---

## global/1_finance_us.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/finance?locale=en-US"

[extract]
usBalance = "balance"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/global/1_finance_us.toml
DEBUG: Resolved Request for 1_finance_us:
  URL: http://localhost:3000/api/v2/global/finance?locale=en-US
RUNNING: GET http://localhost:3000/api/v2/global/finance?locale=en-US (1_finance_us)
  SET: 1_finance_us.usBalance = $1,250.50
  SET: 1financeus.usBalance = $1,250.50
  SET: 1_finance_us.usBalance = $1,250.50
  SET: 1_finance_us.usBalance = $1,250.50
  SET: usBalance = $1,250.50
Running: data/master_suite/global/1_finance_us.toml → PASS
```

---

## global/2_finance_de.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/finance?locale=de-DE"

[extract]
deBalance = "balance"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/global/2_finance_de.toml
DEBUG: Resolved Request for 2_finance_de:
  URL: http://localhost:3000/api/v2/global/finance?locale=de-DE
RUNNING: GET http://localhost:3000/api/v2/global/finance?locale=de-DE (2_finance_de)
  SET: 2_finance_de.deBalance = 1.250,50 €
  SET: 2financede.deBalance = 1.250,50 €
  SET: 2_finance_de.deBalance = 1.250,50 €
  SET: 2_finance_de.deBalance = 1.250,50 €
  SET: deBalance = 1.250,50 €
Running: data/master_suite/global/2_finance_de.toml → PASS
```

---

## global/3_rtl_meta.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rtl-meta"

[extract]
arabicTitle = "content.title"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/global/3_rtl_meta.toml
DEBUG: Resolved Request for 3_rtl_meta:
  URL: http://localhost:3000/api/v2/global/rtl-meta
RUNNING: GET http://localhost:3000/api/v2/global/rtl-meta (3_rtl_meta)
  SET: 3_rtl_meta.arabicTitle = قاعدة البيانات
  SET: 3rtlmeta.arabicTitle = قاعدة البيانات
  SET: 3_rtl_meta.arabicTitle = قاعدة البيانات
  SET: 3_rtl_meta.arabicTitle = قاعدة البيانات
  SET: arabicTitle = قاعدة البيانات
Running: data/master_suite/global/3_rtl_meta.toml → PASS
```

---

## graphql/1_get_user.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}"

[body]
type = "json"
raw = """
{
  "query": "query { user(id: \\\"1\\\") { id name email } }"
}
"""

[extract]
gql_user_id = "data.user.id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/graphql/1_get_user.toml
DEBUG: Resolved Request for 1_get_user:
  URL: http://localhost:3000/api/v2/graphql
RUNNING: POST http://localhost:3000/api/v2/graphql (1_get_user)
  SET: 1_get_user.gql_user_id = u-101
  SET: 1getuser.gql_user_id = u-101
  SET: 1_get_user.gql_user_id = u-101
  SET: 1_get_user.gql_user_id = u-101
  SET: gql_user_id = u-101
  SET: 1_get_user.1_get_user.id = u-101
  SET: 1getuser.1_get_user.id = u-101
  SET: 1_get_user.1_get_user.id = u-101
  SET: 1_get_user.1_get_user.id = u-101
  SET: 1_get_user.id = u-101
  SET: 1_get_user.id = u-101
  SET: 1getuser.id = u-101
  SET: 1_get_user.id = u-101
  SET: 1_get_user.id = u-101
  SET: id = u-101
Running: data/master_suite/graphql/1_get_user.toml → PASS
```

---

## graphql/2_create_post.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}"

[body]
type = "json"
raw = """
{
  "query": "mutation { createPost(title: \\\"New Post {{random}}\\\") { id title } }"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/graphql/2_create_post.toml
DEBUG: Resolved Request for 2_create_post:
  URL: http://localhost:3000/api/v2/graphql
RUNNING: POST http://localhost:3000/api/v2/graphql (2_create_post)
  SET: 2_create_post.id = p-1778322305793
  SET: 2createpost.id = p-1778322305793
  SET: 2_create_post.id = p-1778322305793
  SET: 2_create_post.id = p-1778322305793
  SET: id = p-1778322305793
  SET: 2_create_post.2_create_post.id = p-1778322305793
  SET: 2createpost.2_create_post.id = p-1778322305793
  SET: 2_create_post.2_create_post.id = p-1778322305793
  SET: 2_create_post.2_create_post.id = p-1778322305793
  SET: 2_create_post.id = p-1778322305793
Running: data/master_suite/graphql/2_create_post.toml → PASS
```

---

## graphql_sub/1_fetch_updates.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/subscribe"

[extract]
lastUpdateId = "data.monitorUpdates.id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/graphql_sub/1_fetch_updates.toml
DEBUG: Resolved Request for 1_fetch_updates:
  URL: http://localhost:3000/api/v2/graphql-sub/subscribe
RUNNING: GET http://localhost:3000/api/v2/graphql-sub/subscribe (1_fetch_updates)
DEBUG: Resolved Request for 1_fetch_updates:
  URL: http://localhost:3000/api/v2/graphql-sub/subscribe
RUNNING: GET http://localhost:3000/api/v2/graphql-sub/subscribe (1_fetch_updates)
DEBUG: Resolved Request for 1_fetch_updates:
  URL: http://localhost:3000/api/v2/graphql-sub/subscribe
RUNNING: GET http://localhost:3000/api/v2/graphql-sub/subscribe (1_fetch_updates)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/graphql_sub/1_fetch_updates.toml
  Reason: HTTP 404
```

---

## grpc_web/1_service_call.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/service/Method"

[headers]
Content-Type = "application/grpc-web-text"
Accept = "application/grpc-web-text"

[body]
type = "text"
raw = "AAAAAAIKCghIdW1hbiAxMA=="
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/grpc_web/1_service_call.toml
DEBUG: Resolved Request for 1_service_call:
  URL: http://localhost:3000/api/v2/grpc-web/service/Method
  Header: Accept: application/grpc-web-text
  Header: Content-Type: application/grpc-web-text
RUNNING: POST http://localhost:3000/api/v2/grpc-web/service/Method (1_service_call)
DEBUG: Resolved Request for 1_service_call:
  URL: http://localhost:3000/api/v2/grpc-web/service/Method
  Header: Accept: application/grpc-web-text
  Header: Content-Type: application/grpc-web-text
RUNNING: POST http://localhost:3000/api/v2/grpc-web/service/Method (1_service_call)
DEBUG: Resolved Request for 1_service_call:
  URL: http://localhost:3000/api/v2/grpc-web/service/Method
  Header: Accept: application/grpc-web-text
  Header: Content-Type: application/grpc-web-text
RUNNING: POST http://localhost:3000/api/v2/grpc-web/service/Method (1_service_call)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1555ms

Failure Intelligence:
- Node: data/master_suite/grpc_web/1_service_call.toml
  Reason: HTTP 404
```

---

## hang/1_blackhole_request.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/never-respond"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/hang/1_blackhole_request.toml
DEBUG: Resolved Request for 1_blackhole_request:
  URL: http://localhost:3000/api/v2/hang/never-respond
RUNNING: GET http://localhost:3000/api/v2/hang/never-respond (1_blackhole_request)
DEBUG: Resolved Request for 1_blackhole_request:
  URL: http://localhost:3000/api/v2/hang/never-respond
RUNNING: GET http://localhost:3000/api/v2/hang/never-respond (1_blackhole_request)
DEBUG: Resolved Request for 1_blackhole_request:
  URL: http://localhost:3000/api/v2/hang/never-respond
RUNNING: GET http://localhost:3000/api/v2/hang/never-respond (1_blackhole_request)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          91523ms

Failure Intelligence:
- Node: data/master_suite/hang/1_blackhole_request.toml
  Reason: Request failed: error sending request for url (http://localhost:3000/api/v2/hang/never-respond): operation timed out
```

---

## iam/1_oauth_authorize.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/oauth/authorize"

[body]
type = "json"
raw = """
{
  "response_type": "code",
  "client_id": "rumour-app",
  "code_challenge": "sha256-challenge-123",
  "state": "random-state"
}
"""

[extract]
iam_auth_code = "code"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/iam/1_oauth_authorize.toml
DEBUG: Resolved Request for 1_oauth_authorize:
  URL: http://localhost:3000/api/v2/iam/oauth/authorize
RUNNING: POST http://localhost:3000/api/v2/iam/oauth/authorize (1_oauth_authorize)
  SET: 1_oauth_authorize.iam_auth_code = code-3n2l6e
  SET: 1oauthauthorize.iam_auth_code = code-3n2l6e
  SET: 1_oauth_authorize.iam_auth_code = code-3n2l6e
  SET: 1_oauth_authorize.iam_auth_code = code-3n2l6e
  SET: iam_auth_code = code-3n2l6e
  SET: 1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
Running: data/master_suite/iam/1_oauth_authorize.toml → PASS
```

---

## iam/2_oauth_token.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/oauth/token"

[body]
type = "json"
raw = """
{
  "grant_type": "authorization_code",
  "code": "{{iam_auth_code}}",
  "code_verifier": "verifier-123"
}
"""

[extract]
iam_access_token = "access_token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/iam/2_oauth_token.toml
DEBUG: Resolved Request for 1_oauth_authorize:
  URL: http://localhost:3000/api/v2/iam/oauth/authorize
RUNNING: POST http://localhost:3000/api/v2/iam/oauth/authorize (1_oauth_authorize)
  SET: 1_oauth_authorize.iam_auth_code = code-mi6a2i
  SET: 1oauthauthorize.iam_auth_code = code-mi6a2i
  SET: 1_oauth_authorize.iam_auth_code = code-mi6a2i
  SET: 1_oauth_authorize.iam_auth_code = code-mi6a2i
  SET: iam_auth_code = code-mi6a2i
  SET: 1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
DEBUG: Resolved Request for 2_oauth_token:
  URL: http://localhost:3000/api/v2/iam/oauth/token
RUNNING: POST http://localhost:3000/api/v2/iam/oauth/token (2_oauth_token)
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400545
  SET: 2oauthtoken.iam_access_token = pkce-token-1778322400545
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400545
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400545
  SET: iam_access_token = pkce-token-1778322400545
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2oauthtoken.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.accessToken = pkce-token-1778322400545
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2oauthtoken.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.accessToken = pkce-token-1778322400545
  SET: accessToken = pkce-token-1778322400545
  SET: token.accessToken = pkce-token-1778322400545
  SET: token.accessToken = pkce-token-1778322400545
  SET: token.accessToken = pkce-token-1778322400545
  SET: token.accessToken = pkce-token-1778322400545
  SET: accessToken = pkce-token-1778322400545
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: 2oauthtoken.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2oauthtoken.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          16ms
```

---

## iam/3_oidc_userinfo.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/oidc/userinfo"

[headers]
Authorization = "Bearer {{iam_access_token}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/iam/3_oidc_userinfo.toml
DEBUG: Resolved Request for 1_oauth_authorize:
  URL: http://localhost:3000/api/v2/iam/oauth/authorize
RUNNING: POST http://localhost:3000/api/v2/iam/oauth/authorize (1_oauth_authorize)
  SET: 1_oauth_authorize.iam_auth_code = code-cexoii
  SET: 1oauthauthorize.iam_auth_code = code-cexoii
  SET: 1_oauth_authorize.iam_auth_code = code-cexoii
  SET: 1_oauth_authorize.iam_auth_code = code-cexoii
  SET: iam_auth_code = code-cexoii
  SET: 1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: authorize.status = random-state
  SET: status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1oauthauthorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: authorize.1_oauth_authorize.status = random-state
  SET: 1_oauth_authorize.status = random-state
DEBUG: Resolved Request for 2_oauth_token:
  URL: http://localhost:3000/api/v2/iam/oauth/token
RUNNING: POST http://localhost:3000/api/v2/iam/oauth/token (2_oauth_token)
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400595
  SET: 2oauthtoken.iam_access_token = pkce-token-1778322400595
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400595
  SET: 2_oauth_token.iam_access_token = pkce-token-1778322400595
  SET: iam_access_token = pkce-token-1778322400595
  SET: 2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2oauthtoken.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.accessToken = pkce-token-1778322400595
  SET: accessToken = pkce-token-1778322400595
  SET: token.accessToken = pkce-token-1778322400595
  SET: token.accessToken = pkce-token-1778322400595
  SET: token.accessToken = pkce-token-1778322400595
  SET: token.accessToken = pkce-token-1778322400595
  SET: accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: 2oauthtoken.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: token.id_token = header.payload.signature
  SET: id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2oauthtoken.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.accessToken = pkce-token-1778322400595
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: token.2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.accessToken = pkce-token-1778322400595
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2oauthtoken.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: token.2_oauth_token.id_token = header.payload.signature
  SET: 2_oauth_token.id_token = header.payload.signature
DEBUG: Resolved Request for 3_oidc_userinfo:
  URL: http://localhost:3000/api/v2/iam/oidc/userinfo
  Header: Authorization: Bearer pkce-token-1778322400595
RUNNING: GET http://localhost:3000/api/v2/iam/oidc/userinfo (3_oidc_userinfo)

Workflow Execution Summary:
Total Requests:      3
Successful:          3
Failed:              0
Skipped:             0
Total Time:          18ms
```

---

## idempotency/1_initial_charge.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/charge"

[headers]
Idempotency-Key = "key-{{random}}"

[body]
type = "json"
raw = """
{
  "amount": 100.00
}
"""

[extract]
firstTxnId = "transaction_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/idempotency/1_initial_charge.toml
DEBUG: Resolved Request for 1_initial_charge:
  URL: http://localhost:3000/api/v2/idempotency/charge
  Header: Idempotency-Key: key-fc3cf4
RUNNING: POST http://localhost:3000/api/v2/idempotency/charge (1_initial_charge)
  SET: 1_initial_charge.firstTxnId = txn-1778322400629
  SET: 1initialcharge.firstTxnId = txn-1778322400629
  SET: 1_initial_charge.firstTxnId = txn-1778322400629
  SET: 1_initial_charge.firstTxnId = txn-1778322400629
  SET: firstTxnId = txn-1778322400629
  SET: 1_initial_charge.1_initial_charge.status = succeeded
  SET: 1initialcharge.1_initial_charge.status = succeeded
  SET: 1_initial_charge.1_initial_charge.status = succeeded
  SET: 1_initial_charge.1_initial_charge.status = succeeded
  SET: 1_initial_charge.status = succeeded
  SET: charge.1_initial_charge.status = succeeded
  SET: charge.1_initial_charge.status = succeeded
  SET: charge.1_initial_charge.status = succeeded
  SET: charge.1_initial_charge.status = succeeded
  SET: 1_initial_charge.status = succeeded
  SET: 1_initial_charge.status = succeeded
  SET: 1initialcharge.status = succeeded
  SET: 1_initial_charge.status = succeeded
  SET: 1_initial_charge.status = succeeded
  SET: status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: status = succeeded
  SET: 1_initial_charge.transaction_id = txn-1778322400629
  SET: 1initialcharge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.transaction_id = txn-1778322400629
  SET: transaction_id = txn-1778322400629
  SET: charge.transaction_id = txn-1778322400629
  SET: charge.transaction_id = txn-1778322400629
  SET: charge.transaction_id = txn-1778322400629
  SET: charge.transaction_id = txn-1778322400629
  SET: transaction_id = txn-1778322400629
  SET: 1_initial_charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: 1initialcharge.1_initial_charge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.transaction_id = txn-1778322400629
  SET: charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: charge.1_initial_charge.transaction_id = txn-1778322400629
  SET: 1_initial_charge.transaction_id = txn-1778322400629
Running: data/master_suite/idempotency/1_initial_charge.toml → PASS
```

---

## idempotency/2_retry_charge.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/charge"

[headers]
Idempotency-Key = "key-{{random}}"

[body]
type = "json"
raw = """
{
  "amount": 100.00
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/idempotency/2_retry_charge.toml
DEBUG: Resolved Request for 2_retry_charge:
  URL: http://localhost:3000/api/v2/idempotency/charge
  Header: Idempotency-Key: key-fcca21
RUNNING: POST http://localhost:3000/api/v2/idempotency/charge (2_retry_charge)
  SET: 2_retry_charge.status = succeeded
  SET: 2retrycharge.status = succeeded
  SET: 2_retry_charge.status = succeeded
  SET: 2_retry_charge.status = succeeded
  SET: status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: charge.status = succeeded
  SET: status = succeeded
  SET: 2_retry_charge.2_retry_charge.status = succeeded
  SET: 2retrycharge.2_retry_charge.status = succeeded
  SET: 2_retry_charge.2_retry_charge.status = succeeded
  SET: 2_retry_charge.2_retry_charge.status = succeeded
  SET: 2_retry_charge.status = succeeded
  SET: charge.2_retry_charge.status = succeeded
  SET: charge.2_retry_charge.status = succeeded
  SET: charge.2_retry_charge.status = succeeded
  SET: charge.2_retry_charge.status = succeeded
  SET: 2_retry_charge.status = succeeded
  SET: 2_retry_charge.transaction_id = txn-1778322400665
  SET: 2retrycharge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.transaction_id = txn-1778322400665
  SET: transaction_id = txn-1778322400665
  SET: charge.transaction_id = txn-1778322400665
  SET: charge.transaction_id = txn-1778322400665
  SET: charge.transaction_id = txn-1778322400665
  SET: charge.transaction_id = txn-1778322400665
  SET: transaction_id = txn-1778322400665
  SET: 2_retry_charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: 2retrycharge.2_retry_charge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.transaction_id = txn-1778322400665
  SET: charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: charge.2_retry_charge.transaction_id = txn-1778322400665
  SET: 2_retry_charge.transaction_id = txn-1778322400665
Running: data/master_suite/idempotency/2_retry_charge.toml → PASS
```

---

## jwt_advanced/1_issue_token.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/issue"

[extract]
complexToken = "token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/jwt_advanced/1_issue_token.toml
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/jwt_advanced/1_issue_token.toml
  Reason: HTTP 404
```

---

## jwt_advanced/2_verify_strict.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/verify"

[headers]
Authorization = "Bearer {{complexToken}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/jwt_advanced/2_verify_strict.toml
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)
DEBUG: Resolved Request for 1_issue_token:
  URL: http://localhost:3000/api/v2/jwt-advanced/issue
RUNNING: GET http://localhost:3000/api/v2/jwt-advanced/issue (1_issue_token)

Workflow Execution Summary:
Total Requests:      2
Successful:          0
Failed:              1
Skipped:             1
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/jwt_advanced/1_issue_token.toml
  Reason: HTTP 404
  Affected Downstream: ["data/master_suite/jwt_advanced/2_verify_strict.toml"]
```

---

## legacy/1_get_xml_user.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/xml-data"

[extract]
xmlUserId = "User.Id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/legacy/1_get_xml_user.toml
DEBUG: Resolved Request for 1_get_xml_user:
  URL: http://localhost:3000/api/v2/legacy/xml-data
RUNNING: GET http://localhost:3000/api/v2/legacy/xml-data (1_get_xml_user)
Running: data/master_suite/legacy/1_get_xml_user.toml → PASS
```

---

## legacy/2_soap_request.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/soap"

[headers]
Content-Type = "application/xml"

[body]
type = "text"
raw = """
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Body>
        <GetStockPrice>
            <Symbol>RUMR</Symbol>
        </GetStockPrice>
    </soap:Body>
</soap:Envelope>
"""

[extract]
stockPrice = "soap:Envelope.soap:Body.GetStockPriceResponse.Price"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/legacy/2_soap_request.toml
DEBUG: Resolved Request for 2_soap_request:
  URL: http://localhost:3000/api/v2/legacy/soap
  Header: Content-Type: application/xml
RUNNING: POST http://localhost:3000/api/v2/legacy/soap (2_soap_request)
DEBUG: Resolved Request for 2_soap_request:
  URL: http://localhost:3000/api/v2/legacy/soap
  Header: Content-Type: application/xml
RUNNING: POST http://localhost:3000/api/v2/legacy/soap (2_soap_request)
DEBUG: Resolved Request for 2_soap_request:
  URL: http://localhost:3000/api/v2/legacy/soap
  Header: Content-Type: application/xml
RUNNING: POST http://localhost:3000/api/v2/legacy/soap (2_soap_request)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1537ms

Failure Intelligence:
- Node: data/master_suite/legacy/2_soap_request.toml
  Reason: HTTP 500
```

---

## lifecycle/1_deprecated_api.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/v1/legacy-data"

[extract]
isDeprecated = "header.Deprecation"
sunsetDate = "header.Sunset"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/lifecycle/1_deprecated_api.toml
DEBUG: Resolved Request for 1_deprecated_api:
  URL: http://localhost:3000/api/v2/lifecycle/v1/legacy-data
RUNNING: GET http://localhost:3000/api/v2/lifecycle/v1/legacy-data (1_deprecated_api)
Running: data/master_suite/lifecycle/1_deprecated_api.toml → PASS
```

---

## lifecycle/2_cors_preflight.toml

### File Content

```toml
[request]
method = "OPTIONS"
url = "{{base_url}}/secure-resource"

[headers]
Access-Control-Request-Method = "POST"
Access-Control-Request-Headers = "X-Rumour-Custom"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/lifecycle/2_cors_preflight.toml
DEBUG: Resolved Request for 2_cors_preflight:
  URL: http://localhost:3000/api/v2/lifecycle/secure-resource
  Header: Access-Control-Request-Headers: X-Rumour-Custom
  Header: Access-Control-Request-Method: POST
RUNNING: OPTIONS http://localhost:3000/api/v2/lifecycle/secure-resource (2_cors_preflight)
Running: data/master_suite/lifecycle/2_cors_preflight.toml → PASS
```

---

## localization/1_fetch_unicode.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/unicode"

[extract]
msgEmoji = "emoji"
msgArabic = "arabic"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/localization/1_fetch_unicode.toml
DEBUG: Resolved Request for 1_fetch_unicode:
  URL: http://localhost:3000/api/v2/localization/unicode
RUNNING: GET http://localhost:3000/api/v2/localization/unicode (1_fetch_unicode)
  SET: 1_fetch_unicode.msgArabic = مرحبا بالعالم
  SET: 1fetchunicode.msgArabic = مرحبا بالعالم
  SET: 1_fetch_unicode.msgArabic = مرحبا بالعالم
  SET: 1_fetch_unicode.msgArabic = مرحبا بالعالم
  SET: msgArabic = مرحبا بالعالم
  SET: 1_fetch_unicode.msgEmoji = 🚀🔥🌍
  SET: 1fetchunicode.msgEmoji = 🚀🔥🌍
  SET: 1_fetch_unicode.msgEmoji = 🚀🔥🌍
  SET: 1_fetch_unicode.msgEmoji = 🚀🔥🌍
  SET: msgEmoji = 🚀🔥🌍
Running: data/master_suite/localization/1_fetch_unicode.toml → PASS
```

---

## localization/2_check_spanish.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/i18n"

[headers]
Accept-Language = "es-ES"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/localization/2_check_spanish.toml
DEBUG: Resolved Request for 2_check_spanish:
  URL: http://localhost:3000/api/v2/localization/i18n
  Header: Accept-Language: es-ES
RUNNING: GET http://localhost:3000/api/v2/localization/i18n (2_check_spanish)
Running: data/master_suite/localization/2_check_spanish.toml → PASS
```

---

## maintenance/1_fetch_drain.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/drain"

[extract]
retryAfter = "header.Retry-After"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/maintenance/1_fetch_drain.toml
DEBUG: Resolved Request for 1_fetch_drain:
  URL: http://localhost:3000/api/v2/maintenance/drain
RUNNING: GET http://localhost:3000/api/v2/maintenance/drain (1_fetch_drain)
Running: data/master_suite/maintenance/1_fetch_drain.toml → PASS
```

---

## maintenance/2_protocol_failure.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/secure-gate"

[headers]
x-protocol-version = "1.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/maintenance/2_protocol_failure.toml
DEBUG: Resolved Request for 2_protocol_failure:
  URL: http://localhost:3000/api/v2/maintenance/secure-gate
  Header: x-protocol-version: 1.0
RUNNING: GET http://localhost:3000/api/v2/maintenance/secure-gate (2_protocol_failure)
DEBUG: Resolved Request for 2_protocol_failure:
  URL: http://localhost:3000/api/v2/maintenance/secure-gate
  Header: x-protocol-version: 1.0
RUNNING: GET http://localhost:3000/api/v2/maintenance/secure-gate (2_protocol_failure)
DEBUG: Resolved Request for 2_protocol_failure:
  URL: http://localhost:3000/api/v2/maintenance/secure-gate
  Header: x-protocol-version: 1.0
RUNNING: GET http://localhost:3000/api/v2/maintenance/secure-gate (2_protocol_failure)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1531ms

Failure Intelligence:
- Node: data/master_suite/maintenance/2_protocol_failure.toml
  Reason: HTTP 426
```

---

## maintenance/3_protocol_success.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/secure-gate"

[headers]
x-protocol-version = "2.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/maintenance/3_protocol_success.toml
DEBUG: Resolved Request for 3_protocol_success:
  URL: http://localhost:3000/api/v2/maintenance/secure-gate
  Header: x-protocol-version: 2.0
RUNNING: GET http://localhost:3000/api/v2/maintenance/secure-gate (3_protocol_success)
  SET: 3_protocol_success.status = Accepted
  SET: 3protocolsuccess.status = Accepted
  SET: 3_protocol_success.status = Accepted
  SET: 3_protocol_success.status = Accepted
  SET: status = Accepted
  SET: secure-gate.status = Accepted
  SET: securegate.status = Accepted
  SET: secure-gate.status = Accepted
  SET: secure-gate.status = Accepted
  SET: status = Accepted
  SET: 3_protocol_success.3_protocol_success.status = Accepted
  SET: 3protocolsuccess.3_protocol_success.status = Accepted
  SET: 3_protocol_success.3_protocol_success.status = Accepted
  SET: 3_protocol_success.3_protocol_success.status = Accepted
  SET: 3_protocol_success.status = Accepted
  SET: secure-gate.3_protocol_success.status = Accepted
  SET: securegate.3_protocol_success.status = Accepted
  SET: secure-gate.3_protocol_success.status = Accepted
  SET: secure-gate.3_protocol_success.status = Accepted
  SET: 3_protocol_success.status = Accepted
Running: data/master_suite/maintenance/3_protocol_success.toml → PASS
```

---

## massive/1_massive_standard.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data?count=1000"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/massive/1_massive_standard.toml
DEBUG: Resolved Request for 1_massive_standard:
  URL: http://localhost:3000/api/v2/massive/data?count=1000
RUNNING: GET http://localhost:3000/api/v2/massive/data?count=1000 (1_massive_standard)
  SET: 1_massive_standard.status = ok
  SET: 1massivestandard.status = ok
  SET: 1_massive_standard.status = ok
  SET: 1_massive_standard.status = ok
  SET: status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: status = ok
  SET: 1_massive_standard.1_massive_standard.id = 0
  SET: 1massivestandard.1_massive_standard.id = 0
  SET: 1_massive_standard.1_massive_standard.id = 0
  SET: 1_massive_standard.1_massive_standard.id = 0
  SET: 1_massive_standard.id = 0
  SET: data.1_massive_standard.id = 0
  SET: data.1_massive_standard.id = 0
  SET: data.1_massive_standard.id = 0
  SET: data.1_massive_standard.id = 0
  SET: 1_massive_standard.id = 0
  SET: 1_massive_standard.id = 0
  SET: 1massivestandard.id = 0
  SET: 1_massive_standard.id = 0
  SET: 1_massive_standard.id = 0
  SET: id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: id = 0
  SET: data_id = 0
  SET: 1_massive_standard.1_massive_standard.status = ok
  SET: 1massivestandard.1_massive_standard.status = ok
  SET: 1_massive_standard.1_massive_standard.status = ok
  SET: 1_massive_standard.1_massive_standard.status = ok
  SET: 1_massive_standard.status = ok
  SET: data.1_massive_standard.status = ok
  SET: data.1_massive_standard.status = ok
  SET: data.1_massive_standard.status = ok
  SET: data.1_massive_standard.status = ok
  SET: 1_massive_standard.status = ok
Running: data/master_suite/massive/1_massive_standard.toml → PASS
```

---

## massive/2_massive_heavy.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data?count=5000"

[extract]
lastItemId = "items.4999.id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/massive/2_massive_heavy.toml
DEBUG: Resolved Request for 2_massive_heavy:
  URL: http://localhost:3000/api/v2/massive/data?count=5000
RUNNING: GET http://localhost:3000/api/v2/massive/data?count=5000 (2_massive_heavy)
  SET: 2_massive_heavy.status = ok
  SET: 2massiveheavy.status = ok
  SET: 2_massive_heavy.status = ok
  SET: 2_massive_heavy.status = ok
  SET: status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: data.status = ok
  SET: status = ok
  SET: 2_massive_heavy.2_massive_heavy.status = ok
  SET: 2massiveheavy.2_massive_heavy.status = ok
  SET: 2_massive_heavy.2_massive_heavy.status = ok
  SET: 2_massive_heavy.2_massive_heavy.status = ok
  SET: 2_massive_heavy.status = ok
  SET: data.2_massive_heavy.status = ok
  SET: data.2_massive_heavy.status = ok
  SET: data.2_massive_heavy.status = ok
  SET: data.2_massive_heavy.status = ok
  SET: 2_massive_heavy.status = ok
  SET: 2_massive_heavy.id = 0
  SET: 2massiveheavy.id = 0
  SET: 2_massive_heavy.id = 0
  SET: 2_massive_heavy.id = 0
  SET: id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: data.id = 0
  SET: id = 0
  SET: data_id = 0
  SET: 2_massive_heavy.2_massive_heavy.id = 0
  SET: 2massiveheavy.2_massive_heavy.id = 0
  SET: 2_massive_heavy.2_massive_heavy.id = 0
  SET: 2_massive_heavy.2_massive_heavy.id = 0
  SET: 2_massive_heavy.id = 0
  SET: data.2_massive_heavy.id = 0
  SET: data.2_massive_heavy.id = 0
  SET: data.2_massive_heavy.id = 0
  SET: data.2_massive_heavy.id = 0
  SET: 2_massive_heavy.id = 0
Running: data/master_suite/massive/2_massive_heavy.toml → PASS
```

---

## matrix/1_fetch_v1_0.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
X-API-Version = "1.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/matrix/1_fetch_v1_0.toml
DEBUG: Resolved Request for 1_fetch_v1_0:
  URL: http://localhost:3000/api/v2/matrix/data
  Header: X-API-Version: 1.0
RUNNING: GET http://localhost:3000/api/v2/matrix/data (1_fetch_v1_0)
  SET: 1_fetch_v1_0.1_fetch_v1_0.id = 1
  SET: 1fetchv10.1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.id = 1
  SET: data.1_fetch_v1_0.id = 1
  SET: data.1_fetch_v1_0.id = 1
  SET: data.1_fetch_v1_0.id = 1
  SET: data.1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.id = 1
  SET: 1fetchv10.id = 1
  SET: 1_fetch_v1_0.id = 1
  SET: 1_fetch_v1_0.id = 1
  SET: id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: id = 1
  SET: data_id = 1
Running: data/master_suite/matrix/1_fetch_v1_0.toml → PASS
```

---

## matrix/1_fetch_v2_0.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
X-API-Version = "2.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/matrix/1_fetch_v2_0.toml
DEBUG: Resolved Request for 1_fetch_v2_0:
  URL: http://localhost:3000/api/v2/matrix/data
  Header: X-API-Version: 2.0
RUNNING: GET http://localhost:3000/api/v2/matrix/data (1_fetch_v2_0)
  SET: 1_fetch_v2_0.1_fetch_v2_0.id = u_001
  SET: 1fetchv20.1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.id = u_001
  SET: data.1_fetch_v2_0.id = u_001
  SET: data.1_fetch_v2_0.id = u_001
  SET: data.1_fetch_v2_0.id = u_001
  SET: data.1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.id = u_001
  SET: 1fetchv20.id = u_001
  SET: 1_fetch_v2_0.id = u_001
  SET: 1_fetch_v2_0.id = u_001
  SET: id = u_001
  SET: data.id = u_001
  SET: data.id = u_001
  SET: data.id = u_001
  SET: data.id = u_001
  SET: id = u_001
  SET: data_id = u_001
Running: data/master_suite/matrix/1_fetch_v2_0.toml → PASS
```

---

## matrix/1_fetch_v3_0.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
X-API-Version = "3.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/matrix/1_fetch_v3_0.toml
DEBUG: Resolved Request for 1_fetch_v3_0:
  URL: http://localhost:3000/api/v2/matrix/data
  Header: X-API-Version: 3.0
RUNNING: GET http://localhost:3000/api/v2/matrix/data (1_fetch_v3_0)
  SET: 1_fetch_v3_0.id = 550e8400-e29b
  SET: 1fetchv30.id = 550e8400-e29b
  SET: 1_fetch_v3_0.id = 550e8400-e29b
  SET: 1_fetch_v3_0.id = 550e8400-e29b
  SET: id = 550e8400-e29b
  SET: data.id = 550e8400-e29b
  SET: data.id = 550e8400-e29b
  SET: data.id = 550e8400-e29b
  SET: data.id = 550e8400-e29b
  SET: id = 550e8400-e29b
  SET: data_id = 550e8400-e29b
  SET: 1_fetch_v3_0.version = 3.0.1
  SET: 1fetchv30.version = 3.0.1
  SET: 1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.version = 3.0.1
  SET: version = 3.0.1
  SET: data.version = 3.0.1
  SET: data.version = 3.0.1
  SET: data.version = 3.0.1
  SET: data.version = 3.0.1
  SET: version = 3.0.1
  SET: 1_fetch_v3_0.1_fetch_v3_0.version = 3.0.1
  SET: 1fetchv30.1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.version = 3.0.1
  SET: data.1_fetch_v3_0.version = 3.0.1
  SET: data.1_fetch_v3_0.version = 3.0.1
  SET: data.1_fetch_v3_0.version = 3.0.1
  SET: data.1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.version = 3.0.1
  SET: 1_fetch_v3_0.1_fetch_v3_0.id = 550e8400-e29b
  SET: 1fetchv30.1_fetch_v3_0.id = 550e8400-e29b
  SET: 1_fetch_v3_0.1_fetch_v3_0.id = 550e8400-e29b
  SET: 1_fetch_v3_0.1_fetch_v3_0.id = 550e8400-e29b
  SET: 1_fetch_v3_0.id = 550e8400-e29b
  SET: data.1_fetch_v3_0.id = 550e8400-e29b
  SET: data.1_fetch_v3_0.id = 550e8400-e29b
  SET: data.1_fetch_v3_0.id = 550e8400-e29b
  SET: data.1_fetch_v3_0.id = 550e8400-e29b
  SET: 1_fetch_v3_0.id = 550e8400-e29b
Running: data/master_suite/matrix/1_fetch_v3_0.toml → PASS
```

---

## matrix/2_fetch_summary.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/summary"

[extract]
passedCount = "stats.passed"
failedCount = "stats.failed"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/matrix/2_fetch_summary.toml
DEBUG: Resolved Request for 2_fetch_summary:
  URL: http://localhost:3000/api/v2/matrix/summary
RUNNING: GET http://localhost:3000/api/v2/matrix/summary (2_fetch_summary)
  SET: 2_fetch_summary.failedCount = 2
  SET: 2fetchsummary.failedCount = 2
  SET: 2_fetch_summary.failedCount = 2
  SET: 2_fetch_summary.failedCount = 2
  SET: failedCount = 2
  SET: 2_fetch_summary.passedCount = 45
  SET: 2fetchsummary.passedCount = 45
  SET: 2_fetch_summary.passedCount = 45
  SET: 2_fetch_summary.passedCount = 45
  SET: passedCount = 45
  SET: 2_fetch_summary.2_fetch_summary.execution_id = run-999
  SET: 2fetchsummary.2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.execution_id = run-999
  SET: summary.2_fetch_summary.execution_id = run-999
  SET: summary.2_fetch_summary.execution_id = run-999
  SET: summary.2_fetch_summary.execution_id = run-999
  SET: summary.2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.execution_id = run-999
  SET: 2fetchsummary.execution_id = run-999
  SET: 2_fetch_summary.execution_id = run-999
  SET: 2_fetch_summary.execution_id = run-999
  SET: execution_id = run-999
  SET: summary.execution_id = run-999
  SET: summary.execution_id = run-999
  SET: summary.execution_id = run-999
  SET: summary.execution_id = run-999
  SET: execution_id = run-999
  SET: 2_fetch_summary.id = T1
  SET: 2fetchsummary.id = T1
  SET: 2_fetch_summary.id = T1
  SET: 2_fetch_summary.id = T1
  SET: id = T1
  SET: summary.id = T1
  SET: summary.id = T1
  SET: summary.id = T1
  SET: summary.id = T1
  SET: id = T1
  SET: summary_id = T1
  SET: 2_fetch_summary.2_fetch_summary.id = T1
  SET: 2fetchsummary.2_fetch_summary.id = T1
  SET: 2_fetch_summary.2_fetch_summary.id = T1
  SET: 2_fetch_summary.2_fetch_summary.id = T1
  SET: 2_fetch_summary.id = T1
  SET: summary.2_fetch_summary.id = T1
  SET: summary.2_fetch_summary.id = T1
  SET: summary.2_fetch_summary.id = T1
  SET: summary.2_fetch_summary.id = T1
  SET: 2_fetch_summary.id = T1
  SET: 2_fetch_summary.status = PASS
  SET: 2fetchsummary.status = PASS
  SET: 2_fetch_summary.status = PASS
  SET: 2_fetch_summary.status = PASS
  SET: status = PASS
  SET: summary.status = PASS
  SET: summary.status = PASS
  SET: summary.status = PASS
  SET: summary.status = PASS
  SET: status = PASS
  SET: 2_fetch_summary.2_fetch_summary.status = PASS
  SET: 2fetchsummary.2_fetch_summary.status = PASS
  SET: 2_fetch_summary.2_fetch_summary.status = PASS
  SET: 2_fetch_summary.2_fetch_summary.status = PASS
  SET: 2_fetch_summary.status = PASS
  SET: summary.2_fetch_summary.status = PASS
  SET: summary.2_fetch_summary.status = PASS
  SET: summary.2_fetch_summary.status = PASS
  SET: summary.2_fetch_summary.status = PASS
  SET: 2_fetch_summary.status = PASS
Running: data/master_suite/matrix/2_fetch_summary.toml → PASS
```

---

## multipart/1_batch_upload.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/upload"

[body]
type = "form-data"
raw = "file=@/home/bugsfounder/Documents/rumour/generators/gen_multipart.sh"

[extract]
multipart_upload_id = "file_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/multipart/1_batch_upload.toml
DEBUG: Resolved Request for 1_batch_upload:
  URL: http://localhost:3000/api/v2/files/upload
RUNNING: POST http://localhost:3000/api/v2/files/upload (1_batch_upload)
  SET: 1_batch_upload.multipart_upload_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1batchupload.multipart_upload_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.multipart_upload_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.multipart_upload_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: multipart_upload_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1batchupload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1batchupload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: 1_batch_upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: upload.file_id = aaa4ab2785462dca39b7cc6ba5513ff4
  SET: file_id = aaa4ab2785462dca39b7cc6ba5513ff4
Running: data/master_suite/multipart/1_batch_upload.toml → PASS
```

---

## navigation/1_redirect_check.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/navigation/redirect"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/navigation/1_redirect_check.toml
DEBUG: Resolved Request for 1_redirect_check:
  URL: http://localhost:3000/api/v2/navigation/redirect
RUNNING: GET http://localhost:3000/api/v2/navigation/redirect (1_redirect_check)
  SET: 1_redirect_check.1_redirect_check.status = arrived
  SET: 1redirectcheck.1_redirect_check.status = arrived
  SET: 1_redirect_check.1_redirect_check.status = arrived
  SET: 1_redirect_check.1_redirect_check.status = arrived
  SET: 1_redirect_check.status = arrived
  SET: redirect.1_redirect_check.status = arrived
  SET: redirect.1_redirect_check.status = arrived
  SET: redirect.1_redirect_check.status = arrived
  SET: redirect.1_redirect_check.status = arrived
  SET: 1_redirect_check.status = arrived
  SET: 1_redirect_check.status = arrived
  SET: 1redirectcheck.status = arrived
  SET: 1_redirect_check.status = arrived
  SET: 1_redirect_check.status = arrived
  SET: status = arrived
  SET: redirect.status = arrived
  SET: redirect.status = arrived
  SET: redirect.status = arrived
  SET: redirect.status = arrived
  SET: status = arrived
Running: data/master_suite/navigation/1_redirect_check.toml → PASS
```

---

## navigation/2_version_v1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/navigation/version"

[headers]
X-API-Version = "v1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/navigation/2_version_v1.toml
DEBUG: Resolved Request for 2_version_v1:
  URL: http://localhost:3000/api/v2/navigation/version
  Header: X-API-Version: v1
RUNNING: GET http://localhost:3000/api/v2/navigation/version (2_version_v1)
  SET: 2_version_v1.id = 1
  SET: 2versionv1.id = 1
  SET: 2_version_v1.id = 1
  SET: 2_version_v1.id = 1
  SET: id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: id = 1
  SET: version_id = 1
  SET: 2_version_v1.2_version_v1.id = 1
  SET: 2versionv1.2_version_v1.id = 1
  SET: 2_version_v1.2_version_v1.id = 1
  SET: 2_version_v1.2_version_v1.id = 1
  SET: 2_version_v1.id = 1
  SET: version.2_version_v1.id = 1
  SET: version.2_version_v1.id = 1
  SET: version.2_version_v1.id = 1
  SET: version.2_version_v1.id = 1
  SET: 2_version_v1.id = 1
Running: data/master_suite/navigation/2_version_v1.toml → PASS
```

---

## navigation/3_version_v2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/navigation/version"

[headers]
X-API-Version = "{{nav_version}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/navigation/3_version_v2.toml
DEBUG: Resolved Request for 3_version_v2:
  URL: http://localhost:3000/api/v2/navigation/version
  Header: X-API-Version: v2
RUNNING: GET http://localhost:3000/api/v2/navigation/version (3_version_v2)
  SET: 3_version_v2.id = 1
  SET: 3versionv2.id = 1
  SET: 3_version_v2.id = 1
  SET: 3_version_v2.id = 1
  SET: id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: version.id = 1
  SET: id = 1
  SET: version_id = 1
  SET: 3_version_v2.3_version_v2.id = 1
  SET: 3versionv2.3_version_v2.id = 1
  SET: 3_version_v2.3_version_v2.id = 1
  SET: 3_version_v2.3_version_v2.id = 1
  SET: 3_version_v2.id = 1
  SET: version.3_version_v2.id = 1
  SET: version.3_version_v2.id = 1
  SET: version.3_version_v2.id = 1
  SET: version.3_version_v2.id = 1
  SET: 3_version_v2.id = 1
Running: data/master_suite/navigation/3_version_v2.toml → PASS
```

---

## navigation/4_loop_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/navigation/loop"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/navigation/4_loop_test.toml
DEBUG: Resolved Request for 4_loop_test:
  URL: http://localhost:3000/api/v2/navigation/loop
RUNNING: GET http://localhost:3000/api/v2/navigation/loop (4_loop_test)
DEBUG: Resolved Request for 4_loop_test:
  URL: http://localhost:3000/api/v2/navigation/loop
RUNNING: GET http://localhost:3000/api/v2/navigation/loop (4_loop_test)
DEBUG: Resolved Request for 4_loop_test:
  URL: http://localhost:3000/api/v2/navigation/loop
RUNNING: GET http://localhost:3000/api/v2/navigation/loop (4_loop_test)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1546ms

Failure Intelligence:
- Node: data/master_suite/navigation/4_loop_test.toml
  Reason: Request failed: error following redirect for url (http://localhost:3000/api/v2/navigation/loop): too many redirects
```

---

## network/1_slow_read.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/slow-read"
timeout = 5000
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/network/1_slow_read.toml
DEBUG: Resolved Request for 1_slow_read:
  URL: http://localhost:3000/api/v2/network/slow-read
RUNNING: GET http://localhost:3000/api/v2/network/slow-read (1_slow_read)
  SET: 1_slow_read.1_slow_read.status = slow_ok
  SET: 1slowread.1_slow_read.status = slow_ok
  SET: 1_slow_read.1_slow_read.status = slow_ok
  SET: 1_slow_read.1_slow_read.status = slow_ok
  SET: 1_slow_read.status = slow_ok
  SET: slow-read.1_slow_read.status = slow_ok
  SET: slowread.1_slow_read.status = slow_ok
  SET: slow-read.1_slow_read.status = slow_ok
  SET: slow-read.1_slow_read.status = slow_ok
  SET: 1_slow_read.status = slow_ok
  SET: 1_slow_read.status = slow_ok
  SET: 1slowread.status = slow_ok
  SET: 1_slow_read.status = slow_ok
  SET: 1_slow_read.status = slow_ok
  SET: status = slow_ok
  SET: slow-read.status = slow_ok
  SET: slowread.status = slow_ok
  SET: slow-read.status = slow_ok
  SET: slow-read.status = slow_ok
  SET: status = slow_ok
Running: data/master_suite/network/1_slow_read.toml → PASS
```

---

## network/2_proxy_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/proxy-check"

[headers]
X-Forwarded-For = "10.0.0.1"
X-Forwarded-Proto = "https"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/network/2_proxy_test.toml
DEBUG: Resolved Request for 2_proxy_test:
  URL: http://localhost:3000/api/v2/network/proxy-check
  Header: X-Forwarded-Proto: https
  Header: X-Forwarded-For: 10.0.0.1
RUNNING: GET http://localhost:3000/api/v2/network/proxy-check (2_proxy_test)
Running: data/master_suite/network/2_proxy_test.toml → PASS
```

---

## operations/1_delete_item_1.toml

### File Content

```toml
[request]
method = "DELETE"
url = "{{base_url}}/resource/item-unique"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/operations/1_delete_item_1.toml
DEBUG: Resolved Request for 1_delete_item_1:
  URL: http://localhost:3000/api/v2/operations/resource/item-unique
RUNNING: DELETE http://localhost:3000/api/v2/operations/resource/item-unique (1_delete_item_1)
Running: data/master_suite/operations/1_delete_item_1.toml → PASS
```

---

## operations/1_delete_item_2.toml

### File Content

```toml
[request]
method = "DELETE"
url = "{{base_url}}/resource/item-unique"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/operations/1_delete_item_2.toml
DEBUG: Resolved Request for 1_delete_item_2:
  URL: http://localhost:3000/api/v2/operations/resource/item-unique
RUNNING: DELETE http://localhost:3000/api/v2/operations/resource/item-unique (1_delete_item_2)
Running: data/master_suite/operations/1_delete_item_2.toml → PASS
```

---

## operations/2_bulk_update.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/bulk-patch"

[body]
type = "json"
raw = """
{
  "item-1": "Updated_Value_X",
  "item-2": "Updated_Value_Y"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/operations/2_bulk_update.toml
DEBUG: Resolved Request for 2_bulk_update:
  URL: http://localhost:3000/api/v2/operations/bulk-patch
RUNNING: POST http://localhost:3000/api/v2/operations/bulk-patch (2_bulk_update)
  SET: 2_bulk_update.status = Bulk Success
  SET: 2bulkupdate.status = Bulk Success
  SET: 2_bulk_update.status = Bulk Success
  SET: 2_bulk_update.status = Bulk Success
  SET: status = Bulk Success
  SET: bulk-patch.status = Bulk Success
  SET: bulkpatch.status = Bulk Success
  SET: bulk-patch.status = Bulk Success
  SET: bulk-patch.status = Bulk Success
  SET: status = Bulk Success
  SET: 2_bulk_update.2_bulk_update.status = Bulk Success
  SET: 2bulkupdate.2_bulk_update.status = Bulk Success
  SET: 2_bulk_update.2_bulk_update.status = Bulk Success
  SET: 2_bulk_update.2_bulk_update.status = Bulk Success
  SET: 2_bulk_update.status = Bulk Success
  SET: bulk-patch.2_bulk_update.status = Bulk Success
  SET: bulkpatch.2_bulk_update.status = Bulk Success
  SET: bulk-patch.2_bulk_update.status = Bulk Success
  SET: bulk-patch.2_bulk_update.status = Bulk Success
  SET: 2_bulk_update.status = Bulk Success
Running: data/master_suite/operations/2_bulk_update.toml → PASS
```

---

## operations/3_cascade_dept.toml

### File Content

```toml
[request]
method = "DELETE"
url = "{{base_url}}/department/dept-1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/operations/3_cascade_dept.toml
DEBUG: Resolved Request for 3_cascade_dept:
  URL: http://localhost:3000/api/v2/operations/department/dept-1
RUNNING: DELETE http://localhost:3000/api/v2/operations/department/dept-1 (3_cascade_dept)
  SET: 3_cascade_dept.status = Cascaded
  SET: 3cascadedept.status = Cascaded
  SET: 3_cascade_dept.status = Cascaded
  SET: 3_cascade_dept.status = Cascaded
  SET: status = Cascaded
  SET: dept-1.status = Cascaded
  SET: dept1.status = Cascaded
  SET: dept-1.status = Cascaded
  SET: dept-1.status = Cascaded
  SET: status = Cascaded
  SET: 3_cascade_dept.3_cascade_dept.status = Cascaded
  SET: 3cascadedept.3_cascade_dept.status = Cascaded
  SET: 3_cascade_dept.3_cascade_dept.status = Cascaded
  SET: 3_cascade_dept.3_cascade_dept.status = Cascaded
  SET: 3_cascade_dept.status = Cascaded
  SET: dept-1.3_cascade_dept.status = Cascaded
  SET: dept1.3_cascade_dept.status = Cascaded
  SET: dept-1.3_cascade_dept.status = Cascaded
  SET: dept-1.3_cascade_dept.status = Cascaded
  SET: 3_cascade_dept.status = Cascaded
Running: data/master_suite/operations/3_cascade_dept.toml → PASS
```

---

## orchestration/1_create_engine.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/engines"

[extract]
engineId = "engine_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/orchestration/1_create_engine.toml
DEBUG: Resolved Request for 1_create_engine:
  URL: http://localhost:3000/api/v2/orchestration/engines
RUNNING: POST http://localhost:3000/api/v2/orchestration/engines (1_create_engine)
  SET: 1_create_engine.engineId = eng-1778322413253
  SET: 1createengine.engineId = eng-1778322413253
  SET: 1_create_engine.engineId = eng-1778322413253
  SET: 1_create_engine.engineId = eng-1778322413253
  SET: engineId = eng-1778322413253
  SET: 1_create_engine.engine_id = eng-1778322413253
  SET: 1createengine.engine_id = eng-1778322413253
  SET: 1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.engine_id = eng-1778322413253
  SET: engine_id = eng-1778322413253
  SET: engines.engine_id = eng-1778322413253
  SET: engines.engine_id = eng-1778322413253
  SET: engines.engine_id = eng-1778322413253
  SET: engines.engine_id = eng-1778322413253
  SET: engine_id = eng-1778322413253
  SET: 1_create_engine.status = ready
  SET: 1createengine.status = ready
  SET: 1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: status = ready
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413253
  SET: 1createengine.1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.engine_id = eng-1778322413253
  SET: engines.1_create_engine.engine_id = eng-1778322413253
  SET: engines.1_create_engine.engine_id = eng-1778322413253
  SET: engines.1_create_engine.engine_id = eng-1778322413253
  SET: engines.1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.engine_id = eng-1778322413253
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1createengine.1_create_engine.status = ready
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: 1_create_engine.status = ready
Running: data/master_suite/orchestration/1_create_engine.toml → PASS
```

---

## orchestration/2_create_chassis.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/chassis"

[extract]
chassisId = "chassis_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/orchestration/2_create_chassis.toml
DEBUG: Resolved Request for 2_create_chassis:
  URL: http://localhost:3000/api/v2/orchestration/chassis
RUNNING: POST http://localhost:3000/api/v2/orchestration/chassis (2_create_chassis)
  SET: 2_create_chassis.chassisId = cha-1778322413276
  SET: 2createchassis.chassisId = cha-1778322413276
  SET: 2_create_chassis.chassisId = cha-1778322413276
  SET: 2_create_chassis.chassisId = cha-1778322413276
  SET: chassisId = cha-1778322413276
  SET: 2_create_chassis.status = ready
  SET: 2createchassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: status = ready
  SET: 2_create_chassis.chassis_id = cha-1778322413276
  SET: 2createchassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.chassis_id = cha-1778322413276
  SET: chassis_id = cha-1778322413276
  SET: chassis.chassis_id = cha-1778322413276
  SET: chassis.chassis_id = cha-1778322413276
  SET: chassis.chassis_id = cha-1778322413276
  SET: chassis.chassis_id = cha-1778322413276
  SET: chassis_id = cha-1778322413276
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2createchassis.2_create_chassis.status = ready
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: 2createchassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.chassis_id = cha-1778322413276
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413276
  SET: 2_create_chassis.chassis_id = cha-1778322413276
Running: data/master_suite/orchestration/2_create_chassis.toml → PASS
```

---

## orchestration/3_assemble_car.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/assemble"

[body]
type = "json"
raw = """
{
  "engine_id": "{{engineId}}",
  "chassis_id": "{{chassisId}}"
}
"""

[extract]
vehicleId = "vehicle_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/orchestration/3_assemble_car.toml
DEBUG: Resolved Request for 1_create_engine:
  URL: http://localhost:3000/api/v2/orchestration/engines
RUNNING: POST http://localhost:3000/api/v2/orchestration/engines (1_create_engine)
  SET: 1_create_engine.engineId = eng-1778322413314
  SET: 1createengine.engineId = eng-1778322413314
  SET: 1_create_engine.engineId = eng-1778322413314
  SET: 1_create_engine.engineId = eng-1778322413314
  SET: engineId = eng-1778322413314
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413314
  SET: 1createengine.1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.engine_id = eng-1778322413314
  SET: engines.1_create_engine.engine_id = eng-1778322413314
  SET: engines.1_create_engine.engine_id = eng-1778322413314
  SET: engines.1_create_engine.engine_id = eng-1778322413314
  SET: engines.1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1createengine.1_create_engine.status = ready
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1_create_engine.1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: engines.1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: 1createengine.status = ready
  SET: 1_create_engine.status = ready
  SET: 1_create_engine.status = ready
  SET: status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: engines.status = ready
  SET: status = ready
  SET: 1_create_engine.engine_id = eng-1778322413314
  SET: 1createengine.engine_id = eng-1778322413314
  SET: 1_create_engine.engine_id = eng-1778322413314
  SET: 1_create_engine.engine_id = eng-1778322413314
  SET: engine_id = eng-1778322413314
  SET: engines.engine_id = eng-1778322413314
  SET: engines.engine_id = eng-1778322413314
  SET: engines.engine_id = eng-1778322413314
  SET: engines.engine_id = eng-1778322413314
  SET: engine_id = eng-1778322413314
DEBUG: Resolved Request for 2_create_chassis:
  URL: http://localhost:3000/api/v2/orchestration/chassis
RUNNING: POST http://localhost:3000/api/v2/orchestration/chassis (2_create_chassis)
  SET: 2_create_chassis.chassisId = cha-1778322413318
  SET: 2createchassis.chassisId = cha-1778322413318
  SET: 2_create_chassis.chassisId = cha-1778322413318
  SET: 2_create_chassis.chassisId = cha-1778322413318
  SET: chassisId = cha-1778322413318
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: 2createchassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.chassis_id = cha-1778322413318
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: chassis.2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2createchassis.2_create_chassis.status = ready
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: chassis.2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: 2createchassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: 2_create_chassis.status = ready
  SET: status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: chassis.status = ready
  SET: status = ready
  SET: 2_create_chassis.chassis_id = cha-1778322413318
  SET: 2createchassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.chassis_id = cha-1778322413318
  SET: 2_create_chassis.chassis_id = cha-1778322413318
  SET: chassis_id = cha-1778322413318
  SET: chassis.chassis_id = cha-1778322413318
  SET: chassis.chassis_id = cha-1778322413318
  SET: chassis.chassis_id = cha-1778322413318
  SET: chassis.chassis_id = cha-1778322413318
  SET: chassis_id = cha-1778322413318
DEBUG: Resolved Request for 3_assemble_car:
  URL: http://localhost:3000/api/v2/orchestration/assemble
RUNNING: POST http://localhost:3000/api/v2/orchestration/assemble (3_assemble_car)
  SET: 3_assemble_car.vehicleId = car-1778322413324
  SET: 3assemblecar.vehicleId = car-1778322413324
  SET: 3_assemble_car.vehicleId = car-1778322413324
  SET: 3_assemble_car.vehicleId = car-1778322413324
  SET: vehicleId = car-1778322413324
  SET: 3_assemble_car.status = complete
  SET: 3assemblecar.status = complete
  SET: 3_assemble_car.status = complete
  SET: 3_assemble_car.status = complete
  SET: status = complete
  SET: assemble.status = complete
  SET: assemble.status = complete
  SET: assemble.status = complete
  SET: assemble.status = complete
  SET: status = complete
  SET: 3_assemble_car.3_assemble_car.status = complete
  SET: 3assemblecar.3_assemble_car.status = complete
  SET: 3_assemble_car.3_assemble_car.status = complete
  SET: 3_assemble_car.3_assemble_car.status = complete
  SET: 3_assemble_car.status = complete
  SET: assemble.3_assemble_car.status = complete
  SET: assemble.3_assemble_car.status = complete
  SET: assemble.3_assemble_car.status = complete
  SET: assemble.3_assemble_car.status = complete
  SET: 3_assemble_car.status = complete
  SET: 3_assemble_car.3_assemble_car.vehicle_id = car-1778322413324
  SET: 3assemblecar.3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.vehicle_id = car-1778322413324
  SET: assemble.3_assemble_car.vehicle_id = car-1778322413324
  SET: assemble.3_assemble_car.vehicle_id = car-1778322413324
  SET: assemble.3_assemble_car.vehicle_id = car-1778322413324
  SET: assemble.3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.vehicle_id = car-1778322413324
  SET: 3assemblecar.vehicle_id = car-1778322413324
  SET: 3_assemble_car.vehicle_id = car-1778322413324
  SET: 3_assemble_car.vehicle_id = car-1778322413324
  SET: vehicle_id = car-1778322413324
  SET: assemble.vehicle_id = car-1778322413324
  SET: assemble.vehicle_id = car-1778322413324
  SET: assemble.vehicle_id = car-1778322413324
  SET: assemble.vehicle_id = car-1778322413324
  SET: vehicle_id = car-1778322413324

Workflow Execution Summary:
Total Requests:      3
Successful:          3
Failed:              0
Skipped:             0
Total Time:          13ms
```

---

## patch/1_apply_patch.toml

### File Content

```toml
[request]
method = "PATCH"
url = "{{base_url}}/resource"

[body]
type = "json"
raw = """
[
  { "op": "test", "path": "/id", "value": "p-100" },
  { "op": "replace", "path": "/name", "value": "Rumour Patched Name" },
  { "op": "add", "path": "/tags/-", "value": "beta" }
]
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/patch/1_apply_patch.toml
DEBUG: Resolved Request for 1_apply_patch:
  URL: http://localhost:3000/api/v2/patch/resource
RUNNING: PATCH http://localhost:3000/api/v2/patch/resource (1_apply_patch)
  SET: 1_apply_patch.1_apply_patch.id = p-100
  SET: 1applypatch.1_apply_patch.id = p-100
  SET: 1_apply_patch.1_apply_patch.id = p-100
  SET: 1_apply_patch.1_apply_patch.id = p-100
  SET: 1_apply_patch.id = p-100
  SET: resource.1_apply_patch.id = p-100
  SET: resource.1_apply_patch.id = p-100
  SET: resource.1_apply_patch.id = p-100
  SET: resource.1_apply_patch.id = p-100
  SET: 1_apply_patch.id = p-100
  SET: 1_apply_patch.status = Patched
  SET: 1applypatch.status = Patched
  SET: 1_apply_patch.status = Patched
  SET: 1_apply_patch.status = Patched
  SET: status = Patched
  SET: resource.status = Patched
  SET: resource.status = Patched
  SET: resource.status = Patched
  SET: resource.status = Patched
  SET: status = Patched
  SET: 1_apply_patch.id = p-100
  SET: 1applypatch.id = p-100
  SET: 1_apply_patch.id = p-100
  SET: 1_apply_patch.id = p-100
  SET: id = p-100
  SET: resource.id = p-100
  SET: resource.id = p-100
  SET: resource.id = p-100
  SET: resource.id = p-100
  SET: id = p-100
  SET: resource_id = p-100
  SET: 1_apply_patch.1_apply_patch.status = Patched
  SET: 1applypatch.1_apply_patch.status = Patched
  SET: 1_apply_patch.1_apply_patch.status = Patched
  SET: 1_apply_patch.1_apply_patch.status = Patched
  SET: 1_apply_patch.status = Patched
  SET: resource.1_apply_patch.status = Patched
  SET: resource.1_apply_patch.status = Patched
  SET: resource.1_apply_patch.status = Patched
  SET: resource.1_apply_patch.status = Patched
  SET: 1_apply_patch.status = Patched
Running: data/master_suite/patch/1_apply_patch.toml → PASS
```

---

## patch_adv/1_restructure_data.toml

### File Content

```toml
[request]
method = "PATCH"
url = "{{base_url}}/resource"

[body]
type = "json"
raw = """
[
  { "op": "copy", "from": "/data/title", "path": "/archive/-" },
  { "op": "move", "from": "/data/tags/0", "path": "/data/version" }
]
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/patch_adv/1_restructure_data.toml
DEBUG: Resolved Request for 1_restructure_data:
  URL: http://localhost:3000/api/v2/patch-adv/resource
RUNNING: PATCH http://localhost:3000/api/v2/patch-adv/resource (1_restructure_data)
DEBUG: Resolved Request for 1_restructure_data:
  URL: http://localhost:3000/api/v2/patch-adv/resource
RUNNING: PATCH http://localhost:3000/api/v2/patch-adv/resource (1_restructure_data)
DEBUG: Resolved Request for 1_restructure_data:
  URL: http://localhost:3000/api/v2/patch-adv/resource
RUNNING: PATCH http://localhost:3000/api/v2/patch-adv/resource (1_restructure_data)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1537ms

Failure Intelligence:
- Node: data/master_suite/patch_adv/1_restructure_data.toml
  Reason: HTTP 404
```

---

## performance/1_retry_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/retry-after"
retries = 3
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/performance/1_retry_test.toml
DEBUG: Resolved Request for 1_retry_test:
  URL: http://localhost:3000/api/v2/performance/retry-after
RUNNING: GET http://localhost:3000/api/v2/performance/retry-after (1_retry_test)
DEBUG: Resolved Request for 1_retry_test:
  URL: http://localhost:3000/api/v2/performance/retry-after
RUNNING: GET http://localhost:3000/api/v2/performance/retry-after (1_retry_test)
DEBUG: Resolved Request for 1_retry_test:
  URL: http://localhost:3000/api/v2/performance/retry-after
RUNNING: GET http://localhost:3000/api/v2/performance/retry-after (1_retry_test)
  SET: 1_retry_test.1_retry_test.status = stable
  SET: 1retrytest.1_retry_test.status = stable
  SET: 1_retry_test.1_retry_test.status = stable
  SET: 1_retry_test.1_retry_test.status = stable
  SET: 1_retry_test.status = stable
  SET: retry-after.1_retry_test.status = stable
  SET: retryafter.1_retry_test.status = stable
  SET: retry-after.1_retry_test.status = stable
  SET: retry-after.1_retry_test.status = stable
  SET: 1_retry_test.status = stable
  SET: 1_retry_test.status = stable
  SET: 1retrytest.status = stable
  SET: 1_retry_test.status = stable
  SET: 1_retry_test.status = stable
  SET: status = stable
  SET: retry-after.status = stable
  SET: retryafter.status = stable
  SET: retry-after.status = stable
  SET: retry-after.status = stable
  SET: status = stable
Running: data/master_suite/performance/1_retry_test.toml → PASS
```

---

## performance/2_assertion_test.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/assertion-stress"

[extract]
memUsed = "metrics.memory.used"
tagFirst = "tags.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/performance/2_assertion_test.toml
DEBUG: Resolved Request for 2_assertion_test:
  URL: http://localhost:3000/api/v2/performance/assertion-stress
RUNNING: GET http://localhost:3000/api/v2/performance/assertion-stress (2_assertion_test)
  SET: 2_assertion_test.memUsed = 80
  SET: 2assertiontest.memUsed = 80
  SET: 2_assertion_test.memUsed = 80
  SET: 2_assertion_test.memUsed = 80
  SET: memUsed = 80
Running: data/master_suite/performance/2_assertion_test.toml → PASS
```

---

## playback/1_replay_user_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/v1/user/1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/playback/1_replay_user_1.toml
DEBUG: Resolved Request for 1_replay_user_1:
  URL: http://localhost:3000/api/v2/playback/v1/user/1
RUNNING: GET http://localhost:3000/api/v2/playback/v1/user/1 (1_replay_user_1)
  SET: 1_replay_user_1.id = 1
  SET: 1replayuser1.id = 1
  SET: 1_replay_user_1.id = 1
  SET: 1_replay_user_1.id = 1
  SET: id = 1
  SET: user.id = 1
  SET: user.id = 1
  SET: user.id = 1
  SET: user.id = 1
  SET: id = 1
  SET: user_id = 1
  SET: 1_replay_user_1.1_replay_user_1.id = 1
  SET: 1replayuser1.1_replay_user_1.id = 1
  SET: 1_replay_user_1.1_replay_user_1.id = 1
  SET: 1_replay_user_1.1_replay_user_1.id = 1
  SET: 1_replay_user_1.id = 1
  SET: user.1_replay_user_1.id = 1
  SET: user.1_replay_user_1.id = 1
  SET: user.1_replay_user_1.id = 1
  SET: user.1_replay_user_1.id = 1
  SET: 1_replay_user_1.id = 1
Running: data/master_suite/playback/1_replay_user_1.toml → PASS
```

---

## playback/2_replay_user_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/v1/user/2"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/playback/2_replay_user_2.toml
DEBUG: Resolved Request for 2_replay_user_2:
  URL: http://localhost:3000/api/v2/playback/v1/user/2
RUNNING: GET http://localhost:3000/api/v2/playback/v1/user/2 (2_replay_user_2)
  SET: 2_replay_user_2.2_replay_user_2.id = 2
  SET: 2replayuser2.2_replay_user_2.id = 2
  SET: 2_replay_user_2.2_replay_user_2.id = 2
  SET: 2_replay_user_2.2_replay_user_2.id = 2
  SET: 2_replay_user_2.id = 2
  SET: user.2_replay_user_2.id = 2
  SET: user.2_replay_user_2.id = 2
  SET: user.2_replay_user_2.id = 2
  SET: user.2_replay_user_2.id = 2
  SET: 2_replay_user_2.id = 2
  SET: 2_replay_user_2.id = 2
  SET: 2replayuser2.id = 2
  SET: 2_replay_user_2.id = 2
  SET: 2_replay_user_2.id = 2
  SET: id = 2
  SET: user.id = 2
  SET: user.id = 2
  SET: user.id = 2
  SET: user.id = 2
  SET: id = 2
  SET: user_id = 2
Running: data/master_suite/playback/2_replay_user_2.toml → PASS
```

---

## playback/3_replay_event.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/v1/event"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/playback/3_replay_event.toml
DEBUG: Resolved Request for 3_replay_event:
  URL: http://localhost:3000/api/v2/playback/v1/event
RUNNING: POST http://localhost:3000/api/v2/playback/v1/event (3_replay_event)
  SET: 3_replay_event.status = Event Replayed
  SET: 3replayevent.status = Event Replayed
  SET: 3_replay_event.status = Event Replayed
  SET: 3_replay_event.status = Event Replayed
  SET: status = Event Replayed
  SET: event.status = Event Replayed
  SET: event.status = Event Replayed
  SET: event.status = Event Replayed
  SET: event.status = Event Replayed
  SET: status = Event Replayed
  SET: 3_replay_event.3_replay_event.status = Event Replayed
  SET: 3replayevent.3_replay_event.status = Event Replayed
  SET: 3_replay_event.3_replay_event.status = Event Replayed
  SET: 3_replay_event.3_replay_event.status = Event Replayed
  SET: 3_replay_event.status = Event Replayed
  SET: event.3_replay_event.status = Event Replayed
  SET: event.3_replay_event.status = Event Replayed
  SET: event.3_replay_event.status = Event Replayed
  SET: event.3_replay_event.status = Event Replayed
  SET: 3_replay_event.status = Event Replayed
Running: data/master_suite/playback/3_replay_event.toml → PASS
```

---

## protocols_adv/1_websub_subscribe.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/hub"

[body]
type = "form"
raw = "hub.mode=subscribe&hub.topic=http://example.com/topic&hub.callback=http://localhost:4000/callback"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/protocols_adv/1_websub_subscribe.toml
DEBUG: Resolved Request for 1_websub_subscribe:
  URL: http://localhost:3000/api/v2/protocols-adv/hub
RUNNING: POST http://localhost:3000/api/v2/protocols-adv/hub (1_websub_subscribe)
DEBUG: Resolved Request for 1_websub_subscribe:
  URL: http://localhost:3000/api/v2/protocols-adv/hub
RUNNING: POST http://localhost:3000/api/v2/protocols-adv/hub (1_websub_subscribe)
DEBUG: Resolved Request for 1_websub_subscribe:
  URL: http://localhost:3000/api/v2/protocols-adv/hub
RUNNING: POST http://localhost:3000/api/v2/protocols-adv/hub (1_websub_subscribe)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1539ms

Failure Intelligence:
- Node: data/master_suite/protocols_adv/1_websub_subscribe.toml
  Reason: HTTP 404
```

---

## protocols_adv/2_detect_push.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/index"

[extract]
pushedResources = "header.Link"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/protocols_adv/2_detect_push.toml
DEBUG: Resolved Request for 2_detect_push:
  URL: http://localhost:3000/api/v2/protocols-adv/index
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/index (2_detect_push)
DEBUG: Resolved Request for 2_detect_push:
  URL: http://localhost:3000/api/v2/protocols-adv/index
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/index (2_detect_push)
DEBUG: Resolved Request for 2_detect_push:
  URL: http://localhost:3000/api/v2/protocols-adv/index
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/index (2_detect_push)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/protocols_adv/2_detect_push.toml
  Reason: HTTP 404
```

---

## protocols_adv/3_quic_discovery.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/quic-discovery"

[extract]
h3_support = "header.Alt-Svc"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/protocols_adv/3_quic_discovery.toml
DEBUG: Resolved Request for 3_quic_discovery:
  URL: http://localhost:3000/api/v2/protocols-adv/quic-discovery
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/quic-discovery (3_quic_discovery)
DEBUG: Resolved Request for 3_quic_discovery:
  URL: http://localhost:3000/api/v2/protocols-adv/quic-discovery
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/quic-discovery (3_quic_discovery)
DEBUG: Resolved Request for 3_quic_discovery:
  URL: http://localhost:3000/api/v2/protocols-adv/quic-discovery
RUNNING: GET http://localhost:3000/api/v2/protocols-adv/quic-discovery (3_quic_discovery)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/protocols_adv/3_quic_discovery.toml
  Reason: HTTP 404
```

---

## proxy_mtls/1_proxy_handshake.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/behind-proxy"

[headers]
Proxy-Authorization = "Basic cnVtb3VyOnNlY3JldA=="
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/proxy_mtls/1_proxy_handshake.toml
DEBUG: Resolved Request for 1_proxy_handshake:
  URL: http://localhost:3000/api/v2/proxy-mtls/behind-proxy
  Header: Proxy-Authorization: Basic cnVtb3VyOnNlY3JldA==
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/behind-proxy (1_proxy_handshake)
DEBUG: Resolved Request for 1_proxy_handshake:
  URL: http://localhost:3000/api/v2/proxy-mtls/behind-proxy
  Header: Proxy-Authorization: Basic cnVtb3VyOnNlY3JldA==
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/behind-proxy (1_proxy_handshake)
DEBUG: Resolved Request for 1_proxy_handshake:
  URL: http://localhost:3000/api/v2/proxy-mtls/behind-proxy
  Header: Proxy-Authorization: Basic cnVtb3VyOnNlY3JldA==
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/behind-proxy (1_proxy_handshake)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1538ms

Failure Intelligence:
- Node: data/master_suite/proxy_mtls/1_proxy_handshake.toml
  Reason: HTTP 404
```

---

## proxy_mtls/2_mtls_request.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/mtls-protected"

[headers]
x-client-cert-dn = "CN=Rumour-Client, O=Rumour-Audit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/proxy_mtls/2_mtls_request.toml
DEBUG: Resolved Request for 2_mtls_request:
  URL: http://localhost:3000/api/v2/proxy-mtls/mtls-protected
  Header: x-client-cert-dn: CN=Rumour-Client, O=Rumour-Audit
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/mtls-protected (2_mtls_request)
DEBUG: Resolved Request for 2_mtls_request:
  URL: http://localhost:3000/api/v2/proxy-mtls/mtls-protected
  Header: x-client-cert-dn: CN=Rumour-Client, O=Rumour-Audit
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/mtls-protected (2_mtls_request)
DEBUG: Resolved Request for 2_mtls_request:
  URL: http://localhost:3000/api/v2/proxy-mtls/mtls-protected
  Header: x-client-cert-dn: CN=Rumour-Client, O=Rumour-Audit
RUNNING: GET http://localhost:3000/api/v2/proxy-mtls/mtls-protected (2_mtls_request)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1536ms

Failure Intelligence:
- Node: data/master_suite/proxy_mtls/2_mtls_request.toml
  Reason: HTTP 404
```

---

## realtime/1_ws_handshake.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/handshake"

[headers]
Upgrade = "websocket"
Connection = "Upgrade"
Sec-WebSocket-Key = "dGhlIHNhbXBsZSBub25jZQ=="
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/realtime/1_ws_handshake.toml
DEBUG: Resolved Request for 1_ws_handshake:
  URL: http://localhost:3000/api/v2/realtime/handshake
  Header: Upgrade: websocket
  Header: Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
  Header: Connection: Upgrade
RUNNING: GET http://localhost:3000/api/v2/realtime/handshake (1_ws_handshake)
  SET: 1_ws_handshake.status = 101
  SET: 1wshandshake.status = 101
  SET: 1_ws_handshake.status = 101
  SET: 1_ws_handshake.status = 101
  SET: status = 101
  SET: handshake.status = 101
  SET: handshake.status = 101
  SET: handshake.status = 101
  SET: handshake.status = 101
  SET: status = 101
  SET: 1_ws_handshake.1_ws_handshake.status = 101
  SET: 1wshandshake.1_ws_handshake.status = 101
  SET: 1_ws_handshake.1_ws_handshake.status = 101
  SET: 1_ws_handshake.1_ws_handshake.status = 101
  SET: 1_ws_handshake.status = 101
  SET: handshake.1_ws_handshake.status = 101
  SET: handshake.1_ws_handshake.status = 101
  SET: handshake.1_ws_handshake.status = 101
  SET: handshake.1_ws_handshake.status = 101
  SET: 1_ws_handshake.status = 101
Running: data/master_suite/realtime/1_ws_handshake.toml → PASS
```

---

## realtime/2_fail_handshake.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/handshake"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/realtime/2_fail_handshake.toml
DEBUG: Resolved Request for 2_fail_handshake:
  URL: http://localhost:3000/api/v2/realtime/handshake
RUNNING: GET http://localhost:3000/api/v2/realtime/handshake (2_fail_handshake)
DEBUG: Resolved Request for 2_fail_handshake:
  URL: http://localhost:3000/api/v2/realtime/handshake
RUNNING: GET http://localhost:3000/api/v2/realtime/handshake (2_fail_handshake)
DEBUG: Resolved Request for 2_fail_handshake:
  URL: http://localhost:3000/api/v2/realtime/handshake
RUNNING: GET http://localhost:3000/api/v2/realtime/handshake (2_fail_handshake)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1524ms

Failure Intelligence:
- Node: data/master_suite/realtime/2_fail_handshake.toml
  Reason: HTTP 426
```

---

## realtime_adv/1_sse_heartbeat.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/sse-multi"

[headers]
Accept = "text/event-stream"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/realtime_adv/1_sse_heartbeat.toml
DEBUG: Resolved Request for 1_sse_heartbeat:
  URL: http://localhost:3000/api/v2/realtime-adv/sse-multi
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/sse-multi (1_sse_heartbeat)
DEBUG: Resolved Request for 1_sse_heartbeat:
  URL: http://localhost:3000/api/v2/realtime-adv/sse-multi
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/sse-multi (1_sse_heartbeat)
DEBUG: Resolved Request for 1_sse_heartbeat:
  URL: http://localhost:3000/api/v2/realtime-adv/sse-multi
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/sse-multi (1_sse_heartbeat)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1533ms

Failure Intelligence:
- Node: data/master_suite/realtime_adv/1_sse_heartbeat.toml
  Reason: HTTP 404
```

---

## realtime_adv/2_long_polling.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/long-poll"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/realtime_adv/2_long_polling.toml
DEBUG: Resolved Request for 2_long_polling:
  URL: http://localhost:3000/api/v2/realtime-adv/long-poll
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/long-poll (2_long_polling)
DEBUG: Resolved Request for 2_long_polling:
  URL: http://localhost:3000/api/v2/realtime-adv/long-poll
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/long-poll (2_long_polling)
DEBUG: Resolved Request for 2_long_polling:
  URL: http://localhost:3000/api/v2/realtime-adv/long-poll
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/long-poll (2_long_polling)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/realtime_adv/2_long_polling.toml
  Reason: HTTP 404
```

---

## realtime_adv/3_mqtt_binary.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/mqtt-sim"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/realtime_adv/3_mqtt_binary.toml
DEBUG: Resolved Request for 3_mqtt_binary:
  URL: http://localhost:3000/api/v2/realtime-adv/mqtt-sim
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/mqtt-sim (3_mqtt_binary)
DEBUG: Resolved Request for 3_mqtt_binary:
  URL: http://localhost:3000/api/v2/realtime-adv/mqtt-sim
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/mqtt-sim (3_mqtt_binary)
DEBUG: Resolved Request for 3_mqtt_binary:
  URL: http://localhost:3000/api/v2/realtime-adv/mqtt-sim
RUNNING: GET http://localhost:3000/api/v2/realtime-adv/mqtt-sim (3_mqtt_binary)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/realtime_adv/3_mqtt_binary.toml
  Reason: HTTP 404
```

---

## recursive/1_linked_list.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/linked-list"

[extract]
tailValue = "next.next.value"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/recursive/1_linked_list.toml
DEBUG: Resolved Request for 1_linked_list:
  URL: http://localhost:3000/api/v2/recursive/linked-list
RUNNING: GET http://localhost:3000/api/v2/recursive/linked-list (1_linked_list)
  SET: 1_linked_list.tailValue = Node 2
  SET: 1linkedlist.tailValue = Node 2
  SET: 1_linked_list.tailValue = Node 2
  SET: 1_linked_list.tailValue = Node 2
  SET: tailValue = Node 2
  SET: 1_linked_list.1_linked_list.id = 1
  SET: 1linkedlist.1_linked_list.id = 1
  SET: 1_linked_list.1_linked_list.id = 1
  SET: 1_linked_list.1_linked_list.id = 1
  SET: 1_linked_list.id = 1
  SET: linked-list.1_linked_list.id = 1
  SET: linkedlist.1_linked_list.id = 1
  SET: linked-list.1_linked_list.id = 1
  SET: linked-list.1_linked_list.id = 1
  SET: 1_linked_list.id = 1
  SET: 1_linked_list.id = 1
  SET: 1linkedlist.id = 1
  SET: 1_linked_list.id = 1
  SET: 1_linked_list.id = 1
  SET: id = 1
  SET: linked-list.id = 1
  SET: linkedlist.id = 1
  SET: linked-list.id = 1
  SET: linked-list.id = 1
  SET: id = 1
  SET: linked-list_id = 1
Running: data/master_suite/recursive/1_linked_list.toml → PASS
```

---

## recursive/2_tree_structure.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/tree"

[extract]
grandChildName = "children.0.children.0.name"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/recursive/2_tree_structure.toml
DEBUG: Resolved Request for 2_tree_structure:
  URL: http://localhost:3000/api/v2/recursive/tree
RUNNING: GET http://localhost:3000/api/v2/recursive/tree (2_tree_structure)
Running: data/master_suite/recursive/2_tree_structure.toml → PASS
```

---

## resilience/1_burst_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_1.toml
DEBUG: Resolved Request for 1_burst_node_1:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_1)
  SET: 1_burst_node_1.1_burst_node_1.status = ok
  SET: 1burstnode1.1_burst_node_1.status = ok
  SET: 1_burst_node_1.1_burst_node_1.status = ok
  SET: 1_burst_node_1.1_burst_node_1.status = ok
  SET: 1_burst_node_1.status = ok
  SET: rate-limit.1_burst_node_1.status = ok
  SET: ratelimit.1_burst_node_1.status = ok
  SET: rate-limit.1_burst_node_1.status = ok
  SET: rate-limit.1_burst_node_1.status = ok
  SET: 1_burst_node_1.status = ok
  SET: 1_burst_node_1.tokens_remaining = 9
  SET: 1burstnode1.tokens_remaining = 9
  SET: 1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.tokens_remaining = 9
  SET: tokens_remaining = 9
  SET: rate-limit.tokens_remaining = 9
  SET: ratelimit.tokens_remaining = 9
  SET: rate-limit.tokens_remaining = 9
  SET: rate-limit.tokens_remaining = 9
  SET: tokens_remaining = 9
  SET: 1_burst_node_1.1_burst_node_1.tokens_remaining = 9
  SET: 1burstnode1.1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.tokens_remaining = 9
  SET: rate-limit.1_burst_node_1.tokens_remaining = 9
  SET: ratelimit.1_burst_node_1.tokens_remaining = 9
  SET: rate-limit.1_burst_node_1.tokens_remaining = 9
  SET: rate-limit.1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.tokens_remaining = 9
  SET: 1_burst_node_1.status = ok
  SET: 1burstnode1.status = ok
  SET: 1_burst_node_1.status = ok
  SET: 1_burst_node_1.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
Running: data/master_suite/resilience/1_burst_node_1.toml → PASS
```

---

## resilience/1_burst_node_10.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_10.toml
DEBUG: Resolved Request for 1_burst_node_10:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_10)
  SET: 1_burst_node_10.1_burst_node_10.tokens_remaining = 8
  SET: 1burstnode10.1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.tokens_remaining = 8
  SET: rate-limit.1_burst_node_10.tokens_remaining = 8
  SET: ratelimit.1_burst_node_10.tokens_remaining = 8
  SET: rate-limit.1_burst_node_10.tokens_remaining = 8
  SET: rate-limit.1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.1_burst_node_10.status = ok
  SET: 1burstnode10.1_burst_node_10.status = ok
  SET: 1_burst_node_10.1_burst_node_10.status = ok
  SET: 1_burst_node_10.1_burst_node_10.status = ok
  SET: 1_burst_node_10.status = ok
  SET: rate-limit.1_burst_node_10.status = ok
  SET: ratelimit.1_burst_node_10.status = ok
  SET: rate-limit.1_burst_node_10.status = ok
  SET: rate-limit.1_burst_node_10.status = ok
  SET: 1_burst_node_10.status = ok
  SET: 1_burst_node_10.tokens_remaining = 8
  SET: 1burstnode10.tokens_remaining = 8
  SET: 1_burst_node_10.tokens_remaining = 8
  SET: 1_burst_node_10.tokens_remaining = 8
  SET: tokens_remaining = 8
  SET: rate-limit.tokens_remaining = 8
  SET: ratelimit.tokens_remaining = 8
  SET: rate-limit.tokens_remaining = 8
  SET: rate-limit.tokens_remaining = 8
  SET: tokens_remaining = 8
  SET: 1_burst_node_10.status = ok
  SET: 1burstnode10.status = ok
  SET: 1_burst_node_10.status = ok
  SET: 1_burst_node_10.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
Running: data/master_suite/resilience/1_burst_node_10.toml → PASS
```

---

## resilience/1_burst_node_11.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_11.toml
DEBUG: Resolved Request for 1_burst_node_11:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_11)
  SET: 1_burst_node_11.tokens_remaining = 7
  SET: 1burstnode11.tokens_remaining = 7
  SET: 1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.tokens_remaining = 7
  SET: tokens_remaining = 7
  SET: rate-limit.tokens_remaining = 7
  SET: ratelimit.tokens_remaining = 7
  SET: rate-limit.tokens_remaining = 7
  SET: rate-limit.tokens_remaining = 7
  SET: tokens_remaining = 7
  SET: 1_burst_node_11.1_burst_node_11.tokens_remaining = 7
  SET: 1burstnode11.1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.tokens_remaining = 7
  SET: rate-limit.1_burst_node_11.tokens_remaining = 7
  SET: ratelimit.1_burst_node_11.tokens_remaining = 7
  SET: rate-limit.1_burst_node_11.tokens_remaining = 7
  SET: rate-limit.1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.tokens_remaining = 7
  SET: 1_burst_node_11.1_burst_node_11.status = ok
  SET: 1burstnode11.1_burst_node_11.status = ok
  SET: 1_burst_node_11.1_burst_node_11.status = ok
  SET: 1_burst_node_11.1_burst_node_11.status = ok
  SET: 1_burst_node_11.status = ok
  SET: rate-limit.1_burst_node_11.status = ok
  SET: ratelimit.1_burst_node_11.status = ok
  SET: rate-limit.1_burst_node_11.status = ok
  SET: rate-limit.1_burst_node_11.status = ok
  SET: 1_burst_node_11.status = ok
  SET: 1_burst_node_11.status = ok
  SET: 1burstnode11.status = ok
  SET: 1_burst_node_11.status = ok
  SET: 1_burst_node_11.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
Running: data/master_suite/resilience/1_burst_node_11.toml → PASS
```

---

## resilience/1_burst_node_12.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_12.toml
DEBUG: Resolved Request for 1_burst_node_12:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_12)
  SET: 1_burst_node_12.1_burst_node_12.status = ok
  SET: 1burstnode12.1_burst_node_12.status = ok
  SET: 1_burst_node_12.1_burst_node_12.status = ok
  SET: 1_burst_node_12.1_burst_node_12.status = ok
  SET: 1_burst_node_12.status = ok
  SET: rate-limit.1_burst_node_12.status = ok
  SET: ratelimit.1_burst_node_12.status = ok
  SET: rate-limit.1_burst_node_12.status = ok
  SET: rate-limit.1_burst_node_12.status = ok
  SET: 1_burst_node_12.status = ok
  SET: 1_burst_node_12.tokens_remaining = 6
  SET: 1burstnode12.tokens_remaining = 6
  SET: 1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.tokens_remaining = 6
  SET: tokens_remaining = 6
  SET: rate-limit.tokens_remaining = 6
  SET: ratelimit.tokens_remaining = 6
  SET: rate-limit.tokens_remaining = 6
  SET: rate-limit.tokens_remaining = 6
  SET: tokens_remaining = 6
  SET: 1_burst_node_12.1_burst_node_12.tokens_remaining = 6
  SET: 1burstnode12.1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.tokens_remaining = 6
  SET: rate-limit.1_burst_node_12.tokens_remaining = 6
  SET: ratelimit.1_burst_node_12.tokens_remaining = 6
  SET: rate-limit.1_burst_node_12.tokens_remaining = 6
  SET: rate-limit.1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.tokens_remaining = 6
  SET: 1_burst_node_12.status = ok
  SET: 1burstnode12.status = ok
  SET: 1_burst_node_12.status = ok
  SET: 1_burst_node_12.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
Running: data/master_suite/resilience/1_burst_node_12.toml → PASS
```

---

## resilience/1_burst_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_2.toml
DEBUG: Resolved Request for 1_burst_node_2:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_2)
  SET: 1_burst_node_2.tokens_remaining = 5
  SET: 1burstnode2.tokens_remaining = 5
  SET: 1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.tokens_remaining = 5
  SET: tokens_remaining = 5
  SET: rate-limit.tokens_remaining = 5
  SET: ratelimit.tokens_remaining = 5
  SET: rate-limit.tokens_remaining = 5
  SET: rate-limit.tokens_remaining = 5
  SET: tokens_remaining = 5
  SET: 1_burst_node_2.1_burst_node_2.tokens_remaining = 5
  SET: 1burstnode2.1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.tokens_remaining = 5
  SET: rate-limit.1_burst_node_2.tokens_remaining = 5
  SET: ratelimit.1_burst_node_2.tokens_remaining = 5
  SET: rate-limit.1_burst_node_2.tokens_remaining = 5
  SET: rate-limit.1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.tokens_remaining = 5
  SET: 1_burst_node_2.status = ok
  SET: 1burstnode2.status = ok
  SET: 1_burst_node_2.status = ok
  SET: 1_burst_node_2.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_2.1_burst_node_2.status = ok
  SET: 1burstnode2.1_burst_node_2.status = ok
  SET: 1_burst_node_2.1_burst_node_2.status = ok
  SET: 1_burst_node_2.1_burst_node_2.status = ok
  SET: 1_burst_node_2.status = ok
  SET: rate-limit.1_burst_node_2.status = ok
  SET: ratelimit.1_burst_node_2.status = ok
  SET: rate-limit.1_burst_node_2.status = ok
  SET: rate-limit.1_burst_node_2.status = ok
  SET: 1_burst_node_2.status = ok
Running: data/master_suite/resilience/1_burst_node_2.toml → PASS
```

---

## resilience/1_burst_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_3.toml
DEBUG: Resolved Request for 1_burst_node_3:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_3)
  SET: 1_burst_node_3.tokens_remaining = 4
  SET: 1burstnode3.tokens_remaining = 4
  SET: 1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.tokens_remaining = 4
  SET: tokens_remaining = 4
  SET: rate-limit.tokens_remaining = 4
  SET: ratelimit.tokens_remaining = 4
  SET: rate-limit.tokens_remaining = 4
  SET: rate-limit.tokens_remaining = 4
  SET: tokens_remaining = 4
  SET: 1_burst_node_3.1_burst_node_3.tokens_remaining = 4
  SET: 1burstnode3.1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.tokens_remaining = 4
  SET: rate-limit.1_burst_node_3.tokens_remaining = 4
  SET: ratelimit.1_burst_node_3.tokens_remaining = 4
  SET: rate-limit.1_burst_node_3.tokens_remaining = 4
  SET: rate-limit.1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.tokens_remaining = 4
  SET: 1_burst_node_3.1_burst_node_3.status = ok
  SET: 1burstnode3.1_burst_node_3.status = ok
  SET: 1_burst_node_3.1_burst_node_3.status = ok
  SET: 1_burst_node_3.1_burst_node_3.status = ok
  SET: 1_burst_node_3.status = ok
  SET: rate-limit.1_burst_node_3.status = ok
  SET: ratelimit.1_burst_node_3.status = ok
  SET: rate-limit.1_burst_node_3.status = ok
  SET: rate-limit.1_burst_node_3.status = ok
  SET: 1_burst_node_3.status = ok
  SET: 1_burst_node_3.status = ok
  SET: 1burstnode3.status = ok
  SET: 1_burst_node_3.status = ok
  SET: 1_burst_node_3.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
Running: data/master_suite/resilience/1_burst_node_3.toml → PASS
```

---

## resilience/1_burst_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_4.toml
DEBUG: Resolved Request for 1_burst_node_4:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_4)
  SET: 1_burst_node_4.status = ok
  SET: 1burstnode4.status = ok
  SET: 1_burst_node_4.status = ok
  SET: 1_burst_node_4.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_4.1_burst_node_4.status = ok
  SET: 1burstnode4.1_burst_node_4.status = ok
  SET: 1_burst_node_4.1_burst_node_4.status = ok
  SET: 1_burst_node_4.1_burst_node_4.status = ok
  SET: 1_burst_node_4.status = ok
  SET: rate-limit.1_burst_node_4.status = ok
  SET: ratelimit.1_burst_node_4.status = ok
  SET: rate-limit.1_burst_node_4.status = ok
  SET: rate-limit.1_burst_node_4.status = ok
  SET: 1_burst_node_4.status = ok
  SET: 1_burst_node_4.tokens_remaining = 3
  SET: 1burstnode4.tokens_remaining = 3
  SET: 1_burst_node_4.tokens_remaining = 3
  SET: 1_burst_node_4.tokens_remaining = 3
  SET: tokens_remaining = 3
  SET: rate-limit.tokens_remaining = 3
  SET: ratelimit.tokens_remaining = 3
  SET: rate-limit.tokens_remaining = 3
  SET: rate-limit.tokens_remaining = 3
  SET: tokens_remaining = 3
  SET: 1_burst_node_4.1_burst_node_4.tokens_remaining = 3
  SET: 1burstnode4.1_burst_node_4.tokens_remaining = 3
  SET: 1_burst_node_4.1_burst_node_4.tokens_remaining = 3
  SET: 1_burst_node_4.1_burst_node_4.tokens_remaining = 3
  SET: 1_burst_node_4.tokens_remaining = 3
  SET: rate-limit.1_burst_node_4.tokens_remaining = 3
  SET: ratelimit.1_burst_node_4.tokens_remaining = 3
  SET: rate-limit.1_burst_node_4.tokens_remaining = 3
  SET: rate-limit.1_burst_node_4.tokens_remaining = 3
  SET: 1_burst_node_4.tokens_remaining = 3
Running: data/master_suite/resilience/1_burst_node_4.toml → PASS
```

---

## resilience/1_burst_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_5.toml
DEBUG: Resolved Request for 1_burst_node_5:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_5)
  SET: 1_burst_node_5.status = ok
  SET: 1burstnode5.status = ok
  SET: 1_burst_node_5.status = ok
  SET: 1_burst_node_5.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_5.1_burst_node_5.status = ok
  SET: 1burstnode5.1_burst_node_5.status = ok
  SET: 1_burst_node_5.1_burst_node_5.status = ok
  SET: 1_burst_node_5.1_burst_node_5.status = ok
  SET: 1_burst_node_5.status = ok
  SET: rate-limit.1_burst_node_5.status = ok
  SET: ratelimit.1_burst_node_5.status = ok
  SET: rate-limit.1_burst_node_5.status = ok
  SET: rate-limit.1_burst_node_5.status = ok
  SET: 1_burst_node_5.status = ok
  SET: 1_burst_node_5.tokens_remaining = 2
  SET: 1burstnode5.tokens_remaining = 2
  SET: 1_burst_node_5.tokens_remaining = 2
  SET: 1_burst_node_5.tokens_remaining = 2
  SET: tokens_remaining = 2
  SET: rate-limit.tokens_remaining = 2
  SET: ratelimit.tokens_remaining = 2
  SET: rate-limit.tokens_remaining = 2
  SET: rate-limit.tokens_remaining = 2
  SET: tokens_remaining = 2
  SET: 1_burst_node_5.1_burst_node_5.tokens_remaining = 2
  SET: 1burstnode5.1_burst_node_5.tokens_remaining = 2
  SET: 1_burst_node_5.1_burst_node_5.tokens_remaining = 2
  SET: 1_burst_node_5.1_burst_node_5.tokens_remaining = 2
  SET: 1_burst_node_5.tokens_remaining = 2
  SET: rate-limit.1_burst_node_5.tokens_remaining = 2
  SET: ratelimit.1_burst_node_5.tokens_remaining = 2
  SET: rate-limit.1_burst_node_5.tokens_remaining = 2
  SET: rate-limit.1_burst_node_5.tokens_remaining = 2
  SET: 1_burst_node_5.tokens_remaining = 2
Running: data/master_suite/resilience/1_burst_node_5.toml → PASS
```

---

## resilience/1_burst_node_6.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_6.toml
DEBUG: Resolved Request for 1_burst_node_6:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_6)
  SET: 1_burst_node_6.status = ok
  SET: 1burstnode6.status = ok
  SET: 1_burst_node_6.status = ok
  SET: 1_burst_node_6.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_6.1_burst_node_6.status = ok
  SET: 1burstnode6.1_burst_node_6.status = ok
  SET: 1_burst_node_6.1_burst_node_6.status = ok
  SET: 1_burst_node_6.1_burst_node_6.status = ok
  SET: 1_burst_node_6.status = ok
  SET: rate-limit.1_burst_node_6.status = ok
  SET: ratelimit.1_burst_node_6.status = ok
  SET: rate-limit.1_burst_node_6.status = ok
  SET: rate-limit.1_burst_node_6.status = ok
  SET: 1_burst_node_6.status = ok
  SET: 1_burst_node_6.1_burst_node_6.tokens_remaining = 1
  SET: 1burstnode6.1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.tokens_remaining = 1
  SET: rate-limit.1_burst_node_6.tokens_remaining = 1
  SET: ratelimit.1_burst_node_6.tokens_remaining = 1
  SET: rate-limit.1_burst_node_6.tokens_remaining = 1
  SET: rate-limit.1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.tokens_remaining = 1
  SET: 1burstnode6.tokens_remaining = 1
  SET: 1_burst_node_6.tokens_remaining = 1
  SET: 1_burst_node_6.tokens_remaining = 1
  SET: tokens_remaining = 1
  SET: rate-limit.tokens_remaining = 1
  SET: ratelimit.tokens_remaining = 1
  SET: rate-limit.tokens_remaining = 1
  SET: rate-limit.tokens_remaining = 1
  SET: tokens_remaining = 1
Running: data/master_suite/resilience/1_burst_node_6.toml → PASS
```

---

## resilience/1_burst_node_7.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_7.toml
DEBUG: Resolved Request for 1_burst_node_7:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_7)
  SET: 1_burst_node_7.status = ok
  SET: 1burstnode7.status = ok
  SET: 1_burst_node_7.status = ok
  SET: 1_burst_node_7.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_7.1_burst_node_7.status = ok
  SET: 1burstnode7.1_burst_node_7.status = ok
  SET: 1_burst_node_7.1_burst_node_7.status = ok
  SET: 1_burst_node_7.1_burst_node_7.status = ok
  SET: 1_burst_node_7.status = ok
  SET: rate-limit.1_burst_node_7.status = ok
  SET: ratelimit.1_burst_node_7.status = ok
  SET: rate-limit.1_burst_node_7.status = ok
  SET: rate-limit.1_burst_node_7.status = ok
  SET: 1_burst_node_7.status = ok
  SET: 1_burst_node_7.tokens_remaining = 0
  SET: 1burstnode7.tokens_remaining = 0
  SET: 1_burst_node_7.tokens_remaining = 0
  SET: 1_burst_node_7.tokens_remaining = 0
  SET: tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: ratelimit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: tokens_remaining = 0
  SET: 1_burst_node_7.1_burst_node_7.tokens_remaining = 0
  SET: 1burstnode7.1_burst_node_7.tokens_remaining = 0
  SET: 1_burst_node_7.1_burst_node_7.tokens_remaining = 0
  SET: 1_burst_node_7.1_burst_node_7.tokens_remaining = 0
  SET: 1_burst_node_7.tokens_remaining = 0
  SET: rate-limit.1_burst_node_7.tokens_remaining = 0
  SET: ratelimit.1_burst_node_7.tokens_remaining = 0
  SET: rate-limit.1_burst_node_7.tokens_remaining = 0
  SET: rate-limit.1_burst_node_7.tokens_remaining = 0
  SET: 1_burst_node_7.tokens_remaining = 0
Running: data/master_suite/resilience/1_burst_node_7.toml → PASS
```

---

## resilience/1_burst_node_8.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_8.toml
DEBUG: Resolved Request for 1_burst_node_8:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_8)
DEBUG: Resolved Request for 1_burst_node_8:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_8)
  SET: 1_burst_node_8.status = ok
  SET: 1burstnode8.status = ok
  SET: 1_burst_node_8.status = ok
  SET: 1_burst_node_8.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_8.1_burst_node_8.status = ok
  SET: 1burstnode8.1_burst_node_8.status = ok
  SET: 1_burst_node_8.1_burst_node_8.status = ok
  SET: 1_burst_node_8.1_burst_node_8.status = ok
  SET: 1_burst_node_8.status = ok
  SET: rate-limit.1_burst_node_8.status = ok
  SET: ratelimit.1_burst_node_8.status = ok
  SET: rate-limit.1_burst_node_8.status = ok
  SET: rate-limit.1_burst_node_8.status = ok
  SET: 1_burst_node_8.status = ok
  SET: 1_burst_node_8.tokens_remaining = 0
  SET: 1burstnode8.tokens_remaining = 0
  SET: 1_burst_node_8.tokens_remaining = 0
  SET: 1_burst_node_8.tokens_remaining = 0
  SET: tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: ratelimit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: tokens_remaining = 0
  SET: 1_burst_node_8.1_burst_node_8.tokens_remaining = 0
  SET: 1burstnode8.1_burst_node_8.tokens_remaining = 0
  SET: 1_burst_node_8.1_burst_node_8.tokens_remaining = 0
  SET: 1_burst_node_8.1_burst_node_8.tokens_remaining = 0
  SET: 1_burst_node_8.tokens_remaining = 0
  SET: rate-limit.1_burst_node_8.tokens_remaining = 0
  SET: ratelimit.1_burst_node_8.tokens_remaining = 0
  SET: rate-limit.1_burst_node_8.tokens_remaining = 0
  SET: rate-limit.1_burst_node_8.tokens_remaining = 0
  SET: 1_burst_node_8.tokens_remaining = 0
Running: data/master_suite/resilience/1_burst_node_8.toml → PASS
```

---

## resilience/1_burst_node_9.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/rate-limit"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/1_burst_node_9.toml
DEBUG: Resolved Request for 1_burst_node_9:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_9)
DEBUG: Resolved Request for 1_burst_node_9:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_9)
DEBUG: Resolved Request for 1_burst_node_9:
  URL: http://localhost:3000/api/v2/resilience/rate-limit
RUNNING: GET http://localhost:3000/api/v2/resilience/rate-limit (1_burst_node_9)
  SET: 1_burst_node_9.1_burst_node_9.status = ok
  SET: 1burstnode9.1_burst_node_9.status = ok
  SET: 1_burst_node_9.1_burst_node_9.status = ok
  SET: 1_burst_node_9.1_burst_node_9.status = ok
  SET: 1_burst_node_9.status = ok
  SET: rate-limit.1_burst_node_9.status = ok
  SET: ratelimit.1_burst_node_9.status = ok
  SET: rate-limit.1_burst_node_9.status = ok
  SET: rate-limit.1_burst_node_9.status = ok
  SET: 1_burst_node_9.status = ok
  SET: 1_burst_node_9.1_burst_node_9.tokens_remaining = 0
  SET: 1burstnode9.1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.tokens_remaining = 0
  SET: rate-limit.1_burst_node_9.tokens_remaining = 0
  SET: ratelimit.1_burst_node_9.tokens_remaining = 0
  SET: rate-limit.1_burst_node_9.tokens_remaining = 0
  SET: rate-limit.1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.status = ok
  SET: 1burstnode9.status = ok
  SET: 1_burst_node_9.status = ok
  SET: 1_burst_node_9.status = ok
  SET: status = ok
  SET: rate-limit.status = ok
  SET: ratelimit.status = ok
  SET: rate-limit.status = ok
  SET: rate-limit.status = ok
  SET: status = ok
  SET: 1_burst_node_9.tokens_remaining = 0
  SET: 1burstnode9.tokens_remaining = 0
  SET: 1_burst_node_9.tokens_remaining = 0
  SET: 1_burst_node_9.tokens_remaining = 0
  SET: tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: ratelimit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: rate-limit.tokens_remaining = 0
  SET: tokens_remaining = 0
Running: data/master_suite/resilience/1_burst_node_9.toml → PASS
```

---

## resilience/2_trip_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/stable-resource?fail=true"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/2_trip_node_1.toml
DEBUG: Resolved Request for 2_trip_node_1:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_1)
DEBUG: Resolved Request for 2_trip_node_1:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_1)
DEBUG: Resolved Request for 2_trip_node_1:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/resilience/2_trip_node_1.toml
  Reason: HTTP 500
```

---

## resilience/2_trip_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/stable-resource?fail=true"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/2_trip_node_2.toml
DEBUG: Resolved Request for 2_trip_node_2:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_2)
DEBUG: Resolved Request for 2_trip_node_2:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_2)
DEBUG: Resolved Request for 2_trip_node_2:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1529ms

Failure Intelligence:
- Node: data/master_suite/resilience/2_trip_node_2.toml
  Reason: HTTP 503
```

---

## resilience/2_trip_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/stable-resource?fail=true"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/2_trip_node_3.toml
DEBUG: Resolved Request for 2_trip_node_3:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_3)
DEBUG: Resolved Request for 2_trip_node_3:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_3)
DEBUG: Resolved Request for 2_trip_node_3:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/resilience/2_trip_node_3.toml
  Reason: HTTP 503
```

---

## resilience/2_trip_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/stable-resource?fail=true"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/resilience/2_trip_node_4.toml
DEBUG: Resolved Request for 2_trip_node_4:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_4)
DEBUG: Resolved Request for 2_trip_node_4:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_4)
DEBUG: Resolved Request for 2_trip_node_4:
  URL: http://localhost:3000/api/v2/resilience/stable-resource?fail=true
RUNNING: GET http://localhost:3000/api/v2/resilience/stable-resource?fail=true (2_trip_node_4)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/resilience/2_trip_node_4.toml
  Reason: HTTP 503
```

---

## schema/1_valid_schema.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "id": "schema-{{random}}",
  "name": "Validator",
  "age": 30
}
"""

[extract]
schema_valid_id = "id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/schema/1_valid_schema.toml
DEBUG: Resolved Request for 1_valid_schema:
  URL: http://localhost:3000/api/v2/schema/validate
RUNNING: POST http://localhost:3000/api/v2/schema/validate (1_valid_schema)
  SET: 1_valid_schema.status = Schema is valid
  SET: 1validschema.status = Schema is valid
  SET: 1_valid_schema.status = Schema is valid
  SET: 1_valid_schema.status = Schema is valid
  SET: status = Schema is valid
  SET: validate.status = Schema is valid
  SET: validate.status = Schema is valid
  SET: validate.status = Schema is valid
  SET: validate.status = Schema is valid
  SET: status = Schema is valid
  SET: 1_valid_schema.1_valid_schema.status = Schema is valid
  SET: 1validschema.1_valid_schema.status = Schema is valid
  SET: 1_valid_schema.1_valid_schema.status = Schema is valid
  SET: 1_valid_schema.1_valid_schema.status = Schema is valid
  SET: 1_valid_schema.status = Schema is valid
  SET: validate.1_valid_schema.status = Schema is valid
  SET: validate.1_valid_schema.status = Schema is valid
  SET: validate.1_valid_schema.status = Schema is valid
  SET: validate.1_valid_schema.status = Schema is valid
  SET: 1_valid_schema.status = Schema is valid
Running: data/master_suite/schema/1_valid_schema.toml → PASS
```

---

## schema/2_invalid_schema.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/validate"

[body]
type = "json"
raw = """
{
  "name": "Invalid"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/schema/2_invalid_schema.toml
DEBUG: Resolved Request for 2_invalid_schema:
  URL: http://localhost:3000/api/v2/schema/validate
RUNNING: POST http://localhost:3000/api/v2/schema/validate (2_invalid_schema)
DEBUG: Resolved Request for 2_invalid_schema:
  URL: http://localhost:3000/api/v2/schema/validate
RUNNING: POST http://localhost:3000/api/v2/schema/validate (2_invalid_schema)
DEBUG: Resolved Request for 2_invalid_schema:
  URL: http://localhost:3000/api/v2/schema/validate
RUNNING: POST http://localhost:3000/api/v2/schema/validate (2_invalid_schema)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1538ms

Failure Intelligence:
- Node: data/master_suite/schema/2_invalid_schema.toml
  Reason: HTTP 422
```

---

## scripting/1_pre_script.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/validate-pre"

[headers]
X-Rumour-Computed = "6f0622607137f867491f2e14a1c5d0b4"

[body]
type = "json"
raw = """
{"id": 100}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/scripting/1_pre_script.toml
DEBUG: Resolved Request for 1_pre_script:
  URL: http://localhost:3000/api/v2/scripting/validate-pre
  Header: X-Rumour-Computed: 6f0622607137f867491f2e14a1c5d0b4
RUNNING: POST http://localhost:3000/api/v2/scripting/validate-pre (1_pre_script)
DEBUG: Resolved Request for 1_pre_script:
  URL: http://localhost:3000/api/v2/scripting/validate-pre
  Header: X-Rumour-Computed: 6f0622607137f867491f2e14a1c5d0b4
RUNNING: POST http://localhost:3000/api/v2/scripting/validate-pre (1_pre_script)
DEBUG: Resolved Request for 1_pre_script:
  URL: http://localhost:3000/api/v2/scripting/validate-pre
  Header: X-Rumour-Computed: 6f0622607137f867491f2e14a1c5d0b4
RUNNING: POST http://localhost:3000/api/v2/scripting/validate-pre (1_pre_script)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1546ms

Failure Intelligence:
- Node: data/master_suite/scripting/1_pre_script.toml
  Reason: HTTP 400
```

---

## scripting/2_set_global.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/set-global"

[body]
type = "json"
raw = """
{"key": "shared_token", "val": "xyz-789"}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/scripting/2_set_global.toml
DEBUG: Resolved Request for 2_set_global:
  URL: http://localhost:3000/api/v2/scripting/set-global
RUNNING: POST http://localhost:3000/api/v2/scripting/set-global (2_set_global)
  SET: 2_set_global.2_set_global.status = Propagated
  SET: 2setglobal.2_set_global.status = Propagated
  SET: 2_set_global.2_set_global.status = Propagated
  SET: 2_set_global.2_set_global.status = Propagated
  SET: 2_set_global.status = Propagated
  SET: set-global.2_set_global.status = Propagated
  SET: setglobal.2_set_global.status = Propagated
  SET: set-global.2_set_global.status = Propagated
  SET: set-global.2_set_global.status = Propagated
  SET: 2_set_global.status = Propagated
  SET: 2_set_global.status = Propagated
  SET: 2setglobal.status = Propagated
  SET: 2_set_global.status = Propagated
  SET: 2_set_global.status = Propagated
  SET: status = Propagated
  SET: set-global.status = Propagated
  SET: setglobal.status = Propagated
  SET: set-global.status = Propagated
  SET: set-global.status = Propagated
  SET: status = Propagated
Running: data/master_suite/scripting/2_set_global.toml → PASS
```

---

## scripting/3_get_global.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/get-global/shared_token"

[extract]
propagatedVal = "val"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/scripting/3_get_global.toml
DEBUG: Resolved Request for 3_get_global:
  URL: http://localhost:3000/api/v2/scripting/get-global/shared_token
RUNNING: GET http://localhost:3000/api/v2/scripting/get-global/shared_token (3_get_global)
  SET: 3_get_global.propagatedVal = xyz-789
  SET: 3getglobal.propagatedVal = xyz-789
  SET: 3_get_global.propagatedVal = xyz-789
  SET: 3_get_global.propagatedVal = xyz-789
  SET: propagatedVal = xyz-789
Running: data/master_suite/scripting/3_get_global.toml → PASS
```

---

## security/1_oauth_token.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/oauth/token"

[body]
type = "json"
raw = """
{
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "grant_type": "client_credentials"
}
"""

[extract]
security_bearer_token = "access_token"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security/1_oauth_token.toml
DEBUG: Resolved Request for 1_oauth_token:
  URL: http://localhost:3000/api/v2/security/oauth/token
RUNNING: POST http://localhost:3000/api/v2/security/oauth/token (1_oauth_token)
  SET: 1_oauth_token.security_bearer_token = access_1778322442373
  SET: 1oauthtoken.security_bearer_token = access_1778322442373
  SET: 1_oauth_token.security_bearer_token = access_1778322442373
  SET: 1_oauth_token.security_bearer_token = access_1778322442373
  SET: security_bearer_token = access_1778322442373
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1oauthtoken.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.accessToken = access_1778322442373
  SET: 1oauthtoken.accessToken = access_1778322442373
  SET: 1_oauth_token.accessToken = access_1778322442373
  SET: 1_oauth_token.accessToken = access_1778322442373
  SET: accessToken = access_1778322442373
  SET: token.accessToken = access_1778322442373
  SET: token.accessToken = access_1778322442373
  SET: token.accessToken = access_1778322442373
  SET: token.accessToken = access_1778322442373
  SET: accessToken = access_1778322442373
  SET: 1_oauth_token.token_type = Bearer
  SET: 1oauthtoken.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token_type = Bearer
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442373
  SET: 1oauthtoken.1_oauth_token.accessToken = access_1778322442373
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442373
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442373
  SET: 1_oauth_token.accessToken = access_1778322442373
  SET: token.1_oauth_token.accessToken = access_1778322442373
  SET: token.1_oauth_token.accessToken = access_1778322442373
  SET: token.1_oauth_token.accessToken = access_1778322442373
  SET: token.1_oauth_token.accessToken = access_1778322442373
  SET: 1_oauth_token.accessToken = access_1778322442373
Running: data/master_suite/security/1_oauth_token.toml → PASS
```

---

## security/2_get_secure_data.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/secure-resource"

[headers]
Authorization = "Bearer {{security_bearer_token}}"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security/2_get_secure_data.toml
DEBUG: Resolved Request for 1_oauth_token:
  URL: http://localhost:3000/api/v2/security/oauth/token
RUNNING: POST http://localhost:3000/api/v2/security/oauth/token (1_oauth_token)
  SET: 1_oauth_token.security_bearer_token = access_1778322442411
  SET: 1oauthtoken.security_bearer_token = access_1778322442411
  SET: 1_oauth_token.security_bearer_token = access_1778322442411
  SET: 1_oauth_token.security_bearer_token = access_1778322442411
  SET: security_bearer_token = access_1778322442411
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442411
  SET: 1oauthtoken.1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.accessToken = access_1778322442411
  SET: token.1_oauth_token.accessToken = access_1778322442411
  SET: token.1_oauth_token.accessToken = access_1778322442411
  SET: token.1_oauth_token.accessToken = access_1778322442411
  SET: token.1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1oauthtoken.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: token.1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.accessToken = access_1778322442411
  SET: 1oauthtoken.accessToken = access_1778322442411
  SET: 1_oauth_token.accessToken = access_1778322442411
  SET: 1_oauth_token.accessToken = access_1778322442411
  SET: accessToken = access_1778322442411
  SET: token.accessToken = access_1778322442411
  SET: token.accessToken = access_1778322442411
  SET: token.accessToken = access_1778322442411
  SET: token.accessToken = access_1778322442411
  SET: accessToken = access_1778322442411
  SET: 1_oauth_token.token_type = Bearer
  SET: 1oauthtoken.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: 1_oauth_token.token_type = Bearer
  SET: token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token.token_type = Bearer
  SET: token_type = Bearer
DEBUG: Resolved Request for 2_get_secure_data:
  URL: http://localhost:3000/api/v2/security/secure-resource
  Header: Authorization: Bearer access_1778322442411
RUNNING: GET http://localhost:3000/api/v2/security/secure-resource (2_get_secure_data)

Workflow Execution Summary:
Total Requests:      2
Successful:          2
Failed:              0
Skipped:             0
Total Time:          12ms
```

---

## security/3_hmac_valid.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/hmac-verify"

[headers]
X-Rumour-Signature = "d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7"

[body]
type = "json"
raw = """
{"test":"hmac"}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security/3_hmac_valid.toml
DEBUG: Resolved Request for 3_hmac_valid:
  URL: http://localhost:3000/api/v2/security/hmac-verify
  Header: X-Rumour-Signature: d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7
RUNNING: POST http://localhost:3000/api/v2/security/hmac-verify (3_hmac_valid)
  SET: 3_hmac_valid.3_hmac_valid.status = Signature Validated
  SET: 3hmacvalid.3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.status = Signature Validated
  SET: hmac-verify.3_hmac_valid.status = Signature Validated
  SET: hmacverify.3_hmac_valid.status = Signature Validated
  SET: hmac-verify.3_hmac_valid.status = Signature Validated
  SET: hmac-verify.3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.status = Signature Validated
  SET: 3hmacvalid.status = Signature Validated
  SET: 3_hmac_valid.status = Signature Validated
  SET: 3_hmac_valid.status = Signature Validated
  SET: status = Signature Validated
  SET: hmac-verify.status = Signature Validated
  SET: hmacverify.status = Signature Validated
  SET: hmac-verify.status = Signature Validated
  SET: hmac-verify.status = Signature Validated
  SET: status = Signature Validated
Running: data/master_suite/security/3_hmac_valid.toml → PASS
```

---

## security/4_hmac_tampered.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/hmac-verify"

[headers]
X-Rumour-Signature = "d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7"

[body]
type = "json"
raw = """
{"test":"tampered"}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security/4_hmac_tampered.toml
DEBUG: Resolved Request for 4_hmac_tampered:
  URL: http://localhost:3000/api/v2/security/hmac-verify
  Header: X-Rumour-Signature: d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7
RUNNING: POST http://localhost:3000/api/v2/security/hmac-verify (4_hmac_tampered)
DEBUG: Resolved Request for 4_hmac_tampered:
  URL: http://localhost:3000/api/v2/security/hmac-verify
  Header: X-Rumour-Signature: d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7
RUNNING: POST http://localhost:3000/api/v2/security/hmac-verify (4_hmac_tampered)
DEBUG: Resolved Request for 4_hmac_tampered:
  URL: http://localhost:3000/api/v2/security/hmac-verify
  Header: X-Rumour-Signature: d9df45d970998e0ad04941e35f29d2d4d07b07d9856a0af024b93557b90c10a7
RUNNING: POST http://localhost:3000/api/v2/security/hmac-verify (4_hmac_tampered)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1544ms

Failure Intelligence:
- Node: data/master_suite/security/4_hmac_tampered.toml
  Reason: HTTP 403
```

---

## security_adv/1_get_csrf.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/csrf-token"

[extract]
csrfToken = "csrf_token"
sessionId = "session_id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security_adv/1_get_csrf.toml
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1524ms

Failure Intelligence:
- Node: data/master_suite/security_adv/1_get_csrf.toml
  Reason: HTTP 404
```

---

## security_adv/2_post_protected.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/protected-action"

[body]
type = "json"
raw = """
{
  "session_id": "{{sessionId}}",
  "csrf_token": "{{csrfToken}}"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security_adv/2_post_protected.toml
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)
DEBUG: Resolved Request for 1_get_csrf:
  URL: http://localhost:3000/api/v2/security-adv/csrf-token
RUNNING: GET http://localhost:3000/api/v2/security-adv/csrf-token (1_get_csrf)

Workflow Execution Summary:
Total Requests:      2
Successful:          0
Failed:              1
Skipped:             1
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/security_adv/1_get_csrf.toml
  Reason: HTTP 404
  Affected Downstream: ["data/master_suite/security_adv/2_post_protected.toml"]
```

---

## security_adv/3_reflection_test.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/echo"

[body]
type = "json"
raw = """
{
  "input": "'; DROP TABLE users; -- <script>alert(1)</script>"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/security_adv/3_reflection_test.toml
DEBUG: Resolved Request for 3_reflection_test:
  URL: http://localhost:3000/api/v2/security-adv/echo
RUNNING: POST http://localhost:3000/api/v2/security-adv/echo (3_reflection_test)
DEBUG: Resolved Request for 3_reflection_test:
  URL: http://localhost:3000/api/v2/security-adv/echo
RUNNING: POST http://localhost:3000/api/v2/security-adv/echo (3_reflection_test)
DEBUG: Resolved Request for 3_reflection_test:
  URL: http://localhost:3000/api/v2/security-adv/echo
RUNNING: POST http://localhost:3000/api/v2/security-adv/echo (3_reflection_test)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1537ms

Failure Intelligence:
- Node: data/master_suite/security_adv/3_reflection_test.toml
  Reason: HTTP 404
```

---

## serialization/1_fetch_yaml.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/yaml"

[extract]
yamlSkill = "user.profile.skills.0"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/serialization/1_fetch_yaml.toml
DEBUG: Resolved Request for 1_fetch_yaml:
  URL: http://localhost:3000/api/v2/serialization/yaml
RUNNING: GET http://localhost:3000/api/v2/serialization/yaml (1_fetch_yaml)
Running: data/master_suite/serialization/1_fetch_yaml.toml → PASS
```

---

## serialization/2_fetch_pipe.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/pipe-delimited"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/serialization/2_fetch_pipe.toml
DEBUG: Resolved Request for 2_fetch_pipe:
  URL: http://localhost:3000/api/v2/serialization/pipe-delimited
RUNNING: GET http://localhost:3000/api/v2/serialization/pipe-delimited (2_fetch_pipe)
Running: data/master_suite/serialization/2_fetch_pipe.toml → PASS
```

---

## signing/1_secure_post.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/secure-data"

[headers]
X-Rumour-Signature = "3e6f...fake_signature_for_test"

[body]
type = "json"
raw = """
{
  "cmd": "decrypt",
  "asset": "vault_01"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/signing/1_secure_post.toml
DEBUG: Resolved Request for 1_secure_post:
  URL: http://localhost:3000/api/v2/signing/secure-data
  Header: X-Rumour-Signature: 3e6f...fake_signature_for_test
RUNNING: POST http://localhost:3000/api/v2/signing/secure-data (1_secure_post)
DEBUG: Resolved Request for 1_secure_post:
  URL: http://localhost:3000/api/v2/signing/secure-data
  Header: X-Rumour-Signature: 3e6f...fake_signature_for_test
RUNNING: POST http://localhost:3000/api/v2/signing/secure-data (1_secure_post)
DEBUG: Resolved Request for 1_secure_post:
  URL: http://localhost:3000/api/v2/signing/secure-data
  Header: X-Rumour-Signature: 3e6f...fake_signature_for_test
RUNNING: POST http://localhost:3000/api/v2/signing/secure-data (1_secure_post)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1540ms

Failure Intelligence:
- Node: data/master_suite/signing/1_secure_post.toml
  Reason: HTTP 403
```

---

## stateful/0_reset.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/reset"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/stateful/0_reset.toml
DEBUG: Resolved Request for 0_reset:
  URL: http://localhost:3000/api/v2/stateful/reset
RUNNING: POST http://localhost:3000/api/v2/stateful/reset (0_reset)
Running: data/master_suite/stateful/0_reset.toml → PASS
```

---

## stateful/1_step_1.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/progress"

[body]
type = "json"
raw = """
{
  "step": 1
}
"""

[extract]
stateful_step_1_status = "status"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/stateful/1_step_1.toml
DEBUG: Resolved Request for 1_step_1:
  URL: http://localhost:3000/api/v2/stateful/progress
RUNNING: POST http://localhost:3000/api/v2/stateful/progress (1_step_1)
  SET: 1_step_1.stateful_step_1_status = In Progress
  SET: 1step1.stateful_step_1_status = In Progress
  SET: 1_step_1.stateful_step_1_status = In Progress
  SET: 1_step_1.stateful_step_1_status = In Progress
  SET: stateful_step_1_status = In Progress
  SET: 1_step_1.status = In Progress
  SET: 1step1.status = In Progress
  SET: 1_step_1.status = In Progress
  SET: 1_step_1.status = In Progress
  SET: status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: status = In Progress
  SET: 1_step_1.1_step_1.status = In Progress
  SET: 1step1.1_step_1.status = In Progress
  SET: 1_step_1.1_step_1.status = In Progress
  SET: 1_step_1.1_step_1.status = In Progress
  SET: 1_step_1.status = In Progress
  SET: progress.1_step_1.status = In Progress
  SET: progress.1_step_1.status = In Progress
  SET: progress.1_step_1.status = In Progress
  SET: progress.1_step_1.status = In Progress
  SET: 1_step_1.status = In Progress
Running: data/master_suite/stateful/1_step_1.toml → PASS
```

---

## stateful/2_step_2.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/progress"

[body]
type = "json"
raw = """
{
  "step": 2
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/stateful/2_step_2.toml
DEBUG: Resolved Request for 2_step_2:
  URL: http://localhost:3000/api/v2/stateful/progress
RUNNING: POST http://localhost:3000/api/v2/stateful/progress (2_step_2)
  SET: 2_step_2.2_step_2.status = In Progress
  SET: 2step2.2_step_2.status = In Progress
  SET: 2_step_2.2_step_2.status = In Progress
  SET: 2_step_2.2_step_2.status = In Progress
  SET: 2_step_2.status = In Progress
  SET: progress.2_step_2.status = In Progress
  SET: progress.2_step_2.status = In Progress
  SET: progress.2_step_2.status = In Progress
  SET: progress.2_step_2.status = In Progress
  SET: 2_step_2.status = In Progress
  SET: 2_step_2.status = In Progress
  SET: 2step2.status = In Progress
  SET: 2_step_2.status = In Progress
  SET: 2_step_2.status = In Progress
  SET: status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: progress.status = In Progress
  SET: status = In Progress
Running: data/master_suite/stateful/2_step_2.toml → PASS
```

---

## stateful/3_verify_resume.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/resume"

[extract]
stateful_final_step = "last_successful_step"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/stateful/3_verify_resume.toml
DEBUG: Resolved Request for 3_verify_resume:
  URL: http://localhost:3000/api/v2/stateful/resume
RUNNING: GET http://localhost:3000/api/v2/stateful/resume (3_verify_resume)
  SET: 3_verify_resume.stateful_final_step = 2
  SET: 3verifyresume.stateful_final_step = 2
  SET: 3_verify_resume.stateful_final_step = 2
  SET: 3_verify_resume.stateful_final_step = 2
  SET: stateful_final_step = 2
Running: data/master_suite/stateful/3_verify_resume.toml → PASS
```

---

## streaming_in/1_post_stream.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/upload-stream"

[body]
type = "text"
raw = "START_OF_STREAM_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA_DATA__END_OF_STREAM"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/streaming_in/1_post_stream.toml
DEBUG: Resolved Request for 1_post_stream:
  URL: http://localhost:3000/api/v2/streaming-in/upload-stream
RUNNING: POST http://localhost:3000/api/v2/streaming-in/upload-stream (1_post_stream)
DEBUG: Resolved Request for 1_post_stream:
  URL: http://localhost:3000/api/v2/streaming-in/upload-stream
RUNNING: POST http://localhost:3000/api/v2/streaming-in/upload-stream (1_post_stream)
DEBUG: Resolved Request for 1_post_stream:
  URL: http://localhost:3000/api/v2/streaming-in/upload-stream
RUNNING: POST http://localhost:3000/api/v2/streaming-in/upload-stream (1_post_stream)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1536ms

Failure Intelligence:
- Node: data/master_suite/streaming_in/1_post_stream.toml
  Reason: HTTP 400
```

---

## streaming_out/1_fetch_sse.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/events"

[headers]
Accept = "text/event-stream"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/streaming_out/1_fetch_sse.toml
DEBUG: Resolved Request for 1_fetch_sse:
  URL: http://localhost:3000/api/v2/streaming-out/events
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/streaming-out/events (1_fetch_sse)
DEBUG: Resolved Request for 1_fetch_sse:
  URL: http://localhost:3000/api/v2/streaming-out/events
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/streaming-out/events (1_fetch_sse)
DEBUG: Resolved Request for 1_fetch_sse:
  URL: http://localhost:3000/api/v2/streaming-out/events
  Header: Accept: text/event-stream
RUNNING: GET http://localhost:3000/api/v2/streaming-out/events (1_fetch_sse)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1535ms

Failure Intelligence:
- Node: data/master_suite/streaming_out/1_fetch_sse.toml
  Reason: HTTP 404
```

---

## streaming_out/2_fetch_range.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/download-range"

[headers]
Range = "bytes=0-99"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/streaming_out/2_fetch_range.toml
DEBUG: Resolved Request for 2_fetch_range:
  URL: http://localhost:3000/api/v2/streaming-out/download-range
  Header: Range: bytes=0-99
RUNNING: GET http://localhost:3000/api/v2/streaming-out/download-range (2_fetch_range)
DEBUG: Resolved Request for 2_fetch_range:
  URL: http://localhost:3000/api/v2/streaming-out/download-range
  Header: Range: bytes=0-99
RUNNING: GET http://localhost:3000/api/v2/streaming-out/download-range (2_fetch_range)
DEBUG: Resolved Request for 2_fetch_range:
  URL: http://localhost:3000/api/v2/streaming-out/download-range
  Header: Range: bytes=0-99
RUNNING: GET http://localhost:3000/api/v2/streaming-out/download-range (2_fetch_range)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1536ms

Failure Intelligence:
- Node: data/master_suite/streaming_out/2_fetch_range.toml
  Reason: HTTP 404
```

---

## traffic/1_throttle_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/throttle"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/1_throttle_node_1.toml
DEBUG: Resolved Request for 1_throttle_node_1:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_1)
DEBUG: Resolved Request for 1_throttle_node_1:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_1)
DEBUG: Resolved Request for 1_throttle_node_1:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1529ms

Failure Intelligence:
- Node: data/master_suite/traffic/1_throttle_node_1.toml
  Reason: HTTP 404
```

---

## traffic/1_throttle_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/throttle"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/1_throttle_node_2.toml
DEBUG: Resolved Request for 1_throttle_node_2:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_2)
DEBUG: Resolved Request for 1_throttle_node_2:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_2)
DEBUG: Resolved Request for 1_throttle_node_2:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/traffic/1_throttle_node_2.toml
  Reason: HTTP 404
```

---

## traffic/1_throttle_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/throttle"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/1_throttle_node_3.toml
DEBUG: Resolved Request for 1_throttle_node_3:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_3)
DEBUG: Resolved Request for 1_throttle_node_3:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_3)
DEBUG: Resolved Request for 1_throttle_node_3:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/traffic/1_throttle_node_3.toml
  Reason: HTTP 404
```

---

## traffic/1_throttle_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/throttle"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/1_throttle_node_4.toml
DEBUG: Resolved Request for 1_throttle_node_4:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_4)
DEBUG: Resolved Request for 1_throttle_node_4:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_4)
DEBUG: Resolved Request for 1_throttle_node_4:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_4)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/traffic/1_throttle_node_4.toml
  Reason: HTTP 404
```

---

## traffic/1_throttle_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/throttle"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/1_throttle_node_5.toml
DEBUG: Resolved Request for 1_throttle_node_5:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_5)
DEBUG: Resolved Request for 1_throttle_node_5:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_5)
DEBUG: Resolved Request for 1_throttle_node_5:
  URL: http://localhost:3000/api/v2/traffic/throttle
RUNNING: GET http://localhost:3000/api/v2/traffic/throttle (1_throttle_node_5)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/traffic/1_throttle_node_5.toml
  Reason: HTTP 404
```

---

## traffic/2_burst_node_1.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/burst"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/2_burst_node_1.toml
DEBUG: Resolved Request for 2_burst_node_1:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_1)
DEBUG: Resolved Request for 2_burst_node_1:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_1)
DEBUG: Resolved Request for 2_burst_node_1:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_1)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1526ms

Failure Intelligence:
- Node: data/master_suite/traffic/2_burst_node_1.toml
  Reason: HTTP 404
```

---

## traffic/2_burst_node_2.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/burst"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/2_burst_node_2.toml
DEBUG: Resolved Request for 2_burst_node_2:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_2)
DEBUG: Resolved Request for 2_burst_node_2:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_2)
DEBUG: Resolved Request for 2_burst_node_2:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_2)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1528ms

Failure Intelligence:
- Node: data/master_suite/traffic/2_burst_node_2.toml
  Reason: HTTP 404
```

---

## traffic/2_burst_node_3.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/burst"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/2_burst_node_3.toml
DEBUG: Resolved Request for 2_burst_node_3:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_3)
DEBUG: Resolved Request for 2_burst_node_3:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_3)
DEBUG: Resolved Request for 2_burst_node_3:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_3)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1529ms

Failure Intelligence:
- Node: data/master_suite/traffic/2_burst_node_3.toml
  Reason: HTTP 404
```

---

## traffic/2_burst_node_4.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/burst"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/2_burst_node_4.toml
DEBUG: Resolved Request for 2_burst_node_4:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_4)
DEBUG: Resolved Request for 2_burst_node_4:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_4)
DEBUG: Resolved Request for 2_burst_node_4:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_4)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1525ms

Failure Intelligence:
- Node: data/master_suite/traffic/2_burst_node_4.toml
  Reason: HTTP 404
```

---

## traffic/2_burst_node_5.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/burst"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/traffic/2_burst_node_5.toml
DEBUG: Resolved Request for 2_burst_node_5:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_5)
DEBUG: Resolved Request for 2_burst_node_5:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_5)
DEBUG: Resolved Request for 2_burst_node_5:
  URL: http://localhost:3000/api/v2/traffic/burst
RUNNING: GET http://localhost:3000/api/v2/traffic/burst (2_burst_node_5)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1521ms

Failure Intelligence:
- Node: data/master_suite/traffic/2_burst_node_5.toml
  Reason: HTTP 404
```

---

## transform/1_fetch_json.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
Accept = "application/json"

[extract]
transform_first_id = "[0].id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transform/1_fetch_json.toml
DEBUG: Resolved Request for 1_fetch_json:
  URL: http://localhost:3000/api/v2/transform/data
  Header: Accept: application/json
RUNNING: GET http://localhost:3000/api/v2/transform/data (1_fetch_json)
  SET: 1_fetch_json.1_fetch_json.id = 1
  SET: 1fetchjson.1_fetch_json.id = 1
  SET: 1_fetch_json.1_fetch_json.id = 1
  SET: 1_fetch_json.1_fetch_json.id = 1
  SET: 1_fetch_json.id = 1
  SET: data.1_fetch_json.id = 1
  SET: data.1_fetch_json.id = 1
  SET: data.1_fetch_json.id = 1
  SET: data.1_fetch_json.id = 1
  SET: 1_fetch_json.id = 1
  SET: 1_fetch_json.id = 1
  SET: 1fetchjson.id = 1
  SET: 1_fetch_json.id = 1
  SET: 1_fetch_json.id = 1
  SET: id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: data.id = 1
  SET: id = 1
  SET: data_id = 1
Running: data/master_suite/transform/1_fetch_json.toml → PASS
```

---

## transform/2_fetch_csv.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
Accept = "text/csv"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transform/2_fetch_csv.toml
DEBUG: Resolved Request for 2_fetch_csv:
  URL: http://localhost:3000/api/v2/transform/data
  Header: Accept: text/csv
RUNNING: GET http://localhost:3000/api/v2/transform/data (2_fetch_csv)
Running: data/master_suite/transform/2_fetch_csv.toml → PASS
```

---

## transmission/1_gzip_fetch.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/gzip"

[headers]
Accept-Encoding = "gzip"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transmission/1_gzip_fetch.toml
DEBUG: Resolved Request for 1_gzip_fetch:
  URL: http://localhost:3000/api/v2/transmission/gzip
  Header: Accept-Encoding: gzip
RUNNING: GET http://localhost:3000/api/v2/transmission/gzip (1_gzip_fetch)
Running: data/master_suite/transmission/1_gzip_fetch.toml → PASS
```

---

## transmission/2_stream_fetch.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/stream"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transmission/2_stream_fetch.toml
DEBUG: Resolved Request for 2_stream_fetch:
  URL: http://localhost:3000/api/v2/transmission/stream
RUNNING: GET http://localhost:3000/api/v2/transmission/stream (2_stream_fetch)
Running: data/master_suite/transmission/2_stream_fetch.toml → PASS
```

---

## transmission_adv/1_fetch_brotli.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/brotli"

[headers]
Accept-Encoding = "br"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transmission_adv/1_fetch_brotli.toml
DEBUG: Resolved Request for 1_fetch_brotli:
  URL: http://localhost:3000/api/v2/transmission-adv/brotli
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-adv/brotli (1_fetch_brotli)
DEBUG: Resolved Request for 1_fetch_brotli:
  URL: http://localhost:3000/api/v2/transmission-adv/brotli
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-adv/brotli (1_fetch_brotli)
DEBUG: Resolved Request for 1_fetch_brotli:
  URL: http://localhost:3000/api/v2/transmission-adv/brotli
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-adv/brotli (1_fetch_brotli)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1532ms

Failure Intelligence:
- Node: data/master_suite/transmission_adv/1_fetch_brotli.toml
  Reason: HTTP 404
```

---

## transmission_ext/1_fetch_brotli_stream.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/brotli-stream"

[headers]
Accept-Encoding = "br"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transmission_ext/1_fetch_brotli_stream.toml
DEBUG: Resolved Request for 1_fetch_brotli_stream:
  URL: http://localhost:3000/api/v2/transmission-ext/brotli-stream
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/brotli-stream (1_fetch_brotli_stream)
DEBUG: Resolved Request for 1_fetch_brotli_stream:
  URL: http://localhost:3000/api/v2/transmission-ext/brotli-stream
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/brotli-stream (1_fetch_brotli_stream)
DEBUG: Resolved Request for 1_fetch_brotli_stream:
  URL: http://localhost:3000/api/v2/transmission-ext/brotli-stream
  Header: Accept-Encoding: br
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/brotli-stream (1_fetch_brotli_stream)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1537ms

Failure Intelligence:
- Node: data/master_suite/transmission_ext/1_fetch_brotli_stream.toml
  Reason: HTTP 404
```

---

## transmission_ext/2_fetch_multi_range.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/multi-range"

[headers]
Range = "bytes=0-4,10-14"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/transmission_ext/2_fetch_multi_range.toml
DEBUG: Resolved Request for 2_fetch_multi_range:
  URL: http://localhost:3000/api/v2/transmission-ext/multi-range
  Header: Range: bytes=0-4,10-14
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/multi-range (2_fetch_multi_range)
DEBUG: Resolved Request for 2_fetch_multi_range:
  URL: http://localhost:3000/api/v2/transmission-ext/multi-range
  Header: Range: bytes=0-4,10-14
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/multi-range (2_fetch_multi_range)
DEBUG: Resolved Request for 2_fetch_multi_range:
  URL: http://localhost:3000/api/v2/transmission-ext/multi-range
  Header: Range: bytes=0-4,10-14
RUNNING: GET http://localhost:3000/api/v2/transmission-ext/multi-range (2_fetch_multi_range)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1534ms

Failure Intelligence:
- Node: data/master_suite/transmission_ext/2_fetch_multi_range.toml
  Reason: HTTP 404
```

---

## trust/1_internal_portal.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/internal-portal"

[headers]
X-Forwarded-For = "127.0.0.1"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/trust/1_internal_portal.toml
DEBUG: Resolved Request for 1_internal_portal:
  URL: http://localhost:3000/api/v2/trust/internal-portal
  Header: X-Forwarded-For: 127.0.0.1
RUNNING: GET http://localhost:3000/api/v2/trust/internal-portal (1_internal_portal)
  SET: 1_internal_portal.1_internal_portal.status = Success
  SET: 1internalportal.1_internal_portal.status = Success
  SET: 1_internal_portal.1_internal_portal.status = Success
  SET: 1_internal_portal.1_internal_portal.status = Success
  SET: 1_internal_portal.status = Success
  SET: internal-portal.1_internal_portal.status = Success
  SET: internalportal.1_internal_portal.status = Success
  SET: internal-portal.1_internal_portal.status = Success
  SET: internal-portal.1_internal_portal.status = Success
  SET: 1_internal_portal.status = Success
  SET: 1_internal_portal.status = Success
  SET: 1internalportal.status = Success
  SET: 1_internal_portal.status = Success
  SET: 1_internal_portal.status = Success
  SET: status = Success
  SET: internal-portal.status = Success
  SET: internalportal.status = Success
  SET: internal-portal.status = Success
  SET: internal-portal.status = Success
  SET: status = Success
Running: data/master_suite/trust/1_internal_portal.toml → PASS
```

---

## trust/2_rotated_key_success.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/data"

[headers]
x-api-key = "key-new-2026"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/trust/2_rotated_key_success.toml
DEBUG: Resolved Request for 2_rotated_key_success:
  URL: http://localhost:3000/api/v2/trust/data
  Header: x-api-key: key-new-2026
RUNNING: GET http://localhost:3000/api/v2/trust/data (2_rotated_key_success)
  SET: 2_rotated_key_success.2_rotated_key_success.status = Active
  SET: 2rotatedkeysuccess.2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.status = Active
  SET: data.2_rotated_key_success.status = Active
  SET: data.2_rotated_key_success.status = Active
  SET: data.2_rotated_key_success.status = Active
  SET: data.2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.status = Active
  SET: 2rotatedkeysuccess.status = Active
  SET: 2_rotated_key_success.status = Active
  SET: 2_rotated_key_success.status = Active
  SET: status = Active
  SET: data.status = Active
  SET: data.status = Active
  SET: data.status = Active
  SET: data.status = Active
  SET: status = Active
Running: data/master_suite/trust/2_rotated_key_success.toml → PASS
```

---

## trust/3_saml_acs.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/saml/acs"

[body]
type = "form"
raw = "SAMLResponse=PHNhbWxwOlJlc3BvbnNlIHhtbG5zOnNhbWxwPSJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6cHJvdG9jb2wiPi4uLjwvc2FtbHA6UmVzcG9uc2U+"

[extract]
samlSubject = "samlp:Response.saml:Assertion.saml:Subject"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/trust/3_saml_acs.toml
DEBUG: Resolved Request for 3_saml_acs:
  URL: http://localhost:3000/api/v2/trust/saml/acs
RUNNING: POST http://localhost:3000/api/v2/trust/saml/acs (3_saml_acs)
DEBUG: Resolved Request for 3_saml_acs:
  URL: http://localhost:3000/api/v2/trust/saml/acs
RUNNING: POST http://localhost:3000/api/v2/trust/saml/acs (3_saml_acs)
DEBUG: Resolved Request for 3_saml_acs:
  URL: http://localhost:3000/api/v2/trust/saml/acs
RUNNING: POST http://localhost:3000/api/v2/trust/saml/acs (3_saml_acs)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1539ms

Failure Intelligence:
- Node: data/master_suite/trust/3_saml_acs.toml
  Reason: HTTP 500
```

---

## users/1_search_users.toml

### File Content

```toml
[request]
method = "GET"
url = "{{base_url}}/users?team={{test_team}}&role=intern"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/users/1_search_users.toml
DEBUG: Resolved Request for 1_search_users:
  URL: http://localhost:3000/api/v2/users?team=alpha&role=intern
RUNNING: GET http://localhost:3000/api/v2/users?team=alpha&role=intern (1_search_users)
  SET: 1_search_users.id = 2
  SET: 1searchusers.id = 2
  SET: 1_search_users.id = 2
  SET: 1_search_users.id = 2
  SET: id = 2
  SET: users.id = 2
  SET: users.id = 2
  SET: users.id = 2
  SET: users.id = 2
  SET: id = 2
  SET: users_id = 2
  SET: 1_search_users.1_search_users.id = 2
  SET: 1searchusers.1_search_users.id = 2
  SET: 1_search_users.1_search_users.id = 2
  SET: 1_search_users.1_search_users.id = 2
  SET: 1_search_users.id = 2
  SET: users.1_search_users.id = 2
  SET: users.1_search_users.id = 2
  SET: users.1_search_users.id = 2
  SET: users.1_search_users.id = 2
  SET: 1_search_users.id = 2
Running: data/master_suite/users/1_search_users.toml → PASS
```

---

## users/2_register_user.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/users/register"

[body]
type = "json"
raw = """
{
  "username": "dev_lead"
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/users/2_register_user.toml
DEBUG: Resolved Request for 2_register_user:
  URL: http://localhost:3000/api/v2/users/register
RUNNING: POST http://localhost:3000/api/v2/users/register (2_register_user)
Running: data/master_suite/users/2_register_user.toml → PASS
```

---

## users/3_create_new.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/users"

[body]
type = "json"
raw = """
{
  "username": "new_user_{{random}}",
  "role": "editor"
}
"""

[extract]
user_id_new = "id"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/users/3_create_new.toml
DEBUG: Resolved Request for 3_create_new:
  URL: http://localhost:3000/api/v2/users
RUNNING: POST http://localhost:3000/api/v2/users (3_create_new)
  SET: 3_create_new.user_id_new = 14
  SET: 3createnew.user_id_new = 14
  SET: 3_create_new.user_id_new = 14
  SET: 3_create_new.user_id_new = 14
  SET: user_id_new = 14
  SET: 3_create_new.3_create_new.id = 14
  SET: 3createnew.3_create_new.id = 14
  SET: 3_create_new.3_create_new.id = 14
  SET: 3_create_new.3_create_new.id = 14
  SET: 3_create_new.id = 14
  SET: users.3_create_new.id = 14
  SET: users.3_create_new.id = 14
  SET: users.3_create_new.id = 14
  SET: users.3_create_new.id = 14
  SET: 3_create_new.id = 14
  SET: 3_create_new.id = 14
  SET: 3createnew.id = 14
  SET: 3_create_new.id = 14
  SET: 3_create_new.id = 14
  SET: id = 14
  SET: users.id = 14
  SET: users.id = 14
  SET: users.id = 14
  SET: users.id = 14
  SET: id = 14
  SET: users_id = 14
Running: data/master_suite/users/3_create_new.toml → PASS
```

---

## webdav/1_propfind_resource.toml

### File Content

```toml
[request]
method = "PROPFIND"
url = "{{base_url}}/resource"

[extract]
assetSize = "D:multistatus.D:response.D:propstat.D:prop.D:getcontentlength"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/webdav/1_propfind_resource.toml
DEBUG: Resolved Request for 1_propfind_resource:
  URL: http://localhost:3000/api/v2/webdav/resource
RUNNING: PROPFIND http://localhost:3000/api/v2/webdav/resource (1_propfind_resource)
Running: data/master_suite/webdav/1_propfind_resource.toml → PASS
```

---

## webdav/2_mkcol_folder.toml

### File Content

```toml
[request]
method = "MKCOL"
url = "{{base_url}}/resource/new_folder"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/webdav/2_mkcol_folder.toml
DEBUG: Resolved Request for 2_mkcol_folder:
  URL: http://localhost:3000/api/v2/webdav/resource/new_folder
RUNNING: MKCOL http://localhost:3000/api/v2/webdav/resource/new_folder (2_mkcol_folder)
DEBUG: Resolved Request for 2_mkcol_folder:
  URL: http://localhost:3000/api/v2/webdav/resource/new_folder
RUNNING: MKCOL http://localhost:3000/api/v2/webdav/resource/new_folder (2_mkcol_folder)
DEBUG: Resolved Request for 2_mkcol_folder:
  URL: http://localhost:3000/api/v2/webdav/resource/new_folder
RUNNING: MKCOL http://localhost:3000/api/v2/webdav/resource/new_folder (2_mkcol_folder)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1527ms

Failure Intelligence:
- Node: data/master_suite/webdav/2_mkcol_folder.toml
  Reason: HTTP 404
```

---

## webhooks/1_register_webhook.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/register"

[body]
type = "json"
raw = """
{
  "target_url": "{{callback_url}}",
  "events": ["resource.created"]
}
"""
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/webhooks/1_register_webhook.toml
DEBUG: Resolved Request for 1_register_webhook:
  URL: http://localhost:3000/api/v2/webhooks/register
RUNNING: POST http://localhost:3000/api/v2/webhooks/register (1_register_webhook)
  SET: 1_register_webhook.1_register_webhook.status = Webhook registered
  SET: 1registerwebhook.1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.status = Webhook registered
  SET: register.1_register_webhook.status = Webhook registered
  SET: register.1_register_webhook.status = Webhook registered
  SET: register.1_register_webhook.status = Webhook registered
  SET: register.1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.status = Webhook registered
  SET: 1registerwebhook.status = Webhook registered
  SET: 1_register_webhook.status = Webhook registered
  SET: 1_register_webhook.status = Webhook registered
  SET: status = Webhook registered
  SET: register.status = Webhook registered
  SET: register.status = Webhook registered
  SET: register.status = Webhook registered
  SET: register.status = Webhook registered
  SET: status = Webhook registered
Running: data/master_suite/webhooks/1_register_webhook.toml → PASS
```

---

## webhooks/2_trigger_event.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/trigger"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/webhooks/2_trigger_event.toml
DEBUG: Resolved Request for 2_trigger_event:
  URL: http://localhost:3000/api/v2/webhooks/trigger
RUNNING: POST http://localhost:3000/api/v2/webhooks/trigger (2_trigger_event)
DEBUG: Resolved Request for 2_trigger_event:
  URL: http://localhost:3000/api/v2/webhooks/trigger
RUNNING: POST http://localhost:3000/api/v2/webhooks/trigger (2_trigger_event)
DEBUG: Resolved Request for 2_trigger_event:
  URL: http://localhost:3000/api/v2/webhooks/trigger
RUNNING: POST http://localhost:3000/api/v2/webhooks/trigger (2_trigger_event)

Workflow Execution Summary:
Total Requests:      1
Successful:          0
Failed:              1
Skipped:             0
Total Time:          1533ms

Failure Intelligence:
- Node: data/master_suite/webhooks/2_trigger_event.toml
  Reason: HTTP 502
```

---

## wire/1_post_proto.toml

### File Content

```toml
[request]
method = "POST"
url = "{{base_url}}/proto"

[headers]
Content-Type = "application/x-protobuf"

[body]
type = "text"
raw = "RAW_PROTO_BINARY_DATA"
```

### Execution Log

```bash
❯ ./rumour/target/debug/rumour run data/master_suite/wire/1_post_proto.toml
DEBUG: Resolved Request for 1_post_proto:
  URL: http://localhost:3000/api/v2/wire/proto
  Header: Content-Type: application/x-protobuf
RUNNING: POST http://localhost:3000/api/v2/wire/proto (1_post_proto)
Running: data/master_suite/wire/1_post_proto.toml → PASS
```

---
