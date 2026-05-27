import https from 'https';

https.get('https://unsplash.com/napi/search/photos?query=south+indian+wedding+traditional&per_page=15', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.substring(0, 500));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
