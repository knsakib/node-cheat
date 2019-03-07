const http=require('http');


// function reqListener(req, res){
//
// }
//
// http.createServer(reqListener);



// http.createServer(function(req, res){
//
// });



const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
});

server.listen(3000);


//Eventloop: node process keeps on running as long as there are event listeners registered. Node.js manage these kind of eveny loop


//Console Log Output:
// GET { host: 'localhost:3000',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'upgrade-insecure-requests': '1',
//   'user-agent':   'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
// accept:   'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'en-US,en;q=0.9,bn;q=0.8',
//   cookie:
//    'G_AUTHUSER_H=0;
// _csrf=kKlp2ZHsDbnvmDyrD2JbprpL;
// oauth2_authentication_csrf=MTU1MDU1MDUxMnxEdi1CQkFFQ180SUFBUkFCRUFBQVB2LUNBQUVHYzNSeWFXNW5EQVlBQkdOemNtWUdjM1J5YVc1bkRDSUFJR013T1RRNU9UTmtNekV4WkRRNE5UZzVORFF5WW1Sa016RTBNbU00TVRFenxhxM1L3RIx2Y_lORuVkcOn4Z4vNhF2324EWrUEWPUSlA==;
// connect.sid=s%3Am3_ZDlrZeqTG9xpGoQby0mgIgL4sQ_Ev.cZCqCKwqOINbmDq09BPCzBYNFXkDHfR0YkkSdHcZ894;
// oauth2_consent_csrf=MTU1MDU1MDUxOXxEdi1CQkFFQ180SUFBUkFCRUFBQVB2LUNBQUVHYzNSeWFXNW5EQVlBQkdOemNtWUdjM1J5YVc1bkRDSUFJR1ZoTmpZd09UVmlPRFJrTWpSbU56TmhOMlptTWpsbE5ETTJNRGRpTTJJd3xBhU7hroS43xks7zkzqPPkD2xvAVcqpk-jCH0J3SWjhw==' }
