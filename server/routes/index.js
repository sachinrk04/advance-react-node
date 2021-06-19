const fs = require("fs");

module.exports = function(app) {
    fs.readdirSync("./server/routes").forEach(function(file) {
        if (file === "index.js" || file.substr(file.lastIndexOf('.') + 1) !== 'js')
            return;
        var name = file.substr(0, file.indexOf('.'));
        app.use("/api", require('./' + name));
    });
};