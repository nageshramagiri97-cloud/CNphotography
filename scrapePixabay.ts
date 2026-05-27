import https from 'https';

const req = https.request({
  hostname: 'pixabay.com',
  path: `/images/search/indian%20wedding/`,
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const urls = data.match(/cdn\.pixabay\.com\/photo\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/[0-9]{2}\/[0-9]{2}\/[a-zA-Z0-9\-_]+\.jpg/g);
    if(urls) {
      console.log([...new Set(urls)].slice(0, 15).join('\n'));
    } else {
      console.log('no urls found');
    }
  });
});

req.on('error', console.error);
req.end();
