function numberValidator(value) {
    return new Promise(function(resolve, reject){
        console.log(typeof(value))
        setTimeout(function() {
            if(typeof(value) === 'number')
                resolve('驗證成功') // 已實現，成功
            else
                reject('驗證失敗') // 有錯誤，已拒絕，失敗
        }, 3000);
    });
}

numberValidator(33).then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log(reason);
})