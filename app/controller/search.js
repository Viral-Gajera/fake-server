let fs = require("fs");

async function post(req, res) {
    let data = fs.readFileSync("app/models/data.json", "utf8");

    let searchQuery = req.body?.title;
    data = JSON.parse(data);

    if (searchQuery) {
        let tokens = searchQuery.split(" ");
        let results = [];

        data = data.data.vistaar_cache_db;

        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            let title = item.title;
            let found = true;
            for (let j = 0; j < tokens.length; j++) {
                let token = tokens[j];
                // if (title.indexOf(token) === -1) {
                //     found = false;
                //     break;
                // }
                if (title.toLowerCase().indexOf(token.toLowerCase()) === -1) {
                    found = false;
                    break;
                }
            }
            if (found) {
                results.push(item);
            }
        }
        res.json({
            isSuccess: true,
            data: {
                vistaar_cache_db: results,
            },
        });
        return;
    }

    res.json(data);
}

module.exports = {
    post,
};
