#!/bin/bash
# source-me

export PIPENV_VENV_IN_PROJECT=1

_BINDIR="$(pwd)/.local/bin"

if [ -d "${_BINDIR}" ]; then
    PATH="${_BINDIR}:${PATH}"
fi

echo "Inside the shell we're about to start, you should run 'pipenv install'..."
pipenv shell

# Pipfile.lock not found, creating...
# Locking [packages] dependencies...
# Locking [dev-packages] dependencies...
# Updated Pipfile.lock (ed6d5d614626ae28e274e453164affb26694755170ccab3aa5866f093d51d3e4)!
# Installing dependencies from Pipfile.lock (51d3e4)...
# To activate this project's virtualenv, run pipenv shell.
# Alternatively, run a command inside the virtualenv with pipenv run.
