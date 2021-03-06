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
 * Seed 'Languages'
 */
exports.up = function (db) {
  var columns = ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_seed'];
  return db.insert('skill_item',
      columns,
      ['TypeScript', 70, 1, 5, '20190212030852-seedLanguages']
    )
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['JavaScript (Vanilla/ES5+)', 80, 2, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['SASS', 85, 3, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['CSS', 95, 4, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['HTML', 95, 5, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['PHP 5/7', 66, 6, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['ASP.NET', 60, 7, 5, '20190212030852-seedLanguages']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Relational Databases (SQL Server / MySQL / Oracle)', 65, 8, 5, '20190212030852-seedLanguages']);
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
  return db.runSql('DELETE FROM `skill_item` WHERE `skill_item_seed` = ?', ['20190212030852-seedLanguages'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
