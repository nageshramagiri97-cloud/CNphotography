import https from 'https';

const req = https.request({
  hostname: 'www.pexels.com',
  path: `/search/indian%20wedding/`,
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    const urls = data.match(/images\.pexels\.com\/photos\/[0-9]+\/pexels-photo-[0-9]+\.jpeg/g);
    if(urls) {
      console.log([...new Set(urls)].slice(0, 15).join('\n'));
    } else {
      console.log('no urls found');
    }
  });
});

req.on('error', console.error);
req.end();
