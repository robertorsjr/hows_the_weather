import {ActionProps, DispatchProps} from '../types';

const Types = {
  CHANGE: 'changeLanguage/REQUEST',
};

export const Creators = {
  change: (lang: string) => ({
    type: Types.CHANGE,
    data: {
      language: lang,
    },
  }),
};

export function changeLanguage(lang: string) {
  return (dispatch: DispatchProps) => {
    dispatch(Creators.change(lang));
  };
}

const initialState = {
  language: 'pt-br',
};

export default function changeLanguageState(
  state = initialState,
  action: ActionProps,
) {
  const {type, data} = action;

  switch (type) {
    case Types.CHANGE: {
      return {...state, ...data};
    }

    default: {
      return state;
    }
  }
}
