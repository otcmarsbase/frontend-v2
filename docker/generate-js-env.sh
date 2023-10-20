# # env | grep -E '\<REACT_APP_*' | sed 's/^/window./g'
env | grep -E '\<REACT_APP_*' | sed 's/\"/\\\"/g' | sed -n 's/\(^\)\([^=]*\)=\(.*\)/window.\1\2="\3"/p'