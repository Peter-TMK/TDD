const express = require("express");
const router = express.Router();
const articlesData = require("../fixtures/articles.json")
const { check, validationResult } = require("express-validator");


router.get("/", (req, res)=>{
    res.json(articlesData)
});

router.post("/",
[
    check("title", "Article's title is required").not().isEmpty(),
    check("author", "Article's body is required").not().isEmpty()
],
(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
});

module.exports = router;