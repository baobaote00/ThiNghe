const app = require('../src/index'); // assuming that the express app is defined in a separate file
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Asset API', () => {
  describe('PUT /assets/:id', () => {
    it('should update an existing asset', done => {
      const updatedAsset =
      {
        "ID": 1,
        "AssetSN": "05/04/0004",
        "AssetName": "Toyota Hilux FAF321",
        "DepartmentLocationID": 3,
        "EmployeeID": 5,
        "AssetGroupID": 4,
        "Description": "",
        "WarrantyDate": "2022/12/31 23:59:59"
      }; // create an updated asset object here
      request(app)
        .put('/assets/1') // replace with actual id of the asset to update
        .send(updatedAsset)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.have.property('message').equal('Asset successfully updated');
          done();
        });
    });

    it('should fail to update an asset if required fields are missing', done => {
      const invalidAsset =
      {
        "ID": 1,
        "AssetSN": "05/04/0004",
        "AssetName": "Toyota Hilux FAF321",
        "DepartmentLocationID": 3,
        "EmployeeID": 5,
        "AssetGroupID": 4,
        "Description": "",
        "WarrantyDate": "2022/12/31 23:59:59"
      }; // create an invalid asset object here
      request(app)
        .put('/assets/1')
        .send(invalidAsset)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.errors).to.exist;
          done();
        });
    });
  });
});
