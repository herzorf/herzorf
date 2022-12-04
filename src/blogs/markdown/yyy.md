---
title: Hello from front-matter
info: infoinfoinfoinfoinfo
tags: ["111", "222", "333"]
---

# 笔记------交集观察者------Intersection Observer API

最近写项目需要监听一个元素出现在视口中，然后给一个过渡动画，无意中发现了一个很好用的 API --- Intersection Observer API。之前监听一个元素是否出现在视口中都是去计算一个距离，这个很麻烦。但是这个 API 就很方便的解决了这个问题，可以直接监听。而且使用到的范围也很多，比如：图片懒加载，内容无限滚动，检测广告的曝光情况，在用户看见某个区域时执行任务或播放动画等等等等。
