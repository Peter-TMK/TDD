const express = require("express");
const request = require("supertest");
const articleRoute = require("../routes/article.route")

const app = express();
app.use(express.json());

app.use("/api/articles", articleRoute);

describe("Integration test for the articles API", ()=>{
    it("should GET /api/articles - success - get all articles", async ()=>{
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

    it("should POST /api/articles - failure on valid post body", async ()=>{
        const { body, statusCode } = await request(app).post("/api/articles").send({
            title: "",
            author: "Lorenzo ipsumion lol"
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
});