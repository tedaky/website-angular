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
 * Create and set columns for the table 'skill'
 */
exports.up = function (db) {
  return db.createTable('skill', {
      skill_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      skill_name: {
        type: 'string',
        length: 255,
        notNull: true
      },
      skill_level: {
        type: 'decimal',
        length: [11, 2]
      },
      skill_order: {
        type: 'int',
        length: 11
      },
      skill_skill_group_id: {
        type: 'int',
        length: 11,
        foreignKey: {
          name: 'skill_group_id_skill_id_fk',
          table: 'skill_group',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'skill_group_id'
        }
      },
      skill_created_at: {
        type: 'datetime'
      },
      skill_modified_at: {
        type: 'datetime'
      },
      skill_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'skill'
 */
exports.down = function (db) {
  return db.dropTable('skill')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};