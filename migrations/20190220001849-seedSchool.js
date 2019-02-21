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
 * Seed 'school'
 */
exports.up = function (db) {
  var columns = ['school_name', 'school_link', 'school_logo', 'school_seed'];
  return db.insert('school',
      columns,
      ['Mankato State University, Mankato', 'https://mankato.mnsu.edu/', null, '20190220001849-seedSchool']
    )
    .then(function () {
      return db.insert('school',
        columns,
        ['Brown College', 'http://www.sanfordbrown.edu/Mendota-Heights', null, '20190220001849-seedSchool']);
    }, function (err) {
      return err;
    })
    .then([], function (err) {
      return err;
    });
};

/**
 * Remove Seed 'school'
 */
exports.down = function (db) {
  return db.runSql('DELETE FROM `school` WHERE `school_seed` = ?', ['20190220001849-seedSchool'])
    .then([], function (err) {
      return err;
    });
};

exports._meta = {
  "version": 1
};
