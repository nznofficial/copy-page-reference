---

# 🔗 Copy Page Reference – Chrome Extension

A tiny Google Chrome extension that lets you **copy the current page’s title and URL** with a single right-click.

Perfect for notes, documentation, Slack messages, or research references.

---

## ✨ Features

* 📋 Right-click anywhere on a page to **copy the page reference**
* 🌐 Automatically captures:

  * Page title
  * Page URL
* ⚡ No UI, no popup, no setup
* 🧩 Built with **Manifest V3**
* 💨 Lightweight and fast

---

## 🚀 How It Works

1. Right-click anywhere on a webpage
2. Click **Copy page reference**
3. Paste the copied text wherever you need it

Default format:

```
Page Title – https://example.com
```

---

## 🗂 Project Structure

```
copy-page-reference/
├── manifest.json
├── background.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🔧 Installation (Local Development)

1. Clone or download this repository
2. Open Chrome and go to:

   ```
   chrome://extensions
   ```
3. Enable **Developer mode** (top-right)
4. Click **Load unpacked**
5. Select the `copy-page-reference/` folder

The extension is now active.

---

## ⚙️ Permissions Used

| Permission     | Purpose                            |
| -------------- | ---------------------------------- |
| `contextMenus` | Add the right-click menu item      |
| `activeTab`    | Access the current page’s metadata |
| `scripting`    | Write text to the clipboard        |

---

## 🧠 Technical Notes

* Clipboard access is performed **inside the page context** using `chrome.scripting.executeScript` for reliability
* The extension runs entirely in the background (no popup UI)
* Uses Chrome’s service worker architecture (MV3)

---

## 🛠 Customization Ideas

* 📄 Copy as Markdown:

  ```
  [Page Title](https://example.com)
  ```
* 🧾 Copy title and URL on separate lines
* ⌨️ Add a keyboard shortcut
* 🧠 Include selected text as a quoted block

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

Just let me know 👍
