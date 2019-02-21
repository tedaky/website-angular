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
  var columns = ['experience_description', 'experience_order', 'experience_position_id', 'experience_company_id', 'experience_start_date', 'experience_end_date', 'experience_seed'];
  return db.insert('experience',
      columns,
      ['Creating and updating product web pages and product emails is my primary position. I also have a secondary position as Quality Assurance. I check products for quality that are in development and products that have already been released for current technologies.', 2, 1, 1, new Date('August 2012').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), '20190220001813-seedExperience']
    )
    .then(function () {
      return db.insert('experience',
        columns,
        ['Used the latest web technologies (Angular, AngularJS, Laravel PHP Blade) to build web applications for our clients both on Minnesota State University, Mankato campus and off campus.', 3, 2, 2, new Date('August 2016').toMysqlDateFormat(), new Date('June 2018').toMysqlDateFormat(), '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Use a variety of web programming laguages for user interface development.', 4, 5, 3, new Date('August 2012').toMysqlDateFormat(), new Date('December 2013').toMysqlDateFormat(), '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Developed company website to provide helpful information for series of organizational iPad apps developed by the iPad team.', 5, 1, 4, new Date('March 2012').toMysqlDateFormat(), new Date('December 2012').toMysqlDateFormat(), '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Used Photoshop batch scripts to add materials to house images such as counters, walls, floors and ceilings.', 6, 3, 5, new Date('March 2012').toMysqlDateFormat(), new Date('June 2012').toMysqlDateFormat(), '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Test bugs/glitches with games, created steam depots for steam game release, disc setup, and game play video for retail presentations and marketing events.', 7, 4, 6, new Date('January 2019').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), '20190220001813-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Responsible for application development, including middleware development between internal and external systems and web application development.', 1, 6, 7, new Date('January 2019').toMysqlDateFormat(), null, '20190220001813-seedExperience']);
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
