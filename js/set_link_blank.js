! function(tagName, fn) {
    Array
        .from(document.getElementsByTagName(tagName))
        .forEach(fn);
}("a", function(link) {
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