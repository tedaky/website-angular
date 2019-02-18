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

Date.prototype.toMysqlDateTimeFormat = function () {
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
 * Seed 'Frameworks'
 */
exports.up = function (db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_created_at', 'skill_item_modified_at', 'skill_item_seed'];
  return db.insert('skill_item',
      columns,
      ['AngularJS', 65, 1, 4, today, today, '20190212030837-seedFrameworks']
    )
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Angular v4+', 70, 2, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['WordPress', 73, 3, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Magento 2', 68, 4, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['AspDotNetStoreFront', 64, 5, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['JQuery', 80, 6, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Bootstrap', 82, 7, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Foundation', 82, 8, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Material Design', 74, 9, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Apache 2.2/2.4', 69, 10, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Microsoft IIS', 62, 11, 4, today, today, '20190212030837-seedFrameworks']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Frameworks'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill_item` WHERE `skill_item_seed` = ?', ['20190212030837-seedFrameworks'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
