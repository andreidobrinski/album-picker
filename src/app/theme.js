import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  // eslint-disable-next-line no-param-reassign
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const colours = {
  main: '#7BB9FF',
  cta: '#062F70',
  support: '#FFFFFF',
  text: '#062F70',
};

export const fonts = {
  main: '"Oxygen", sans-serif',
};

export const spacer = '16px';

export default {
  media,
  colours,
  fonts,
  spacer,
};
