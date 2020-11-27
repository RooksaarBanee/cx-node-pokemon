const express = require("express");
const app = express();

const bodyParser = require("body-parser");

var jsonfile = require("jsonfile");
for (i=0; i < 100; i++){
    jsonfile.writeFile("pokedex-20201127.json", "id :" + i + "square :" + i*i);
};

app.use("/pokemons", pokeRoutes);

app.use(bodyParser.json());

app.get("/pokemons", (req, res) => {
    return res.json("Pika!");
});

app.get("/pokemon/:id", (req, res) => {
    return res.json("pokemon attrapé les tous!")
});

app.post("/items", (res, res) => {
    return res.json("les ithèmes");
})

app.listen(4242, () => {
    console.log("Server is listening on http://localhost:4242");
});