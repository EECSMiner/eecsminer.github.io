! function(tagName, fn) {
    Array
        .from(document.getElementsByTagName(tagName))
        .forEach(fn);
}("a", function(element) {
    element.target = "_blank";
})