function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
  description: 'dapi: Search within tabs %s'
  });
}


function searchForKeyword(keyword){
chrome.tabs.getAllInWindow()
}

function searchAllTabs(keyword){
    chrome.tabs.query({
	active: active,               // Select active tabs
	lastFocusedWindow: true,      // In the current window
	windowId: windows.WINDOW_ID_CURRENT
    }, function(array_of_tabs){
    }),
}


resetDefaultSuggestion();
// instead of omnibox add a new key map : which can be customizable in the next version 
// it bring a little popup thingy like the search box
chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate(text);
});

