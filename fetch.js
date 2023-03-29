try {
  const sendRequest = (method, url, data) => {
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message);
    })
    .catch(error => {
      console.log(error.message);
    });
  }

  const currentUrl = window.location.href;
  sendRequest('POST', '/my-server-url/currentUrl', {url: currentUrl})
  .then(data => console.log(data))
  .catch(error => console.log(error.message));

  const pageHtml = document.documentElement.outerHTML;
  const pageBase64 = btoa(pageHtml);
  sendRequest('POST', '/my-server-url/dom', {dom: pageBase64})
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
  
  const timeout = setTimeout(function() {
    xhrUrl.abort();
    xhrDom.abort();
    console.log("Request timed out.");
  }, 5000);
  
} catch (error) {
  console.log(error.message);
}
