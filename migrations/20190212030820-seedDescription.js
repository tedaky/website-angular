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
 * Seed 'Description'
 * @returns callback
 */
exports.up = function(db, callback) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill',
    [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
    [ 'Texture Art', 70, 3, today, today, '20190212030820-seedDescription' ]
  )
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ '3D Art', 73, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Environment Design', 78, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Game Design', 80, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Game Development', 80, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Web Development', 82, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Web Design', 82, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Web Performance', 84, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Web Analytics', 78, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'User Interface Design', 82, 3, today, today, '20190212030820-seedDescription' ]);
  }, function(err) { return err; })
  .then([], function(err) { return err; });
};

/**
 * Remove Seed 'Description'
 * @returns callback
 */
exports.down = function(db) {
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212030820-seedDescription'])
  .then([], function(err) { return err; });
};

exports._meta = {
  "version": 1
};
