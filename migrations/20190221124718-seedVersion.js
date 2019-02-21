/* jslint node: true */
'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'version'
 */
exports.up = function (db) {
  var columns = ['version_name', 'version_image', 'version_link', 'version_order', 'version_seed'];
  return db.insert('version',
      columns,
      ['AMP', 'amp.png', null, 1, '20190221124718-seedVersion']
    )
    .then(function () {
      return db.insert('version',
        columns,
        ['AngularJS', 'angularjs.png', null, 2, '20190221124718-seedVersion']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('version',
        columns,
        ['Angular', 'angular.png', null, 3, '20190221124718-seedVersion']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('version',
        columns,
        ['ES6', 'javascript-es6.png', null, 4, '20190221124718-seedVersion']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('version',
        columns,
        ['ReactJS', 'reactjs.png', null, 5, '20190221124718-seedVersion']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'version'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `version` WHERE `version_seed` = ?', ['20190221124718-seedVersion'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
