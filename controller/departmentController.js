const connection = require('../connect');

exports.getDepartmentLocations = (req, res) => {
  // execute query to get the list of department locations
  connection.query('SELECT * FROM departmentlocations', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of department locations in case of success
      res.status(200).json(data);
    }
  });
}

exports.getDepartments = (req, res) => {
  // execute query to get the list of department locations
  connection.query('SELECT * FROM departments', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of department locations in case of success
      res.status(200).json(data);
    }
  });
}