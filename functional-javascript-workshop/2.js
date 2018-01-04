function fun() {
    console.log(1);
};
function repeat(operation, num) {
    for (let i = 0; i< num; i++)
        operation();
};
repeat(fun, 10);
module.exports = repeat