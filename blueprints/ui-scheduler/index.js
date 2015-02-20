module.exports = {
  description: 'Installs the underlying JS needed currently'

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
	  return this.addBowerPackageToProject('fullcalendar');
  }
};
