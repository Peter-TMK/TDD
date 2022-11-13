const express = require("express");
const router = express.Router();
const usersData = require("../fixtures/users.json")
const { check, validationResult } = require("express-validator");


router.get("/", (req, res)=>{
    res.json(usersData)
});

router.post("/",
[
    check("username", "Article's title is required").not().isEmpty(),
    check("password", "Article's body is required").not().isEmpty()
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