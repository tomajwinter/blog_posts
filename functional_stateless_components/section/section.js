import React from 'react';
import classNames from 'classnames';

class Section extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
    children: PropTypes.node
  }

  title = () => {
    return (
      <h2 className='section__title'>{ props.title }</h2>
    );
  }

  subtitle = () => {
    if (!this.props.subtitle) { return null; }

    return (
      <p className='section__subtitle'>{ props.subtitle }</p>
    );
  }

  render() {
    return (
      <div className={ classNames(props.className, 'section') }>
        { this.title() }
        { this.subtitle() }
        { props.children }
      </div>
    );
  }
}

export default Section;
