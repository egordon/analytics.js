describe('Pathful', function () {

  describe('initialize', function () {

    it('should call ready and load library', function (done) {
      expect(window.pathful).to.be(undefined);

      var spy = sinon.spy();
      analytics.ready(spy);
      analytics.initialize({ 'Pathful' : test['Pathful'] });
      expect(spy.called).to.be(true);
      expect(window.pathful).not.to.be(undefined);
      var intID = setInterval(function() {
        if(window.$playdoh) {
          clearInterval(intID);
          done();
        }
      }, 100)
    });

    it('should store options', function () {
      analytics.initialize({ 'Pathful' : test['Pathful'] });
      expect(analytics.providers[0].options.apiKey).to.equal(test['Pathful']);
    });

  });

  describe('identify', function () {

    it('should update PATHFUL_ID', function (done) {
        analytics.identify(test.traits);
        expect(window.pathful.newID).to.be(test.traits.email);
        done();
    });
  });

});
