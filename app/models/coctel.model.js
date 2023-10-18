const sql = require("./db.js");

// constructor
const Coctel = function(coctel) {
  this.name = coctel.name;
  this.imgURL = coctel.imgURL;
  this.alcohol = coctel.alcohol;
  this.glass = coctel.glass;
  this.instruccion = coctel.instruccion;
  this.ingredient1 = coctel.ingredient1;
  this.ingredient2 = coctel.ingredient2;
  this.ingredient3 = coctel.ingredient3;
  this.ingredient4 = coctel.ingredient4;
  this.ingredient5 = coctel.ingredient5;
  this.ingredient6 = coctel.ingredient6;
 /* this.measure1 = coctel.measure1;
  this.measure2 = coctel.measure2;
  this.measure3 = coctel.measure3;
  this.measure4 = coctel.measure4;
  this.measure5 = coctel.measure5;
  this.measure6 = coctel.measure6;*/
};

Coctel.create = (newCoctel, result) => {
  //console.log("INSERT INTO coctel SET ?", newCoctel);
  sql.query("INSERT INTO coctel SET ?", newCoctel, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    //console.log("created Coctel: ", { id: res.insertId, ...newCoctel });
    result(null, { id: res.insertId, ...newCoctel });
  });
};


Coctel.getAll = (name, result) => {
  let query = "SELECT * FROM coctel";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("coctels: ", res);
    result(null, res);
  });
};

module.exports = Coctel;