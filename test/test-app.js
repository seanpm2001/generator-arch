'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('reflex:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json',
      '.gitignore',
      'app/app.ls',
      'app/components/layout.ls',
      'app/layouts/default.html',
      'app/routes/welcome.ls'
    ]);
  });
});
