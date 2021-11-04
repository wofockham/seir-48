$(document).ready(function () {
  const fetchBrother = function () {
    $('#brother').load('/api/brother');
  };

  setInterval(fetchBrother, 4000);

  const fetchTime = function () {
    $('#time').load('/api/time');
  };

  setInterval(fetchTime, 1000);

  const fetchUptime = function () {
    $('#uptime').load('/api/uptime');
  };

  setInterval(fetchUptime, 11000);

  const fetchCalls = function () {
    $('#calls').load('/api/calls');
  };

  setInterval(fetchCalls, 3000);

  const fetchFires = function () {
    $('#bushfires').load('/api/bushfires');
  };

  setInterval(fetchFires, 4000);
});
