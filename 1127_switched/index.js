var http = require('http');

let staticFile = (response, fname,mime) => { 
  let fs = require('fs');

  fs.readFile(fname, (err, data) => {
    if (err) {
      console.log(`檔案讀取錯誤: ${err}`);
    }
    else {
      response.writeHead(200, {
        'Content-Type': 'mie'
      });

      response.write(data);
      response.end();
    } // if
  });
} // staticFile()

http.createServer((request, response) => {
request.on('data', (chunk) => {
  console.log(`data chunk: ${chunk}`);
}).on('end', () => {
  let path = require('path');
  let url = require('url');
  let pathname = url.parse(request.url).pathname;
  let fname = route_table[pathname];
  
  /*const route_table & mime_type 是利用 Javascript 的 Object Literal(實體物件)，
    將原來在 switch 裡處理的路由對應建立成兩個 Javascript 的物件 (objects)。*/
  const route_table = {
 '/': '../htdocs/index.html',
 '/styles.css': '../htdocs/assets/css/styles.css',
 '/index.js': '../htdocs/js/index.js',
 };

 const mime_type = {
 '.css': 'text/css',
 '.html': 'text/html',
 '.js': 'text/javascript',
 };//Code 5.1


  if (fname) {
    staticFile(
      response, fname, mime_type[path.extname(fname)]
    ); }
  
  console.log(`Request for ${pathname}`); //Code 7.1
});
  });
}).listen(8080);

// log message to Console
console.log('Server running at http://127.0.0.1:8080/');

// index.js.
