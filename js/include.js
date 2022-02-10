(function (window, document, undefined) {
    undefined

    var IncludeFile = function () { }

    IncludeFile.prototype = {
        undefined,

        //倒序循环

        forEach: function (array, callback) {
            undefined

            var size = array.length;

            for (var i = size - 1; i >= 0; i--) {
                undefined

                callback.apply(array[i], [i]);

            }

        },

        getFilePath: function () {
            undefined

            var curWwwPath = window.document.location.href;

            var pathName = window.document.location.pathname;

            var localhostPaht = curWwwPath.substring(0, curWwwPath.indexOf(pathName));

            var projectName = pathName.substring(0, pathName.substr(1).lastIndexOf('/') + 1);

            return localhostPaht + projectName;

        },

        //获取文件内容

        getFileContent: function (url) {
            undefined

            var ie = navigator.userAgent.indexOf('MSIE') > 0;

            var o = ie ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();

            o.open('get', url, false);

            o.send(null);

            return o.responseText;

        },

        parseNode: function (content) {
            undefined

            var objE = document.createElement("div");

            objE.innerHTML = content;

            return objE.childNodes;

        },

        executeScript: function (content) {
            undefined

            var mac = /<script>([\s\S]*?)<\/script>/g;

            var r = "";

            while (r = mac.exec(content)) {
                undefined

                eval(r[1]);

            }

        },

        getHtml: function (content) {
            undefined

            var mac = /<script>([\s\S]*?)<\/script>/g;

            content.replace(mac, "");

            return content;

        },

        getPrevCount: function (src) {
            undefined

            var mac = /\.\.\//g;

            var count = 0;

            while (mac.exec(src)) {
                undefined

                count++;

            }

            return count;

        },

        getRequestUrl: function (filePath, src) {
            undefined

            if (/http:\/\//g.test(src)) { return src; }

            var prevCount = this.getPrevCount(src);

            while (prevCount--) {
                undefined

                filePath = filePath.substring(0, filePath.substr(1).lastIndexOf('/') + 1);

            }

            return filePath + "/" + src.replace(/\.\.\//g, "");

        },

        replaceIncludeElements: function () {
            undefined

            var $this = this;

            var filePath = $this.getFilePath();

            var includeTals = document.getElementsByTagName("include");

            this.forEach(includeTals, function () {
                undefined

                //拿到路径  

                var src = this.getAttribute("src");

                //拿到文件内容

                var content = $this.getFileContent($this.getRequestUrl(filePath, src));

                //将文本转换成节点  

                var parent = this.parentNode;

                var includeNodes = $this.parseNode($this.getHtml(content));

                var size = includeNodes.length;

                for (var i = 0; i < size; i++) {
                    undefined

                    parent.insertBefore(includeNodes[0], this);

                }

                //执行文本中的额javascript  

                $this.executeScript(content);

                parent.removeChild(this);

                //替换元素 this.parentNode.replaceChild(includeNodes[1], this);  

            })

        }

    }

    $(function () {
        undefined

        new IncludeFile().replaceIncludeElements();

    })

})(window, document)

// https://blog.csdn.net/weixin_39832875/article/details/112943056?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_aa&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_aa&utm_relevant_index=2