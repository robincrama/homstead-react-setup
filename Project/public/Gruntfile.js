module.exports = function(grunt){

  // Load Dependencies
  //require('matchdep').filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

		exec: {
		  browserify: 'browserify src/js/main.js -o build/js/bundle.js -t [ babelify --presets [ es2015 react ] ]'
		},

		watch: {
	    css: {
        files: ['src/js/**/*.js'],
        tasks: ['exec']
	    }
		}
	});

	grunt.task.registerTask('scaffold', 'Scaffold a new module', function(moduleName) {
		var contents = '';

		contents += 'var React = require("react");\n';
		contents += '\n';
		contents += 'class ' + moduleName + ' extends React.Component {\n';
		contents += '  render() {\n';
		contents += '    return React.createElement("h1", null, "Hello World!");\n';
		contents += '  }\n';
		contents += '}\n';
		contents += '\n';
		contents += 'export default ' + moduleName + ';\n';


	  grunt.file.write('src/js/modules/' + moduleName.toLowerCase() + '.js', contents);

	  grunt.task.run(['exec', 'watch']);
	});

  grunt.registerTask('default', ['exec']);

};