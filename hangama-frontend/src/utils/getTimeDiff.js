import moment from "moment";

export const getTimeDiff = (params) => {
  const { startTime, endTime, type = "minutes" } = params;

  // return moment(endTime).diff(startTime), 'days')
  return moment(endTime).diff(moment(startTime), type);
};
