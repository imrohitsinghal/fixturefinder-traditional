describe("The FixtureFinder team filter", function() {

  var testFixtures;

  beforeEach(function() {
    testFixtures = testFixtureData;
  });

  describe("#filterTeams with a empty filter", function() {
    it("will return the list of fixtures unchanged", function() {      
        var filtered = FixtureFinder.filterTeams("")(testFixtures);
       
        expect(filtered).toEqual(testFixtures);
    });
  });

  describe("#filterTeams with an undefined filter", function() {
    it("will return the list of fixtures unchanged", function() {      
        var filtered = FixtureFinder.filterTeams(undefined)(testFixtures);
       
        expect(filtered).toEqual(testFixtures);
    });
  });

  describe("#filterTeams with the filter string 'Ar'", function() {
    it("will return the the fixtures with Ar", function() {      
        var filtered = FixtureFinder.filterTeams("Ar")(testFixtures);
     
        expect(filtered).toEqual([testFixtures[0], testFixtures[1], testFixtures[2]]);
    });
  });

  describe("#filterTeams with the filter string 'Arl'", function() {
    it("will return the the fixtures with ", function() {      
        var filtered = FixtureFinder.filterTeams("Arl")(testFixtures);
     
        expect(filtered).toEqual([testFixtures[1], testFixtures[2]]);
    });
  });
});
