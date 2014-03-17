/**
 *
 * @author Ben Zörb @bezoerb https://github.com/bezoerb
 * @copyright Copyright (c) 2014 Ben Zörb
 *
 * Licensed under the MIT license.
 * http://bezoerb.mit-license.org/
 * All rights reserved.
 */
'use strict';

var api = require('../lib/api.js'),
    fs = require('fs'),
    beautify = require('js-beautify').js_beautify,
    gruntfile = fs.readFileSync('test/fixtures/plain_task_withoptions.js', 'utf-8').toString(),
    multiline = require('multiline');


var output = api.init(gruntfile)
    .loadNpmTasks('less')
    .insertConfig('less',{
        options: {
            paths: ['/styles'],
            optimization: 0
        },
        dist: {
            files: [
                {expand: true, cwd:  '/styles', src: ['*.less'], dest: '.tmp/styles', ext: '.css'}
            ]
        },
        all: {
            files: [
                {expand: true, cwd:  '/styles', src: ['*.less'], dest: '.tmp/styles', ext: '.css'}
            ]
        }

    }).toString();

console.log(output);

//
//var output = api.init(gruntfile)
//    .addGlobalDeclaration('test1',[{d:4}])
//    .addGlobalDeclaration('test2',42)
//    .addGlobalDeclaration('test3','abc')
//    .addGlobalDeclaration('test4',function(test){ return test * test; })
//    .registerTask('defaultdefault', [42])
//    .registerTask('default', function(target){
//        grunt.task.run(['jshint']);
//    })
//    .registerTask('test', function(target,t2){
//        if (target === 'build') {
//            grunt.task.run(['watch']);
//        }
//    },'skip')
//    .registerTask('test', [42])
//    .insertConfig('testtask',{  tests: ['test/**/*_test.js'] })
//    .insertRawConfig('testtask','{ abc : (new Date()).getTime() }')
//    .insertRawConfig('watch', multiline(function(){/*
//        {
//            js: {
//                options: {
//                    time: (new Date()).getTime()
//                },
//                files: MYPREVIOUSDECLAREDFILES,
//                tasks: ['jshint']
//            }
//        }
//    */}))
//    .toString();

//console.log(output);

