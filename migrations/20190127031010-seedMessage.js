/* jslint node: true */
'use strict';

var dbm;
var type;
var seed;

function twoDigits(d) {
  if (0 <= d && d < 10) {
    return '0' + d.toString();
  }
  if (-10 < d && d < 10) {
    return '-0' + (-1 * d).toString();
  }
  return d.toString();
}

Date.prototype.toMysqlFormat = function () {
  return this.getUTCFullYear() + '-' +
    twoDigits(1 + this.getUTCMonth()) + '-' +
    twoDigits(this.getUTCDate()) + ' ' +
    twoDigits(this.getUTCHours()) + ':' +
    twoDigits(this.getUTCMinutes()) + ':' +
    twoDigits(this.getUTCSeconds());
};

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
  var today = new Date().toMysqlFormat();
  var columns = ['message_description', 'message_created_at', 'message_modified_at', 'message_seed'];
  return db.insert('message',
      columns,
      ['API Message!', today, today, '20190127031010-seedMessage']
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
