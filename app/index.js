var yeoman = require('yeoman-generator');

var ComponentGenerator = yeoman.generators.NamedBase.extend({
  promptUser: function() {
    var done = this.async();
    console.log(this.yeoman);

    var prompts = [{
      name: 'componentName',
      message: 'What is your component\'s name ?',
      default: 'component'
    }];

    this.prompt(prompts, function (props) {
      this.componentName = props.componentName;
      done();
    }.bind(this));
  },
  copyMainFiles: function() {
    this.copy('_component.ts', this.componentName + '.ts');
  }

});
 
module.exports = ComponentGenerator;