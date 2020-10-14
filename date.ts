
//UTC 오늘요일의 오픈아워를 보낸다
function getIsOpen(openHour) {
  const week = new Array('일', '월', '화', '수', '목', '금', '토');

  let now = new Date();
  let nowUTCdayName = week[now.getUTCDay()];

  let openHourArr = [];
  let openStartHourArr = [];
  let openEndHourArr = [];

  if (typeof openHour == 'string') openHourArr = openHour.split('-');
  openHourArr.forEach((hour, i) => {
    if (typeof hour == 'string') {
      if (i == 0) openStartHourArr = hour.split(':');
      if (i == 1) openEndHourArr = hour.split(':');
    }
  });

  let nStartHourArr = [];
  let nEndHourArr = [];

  openStartHourArr.forEach((hour, i) => {
    if (typeof hour == 'string') {
      if (hour.indexOf('0') == 0) {
        nStartHourArr.push(Number(hour.substring(1, 2)));
        console.log(hour);
      } else {
        nStartHourArr.push(Number(hour));
      }
    }
  });

  openEndHourArr.forEach((hour, i) => {
    if (typeof hour == 'string') {
      if (hour.indexOf('0') == 0) {
        nEndHourArr.push(Number(hour.substring(1, 2)));
        console.log(hour);
      } else {
        nEndHourArr.push(Number(hour));
      }
    }
  });

  let utcOpenHourStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    nStartHourArr.length > 0 ? nStartHourArr[0] : 0,
    nStartHourArr.length > 1 ? nStartHourArr[1] : 0,
    59,
    999,
  );

  let utcOpenHourEnd = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    nEndHourArr.length > 0 ? nEndHourArr[0] : 0,
    nEndHourArr.length > 1 ? nEndHourArr[1] : 0,
    59,
    999,
  );

  const endTime = Date.parse(utcOpenHourEnd.toUTCString());
  const startTime = Date.parse(utcOpenHourStart.toUTCString());
  const nowTime = Date.parse(now.toUTCString());

  if (nowTime >= startTime && nowTime <= endTime) {
    return true;
  } else {
    return false;
  }
}
