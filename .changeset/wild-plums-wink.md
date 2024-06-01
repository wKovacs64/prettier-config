---
'@wkovacs64/prettier-config': major
---

Add `prettier-plugin-tailwindcss`. The only reason this constitutes a major version is because this plugin requires a newer version of Node.js (v14.21.3) than what we required previously (v8.9.0). No dependent projects should be using Node versions that old anyway, so it shouldn't really matter.
