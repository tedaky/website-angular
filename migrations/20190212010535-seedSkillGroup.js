'use strict';

var dbm;
var type;
var seed;

function twoDigits(d) {
  if(0 <= d && d < 10) {
    return '0' + d.toString();
  }
  if(-10 < d && d < 10) {
    return '-0' + (-1 * d).toString();
  }
  return d.toString();
}

Date.prototype.toMysqlFormat = function() {
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
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'Skill Group'
 * @returns callback
 */
exports.up = function(db, callback) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill_group',
    [ 'skill_group_name', 'skill_group_created_at', 'skill_group_modified_at', 'skill_group_seed' ],
    [ 'Project Management', today, today, '20190212010535-seedSkillGroup' ]
  )
  .then(function() {
    return db.insert('skill_group',
      [ 'skill_group_name', 'skill_group_created_at', 'skill_group_modified_at', 'skill_group_seed' ],
      [ 'Software', today, today, '20190212010535-seedSkillGroup' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill_group',
      [ 'skill_group_name', 'skill_group_created_at', 'skill_group_modified_at', 'skill_group_seed' ],
      [ 'Description', today, today, '20190212010535-seedSkillGroup' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill_group',
      [ 'skill_group_name', 'skill_group_created_at', 'skill_group_modified_at', 'skill_group_seed' ],
      [ 'Frameworks', today, today, '20190212010535-seedSkillGroup' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill_group',
      [ 'skill_group_name', 'skill_group_created_at', 'skill_group_modified_at', 'skill_group_seed' ],
      [ 'Languages', today, today, '20190212010535-seedSkillGroup' ]);
  }, function(err) { return err; })
  .then([], function(err) {
    return err;
  });
};

/**
 * Remove Seed 'Skill Group'
 * @returns callback
 */
exports.down = function(db) {
  return db.runSql('DELETE FROM `skill_group` WHERE `skill_seed` = ?', ['20190212010535-seedSkillGroup'])
  .then([], function(err) { return err; });
};

exports._meta = {
  "version": 1
};
