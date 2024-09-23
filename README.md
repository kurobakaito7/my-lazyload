# ⚛️手写 react-lazyload

当图片进入可视区域才加载的时候，可以用 react-lazyload。

它支持设置 placeholder 占位内容，设置 offset 距离多少距离进入可视区域触发加载。

此外，它也可以用来实现组件进入可视区域时再加载，配合 React.lazy + import() 即可。

它的实现原理就是 IntersectionObserver，我自己实现了一遍，设置 rootMargin 也就是 offset，设置 threshold 为 0 也就是一进入可视区域就触发。

图片、组件的懒加载（进入可视区域再触发加载）是非常常见的需求，不但可以 react-lazyload 实现这种需求，也能够自己实现。