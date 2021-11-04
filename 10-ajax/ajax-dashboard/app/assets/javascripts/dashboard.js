$(document).ready(function () {
  const fetchBrother = function () {
    $.get('/api/brother').done(function (b) {
      $('#brother').text(b);
    });
  };

  setInterval(fetchBrother, 4000);

  const fetchTime = function () {
    $.get('/api/time').done(function (t) {
      $('#time').text(t);
    });
  };

  setInterval(fetchTime, 1000);

  const fetchUptime = function () {
    $.get('/api/uptime').done(function (u) {
      $('#uptime').text(u);
    });
  };

  setInterval(fetchUptime, 11000);
});
