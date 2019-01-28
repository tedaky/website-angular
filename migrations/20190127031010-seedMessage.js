/*jslint node: true */
'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'message'
 * @returns callback
 */
exports.up = function(db, callback) {
  db.insert('message', ['message_description', 'message_seed'], ['API Message!', '20190127031010-seedMessage'], function(err) {
    if (err) return callback(err);
    return callback();
  });
};

/**
 * Remove Seed 'message'
 * @returns callback
 */
exports.down = function(db, callback) {
  db.runSql('DELETE FROM `message` WHERE `message_seed` = ?', ['20190127031010-seedMessage'], function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports._meta = {
  "version": 1
};
