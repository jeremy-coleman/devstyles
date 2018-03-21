import 'mousetrap';
import { tab, TabStyles } from '../../styles';
import * as React from 'react';
import { connectTeamsComponent, InjectedTeamsProps } from '../index';

export interface TabProps {
  tabs: TabItem[];
  selectedTabId: any;
  autoFocus?: boolean;
}

export interface TabItem {
  text: string;
  onSelect: () => void;
  id: any;
}

class TabInternal extends React.Component<TabProps & InjectedTeamsProps> {
  private tab: HTMLDivElement;
  private mousetrap: MousetrapInstance;
  private itemButtons: Array<HTMLButtonElement>;

  componentDidMount() {
    this.mousetrap = new Mousetrap(this.tab);
    this.handleKeyboard();
  }

  componentWillUnmount() {
    this.mousetrap.reset();
  }

  render() {
    this.itemButtons = [];
    const { context, tabs } = this.props;
    const styles = tab(context);

    const renderTab = this.renderTabWithStyle(styles);

    return (
      <div
        className={styles.container}
        ref={(ref) => this.tab = ref!}
        role="tablist">
        {tabs.map(renderTab)}
      </div>
    );
  }

  private renderTabWithStyle = (styles: TabStyles) => {
    const renderTab = (item: TabItem) => {
      const selected = this.props.selectedTabId === item.id;

      const classes = [styles.normal];
      if (selected) {
        classes.push(styles.active);
      }

      return (
        <button
          tabIndex={selected ? 0 : -1}
          autoFocus={this.props.autoFocus && selected}
          key={item.id}
          onMouseDown={(e) => e.preventDefault()}
          onClick={item.onSelect}
          className={classes.join(' ')}
          ref={(ref) => {
            if (ref) {
              this.itemButtons.push(ref);
            }
          }}
          role="tab">
          {item.text}
        </button>
      );
    };

    return renderTab;
  }

  private handleKeyboard = () => {
    this.mousetrap.bind('left', this.onLeftKey);
    this.mousetrap.bind('right', this.onRightKey);
  }

  private onRightKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    const current = this.currentIndex();
    const next = current + 1 > this.itemButtons.length - 1 ? this.itemButtons.length - 1 : current + 1;
    this.itemButtons[next].focus();
  }

  private onLeftKey = (e: ExtendedKeyboardEvent) => {
    e.preventDefault();
    const current = this.currentIndex();
    const next = current - 1 < 0 ? 0 : current - 1;
    this.itemButtons[next].focus();
  }

//@ts-ignore
  private currentIndex = () => this.itemButtons.indexOf((elm) => elm === document.activeElement);
}

export const Tab = connectTeamsComponent(TabInternal);

