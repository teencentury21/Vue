function sendRequest() {
    // 產生連結物件
    const urlObject = new URL('http://ip-api.com/json/8.8.8.8');
    // 產生GET參數
    urlObject.search = new URLSearchParams({
        fields: 'status,message,country,countryCode,region,regionName,city'
    });
    // 產生 Http GET Request
    const request = new Request(urlObject, {
        method: 'GET',
    });
    // 發送 Http GET Request
    const response = fetch(request);

    return response;
}

const response = sendRequest();
console.log(response);