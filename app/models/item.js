import DS from 'ember-data';

const attr = DS.attr;
const hasMany = DS.hasMany;

export default DS.Model.extend({
  deleted: attr('boolean'),
  type: attr('string'),
  by: attr('string'),
  time: attr('date'),
  text: attr('string'),
  dead: attr('boolean'),
  url: attr('string'),
  score: attr('number'),
  title: attr('string'),
  parts: attr('string'),
  kids: hasMany('item'),
  descendants: attr('number'),
});

