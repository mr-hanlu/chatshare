# 📦 ChatShare — The Ultimate AI Chat Exporter (Markdown & Image)

[English](README.md) | [简体中文](README_zh.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?height=28)](https://opensource.org/licenses/MIT)  [![Version](https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg?height=28)]()  [![GreasyFork](https://img.shields.io/badge/GreasyFork-install-red.svg?height=28)](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)

ChatShare is a highly generalized Tampermonkey script designed to export conversations from major AI platforms into **Markdown documents** or **High-Fidelity Long Images** with a single click.

Unlike other export tools that constantly break due to website UI updates, ChatShare is powered by a **generalized DOM structure analysis and style calculation engine**. It does not rely on fragile, website-specific CSS classes, making it **nearly maintenance-free** and naturally compatible with most current and future AI chat websites.

![ChatShare Demo GIF](./demo/demo.gif)

## ✨ Why Choose ChatShare?

*   🎯 **Say Goodbye to Full-Page Exports, Support "Precise Selection"**
    Most tools out there blindly export the entire page. ChatShare introduces a DevTools-like "Selection Mode". Just hover and click to select exactly the message blocks you want. No more redundant fluff.
*   🧬 **Truly "Generalized" Algorithm, Immune to UI Updates**
    We don't stack lifeless `querySelector('.chat-message-xxx')` codes. By intelligently guessing the chat role (User/AI) based on node characteristics and recursively computing inline styles, we strip away the site's layout constraints. No matter how the official site updates, the export remains robust.
*   🛡️ **Multimedia Deep Cleanup & Crash Prevention**
    Web-to-image conversions often crash due to cross-origin (CORS) issues or iframe nodes. ChatShare automatically neutralizes "multimedia bombs" and reconstructs cross-origin image resources. It also features a **large-size image defense mechanism**, intercepting and warning when the layout height exceeds the `16000px` safety threshold to protect your browser from memory overflow.
*   🧮 **Native Math Formulas & Code Highlighting Support**
    Deeply compatible with KaTeX/MathJax, retaining native formula syntax and styles in exported results.

## 🚀 Quick Installation

1. First, install the [Tampermonkey](https://www.tampermonkey.net/) extension in your browser.
2. **Enable Developer Mode**: Go to `chrome://extensions/` (or `edge://extensions/` for Edge) and toggle "Developer mode" on in the top right corner.
3. **Configure Tampermonkey Permissions**: On the extension management page, find Tampermonkey -> Details -> enable "Allow access to file URLs" (if applicable) and ensure script execution is allowed.
4. Click the links below for 1-click installation:
   * 👉 **[Install via GreasyFork](https://greasyfork.org/zh-CN/scripts/572918-chatshare-ai-%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8)**
   * 👉 **[Install via GitHub Raw](https://raw.githubusercontent.com/mr-hanlu/chatshare/refs/heads/main/chatshare.user.js)**

## 🛠️ How to Add Support for New Sites?

Thanks to ChatShare's powerful generalization capabilities, adapting a brand-new AI chat website requires **zero additional adapter code**.

Simply edit the script in Tampermonkey and append a `@match` rule in the metadata block (`==UserScript==`) at the top. For example, to support `https://chat.new-ai.com`:

```javascript
// ... existing rules
// @match        https://*.doubao.com/*
// @match        https://qwen.ai/*
// @match        https://chat.new-ai.com/*   <-- Just add this line here
// ...
```

## 💡 Known Limitations & Design Philosophy

To achieve extreme generalization and security, we made some trade-offs in our underlying design:

*   **⏱️ Image Generation is Not Instant**
    To ensure high fidelity and avoid the common HTML-to-Image Canvas Taint issues, the script recursively redraws and preprocesses images before exporting. Thus, exporting long conversations requires a brief waiting period.
*   **🧩 Minor Markdown Formatting Imperfections on Rare Occasions**
    Our philosophy is **"pursue algorithmic generalization"** rather than piling up unmaintainable hardcoded logic for specific sites. Therefore, for some deeply customized web layouts using non-standard semantic tags, the exported Markdown might not perfectly replicate the original (though it will never affect readability).

## 🤝 Contributing

Feel free to fork the repository and help polish this universal extraction engine! If you have better ideas for generalized parsing (whether for style cloning or Markdown conversion logic), please submit an Issue or a Pull Request.

Acknowledgements to core dependencies:
*   [turndown](https://github.com/mixmark-io/turndown) & [turndown-plugin-gfm](https://github.com/mixmark-io/turndown-plugin-gfm)
*   [html-to-image](https://github.com/bubkoo/html-to-image)

## 📄 License
This project is licensed under the [MIT License](LICENSE).
