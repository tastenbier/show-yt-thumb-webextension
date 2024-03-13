const permissionsToRequest = {
  origins: ["*://www.youtube.com/watch?*"],
};

browser.pageAction.onClicked.addListener(async (tab) => {
  if (await browser.permissions.request(permissionsToRequest)) {
    browser.tabs.sendMessage(tab.id, {});
  }
});
