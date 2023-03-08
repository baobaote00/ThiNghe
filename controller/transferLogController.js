const connection = require('../connect');

exports.getAssetTransferLogs = (req, res) => {
  connection.query('SELECT * FROM assettransferlogs', (err, result, fields) => {
    if (err) {
      res.status(400).send(err.sqlMessage);
      return
    };
    res.status(200).send(result);
  });
};

exports.addTransferLog = (req, res) => {
  const { AssetID, TransferDate, FromAssetSN, ToAssetSN, FromDepartmentLocationID, ToDepartmentLocationID } = req.body;

  // Thực hiện truy vấn để insert mới 1 AssetTransferLogs vào bảng AssetTransferLogs
  connection.query(
    'INSERT INTO assettransferlogs (AssetID, TransferDate, FromAssetSN, ToAssetSN, FromDepartmentLocationID, ToDepartmentLocationID) VALUES (?, ?, ?, ?, ?, ?)',
    [AssetID, TransferDate, FromAssetSN, ToAssetSN, FromDepartmentLocationID, ToDepartmentLocationID],
    (error, results, fields) => {
      if (error) {
        // Nếu xảy ra lỗi, trả về mã lỗi 400 và thông báo lỗi
        res.status(400).json({ error: error.message });
      } else {
        // Nếu truy vấn thành công, trả về thông tin của AssetTransferLogs vừa được insert vào
        res.status(200).json({ assetTransferLogs: { ID: results.insertId, AssetID, TransferDate, FromAssetSN, ToAssetSN, FromDepartmentLocationID, ToDepartmentLocationID } });
      }
    }
  );
};