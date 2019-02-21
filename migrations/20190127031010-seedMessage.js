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
 * Seed 'message'
 */
exports.up = function (db) {
  var columns = ['message_description', 'message_seed'];
  return db.insert('message',
      columns,
      ['API Message!', '20190127031010-seedMessage']
    )
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'message'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `message` WHERE `message_seed` = ?', ['20190127031010-seedMessage'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
