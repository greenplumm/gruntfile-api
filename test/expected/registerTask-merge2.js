module.exports = function (grunt) {
    grunt.initConfig({});
    grunt.registerTask('default', function () {
        grunt.task.run([
            'jshint',
            'uglify'
        ]);
        grunt.task.run([
            'watch',
            'css'
        ]);
    });
};