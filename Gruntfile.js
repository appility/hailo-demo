module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  

    concat: {
      options: {
        separator: ';'
      },
      main: {
        src: ['src/js/lib/*',
        'src/js/Classes/*',
        'src/js/app.js',
        ],
        dest: 'src/js/all.js'
      }
    },
    uglify: {
      options: {
        report: 'min',
        mangle: true,
        preserveComments: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      my_target: {
        files: [
          {'src/js/all.min.js': ['<%= concat.main.dest %>']}
        ]
      }
    },
    copy: {
      main: {
        files: [
          { src: ['src/js/all.min.js'], dest: 'target/js/all.js'},
          { src: ['src/index.html'], dest: 'target/index.html'}
        ]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};