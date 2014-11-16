var yeoman = require('yeoman-generator');

var ComponentGenerator = yeoman.generators.Base.extend({
  promptUser: function() {
    var done = this.async();
    console.log(this.yeoman);

    var prompts = [{
      name: 'name',
      message: 'What is your component\'s name? (in all lower case with spaces)',
      default: 'component'
    }];

    this.prompt(prompts, function (props) {
      //name as entered with spaces
      this.componentname = props.name;
      //name snake_cased 
      this.component_name = props.name.replace(/ /g, '_');
      //name capitalized and camelCased
      this.ComponentName = props.name.replace(/\b./g, function(x) {
        return x.toUpperCase();
      }).replace(/ /g, '');
      //name camelCased
      this.componentName = this.ComponentName.charAt(0).toLowerCase() + this.ComponentName.slice(1);

      done();
    }.bind(this));
  },
  copyMainFiles: function() {
    this.copy('_component.ts', this.component_name + '.ts');
 
    var context = { 
      componentname: this.componentname,
      component_name: this.component_name,
      ComponentName: this.ComponentName,
      componentName: this.componentName
    };
 
    this.template('_component_spec.ts', this.component_name + '_spec.ts', context);
  }

});
 
module.exports = ComponentGenerator;