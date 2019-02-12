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
 * Seed 'Project Management'
 */
exports.up = function (db) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill',
      ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
      ['Git', 80, 1, 1, today, today, '20190212025249-seedProjectManagement']
    )
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['GitHub', 74, 2, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Bitbucket', 74, 3, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Team Foundation Server (TFS)', 68, 4, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['NodeJS', 78, 5, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Composer', 62, 6, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Homebrew', 60, 7, 1, today, today, '20190212025249-seedProjectManagement']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill',
        ['skill_name', 'skill_level', 'skill_order', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed'],
        ['Trello', 78, 8, 1, today, today, '20190212025249-seedProjectManagement']);
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
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212025249-seedProjectManagement'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
