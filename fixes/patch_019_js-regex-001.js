# ReDoS via backtracking regex
# CWE-1333 | Severity: MEDIUM
# File: rest_framework/static/rest_framework/js/jquery-3.7.1.min.js line 2

**Risk:** User-controlled regex can cause catastrophic backtracking, stalling the event loop.

**Fix:** Never build regex from user input. If needed, limit input length and use safe-regex library.
