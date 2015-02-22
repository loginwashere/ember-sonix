import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  artist: null,
  artistStartsWithUpperCase: true,

  validate () {
    let formValues = this.getProperties('title', 'artist');
    let artistFirstLetter = formValues.artist[0];
    console.log('artistFirstLetter', artistFirstLetter);
    console.log('typeof artistFirstLetter', typeof artistFirstLetter);
    this.set('artistStartsWithUpperCase', artistFirstLetter === artistFirstLetter.toUpperCase());
    return this.get('artistStartsWithUpperCase');
  },

  actions: {
    save: function () {
      if (this.validate()) {
        this.sendAction('onSave', this.getProperties('title', 'artist'));
      }
    }
  }
});
