const express = require("express");
const request = require("supertest");
const articleRoute = require("../routes/article.route")

const app = express();
app.use(express.json());

app.use("/api/articles", articleRoute);

describe("Integration test for the articles API", ()=>{
    it("should GET /api/articles - SUCCESS - get all articles", async ()=>{
        const {body, statusCode } = await request(app).get("/api/articles");

        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    _id: expect.any(String),
                    title: expect.any(String),
                    author: expect.any(String),
                    state: expect.any(String),
                    tags: expect.any(Array),
                    body: expect.any(String)
                })
            ])
        );
        expect(statusCode).toBe(200)
    });

    it("should POST /api/articles - FAILURE on valid post body", async ()=>{
        const { body, statusCode } = await request(app).post("/api/articles").send({
            title: "",
            author: "Lorenzo ipsumion lol",
            body: "ahkjssjls sljlsma klklkk"
        });

        expect(statusCode).toBe(400);
        expect(body).toEqual({
            errors: [
                {
                    location: "body",
                    msg: "Article's title is required",
                    param: "title",
                    value: ""
                }
            ]
        });
    });

    it("should POST /api/articles - SUCCESS on valid post body", async ()=>{
        const { body, statusCode } = await request(app).post("/api/articles").send({
            title: "fugit voluptas sed molestias voluptatem...",
            author: "635eddc34dc4ea45291cf8de",
            body: "eos voluptas et aut odit natus earum\naspernatur..."
        });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
            message: "Success"
        });
    });

    it("should UPDATE /api/articles/:articleId - FAILURE on valid updating body", async ()=>{
        const { body, statusCode } = await request(app).put("/api/articles/6000").send({
            title: "fugit voluptas sed mole ...",
            author: "635eddc34dc4ea98561cf7t4"
    });
        expect(statusCode).toBe(404);
        expect(body).toEqual({
            error: true,
            message: "Article not found!"
        });
    });
});