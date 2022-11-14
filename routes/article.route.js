const express = require("express");
const router = express.Router();
const articlesData = require("../fixtures/articles.json")
const { save } = require("../utils/helperIntegration")
const { check, validationResult } = require("express-validator");


router.get("/", (req, res)=>{
    res.json(articlesData)
});

router.post("/",
[
    check("title", "Article's title is required").not().isEmpty(),
    check("author", "Article's author is required").not().isEmpty(),
    check("body", "Article's body is required").not().isEmpty()
],
(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const { title, author, body } = req.body;
    articlesData.push({
        title,
        author,
        body,
        id: Math.random().toString()
    })

    const isSaved = save(articlesData);

    if(!isSaved){
        return res.status(500).json({
            error: true,
            message: "Article not saved!"
        });
    }

    res.json({
        message: "Success"
    })
});

router.put("/:articleId", (req, res)=>{
    const { articleId } = req.params;
    const { title, author, body } = req.body;
    // console.log(articleId);
    const foundArticle = articlesData.find((article) => article.id == articleId);
    // console.log(article.id);
    if(!foundArticle){
        return res.status(404).send({
            error: true,
            message: "Article not found!"
        });
    }

    let updatedArticle = null;

    const updatedArticles = articlesData.map((article)=>{
        if(article.id == articleId){
            updatedArticle = {
                ...article,
                title,
                author,
                body
            };
            return updatedArticle;
        }
        return article;
    });
    const isSaved = save(updatedArticles);

    if(!isSaved){
        return res.status(500).json({
            error: true,
            message: "Article not saved!"
        });
    }

    res.status(201).json(updatedArticle)
});

router.delete("/:articleId", (req, res)=>{
    const { articleId } = req.params;
    const { title, author, body } = req.body;
    // console.log(articleId);
    const foundArticle = articlesData.find((article) => article.id == articleId);
    // console.log(article.id);
    if(!foundArticle){
        return res.status(404).send({
            error: true,
            message: "Article not found!"
        });
    }
    const filteredArticles = articlesData.filter((article) => article.id == articleId);

    const isSaved = save(filteredArticles)

    if(!isSaved){
        return res.status(500).send({
            error: true,
            message: "Article not saved!"
        });
    }

    res.status(201).json({
        message: "Success"
    })
});

module.exports = router;