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
 * Create and set columns for the table 'education'
 */
exports.up = function (db) {
  return db.createTable('education', {
      education_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      education_degree: {
        type: 'string',
        length: 255,
        notNull: true
      },
      education_field: {
        type: 'string',
        length: 255,
        notNull: true
      },
      education_cgpa: {
        type: 'decimal',
        length: [11, 2]
      },
      education_order: {
        type: 'int',
        length: 11,
        notNull: true
      },
      education_school_id: {
        type: 'int',
        length: 11,
        notNull: true,
        foreignKey: {
          name: 'education_school_id_fk',
          table: 'school',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'school_id'
        }
      },
      education_start_date: {
        type: 'date',
        notNull: true
      },
      education_end_date: {
        type: 'date'
      },
      education_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      education_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      education_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'education'
 */
exports.down = function (db) {
  return db.dropTable('education')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
