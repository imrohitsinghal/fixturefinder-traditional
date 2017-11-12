var date = function (){
  var updateDate = function(date, lang){
      var dateElement = $('.fixtures .info .date');
      dateElement.text(
          moment(date || dateElement.attr('data-date'))
          .locale(lang)
          .format('ddd Do MMMM YYYY')
      );
  };

  FixtureFinder.setDateWithCurrentLanguage = function(date, lang){
        updateDate(date, lang);
  }
}();
