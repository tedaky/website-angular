'use strict';

var dbm;
var type;
var seed;

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
 * Create and set columns for the table 'skill_group'
 */
exports.up = function(db) {
  return db.createTable('skill_group', {
    skill_group_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    skill_group_name: {
      type: 'string',
      length: 255
    },
    skill_group_created_at: {
      type: 'datetime'
    },
    skill_group_modified_at: {
      type: 'datetime'
    },
    skill_group_seed: {
      type: 'string',
      length: 75
    }
  })
  .then([], function(err) { return err; });
};

/**
 * Drop the table 'skill_group'
 */
exports.down = function(db, callback) {
  return db.dropTable('skill_group')
  .then([], function(err) { return err; });
};

exports._meta = {
  "version": 1
};
