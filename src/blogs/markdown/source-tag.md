---
title: <source>：媒体或图像资源元素的底线
info: HTML的<source>标签的基本使用
tags: ["HTML", "<source>"]
---

# `<source>`：媒体或图像资源元素

无意中发现了一个有意思的元素`<source>`,它可以为`<picture>`.`<audio>`,`<video>`元素指定一个或多个媒体资源。

它是一个空元素，没有内容，也没有关闭标签。可以做到多种文件格式提供相同的媒体内容，以做到浏览器的兼容。以下是一个例子：

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  抱歉，你的浏览器不支持 HTML 视频。
</video>
```

本例演示了如何提供不同格式的视频：WebM 适用于支持 WebM 的浏览器，Ogg 适用于支持 Ogg 的浏览器，QuickTime 适用于支持 QuickTime 的浏览器。如果浏览器不支持 `<audio>` 或 `<video>` 元素，则会显示通知。如果浏览器支持该元素，但不支持任何指定格式，则会引发 `error` 事件，默认媒体控件（如果启用）将显示错误。

## 属性介绍

- type: 指定图像的 MIME 媒体类型或其他媒体类型
- src：当父元素是`<audio>` 或 `<video>`是用它来指定资源的 URL，父元素是`<picture>`则不用该属性，用 srcet。
- srcset：指定由逗号分隔的一个或多个图片 URL 及其描述符的列表。父元素是`<audio>` 或 `<video>`则不用该属性，用 src
- sizes：指定描述图片最终呈现宽度的源尺寸列表。只在父元素是`<picture>`时使用。
- media：媒体查询条件

## 使用说明

`<source>`元素是[**空元素**](https://developer.mozilla.org/zh-CN/docs/Glossary/Void_element)，这意味着它不仅没有内容，也没有结束标记。也就是说，在 HTML 中永远*不会*使用“`</source>`”。

浏览器会通过 `<source>` 元素列表来查找它所支持的格式。浏览器会使用它能显示的第一个格式。对于每个 `<source>` 元素：

- 如果未指定 `type` 属性，浏览器会从服务器检索媒体类型，并确定是否可以显示。如果媒体无法呈现，浏览器会检查列表中的下一个 `<source>`。
- 如果指定了 `type` 属性，浏览器会立即将其与可显示的媒体类型进行比较。如果不支持该类型，浏览器会跳过服务器查询，直接检查下一个 `<source>` 元素。

如果没有一个 `<source>` 元素提供可用的源：

- 如果是 `<picture>` 元素，浏览器将退回到使用 `<picture>` 元素的`img`子元素中指定的图片。
- 如果是 `<audio>` 或 `<video>` 元素，浏览器将恢复显示该元素的开头和结尾标记之间的内容。
