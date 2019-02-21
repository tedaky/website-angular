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
 * Seed 'company'
 */
exports.up = function (db) {
  var columns = ['company_name', 'company_link', 'company_logo', 'company_description', 'company_seed'];
  return db.insert('company',
      columns,
      ['Encore Software, LLC', 'https://www.encore.com/', 'encore.png', 'Encore provides software titles that improve the quality of life for customers worldwide.', '20190219124023-seedCompany']
    )
    .then(function () {
      return db.insert('company',
        columns,
        ['B507', 'https://www.b507.us/', 'b507.png', 'B507 is a group of student professionals solving problems through media, design and technology.', '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['ValuSoft Cosmi', 'https://www.mastercook.com/', 'valusoft_cosmi.png', null, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['Theory.io', 'http://theory.io/', 'theoryio.png', null, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['Preferred Interactive LLC', 'https://www.yourpersonaldesigner.com/', 'preferred_interactive.png', null, '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['ValuSoft', 'https://www.thqnordic.com/', 'valusoft_thq.png', 'THQ is meant to represent a core approach of doing much more than “owning” a highly competitive portfolio of IPs. It revolves around cherishing them, and aligning them with the very best development resources to expand upon them with the level of experience that communities and established fan bases expect and deserve.', '20190219124023-seedCompany']);
    }, function (err) {
      return err;
    })
    .then(function () {
      return db.insert('company',
        columns,
        ['Haworth Marketing + Media', 'http://www.haworthmedia.com/', 'haworth.png', 'Haworth Marketing + Media is an employee-owned collective of individuals who share an unrelenting devotion for taking on the age-old media challenge: driving consumer behavior through marketing + media.', '20190219124023-seedCompany']);
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
