let fs = require("fs");

async function post(req, res) {
    let data = fs.readFileSync("app/models/data.json", "utf8");

    let id = req.body?.id;
    data = JSON.parse(data);

    if (id) {
        data = data.data.vistaar_cache_db;

        let results = data.find((item) => item.id == id);

        if (!results) {
            res.json({
                isSuccess: false,
                message: "No data found",
            });
            return;
        }

        res.json({
            isSuccess: true,
            data: {
                vistaar_cache_db: results,
            },
        });
        return;
    }

    res.json({
        isSuccess: false,
        message: "No id provided",
    });
}

module.exports = {
    post,
};
