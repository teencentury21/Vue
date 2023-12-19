let myVar = 'global variable';

function testScope() {
    console.log(myVar);
    let myVar = 'local variable';
    console.log(myVar);
};

testScope();