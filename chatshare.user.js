// ==UserScript==
// @name         ChatShare - AI 对话下载器
// @name:en         ChatShare - AI Chat Exporter
// @namespace    https://github.com/mr-hanlu/chatshare
// @version      0.2.2
// @description  支持几乎所有的ai对话网页的 Markdown 导出 + 图像导出。需要支持新网址，在@match中自行追加使用。主要用于：claude｜chatgpt｜gemini｜grok｜doubao｜qwen｜deepseek｜minimax｜kimi｜yuanbao｜chatglm｜openrouter｜poe等。
// @description:en  Export almost any AI chat page to Markdown or an image. To support a new site, add it to @match. Mainly for: claude | chatgpt | gemini | grok | doubao | qwen | deepseek | minimax | kimi | yuanbao | chatglm | openrouter | poe, etc.
// @author       hanlu
// @license      MIT
// @icon         data:image/png;base64,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
// @match        https://aistudio.google.com/*
// @match        https://gemini.google.com/*
// @match        https://notebooklm.google.com/*
// @match        https://claude.ai/*
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @match        https://x.com/*
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
// @match        https://agent.minimaxi.com/*
// @match        https://aistudio.xiaomimimo.com/*
// @match        https://openrouter.ai/*
// @match        https://poe.com/*
// @require      https://cdn.jsdelivr.net/npm/turndown@7.1.3/dist/turndown.js
// @require      https://cdn.jsdelivr.net/npm/turndown-plugin-gfm@1.0.2/dist/turndown-plugin-gfm.js
// @require      https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.min.js
// @resource     katexCSS https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css
// @grant        GM_getResourceText
// @run-at       document-end
// @downloadURL https://update.greasyfork.org/scripts/572918/ChatShare%20-%20AI%20%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8.user.js
// @updateURL https://update.greasyfork.org/scripts/572918/ChatShare%20-%20AI%20%E5%AF%B9%E8%AF%9D%E4%B8%8B%E8%BD%BD%E5%99%A8.meta.js
// ==/UserScript==

(function () {
    'use strict';

    if (window.self !== window.top) return;
    if (document.getElementById('chatshare-optimized-host')) return;

    // [chatshare-i18n-v1] UI language: Chinese if the browser's first language is zh*, otherwise English.
    //   override: localStorage.chatshareLang = 'zh' | 'en' (then reload). Exported file headings are not translated.
    const I18N = {
        en: {
            title: "📦 Chat Exporter",
            statsSelected: "Selected ",
            statsBlocks: " blocks · 👤 ",
            roleHint: "Shift + Click selected content: switch User / AI",
            exportMd: "📄 Export Markdown",
            exportImg: "🖼️ Export Image",
            selectAll: "✅ Select All Messages",
            fastMd: "⚡ Instant Markdown (OpenRouter)",
            noBlocks: "No message blocks found. Select manually, or update SELECT_ALL_RULES.",
            loadingOlder: "⏳ Loading older messages...",
            loadingOlderN: "⏳ Loading older messages... ({n})",
            scanning: "⏳ Scanning {pct}% · {n} blocks",
            selectedTooLong: "Selected {n} blocks. Too long for image export - use Markdown.",
            selectedN: "Selected {n} message block(s)",
            longWarn: "📏 Exceeded safe length for image. Use Markdown for long chats!",
            badgeUser: "👤 User",
            badgeAi: "🤖 AI",
            selectFirst: "⚠️ Please select content first!",
            mdOk: "✅ Markdown exported successfully!",
            libFail: "❌ Render library failed to load. Check network.",
            imgTooLong: "❌ Content is too long for image export. Select fewer blocks or use Markdown!",
            fetchingRes: "⏳ Fetching fonts/resources (First time is slow)...",
            imgOk: "✅ Image saved successfully!",
            corsFail: "Resource blocked by CORS or tainted. Please use Markdown export instead.",
            genFail: "❌ Generation failed: {msg}",
            procNode: "⏳ Processing node {i}/{n}...",
            compress: "⏳ Compressing image assets...",
            layout: "⏳ Calculating layout boundaries...",
            layers: "⏳ Generating layers...",
            imgHuge: "🚧 Image height is too large. Cancelled to prevent crash. Please use Markdown!",
            readingDb: "⏳ Reading chat database...",
            dbOk: "✅ Exported {n} messages from database in {ms}ms",
            dbFallback: "⚠️ Database read failed ({why}). Falling back to scroll..."
        },
        zh: {
            title: "📦 对话导出",
            statsSelected: "已选 ",
            statsBlocks: " 块 · 👤 ",
            roleHint: "Shift + 点击已选内容：切换 用户 / AI",
            exportMd: "📄 导出 Markdown",
            exportImg: "🖼️ 导出图片",
            selectAll: "✅ 全选消息",
            fastMd: "⚡ 即时导出 Markdown (OpenRouter)",
            noBlocks: "未找到消息块。请手动选择，或更新 SELECT_ALL_RULES。",
            loadingOlder: "⏳ 正在加载更早的消息...",
            loadingOlderN: "⏳ 正在加载更早的消息... ({n})",
            scanning: "⏳ 扫描中 {pct}% · {n} 块",
            selectedTooLong: "已选 {n} 块。内容过长，无法导出图片，请使用 Markdown。",
            selectedN: "已选 {n} 个消息块",
            longWarn: "📏 已超出图片安全长度，长对话请使用 Markdown！",
            badgeUser: "👤 用户",
            badgeAi: "🤖 AI",
            selectFirst: "⚠️ 请先选择内容！",
            mdOk: "✅ Markdown 导出成功！",
            libFail: "❌ 渲染库加载失败，请检查网络。",
            imgTooLong: "❌ 内容过长，无法导出图片。请减少选择或使用 Markdown！",
            fetchingRes: "⏳ 正在获取字体/资源（首次较慢）...",
            imgOk: "✅ 图片保存成功！",
            corsFail: "资源被跨域策略拦截或画布被污染，请改用 Markdown 导出。",
            genFail: "❌ 生成失败：{msg}",
            procNode: "⏳ 正在处理节点 {i}/{n}...",
            compress: "⏳ 正在压缩图片资源...",
            layout: "⏳ 正在计算布局边界...",
            layers: "⏳ 正在生成图层...",
            imgHuge: "🚧 图片高度过大，已取消以防崩溃。请使用 Markdown！",
            readingDb: "⏳ 正在读取对话数据库...",
            dbOk: "✅ 已从数据库导出 {n} 条消息，用时 {ms}ms",
            dbFallback: "⚠️ 数据库读取失败（{why}），改用滚动加载..."
        }
    };
    const LANG = (() => {
        try { const o = localStorage.getItem('chatshareLang'); if (o === 'zh' || o === 'en') return o; } catch (e) { }
        const first = (navigator.languages && navigator.languages[0]) || navigator.language || '';
        return /^zh/i.test(first) ? 'zh' : 'en';
    })();
    function t(key, vars) {
        let s = (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
        if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
        return s;
    }

    let isSelectMode = false;
    let selectedElements = new Set();
    let currentHoverElement = null;
    let isPanelOpen = false;
    let isDragging = false, hasDragged = false;
    let startX, startY, initLeft, initTop;
    let isProcessing = false;
    let hasWarnedLongImage = false;
    const roleOverrides = new WeakMap();
    let roleRenderQueued = false;
    const selectedResizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(() => queueRoleOverlayRender()) : null;

    // ================= UI 构建与守护 =================
    const host = document.createElement('div');
    host.id = 'chatshare-optimized-host';
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
        .stats .count{color:#3b82f6;font-weight:700;font-size:14px}
        .stats .user-count{color:#2563eb;font-weight:700}.stats .ai-count{color:#059669;font-weight:700}
        .role-hint{font-size:11px;line-height:1.45;text-align:center;color:#64748b;background:#f8fafc;border-radius:7px;padding:6px 8px}
        .role-layer{position:fixed;inset:0;pointer-events:none;z-index:2147483646}
        .role-badge{position:fixed;padding:2px 7px;border-radius:5px 5px 0 0;color:#fff;font:700 11px/1.55 system-ui,-apple-system,sans-serif;white-space:nowrap;box-shadow:0 2px 7px rgba(0,0,0,.16)}
        .role-badge.user{background:#2563eb}.role-badge.ai{background:#059669}
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
    const titleSpan = document.createElement('span'); titleSpan.textContent = t('title');
    const btnClose = document.createElement('span'); btnClose.className = 'close-btn'; btnClose.textContent = '×';
    header.append(titleSpan, btnClose);
    const body = document.createElement('div'); body.className = 'body';
    const statsContainer = document.createElement('div'); statsContainer.className = 'stats';
    statsContainer.append(document.createTextNode(t('statsSelected')));
    const countSpan = document.createElement('span'); countSpan.className = 'count'; countSpan.textContent = '0';
    const userCountSpan = document.createElement('span'); userCountSpan.className = 'user-count'; userCountSpan.textContent = '0';
    const aiCountSpan = document.createElement('span'); aiCountSpan.className = 'ai-count'; aiCountSpan.textContent = '0';
    statsContainer.append(countSpan, document.createTextNode(t('statsBlocks')), userCountSpan, document.createTextNode(' / 🤖 '), aiCountSpan);
    const roleHint = document.createElement('div'); roleHint.className = 'role-hint'; roleHint.textContent = t('roleHint');
    const btnMd = document.createElement('button'); btnMd.className = 'btn-md'; btnMd.textContent = t('exportMd');
    const btnImg = document.createElement('button'); btnImg.className = 'btn-img'; btnImg.textContent = t('exportImg');

    // 👇 Select All Button (Blue)
    const btnSelectAll = document.createElement('button');
    btnSelectAll.className = 'btn-md';
    btnSelectAll.style.background = '#3b82f6';
    btnSelectAll.style.marginBottom = '4px';
    btnSelectAll.textContent = t('selectAll');
    // [chatshare-fastmd-v6b] instant Markdown button (OpenRouter only)
    const IS_OPENROUTER = /(^|\.)openrouter\.ai$/.test(location.hostname);
    const btnFastMd = document.createElement('button');
    btnFastMd.className = 'btn-md';
    btnFastMd.style.background = '#7c3aed';
    btnFastMd.textContent = t('fastMd');
    body.append(statsContainer, roleHint, btnSelectAll, btnFastMd, btnMd, btnImg);
    panel.append(header, body);

    const toastEl = document.createElement('div'); toastEl.className = 'sc-toast';
    const roleLayer = document.createElement('div'); roleLayer.className = 'role-layer';
    shadow.appendChild(toastEl);
    shadow.appendChild(roleLayer);
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
                queueRoleOverlayRender();
            }
        }, 150);
    });
    window.addEventListener('scroll', queueRoleOverlayRender, true);

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

    // [chatshare-selectall-v2] Select All: per-site selectors + generic fallback
    const SELECT_ALL_RULES = [
        { host: /(^|\.)(chatgpt\.com|chat\.openai\.com)$/, sel: '[data-message-author-role]' },
        { host: /(^|\.)claude\.ai$/, sel: '[data-testid="user-message"], .font-claude-response, .font-claude-message' },
        { host: /(^|\.)gemini\.google\.com$/, sel: 'user-query, model-response' },
        { host: /(^|\.)openrouter\.ai$/, sel: '[data-message-bubble]', preload: true }
    ];
    const SELECT_ALL_FALLBACK = '[data-message-author-role], [data-role="user"], [data-role="assistant"], [data-testid*="message" i]';

    function findMessageCandidates() {
        const rule = SELECT_ALL_RULES.find(r => r.host.test(location.hostname));
        let nodes = [];
        if (rule && rule.sel) nodes = Array.from(document.querySelectorAll(rule.sel));
        if (nodes.length === 0) nodes = Array.from(document.querySelectorAll(SELECT_ALL_FALLBACK));
        nodes = nodes.filter(el => el.isConnected && !host.contains(el) && (el.textContent || '').trim().length > 0);
        // drop list containers (wrap 2+ other candidates)
        nodes = nodes.filter(el => nodes.filter(o => o !== el && el.contains(o)).length < 2);
        // keep outermost of any remaining nested pairs
        nodes = nodes.filter(el => !nodes.some(o => o !== el && o.contains(el)));
        return nodes;
    }

    // [chatshare-selectall-v6a] adaptive fast scroll (P11: 139/139 bubbles, ~25s on 385-screen chat)
    //   Phase 1 (top preload): bounce down 2 screens, 2 rAF + 50ms, jump to top, poll 100ms up to 1500ms; stop after 2 quiet rounds
    //   Phase 2 (walk): from top, step 0.9 * clientHeight; after 2 rAF advance immediately unless new bubbles mounted,
    //                   otherwise wait until the bubble set is quiet for 120ms (max 1000ms per step)
    function findScrollContainer(el) {
        let sc = el ? el.parentElement : null;
        while (sc && sc !== document.documentElement) {
            const cs = getComputedStyle(sc);
            if (/(auto|scroll|overlay)/.test(cs.overflowY) && sc.scrollHeight > sc.clientHeight + 10) return sc;
            sc = sc.parentElement;
        }
        return document.scrollingElement || document.documentElement;
    }

    async function preloadOlderMessages(sel, onProgress) {
        const first = document.querySelector(sel);
        if (!first) return null;
        const sc = findScrollContainer(first);
        const report = typeof onProgress === 'function' ? onProgress : () => {};
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        const frames = n => new Promise(r => { const tick = k => (k <= 0 ? r() : requestAnimationFrame(() => tick(k - 1))); tick(n); });
        const TOP_BOUNCE_SCREENS = 2, TOP_QUIET_MS = 1500, TOP_POLL_MS = 100, TOP_QUIET_ROUNDS = 2, TOP_MAX_MS = 90000;
        const STEP_FRAC = 0.9, SETTLE_FRAMES = 2, QUIET_MS = 120, MAX_WAIT_MS = 1000, POLL_MS = 30, WALK_MAX_MS = 300000, STUCK_LIMIT = 3;
        const seen = new Set();
        const collect = () => {
            let added = 0;
            document.querySelectorAll(sel).forEach(el => { if (!seen.has(el)) { seen.add(el); added++; } });
            return added;
        };
        const fromBottom = sc.scrollHeight - sc.scrollTop;
        const t0 = performance.now();
        collect();
        const start = seen.size;

        // ---- Phase 1: top preload (older history batches) ----
        let quiet = 0, batches = 0;
        while (quiet < TOP_QUIET_ROUNDS && performance.now() - t0 < TOP_MAX_MS) {
            sc.scrollTop = Math.min(sc.clientHeight * TOP_BOUNCE_SCREENS, Math.max(0, sc.scrollHeight - sc.clientHeight));
            await frames(2);
            await sleep(50);
            sc.scrollTop = 0;
            const tj = performance.now();
            let grew = false;
            while (performance.now() - tj < TOP_QUIET_MS) {
                await sleep(TOP_POLL_MS);
                if (collect() > 0) { grew = true; batches++; break; }
            }
            quiet = grew ? 0 : quiet + 1;
            report(t('loadingOlderN', { n: seen.size }));
        }
        const afterTop = seen.size;
        const topMs = Math.round(performance.now() - t0);

        // ---- Phase 2: fast top-to-bottom walk (mounts lazy middle messages) ----
        const t1 = performance.now();
        let steps = 0, stuck = 0, pos = 0, prevTop = -1, reachedBottom = false;
        while (performance.now() - t1 < WALK_MAX_MS) {
            sc.scrollTop = pos;
            await frames(SETTLE_FRAMES);
            steps++;
            if (collect() > 0) {
                const tw = performance.now();
                let lastGrow = tw;
                while (performance.now() - tw < MAX_WAIT_MS && performance.now() - lastGrow < QUIET_MS) {
                    await sleep(POLL_MS);
                    if (collect() > 0) lastGrow = performance.now();
                }
            }
            const cur = sc.scrollTop;
            if (steps % 10 === 0) {
                const pct = Math.min(100, Math.round(100 * (cur + sc.clientHeight) / Math.max(1, sc.scrollHeight)));
                report(t('scanning', { pct: pct, n: seen.size }));
            }
            if (cur + sc.clientHeight >= sc.scrollHeight - 2) { reachedBottom = true; break; }
            if (cur <= prevTop) { if (++stuck >= STUCK_LIMIT) break; } else stuck = 0;
            prevTop = cur;
            pos = cur + Math.max(1, Math.floor(sc.clientHeight * STEP_FRAC));
        }
        collect();
        const walkMs = Math.round(performance.now() - t1);
        let disconnected = 0;
        seen.forEach(el => { if (!el.isConnected) disconnected++; });
        sc.scrollTop = Math.max(0, sc.scrollHeight - fromBottom);
        const stats = { start, afterTop, batches, topMs, walkMs, steps, bubbles: seen.size, disconnected, reachedBottom };
        console.log('[ChatShare] preload v6a: start=' + start + ' afterTop=' + afterTop + ' batches=' + batches +
            ' topMs=' + topMs + ' walkMs=' + walkMs + ' steps=' + steps + ' bubbles=' + seen.size +
            ' disconnected=' + disconnected + ' reachedBottom=' + reachedBottom);
        if (disconnected > 0 || !reachedBottom) console.warn('[ChatShare] preload v6a may be incomplete', stats);
        return stats;
    }

    async function selectAllMessages() {
        if (isProcessing) return;
        const saRule = SELECT_ALL_RULES.find(r => r.host.test(location.hostname));
        if (saRule && saRule.preload && saRule.sel) {
            const saLabel = btnSelectAll.textContent;
            isProcessing = true; btnSelectAll.disabled = true;
            btnSelectAll.textContent = t('loadingOlder');
            try { await preloadOlderMessages(saRule.sel, msg => { btnSelectAll.textContent = msg; }); }
            catch (e) { console.error('[ChatShare] preload failed:', e); }
            finally { isProcessing = false; btnSelectAll.disabled = false; btnSelectAll.textContent = saLabel; }
        }
        const candidates = findMessageCandidates();
        if (candidates.length === 0) {
            showToast(t('noBlocks'), 'warn');
            return;
        }
        let added = 0;
        candidates.forEach(el => {
            if (selectedElements.has(el)) return;
            const overlaps = [];
            selectedElements.forEach(s => { if (s.contains(el) || el.contains(s)) overlaps.push(s); });
            overlaps.forEach(s => { removeHighlight(s); selectedElements.delete(s); selectedResizeObserver?.unobserve(s); });
            applyHighlight(el);
            selectedElements.add(el);
            selectedResizeObserver?.observe(el);
            added++;
        });
        updateRoleUI();
        if (calcTotalEstimatedHeight() > 16000 && !hasWarnedLongImage) {
            showToast(t('selectedTooLong', { n: added }), 'warn');
            hasWarnedLongImage = true;
        } else {
            showToast(t('selectedN', { n: added }), 'info');
        }
    }
    btnSelectAll.addEventListener('click', () => { selectAllMessages(); });

    // [chatshare-fastmd-v6b] instant OpenRouter Markdown straight from IndexedDB (schema v3, probes P7-P10)
    //   message items only (reasoning + tool parts excluded); multiple items per turn merged under one heading
    //   any schema surprise -> throw -> fall back to v6a scroll + DOM export
    function idbReq(r) { return new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }

    async function readOpenRouterChat() {
        const t0 = performance.now();
        let forced = false;
        try { forced = localStorage.getItem('chatshareForceScroll') === '1'; } catch (e) { }
        if (forced) throw new Error('forced fallback (localStorage.chatshareForceScroll=1)');
        const room = new URLSearchParams(location.search).get('room');
        if (!room) throw new Error('no ?room= in URL');
        const factory = window.indexedDB;
        if (!factory || typeof factory.databases !== 'function') throw new Error('indexedDB.databases() unavailable');
        const names = (await factory.databases()).map(d => d && d.name).filter(n => n && n.startsWith('openrouter:playground:ws:'));
        if (!names.length) throw new Error('no openrouter:playground:ws:* database');
        for (const name of names) {
            const db = await idbReq(factory.open(name));
            try {
                if (!db.objectStoreNames.length) continue;
                const sn = db.objectStoreNames.contains(name) ? name : db.objectStoreNames[0];
                const getMany = keys => new Promise((res, rej) => {
                    const st = db.transaction(sn, 'readonly').objectStore(sn);
                    const out = new Array(keys.length);
                    let left = keys.length;
                    if (!left) { res(out); return; }
                    keys.forEach((k, i) => {
                        const q = st.get(k);
                        q.onsuccess = () => { out[i] = q.result ? q.result.value : null; if (--left === 0) res(out); };
                        q.onerror = () => rej(q.error);
                    });
                });
                const [man] = await getMany(['v3:manifest:' + room]);
                if (!man) continue;
                if (!Array.isArray(man.messageIds) || man.messageIds.length === 0) throw new Error('manifest has no messageIds');
                const msgs = await getMany(man.messageIds.map(id => 'v3:message:' + id));
                const lostMsg = msgs.findIndex(v => !v);
                if (lostMsg >= 0) throw new Error('message record missing: ' + man.messageIds[lostMsg]);
                const refs = [];
                msgs.forEach((v, mi) => (Array.isArray(v.items) ? v.items : []).forEach(r => { if (r && r.type === 'message' && r.id) refs.push({ mi, id: r.id }); }));
                const items = await getMany(refs.map(r => 'v3:item:' + r.id));
                const lostItem = items.findIndex(v => !v);
                if (lostItem >= 0) throw new Error('item record missing: ' + refs[lostItem].id);
                const parts = msgs.map(() => []);
                refs.forEach((r, i) => {
                    const c = items[i].data ? items[i].data.content : null;
                    const t = typeof c === 'string' ? c : Array.isArray(c) ? c.map(p => (p && (p.text || p.refusal)) || '').join('') : '';
                    if (t.trim()) parts[r.mi].push(t);
                });
                const all = msgs.map((v, mi) => ({ id: v.id, role: v.type === 'user' ? 'user' : 'ai', text: parts[mi].join('\n\n') }));
                const messages = all.filter(m => m.text.trim());
                const empty = all.length - messages.length;
                if (!messages.length) throw new Error('every message is empty');
                if (empty * 4 > all.length) throw new Error(empty + '/' + all.length + ' messages empty (schema changed?)');
                return { room, db: name, messages, empty, total: all.length, parts: refs.length, ms: Math.round(performance.now() - t0) };
            } finally { db.close(); }
        }
        throw new Error('room not found in any playground database');
    }

    function checkAgainstPage(res) {
        const norm = s => (s || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
        const bubbles = Array.from(document.querySelectorAll('[data-message-bubble]')).slice(-3).map(e => norm(e.textContent)).filter(n => n.length >= 60);
        if (!bubbles.length) return;
        const hay = res.messages.map(m => norm(m.text)).join('|');
        const ok = bubbles.some(n => [0.25, 0.5, 0.75].some(f => { const i = Math.floor(n.length * f); return hay.includes(n.slice(i, i + 30)); }));
        if (!ok) throw new Error('database does not match the visible messages');
    }

    function buildMarkdownFromMessages(messages) {
        const HU = '### \uD83D\uDC64 User', HA = '### \uD83E\uDD16 AI';
        return messages.map(m => m.role === 'user'
            ? HU + '\n\n> ' + m.text.replace(/\n/g, '\n> ') + '\n\n---\n\n'
            : HA + '\n\n' + m.text + '\n\n---\n\n').join('');
    }

    btnFastMd.addEventListener('click', async () => {
        if (isProcessing) return;
        const label = btnFastMd.textContent;
        isProcessing = true; btnFastMd.disabled = true; btnFastMd.textContent = t('readingDb');
        let res = null, why = '';
        try { res = await readOpenRouterChat(); checkAgainstPage(res); }
        catch (e) { why = (e && e.message) || String(e); console.warn('[ChatShare] v6b database path failed, falling back to scroll:', e); }
        finally { isProcessing = false; btnFastMd.disabled = false; btnFastMd.textContent = label; }
        if (res && !why) {
            downloadFile(buildMarkdownFromMessages(res.messages), 'md', 'text/markdown;charset=utf-8');
            console.log('[ChatShare] v6b: db=' + res.db + ' room=' + res.room + ' messages=' + res.messages.length + '/' + res.total +
                ' parts=' + res.parts + ' empty=' + res.empty + ' ms=' + res.ms);
            showToast(t('dbOk', { n: res.messages.length, ms: res.ms }), 'info');
            closePanelAndExit();
            return;
        }
        showToast(t('dbFallback', { why: why }), 'warn');
        console.log('[ChatShare] v6b fallback reason: ' + why);
        await selectAllMessages();
        if (selectedElements.size > 0) btnMd.click();
    });


    // ================= 选取模式 =================
    function applyHighlight(el) {
        if (!el?.style) return;
        const role = guessRole(el);
        const isUser = role === 'user';
        el.style.backgroundColor = isUser ? 'rgba(37, 99, 235, 0.08)' : 'rgba(16, 185, 129, 0.1)';
        el.style.boxShadow = `inset 0 0 0 2px ${isUser ? '#2563eb' : '#10b981'}`;
        el.style.outline = 'none';
        el.setAttribute('data-sc-selected', 'true');
    }
    function removeHighlight(el) { if (el && el.style) { el.style.removeProperty('background-color'); el.style.removeProperty('box-shadow'); el.style.removeProperty('outline'); el.removeAttribute('data-sc-selected'); } }
    function applyHover(el) { if (el && el.style && el.getAttribute('data-sc-selected') !== 'true') el.style.outline = '2px dashed #3b82f6'; }
    function removeHover(el) { if (el && el.style && el.getAttribute('data-sc-selected') !== 'true') el.style.removeProperty('outline'); }
    function forceClearAll() {
        if (currentHoverElement) { removeHover(currentHoverElement); currentHoverElement = null; }
        selectedElements.forEach(el => { removeHighlight(el); selectedResizeObserver?.unobserve(el); }); selectedElements.clear();
        updateRoleUI();
        hasWarnedLongImage = false;
    }

    function enterSelectMode() {
        isSelectMode = true; document.addEventListener('mouseover', onMouseOver, true); document.addEventListener('mouseout', onMouseOut, true); document.addEventListener('click', onDocClick, true);
        statsContainer.style.display = 'block'; btnMd.style.display = 'block'; btnImg.style.display = 'block'; btnSelectAll.style.display = 'block'; if (IS_OPENROUTER) btnFastMd.style.display = 'block';
        updateRoleUI();
    }
    function exitSelectMode() {
        isSelectMode = false; document.removeEventListener('mouseover', onMouseOver, true); document.removeEventListener('mouseout', onMouseOut, true); document.removeEventListener('click', onDocClick, true);
        statsContainer.style.display = 'none'; btnMd.style.display = 'none'; btnImg.style.display = 'none'; forceClearAll(); btnSelectAll.style.display = 'none'; btnFastMd.style.display = 'none';
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
            if (e.shiftKey) {
                const nextRole = guessRole(el) === 'user' ? 'ai' : 'user';
                roleOverrides.set(el, nextRole);
                applyHighlight(el);
                updateRoleUI();
                return;
            }
            removeHighlight(el); selectedElements.delete(el); selectedResizeObserver?.unobserve(el); if (currentHoverElement === el) applyHover(el);
            updateRoleUI();
        } else {
            const toRemove = []; selectedElements.forEach(s => { if (s.contains(el) || el.contains(s)) toRemove.push(s); });
            toRemove.forEach(s => { removeHighlight(s); selectedElements.delete(s); selectedResizeObserver?.unobserve(s); });
            applyHighlight(el); selectedElements.add(el); if (currentHoverElement === el) removeHover(el);
            selectedResizeObserver?.observe(el);
            updateRoleUI();

            const th = calcTotalEstimatedHeight();
            if (th > 16000 && !hasWarnedLongImage) {
                showToast(t('longWarn'), 'warn'); hasWarnedLongImage = true;
            }
        }
        countSpan.textContent = selectedElements.size;
    }

    // ================= 基础工具 =================
    const STYLE_WHITELIST = ['color', 'backgroundColor', 'borderColor', 'outlineColor', 'fill', 'stroke', 'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing', 'textDecoration', 'textAlign', 'whiteSpace', 'display', 'width', 'maxWidth', 'minWidth', 'overflow', 'overflowX', 'overflowY', 'boxSizing', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'flexDirection', 'flexWrap', 'flexGrow', 'flexShrink', 'flexBasis', 'alignItems', 'alignSelf', 'justifyContent', 'gap', 'gridTemplateColumns', 'gridTemplateRows', 'gridColumn', 'gridRow', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderStyle', 'borderRadius', 'opacity', 'verticalAlign'];

    const USER_ROLE_RE = /(?:^|[\s_:\-])(user|human|prompt|question)(?:$|[\s_:\-])|用户|提问者/i;
    const AI_ROLE_RE = /(?:^|[\s_:\-])(assistant|bot|model|agent|answer|response|claude|chatgpt|gemini|grok|deepseek|qwen|kimi|doubao)(?:$|[\s_:\-])|助手|模型|回答者|智能体/i;

    function guessRole(el) {
        const overridden = roleOverrides.get(el);
        if (overridden) return overridden;

        let userScore = 0, aiScore = 0, current = el;
        for (let depth = 0; current && current !== document.body && depth < 7; depth++, current = current.parentElement) {
            const weight = 7 - depth;
            const explicit = [
                current.getAttribute('data-message-author-role'), current.getAttribute('data-author-role'),
                current.getAttribute('data-role'), current.getAttribute('data-sender'), current.getAttribute('data-author'), current.getAttribute('data-message-bubble')
            ].filter(Boolean).join(' ').toLowerCase();
            const semantic = [
                current.getAttribute('aria-label'), current.getAttribute('data-testid'), current.id,
                typeof current.className === 'string' ? current.className : ''
            ].filter(Boolean).join(' ').toLowerCase();
            if (USER_ROLE_RE.test(explicit)) userScore += weight * 3;
            if (AI_ROLE_RE.test(explicit)) aiScore += weight * 3;
            if (USER_ROLE_RE.test(semantic)) userScore += weight;
            if (AI_ROLE_RE.test(semantic)) aiScore += weight;
        }

        if (userScore > aiScore && userScore >= 3) return 'user';
        if (aiScore > userScore && aiScore >= 3) return 'ai';

        // 没有可靠语义信号时保留旧版兜底逻辑。
        const html = el.innerHTML.toLowerCase();
        if (html.includes('author-role="user"')) return 'user'; if (html.includes('author-role="assistant"')) return 'ai';
        return (el.querySelectorAll('pre,code,table,.katex').length > 0 || el.innerText.trim().length > 150) ? 'ai' : 'user';
    }

    function updateRoleUI() {
        let users = 0, ais = 0;
        for (const el of selectedElements) {
            if (guessRole(el) === 'user') users++; else ais++;
        }
        countSpan.textContent = selectedElements.size;
        userCountSpan.textContent = users;
        aiCountSpan.textContent = ais;
        queueRoleOverlayRender();
    }

    function queueRoleOverlayRender() {
        if (roleRenderQueued) return;
        roleRenderQueued = true;
        requestAnimationFrame(() => {
            roleRenderQueued = false;
            renderRoleOverlays();
        });
    }

    function renderRoleOverlays() {
        roleLayer.replaceChildren();
        if (!isSelectMode) return;

        for (const el of selectedElements) {
            if (!el.isConnected) continue;
            const rect = el.getBoundingClientRect();
            if (rect.width <= 0 || rect.height <= 0 || rect.bottom < 0 || rect.top > window.innerHeight) continue;

            const role = guessRole(el);
            const badge = document.createElement('div');
            badge.className = `role-badge ${role}`;
            badge.textContent = role === 'user' ? t('badgeUser') : t('badgeAi');
            const top = rect.top >= 23 ? rect.top - 21 : rect.top + 2;
            badge.style.left = `${Math.max(2, Math.min(window.innerWidth - 76, rect.left))}px`;
            badge.style.top = `${Math.max(2, top)}px`;
            roleLayer.appendChild(badge);
        }
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
            showToast(t('selectFirst'), 'warn'); return;
        }

        const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' }); td.escape = function(string) { return string; };
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
        showToast(t('mdOk'), 'info');
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
        if (selectedElements.size === 0) { showToast(t('selectFirst'), 'warn'); return; }
        if (typeof window.htmlToImage === 'undefined') { showToast(t('libFail'), 'error'); return; }

        const estHeight = calcTotalEstimatedHeight();
        if (estHeight > 20000) { showToast(t('imgTooLong'), 'error'); return; }

        if (isProcessing) return;
        isProcessing = true;

        if (currentHoverElement) { removeHover(currentHoverElement); currentHoverElement = null; }

        btnImg.disabled = true; btnImg.textContent = t('fetchingRes');

        try {
            const blobData = await renderToCanvas();
            // html-to-image@1.11.11 的 toBlob() 实际返回 PNG；扩展名与 MIME 保持一致后系统可正常预览。
            if (blobData) { downloadFile(blobData, 'png', 'image/png'); showToast(t('imgOk'), 'info'); }
        } catch (e) {
            console.error('[ChatShare Error]:', e);
            // 🟢 核心防御3：如果依然有错，捕获真实的错误信息而不只是 undefined
            const msg = (e && e.message) ? e.message : (typeof e === 'string' ? e : t('corsFail'));
            showToast(t('genFail', { msg: msg }), 'error');
        } finally { isProcessing = false; btnImg.disabled = false; btnImg.textContent = t('exportImg'); closePanelAndExit(); }
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
                btnImg.textContent = t('procNode', { i: i + 1, n: sortedEls.length }); await new Promise(r => setTimeout(r, 0));
            }
        }
        card.appendChild(fragment);

        btnImg.textContent = t('compress'); await preProcessImages(card);
        btnImg.textContent = t('layout'); document.body.appendChild(outerWrapper);

        await document.fonts.ready; wrapper.offsetHeight; await new Promise(r => requestAnimationFrame(r));
        let realCardW = card.scrollWidth; const MIN_CARD_W = 770; if (realCardW < MIN_CARD_W) realCardW = MIN_CARD_W;
        const finalWidth = realCardW + 80; const finalHeight = wrapper.scrollHeight;
        outerWrapper.style.width = finalWidth + 'px'; wrapper.style.width = finalWidth + 'px'; card.style.width = realCardW + 'px';
        await new Promise(r => requestAnimationFrame(r));

        btnImg.textContent = t('layers');
        let pr = 1.5;
        if (finalHeight * 1.5 <= 16000) pr = 1.5; else if (finalHeight * 1.25 <= 16000) pr = 1.25; else if (finalHeight * 1.0 <= 16000) pr = 1.0; else if (finalHeight * 0.8 <= 16000) pr = 0.8;
        else { showToast(t('imgHuge'), 'error'); if (document.body.contains(outerWrapper)) document.body.removeChild(outerWrapper); return null; }

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

    // 🟢 增强版 loadCSS：加入防重复机制，彻底修复相对路径 404 引发的漫长超时问题
    function loadCSS() {
        return new Promise((resolve) => {
            if (document.getElementById('chatshare-katex-style')) return resolve();
            try {
                let cssText = GM_getResourceText("katexCSS");
                if (cssText) {
                    // 将相对路径替换为 CDN 绝对路径
                    cssText = cssText.replace(/url\((?:'|")?fonts\//g, 'url(https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/fonts/');
                    const style = document.createElement('style');
                    style.id = 'chatshare-katex-style';
                    style.textContent = cssText;
                    document.head.appendChild(style);
                }
            } catch (e) {
                console.error('[ChatShare] loadCSS Error:', e);
            }
            resolve();
        });
    }

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

    // ================= 🚀 后台无感预热引擎 =================
    function warmUpHtmlToImage() {
        if (typeof window.htmlToImage === 'undefined') return;

        console.log('[ChatShare Extractor] 开始后台静默预热渲染引擎...');
        // 创建一个极其微小、不可见的“幽灵”节点
        const ghostNode = document.createElement('div');
        ghostNode.style.cssText = 'position:fixed; top:-9999px; left:-9999px; width:1px; height:1px; opacity:0; pointer-events:none;';
        ghostNode.textContent = ' '; // 赋予空文本，激活字体解析体系
        document.body.appendChild(ghostNode);

        // 强迫 html-to-image 渲染幽灵节点，迫使底层引擎加载所有 CSS 并将其缓存为 Base64
        window.htmlToImage.toPixelData(ghostNode, {
            cacheBust: false,
            useCORS: true,
            allowTaint: false,
            // 屏蔽不需要的重型资源请求，加速预热
            filter: (node) => node.tagName ? !['IMG', 'SCRIPT', 'VIDEO', 'IFRAME'].includes(node.tagName.toUpperCase()) : true
        }).then(() => {
            console.log('[ChatShare Extractor] 预热完成，字体及样式已全部进入内存缓存！');
        }).catch((e) => {
            // 预热阶段的跨域报错静默吞掉即可，不影响使用
            console.log('[ChatShare Extractor] 预热部分结束(含预期内跨域阻断)。');
        }).finally(() => {
            if (document.body.contains(ghostNode)) {
                document.body.removeChild(ghostNode);
            }
        });
    }

    function scheduleWarmUp() {
        // 先确保公式样式存在，以便被一并预热
        loadCSS();

        // 充分利用主线程空闲时间，绝不造成页面卡顿
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
                setTimeout(warmUpHtmlToImage, 2000);
            }, { timeout: 10000 });
        } else {
            setTimeout(warmUpHtmlToImage, 4000);
        }
    }

    // 监控页面路由的初期重构，保证即使单页应用重新加载也能兜底预热
    const warmUpObserver = new MutationObserver(() => {
        if (typeof window.htmlToImage !== 'undefined' && !window._chatshare_warmed) {
            window._chatshare_warmed = true;
            scheduleWarmUp();
        }
    });
    warmUpObserver.observe(document.head, { childList: true });

    // 启动首次预热
    scheduleWarmUp();

    console.log('[ChatShare Extractor] 挂载成功');
})();
