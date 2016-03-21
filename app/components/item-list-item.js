import Ember from 'ember';

const observer = Ember.observer;

export default Ember.Component.extend({
  classNames: 'item',

  scoreDidChange: observer('item.score', function() {
    this.$('.item__score').toggleClass('changed');
  }),

  commentCountDidChange: observer('item.kids.length', function() {
    this.$('.item__comment__count').toggleClass('changed');
  })
});

