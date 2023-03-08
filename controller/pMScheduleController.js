const connection = require('../connect');


exports.getPMScheduleTypes = (req, res) => {
  // execute query to get the list of PM schedule types
  connection.query('SELECT * FROM pmscheduletypes', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of PM schedule types in case of success
      res.status(200).json(data);
    }
  });
}

exports.getPMScheduleModels = (req, res) => { 
  // execute query to get the list of PM schedule models 
  connection.query('SELECT * FROM pmschedulemodels', (err, data) => { 
    if (err) { 
      // return error message in case of failure 
      res.status(400).send(`Error: ${err.message}`); 
    } else { 
      // return the list of PM schedule models in case of success 
      res.status(200).json(data); 
    } 
  }); 
} 
