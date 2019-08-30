describe("A FixtureParser", function() {
  var testFixtures;

  describe("#parseFixtures", function() {
      beforeEach(function() {
        testFixtures = testFixtureData;
      });

      describe("and the full test data list of fixtures", function() {
        beforeEach(function() {
          FixtureParser.parseFixtures(testFixtures);
        });

        it("will add 5 fixtures to the table", function() {
          expect($('.table .fixture').length).toEqual(5);
        });

        it("will display 5 fixtures as the number of fixtures", function() {
          expect($('.fixtures .numberOfFixtures').text()).toEqual("5 fixtures");
        });
      });

      describe("and an array with only one element", function() {
        beforeEach(function() {
          FixtureParser.parseFixtures(testFixtures.slice(0, 1));
        });

        it("will add 1 fixture to the table", function() {
          expect($('.table .fixture').length).toEqual(1);
        });

        it("will display 1 fixture as the number of fixtures", function() {
          expect($('.fixtures .numberOfFixtures').text()).toEqual("1 fixtures");
        });

        it("will have the expected fixture data in the table", function() {
          expect($('.table .fixture .competition').text()).toEqual("FA Cup");
          expect($('.table .fixture .home').text()).toEqual("Manchester United");
          expect($('.table .fixture .kickOffDate').text()).toEqual("01:00");
          expect($('.table .fixture .score').text()).toEqual("1:2");
          expect($('.table .fixture .away').text()).toEqual("Arsenal");
        });
      });

  });
});
