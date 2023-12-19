const a = [1, 2];
const conbineArr = [
    ...a, 3, 4, 5
];
console.log(`展開運算符-陣列: ${conbineArr}`);

const x = { name: '王大明', age: 16 };
const conbineObj = {
    ...x,
    class_name: '一年6班',
    class_no: 10
};
console.log(`展開運算符-物件: ${JSON.stringify(conbineObj)}`);