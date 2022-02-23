---
layout: post
title: media edit 学习笔记
tags: 
- image
- vedio
- edit
date: 2022-02-15
categories: media edit
---
{% comment %}
<!-- TOC -->

- [ps](#ps)
    - [make icon](#make-icon)
    - [shortcut](#shortcut)
    - [img process](#img-process)
- [illustrator](#illustrator)
    - [key shortcuts](#key-shortcuts)
    - [convert png to vector](#convert-png-to-vector)

<!-- /TOC -->
{% endcomment %}

# ps
## make icon
[制作过程](https://blog.csdn.net/qq_41697230/article/details/106172145)
1. select the icon ：选中想要的图片
2. make work path :将图片围起来
3. inverse selection and delete : 删除背景
4. 滤镜->边缘锐化

<!--more-->

## shortcut

Zoom in out layer`Ctrl`+ `-` or `=`
inverse selection  `Ctrl`+ `Shift` + `i`
image size `alt`+ `Ctrl` + `I`
color level `Ctrl` + `L`

## img process
二值化：“图像”-“调整”-“阈值”中设置
描边：编辑-》描边

# illustrator
## key shortcuts
Zoom InCtrl+=
Zoom OutCtrl+- Alt+mouse wheel
stretch with locked aspect ratio  Shift+mouse stretch
manual trace of corner: Alt+click

## [convert png to vector](https://www.youtube.com/watch?v=OZg8rvl0Vwk)
1. `File -> place` png image 
2. scale it down to fit within the page
3. trace :
    1. auto trace:
        1. `Window->image trace`
        2. select logo and preview auto image trace 
        3. in `image trace` panel, click on `trace` button.
        4. `Object->Expand` and click `ok` To convert the tracing object to paths and to manually editing the vector artwork
        5. `Object->Ungroup` one more time
        6. bring the image off the canvas
        6. deselect everything, take the background and press `delete` on the keyboard
        7. bing image back to the page
    2. manual trace:
        1. use pen to trace the image 
        2. `PathFinder->Minus Front` to puntch a hole in the design.



