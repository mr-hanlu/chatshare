# 📦 ChatShare — 优雅的 AI 对话导出神器 (Markdown & 图像)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?height=28)](https://opensource.org/licenses/MIT)  [![Version](https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg?height=28)]()  [![GreasyFork](https://img.shields.io/badge/GreasyFork-install-red.svg?height=28)](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)

ChatShare 是一款高度泛化的浏览器油猴脚本，致力于一键将各大 AI 平台的对话内容提取为 **Markdown 文档** 或 **高保真长图**。

与市面上动辄因为网页 UI 改版而失效的导出工具不同，ChatShare 底层采用了**通用 DOM 结构分析与样式计算引擎**。它不依赖于任何脆弱的网站专属 CSS 类名，这意味着它**几乎免维护**，并且天生支持绝大多数现有及未来的 AI 对话网页。

![ChatShare 演示 gif](./demo/demo.gif)

## ✨ 为什么选择 ChatShare？

*   🎯 **告别全篇导出，支持「精准框选」**
    市面上的工具通常只能傻瓜式地导出整个页面的所有对话。ChatShare 引入了类似开发者工具的「选取模式」，只需鼠标悬停并点击，想导哪段导哪段，彻底告别冗余的废话。
*   🧬 **真正的「泛化」提取算法，无惧 UI 改版**
    没有堆砌毫无生命力的 `querySelector('.chat-message-xxx')`。我们通过节点特征智能猜测对话角色（User/AI），递归内联计算样式（Computed Styles），彻底剥离网页自身的布局束缚。官方再怎么改版，导出依然坚挺。
*   🛡️ **多媒体深度净化 & 防崩溃安全机制**
    网页转图片往往伴随由于跨域（CORS）或音视频 iframe 节点引发的渲染崩溃。本工具底层会自动切断“多媒体炸弹”并重构跨域图片资源。同时内置了**大尺寸长图防御机制**，当排版高度超过 `16000px` 的安全阈值时，会及时预警拦截，保护浏览器免于内存溢出崩溃。
*   🧮 **原生级数学公式与代码块高亮支持**
    深度兼容 KaTeX/MathJax，导出的图像原生保留公式语法。

## 🚀 快速安装

1. 首先需要在你的浏览器上安装[Tampermonkey (油猴扩展)](https://www.tampermonkey.net/)。
2. 点击下方链接一键安装脚本：
   * 👉 **[通过 GreasyFork 安装](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)**
   * 👉 **[通过 GitHub Raw 安装](https://raw.githubusercontent.com/mr-hanlu/chatshare/refs/heads/main/chatshare.user.js)**

## 🛠️ 如何添加新网站支持？

得益于 ChatShare 强大的泛化处理能力，适配一个全新的 AI 对话网站**不需要编写任何额外的适配代码**。

你只需要在油猴扩展中编辑本脚本，在顶部的元数据区域（`==UserScript==`）追加一行 `@match` 规则即可，例如你想支持 `https://chat.new-ai.com`：

```javascript
// ... 原有规则
// @match        https://*.doubao.com/*
// @match        https://qwen.ai/*
// @match        https://chat.new-ai.com/*   <-- 在这里加上这一行即可
// ...
```
## 💡 已知特性与设计理念

为了实现极高的通用性与安全性，我们在底层设计上做了一些取舍：

*   **⏱️ 图像生成速度并非瞬间完成**
    为了保证高保真画质并规避 HTML-to-Image 常见的跨域画布污染（Canvas Taint）问题，脚本在导出前会针对图片进行递归重绘和预处理。因此在导出长对话时，需要短暂的等待时间。
*   **🧩 极少数情况下的 Markdown 排版瑕疵**
    我们的哲学是：**「追求算法的通用泛化」**，而不是为某几个特定网站堆砌无法长期维护的特化代码（Hardcode）。因此，对于某些深度定制化、且使用了非标准语义化标签的网页排版，导出的 Markdown 可能无法 100% 完美复刻（但绝不影响阅读）。

## 🤝 参与贡献

欢迎大家拉取代码，一同打磨这个通用提取引擎！如果你有更好的通用解析思路（不论是样式克隆还是 Markdown 转换逻辑），请随时提交 Issue 或 Pull Request。

核心依赖库致谢：
*   [turndown](https://github.com/mixmark-io/turndown) & [turndown-plugin-gfm](https://github.com/mixmark-io/turndown-plugin-gfm)
*   [html-to-image](https://github.com/bubkoo/html-to-image)

## 📄 开源协议
本项目采用 [MIT License](LICENSE) 开源协议。