module.exports = function (grunt) {
    grunt.initConfig({
        nodeunit: {
            files: ['test/**/*_test.js'],
            otherFiles: ['test/**/*_test.js']
        }
    });
};