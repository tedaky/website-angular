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
 * Create and set columns for the table 'version'
 */
exports.up = function (db) {
  return db.createTable('version', {
      version_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      version_name: {
        type: 'string',
        length: 255,
        notNull: true
      },
      version_image: {
        type: 'string',
        length: 128,
        notNull: true
      },
      version_link: {
        type: 'string',
        length: 75
      },
      version_order: {
        type: 'int',
        length: 11,
        defaultValue: 0,
        notNull: true
      },
      version_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      version_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      version_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'version'
 */
exports.down = function (db) {
  return db.dropTable('version')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
