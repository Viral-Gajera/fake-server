let express = require("express");
let router = express.Router();

// importing controller
let search = require("../controller/search.js");
let select = require("../controller/select.js");

// defining router and contoller
router.post("/search", search.post);
router.post("/cache/search", search.post);
router.post("/select", select.post);
router.post("/cache/select", select.post);

router.all("*", function (req, res) {
    return res.status(404).json({
        isSuccess: false,
        message: "Please enter a valid endpoint",
    });
});

module.exports = router;
