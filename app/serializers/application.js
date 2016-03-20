import Ember from 'ember';
import FirebaseSerializer from 'emberfire/serializers/firebase';
import assign from 'lodash/object/assign';

export default FirebaseSerializer.extend({
  normalizeRelationships(modelClass, payload) {
    modelClass.eachRelationship((key, meta) => {
      let relationshipKey = this.keyForRelationship(key, meta.kind, 'deserialize');

      if (meta.kind === 'hasMany') {
        if (payload.hasOwnProperty(relationshipKey)) {
          let relationshipPayload = payload[relationshipKey];
          // embedded
          if (this.hasDeserializeRecordsOption(key)) {
            if (typeof relationshipPayload === 'object' && !Ember.isArray(relationshipPayload)) {
              relationshipPayload = Object.keys(relationshipPayload).map((id) => {
                return assign({ id: id }, relationshipPayload[id]);
              });
            } else if (Ember.isArray(relationshipPayload)) {
              relationshipPayload = this._addNumericIdsToEmbeddedArray(relationshipPayload);
            } else {
              throw new Error(`${modelClass.toString()} relationship ${meta.kind}('${meta.type}') must contain embedded records with an \`id\`. Example: { "${key}": { "${meta.type}_1": { "id": "${meta.type}_1" } } } instead got: ${JSON.stringify(payload[key])}`);
            }
          }

          // normalized
          else {
            if (typeof relationshipPayload === 'object' && !Ember.isArray(relationshipPayload)) {
              relationshipPayload = Object.keys(relationshipPayload);
            } else if (Ember.isArray(relationshipPayload)) {
              relationshipPayload = relationshipPayload.map(function(item) {
                return {
                  id: item,
                  type: meta.type
                };
              });
            } else {
              throw new Error(`${modelClass.toString()} relationship ${meta.kind}('${meta.type}') must be a key/value map. Example: { "${key}": { "${meta.type}_1": true } } instead got: ${JSON.stringify(payload[key])}`);
            }
          }

          payload[relationshipKey] = relationshipPayload;
        }

        // hasMany property is not present
        // server will not send a property which has no content
        // (i.e. it will never send `comments: null`) so we need to
        // force the empty relationship
        else {
          payload[relationshipKey] = [];
        }
      }

      if (meta.kind === 'belongsTo') {
        if (!payload.hasOwnProperty(relationshipKey)) {
          // server wont send property if it was made null elsewhere
          payload[relationshipKey] = null;
        }
      }
    });
  },
});

