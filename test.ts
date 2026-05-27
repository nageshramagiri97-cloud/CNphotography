import https from 'https';

const url1 = 'https://images.unsplash.com/photo-1530103862676-de88d6b8ab0d';

https.get(url1, (res) => {
    console.log('Status code:', res.statusCode);
});
