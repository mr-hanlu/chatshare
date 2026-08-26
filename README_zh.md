# 📦 ChatShare — AI 对话导出神器 (Markdown & 图像)

[English](README.md) | [简体中文](README_zh.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?height=28)](https://opensource.org/licenses/MIT)  [![Version](https://img.shields.io/badge/Version-v0.2.2-brightgreen.svg?height=28)]()  [![GreasyFork](https://img.shields.io/badge/GreasyFork-一键安装-red.svg?height=28)](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)

ChatShare 是一款高度泛化的浏览器油猴脚本，致力于一键将各大 AI 平台的对话内容提取为 **Markdown 文档** 或 **高保真长图**。

与市面上动辄因为网页 UI 改版而失效的导出工具不同，ChatShare 底层采用了**通用 DOM 结构分析与样式计算引擎**。它不依赖于任何脆弱的网站专属 CSS 类名，这意味着它**几乎免维护**，并且天生支持绝大多数现有及未来的 AI 对话网页。

![ChatShare 演示 gif](./demo/demo.gif)

## 🆕 v0.2.2 更新

*   **角色识别更直观**：选中内容后会直接在页面上显示角色标签，蓝色代表 `User`，绿色代表 `AI`；悬浮面板会同时显示已选总数和角色统计。
*   **支持手动纠正角色**：识别不准确时，按住 `Shift` 再点击已选内容，即可在 `User` 与 `AI` 之间切换。快捷键说明会常驻显示在悬浮面板中，不会额外弹窗打断操作。
*   **修复图片预览兼容性**：图片导出统一使用真实的 PNG 格式和 `.png` 扩展名，改善系统缩略图及图片查看器无法预览的问题。

## ✨ 为什么选择 ChatShare？

*   🎯 **告别全篇导出，支持「精准框选」**
    市面上的工具通常只能傻瓜式地导出整个页面的所有对话。ChatShare 引入了类似开发者工具的「选取模式」，只需鼠标悬停并点击，想导哪段导哪段；选中后会在原页面显示角色标签，方便即时核对。
*   🧬 **真正的「泛化」提取算法，无惧 UI 改版**
    没有堆砌毫无生命力的 `querySelector('.chat-message-xxx')`。角色判断会综合消息语义属性、无障碍标签、测试标识以及多层祖先节点特征，并保留原有启发式规则作为兜底；遇到误判还可通过 `Shift + 点击` 立即纠正。脚本同时递归内联计算样式（Computed Styles），剥离网页自身的布局束缚。
*   🛡️ **多媒体深度净化 & 防崩溃安全机制**
    网页转图片往往伴随由于跨域（CORS）或音视频 iframe 节点引发的渲染崩溃。本工具底层会自动切断“多媒体炸弹”并重构跨域图片资源。同时内置了**大尺寸长图防御机制**，当排版高度超过 `16000px` 的安全阈值时，会及时预警拦截，保护浏览器免于内存溢出崩溃。
*   🧮 **原生级数学公式与代码块高亮支持**
    深度兼容 KaTeX/MathJax，导出的图像原生保留公式语法。

## 🚀 快速安装

1. 首先需要在你的浏览器上安装[Tampermonkey (油猴扩展)](https://www.tampermonkey.net/)。
2. **开启开发者模式**：输入 `chrome://extensions/`（Edge 为 `edge://extensions/`），右上角打开。
3. **配置 Tampermonkey 权限**：插件管理页找到油猴插件 - 详情 - 允许运行用户脚本
4. 点击下方链接一键安装脚本：
   * 👉 **[通过 GreasyFork 安装](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)**
   * 👉 **[通过 GitHub Raw 安装](https://raw.githubusercontent.com/mr-hanlu/chatshare/refs/heads/main/chatshare.user.js)**

## 🧭 使用方法

1. 点击页面右侧的 🤖 悬浮按钮，进入内容选择模式。
2. 悬停并点击需要导出的内容。蓝色标签表示 `User`，绿色标签表示 `AI`。
3. 如果角色识别不准确，按住 `Shift` 再点击该已选内容，即可切换角色。
4. 在悬浮面板中核对已选总数与 `User` / `AI` 数量，然后导出 Markdown 或 PNG 图片。
5. 按 `Esc` 或关闭悬浮面板可退出选择模式并清除当前选择。

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
*   **🧭 角色识别仍可能受页面结构影响**
    脚本会优先使用页面语义属性和祖先结构判断角色，但高度定制的页面仍可能出现误判。此时可使用 `Shift + 点击` 修正，最终导出会采用修正后的角色。
*   **🧩 极少数情况下的 Markdown 排版瑕疵**
    我们的哲学是：**「追求算法的通用泛化」**，而不是为某几个特定网站堆砌无法长期维护的特化代码（Hardcode）。因此，对于某些深度定制化、且使用了非标准语义化标签的网页排版，导出的 Markdown 可能无法 100% 完美复刻（但绝不影响阅读）。

## 🤝 参与贡献

欢迎大家拉取代码，一同打磨这个通用提取引擎！如果你有更好的通用解析思路（不论是样式克隆还是 Markdown 转换逻辑），请随时提交 Issue 或 Pull Request。

核心依赖库致谢：
*   [turndown](https://github.com/mixmark-io/turndown) & [turndown-plugin-gfm](https://github.com/mixmark-io/turndown-plugin-gfm)
*   [html-to-image](https://github.com/bubkoo/html-to-image)

## 📄 开源协议
本项目采用 [MIT License](LICENSE) 开源协议。
