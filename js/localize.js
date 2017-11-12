var localizer = function (){
    var translator = function(lang){
        switch(lang){
            case "de":
            case "german":
                return {
                    firstNavBtn: "Vorige Woche",
                    secondNavBtn: "Vorheriger Tag",
                    thirdNavBtn: "Heute",
                    fourthNavBtn: "Nächster Tag",
                    fifthNavBtn: "Naechste Woche",
                    competition: "Wettbewerb",
                    kickOffDate: "Anstoß",
                    home: "Heim",
                    score: "Ergebnis",
                    away: "Auswärts",
                    team: "Mannschaft",
                    fixtures: "Spiele",
                    all: "Alle",
                    countries: "Staaten",
                    england: "England",
                    germany: "Deutschland",
                    estonia: "Estland",
                    filter: "Filtern"
            }
                       
            case "et":
            case "estonian":
                return {
                    firstNavBtn: "Eelmine nädal",
                    secondNavBtn: "Eelmine päev",
                    thirdNavBtn: "Täna",
                    fourthNavBtn: "Järgmine päev",
                    fifthNavBtn: "Järgmine nädal",
                    competition: "Konkurents",
                    kickOffDate: "Kick Off",
                    home: "Kodu",
                    score: "Skoor",
                    away: "Kodu",
                    team: "Meeskond",
                    fixtures: "inventar",
                    all: "Kõik",
                    countries: "Riigid",
                    england: "Inglismaa",
                    germany: "Saksamaa",
                    estonia: "Eesti",
                    filter: "Filter"
            }

            case "en":
            case "english":
            default:
                return {
                    firstNavBtn: "Previous Week",
                    secondNavBtn: "Previous Day",
                    thirdNavBtn: "Today",
                    fourthNavBtn: "Next Day",
                    fifthNavBtn: "Next Week",
                    competition: "Competilion",
                    kickOffDate: "Kick Off",
                    home: "Home",
                    score: "Score",
                    away: "Away",
                    team: "Team",
                    fixtures: "fixtures",
                    all: "All",
                    countries: "Countries",
                    england: "England",
                    germany: "Germany",
                    estonia: "Estonia",
                    filter: "Filter"
            }
        }
    };

    var updateNavBarBrand = function(translator){
        $('.fixtures .navbar-brand').text(translator.filter);
    };

    var updateTeamFilter = function(translator){
        $('.fixtures .team-filter').attr('placeholder', translator.team);
    };

    var updateCountryNames = function(translator){
        $('.all-txt').text(translator.all + " " +translator.countries);
        $('.en-txt').text(translator.england);
        $('.de-txt').text(translator.germany);
        $('.et-txt').text(translator.estonia);
    };

    var updateDateSelectNav = function(translator){
        var dateSelectNav = $('.dateSelectNav').children()
        $(dateSelectNav[0]).text(translator.firstNavBtn);
        $(dateSelectNav[1]).text(translator.secondNavBtn);
        $(dateSelectNav[2]).text(translator.thirdNavBtn);
        $(dateSelectNav[3]).text(translator.fourthNavBtn);
        $(dateSelectNav[4]).text(translator.fifthNavBtn);
    };

    var updateHeaders = function(translator){
        var headersClass = '.table .headers'
        $(headersClass+' .competition .txt').text(translator.competition);
        $(headersClass+' .kickOffDate .txt').text(translator.kickOffDate);
        $(headersClass+' .home .txt').text(translator.home + " " + translator.team);
        $(headersClass+' .score .txt').text(translator.score);
        $(headersClass+' .away .txt').text(translator.away + " " + translator.team);
    };

    var updateNoOfFixtures = function(translator){
        var originalAsArray = $('.fixtures .info .numberOfFixtures').text().split(" ");
        $('.fixtures .info .numberOfFixtures').text(originalAsArray[0] +" "+translator.fixtures);
    }

    FixtureFinder.localizePage = function(lang){
        FixtureFinder.currentLanguage = lang;
        var localizer = translator(lang);
        updateNavBarBrand(localizer);
        updateTeamFilter(localizer);
        updateCountryNames(localizer);
        updateDateSelectNav(localizer);
        updateHeaders(localizer);
        updateNoOfFixtures(localizer);

    };

    FixtureFinder.localizeString = function(value){
        return translator(FixtureFinder.currentLanguage)[value];
    };

}()
