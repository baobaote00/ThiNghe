const connection = require('../connect');

exports.getPMTasks = (req, res) => {
  // execute query to get the list of PM tasks
  connection.query('SELECT * FROM pmtasks', (err, data) => {
    if (err) {
      // return error message in case of failure
      res.status(400).send(`Error: ${err.message}`);
    } else {
      // return the list of PM tasks in case of success
      res.status(200).json(data);
    }
  });
}

exports.addPMTask = (req, res) => {
  let query = connection.query('INSERT INTO pmtasks (AssetID, TaskID, PMScheduleTypeID, ScheduleDate, ScheduleKilometer, TaskDone) VALUES (?,?,?,?,?,?)', [req.body.AssetID, req.body.TaskID, req.body.PMScheduleTypeID, req.body.ScheduleDate, req.body.ScheduleKilometer, req.body.TaskDone], (error, results, fields) => {
    if (error) {
      res.status(400).send(error.sqlMessage);
      return;
    };
    console.log('Row inserted into the table successfully.');
    res.status(200).send(results);
  });
}

exports.updatePMTask = (req, res) => {
  const id = req.body.ID
  const { AssetID, TaskID, PMScheduleTypeID, ScheduleDate, ScheduleKilometer, TaskDone } = req.body;

  if (!id) {
    return res.status(400).send('Missing PMTask ID');
  };

  connection.query('UPDATE pmtasks SET AssetID = ?, TaskID = ?, PMScheduleTypeID = ?, ScheduleDate = ?, ScheduleKilometer = ?, TaskDone = ? WHERE ID = ?', [AssetID, TaskID, PMScheduleTypeID, ScheduleDate, ScheduleKilometer, TaskDone, id], (error, results, fields) => {
    if (error) {
      res.status(400).send(error.sqlMessage);
      return
    };
    console.log('Row updated successfully.');
    res.status(200).send(results);
  });
}