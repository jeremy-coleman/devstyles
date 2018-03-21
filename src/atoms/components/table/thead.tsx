import { table } from '../../styles/components/table';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

const THeadInternal: React.StatelessComponent<InjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <thead
    data-component-type="THead"
    className={themeClassNames.thead}>{props.children}</thead>;
};

export const THead = connectTeamsComponent<{}>(THeadInternal);
