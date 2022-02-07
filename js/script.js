var nonEmpty = false;
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "application/xml",
    styleActiveLine: true,
    // 显示行号
    lineNumbers: true,
    // 单行不够，多行来凑
    // lineWrapping: true,
    // selectionPointer: true,
    // matchBrackets: true,
    // indentUnit: 4,
    // indentWithTabs: true
});

function toggleSelProp () {
    nonEmpty = !nonEmpty;
    editor.setOption("styleActiveLine", { nonEmpty: nonEmpty });
    var label = nonEmpty ? 'Disable nonEmpty option' : 'Enable nonEmpty option';
    document.getElementById('toggleButton').innerText = label;
}