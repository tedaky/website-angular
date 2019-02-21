/* jslint node: true */
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
 * Create and set columns for the table 'school'
 */
exports.up = function(db) {
  return db.createTable('school', {
    school_id: {
      type: 'int',
      length: 11,
      notNull: true,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    school_name: {
      type: 'string',
      length: 255,
      notNull: true
    },
    school_link: {
      type: 'string',
      length: 255
    },
    school_logo: {
      type: 'string',
      length: 255
    },
    school_created_at: {
      type: 'datetime',
      notNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    school_modified_at: {
      type: 'datetime',
      notNull: true,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    school_seed: {
      type: 'string',
      length: 75
    }
  })
  .then([], function (err) {
    return err;
  });
};

/**
 * Drop the table 'school'
 */
exports.down = function(db) {
  return db.dropTable('school')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
