var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var ComponentGenerator = yeoman.generators.Base.extend({
  prompting: {
    promptUser: function() {
      var done = this.async();
      this.log(yosay('Welcome to LunaUi\'s Yeoman generator. Name your component, and I\'ll do the rest!'));

      var prompts = [{
        name: 'name',
        message: 'What is your component\'s name? (in all lower case with spaces)',
        default: 'component'
      }, {
        type: 'confirm',
        name: 'newFolder',
        message: 'Do you want to create this component in a new folder?',
        default: false
      }];

      this.prompt(prompts, function (props) {
        var truthy = {
          't': true,
          'T': true,
          'true': true,
          'True': true,
          'TRUE': true,
          'y': true,
          'Y': true,
          'yes': true,
          'Yes': true,
          'YES': true
        };

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

        //set up new folder path
        this.newFolder = '';
        if (props.newFolder && props.newFolder in truthy) {
          this.newFolder = this.component_name + '/';
        }

        done();
      }.bind(this));
    }
  },
  writing: {
    app: function() {
      if (this.newFolder.length) {
        this.dest.mkdir(this.component_name);
      }
    },
    templates: function() {
      var context = {
        componentname: this.componentname,
        component_name: this.component_name,
        ComponentName: this.ComponentName,
        componentName: this.componentName
      };

      this.copy('_component.ts', this.newFolder + this.component_name + '.ts');
   
      this.template('_component_spec.ts', this.newFolder + this.component_name + '_spec.ts', context);

      this.template('__component.scss', this.newFolder + '_' + this.component_name + '.scss', context);
    }
  }

});
 
module.exports = ComponentGenerator;
