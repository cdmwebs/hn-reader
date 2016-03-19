import ApplicationAdapter from 'hn-reader/adapters/application';

export default ApplicationAdapter.extend({
  pathForType() {
    return 'item';
  },

  findAll(store, typeClass) {
    var _this5 = this;
    var ref = this._getCollectionRef(typeClass);
    ref.path.pieces_[1] = 'topstories';

    return this._fetch(ref).then(function (snapshot) {
      var results = [];

      snapshot.forEach(function (childSnapshot) {
        if (results.length >= 25) { return; }
        var payload = _this5._assignIdToPayload(childSnapshot);
        _this5._updateRecordCacheForType(typeClass, payload);
        results.push({ id: payload });
      });

      return results;
    });
  }
});

