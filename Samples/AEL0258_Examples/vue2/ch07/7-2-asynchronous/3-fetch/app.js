async function sendRequest() {
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
    const response = await fetch(request);
    const responseData = await response.json();

    console.log('async function 內', responseData);

    return responseData;
}

const response = sendRequest();
console.log('async function 外', response);

response.then(data => {
    console.log('premise data', data);
})