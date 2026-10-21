#!/bin/bash
set -euo pipefail

echo "Entry point script running"

CONFIG_FILE=_config.yml
JEKYLL_PID=""

# Function to manage Gemfile.lock
manage_gemfile_lock() {
    git config --global --add safe.directory '*'
    if command -v git &> /dev/null && [ -f Gemfile.lock ]; then
        if git ls-files --error-unmatch Gemfile.lock &> /dev/null; then
            echo "Gemfile.lock is tracked by git, keeping it intact"
            git restore Gemfile.lock 2>/dev/null || true
        else
            echo "Gemfile.lock is not tracked by git, removing it"
            rm Gemfile.lock
        fi
    fi
}

# Install gems (including git-sourced ones like jekyll-terser) only if missing
ensure_gems() {
    if bundle check &> /dev/null; then
        echo "All gems are already installed"
    else
        echo "Missing gems detected, running bundle install"
        bundle install
    fi
}

start_jekyll() {
    manage_gemfile_lock
    ensure_gems
    bundle exec jekyll serve --watch --port=8080 --host=0.0.0.0 --livereload --verbose --trace --force_polling &
    JEKYLL_PID=$!
}

start_jekyll

while true; do
    inotifywait -q -e modify,move,create,delete "$CONFIG_FILE"
    echo "Change detected to $CONFIG_FILE, restarting Jekyll"
    if [ -n "$JEKYLL_PID" ]; then
        kill -KILL "$JEKYLL_PID" 2>/dev/null || true
        wait "$JEKYLL_PID" 2>/dev/null || true
    fi
    # Clean up any stray jekyll child processes left behind
    pkill -KILL -f "jekyll serve" 2>/dev/null || true
    start_jekyll
done