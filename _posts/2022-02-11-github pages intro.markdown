---
layout: post
title: 基于 GitHub Pages 的网站介绍
categories: [GitHub-Pages]
---

# 简介
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/) 是一个免费的静态页面托管服务， 它可以直接提取 [GitHub](https://www.github.com) 仓库(repo)的 HTML， CSS， 和 JavaScript 文件，将其生成为静态网页。默认的访问域名为：`${github-user-name}.github.io`，其中，`${github-user-name}` 为 github 小写用户名。(可在 repo 的 `Settings -> GitHub Pages` 中激活 GitHub Pages 托管。)<br>
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/)官方推荐使用 [jekyll](https://jekyllrb.com/)，一种静态网页生成器来定制网页，但这不是必要的。
# 网站实例
&emsp;&emsp;以下是几个基于[GitHub-Pages](https://pages.github.com/)的个人博客:<br>

<style>
table{max-width:50%;/*white-space:nowrap;*/}
h2 {font-size:1.25rem!important;color:blue;}
h3 {font-size:1.1rem!important;color:green;}
</style>



|blog|code repo|
|-----|-----|
|[南峰子的技术博客](https://southpeak.github.io/)|[github repo](https://github.com/southpeak/southpeak.github.com)|
|[god-jiang's blog](https://god-jiang.github.io/)|[github repo](https://github.com/god-jiang/god-jiang.github.io)|
|[jackycheng86's blog](https://jackycheng86.github.io/)|[github repo](https://github.com/jackycheng86/jackycheng86.github.io)|
|[小何个人blog](https://xiaohegithub.cn/)|[github repo](https://github.com/woshidandan/xiaohe/tree/gh-pages)|
|[粽's blog](https://zhoon.github.io/)|[github repo](https://github.com/zhoon/zhoon.github.io)|



# Jekyll
## 简介
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/)的后台服务就是由[jekyll](https://jekyllrb.com/)驱动，所以用 jekyll 在 github 部署网站非常方便。在部署好 jekyll 网站后，用户可以直接在`_posts`文件内用Markdown(md)编写自己的网页内容，jekyll 会自动在`_site`文件中生成对应html页面，如果使用了默认的minima主题，会将页面链接到用户主页。详情请移步[jekyll-post](https://jekyllrb.com/docs/posts/)<br>

## Jekyll网站模板
&emsp;&emsp;每一个博客都是一个可以借鉴的模板，默认的模板是 minima，您可以移步jekyll官方提供的主题模板网站[jekyllthemes](http://jekyllthemes.org/)，之后将所选模板的`github.io`域名输入到`Settings -> GitHub Pages -> Custom domain`中以设置相应模板，详情请见[themeChooser](https://docs.github.com/en/pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)。

## Jekyll内部文件作用
&emsp;&emsp;如果您想定制自己风格的网站，那就需要了解Jekyll网站中`_`开头的内部文件的作用：<br>

文件名|存放
-----|-----
`_site`|访问网站的根目录，存放生成的html等文件，以及原目录下的css、资源文件等非隐藏文件的副本
`_layouts`|html布局模板，md扉页中如果指定了layout模板，则会在生成html时加载
`_includes`|html嵌入文件，可嵌入sidebar、footer等到`_Layout`模板中
`_config.yml`|各类设置信息，只在启动 jekyll serve 时加载
`_Plugins`|插件

更具体的描述，请见  [jekyll](https://jekyllrb.com/) 

<script src="/js/set_link_blank.js"></script>

