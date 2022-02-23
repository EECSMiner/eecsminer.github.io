// force urls excluding current page origin to jump
! function (tagName, fn) {
    Array
        .from(document.getElementsByTagName(tagName))
        .forEach(fn);
}("a", function (link) {
    let noJump = true;
    let include = link.href.includes
    let origin = window.location.origin
    if (!origin) {
        origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    if (include) {
        noJump = link.href.includes(origin)
    } else {
        noJump = link.href.indexOf(origin) !== -1;
    }
    if (!noJump) {
        // console.log(link.href)
        link.target = "_blank";
    }
})

// show all css style of element using JQUERY
//$  空格代表子节点 ，逗号代表与，点代表类，
function userDisp () {
    if (typeof jQuery == 'function') {
        console.log('jQuery版本：' + $.fn.jquery);
        nava = $("header nav.animated")
        li = nava.find("li")
        ul = li.parent();
        // uul = nava.children();
        uul = ul.parent();
        ul.css("background-color", "black")
        console.log(li.css("float"))
        console.log(li.css("list-style-type"))
        console.log(ul.css("display"))
        uul.css("display", "flex")
        //父节点临时改变没有用
        console.log(ul.css("display"))
        ul.css("display", "flex")
    }
}

// remove baselink's node by nodeId
let removeNode = function (link, nodeId) {
    function include (url) {
        let sameIndex = true;
        let link = document.createElement('a');
        link.href = url;
        let include = link.href.includes
        let origin = window.location.origin
        if (!origin) {
            origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        if (include) {
            sameIndex = link.href.includes(origin)
        } else {
            sameIndex = link.href.indexOf(origin) !== -1;
        }
        return sameIndex
    }
    let flag = include(link)
    if (flag) {
        if (nodeId.constructor !== Array) {
            nodeId = [nodeId]
        }
        nodeId
            .forEach(function (element) {
                let rubbish = document.getElementById(element);
                rubbish ? rubbish.remove() : undefined
            });
    }
}

// let nodeId = ["content_right", "s_wrap"], link = "https://www.baidu.com"
// removeNode(link, nodeId)

// let oldHref = document.location.href;
// window.onload = function () {
//     var bodyList = document.querySelector("body")
//     var observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             if (oldHref != document.location.href) {
//                 oldHref = document.location.href;
//                 /* Changed ! your code here */
//                 removeNode(link, nodeId)
//               	alert("hi");
//             }

//         });
//     });
//     var config = {
//         childList: true,
//         subtree: true
//     };
//     observer.observe(bodyList, config);
// };

function checkRegisterForm () {
    let forms = document.getElementsByTagName("form")
    let rel = true;
    forms
        .forEach(function (form) {
            if (form.id === "test-register") {
                let check = {}, pwd = {}
                form.children
                    .forEach(function (input) {
                        let id = input.id
                        let str = input.value
                        switch (id) {
                            case "username": {
                                let limit = [3, 10]
                                let re = new RegExp(`(?=^[a-zA-Z0-9]{${limit[0]},${limit[1]}}$)(?!^[0-9]).*`, "m");
                                if (re.test(str)) check[id] = true;
                                break;
                            }
                            case "password":
                            case "password-2": {
                                let limit = [6, 20]
                                let re = new RegExp(`^.{${limit[0]},${limit[1]}}$`, "m");
                                if (re.test(str)) {
                                    pwd.push(str);
                                    check[id] = true;
                                }
                            }
                        }
                    })
                // check
                check.forEach(function (e, i) {
                    if (!e) {
                        console.log(`the $ist item is wrong!`)
                        rel = false;
                    }
                })
                if (!(pwd.length === 2 && pwd[0] === pwd[1])) {
                    console.log("passwords not the same!")
                    rel = false;
                }
            }
        })
    return rel;
}

