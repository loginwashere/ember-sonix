import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  artist:null,
  actions: {
    save: function(){
      let formValues = this.getProperties('title', 'artist');
      this.sendAction('onSave', formValues);
    }
  }
});
