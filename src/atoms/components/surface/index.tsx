import { surface } from '../../styles/components/surface';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../teams-context';
import classes from '../utils/classes';

export interface SurfaceProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const SurfaceView: React.StatelessComponent<SurfaceProps & InjectedTeamsProps> =
  (props) => {
    const { context, className, ...rest } = props;
    const themeClassName = surface(context);

    return (
      <div
        data-component-type="Surface"
        className={classes(themeClassName, className)} {...rest}>{props.children}</div>
    );
  };

export const Surface = connectTeamsComponent<SurfaceProps>(SurfaceView);
