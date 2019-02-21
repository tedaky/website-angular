/* jslint node: true */
'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'position'
 */
exports.up = function(db) {
  var columns = ['position_title', 'position_seed'];
  return db.insert('position',
      columns,
      ['Web Developer', '20190218002405-seedPosition']
    )
    .then(function () {
      return db.insert('position',
        columns,
        ['Front End Team Lead', '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['Image Detailer', '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['Quality Assurance Lead', '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['UX Developer', '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['Software Developer', '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'position'
 */
exports.down = function(db) {
  return db.runSql('DELETE FROM `position` WHERE `position_seed` = ?', ['20190218002405-seedPosition'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
