
var fs = require('fs');

module.exports = function (grunt) {
    
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: { 
      base:{
        options:{
          strictMath: true,
          outputSourceFiles: true
        },
        src: 'src/_code.less',
        dest: 'dist/code.css'
      }
    },
    //css压缩合并
    cssmin: {
       options:{
          keepSpecialComments: 0
       },
       default:{
          src: ['dist/code.css'],
          dest: 'dist/code.min.css'
       }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less') ;


  // 默认任务
  grunt.registerTask('build', ['less:base','cssmin:default']);
  

}