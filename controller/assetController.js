const connection = require('../connect');
const { validationResult } = require('express-validator');

exports.getAssets = (req, res) => {
  // execute query
  connection.query('SELECT * FROM assets', (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
}

exports.addAsset = (req, res) => {
  let query = connection.query('INSERT INTO assets (AssetSN, AssetName, DepartmentLocationID, EmployeeID, AssetGroupID, Description, WarrantyDate) VALUES (?,?,?,?,?,?,?)', [req.body.AssetSN, req.body.AssetName, req.body.DepartmentLocationID, req.body.EmployeeID, req.body.AssetGroupID, req.body.Description, req.body.WarrantyDate], (error, results, fields) => {
    if (error) {
      res.status(400).send(error.sqlMessage);
      return
    };
    console.log('Row inserted into the table successfully.');
  });
}

exports.updateAsset = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  connection.query('UPDATE assets SET AssetSN = ?, AssetName = ?, DepartmentLocationID=?, EmployeeID=?, AssetGroupID=?, Description=?, WarrantyDate=? WHERE ID = ?', [req.body.AssetSN, req.body.AssetName, req.body.DepartmentLocationID, req.body.EmployeeID, req.body.AssetGroupID, req.body.Description, req.body.WarrantyDate, req.body.ID], (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
};

exports.getAssetGroups = (req, res) => {
  connection.query('SELECT ID, Name FROM assetgroups', (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
};

exports.getLocations = (req, res) => {
  connection.query('SELECT ID, Name FROM locations', (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
};

exports.getAssetPhotos = (req, res) => {
  const assetID = req.params.assetID;
  connection.query('SELECT * FROM assetphotos WHERE AssetID = ?', [assetID], (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    if (result.length === 0) {
      res.status(404).send(`Not found AssetID: ${assetID}`);
      return
    }
    res.status(200).send(result);
  });
};

// Add Asset Photo to the database
exports.addAssetPhoto = (req, res) => {
  const assetId = req.body.AssetID;
  const assetPhoto = req.body.AssetPhoto;

  // Execute query to insert new Asset Photo
  connection.query('INSERT INTO AssetPhotos (AssetID, AssetPhoto) VALUES (?, ?)', [assetId, assetPhoto], (err, result) => {
    if (err) {
      res.status(400).send("Fail: " + err.sqlMessage);
      return;
    }
    res.status(200).send("Success");
  });
};

exports.updateAssetPhoto = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const assetPhotoId = req.body.ID;
  const assetID = req.body.AssetID;
  const assetPhoto = req.body.AssetPhoto;

  connection.query(`UPDATE AssetPhotos SET AssetID = ?, AssetPhoto = ?
  WHERE ID = ?`, [assetID, assetPhoto, assetPhotoId], (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
};

exports.getEmployees = (req, res) => {
  // execute query to get the list of employees
  connection.query('SELECT * FROM employees', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of employees in case of success
      res.status(200).json(data);
    }
  });
}

exports.getAssetOdometers = (req, res) => {
  // execute query to get the list of asset odometers
  connection.query('SELECT * FROM assetodometers', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of asset odometers in case of success
      res.status(200).json(data);
    }
  });
}

exports.getTasks = (req, res) => {
  // execute query to get the list of tasks
  connection.query('SELECT * FROM tasks', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of tasks in case of success
      res.status(200).json(data);
    }
  });
}