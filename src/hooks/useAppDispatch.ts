import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  DispatchProp,
  RootStateOrAny,
} from 'react-redux';

export const useAppDispatch = () => useDispatch<DispatchProp | any>();
export const useAppSelector: TypedUseSelectorHook<RootStateOrAny | any> =
  useSelector;
