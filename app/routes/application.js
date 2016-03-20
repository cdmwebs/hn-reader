/* globals clicky */
import Ember from 'ember';

export default Ember.Route.extend({
  didTransition() {
    clicky.log(this.get('url'), this.get('title'));
  }
});

