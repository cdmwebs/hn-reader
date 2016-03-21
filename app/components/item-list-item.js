import Ember from 'ember';

const observer = Ember.observer;

export default Ember.Component.extend({
  classNames: 'item',

  scoreDidChange: observer('item.score', function() {
    console.log('score changed: ' + this.get('item.id') + ' ' + this.get('item.title'));
    this.$('.item__score').toggleClass('changed');
  }),

  commentCountDidChange: observer('item.kids.length', function() {
    console.log('comments added: ' + this.get('item.id') + ' ' + this.get('item.title'));
    this.$('.item__comment__count').toggleClass('changed');
  })
});

