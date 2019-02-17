/* jslint node: true */
'use strict';

var dbm;
var type;
var seed;

function twoDigits(d) {
  if (0 <= d && d < 10) {
    return '0' + d.toString();
  }
  if (-10 < d && d < 10) {
    return '-0' + (-1 * d).toString();
  }
  return d.toString();
}

Date.prototype.toMysqlFormat = function () {
  return this.getUTCFullYear() + '-' +
    twoDigits(1 + this.getUTCMonth()) + '-' +
    twoDigits(this.getUTCDate()) + ' ' +
    twoDigits(this.getUTCHours()) + ':' +
    twoDigits(this.getUTCMinutes()) + ':' +
    twoDigits(this.getUTCSeconds());
};

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
  var today = new Date().toMysqlFormat();
  return db.insert('skill_item',
      ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
      ['Unreal Engine', 66, 1, 2, today, today, '20190212030801-seedSoftware']
    )
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Unity', 60, 2, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Photoshop', 77, 3, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['xNormal', 80, 4, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['3DS Max', 75, 5, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Blender', 55, 6, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Substance Designer', 73, 7, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['VS Code', 74, 8, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Visual Studio', 60, 9, 2, today, today, '20190212030801-seedSoftware']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Xcode', 55, 10, 2, today, today, '20190212030801-seedSoftware']);
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
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212030801-seedSoftware'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
