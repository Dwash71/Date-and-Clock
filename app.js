initialDTM();

function updateDateTime() {
  //Get days of week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  //get months
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  //get days of the week
  const d = new Date();
  let days = daysOfWeek[d.getDay()];

  //get month
  const m = new Date();
  let month = months[m.getMonth()];

  //get date
  const dd = new Date();
  let todaysDate = dd.getDate();

  //get full year
  const y = new Date();
  let year = y.getFullYear();

  //get full date
  const fullDate = (document.getElementById('fullDTM').innerHTML = `${days}, ${month}, ${todaysDate}, ${year}`);

  console.log(fullDate)
  //get time
  const today = new Date();

  //get hours
  let hr = today.getHours() % 12 || 12;
  document.getElementById('hour').innerHTML = hr;
  console.log(hr);

  let ampm = hr <= 12 ? 'p.m.' : 'a.m.';
  document.getElementById('ampm').innerHTML = ampm;
  console.log(ampm);

  //get minutes
  let mm = String(today.getMinutes()).padStart(2, '0');

  document.getElementById('mins').innerHTML = mm;
  console.log(mm);

  //get seconds
  let secs = String(today.getSeconds()).padStart(2, '0');
  document.getElementById('seconds').innerHTML = secs;
}

function initialDTM() {
  updateDateTime();

window.setInterval('updateDateTime()', 1000);
}
