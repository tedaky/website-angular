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
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

/**
 * Seed 'experience'
 */
exports.up = function (db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['experience_description', 'experience_order', 'experience_position_id', 'experience_company_id', 'experience_start_date', 'experience_end_date', 'experience_created_at', 'experience_modified_at', 'experience_seed'];
  return db.insert('experience',
      columns,
      ['experience_description', 1, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']
    )
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 2, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 3, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 4, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 5, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 6, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['experience_description', 7, 1, 1, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'experience'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `experience` WHERE `experience_seed` = ?', ['20190220001813-seedExperience'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
