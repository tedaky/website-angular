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
 * Seed 'company'
 */
exports.up = function (db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['company_name', 'company_link', 'company_logo', 'company_description', 'company_created_at', 'company_modified_at', 'company_seed'];
  return db.insert('company',
      columns,
      ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']
    )
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['company_name', 'company_link', 'company_logo', 'company_description', today, today, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'company'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `company` WHERE `company_seed` = ?', ['20190219124023-seedCompany'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
