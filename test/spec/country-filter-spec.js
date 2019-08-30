describe("The FixtureFinder country filter", function() {

  var testFixtures;

  beforeEach(function() {
    testFixtures = testFixtureData;
  });

  describe("#filterCountries with 'All' selected", function() {
    it("will return the list of fixtures unchanged", function() {      
        var filtered = FixtureFinder.filterCountries("All")(testFixtures);
       
        expect(filtered).toEqual(testFixtures);
    });
  });

  describe("#filterCountries with 'Italy' selected", function() {
    it("will return the list of Italian fixtures", function() {      
        var filtered = FixtureFinder.filterCountries("Italy")(testFixtures);
       
        expect(filtered).toEqual([testFixtures[3],testFixtures[4]]);
    });
  });
});
