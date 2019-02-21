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
 * Seed 'skill_group'
 */
exports.up = function (db) {
  var columns = ['skill_group_name', 'skill_group_order', 'skill_group_seed'];
  return db.insert('skill_group',
      columns,
      ['Project Management', 1, '20190212010535-seedSkillGroup']
    )
    .then(function () {
      return db.insert('skill_group',
        columns,
        ['Software', 2, '20190212010535-seedSkillGroup']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_group',
        columns,
        ['Description', 3, '20190212010535-seedSkillGroup']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_group',
        columns,
        ['Frameworks', 4, '20190212010535-seedSkillGroup']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('skill_group',
        columns,
        ['Languages', 5, '20190212010535-seedSkillGroup']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'skill_group'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `skill_group` WHERE `skill_seed` = ?', ['20190212010535-seedSkillGroup'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
