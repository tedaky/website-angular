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
 * Seed 'Description'
 */
exports.up = function (db) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill_item',
      ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
      ['Texture Art', 70, 1, 3, today, today, '20190212030820-seedDescription']
    )
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['3D Art', 73, 2, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Environment Design', 78, 3, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Game Design', 80, 4, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Game Development', 80, 5, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Web Development', 82, 6, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Web Design', 82, 7, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Web Performance', 84, 8, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['Web Analytics', 78, 9, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'],
        ['User Interface Design', 82, 10, 3, today, today, '20190212030820-seedDescription']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Description'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212030820-seedDescription'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
