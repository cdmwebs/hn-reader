import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Controller.extend({
  stories: computed('model.@each.type', function() {
    return this.get('model').filterBy('type', 'story');
  })
});

