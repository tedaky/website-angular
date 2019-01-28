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
exports.up = function(db, callback) {
  db.createTable('message', {
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
    message_seed: {
      type: 'string',
      length: 75
    }
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

/**
 * Drop the table 'message'
 */
exports.down = function(db, callback) {
  db.dropTable('message', function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports._meta = {
  "version": 1
};
