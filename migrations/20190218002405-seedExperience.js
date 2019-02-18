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
 * Seed 'Experience'
 */
exports.up = function (db) {
  var today = new Date().toMysqlDateTimeFormat();
  var columns = ['experience_title', 'experience_company', 'experience_link', 'experience_logo_src', 'experience_description', 'experience_order', 'experience_start_date', 'experience_end_date', 'experience_created_at', 'experience_modified_at', 'experience_seed'];
  return db.insert('experience',
      columns,
      ['Software Developer', 'Haworth Marketing + Media', 'http://www.haworthmedia.com/', 'haworth.png', 'Create applications including middleware between internal and external systems and web application development. Use the latest technologies (Angular, .NET Core, and MSSQL) to provide data for business intelligence', 1, new Date('January 2019').toMysqlDateFormat(), null, today, today, '20190218002405-seedExperience']
    )
    .then(function () {
      return db.insert('experience',
        columns,
        ['Web Developer', 'Encore Software, LLC', 'https://www.encore.com/', 'encore.png', 'Creating and updating product web pages and product emails is my primary position. I also have a secondary position as Quality Assurance. I check products for quality that are in development and products that have already been released for current technologies.', 2, new Date('August 2012').toMysqlDateFormat(), new Date('January 2019').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Front End Team Leader', 'B507', 'https://www.b507.us/', 'b507.png', 'Used the latest web technologies (Angular, AngularJS, Laravel PHP Blade) to build web applications for our clients both on Minnesota State University, Mankato campus and off campus.', 3, new Date('August 2016').toMysqlDateFormat(), new Date('June 2018').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Web Developer', 'ValuSoft Cosmi', 'https://www.mastercook.com/', 'valusoft_cosmi.png', 'Use a variety of web programming laguages for user interface development.', 4, new Date('August 2012').toMysqlDateFormat(), new Date('December 2013').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Web Developer', 'Theory.io', 'http://theory.io/', 'theoryio.png', 'Developed company website to provide helpful information for series of organizational iPad apps developed by the iPad team.', 5, new Date('March 2012').toMysqlDateFormat(), new Date('December 2012').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['Image Detailer', 'Personal Designer', 'https://www.yourpersonaldesigner.com/', 'preferred_interactive.png', 'Used Photoshop batch scripts to add materials to house images such as counters, walls, floors and ceilings.', 6, new Date('March 2012').toMysqlDateFormat(), new Date('June 2012').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('experience',
        columns,
        ['QA Lead', 'ValuSoft', 'https://www.thqnordic.com/', 'valusoft_thq.png', 'Test bugs/glitches with games, created steam depots for steam game release, disc setup, and game play video for retail presentations and marketing events.', 7, new Date('July 2011').toMysqlDateFormat(), new Date('March 2012').toMysqlDateFormat(), today, today, '20190218002405-seedExperience']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'Experience'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `experience` WHERE `experience_seed` = ?', ['20190218002405-seedExperience'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
