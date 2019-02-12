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
 * Seed 'Software'
 * @returns callback
 */
exports.up = function(db, callback) {
  var today = new Date().toMysqlFormat();
  return db.insert('skill',
    [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
    [ 'Unreal Engine', 66, 2, today, today, '20190212030801-seedSoftware' ]
  )
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Unity', 60, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Photoshop', 77, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'xNormal', 80, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ '3DS Max', 75, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Blender', 55, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Substance Designer', 73, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'VS Code', 74, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Visual Studio', 60, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then(function() {
    return db.insert('skill',
      [ 'skill_name', 'skill_level', 'skill_skill_group_id', 'skill_created_at', 'skill_modified_at', 'skill_seed' ],
      [ 'Xcode', 55, 2, today, today, '20190212030801-seedSoftware' ]);
  }, function(err) { return err; })
  .then([], function(err) { return err; });
};

/**
 * Remove Seed 'Software'
 * @returns callback
 */
exports.down = function(db) {
  return db.runSql('DELETE FROM `skill` WHERE `skill_seed` = ?', ['20190212030801-seedSoftware'])
  .then([], function(err) { return err; });
};

exports._meta = {
  "version": 1
};
