#!/usr/bin/env bash
set -euo pipefail

if ! bundle check >/dev/null 2>&1; then
  echo "📦 Installing gems..."
  bundle install
fi

echo "🚀 Starting Jekyll (dev config)..."
exec bundle exec jekyll serve --config _config.local.yml --livereload --open-url "$@"