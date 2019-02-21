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
 * Seed 'Project Management'
 */
exports.up = function (db) {
  var columns = ['skill_item_name', 'skill_item_level', 'skill_item_order', 'skill_item_skill_group_id', 'skill_item_seed'];
  return db.insert('skill_item',
      columns,
      ['Git', 80, 1, 1, '20190212025249-seedProjectManagement']
    )
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['GitHub', 74, 2, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Bitbucket', 74, 3, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Team Foundation Server (TFS)', 68, 4, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['NodeJS', 78, 5, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Composer', 62, 6, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Homebrew', 60, 7, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_item',
        columns,
        ['Trello', 78, 8, 1, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Project Management'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill_item` WHERE `skill_item_seed` = ?', ['20190212025249-seedProjectManagement'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
