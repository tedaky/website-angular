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
 * Create and set columns for the table 'skill_item'
 */
exports.up = function (db) {
  return db.createTable('skill_item', {
      skill_item_id: {
        type: 'int',
        length: 11,
        notNull: true,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      skill_item_name: {
        type: 'string',
        length: 255,
        notNull: true
      },
      skill_item_level: {
        type: 'decimal',
        length: [11, 2]
      },
      skill_item_order: {
        type: 'int',
        length: 11
      },
      skill_item_skill_group_id: {
        type: 'int',
        length: 11,
        foreignKey: {
          name: 'skill_item_skill_group_id_fk',
          table: 'skill_group',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'skill_group_id'
        }
      },
      skill_item_created_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      skill_item_modified_at: {
        type: 'datetime',
        notNull: true,
        defaultValue: 'CURRENT_TIMESTAMP'
      },
      skill_item_seed: {
        type: 'string',
        length: 75
      }
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Drop the table 'skill_item'
 */
exports.down = function (db) {
  return db.dropTable('skill_item')
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
