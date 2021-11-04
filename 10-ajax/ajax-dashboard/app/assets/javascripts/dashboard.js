$(document).ready(function () {

  const fetchInfo = function () {
    $.getJSON('/api/info').done(function (info) {
      $('#brother').text(info.brother);
      $('#time').text(info.time);
      $('#uptime').text(info.uptime);
      $('#calls').text(info.calls);
      $('#bushfires').text(info.bushfires);
    });
  };

  setInterval(fetchInfo, 3000);

  // const fetchBrother = function () {
  //   $('#brother').load('/api/brother');
  // };
  //
  // setInterval(fetchBrother, 4000);
});
