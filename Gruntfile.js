'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['sass:dev'],
        options: {
          livereload: false
        }
      },
      styles: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['autoprefixer:dev']
      },
      js: {
        files: ['js/{,**/}*.js'],
        tasks: ['jshint']
      }
    }, //watch
    sass: {
      dev: {
        options: {
          compass: false
        },
        files: {
          'stylesheets/style.css': 'sass/style.scss'
        }
      }
    }, //sass
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 8'], //change as needed
        map: true
      },
      dev: {
        files: {
          'stylesheets/style.css' : 'stylesheets/style.css'
        }
      }
    }, //autoprefixer
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/functions.js']
    }, //jshint
    modernizr: {
      dist: {
        "devFile" : "js/vendor/modernizr.custom.86229.js",
        "outputFile" : "js/vendor/modernizr-custom.js",
        "extra" : {
          "shiv" : false,
          "printshiv" : true,
          "load" : true,
          "mq" : true,
          "cssclasses" : true
        },
        // Define any tests you want to implicitly include.
        // "tests" : [
        //   'css_mediaqueries',
        //   'rgba',
        //   'touch',
        //   'svg',
        //   'csstransforms'
        // ],
        "matchCommunityTests" : true,
        // This task will crawl all *.js, *.css, *.scss and *.sass files,
        // except files that are in node_modules/.
        // You can override this by defining a "files" array below.
        "files" : {
          "src": [
            'sass/**/*.scss',
            'js/functions.js'
          ]
        }
      }
    } //modernizr
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks("grunt-modernizr");
};