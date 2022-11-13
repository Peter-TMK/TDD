const fs = require("fs");
const path = require("path");

function save(articlesData){
    try{
        fs.writeFileSync(path.join(__dirname, "..", "fixtures", "articles.json"), JSON.stringify(articlesData));
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    save
}