const scope = 'This is global.';

function myFunc() {
    console.log(scope);
    const scope = 'This is local.';
    console.log(scope);
};

myFunc();