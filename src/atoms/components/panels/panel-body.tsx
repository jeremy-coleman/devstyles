import { panel } from '../../styles/components/panel';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface PanelBodyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

const PanelBodyView: React.StatelessComponent<PanelBodyProps & InjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const classNames = panel(context);
    return (
      <div
        className={classes(classNames.body, className)}
        {...rest}>
        {props.children}
      </div>
    );
  };

export const PanelBody = connectTeamsComponent(PanelBodyView);
