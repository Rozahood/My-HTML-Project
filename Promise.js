var func = function (resolve, reject) {
    resolve(10);
};
var promise = new Promise(func);
promise
.then((val) => {
   console.log(val);
   return val + 1;
})
.then((val) => {
    console.log(val);
    return val + 1
})
.then((val) => {
    console.log(val);
    return val + 1;
})
.catch((err) => {
    console.log(err);
})
