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

Date.prototype.toMysqlDateFormat = function () {
  return this.getUTCFullYear() + '-' +
    twoDigits(1 + this.getUTCMonth()) + '-' +
    twoDigits(this.getUTCDate());
};

Date.prototype.toMysqlDateTimeFormat = function () {
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
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'position'
 */
exports.up = function(db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['position_title', 'position_created_at', 'position_modified_at', 'position_seed'];
  return db.insert('position',
      columns,
      ['Web Developer', today, today, '20190218002405-seedPosition']
    )
    .then(function () {
      return db.insert('position',
        columns,
        ['Front End Team Leader', today, today, '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['Image Detailer', today, today, '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['QA Lead', today, today, '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('position',
        columns,
        ['UX Developer', today, today, '20190218002405-seedPosition']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'position'
 */
exports.down = function(db) {
  return db.runSql('DELETE FROM `position` WHERE `position_seed` = ?', ['20190218002405-seedPosition'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
