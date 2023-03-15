var fs = require("fs");

fs.readFile("index.tex", "utf-8", (err, data) => {
    if (err == null) {
        console.log(data);
    }else {
        console.log(err);
    }
});