import { secondaryButton } from '../../styles/components/secondary-button';
import * as React from 'react';
import { Focusable } from '../focusable';
import { InjectedTeamsProps } from '../index';
import { connectTeamsComponent } from '../teams-context';
import classes from '../utils/classes';

export interface SecondaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
  onRef?: (ref: React.Component & Focusable | null) => void;
}

class SecondaryButtonView extends React.Component<SecondaryButtonProps & InjectedTeamsProps> implements Focusable {
  private button: HTMLButtonElement | null;

  componentDidMount() {
    if (this.props.onRef) {
      this.props.onRef(this);
    }
  }

  componentWillUnmount() {
    if (this.props.onRef) {
      this.props.onRef(null);
    }
  }

  focus() {
    if (this.button) {
      this.button.focus();
    }
  }

  render() {
    const { context, className, children, onRef, ...rest } = this.props;
    const themeClassName = secondaryButton(context);

    return <button
      ref={(ref) => this.button = ref}
      role="button"
      onMouseDown={(e) => e.preventDefault()}
      className={classes(themeClassName, className)}
      {...rest}
    >
      {children}
    </button>;
  }
}

export const SecondaryButton = connectTeamsComponent(SecondaryButtonView);
