const dateConversion = (date, timeShiftFromUTC) => {
  const localTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const utcTime = localTime + localOffset;
  const desiredTimeInMiliSec = utcTime + timeShiftFromUTC * 1000;
  return new Date(desiredTimeInMiliSec);
};

export default dateConversion;