var FixtureFinder = {
    currentLanguage : 'en'
};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment();
    var dateSelectButtons = '.dateSelect';
    var teamFilterInput = $('.navbar .team-filter');
    var countryFilterSelector = '.competitions input[name=competition]';
    var localizeButtons = '.localize input[type="radio"]';

    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat),
            fixtureFilter
        );
    };

    var getFixturesForCurrentDate = function() {
        getFixturesByDate(currentDateSelected.format(dateFormat));
    };

    var fixtureFilter = function(fixtures) {
        var filteredByCountry = FixtureFinder.filterCountries($(countryFilterSelector + ':checked')[0].id)(fixtures);
        var filteredByTeam = FixtureFinder.filterTeams(teamFilterInput[0].value)(filteredByCountry);
        return filteredByTeam;
    }

    var filterCurrentFixtureList = function(){
        return FixtureFinder.FixtureRetriever.filterCurrentWith(fixtureFilter);
    };

    var daysToMillis = function(days) {
        return days * 25 * 60 * 60 * 1000;
    };

    var addListenerFor = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addListeners = function() {
        addListenerFor(teamFilterInput, 'keyup', filterCurrentFixtureList);
        addListenerFor(countryFilterSelector, 'click', filterCurrentFixtureList);
        addListenerFor(localizeButtons, 'click',
            function(){ FixtureFinder.localizePage(this.value) }
        );
        addListenerFor(dateSelectButtons, 'click',
            function() {
                var offset = this.getAttribute('data-offset');
                if (offset === "0") {
                    currentDateSelected = moment();
                } else {
                    currentDateSelected = moment(currentDateSelected).add(daysToMillis(parseInt(offset)));
                }
                getFixturesForCurrentDate();
            }
        );
    };

    return {
        init: function() {
            getFixturesForCurrentDate();
            addListeners();
        }
    }
}();
