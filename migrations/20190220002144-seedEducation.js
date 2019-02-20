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
 * Seed 'education'
 */
exports.up = function (db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['education_degree', 'education_field', 'education_cgpa', 'education_order', 'education_school_id', 'education_start_date', 'education_end_date', 'education_created_at', 'education_modified_at', 'education_seed'];
  return db.insert('education',
      columns,
      ['Master of Science', 'Information Technology', 3.87, 1, 1, new Date('August 2016').toMysqlDateFormat(), new Date('June 2018').toMysqlDateFormat(), today, today, '20190220001849-seedEducation']
    )
    .then(function () {
      return db.insert('education',
        columns,
        ['Graduate Certificate', 'Database Technology', null, 2, 1, new Date('August 2016').toMysqlDateFormat(), new Date('June 2018').toMysqlDateFormat(), today, today, '20190220001849-seedEducation']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('education',
        columns,
        ['Bachelor of Science', 'Game Design and Development', 3.46, 3, 2, new Date('July 2008').toMysqlDateFormat(), new Date('July 2011').toMysqlDateFormat(), today, today, '20190220001849-seedEducation']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'education'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `education` WHERE `education_seed` = ?', ['20190220001849-seedEducation'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
