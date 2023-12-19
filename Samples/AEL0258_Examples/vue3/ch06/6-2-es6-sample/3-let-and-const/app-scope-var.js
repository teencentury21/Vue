var myVar = 'global variable';

function testScope() {
    console.log(myVar);
    var myVar = 'local variable';
    console.log(myVar);
};

testScope();