// DEBUG = () => {};
if (typeof (DEBUG) === "undefined") {
    if (!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for (var i = 0; i < methods.length; i++) {
        console[methods[i]] = function () { };
    }
}

// self-define elements; without the following alse works
// document.createElement('include', {
//     prototype: Object.create(HTMLElement.prototype)
// });

// Don't do anything until the entire document has loaded
window.onload = function () {
    // "use strict";
    // var mixedMode = {
    //     name: "htmlmixed",
    //     scriptTypes: [{
    //             matches: /\/x-handlebars-template|\/x-mustache/i,
    //             mode: null
    //         },
    //         {
    //             matches: /(text|application)\/(x-)?vb(a|script)/i,
    //             mode: "vbscript"
    //         }
    //     ]
    // };

    // editor is a global value
    editor = CodeMirror.fromTextArea(document.getElementById("textareaCode"), {
        mode: "htmlmixed",
        // line wrapper background
        styleActiveLine: true, // selection/active-line.js
        // 显示行号
        lineNumbers: true,
        // 单行不够，多行来凑
        lineWrapping: true,
        // selectionPointer: true,
        matchBrackets: true,
        indentUnit: 4,
        indentWithTabs: true,
        // keyMap: "sublime",
        theme: "blackboard",
    });
    // editor.setOption("theme", "blackboard");
    // set editor Value
    // editor.getDoc().setValue(document.documentElement.innerHTML);
    // editor.getDoc().setValue();


    editor.on("keyup", function (cm, event) {
        if (!cm.state.completionActive) { /*Enables keyboard navigation in autocomplete list*/
            let keyCode = event.keyCode
            if ((keyCode >= 'a'.charCodeAt(0) && keyCode <= 'z'.charCodeAt(0)) ||
                (keyCode >= 'A'.charCodeAt(0) && keyCode <= 'Z'.charCodeAt(0)) ||
                event.key === "<" ||
                event.key === "-"
            ) {
                // 获取当前__Token:光标之前成一个整体的的字符串
                var __Cursor = editor.getDoc().getCursor();
                var __Token = editor.getTokenAt(__Cursor);
                console.log("keyCode:" + keyCode)
                console.log("__Token<::>" + __Token.string + " " + __Token.type)
                if (__Token.type !== null && __Token.string[0] !== '#') {
                    cm.showHint({
                        completeSingle: false
                    });
                }
            }
            // if (event.key === "-") console.log("ok----\n")
            console.log("keyup<::>" + event.key + " " + keyCode)
        }
    });

    window.addEventListener("resize", autodivheight);
    submitTryit();
    Split(['#split-0', '#split-1']);
}


function autodivheight () {
    var winHeight = 0;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
    }
    height = winHeight * 0.68
    editor.setSize('100%', height);
    document.getElementById("iframeResult").style.height = height + "px";
    showFrameSize();

}

function resetCode () {
    var initCode = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<meta charset=\"utf-8\">\r\n<title>\u83dc\u9e1f\u6559\u7a0b(runoob.com)<\/title>\r\n<style>\r\nbody\r\n{\r\n\tbackground-color:#d0e4fe;\r\n}\r\nh1\r\n{\r\n\tcolor:orange;\r\n\ttext-align:center;\r\n}\r\np\r\n{\r\n\tfont-family:\"Times New Roman\";\r\n\tfont-size:20px;\r\n}\r\n<\/style>\r\n<\/head>\r\n\r\n<body>\r\n\r\n<h1>CSS \u5b9e\u4f8b!<\/h1>\r\n<p>\u8fd9\u662f\u4e00\u4e2a\u6bb5\u843d\u3002<\/p>\r\n\r\n<\/body>\r\n<\/html>\r\n"
    editor.getDoc().setValue(initCode);
    submitTryit();
}

function submitTryit () {
    var text = editor.getValue();
    // RegExp
    var patternHtml = /<html[^>]*>((.|[\n\r])*)<\/html>/im
    var patternHead = /<head[^>]*>((.|[\n\r])*)<\/head>/im
    var patternBody = /<body[^>]*>((.|[\n\r])*)<\/body>/im;

    // exec() 方法用于检索字符串中的正则表达式的匹配
    var array_matches_head = patternHead.exec(text);
    var array_matches_body = patternBody.exec(text);

    var basepath_flag = 1;
    var basepath = '';
    if (basepath_flag) {
        basepath = '<base href="//www.runoob.com/try/demo_source/" target="_blank">';
    }
    if (array_matches_head) {
        text = text.replace('<head>', '<head>' + basepath);
    } else if (patternHtml) {
        text = text.replace('<html>', '<head>' + basepath + '</head>');
    } else if (array_matches_body) {
        text = text.replace('<body>', '<body>' + basepath);
    } else {
        text = basepath + text;
    }
    var ifr = document.createElement("iframe");
    ifr.setAttribute("frameborder", "0");
    ifr.setAttribute("id", "iframeResult");

    document.getElementById("iframewrapper").innerHTML = "";
    document.getElementById("iframewrapper").appendChild(ifr);

    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();
    autodivheight();
}

function runoob_getStyleValue (elmnt, style) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(elmnt, null).getPropertyValue(style);
    } else {
        return elmnt.currentStyle[style];
    }
}

function showFrameSize () {
    var t;
    var width, height;
    width = Number(runoob_getStyleValue(document.getElementById("iframeResult"), "width").replace("px", "")).toFixed();
    height = Number(runoob_getStyleValue(document.getElementById("iframeResult"), "height").replace("px", "")).toFixed();
    document.getElementById("framesize").innerHTML = "size: <span>" + width + " x " + height + "</span>";

}


