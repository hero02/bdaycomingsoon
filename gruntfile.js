
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/myflipset.js',
                dest: 'js/myflipset.min.js'
            }
        },

        less: {
            // 2. Configuration for files goes here.
            development: {
                files: {
                    "style/style.css": "style/style.less"
                }
            }
        },

         watch: {
            style:{
                files:["style/*.less"],
                tasks:["less"]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //tast (any name,[actual task name]);
    //grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('more', ['less']);
    grunt.registerTask('ugly', ['uglify']);

};