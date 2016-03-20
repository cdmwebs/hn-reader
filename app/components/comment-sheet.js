import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Component.extend({
  classNames: ['comment'],
  classNameBindings: ['isDead', 'isDeleted', 'isCollapsed'],

  isCollapsed: false,

  isDead: computed.alias('comment.dead'),
  isDeleted: computed.alias('comment.deleted'),

  collapseAction: computed('isCollapsed', function() {
    if (this.get('isCollapsed')) {
      return '+';
    } else {
      return '-';
    }
  }),

  actions: {
    collapse() {
      this.$(".comment__text").slideToggle();
      this.toggleProperty('isCollapsed');
    }
  }
});

