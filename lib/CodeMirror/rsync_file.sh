filepath="/mnt/d/My work 2022/Network/server"
sudo mkdir -p ./doc ./mode ./addon ./lib ./keymap ./theme
sudo rsync -a  "${filepath}/CodeMirror/doc/docs.css"  ./doc/
sudo rsync -a  "${filepath}/CodeMirror/mode/xml/xml.js"  ./mode/xml/
sudo rsync -a  "${filepath}/CodeMirror/mode/javascript/javascript.js"  ./mode/javascript/
sudo rsync -a  "${filepath}/CodeMirror/mode/htmlmixed/htmlmixed.js"  ./mode/htmlmixed/
sudo rsync -a  "${filepath}/CodeMirror/mode/css/css.js"  ./mode/css/
sudo rsync -a  "${filepath}/CodeMirror/addon/selection/active-line.js"  ./addon/selection/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/javascript-hint.js" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/html-hint.js" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/xml-hint.js" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/css-hint.js" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/show-hint.js" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/addon/hint/show-hint.css" ./addon/hint/
sudo rsync -a  "${filepath}/CodeMirror/lib/"  ./lib/
sudo rsync -a  "${filepath}/CodeMirror/keymap/sublime.js" ./keymap/
sudo rsync -av  "${filepath}/CodeMirror/theme/blackboard.css" ./theme/




