import store from '../../store';
import pt from './pt';
import us from './us';

function t(key: string) {
  const state = store.getState();

  if (state.changeLanguageState.language === 'pt-br') {
    return pt[key];
  } else {
    return us[key];
  }
}

export default t;
