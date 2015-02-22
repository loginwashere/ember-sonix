import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModel: function(){
      window.history.back();
    }
  }
});
