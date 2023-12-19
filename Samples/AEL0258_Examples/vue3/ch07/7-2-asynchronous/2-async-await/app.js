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

async function printValidResult() {
    try {
        const result = await numberValidator(33);
        console.log('async function 內', result);
        return result;
    } catch (error) {
        console.log('error: ', error)
    }
}

const getResult = printValidResult();
console.log('async function 外', getResult);