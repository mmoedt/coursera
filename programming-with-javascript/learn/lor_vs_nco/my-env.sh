#!/bin/bash

THIS_DIR=$(cd $(dirname "${BASH_SOURCE[0]}"); pwd)

# Tweak the system 'max_user_watches' to avoid errors
MIN_MUW_SETTING="${MIN_MUW_SETTING:-150100}"
FSKEY="fs.inotify.max_user_watches"

if [ "$(sysctl -n ${FSKEY})" -lt "${MIN_MUW_SETTING}" ]
then
    echo "Adjusting '${FSKEY}' to avoid errors, using sudo..."
    sudo sysctl -w ${FSKEY}=${MIN_MUW_SETTING}
fi

# <NVM-RELATED>

# We don't need a specific node environment for this project, so the below is disabled
USE_LOCAL_NVM=0

if [ "${USE_LOCAL_NVM}" = "1" ]; then
    export XDG_CONFIG_HOME="${THIS_DIR}"
    export NVM_DIR="${THIS_DIR}/.nvm"
else
    export XDG_CONFIG_HOME="${HOME}/.config"
    export NVM_DIR="${HOME}/.nvm"
fi

[ -s "${NVM_DIR}/nvm.sh" ] && source "${NVM_DIR}/nvm.sh"  # This loads nvm
[ -s "${NVM_DIR}/bash_completion" ] && source "${NVM_DIR}/bash_completion"  # This loads nvm bash_completion

if [ -e '.nvmrc' ] && [[ $(type -t nvm) == "function" ]]; then
    nvm use
else
    if [ -e "${NVM_DIR}/versions/node" ]; then
        # Note: nvm use will re-set up these env vars
        _NVM_DIR=$(ls -trd "${NVM_DIR}/versions/node"/v?.*.* | sort | tail -n 1)
        export NVM_INC="${_NVM_DIR}/include/node"
        export NVM_BIN="${_NVM_DIR}/bin"
    fi
fi
# </NVM-RELATED>

PATH="${THIS_DIR}/node_modules/.bin:${PATH}"  # for npm-installed tools
