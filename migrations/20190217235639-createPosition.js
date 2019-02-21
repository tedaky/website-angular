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
 * Create and set columns for the table 'position'
 */
exports.up = function (db) {
  return db.createTable('position', {
      position_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      position_title: {
        type: 'string',
        length: 75,
        notNull: true
      },
      position_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      position_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      position_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'position'
 */
exports.down = function (db) {
  return db.dropTable('position')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
