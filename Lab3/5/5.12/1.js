// 1
let d = new Date(2012, 1, 20, 3, 12);
alert( d );

// 2
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert( getWeekDay(date) );

// 3
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

// 4
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

// 5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) );
alert( getLastDayOfMonth(2012, 1) );
alert( getLastDayOfMonth(2013, 1) );

// 6
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  return Math.round(diff / 1000);
}

alert( getSecondsToday() );

// 7
function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000); 
}

