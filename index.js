const express = require("express");
const router = express.Router();

const pokemons = [];
var id = 1;

router
  .route("/pokemons")
  .get(() => {
    return res.json(pokemons);
  })
  .post(() => {
    pokemons.push({
      id: 1,
    });
    return res.json();
  });

router
  .route("/pokemons/:id")
  .get((req, res) => {
    const poke = pokemons.find(val => val.id === Number(req.params.id));
    return res.json(poke);
  })
  .post((req, res) => {
    return res.json("/items");
  })
  .delete((req, res) => {
    pokemons.splice(poke.id, 1);
    return res.json("/items/:id");
  });

module.exports = router;