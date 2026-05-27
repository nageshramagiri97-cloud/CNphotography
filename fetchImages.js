const https = require('https');

https.get('https://unsplash.com/napi/search/photos?query=indian+wedding+traditional&per_page=15', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.results) {
        parsed.results.forEach(img => {
          console.log(`ID: ${img.id} - ${img.description || img.alt_description}`);
        });
      } else {
        console.log("No results");
      }
    } catch (e) {
      console.log("Error parsing");
    }
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
