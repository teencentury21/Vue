// 產生 XMLHttpRequest 物件
var request = new XMLHttpRequest();
// 設置連結網址及HTTP/HTTPS方法
var url = 'http://ip-api.com/json/8.8.8.8';
request.open("GET", url);
// 發送 Request
request.send();
// 發送 Request 後，從伺服器收完回應資料(load)時，執行的方法
request.addEventListener("load", function () {
    console.log(this);
});
