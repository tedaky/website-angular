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
 * Create and set columns for the table 'page_meta'
 */
exports.up = function (db) {
  return db.createTable('page_meta', {
      page_meta_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      page_meta_key: {
        type: 'string',
        length: 255,
      },
      page_meta_value: {
        type: 'string',
        length: 255,
      },
      page_meta_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      page_meta_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      page_meta_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'page_meta'
 */
exports.down = function (db) {
  return db.dropTable('page_meta')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
