import ApplicationAdapter from 'hn-reader/adapters/application';

export default ApplicationAdapter.extend({
  pathForType() {
    return 'item';
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
    ref.path.pieces_[1] = 'topstories';

    return this._fetch(ref).then((snapshot) => {
      var results = [];

      snapshot.forEach((childSnapshot) => {
        if (results.length >= 50) { return; }
        var payload = self._assignIdToPayload(childSnapshot);
        payload = { id: payload };
        self._updateRecordCacheForType(typeClass, payload);
        results.push(payload);
      });

      return results;
    });
  }
});

