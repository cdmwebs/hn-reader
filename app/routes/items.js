import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

const $ = Ember.$;

export default Ember.Route.extend(KeyboardShortcuts, {
  model() {
    return this.store.findAll('item');
  },

  afterModel(items) {
    items.forEach(function(item) {
      item.reload();
    });
  },

  keyboardShortcuts: {
    'j': {
      action: 'nextItem',
      global: false
    },
    'k': {
      action: 'previousItem',
      global: false
    }
  },

  actions: {
    nextItem() {
      let currentItem = $('.active.item');

      if (currentItem.length === 0) {
        // No story selected. Grab the first one.
        let firstItem = $('.item__list .item').first();
        let firstId = firstItem.attr('href').split('/')[2];
        this.transitionTo('items.item', firstId);
        return;
      }

      if (currentItem.next().length === 0) { return; }
      let nextItem = currentItem.next().attr('href').split('/')[2];
      this.transitionTo('items.item', nextItem);
    },

    previousItem() {
      let currentItem = $('.active.item');
      if (currentItem.prev().length === 0) { return; }
      let previousItem = currentItem.prev().attr('href').split('/')[2];
      this.transitionTo('items.item', previousItem);
    }
  }

});

