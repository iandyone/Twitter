import { DispatchType, RootState } from '@store/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useDispatchTyped: () => DispatchType = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;
