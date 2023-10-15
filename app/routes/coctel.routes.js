module.exports = app => {
    const Coctels = require("../controller/coctel.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Coctel
    router.post("/", Coctels.create);

    app.use('/api/Coctels', router);
};