---
title: Hello from front-matter
info: infoinfoinfoinfoinfo
tags: ["111", "222", "333"]
---

# 笔记------交集观察者------Intersection Observer API

最近写项目需要监听一个元素出现在视口中，然后给一个过渡动画，无意中发现了一个很好用的 API --- Intersection Observer API。之前监听一个元素是否出现在视口中都是去计算一个距离，这个很麻烦。但是这个 API 就很方便的解决了这个问题，可以直接监听。而且使用到的范围也很多，比如：图片懒加载，内容无限滚动，检测广告的曝光情况，在用户看见某个区域时执行任务或播放动画等等等等。

## 概念

我管这个方法的名字叫做：交集观察者。它的工作原理就是每当目标与设备窗口或者其他指定元素发生交集的时候执行。

## 用法

创建一个 intersection observe

```js
const option = {
  root: element,
  rootMargin: "0",
  threshold: 1.0,
};
const callback = function (entry) {
  // entry.boundingClientRect      //返回包含目标元素的边界信息
  // entry.intersectionRatio       //返回intersectionRect 与 boundingClientRect 的比例值。
  // entry.intersectionRect 			 //根和目标元素的相交区域。
  // entry.isIntersecting					 //根元素与目标元素的相交状态，相交为true，不想交为false
  // entry.rootBounds         		 //option中设置的根元素
  // entry.target									 //监听的目标元素
  // entry.time										 //返回一个记录从IntersectionObserver的时间原点到交叉被触发的时间的时间戳
};
const observer = new IntersectionObserver(callback, option);

// 使用observer，用来监听target元素
let target = document.querySelector("#listItem");
observer.observe(target);
```

这个构造函数接受两个参数：

1.callback 是回调函数，在满足条件时执行

2.option 是配置，满足 option 中的条件的时候会执行 callback 回调

3.option.root: 根元素，用于检查目标的可见性，必须是监听元素的根元素，如果未指定或指定为 null 则表示视口(浏览器的默认窗口)

4.option.rootMargin:根元素的外边距，书写方式和 margin 书写方式一样，比如"10px 20px 30px 40px" 意思就是设置上右下左的外边距是 10px 20px 30px 40px。该属性值是用作 root 元素和 target 发生交集时候的计算交集的区域范围，使用该属性可以控制 root 元素每一边的收缩或者扩张。默认值为四个边距全是 0。

5.option.threshold:目标元素与根元素的交集程度，取之范围在 0-1 之间，可以是一个数组，表示交集程度达到数组中的程度时，都执行一次 callback 函数。

6.callback 的参数默认是一个**`IntersectionObserverEntry`**的实例，它里面的属性都是只读的，我已写在了代码中

## 我的用法

```js
const oberveApper = function (element: Element) {
  const observe = new IntersectionObserver(
    function (entry) {
      if (entry[0].isIntersecting) {
        element.classList.add("appear");
      } else {
        element.classList.remove("appear");
      }
    },
    { threshold: 0.1 }
  );
  observe.observe(element);
};
```

我封装了一个简单的函数，当监听的目标元素与浏览器窗口发生交集（程度为 10%）的时候就给目标元素添加一个 appear 的类，当没有交集的时候就移除 appear 这个类。

## 参考资料

[Intersection Observer ApI](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

[IntersectionOberverEntry](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry)
