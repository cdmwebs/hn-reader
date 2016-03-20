import ApplicationAdapter from 'hn-reader/adapters/application';

export default ApplicationAdapter.extend({
  _getCollectionRef(typeClass, id) {
    var ref = this._ref;
    if (typeClass && id) {
      ref = ref.child('item');
    } else {
      ref = ref.child('topstories');
    }
    if (id) {
      ref = ref.child(id);
    }
    return ref;
  },


  findRecord(store, typeClass, id) {
    var ref = this._getCollectionRef(typeClass, id);

    var log = `DS: FirebaseAdapter#findRecord ${typeClass.modelName} to ${ref.toString()}`;

    return this._fetch(ref, log).then((snapshot) => {
      var payload = this._assignIdToPayload(snapshot);

      this._updateRecordCacheForType(typeClass, payload);
      if (payload === null) {
        var error = new Error(`no record was found at ${ref.toString()}`);
            error.recordId = id;
        throw error;
      }

      return payload;
    });
  },

  findAll(store, typeClass) {
    var self = this;
    var ref = this._getCollectionRef(typeClass);

    return this._fetch(ref).then((snapshot) => {
      var results = [];

      snapshot.forEach((childSnapshot) => {
        if (results.length >= 100) { return; }
        var payload = self._assignIdToPayload(childSnapshot);
        payload = { id: payload };
        self._updateRecordCacheForType(typeClass, payload);
        results.push(payload);
      });

      return results;
    });
  }
});

