# Prototype pollution
# CWE-1321 | Severity: HIGH
# File: rest_framework/static/rest_framework/js/jquery-3.7.1.min.js line 2

**Risk:** Prototype mutation through user input affects all objects in the process.

**Fix:** Use Object.create(null) for maps. Validate keys reject __proto__ and constructor.
