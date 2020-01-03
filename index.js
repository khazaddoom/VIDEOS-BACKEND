const express = require('express');

const app = express();

let PORT = 3000;

if(process.env.PORT !== '') {
    PORT = process.env.PORT;
}

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/videos', function(request, response) {
    response.json([{
        'name': 'IMG_0418',
        'url': 'https://d2vlcwo9x1bc96.cloudfront.net/ec7a14b0-1ab3-4094-aee2-98b00f8dc12b/hls/IMG_0418.m3u8'
    },
    {
        'name': 'MEDIUM_2',
        'url': 'https://d2vlcwo9x1bc96.cloudfront.net/5ea044c4-0a1d-4588-ab1e-786acae88d36/hls/MEDIUM_2.m3u8'
    }
])
});

app.listen(PORT, function () {
    console.log(`Server listening on ${PORT}`);
})