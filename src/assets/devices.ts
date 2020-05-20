const size = {
  desktop: '2560px',
  laptop: '1440px',
  laptopS: '1024px',
  mobile: '425px',
  tablet: '768px',
};

const devices = {
  desktop: `(max-width: ${size.desktop})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopS: `(max-width: ${size.laptopS})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
};

export { devices };
