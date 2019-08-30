describe("A Localizer", function() {
    var testFixtures;

    beforeEach(function() {
        testFixtures = testFixtureData;
        FixtureParser.parseFixtures(testFixtures);
    });

    describe("#localizePage to English", function() {
        beforeEach(function() {
            FixtureFinder.localizePage("en");
        });

        it("will translate the nav buttons to English", function() {
            expect($($('.dateSelectNav').children()[0]).text()).toEqual("Previous Week");
            expect($($('.dateSelectNav').children()[1]).text()).toEqual("Previous Day");
            expect($($('.dateSelectNav').children()[2]).text()).toEqual("Today");
            expect($($('.dateSelectNav').children()[3]).text()).toEqual("Next Day");
            expect($($('.dateSelectNav').children()[4]).text()).toEqual("Next Week");
        });

        it("will translate the table headers to English", function() {
            var headersClass = '.table .headers'
            expect($(headersClass + ' .competition .txt').text()).toEqual("Competition");
            expect($(headersClass + ' .kickOffDate .txt').text()).toEqual("Kick Off");
            expect($(headersClass + ' .home .txt').text()).toEqual("Home Team");
            expect($(headersClass + ' .score .txt').text()).toEqual("Score");
            expect($(headersClass + ' .away .txt').text()).toEqual("Away Team");
        });

        it("will translate the word results to English", function() {
            expect($('.fixtures .info .numberOfFixtures').text()).toEqual("5 fixtures");
        });

        it("will translate the all country names, inc 'All Countries' to English", function() {
            expect($('.all-txt')[0].innerHTML).toEqual('All Countries');
            expect($('.en-txt').text()).toEqual('England');
            expect($('.de-txt').text()).toEqual('Germany');
        });

    });

    describe("#localizePage to German", function() {
        beforeEach(function() {
            FixtureFinder.localizePage("de");
        });

        it("will translate the nav buttons to German", function() {
            expect($($('.dateSelectNav').children()[0]).text()).toEqual("Vorige Woche");
            expect($($('.dateSelectNav').children()[1]).text()).toEqual("Vorheriger Tag");
            expect($($('.dateSelectNav').children()[2]).text()).toEqual("Heute");
            expect($($('.dateSelectNav').children()[3]).text()).toEqual("Nächster Tag");
            expect($($('.dateSelectNav').children()[4]).text()).toEqual("Nächste Woche");
        });

        it("will translate the table headers to German", function() {
            var headersClass = '.table .headers'
            expect($(headersClass + ' .competition .txt').text()).toEqual("Wettbewerb");
            expect($(headersClass + ' .kickOffDate .txt').text()).toEqual("Anstoß");
            expect($(headersClass + ' .home .txt').text()).toEqual("Heim Mannschaft");
            expect($(headersClass + ' .score .txt').text()).toEqual("Ergebnis");
            expect($(headersClass + ' .away .txt').text()).toEqual("Auswärts Mannschaft");
        });

        it("will translate the word results to German", function() {
            expect($('.fixtures .numberOfFixtures').text()).toEqual("5 Spiele");
        });

        it("will translate the all country names, inc 'All Countries' to German", function() {
            expect($('.all-txt')[0].innerHTML).toEqual('Alle Staaten');
            expect($('.en-txt').text()).toEqual('England');
            expect($('.de-txt').text()).toEqual('Deutschland');
        });
    });
});
