import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['comment'],
  classNameBindings: ['isDead', 'isDeleted'],

  isDead: computed.alias('comment.dead'),
  isDeleted: computed.alias('comment.deleted'),
});

