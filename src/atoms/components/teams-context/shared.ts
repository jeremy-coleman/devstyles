import { Context } from '../../styles';
import * as PropTypes from 'prop-types';

export const ContextProps = {
  subscribe: PropTypes.func.isRequired,
};

export interface ThemeObserver {
  (context: Context): void;
}

export interface ComponentContext {
  subscribe: (observer: ThemeObserver) => Unsubscribe;
}

export interface Unsubscribe {
  (): void;
}
