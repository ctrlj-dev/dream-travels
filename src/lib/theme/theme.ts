//TODO: Improve color palette, doesn't seem very clear
const colors = {
  primary: {
    main: '#121212',
    light: '#898989',
  },
  secondary: {
    main: 'white',
    dark: '#B0B0B0',
    light: '#F3F3F3',
  },
  success: {
    main: '#67D071',
  },
  error: {
    main: '#C93957',
  },
  overlay: {
    main: '#12121280',
  },
};

const typography = {
  h1: { fontSize: '32px', lineHeight: '40px' },
  h2: { fontSize: '24px', lineHeight: '30px' },
  h3: { fontSize: '20px', lineHeight: '25px' },
  body: { fontSize: '16px', lineHeight: '24px' },
  caption: { fontSize: '14px', lineHeight: '17.5px' },
};

const borders = {
  main: `1px solid ${colors.secondary.light}`,
  secondary: `2px solid ${colors.primary.main}`,
  radius: {
    main: '100px',
    secondary: '16px',
  },
};

const breakpoints = {
  md: '768px',
  lg: '1024px',
};

const theme = {
  colors,
  borders,
  typography,
  breakpoints,
};

export default theme;
