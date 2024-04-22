#!/bin/bash

# Note: This file is intended to be sourced; define a function for each desired subcommand and then source this
#  .do.sh defines common functions, ./do sources this script, sets config and actions, and calls 'run-do-script'.

# This helper script internally documents and automates the steps currently used to run standard operations for this project,
# and serves as a convenient tool, requiring less looking up of details, for performing these tasks in a standard way.
# (Each project could have a similar build script with the same commands, with the details inside tailored to each project)

# The usage is like the following:
#
# Usage:
#    ./do [options] <function> [arguments]
#
#  Where function is one of:
#     { list of functions defined starting with do-... }
#
#  Options:
#    -v : be more verbose
#    --help : display info about command, options and arguments

# Globals available for use in functions (here and in the main script):
VERBOSE_LVL=0  # For additional details, increased with '-v' or '--verbose' option
SHOW_HELP=0    # Set to '1' when reading '--help' arg
COMMAND=""     # Keeping track of the command / function specified
ARGS=""        # Arguments for the command, not including options or the function; functions can also use $1, $2, etc.
ME="${ME:-$0}" # usually './do', for the help message


debug() {
    LVL="${1:-1}"
    shift
    if [ "${VERBOSE_LVL:-0}" -gt "${LVL}" ]
    then echo "$@"
    fi
    return 0
}

show_usage() {
    cat <<EOF

Usage:
  ${ME} [options] <function> [arguments]

  Where function is one of: $(for FUNC in ${FUNCS}; do echo -en "\n    - ${FUNC}"; done)

  Options:
    -v, --verbose: be more verbose
    --help : display info about command, options and arguments

EOF
}

check_if_used_help_but_no_args() {
    if [ "${SHOW_HELP}" = "1" ]
    then echo -e "Usage: ${ME} [--help] ${COMMAND}\n  There are no options; just run without --help."
         return 0
    fi
    return 1
}


run-do-script() {

FUNCS=""
for FUNC in $(declare -F | sed -E 's|^declare -f ||')
do  if [[ "${FUNC}" =~ ^_.*$ ]]
    then debug 2 "Ignoring internal '${FUNC}'…"
    elif [[ "${FUNC}" =~ ^do-.*$ ]]
    then _FUNC="${FUNC#do-}"
         debug 2 "Found function ${FUNC}…"
         FUNCS="${FUNCS} ${FUNC#do-}"
    else debug 3 "Ignoring '${FUNC}'…"
    fi
done

VERBOSE_LVL=0
COMMAND=""
ARGS=""
PROCEED=1
while [ $# -gt 0 ]
do
    case "$1" in
        -v | --verbose)
           debug 0 "Increasing verbosity level, from ${VERBOSE_LVL}"
           VERBOSE_LVL=$((VERBOSE_LVL + 1))
           ;;
       --help)
           SHOW_HELP=1
           ;;
       # --*)
       #     echo "Unrecognized option '${1}'"
       #     PROCEED=0
       #     ;;
       *)
           if [ "${COMMAND}" = "" ]
           then COMMAND="${1}"
           else ARGS="${ARGS} ${1}"
           fi
           ;;
   esac
   shift
done

if [ "${COMMAND}" = "" ]
then show_usage
elif [ "${PROCEED}" = "0" ]
then echo "Not proceeding due to previous error.."
else {
    FOUND=0
    for FUNC in ${FUNCS}
    do {
        if [ "${FUNC}" = "${COMMAND}" ]
        then eval "do-${COMMAND} ${ARGS}"
             FOUND=1
        fi
    }
    done
    if [ "${FOUND}" = "0" ]
    then echo "Error: function '${COMMAND}' not found.  Use the 'help' function for more details."
    fi
}
fi

}
