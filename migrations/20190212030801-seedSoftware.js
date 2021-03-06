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
 * Seed 'Software'
 */
exports.up = function (db) {
  var columns = ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_seed'];
  return db.insert('skill_item',
      columns,
      ['Unreal Engine', 66, 1, 2, '20190212030801-seedSoftware']
    )
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Unity', 60, 2, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Photoshop', 77, 3, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['xNormal', 80, 4, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['3DS Max', 75, 5, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Blender', 55, 6, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Substance Designer', 73, 7, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['VS Code', 74, 8, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Visual Studio', 60, 9, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Xcode', 55, 10, 2, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Software'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill_item` WHERE `skill_item_seed` = ?', ['20190212030801-seedSoftware'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
