// ==UserScript==
// @name         ChatShare - AI 对话下载器
// @namespace    https://github.com/mr-hanlu/chatshare
// @version      0.1.0
// @description  支持几乎所有的ai对话网页的 Markdown 导出 + 图像导出。需要支持新网址，在@match中自行追加使用。
// @author       hanlu
// @license      MIT
// @icon         data:image/png;base64,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
// @match        https://aistudio.google.com/*
// @match        https://gemini.google.com/*
// @match        https://notebooklm.google.com/*
// @match        https://claude.ai/*
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @match        https://x.com/i/grok*
// @match        https://grok.com/*
// @match        https://*.grok.com/*
// @match        https://*.doubao.com/*
// @match        https://qwen.ai/*
// @match        https://chat.qwen.ai/*
// @match        https://www.qianwen.com/*
// @match        https://bailian.console.aliyun.com/*
// @match        https://www.kimi.com/*
// @match        https://chat.deepseek.com/*
// @match        https://hunyuan.tencent.com/*
// @match        https://yuanbao.tencent.com/*
// @match        https://chat.z.ai/*
// @match        https://chatglm.cn/*
// @match        https://aistudio.xiaomimimo.com/*
// @match        https://openrouter.ai/*
// @match        https://poe.com/*
// @require      https://cdn.jsdelivr.net/npm/turndown@7.1.3/dist/turndown.js
// @require      https://cdn.jsdelivr.net/npm/turndown-plugin-gfm@1.0.2/dist/turndown-plugin-gfm.js
// @require      https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.min.js
// @resource     katexCSS https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css
// @grant        GM_getResourceText
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    if (window.self !== window.top) return;
    if (document.getElementById('chatshare-extractor-host')) return;

    let isSelectMode = false;
    let selectedElements = new Set();
    let currentHoverElement = null;
    let isPanelOpen = false;
    let isDragging = false, hasDragged = false;
    let startX, startY, initLeft, initTop;
    let isProcessing = false;
    let hasWarnedLongImage = false;

    // ================= UI 构建与守护 =================
    const host = document.createElement('div');
    host.id = 'chatshare-extractor-host';
    host.style.cssText = `position:fixed;z-index:2147483647;top:30%;left:auto;right:10px;transition:left .35s cubic-bezier(.22,1,.36,1),right .35s cubic-bezier(.22,1,.36,1);`;
    const shadow = host.attachShadow({ mode: 'open' });

    function mountHost() {
        if (!document.documentElement.contains(host)) document.documentElement.appendChild(host);
    }
    mountHost();
    const spaGuardObserver = new MutationObserver(mountHost);
    spaGuardObserver.observe(document.documentElement, { childList: true, subtree: false });

    const style = document.createElement('style');
    style.textContent = `
        :host{all:initial}
        .fab{width:40px;height:40px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:20px;cursor:pointer;background:rgba(255,255,255,.9);backdrop-filter:blur(10px);border:1px solid rgba(0,0,0,.06);box-shadow:0 4px 16px rgba(0,0,0,.15);transition:all .2s ease;position:relative;animation:float 3s ease-in-out infinite}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
        .fab:hover{transform:scale(1.08);box-shadow:0 8px 24px rgba(0,0,0,.2)}
        .panel{position:absolute;top:0;width:260px;border-radius:14px;overflow:hidden;background:rgba(255,255,255,.96);backdrop-filter:blur(16px);border:1px solid rgba(0,0,0,.08);box-shadow:0 12px 40px rgba(0,0,0,.25);display:flex;flex-direction:column;font-family:system-ui,-apple-system,sans-serif;user-select:none;visibility:hidden;pointer-events:none;transform:scale(.92);opacity:0;transition:all .25s ease}
        .panel.show{visibility:visible;pointer-events:auto;transform:scale(1);opacity:1}
        .panel.left{left:48px}.panel.right{right:48px}
        .header{padding:12px 14px;font-size:13px;font-weight:600;background:#f9fafb;cursor:grab;display:flex;justify-content:space-between;align-items:center;color:#374151;border-bottom:1px solid rgba(0,0,0,.05)}
        .close-btn{cursor:pointer;color:#9ca3af;font-size:18px;padding:2px;border-radius:4px}.close-btn:hover{color:#ef4444;background:rgba(0,0,0,.05)}
        .body{padding:12px;display:flex;flex-direction:column;gap:8px}
        .stats{font-size:12px;color:#6b7280;text-align:center;margin:2px 0;padding-bottom:4px;border-bottom:1px dashed #e5e7eb}
        .stats span{color:#3b82f6;font-weight:700;font-size:14px}
        button{border:none;padding:10px;border-radius:8px;font-weight:600;cursor:pointer;transition:all .15s;font-size:13px}
        button:active{transform:scale(.98)}button:disabled{opacity:.5;cursor:not-allowed;transform:none}
        .btn-md{background:#10b981;color:#fff}.btn-md:hover{background:#059669}
        .btn-img{background:#f59e0b;color:#fff}.btn-img:hover{background:#d97706}
        .btn-md,.btn-img{display:none}

        .sc-toast { position: fixed; top: 20px; left: 50%; transform: translate(-50%, -20px); background: rgba(17,24,39,.95); color: #fff; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-family: system-ui, sans-serif; font-weight: 500; opacity: 0; pointer-events: none; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); z-index: 2147483647; box-shadow: 0 8px 24px rgba(0,0,0,.15); display: flex; align-items: center; gap: 8px; white-space: nowrap; }
        .sc-toast.show { transform: translate(-50%, 0); opacity: 1; }
        .sc-toast.error { background: #ef4444; }
        .sc-toast.warn { background: #f59e0b; }
        .sc-toast.info { background: #3b82f6; }
    `;
    shadow.appendChild(style);

    const fab = document.createElement('div'); fab.className = 'fab right'; fab.textContent = '🤖';
    const panel = document.createElement('div'); panel.className = 'panel';
    const header = document.createElement('div'); header.className = 'header'; header.id = 'drag-handle';
    const titleSpan = document.createElement('span'); titleSpan.textContent = '📦 对话提取器';
    const btnClose = document.createElement('span'); btnClose.className = 'close-btn'; btnClose.textContent = '×';
    header.append(titleSpan, btnClose);
    const body = document.createElement('div'); body.className = 'body';
    const statsContainer = document.createElement('div'); statsContainer.className = 'stats';
    statsContainer.append(document.createTextNode('已选中 '));
    const countSpan = document.createElement('span'); countSpan.textContent = '0';
    statsContainer.append(countSpan, document.createTextNode(' 段'));
    const btnMd = document.createElement('button'); btnMd.className = 'btn-md'; btnMd.textContent = '📄 导出 Markdown';
    const btnImg = document.createElement('button'); btnImg.className = 'btn-img'; btnImg.textContent = '🖼️ 导出图像';

    body.append(statsContainer, btnMd, btnImg);
    panel.append(header, body);

    const toastEl = document.createElement('div'); toastEl.className = 'sc-toast';
    shadow.appendChild(toastEl);
    shadow.appendChild(fab); shadow.appendChild(panel);

    const dragHandle = header;

    // ================= 全局 UI Toast 系统 =================
    let toastTimer = null;
    function showToast(msg, type = 'info') {
        toastEl.textContent = msg; toastEl.className = `sc-toast show ${type}`;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { toastEl.classList.remove('show'); }, 3500);
    }

    // ================= 拖拽及面板控制 =================
    function attachDrag(t) {
        t.addEventListener('mousedown', e => {
            if (e.button !== 0 || isProcessing) return;
            isDragging = true; hasDragged = false;
            startX = e.clientX; startY = e.clientY;
            const r = host.getBoundingClientRect(); initLeft = r.left; initTop = r.top;
            host.style.transition = 'none';
            host.style.left = r.left + 'px'; host.style.right = 'auto'; e.preventDefault();
        });
    }
    attachDrag(fab); attachDrag(dragHandle);

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        if (Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5) {
            hasDragged = true; host.style.left = (initLeft + e.clientX - startX) + 'px'; host.style.top = (initTop + e.clientY - startY) + 'px';
        }
    });
    window.addEventListener('mouseup', () => { if (isDragging) { isDragging = false; snapToEdge(); } });

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (!isDragging && host.getBoundingClientRect) {
                snapToEdge();
                if (isPanelOpen) adjustPanelPosition();
            }
        }, 150);
    });

    function snapToEdge() {
        host.style.transition = '';
        const r = host.getBoundingClientRect();
        if (r.left + r.width / 2 < window.innerWidth / 2) { host.style.left = '10px'; fab.classList.replace('right', 'left'); }
        else { host.style.left = (window.innerWidth - 48) + 'px'; fab.classList.replace('left', 'right'); }
    }
    function adjustPanelPosition() {
        const r = host.getBoundingClientRect();
        panel.classList.remove('left', 'right'); panel.classList.add(window.innerWidth - r.right < 270 ? 'right' : 'left');
    }

    fab.addEventListener('click', () => {
        if (hasDragged || isProcessing) return;
        isPanelOpen = !isPanelOpen;
        if (isPanelOpen) { adjustPanelPosition(); panel.classList.add('show'); fab.style.transform = 'scale(.85)'; enterSelectMode(); }
        else closePanelAndExit();
    });
    btnClose.addEventListener('click', () => { if (!isProcessing) closePanelAndExit(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isPanelOpen && !isProcessing) closePanelAndExit(); });
    function closePanelAndExit() { isPanelOpen = false; panel.classList.remove('show'); fab.style.transform = ''; exitSelectMode(); }

    // ================= 选取模式 =================
    function applyHighlight(el) { if (el && el.style) { el.style.backgroundColor = 'rgba(16, 185, 129, 0.1)'; el.style.boxShadow = 'inset 0 0 0 2px #10b981'; el.style.outline = 'none'; el.setAttribute('data-sc-selected', 'true'); } }
    function removeHighlight(el) { if (el && el.style) { el.style.removeProperty('background-color'); el.style.removeProperty('box-shadow'); el.style.removeProperty('outline'); el.removeAttribute('data-sc-selected'); } }
    function applyHover(el) { if (el && el.style && el.getAttribute('data-sc-selected') !== 'true') el.style.outline = '2px dashed #3b82f6'; }
    function removeHover(el) { if (el && el.style && el.getAttribute('data-sc-selected') !== 'true') el.style.removeProperty('outline'); }
    function forceClearAll() {
        if (currentHoverElement) { removeHover(currentHoverElement); currentHoverElement = null; }
        selectedElements.forEach(el => removeHighlight(el)); selectedElements.clear(); countSpan.textContent = '0';
        hasWarnedLongImage = false;
    }

    function enterSelectMode() {
        isSelectMode = true; document.addEventListener('mouseover', onMouseOver, true); document.addEventListener('mouseout', onMouseOut, true); document.addEventListener('click', onDocClick, true);
        statsContainer.style.display = 'block'; btnMd.style.display = 'block'; btnImg.style.display = 'block';
    }
    function exitSelectMode() {
        isSelectMode = false; document.removeEventListener('mouseover', onMouseOver, true); document.removeEventListener('mouseout', onMouseOut, true); document.removeEventListener('click', onDocClick, true);
        statsContainer.style.display = 'none'; btnMd.style.display = 'none'; btnImg.style.display = 'none'; forceClearAll();
    }

    function onMouseOver(e) {
        if (isProcessing) return;
        if (e.composedPath().includes(host)) return; const el = e.target.closest('div, article, li, p, section') || e.target;
        if (currentHoverElement === el) return; removeHover(currentHoverElement); currentHoverElement = el; applyHover(el);
    }
    function onMouseOut(e) {
        if (isProcessing) return;
        if (e.composedPath().includes(host)) return; removeHover(currentHoverElement); currentHoverElement = null;
    }

    function calcTotalEstimatedHeight() {
        let total = 0; selectedElements.forEach(s => { total += (s.offsetHeight || 0) + 70; }); return total;
    }

    function onDocClick(e) {
        if (isProcessing) { e.preventDefault(); e.stopPropagation(); return; }
        if (!e.isTrusted || e.composedPath().includes(host)) return;

        if (e.target.closest('a, button, [role="button"], input, textarea, select')) return;

        e.preventDefault(); e.stopPropagation();
        const el = currentHoverElement || e.target.closest('div, article, li, p, section') || e.target; if (!el) return;

        const isSelected = el.getAttribute('data-sc-selected') === 'true';

        if (isSelected) {
            removeHighlight(el); selectedElements.delete(el); if (currentHoverElement === el) applyHover(el);
        } else {
            const toRemove = []; selectedElements.forEach(s => { if (s.contains(el) || el.contains(s)) toRemove.push(s); });
            toRemove.forEach(s => { removeHighlight(s); selectedElements.delete(s); });
            applyHighlight(el); selectedElements.add(el); if (currentHoverElement === el) removeHover(el);

            const th = calcTotalEstimatedHeight();
            if (th > 16000 && !hasWarnedLongImage) {
                showToast('📏 已超出长图安全极限，将无法导出图像，但可无限导出 Markdown！', 'warn'); hasWarnedLongImage = true;
            }
        }
        countSpan.textContent = selectedElements.size;
    }

    // ================= 基础工具 =================
    const STYLE_WHITELIST = ['color', 'backgroundColor', 'borderColor', 'outlineColor', 'fill', 'stroke', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing', 'textDecoration', 'textAlign', 'whiteSpace', 'display', 'width', 'maxWidth', 'minWidth', 'overflow', 'overflowX', 'overflowY', 'boxSizing', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink', 'flexBasis', 'alignItems', 'alignSelf', 'justifyContent', 'gap', 'gridTemplateColumns', 'gridTemplateRows', 'gridColumn', 'gridRow', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'borderRadius', 'opacity', 'verticalAlign'];

    function guessRole(el) {
        const r = (el.dataset.messageAuthorRole || el.dataset.role || el.dataset.sender || '').toLowerCase();
        if (r.includes('user')) return 'user'; if (r.includes('assistant') || r.includes('ai')) return 'ai';
        const html = el.innerHTML.toLowerCase(); if (html.includes('author-role="user"')) return 'user'; if (html.includes('author-role="assistant"')) return 'ai';
        return (el.querySelectorAll('pre,code,table,.katex').length > 0 || el.innerText.trim().length > 150) ? 'ai' : 'user';
    }

    function getSortedElements() { return Array.from(selectedElements).sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1); }

    function isMathNode(n) {
        if (!n || n.nodeType !== Node.ELEMENT_NODE) return false;
        if (n.tagName.toUpperCase() === 'MATH' || n.ownerSVGElement) return true;
        const c = typeof n.className === 'string' ? n.className : '';
        return c.includes('katex') || c.includes('MathJax') || !!n.closest('.katex, .MathJax');
    }

    // ================= 💎 Markdown 专属深度外科手术 =================

    function purifyCodeBlocksForMD(node) {
        const pres = Array.from(node.querySelectorAll('pre'));
        pres.forEach(pre => {
            let codeText = '';
            const table = pre.querySelector('table.hljs-ln, table.linenumber');
            if (table) {
                const codeTds = table.querySelectorAll('td.hljs-ln-code, td.code');
                codeText = Array.from(codeTds).map(td => td.textContent).join('\n');
            } else {
                const codeEl = pre.querySelector('code');
                codeText = (codeEl || pre).textContent;
            }

            let lang = '';
            const codeEl = pre.querySelector('code');
            if (codeEl && codeEl.className) {
                const match = codeEl.className.match(/language-(\w+)/i);
                if (match) lang = match[1];
            }

            let widget = pre;
            let current = pre.parentElement;
            while (current && current !== node && current.tagName === 'DIV') {
                if (current.querySelectorAll('pre').length > 1) break;
                const extraTextLength = current.textContent.length - pre.textContent.length;
                if (extraTextLength < 150) {
                    widget = current;
                    if (!lang) {
                        const langMatch = current.textContent.match(/(python|javascript|js|html|css|bash|shell|json|markdown|md|java|cpp|c|go|rust|ruby|php|sql|yaml|xml|typescript|ts)\b/i);
                        if (langMatch) lang = langMatch[1].toLowerCase();
                    }
                    current = current.parentElement;
                } else {
                    break;
                }
            }

            const cleanPre = document.createElement('pre');
            const cleanCode = document.createElement('code');
            if (lang) cleanCode.className = `language-${lang}`;
            cleanCode.textContent = codeText;
            cleanPre.appendChild(cleanCode);

            try { widget.parentElement.replaceChild(cleanPre, widget); } catch (e) { }
        });
    }

    function purifyMathForMD(node) {
        const replaceWithMath = (target, tex, isBlock) => {
            const span = document.createElement('span');
            span.className = 'chatshare-math';
            span.textContent = isBlock ? `\n$$ ${tex} $$\n` : `$${tex}$`;
            try { target.parentElement.replaceChild(span, target); } catch (e) { }
        };

        node.querySelectorAll('.katex').forEach(k => {
            const annotation = k.querySelector('annotation[encoding="application/x-tex"]');
            if (annotation) {
                const isBlock = k.parentElement?.classList.contains('katex-display');
                replaceWithMath(isBlock ? k.parentElement : k, annotation.textContent, isBlock);
            }
        });

        node.querySelectorAll('mjx-container').forEach(m => {
            const mathElement = m.querySelector('math');
            let tex = mathElement ? mathElement.getAttribute('alttext') : '';
            if (!tex) {
                const script = m.nextElementSibling;
                if (script && script.tagName === 'SCRIPT' && script.type.includes('math/tex')) tex = script.textContent;
            }
            if (tex) replaceWithMath(m, tex, m.getAttribute('display') === 'block');
        });
    }

    function purifyHeadingsForMD(node) {
        const els = Array.from(node.querySelectorAll('div, p, span'));
        els.forEach(el => {
            if (!node.contains(el)) return;
            if (el.closest('h1, h2, h3, h4, h5, h6, strong, b')) return;
            if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'STRONG', 'B', 'PRE', 'CODE', 'TH', 'TD', 'LI'].includes(el.tagName)) return;

            const fw = el.style.fontWeight;
            const fz = el.style.fontSize;
            const isBold = fw === 'bold' || fw === '700' || fw === '800' || fw === '900' || parseInt(fw, 10) >= 600;

            if (isBold) {
                const text = el.textContent.trim();
                if (text.length > 0 && text.length < 150 && el.children.length <= 2) {
                    let isHeader = false;
                    if (fz && fz.endsWith('px') && parseFloat(fz) >= 18) isHeader = true;
                    else if (fz && (fz.endsWith('em') || fz.endsWith('rem')) && parseFloat(fz) >= 1.2) isHeader = true;

                    if (isHeader) {
                        const h = document.createElement('h3');
                        while (el.firstChild) { h.appendChild(el.firstChild); }
                        try { el.parentElement.replaceChild(h, el); } catch (e) { }
                    } else {
                        if (el.tagName === 'DIV' || el.tagName === 'P') {
                            if (!el.querySelector('strong')) {
                                const strong = document.createElement('strong');
                                while (el.firstChild) { strong.appendChild(el.firstChild); }
                                el.appendChild(strong);
                            }
                        } else if (el.tagName === 'SPAN') {
                            const strong = document.createElement('strong');
                            while (el.firstChild) { strong.appendChild(el.firstChild); }
                            try { el.parentElement.replaceChild(strong, el); } catch (e) { }
                        }
                    }
                }
            }
        });
    }

    // ================= Markdown 核心导出引擎 =================
    btnMd.addEventListener('click', () => {
        if (selectedElements.size === 0) {
            showToast('⚠️ 请先选择内容！', 'warn'); return;
        }

        const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
        if (typeof turndownPluginGfm !== 'undefined') td.use(turndownPluginGfm.gfm);

        td.addRule('math', {
            filter: function (node) { return node.nodeName === 'SPAN' && node.className === 'chatshare-math'; },
            replacement: function (content, node) { return node.textContent; }
        });

        td.addRule('hr', {
            filter: 'hr',
            replacement: function () { return '\n\n---\n\n'; }
        });

        let md = '';
        getSortedElements().forEach(el => {
            const role = guessRole(el);

            const dummyParent = document.createElement('div');
            const clone = el.cloneNode(true);

            inlineComputedStylesIterative(el, clone);
            dummyParent.appendChild(clone);

            purifyCodeBlocksForMD(dummyParent);
            purifyMathForMD(dummyParent);
            purifyHeadingsForMD(dummyParent);

            dummyParent.querySelectorAll('button,[role="button"],script,style,.action-btn,.copy-btn,svg').forEach(n => n.remove());

            let block = td.turndown(dummyParent);
            md += role === 'user' ? `### 👤 User\n\n> ${block.replace(/\n/g, '\n> ')}\n\n---\n\n` : `### 🤖 AI\n\n${block}\n\n---\n\n`;
        });

        downloadFile(md, 'md', 'text/markdown;charset=utf-8');
        showToast('✅ Markdown 导出成功！', 'info');
        closePanelAndExit();
    });

    // ================= 图像导出引擎逻辑 =================
    function inlineComputedStylesIterative(origRoot, cloneRoot) {
        const stack = [{ orig: origRoot, clone: cloneRoot }];
        while (stack.length > 0) {
            const { orig, clone } = stack.pop();
            if (clone.nodeType === Node.ELEMENT_NODE) {
                const tag = clone.tagName.toUpperCase();
                if (tag === 'BUTTON' || tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' ||
                    clone.classList.contains('copy-btn') || clone.classList.contains('action-btn')) {
                    clone.remove(); continue;
                }
                if (tag === 'IMG') { clone.dataset.origW = orig.clientWidth || 0; clone.dataset.origH = orig.clientHeight || 0; }
            }
            if (orig.nodeType === Node.ELEMENT_NODE && clone.nodeType === Node.ELEMENT_NODE && !isMathNode(orig)) {
                const comp = window.getComputedStyle(orig);
                if (comp) {
                    if (comp.display === 'none') { clone.style.display = 'none'; continue; }
                    for (const p of STYLE_WHITELIST) {
                        let v = comp[p];
                        if (!v || (p === 'width' && (v === 'auto' || v.endsWith('%')))) continue;
                        clone.style[p] = v;
                    }
                }
            }
            if (orig.nodeType === Node.ELEMENT_NODE && orig.tagName.toUpperCase() === 'SVG') continue;

            if (orig.nodeType === Node.ELEMENT_NODE && !isMathNode(orig)) {
                const minLen = Math.min(orig.childNodes.length, clone.childNodes.length);
                for (let i = 0; i < minLen; i++) stack.push({ orig: orig.childNodes[i], clone: clone.childNodes[i] });
            }
        }
    }

    function stripExternalAttrs(root) {
        const walk = (n) => {
            if (n.nodeType !== Node.ELEMENT_NODE || isMathNode(n)) return;
            if (n.tagName.toUpperCase() === 'SVG' && !n.getAttribute('xmlns')) {
                n.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            }
            n.removeAttribute('class'); n.removeAttribute('id');
            for (let c of n.childNodes) walk(c);
        }; walk(root);
    }

    function resetLayout(root) {
        const allNodes = [root, ...root.querySelectorAll('*')];
        allNodes.forEach(el => {
            if (el.tagName === 'IMG' || el.ownerSVGElement || isMathNode(el)) return;

            el.style.overflow = 'visible';
            el.style.maxHeight = 'none';
            el.style.height = 'auto';

            if (['fixed', 'sticky', 'absolute'].includes(el.style.position)) {
                el.style.position = 'relative'; el.style.top = el.style.left = el.style.bottom = el.style.right = el.style.zIndex = '';
            }
        });
    }

    // 🟢 核心防御1：提前铲除多媒体炸弹和 HTTP 不安全图片
    function sanitizeDOMForImage(root) {
        // 彻底移除会导致 htmlToImage 崩溃的多媒体标签
        root.querySelectorAll('iframe, video, audio, object, embed').forEach(el => el.remove());

        // 如果在安全环境(HTTPS)下，强行干掉一切 HTTP 的图片引用，用透明占位代替
        if (location.protocol === 'https:') {
            const blankBase64 = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

            // 处理标签属性
            root.querySelectorAll('[src],[href],[poster],[data-src]').forEach(el => {
                ['src', 'href', 'poster', 'data-src'].forEach(attr => {
                    const v = el.getAttribute(attr);
                    if (v && v.startsWith('http://')) {
                        el.setAttribute(attr, blankBase64);
                    }
                });
            });

            // 处理 CSS 背景图
            root.querySelectorAll('*').forEach(el => {
                if (el.style && el.style.backgroundImage && el.style.backgroundImage.includes('http://')) {
                    el.style.backgroundImage = 'none';
                }
            });
        }
    }

    function fixRelativeUrls(root) {
        const base = location.origin + location.pathname;
        root.querySelectorAll('[src],[href],[poster],[data-src]').forEach(el => {
            ['src', 'href', 'poster', 'xlink:href', 'data-src'].forEach(attr => {
                const v = el.getAttribute(attr); if (v && !v.startsWith('data:') && !v.match(/^https?:\/\//)) { try { el.setAttribute(attr, new URL(v, base).href); } catch { } }
            });
        });
    }

    async function preProcessImages(root) {
        const imgs = Array.from(root.querySelectorAll('img'));
        const promises = imgs.map(async (img) => {
            const src = img.getAttribute('src') || img.getAttribute('data-src');
            if (!src || src.startsWith('data:')) return;
            return new Promise((resolve) => {
                const imgObj = new Image(); imgObj.crossOrigin = 'anonymous';
                const timerId = setTimeout(() => resolve(), 3000);

                imgObj.onload = () => {
                    clearTimeout(timerId);
                    let w = parseInt(img.dataset.origW) || imgObj.naturalWidth; let h = parseInt(img.dataset.origH) || imgObj.naturalHeight;
                    if (w === 0) w = imgObj.naturalWidth; if (h === 0) h = imgObj.naturalHeight;
                    const MAX_DIM = 800;
                    if (w > MAX_DIM || h > MAX_DIM) {
                        const ratio = Math.min(MAX_DIM / w, MAX_DIM / h); w = Math.round(w * ratio); h = Math.round(h * ratio);
                    }
                    if (w <= 0 || h <= 0) return resolve();
                    const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h;
                    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h); ctx.drawImage(imgObj, 0, 0, w, h);
                    try { img.src = canvas.toDataURL('image/jpeg', 0.85); img.removeAttribute('srcset'); } catch (e) { }
                    resolve();
                };
                imgObj.onerror = () => {
                    clearTimeout(timerId);
                    // 出错时立刻使用空白图，避免污染
                    try { img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; } catch (e) { }
                    resolve();
                };
                imgObj.src = !src.startsWith('http') ? new URL(src, location.origin).href : src;
            });
        });
        await Promise.all(promises);
    }

    btnImg.addEventListener('click', async () => {
        if (selectedElements.size === 0) { showToast('⚠️ 请先选择内容！', 'warn'); return; }
        if (typeof window.htmlToImage === 'undefined') { showToast('❌ 渲染库加载失败，请检查网络。', 'error'); return; }

        const estHeight = calcTotalEstimatedHeight();
        if (estHeight > 20000) { showToast('❌ 当前内容过长，超出图像生成极限。请减少选中段落，或直接使用 Markdown 导出！', 'error'); return; }

        if (isProcessing) return;
        isProcessing = true;

        if (currentHoverElement) { removeHover(currentHoverElement); currentHoverElement = null; }

        btnImg.disabled = true; btnImg.textContent = '⏳ 准备中...';

        try {
            const blobData = await renderToCanvas();
            if (blobData) { downloadFile(blobData, 'jpg', 'image/jpeg'); showToast('✅ 图像已成功保存！', 'info'); }
        } catch (e) {
            console.error('[ChatShare Error]:', e);
            // 🟢 核心防御3：如果依然有错，捕获真实的错误信息而不只是 undefined
            const msg = (e && e.message) ? e.message : (typeof e === 'string' ? e : '资源跨域拦截或被污染，建议仅导出 Markdown');
            showToast(`❌ 生成失败：${msg}`, 'error');
        } finally { isProcessing = false; btnImg.disabled = false; btnImg.textContent = '🖼️ 导出图像'; closePanelAndExit(); }
    });

    async function renderToCanvas() {
        const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches;
        const bg = isDark ? '#111827' : '#f3f4f6'; const cardBg = isDark ? '#1f2937' : '#ffffff';
        const border = isDark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)'; const text = isDark ? '#e5e7eb' : '#111827';

        await loadCSS();

        const outerWrapper = document.createElement('div');
        outerWrapper.className = 'sc-export-wrapper';
        outerWrapper.style.cssText = `position: fixed; left: -99999px; top: 0; display: inline-block; flex-direction: column;`;

        const wrapper = document.createElement('div');
        wrapper.style.cssText = `padding: 40px; background: ${bg}; font-family: system-ui, -apple-system, sans-serif; color: ${text}; line-height: 1.6; overflow: visible; box-sizing: border-box; display: inline-block; min-width: 850px;`;
        outerWrapper.appendChild(wrapper);

        const card = document.createElement('div');
        card.style.cssText = `background: ${cardBg}; border-radius: 16px; border: 1px solid ${border}; box-shadow: 0 8px 30px rgba(0,0,0,.12); box-sizing: border-box; width: 100%;`;
        wrapper.appendChild(card);

        const fragment = document.createDocumentFragment();
        const sortedEls = getSortedElements();

        for (let i = 0; i < sortedEls.length; i++) {
            const el = sortedEls[i]; const role = guessRole(el); const clone = el.cloneNode(true);
            stripExternalAttrs(clone);
            inlineComputedStylesIterative(el, clone);
            resetLayout(clone);
            fixRelativeUrls(clone);
            sanitizeDOMForImage(clone); // 🟢 介入：洗劫引发崩溃的多媒体和 HTTP 图片节点

            clone.style.removeProperty('background-color'); clone.style.removeProperty('box-shadow'); clone.style.removeProperty('outline');
            const wrap = document.createElement('div');
            wrap.style.cssText = `box-sizing: border-box; padding: 24px 30px; ${i < sortedEls.length - 1 ? `border-bottom: 1px solid ${border}` : ''}; overflow: visible;`;
            const head = document.createElement('div');
            head.style.cssText = `font-weight: 600; margin-bottom: 10px; font-size: 14px; color: ${role === 'user' ? '#3b82f6' : '#10b981'};`;
            head.textContent = role === 'user' ? '👤 User' : '🤖 AI';
            wrap.append(head, clone); fragment.appendChild(wrap);

            if ((i + 1) % 5 === 0 || i === sortedEls.length - 1) {
                btnImg.textContent = `⏳ 处理节点 ${i + 1}/${sortedEls.length}...`; await new Promise(r => setTimeout(r, 0));
            }
        }
        card.appendChild(fragment);

        btnImg.textContent = `⏳ 压缩图像资源...`; await preProcessImages(card);
        btnImg.textContent = `⏳ 计算排版边界...`; document.body.appendChild(outerWrapper);

        await document.fonts.ready; wrapper.offsetHeight; await new Promise(r => requestAnimationFrame(r));
        let realCardW = card.scrollWidth; const MIN_CARD_W = 770; if (realCardW < MIN_CARD_W) realCardW = MIN_CARD_W;
        const finalWidth = realCardW + 80; const finalHeight = wrapper.scrollHeight;
        outerWrapper.style.width = finalWidth + 'px'; wrapper.style.width = finalWidth + 'px'; card.style.width = realCardW + 'px';
        await new Promise(r => requestAnimationFrame(r));

        btnImg.textContent = `⏳ 极速生成图层...`;
        let pr = 1.5;
        if (finalHeight * 1.5 <= 16000) pr = 1.5; else if (finalHeight * 1.25 <= 16000) pr = 1.25; else if (finalHeight * 1.0 <= 16000) pr = 1.0; else if (finalHeight * 0.8 <= 16000) pr = 0.8;
        else { showToast('🚧 最终排版高度极大超限，为防崩溃已取消。请使用 Markdown 导出！', 'error'); if (document.body.contains(outerWrapper)) document.body.removeChild(outerWrapper); return null; }

        try {
            // 🟢 核心防御2：allowTaint 改为 false，严禁污染的 Canvas，并利用 imagePlaceholder 安全跳过坏图
            const blob = await window.htmlToImage.toBlob(wrapper, {
                quality: 0.88,
                backgroundColor: bg,
                pixelRatio: pr,
                width: finalWidth,
                height: finalHeight,
                cacheBust: false,
                useCORS: true,
                allowTaint: false,
                imagePlaceholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                filter: (node) => {
                    if (node.tagName) {
                        const t = node.tagName.toUpperCase();
                        if (['SCRIPT', 'NOSCRIPT', 'VIDEO', 'AUDIO', 'IFRAME', 'OBJECT'].includes(t)) return false;
                    }
                    return true;
                }
            });
            return blob;
        } finally { if (document.body.contains(outerWrapper)) document.body.removeChild(outerWrapper); }
    }

    function loadCSS() { return new Promise((resolve) => { try { const cssText = GM_getResourceText("katexCSS"); if (cssText) { const style = document.createElement('style'); style.textContent = cssText; document.head.appendChild(style); } } catch (e) { } resolve(); }); }

    function downloadFile(content, ext, type, isDataUrl = false) {
        const a = document.createElement('a');
        a.download = `ChatShare_${new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-')}.${ext}`;

        if (content instanceof Blob) {
            a.href = URL.createObjectURL(content);
        } else if (isDataUrl) {
            a.href = content;
        } else {
            a.href = URL.createObjectURL(new Blob([content], { type }));
        }

        document.body.appendChild(a);

        setTimeout(() => {
            a.click();
            setTimeout(() => {
                if (document.body.contains(a)) document.body.removeChild(a);
                URL.revokeObjectURL(a.href);
            }, 1000);
        }, 0);
    }

    function cleanup() { if (isPanelOpen) closePanelAndExit(); forceClearAll(); }
    window.addEventListener('popstate', cleanup); window.addEventListener('beforeunload', cleanup); document.addEventListener('turbo:before-cache', cleanup);

    const targetHistory = typeof unsafeWindow !== 'undefined' ? unsafeWindow.history : history;
    const origPush = targetHistory.pushState;
    targetHistory.pushState = function (...args) {
        origPush.apply(this, args);
        cleanup();
    };
    window.addEventListener('hashchange', cleanup);

    console.log('[ChatShare Extractor] 挂载成功');
})();