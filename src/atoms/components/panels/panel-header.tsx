import { panel } from '../../styles/components/panel';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface PanelHeaderProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelHeaderView: React.StatelessComponent<PanelHeaderProps & InjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        className={classes(classNames.header, className)}
        {...rest}>
        {props.children}
      </div>
    );
  };

export const PanelHeader = connectTeamsComponent(PanelHeaderView);
