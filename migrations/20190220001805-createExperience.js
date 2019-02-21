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
 * Create and set columns for the table 'experience'
 */
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
      experience_description: {
        type: 'text',
        length: 65535
      },
      experience_order: {
        type: 'int',
        length: 11,
        notNull: true
      },
      experience_position_id: {
        type: 'int',
        length: 11,
        notNull: true,
        foreignKey: {
          name: 'experience_position_id_fk',
          table: 'position',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'position_id'
        }
      },
      experience_company_id: {
        type: 'int',
        length: 11,
        notNull: true,
        foreignKey: {
          name: 'experience_company_id_fk',
          table: 'company',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'company_id'
        }
      },
      experience_start_date: {
        type: 'date',
        notNull: true
      },
      experience_end_date: {
        type: 'date'
      },
      experience_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      experience_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
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

/**
 * Drop the table 'experience'
 */
exports.down = function (db) {
  return db.dropTable('experience')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
