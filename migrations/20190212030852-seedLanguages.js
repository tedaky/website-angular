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
 * Seed 'Languages'
 */
exports.up = function (db) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill',
      ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
      ['TypeScript', 70, 1, 5, today, today, '20190212030852-seedLanguages']
    )
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['JavaScript (Vanilla/ES5+)', 80, 2, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['SASS', 85, 3, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['CSS', 95, 4, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['HTML', 95, 5, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['PHP 5/7', 66, 6, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['ASP.NET', 60, 7, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Relational Databases (SQL Server / MySQL / Oracle)', 65, 8, 5, today, today, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Languages'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212030852-seedLanguages'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
