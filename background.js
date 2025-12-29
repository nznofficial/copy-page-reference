chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "copy_ref",
      title: "Copy page reference",
      contexts: ["page", "selection", "link"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (!tab?.id) return;
  
    const title = tab.title ?? "";
    const url = info.pageUrl || tab.url || "";
    const text = `${title} – ${url}`;
  
    // Write to clipboard from the page context (more reliable than service worker)
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [text],
      func: async (t) => {
        await navigator.clipboard.writeText(t);
      }
    });
  });
  