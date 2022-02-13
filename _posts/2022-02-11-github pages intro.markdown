---
layout: post
title: 基于 GitHub Pages 的网站介绍
tags: 
- GitHub Pages
- jekyll
- github.io
categories: GitHub-Pages
---

<style>
table{
    display: inline-block;
    /* flex-wrap: wrap;
    white-space:flex wrap; */
    border:none
    }
div  .show-items-container{
    margin:.5rem 0 1rem;
}
h2 {font-size:1.25rem!important;color:blue;}
h3 {font-size:1.1rem!important;color:green;}
</style>


# 简介
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/) 是一个免费的静态页面托管服务， 它可以直接提取 [GitHub](https://www.github.com) 仓库(repo)的 HTML， CSS， 和 JavaScript 文件，将其生成为静态网页。默认的访问域名为：`${github-user-name}.github.io`，其中，`${github-user-name}` 为 github 小写用户名。(可在 repo 的 `Settings -> GitHub Pages` 中激活 GitHub Pages 托管。)<br>
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/)官方推荐使用 [jekyll](https://jekyllrb.com/)，一种静态网页生成器来定制网页，但这不是必要的。


# 网站实例
&emsp;&emsp;以下是几个基于[GitHub-Pages](https://pages.github.com/)的个人博客:<br>


|blog|code repo|
|:-----|-----|
|[南峰子的技术博客](https://southpeak.github.io/)|[github repo](https://github.com/southpeak/southpeak.github.com)|
|[god-jiang's blog](https://god-jiang.github.io/)|[github repo](https://github.com/god-jiang/god-jiang.github.io)|
|[jackycheng86's blog](https://jackycheng86.github.io/)|[github repo](https://github.com/jackycheng86/jackycheng86.github.io)|
|[小何个人blog](https://xiaohegithub.cn/)|[github repo](https://github.com/woshidandan/xiaohe/tree/gh-pages)|
|[粽's blog](https://zhoon.github.io/)|[github repo](https://github.com/zhoon/zhoon.github.io)|



# Jekyll
## 简介
&emsp;&emsp;[GitHub-Pages](https://pages.github.com/)的后台服务就是由[jekyll](https://jekyllrb.com/)驱动，所以用 jekyll 在 github 部署网站非常方便。在部署好 jekyll 网站后，用户可以直接在`_posts`文件内用 Markdown(md) 编写自己的网页内容，如果文件名格式为 `YEAR-MONTH-DAY-title.md`，jekyll 会自动在`_site`文件中生成对应html页面，如果使用了默认的minima主题，会将页面链接到用户主页。详情请移步[jekyll-post](https://jekyllrb.com/docs/posts/) 和 [jekyll-tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/) <br>

## Jekyll网站模板
&emsp;&emsp;每一个博客都是一个可以借鉴的模板，默认的模板是 minima，您可以移步jekyll官方提供的主题模板网站[jekyllthemes](http://jekyllthemes.org/)，之后将所选模板的`github.io`域名输入到`Settings -> GitHub Pages -> Custom domain`中以设置相应模板，详情请见[themeChooser](https://docs.github.com/en/pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser)。

## Jekyll内部文件作用
&emsp;&emsp;如果您想定制自己风格的网站，那就需要了解Jekyll网站中`_`开头的内部文件的作用：<br>

文件名|存放
-----|-----
`_site`|访问网站的根目录，存放生成的html等文件，以及原目录下的css、资源文件等非隐藏文件的副本
`_layouts`|html布局模板，md[扉页](#扉页)中如果指定了layout模板，则会在生成html时加载
`_includes`|html嵌入文件，可嵌入sidebar、footer等到`_Layout`模板中
`_config.yml`|各类设置信息，只在启动 jekyll serve 时加载
`_Plugins`|插件

更具体的描述，请见  [jekyll](https://jekyllrb.com/) 

<h2 id="扉页">Markdown 扉页(Front Matter)</h2>

&emsp;&emsp;jekyll 会遍历网站，搜索并处理带扉页的文件。扉页语言为 [YAML](https://yaml.org/),且必须写在两条三重虚线之间：
```
---
layout: post
title: Java Spring Boot mechanism
date: 2017-12-03
tags:
- Spring Boot
- Spring
- Java
categories: Java
---
```

YAML和JSON类似，可用于序列化对象数据，上面的[YAML转JSON](https://www.json2yaml.com/)：
```
{
  "layout": "post",
  "title": "Java Spring Boot mechanism",
  "date": "2017-12-03",
  "tags": [
    "Spring Boot",
    "Spring",
    "Java"
  ],
  "categories": "Java"
}
```
想了解更多YAML基本用法的可以移步 [YAML-runoob](https://www.runoob.com/w3cnote/yaml-intro.html) 和 [YAML Tutorial](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)。<br>
&emsp;&emsp;在扉页中,可以设置预先定义的全局变量，也可以定义您自己的变量。这些变量会在当前文件以及当前文件所属的layout模板或嵌入(include)的文件中可用。如果您什么也不想设置，只留两行虚线，jekyll 同样会处理该文件。更多请参见 [jekyll-front-matter](https://jekyllrb.com/docs/front-matter)




<h2 id="Liquid">Liquid 模板语言(template language)</h2>

&emsp;&emsp;[Liquid](https://liquid.bootcss.com/basics/introduction/)是 jekyll 处理和整合html页面的模板语言。它可以将处理逻辑、控制流程或数据、变量嵌入html页面，[jekyll-tutorial-liquid](https://jekyllrb.com/docs/step-by-step/02-liquid/) 中有相关介绍。通过 Liquid ，我们就可以利用 jekyll 的全局变量和我们定义的变量

## Jekyll 全局变量
&emsp;&emsp;Jekyll有些预定义的全局变量，下面我将借用[Liquid](#Liquid)输出他们。
### 当前页 layout 布局模板：
&emsp;&emsp;{% raw %}`{{layout}}:`{% endraw %}{{layout}}

### 当前页 page 对象：

对象|值|作用
---|---|---
{% raw %}{{page.title}}{% endraw %}|{{page.title}}|
{% raw %}{{page.url}}{% endraw %}|{{page.url}}|
{% raw %}{{page.date}}{% endraw %}|{{page.date}}|
{% raw %}{{page.id}}{% endraw %}|{{page.id}}|
{% raw %}{{page.categories}}{% endraw %}|{{page.categories}}|
{% raw %}{{page.collection}}{% endraw %}|{{page.collection}}|当前文档类型
{% raw %}{{page.tags}}{% endraw %}|{{page.tags}}|
{% raw %}{{page.dir}}{% endraw %}|{{page.dir}}|
{% raw %}{{page.name}}{% endraw %}|{{page.name}}|
{% raw %}{{page.path}}{% endraw %}|{{page.path}}|
{% raw %}{{page.previous.title}}{% endraw %}|{{page.previous.title}}|前一个文档
{% raw %}{{page.next.title}}{% endraw %}|{{page.next.title}}|后一个文档

### 网站 site.posts 子对象 post：

<div class="show-items-container">

{% for post in site.posts reversed %}
{% unless post.previous %}<h1>{{ post.date | date: '%Y' }}</h1>
<code>{% raw %}{{post.date|date:"%m月%d日"}} [{{post.title}}]({{post.url}})&lt;{{post.categories}}&gt;{% endraw %}</code>
{% else %}
{% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ post.previous.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}<h1>{{ post.date | date: '%Y' }}</h1>{% endif %}
{% endunless %}
<div class="post-item">
    <span class='post-date'>{{ post.date | date: "%m月%d日"}}</span>
    <a style ="font-size:1rem" class="post-title" href="{{ post.url }}">{{ post.title }}</a>
    <span class="page-tag">&lt;{{ post.categories }}&gt;</span>
</div>
{% endfor %}

</div>

### 网站 site.pages 子对象 page:

<div class="show-items-container">
<code>{% raw %}[{{page.title}}]({{page.url}}):{{page.collection}}{% endraw %}</code>
{% for page in site.pages %}
{% unless page.next %}
{%if page.date %}<h1>{{ page.date | date: '%Y' }}</h1>{% endif %}
{% else %}
{% capture year %}{{ page.date | date: '%Y' }}{% endcapture %}
{% capture nyear %}{{ page.next.date | date: '%Y' }}{% endcapture %}
{% if year != nyear %}
{%if page.date %}<h1>{{ page.date | date: '%Y' }}</h1>{% endif %}
{% endif %}
{% endunless %}
<div class="page-item">
    <a style ="font-size:1rem"  class="page-title" href="{{ page.url }}">{{ page.name }}</a>
{%if page.collection %}<span class="page-tag">:{{ page.collection }}</span>
{% endif %}
</div>
{% endfor %}
</div>

更具体的变量描述，请参见 [jekyll-variables](https://jekyllrb.com/docs/variables/#site-variables)。

<script src="/js/set_link_blank.js"></script>









