import DS from 'ember-data';
import Ember from 'ember';

const attr = DS.attr,
      hasMany = DS.hasMany,
      belongsTo = DS.belongsTo,
      computed = Ember.computed;

export default DS.Model.extend({
  // story
  // comment
  // ask
  // job
  // poll

  deleted: attr('boolean'),
  type: attr('string'),

  by: attr('string'),
  time: attr('number'),
  text: attr('string'),
  dead: attr('boolean'),
  url: attr('string'),
  score: attr('number'),
  title: attr('string'),
  parts: attr('string'),
  descendants: attr('number'),
  parent: belongsTo('item', { inverse: null, async: true }),
  kids: hasMany('item', { inverse: null,  async: true }),

  date: computed('time', function() {
    return new Date(this.get('time') * 1000);
  }),

  domain: computed('url', function() {
    let parser = document.createElement('a');
    parser.href = this.get('url');

    return parser.hostname;
  })
});

