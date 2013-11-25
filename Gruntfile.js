module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.initConfig({
        cssmin: {
            minify: {
                files: {
                    'dest/style.min.css': ['css/tool/tool.css','css/main.css']
                }
            }
        }
    });
    grunt.registerTask('default', ['cssmin']);
};