import {format} from 'date-fns';
import localeBR from 'date-fns/locale/pt-BR';

export const timestempToDate = (timesTemp: number) =>
  new Date(timesTemp * 1000);

export function formatDate(timesTemp: number) {
  const date = timestempToDate(timesTemp);
  const formatType = 'd  MMMM  yyyy';

  return format(date, formatType, {locale: localeBR});
}

export function returnOnlyDay(timesTemp: number) {
  const date = timestempToDate(timesTemp);
  const formatType = 'EEEEEE';

  return format(date, formatType, {locale: localeBR});
}

export function returnOnlyDayAndMonth(timesTemp: number) {
  const date = timestempToDate(timesTemp);
  const formatType = 'd/M';

  return format(date, formatType, {locale: localeBR});
}
