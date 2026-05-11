# Rumour CLI In-Depth Performance Report

| Scope | Item | Status | Passed | Failed | Duration |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Entire Workspace | N/A | FAIL | 177 | 62 | 216693.66ms |
| Collection: advanced_stress | N/A | FAIL | 5 | 6 | 9640.88ms |
|  | 1_race_node_1.toml | PASS | 1 | 0 | 21.69ms |
|  | 1_race_node_2.toml | PASS | 1 | 0 | 16.98ms |
|  | 2_backoff_node_1.toml | PASS | 1 | 0 | 20.11ms |
|  | 2_backoff_node_2.toml | PASS | 1 | 0 | 20.64ms |
|  | 2_backoff_node_3.toml | PASS | 1 | 0 | 20.60ms |
|  | 3_quota_node_1.toml | FAIL | 0 | 1 | 1529.68ms |
|  | 3_quota_node_2.toml | FAIL | 0 | 1 | 1528.88ms |
|  | 3_quota_node_3.toml | FAIL | 0 | 1 | 1534.65ms |
|  | 3_quota_node_4.toml | FAIL | 0 | 1 | 1530.40ms |
|  | 3_quota_node_5.toml | FAIL | 0 | 1 | 1532.75ms |
|  | 3_quota_node_6.toml | FAIL | 0 | 1 | 1531.96ms |
| Collection: async | N/A | PASS | 2 | 0 | 28.74ms |
|  | 1_start_task.toml | PASS | 1 | 0 | 19.26ms |
|  | 2_poll_status.toml | PASS | 2 | 0 | 22.94ms |
| Collection: auth | N/A | FAIL | 3 | 2 | 3079.74ms |
|  | 1_admin_login.toml | PASS | 1 | 0 | 19.84ms |
|  | 1_login.toml | PASS | 1 | 0 | 19.94ms |
|  | 2_validate.toml | PASS | 2 | 0 | 27.06ms |
|  | 3_fail_login.toml | FAIL | 0 | 1 | 1534.07ms |
|  | 4_expired_test.toml | FAIL | 0 | 1 | 1533.28ms |
| Collection: batch | N/A | PASS | 1 | 0 | 19.07ms |
|  | 1_bulk_operations.toml | PASS | 1 | 0 | 21.76ms |
| Collection: binary_adv | N/A | PASS | 2 | 0 | 24.33ms |
|  | 1_fetch_framed.toml | PASS | 1 | 0 | 16.18ms |
|  | 2_fetch_related.toml | PASS | 1 | 0 | 16.13ms |
| Collection: binary_deep | N/A | PASS | 2 | 0 | 18.75ms |
|  | 1_fetch_pdf.toml | PASS | 1 | 0 | 13.91ms |
|  | 2_fetch_image.toml | PASS | 1 | 0 | 14.64ms |
| Collection: binary_merge | N/A | PASS | 1 | 0 | 518.77ms |
|  | 1_fetch_composite.toml | PASS | 1 | 0 | 520.10ms |
| Collection: blocking | N/A | FAIL | 1 | 1 | 1538.47ms |
|  | 1_start_heavy_work.toml | PASS | 1 | 0 | 17.14ms |
|  | 2_check_lock.toml | PASS | 1 | 0 | 523.78ms |
| Collection: cache | N/A | FAIL | 1 | 1 | 1523.54ms |
|  | 1_initial_fetch.toml | PASS | 1 | 0 | 18.40ms |
|  | 2_conditional_fetch.toml | FAIL | 1 | 1 | 1526.97ms |
| Collection: chaos | N/A | FAIL | 7 | 12 | 19747.50ms |
|  | 1_chaos_node_1.toml | FAIL | 0 | 1 | 1533.43ms |
|  | 1_chaos_node_10.toml | FAIL | 0 | 1 | 1535.10ms |
|  | 1_chaos_node_2.toml | FAIL | 0 | 1 | 1533.47ms |
|  | 1_chaos_node_3.toml | FAIL | 0 | 1 | 1527.93ms |
|  | 1_chaos_node_4.toml | FAIL | 0 | 1 | 1534.75ms |
|  | 1_chaos_node_5.toml | FAIL | 0 | 1 | 1532.80ms |
|  | 1_chaos_node_6.toml | FAIL | 0 | 1 | 1535.51ms |
|  | 1_chaos_node_7.toml | FAIL | 0 | 1 | 1533.09ms |
|  | 1_chaos_node_8.toml | FAIL | 0 | 1 | 1534.57ms |
|  | 1_chaos_node_9.toml | FAIL | 0 | 1 | 1535.11ms |
|  | 1_rate_limit.toml | FAIL | 0 | 1 | 1532.81ms |
|  | 2_timeout.toml | PASS | 1 | 0 | 1022.50ms |
|  | 3_flakey_1.toml | PASS | 1 | 0 | 527.68ms |
|  | 3_flakey_2.toml | PASS | 1 | 0 | 524.52ms |
|  | 3_flakey_3.toml | PASS | 1 | 0 | 18.41ms |
|  | 3_flakey_4.toml | PASS | 1 | 0 | 17.16ms |
|  | 3_flakey_5.toml | PASS | 1 | 0 | 16.16ms |
|  | 4_binary.toml | PASS | 1 | 0 | 16.94ms |
|  | 5_bloat.toml | PASS | 1 | 0 | 18.16ms |
| Collection: compatibility | N/A | PASS | 2 | 0 | 28.04ms |
|  | 1_postman_test.toml | PASS | 1 | 0 | 16.64ms |
|  | 2_bruno_test.toml | PASS | 1 | 0 | 19.00ms |
| Collection: cookies | N/A | FAIL | 2 | 1 | 1537.78ms |
|  | 1_login_cookie.toml | PASS | 1 | 0 | 19.79ms |
|  | 2_check_profile.toml | FAIL | 0 | 1 | 1530.10ms |
|  | 3_logout.toml | PASS | 1 | 0 | 21.88ms |
| Collection: cors | N/A | FAIL | 2 | 1 | 1546.71ms |
|  | 1_cors_preflight.toml | PASS | 1 | 0 | 17.79ms |
|  | 2_cors_valid.toml | PASS | 1 | 0 | 18.80ms |
|  | 3_cors_violation.toml | FAIL | 0 | 1 | 1533.79ms |
| Collection: data_adv | N/A | PASS | 2 | 0 | 30.87ms |
|  | 1_fetch_geo.toml | PASS | 1 | 0 | 17.63ms |
|  | 2_fetch_msgpack.toml | PASS | 1 | 0 | 17.81ms |
| Collection: data_diff | N/A | PASS | 2 | 0 | 22.41ms |
|  | 1_fetch_suffix.toml | PASS | 1 | 0 | 19.25ms |
|  | 2_fetch_delta.toml | PASS | 1 | 0 | 17.82ms |
| Collection: datetime | N/A | PASS | 2 | 0 | 24.83ms |
|  | 1_get_timestamps.toml | PASS | 1 | 0 | 19.97ms |
|  | 2_validate_date.toml | PASS | 2 | 0 | 24.82ms |
| Collection: docs | N/A | PASS | 2 | 0 | 24.99ms |
|  | 1_fetch_swagger.toml | PASS | 1 | 0 | 19.11ms |
|  | 2_validate_schema.toml | PASS | 1 | 0 | 20.71ms |
| Collection: docs_master | N/A | PASS | 2 | 0 | 38.43ms |
|  | 1_fetch_dynamic_spec.toml | PASS | 1 | 0 | 33.29ms |
|  | 2_verify_ui.toml | PASS | 1 | 0 | 21.48ms |
| Collection: ecommerce | N/A | FAIL | 3 | 1 | 1547.58ms |
|  | 1_list_products.toml | PASS | 1 | 0 | 19.91ms |
|  | 2_create_product.toml | PASS | 1 | 0 | 16.43ms |
|  | 3_place_order.toml | PASS | 2 | 0 | 24.91ms |
|  | 4_invalid_data.toml | FAIL | 0 | 1 | 1534.80ms |
| Collection: environment | N/A | PASS | 3 | 0 | 35.55ms |
|  | 1_fetch_vault_secret.toml | PASS | 1 | 0 | 17.93ms |
|  | 2_validate_vault.toml | PASS | 2 | 0 | 27.04ms |
|  | 3_tenant_check.toml | PASS | 1 | 0 | 20.76ms |
| Collection: exhaustion | N/A | PASS | 15 | 0 | 3306.55ms |
|  | 1_load_node_1.toml | PASS | 1 | 0 | 122.56ms |
|  | 1_load_node_10.toml | PASS | 1 | 0 | 122.51ms |
|  | 1_load_node_2.toml | PASS | 1 | 0 | 121.59ms |
|  | 1_load_node_3.toml | PASS | 1 | 0 | 122.86ms |
|  | 1_load_node_4.toml | PASS | 1 | 0 | 124.13ms |
|  | 1_load_node_5.toml | PASS | 1 | 0 | 126.10ms |
|  | 1_load_node_6.toml | PASS | 1 | 0 | 122.14ms |
|  | 1_load_node_7.toml | PASS | 1 | 0 | 126.71ms |
|  | 1_load_node_8.toml | PASS | 1 | 0 | 128.21ms |
|  | 1_load_node_9.toml | PASS | 1 | 0 | 125.69ms |
|  | 2_spike_node_1.toml | PASS | 1 | 0 | 2025.78ms |
|  | 2_spike_node_2.toml | PASS | 1 | 0 | 73.41ms |
|  | 2_spike_node_3.toml | PASS | 1 | 0 | 2022.70ms |
|  | 2_spike_node_4.toml | PASS | 1 | 0 | 71.27ms |
|  | 2_spike_node_5.toml | PASS | 1 | 0 | 73.82ms |
| Collection: failover | N/A | PASS | 2 | 0 | 529.90ms |
|  | 1_trigger_failover.toml | PASS | 1 | 0 | 19.16ms |
|  | 2_fetch_multiplexed.toml | PASS | 1 | 0 | 520.21ms |
| Collection: files | N/A | FAIL | 1 | 1 | 1531.45ms |
|  | 1_upload_file.toml | FAIL | 0 | 1 | 1520.95ms |
|  | 2_binary_raw.toml | PASS | 1 | 0 | 17.75ms |
|  | 3_download_asset.toml | FAIL | 0 | 1 | 1523.77ms |
| Collection: formats_adv | N/A | PASS | 3 | 0 | 34.14ms |
|  | 1_fetch_cbor.toml | PASS | 1 | 0 | 27.49ms |
|  | 2_fetch_bson.toml | PASS | 1 | 0 | 23.47ms |
|  | 3_fetch_secure.toml | PASS | 1 | 0 | 23.14ms |
| Collection: fuzzing | N/A | FAIL | 13 | 4 | 6653.68ms |
|  | 1_fetch_synthetic.toml | PASS | 1 | 0 | 22.91ms |
|  | 2_spike_node_1.toml | PASS | 1 | 0 | 25.00ms |
|  | 2_spike_node_10.toml | PASS | 1 | 0 | 20.73ms |
|  | 2_spike_node_11.toml | PASS | 1 | 0 | 23.67ms |
|  | 2_spike_node_12.toml | PASS | 1 | 0 | 22.51ms |
|  | 2_spike_node_13.toml | PASS | 1 | 0 | 24.27ms |
|  | 2_spike_node_14.toml | PASS | 1 | 0 | 21.78ms |
|  | 2_spike_node_15.toml | PASS | 1 | 0 | 24.46ms |
|  | 2_spike_node_2.toml | PASS | 1 | 0 | 24.64ms |
|  | 2_spike_node_3.toml | FAIL | 0 | 1 | 1537.07ms |
|  | 2_spike_node_4.toml | FAIL | 0 | 1 | 1531.87ms |
|  | 2_spike_node_5.toml | PASS | 1 | 0 | 522.58ms |
|  | 2_spike_node_6.toml | PASS | 1 | 0 | 20.38ms |
|  | 2_spike_node_7.toml | PASS | 1 | 0 | 21.01ms |
|  | 2_spike_node_8.toml | PASS | 1 | 0 | 18.99ms |
|  | 2_spike_node_9.toml | PASS | 1 | 0 | 20.03ms |
|  | 3_fuzz_node.toml | FAIL | 0 | 1 | 1533.81ms |
| Collection: global | N/A | PASS | 3 | 0 | 58.54ms |
|  | 1_finance_us.toml | PASS | 1 | 0 | 17.37ms |
|  | 2_finance_de.toml | PASS | 1 | 0 | 14.55ms |
|  | 3_rtl_meta.toml | PASS | 1 | 0 | 15.43ms |
| Collection: graphql | N/A | PASS | 2 | 0 | 20.13ms |
|  | 1_get_user.toml | PASS | 1 | 0 | 21.28ms |
|  | 2_create_post.toml | PASS | 1 | 0 | 17.43ms |
| Collection: graphql_sub | N/A | PASS | 1 | 0 | 3023.26ms |
|  | 1_fetch_updates.toml | PASS | 1 | 0 | 3026.15ms |
| Collection: grpc_web | N/A | PASS | 1 | 0 | 20.96ms |
|  | 1_service_call.toml | PASS | 1 | 0 | 19.30ms |
| Collection: hang | N/A | FAIL | 0 | 1 | 91529.25ms |
|  | 1_blackhole_request.toml | FAIL | 0 | 1 | 91527.84ms |
| Collection: iam | N/A | PASS | 3 | 0 | 46.55ms |
|  | 1_oauth_authorize.toml | PASS | 1 | 0 | 21.76ms |
|  | 2_oauth_token.toml | PASS | 2 | 0 | 28.27ms |
|  | 3_oidc_userinfo.toml | PASS | 3 | 0 | 42.16ms |
| Collection: idempotency | N/A | PASS | 2 | 0 | 27.83ms |
|  | 1_initial_charge.toml | PASS | 1 | 0 | 21.84ms |
|  | 2_retry_charge.toml | PASS | 1 | 0 | 17.53ms |
| Collection: jwt_advanced | N/A | PASS | 2 | 0 | 26.86ms |
|  | 1_issue_token.toml | PASS | 1 | 0 | 24.22ms |
|  | 2_verify_strict.toml | PASS | 2 | 0 | 24.19ms |
| Collection: legacy | N/A | FAIL | 1 | 1 | 1545.20ms |
|  | 1_get_xml_user.toml | PASS | 1 | 0 | 19.98ms |
|  | 2_soap_request.toml | FAIL | 0 | 1 | 1533.87ms |
| Collection: lifecycle | N/A | PASS | 2 | 0 | 26.22ms |
|  | 1_deprecated_api.toml | PASS | 1 | 0 | 17.28ms |
|  | 2_cors_preflight.toml | PASS | 1 | 0 | 14.28ms |
| Collection: localization | N/A | PASS | 2 | 0 | 18.70ms |
|  | 1_fetch_unicode.toml | PASS | 1 | 0 | 19.07ms |
|  | 2_check_spanish.toml | PASS | 1 | 0 | 14.95ms |
| Collection: maintenance | N/A | FAIL | 2 | 1 | 1532.39ms |
|  | 1_fetch_drain.toml | PASS | 1 | 0 | 14.72ms |
|  | 2_protocol_failure.toml | FAIL | 0 | 1 | 1525.62ms |
|  | 3_protocol_success.toml | PASS | 1 | 0 | 17.00ms |
| Collection: massive | N/A | PASS | 2 | 0 | 699.10ms |
|  | 1_massive_standard.toml | PASS | 1 | 0 | 137.74ms |
|  | 2_massive_heavy.toml | PASS | 1 | 0 | 651.92ms |
| Collection: matrix | N/A | PASS | 4 | 0 | 23.71ms |
|  | 1_fetch_v1_0.toml | PASS | 1 | 0 | 17.41ms |
|  | 1_fetch_v2_0.toml | PASS | 1 | 0 | 20.48ms |
|  | 1_fetch_v3_0.toml | PASS | 1 | 0 | 21.97ms |
|  | 2_fetch_summary.toml | PASS | 1 | 0 | 31.91ms |
| Collection: multipart | N/A | FAIL | 0 | 1 | 1523.23ms |
|  | 1_batch_upload.toml | FAIL | 0 | 1 | 1522.35ms |
| Collection: navigation | N/A | FAIL | 3 | 1 | 1576.08ms |
|  | 1_redirect_check.toml | PASS | 1 | 0 | 22.02ms |
|  | 2_version_v1.toml | PASS | 1 | 0 | 20.32ms |
|  | 3_version_v2.toml | PASS | 1 | 0 | 22.89ms |
|  | 4_loop_test.toml | FAIL | 0 | 1 | 1562.97ms |
| Collection: network | N/A | PASS | 2 | 0 | 4031.70ms |
|  | 1_slow_read.toml | PASS | 1 | 0 | 4027.61ms |
|  | 2_proxy_test.toml | PASS | 1 | 0 | 25.54ms |
| Collection: operations | N/A | PASS | 4 | 0 | 47.32ms |
|  | 1_delete_item_1.toml | PASS | 1 | 0 | 23.43ms |
|  | 1_delete_item_2.toml | PASS | 1 | 0 | 23.88ms |
|  | 2_bulk_update.toml | PASS | 1 | 0 | 23.43ms |
|  | 3_cascade_dept.toml | PASS | 1 | 0 | 26.22ms |
| Collection: orchestration | N/A | PASS | 3 | 0 | 45.97ms |
|  | 1_create_engine.toml | PASS | 1 | 0 | 19.93ms |
|  | 2_create_chassis.toml | PASS | 1 | 0 | 26.76ms |
|  | 3_assemble_car.toml | PASS | 3 | 0 | 43.91ms |
| Collection: patch | N/A | PASS | 1 | 0 | 26.24ms |
|  | 1_apply_patch.toml | PASS | 1 | 0 | 22.37ms |
| Collection: patch_adv | N/A | PASS | 1 | 0 | 24.64ms |
|  | 1_restructure_data.toml | PASS | 1 | 0 | 18.19ms |
| Collection: performance | N/A | PASS | 2 | 0 | 1549.37ms |
|  | 1_retry_test.toml | PASS | 1 | 0 | 1537.29ms |
|  | 2_assertion_test.toml | PASS | 1 | 0 | 19.59ms |
| Collection: playback | N/A | PASS | 3 | 0 | 34.88ms |
|  | 1_replay_user_1.toml | PASS | 1 | 0 | 20.64ms |
|  | 2_replay_user_2.toml | PASS | 1 | 0 | 19.63ms |
|  | 3_replay_event.toml | PASS | 1 | 0 | 20.53ms |
| Collection: protocols_adv | N/A | FAIL | 2 | 1 | 1545.54ms |
|  | 1_websub_subscribe.toml | FAIL | 0 | 1 | 1542.19ms |
|  | 2_detect_push.toml | PASS | 1 | 0 | 19.18ms |
|  | 3_quic_discovery.toml | PASS | 1 | 0 | 22.24ms |
| Collection: proxy_mtls | N/A | PASS | 2 | 0 | 32.77ms |
|  | 1_proxy_handshake.toml | PASS | 1 | 0 | 21.61ms |
|  | 2_mtls_request.toml | PASS | 1 | 0 | 21.98ms |
| Collection: realtime | N/A | FAIL | 1 | 1 | 1541.54ms |
|  | 1_ws_handshake.toml | PASS | 1 | 0 | 23.70ms |
|  | 2_fail_handshake.toml | FAIL | 0 | 1 | 1535.15ms |
| Collection: realtime_adv | N/A | PASS | 3 | 0 | 6537.66ms |
|  | 1_sse_heartbeat.toml | PASS | 1 | 0 | 3524.19ms |
|  | 2_long_polling.toml | PASS | 1 | 0 | 3021.80ms |
|  | 3_mqtt_binary.toml | PASS | 1 | 0 | 21.64ms |
| Collection: recursive | N/A | PASS | 2 | 0 | 33.53ms |
|  | 1_linked_list.toml | PASS | 1 | 0 | 21.61ms |
|  | 2_tree_structure.toml | PASS | 1 | 0 | 18.58ms |
| Collection: resilience | N/A | FAIL | 12 | 4 | 8131.72ms |
|  | 1_burst_node_1.toml | PASS | 1 | 0 | 15.40ms |
|  | 1_burst_node_10.toml | PASS | 1 | 0 | 16.11ms |
|  | 1_burst_node_11.toml | PASS | 1 | 0 | 17.85ms |
|  | 1_burst_node_12.toml | PASS | 1 | 0 | 21.27ms |
|  | 1_burst_node_2.toml | PASS | 1 | 0 | 20.33ms |
|  | 1_burst_node_3.toml | PASS | 1 | 0 | 18.58ms |
|  | 1_burst_node_4.toml | PASS | 1 | 0 | 14.97ms |
|  | 1_burst_node_5.toml | PASS | 1 | 0 | 1526.42ms |
|  | 1_burst_node_6.toml | PASS | 1 | 0 | 523.19ms |
|  | 1_burst_node_7.toml | PASS | 1 | 0 | 1532.13ms |
|  | 1_burst_node_8.toml | PASS | 1 | 0 | 523.95ms |
|  | 1_burst_node_9.toml | PASS | 1 | 0 | 1533.59ms |
|  | 2_trip_node_1.toml | FAIL | 0 | 1 | 1533.51ms |
|  | 2_trip_node_2.toml | FAIL | 0 | 1 | 1535.61ms |
|  | 2_trip_node_3.toml | FAIL | 0 | 1 | 1533.51ms |
|  | 2_trip_node_4.toml | FAIL | 0 | 1 | 1536.68ms |
| Collection: schema | N/A | FAIL | 1 | 1 | 1540.10ms |
|  | 1_valid_schema.toml | PASS | 1 | 0 | 22.06ms |
|  | 2_invalid_schema.toml | FAIL | 0 | 1 | 1533.44ms |
| Collection: scripting | N/A | FAIL | 2 | 1 | 1548.12ms |
|  | 1_pre_script.toml | FAIL | 0 | 1 | 1533.18ms |
|  | 2_set_global.toml | PASS | 1 | 0 | 19.16ms |
|  | 3_get_global.toml | PASS | 1 | 0 | 23.24ms |
| Collection: security | N/A | FAIL | 3 | 1 | 1564.83ms |
|  | 1_oauth_token.toml | PASS | 1 | 0 | 22.10ms |
|  | 2_get_secure_data.toml | PASS | 2 | 0 | 30.24ms |
|  | 3_hmac_valid.toml | PASS | 1 | 0 | 23.70ms |
|  | 4_hmac_tampered.toml | FAIL | 0 | 1 | 1535.12ms |
| Collection: security_adv | N/A | FAIL | 1 | 1 | 1539.35ms |
|  | 1_get_csrf.toml | FAIL | 0 | 1 | 1534.36ms |
|  | 2_post_protected.toml | FAIL | 0 | 1 | 1539.74ms |
|  | 3_reflection_test.toml | PASS | 1 | 0 | 22.80ms |
| Collection: serialization | N/A | PASS | 2 | 0 | 31.39ms |
|  | 1_fetch_yaml.toml | PASS | 1 | 0 | 21.71ms |
|  | 2_fetch_pipe.toml | PASS | 1 | 0 | 20.87ms |
| Collection: signing | N/A | FAIL | 0 | 1 | 1536.25ms |
|  | 1_secure_post.toml | FAIL | 0 | 1 | 1534.22ms |
| Collection: stateful | N/A | PASS | 4 | 0 | 44.53ms |
|  | 0_reset.toml | PASS | 1 | 0 | 24.41ms |
|  | 1_step_1.toml | PASS | 1 | 0 | 17.48ms |
|  | 2_step_2.toml | PASS | 1 | 0 | 22.37ms |
|  | 3_verify_resume.toml | PASS | 1 | 0 | 26.07ms |
| Collection: streaming_in | N/A | FAIL | 0 | 1 | 1541.05ms |
|  | 1_post_stream.toml | FAIL | 0 | 1 | 1541.33ms |
| Collection: streaming_out | N/A | PASS | 2 | 0 | 2542.72ms |
|  | 1_fetch_sse.toml | PASS | 1 | 0 | 2530.41ms |
|  | 2_fetch_range.toml | PASS | 1 | 0 | 23.08ms |
| Collection: traffic | N/A | FAIL | 0 | 10 | 15172.45ms |
|  | 1_throttle_node_1.toml | FAIL | 0 | 1 | 1537.65ms |
|  | 1_throttle_node_2.toml | FAIL | 0 | 1 | 1541.60ms |
|  | 1_throttle_node_3.toml | FAIL | 0 | 1 | 1538.31ms |
|  | 1_throttle_node_4.toml | FAIL | 0 | 1 | 1535.42ms |
|  | 1_throttle_node_5.toml | FAIL | 0 | 1 | 1526.86ms |
|  | 2_burst_node_1.toml | FAIL | 0 | 1 | 1536.09ms |
|  | 2_burst_node_2.toml | FAIL | 0 | 1 | 1525.85ms |
|  | 2_burst_node_3.toml | FAIL | 0 | 1 | 1528.99ms |
|  | 2_burst_node_4.toml | FAIL | 0 | 1 | 1536.80ms |
|  | 2_burst_node_5.toml | FAIL | 0 | 1 | 1529.58ms |
| Collection: transform | N/A | PASS | 2 | 0 | 34.20ms |
|  | 1_fetch_json.toml | PASS | 1 | 0 | 25.22ms |
|  | 2_fetch_csv.toml | PASS | 1 | 0 | 28.50ms |
| Collection: transmission | N/A | PASS | 2 | 0 | 1234.57ms |
|  | 1_gzip_fetch.toml | PASS | 1 | 0 | 21.62ms |
|  | 2_stream_fetch.toml | PASS | 1 | 0 | 1226.24ms |
| Collection: transmission_adv | N/A | PASS | 1 | 0 | 28.88ms |
|  | 1_fetch_brotli.toml | PASS | 1 | 0 | 26.14ms |
| Collection: transmission_ext | N/A | PASS | 2 | 0 | 537.08ms |
|  | 1_fetch_brotli_stream.toml | PASS | 1 | 0 | 529.57ms |
|  | 2_fetch_multi_range.toml | PASS | 1 | 0 | 24.56ms |
| Collection: trust | N/A | FAIL | 2 | 1 | 1558.53ms |
|  | 1_internal_portal.toml | PASS | 1 | 0 | 24.20ms |
|  | 2_rotated_key_success.toml | PASS | 1 | 0 | 24.86ms |
|  | 3_saml_acs.toml | FAIL | 0 | 1 | 1540.32ms |
| Collection: users | N/A | PASS | 3 | 0 | 44.75ms |
|  | 1_search_users.toml | PASS | 1 | 0 | 21.13ms |
|  | 2_register_user.toml | PASS | 1 | 0 | 15.33ms |
|  | 3_create_new.toml | PASS | 1 | 0 | 28.53ms |
| Collection: webdav | N/A | FAIL | 1 | 1 | 1540.06ms |
|  | 1_propfind_resource.toml | PASS | 1 | 0 | 24.61ms |
|  | 2_mkcol_folder.toml | FAIL | 0 | 1 | 1537.44ms |
| Collection: webhooks | N/A | FAIL | 1 | 1 | 1539.76ms |
|  | 1_register_webhook.toml | PASS | 1 | 0 | 19.13ms |
|  | 2_trigger_event.toml | FAIL | 0 | 1 | 1542.88ms |
| Collection: wire | N/A | PASS | 1 | 0 | 25.25ms |
|  | 1_post_proto.toml | PASS | 1 | 0 | 22.95ms |
