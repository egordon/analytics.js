describe('Pathful', function () {

  describe('initialize', function () {

    it('should call ready and load library', function () {
      expect(window.pathful).to.be(undefined);

      var spy = sinon.spy();
      analytics.ready(spy);
      analytics.initialize({ 'Pathful' : test['Pathful'] });
      expect(spy.called).to.be(true);
      expect(window.pathful).not.to.be(undefined);
    });

    it('should store options', function () {
      analytics.initialize({ 'Pathful' : test['Pathful'] });
      expect(analytics.providers[0].options.apiKey).to.equal(test['Pathful']);
    });

  });

});
