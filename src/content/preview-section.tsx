import * as Components from '../atoms/components';
import * as Icons from '../atoms';
import * as React from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

import * as styles from './styles';

export interface PreviewSectionProps {
   code: string;
}

export interface PreviewSectionState {
  codeHidden: boolean;
}

type ConnectedProps = PreviewSectionProps & Components.InjectedTeamsProps;

export class PreviewSectionInner extends React.Component<ConnectedProps, PreviewSectionState> {
  state = {
    codeHidden: true,
  };

  render() {
    const { context, code } = this.props;
    const { codeHidden } = this.state;
    const classes = styles.content(context);

    return <LiveProvider className={classes.container} code={code} scope={{...Components, ...Icons}}>
      <LivePreview className={classes.preview} />
      <Components.SecondaryButton
        className={classes.codeToggle}
        onClick={this.toggleCode}>
        {codeHidden ? 'Show Code Editor' : 'Hide Code Editor'}
      </Components.SecondaryButton>
      {codeHidden ? null :
        <LiveEditor className={classes.code} />}
      <LiveError className={classes.error} />
    </LiveProvider>;
  }

  private toggleCode = () => {
    this.setState({codeHidden: !this.state.codeHidden});
  }
}

export const PreviewSection = Components.connectTeamsComponent(PreviewSectionInner);
