// MIT
(function(due_date_string, days_deadline = 60) {
  var due_date = new Date(due_date_string).valueOf();
  var current_date = new Date().valueOf();
  var days = Math.floor((current_date - due_date) / (1000 * 60 * 60 * 24));
  if (days > 0) {
    var opacity = 1 - days / days_deadline;
    opacity = (opacity < 0) ? 0 : opacity;
    opacity = (opacity > 1) ? 1 : opacity;
    if (opacity >= 0 && opacity <= 1) {
      document.getElementsByTagName('body')[0].style.setProperty('opacity', opacity, 'important');
    }
  }
})('2019-01-01')
