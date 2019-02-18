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

exports.up = function (db) {
  return db.createTable('experience', {
      experience_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      experience_title: {
        type: 'string',
        length: 255,
        notNull: true
      },
      experience_company: {
        type: 'string',
        length: 255,
        notNull: true
      },
      experience_link: {
        type: 'string',
        length: 75,
        notNull: true
      },
      experience_logo_src: {
        type: 'string',
        length: 255,
        notNull: true
      },
      experience_description: {
        type: 'text',
        length: 65535,
        notNull: true
      },
      experience_order: {
        type: 'int',
        length: 11
      },
      experience_start_date: {
        type: 'date'
      },
      experience_end_date: {
        type: 'date'
      },
      experience_created_at: {
        type: 'datetime'
      },
      experience_modified_at: {
        type: 'datetime'
      },
      experience_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

exports.down = function (db) {
  return db.dropTable('experience')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
