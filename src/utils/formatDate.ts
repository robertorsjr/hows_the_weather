import {format} from 'date-fns';
import store from '../store';
import localeBR from 'date-fns/locale/pt-BR';
import localeUS from 'date-fns/locale/en-US';

export const timestempToDate = (timesTemp: number) =>
  new Date(timesTemp * 1000);

export function returnOnlyDay(timesTemp: number) {
  const state = store.getState();
  const isPtBr = state.changeLanguageState.language === 'pt-br';

  const date = timestempToDate(timesTemp);
  const formatType = 'EEEEEE';

  return format(date, formatType, {locale: isPtBr ? localeBR : localeUS});
}

export function returnOnlyDayAndMonth(timesTemp: number) {
  const state = store.getState();
  const isPtBr = state.changeLanguageState.language === 'pt-br';

  const date = timestempToDate(timesTemp);
  const formatType = isPtBr ? 'd/M' : 'M/d';

  return format(date, formatType, {locale: isPtBr ? localeBR : localeUS});
}
