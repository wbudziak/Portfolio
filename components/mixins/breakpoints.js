import { css } from "styled-components";

export const breakpoints = {
  xs: 280,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
  xxxxl: 1800,
};

export const above = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
  xxxl: `(min-width: ${breakpoints.xxxl}px)`,
  xxxxl: `(min-width: ${breakpoints.xxxxl}px)`,
};

export const below = {
  xs: `(max-width: ${breakpoints.xs}px)`,
  sm: `(max-width: ${breakpoints.sm}px)`,
  md: `(max-width: ${breakpoints.md}px)`,
  lg: `(max-width: ${breakpoints.lg}px)`,
  xl: `(max-width: ${breakpoints.xl}px)`,
  xxl: `(max-width: ${breakpoints.xxl}px)`,
  xxxl: `(max-width: ${breakpoints.xxxl}px)`,
  xxxxl: `(max-width: ${breakpoints.xxxxl}px)`,
};

export const media = css`
  margin-right: 0 auto;
  width: 100%;

  @media ${below.sm} {
    /* padding: 0 15px; */
  }
  @media ${above.sm} {
    max-width: 540px;
  }
  @media ${above.md} {
    max-width: 720px;
  }
  @media ${above.lg} {
    max-width: 960px;
  }
  @media ${above.xl} {
    max-width: 1140px;
  }
  @media ${above.xxl} {
    max-width: 1320px;
  }
  @media ${above.xxxl} {
    /* max-width: 1500px; */
  }
  @media ${above.xxxxl} {
    /* max-width: 1680px; */
  }
`;
