import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { TODO_STATUS_MAP } from '../maps';
import { changeFilter as changeFilterFromStore } from '../store/slices/settingsSlice';

export const useSettings = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useDispatch();

  const changeFilter = (filter: keyof typeof TODO_STATUS_MAP | null) => {
    dispatch(changeFilterFromStore(filter));
  };

  return {
    filter: settings.filter,
    changeFilter,
  };
};
