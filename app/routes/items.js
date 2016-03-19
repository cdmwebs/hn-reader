import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },

  afterModel(items) {
    items.forEach(function(item) {
      item.reload();
    });
  }
});

