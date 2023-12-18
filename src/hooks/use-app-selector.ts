import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store/theme-slice';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
