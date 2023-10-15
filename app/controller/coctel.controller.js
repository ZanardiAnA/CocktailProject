const Coctel = require("../models/coctel.model.js");

// Create and Save a new Coctel
    exports.create = (req, res) => {
        // Validate request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }
      
        // Create a Coctel
        const coctel = new Coctel({
          name: req.body.name,
          alcohol: req.body.alcohol,
          glass: req.body.glasslass,
          instruccion: req.body.instruction,
          imgURL: req.body.imgURL,
          ingredient1: req.body.ingredient1,
          ingredient2: req.body.ingredient2,
          ingredient3: req.body.ingredient3,
          ingredient4: req.body.ingredient4,
          ingredient5: req.body.ingredient5,
          ingredient6: req.body.ingredient6,
          /*measure1: req.body.measure1,
          measure2: req.body.measure2,
          measure3: req.body.measure3,
          measure4: req.body.measure4,
          measure5: req.body.measure5,
          measure6: req.body.measure6*/
        });

        // Save Coctel in the database
        Coctel.create(coctel, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Coctel."
            });
          else res.send(data);
        });
      };
