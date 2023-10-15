const express = require("express");
const cors = require("cors");
const app = express();
const Coctel = require("./app/models/coctel.model.js");
const path = require('path');

const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:8081"
};

/*app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))*/

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(cors(corsOptions));
  
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then(response => response.json())
.then(data =>{
     //console.log(data.drinks);
     //res.json(data.drinks);
     data.drinks.forEach(element => {
         // Create a Coctel
     const coctel = new Coctel({
    name: element.strDrink,
    alcohol: element.strAlcoholic,
    glass: element.strGlass,
    instruccion: element.strInstructions,
    imgURL: element.strDrinkThumb,
    ingredient1: element.strIngredient1,
    ingredient2: element.strIngredient2,
    ingredient3: element.strIngredient3,
    ingredient4: element.strIngredient4,
    ingredient5: element.strIngredient5,
    ingredient6: element.strIngredient6,
    /*measure1: element.strMeasure1,
    measure2: element.strMeasure2,
    measure3: element.strMeasure3,
    measure4: element.strMeasure4,
    measure5: element.strMeasure5,
    measure6: element.strMeasure6*/
    });

   // Save Coctel in the database
   Coctel.create(coctel, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Coctel."
      });
    //else res.send(data);
  });

 });
}) 
})

require("./app/routes/coctel.routes.js")(app); 

app.listen(PORT, () =>{
    console.log(`server listening on http://localhost:${PORT}`);
} )