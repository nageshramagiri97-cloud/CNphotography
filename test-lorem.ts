import https from 'https';

https.get('https://loremflickr.com/800/800/indian,wedding', (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
}).on('error', (e) => console.log(e));
