document.getElementById('btn').addEventListener('click', rend)
function rend () {
  chrome.tabs.executeScript({ file: 'test.js' })
}
