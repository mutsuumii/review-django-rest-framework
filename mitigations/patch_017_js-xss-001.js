# DOM XSS via innerHTML
# CWE-79 | Severity: HIGH
# File: rest_framework/static/rest_framework/js/jquery-3.7.1.min.js line 2

**Risk:** Setting innerHTML with user data allows script injection in other users' browsers.

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
