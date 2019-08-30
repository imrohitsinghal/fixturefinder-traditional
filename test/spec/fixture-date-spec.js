describe("FixtureFinder", function() {
  var dateField = '.fixtures .info .date';
  var lang = "en";
  var lang_de = "de";

  describe("#setDate with locale EN", function() {
      describe("when setDate is called with '2015-01-01'", function() {
        it("will set the date field to Thu 1st January 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-01-01", lang);

          expect($(dateField).text()).toEqual("Thu 1st January 2015");
        });
      });

      describe("when setDate is called with '2015-22-04'", function() {
        it("will set the date field to Wed 22nd April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22", lang);

          expect($(dateField).text()).toEqual("Wed 22nd April 2015");
        });
      });

      describe("when setDate is called with '2015-03-03'", function() {
        it("will set the date field to Tue 3rd March 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-03-03", lang);

          expect($(dateField).text()).toEqual("Tue 3rd March 2015");
        });
      });

      describe("when setDate is called with '2015-05-13'", function() {
        it("will set the date field to Mon 11th May 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-05-11", lang);

          expect($(dateField).text()).toEqual("Mon 11th May 2015");
        });
      });

  });

  describe("#setDate with locale DE", function() {
      describe("when setDateWithCurrentLanguage with '2015-04-22'", function() {
        it("will set date field to Mi. 22. April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22", lang_de);

          expect($(dateField).text()).toEqual("Mi. 22. April 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-12-01'", function() {
        it("will set date field to Di. 01. Dezember 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-12-01", lang_de);

          expect($(dateField).text()).toEqual("Di. 1. Dezember 2015");
        });
      });
    });
});
