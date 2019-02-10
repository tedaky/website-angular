/*jslint node: true */
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
 * Create and set columns for the table 'message'
 */
exports.up = function(db) {
  return db.createTable('message', {
    message_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    message_description: {
      type: 'string',
      length: 255
    },
    message_created_at: {
      type: 'datetime'
    },
    message_modified_at: {
      type: 'datetime'
    },
    message_seed: {
      type: 'string',
      length: 75
    }
  })
  .then([], function(err) {
    return err;
  });
};

/**
 * Drop the table 'message'
 */
exports.down = function(db, callback) {
  return db.dropTable('message')
    .then([], function(err) {
      return err;
  });
};

exports._meta = {
  "version": 1
};
