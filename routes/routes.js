const express = require('express');
const router = express.Router();
const assetController = require('../controller/assetController');
const transferLogController = require('../controller/transferLogController');
const departmentController = require('../controller/departmentController');
const pMTaskController = require('../controller/pMTaskController');
const pMScheduleController = require('../controller/pMScheduleController');

// Lấy danh sách các Assets từ bảng Assets
router.get('/GetAssets', assetController.getAssets);
//Lấy danh sách các Assets Group từ bảng Asset Group
router.get('/GetAssetGroups', assetController.getAssetGroups);
//Lấy danh sách các Location từ bảng Location
router.get('/GetLocations', assetController.getAssetGroups);
// Insert 1 Asset mới vào bảng Assets
router.post('/AddAsset', assetController.addAsset);
//Update Asset 
router.put('/UpdateAsset', assetController.updateAsset);
//Lấy danh sách các photo từ bảng AssetPhotos (Image)
router.get('/GetAssetPhotos/:assetID', assetController.getAssetPhotos);
//Insert 1 ảnh mới vào bảng AssetPhotos(Image)
router.post('/AddAssetPhoto', assetController.addAssetPhoto);
// Update 1 ảnh mới vào bảng AssetPhotos(Image)
router.put('/UpdateAssetPhoto', assetController.updateAssetPhoto);
// Lấy danh sách AssetTransferLogs từ bảng AssetTransferLogs
router.get('/GetAssetTransferLogs', transferLogController.getAssetTransferLogs);
//Insert 1  AssetTransferLogs mới vào bảng AssetTransferLogs
router.post('/AddTransferLog', transferLogController.addTransferLog);
// Lấy danh sách các DepartmentLocations từ bảng DepartmentLocations
router.get('/GetDepartmentLocations', departmentController.getDepartmentLocations);
// Lấy danh sách các Department từ bảng Departments
router.get('/GetDepartments', departmentController.getDepartments);
// Lấy danh sách các Employee  từ bảng Employees
router.get('/GetEmployees', assetController.getEmployees);
// Lấy danh sách các AssetOdometer  từ bảng AssetOdometers
router.get('/GetAssetOdometers', assetController.getAssetOdometers);
// Lấy danh sách các PMTask từ bảng PMTasks
router.get('/GetPMTasks', pMTaskController.getPMTasks);
// Insert 1 PMTask mới vào bảng PMTasks
router.post('/AddPMTask', pMTaskController.addPMTask);
// Update PMTask 
router.put('/UpdatePMTask', pMTaskController.updatePMTask);
// Lấy danh sách các Task  từ bảng Tasks
router.get('/GetTasks', assetController.getTasks);
// Lấy danh sách các PMScheduleType  từ bảng PMScheduleTypes
router.get('/GetPMScheduleTypes', pMScheduleController.getPMScheduleTypes);
// Lấy danh sách các PMScheduleModel  từ bảng PMScheduleModels
router.get('/GetPMScheduleModels', pMScheduleController.getPMScheduleModels);

module.exports = router;
