// total india overview
$.getJSON('https://api.rootnet.in/covid19-in/stats/latest', function (latest) {
  // console.log(latest.data.summary.total);
  $('.totalcases').append(latest.data.summary.total);
  $('.totalrecovered').append(latest.data.summary.discharged);
  $('.totalactive').append(
    latest.data.summary.total - (latest.data.summary.discharged + latest.data.summary.deaths)
  );
  $('.totaldeaths').append(latest.data.summary.deaths);
});

$.getJSON('https://api.covid19india.org/v4/min/timeseries.min.json', function (data) {
  console.log(data.mp);
  // var today = data.cases_time_series[data.cases_time_series.length - 1];
  // var yesterday = data.cases_time_series[data.cases_time_series.length - 2];
  // // console.log(today);
  // // console.log(yesterday);
  // $('.todaydate').append(today.date);
  // $('.yesterdaydate').append(yesterday.date);
  // $('.todaycases').append(today.dailyconfirmed);
  // $('.todayrecovered').append(today.dailyrecovered);
  // $('.todayactive').append(today.dailyconfirmed - today.dailydeceased - today.dailyrecovered);
  // $('.todaydeaths').append(today.dailydeceased);
});

// total overview world
$.getJSON('https://api.covid19api.com/summary', function (all) {
  // console.log(all.Global);
  $('.totalcasesw').append(all.Global.TotalConfirmed);
  $('.totalrecoveredw').append(all.Global.TotalConfirmed - (all.Global.TotalRecovered + all.Global.TotalDeaths));
  $('.totalactivew').append(Math.floor(all.Global.TotalDeaths / 150));
  $('.totaldeathsw').append(all.Global.TotalDeaths);
});
