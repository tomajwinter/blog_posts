import React from 'react';
import { shallow } from 'enzyme';
import Section from './section';

describe('Section', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Section
        className='my-custom-class'
        title='My Section Title'
      >
        <p>This is some content</p>
      </Section>
    );
  });

  it('renders with main and custom classes', () => {
    expect(wrapper.find('.section')).toBeTruthy()
    expect(wrapper.find('.my-custom-class')).toBeTruthy()
  });

  it('renders a title', () => {
    let title = wrapper.find('.section__title')
    expect(title.text()).toEqual('My Section Title')
  });

  it('renders a subtitle when provided', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Section
          title='My Section Title'
          subtitle='My Section Subitle'
        >
          <p>This is some content</p>
        </Section>
      );
    });

    let title = wrapper.find('.section__subtitle')
    expect(subtitle.text()).toEqual('My Section Subitle')
  });

  it('renders the children content', () => {
    expect(wrapper.contains(<p>This is some content</p>)).toBeTruthy();
  });
});
