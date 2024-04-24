const fontFamilyMYOBRegular = 'NeutroMYOB-Regular';
const fontFamilyMYOBMedium = 'NeutroMYOB-Medium';
const fontFamilyMYOBStrong = 'NeutroMYOB-Demi';

export default {
  colour: {
    primary: '#8241AA',
    secondary: '#ed005f',
    text: '#515e6d',
    heading: '#2e3e4f',
    background: '#f3f4f5',
    footerBackground: '#1b2830',
    navBackground: '#ffffff',
    buttonPrimary: '#ffffff',
    border: '#efefef',
    buttonPrimaryBackground: '#00aa65',
    alert: {
      default: '#f5f5f5',
      success: '#00d1b2',
      danger: '#fff5f7',
    },
  },
  font: {
    size: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.2rem',
    },
    variants: {
      body: {
        family: fontFamilyMYOBRegular,
        style: 'normal',
        weight: 400,
        src: [
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Regular.woff2)',
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Regular.woff)',
        ],
      },
      heading: {
        family: fontFamilyMYOBMedium,
        style: 'normal',
        weight: 600,
        src: [
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Medium.woff2)',
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Medium.woff)',
        ],
      },
      strong: {
        family: fontFamilyMYOBStrong,
        style: 'normal',
        weight: 700,
        src: [
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Demi.woff2)',
          'url(https://assets.digital.myob.com/fonts/NeutroMYOB-Demi.woff)',
        ],
      },
    },
    family: {
      body: fontFamilyMYOBRegular,
      heading: fontFamilyMYOBMedium,
      strong: fontFamilyMYOBStrong,
      fallback:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',
    },
    weight: {
      bold: 600,
      normal: 400,
    },
  },
  lineHeight: {
    text: 1.7,
    heading: 1.5,
  },
  media: {
    large: 992, // mobile-first
    desktop: 768, // mobile-first
    tablet: 576, // mobile-first
  },
};
