// convert time units
export const covertTime = (unixTime) => {
  let time = new Date(unixTime * 1000).toLocaleTimeString();
  return time.startsWith("0") ? time.substring(1) : time;
};

//convert temp
export const covertTemp = (c) => c - 273;

//get day of the week
export const getDayOfWeek = (unixTime) => {
  let day = new Date(unixTime * 1000).getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // get day as per unix time
  switch (day) {
    case 0:
      return daysOfWeek[0];

    case 1:
      return daysOfWeek[1];

    case 2:
      return daysOfWeek[2];

    case 3:
      return daysOfWeek[3];

    case 4:
      return daysOfWeek[4];

    case 5:
      return daysOfWeek[5];

    case 6:
      return daysOfWeek[6];

    default:
      throw new Error("No day!");
  }
};
