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
 * Create and set columns for the table 'company'
 */
exports.up = function (db) {
  return db.createTable('company', {
      company_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      company_name: {
        type: 'string',
        length: 255,
        notNull: true
      },
      company_link: {
        type: 'string',
        length: 75
      },
      company_logo: {
        type: 'string',
        length: 75
      },
      company_description: {
        type: 'text',
        length: 65535
      },
      company_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      company_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      company_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'company'
 */
exports.down = function (db) {
  return db.dropTable('company')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
