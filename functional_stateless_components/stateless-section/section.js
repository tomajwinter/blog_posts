import React from 'react';
import classNames from 'classnames';

const title = (props) => {
  return <h2 className='section__title'>{ props.title }</h2>;
}

const subtitle = (props) => {
  if (!props.subtitle) { return null; }
  return <p className='section__title'>{ props.subtitle }</p>;
}

let Section = (props) =>
  <div className={ classNames(props.className, 'section') }>
    { title(props) }
    { subtitle(props) }
    { props.children }
  </div>
;

Section.propTypes = {
  title:    React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node
};

export default Section;
