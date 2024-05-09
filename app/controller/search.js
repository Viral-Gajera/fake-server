let fs = require("fs");

async function post(req, res) {
    // read data from ..models/data.json

    let data = fs.readFileSync("app/models/data.json", "utf8");
    res.json(JSON.parse(data));
}

module.exports = {
    post,
};
