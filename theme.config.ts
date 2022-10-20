export default {
  screens: {
    xs: '360px',
    sm: '375px',
    md: '768px',
    lg: '1024px',
    xl: '1366px'
  },
  colors: {
    primary: [
      ['DEFAULT', '--prm', '#0051FF'],
      ['focus', '--prm-fcs', '#0040CA'],
      ['light', '--prm-l', '#3D79FC'],
      ['extralight', '--prm-xl', '#79A1F9'],
      ['dark', '--prm-d', '#002F95'],
      ['extradark', '--prm-xd', '#001F60']
    ],
    secondary: [
      ['DEFAULT', '--sec', '#4CE2C0'],
      ['focus', '--sec-fcs', '#FF0000'],
      ['light', '--sec-l', '#0051FF'],
      ['extralight', '--sec-xl', '#0051FF'],
      ['dark', '--sec-d', '#0051FF'],
      ['extradark', '--sec-xd', '#0051FF']
    ],
    tertiary: [
      ['DEFAULT', '--ter', '#000E2B'],

    ],
    accent: [
      ['1', '--acc-1', '#9C50FF'],
      ['2', '--acc-2', '#531DBD'],
      ['3', '--acc-3', '#D6F54E'],
      ['4', '--acc-4', '#FF8200']
    ],
    base: [
      ['DEFAULT', '--bs', '#FFFFFF'],
      ['1', '--bs-1', '#F0F4FD'],
      ['2', '--bs-2', '#F2F2F2'],
      ['3', '--bs-3', '#000E2B'],
      ['4', '--bs-4', '#9FACFF']
    ],
    success: [['DEFAULT', '--suc', '#20A83E']],
    warning: [['DEFAULT', '--wrn', '#FFB200']],
    error: [['DEFAULT', '--err', '#D21E32']],
    content: [
      ['light', '--cnt-l', '#000E2B'],
      ['dark', '--cnt-d', '#FFFFFF']
    ]
  },
  sizes: [
    ['2xs', '--2xs', '2px'],
    ['xs', '--xs', '4px'],
    ['sm', '--sm', '8px'],
    ['smd', '--smd', '12px'],
    ['xmd', '--xmd', '14px'],
    ['md', '--md', '16px'],
    ['lg', '--lg', '24px'],
    ['lg2', '--lg2', '28px'],
    ['lgx', '--lg2', '30px'],
    ['xl', '--xl', '32px'],
    ['2xl', '--2xl', '40px'],
    ['3xl', '--3xl', '48px'],
    ['4xl', '--4xl', '56px'],
    ['5xl', '--5xl', '64px'],
    ['5x2', '--5x2', '68px'],
    ['6xl', '--6xl', '72px'],
    ['7xl', '--7xl', '80px'],
    ['8xl', '--8xl', '88px'],
    ['9xl', '--9xl', '96px'],
    ['10xl', '--10xl', '112px'],
    ['11xl', '--11xl', '120px'],
    ['12xl', '--12xl', '128px'],
    ['13xl', '--13xl', '136px'],
    ['14xl', '--13xl', '144px'],
    [
      'sct',
      '--rd-sct',
      {
        DEFAULT: '16px',
        md: '32px'
      }
    ]
  ],
  borderRadius: [
    ['xs', '--rd-xs', '8px'],
    ['sm', '--rd-sm', '16px'],
    ['md', '--rd-md', '24px'],
    ['lg', '--rd-lg', '32px'],
    ['btn', '--rd-btn', '32px'],
    [
      'sct',
      '--rd-sct',
      {
        DEFAULT: '16px',
        md: '32px'
      }
    ]
  ],
  fonts: {
    types: {
      primary: {
        'font-family': 'Topol, sans-serif',
        'letter-spacing': '-0.04em',
        'line-height': '.93em',
        'text-transform': 'uppercase'
      },
      secondary: {
        'font-family': 'Inter, sans-serif',
        'line-height': '1.26em'
      },
      tertiary: {
        'font-family': 'Inter, sans-serif',
        'line-height': '1.26em'
      }
    },
    sizes: {
      title: {
        1: {
          DEFAULT: {
            'font-size': '40px',
            'font-weight': '700'
          },
          md: {
            'font-size': '75px',
            'font-weight': '700'
          }
        },
        2: {
          DEFAULT: {
            'font-size': '34px',
            'font-weight': '700'
          },
          md: {
            'font-size': '55px',
            'font-weight': '700'
          }
        },
        3: {
          DEFAULT: {
            'font-size': '28px',
            'font-weight': '700'
          },
          md: {
            'font-size': '48px',
            'font-weight': '700'
          }
        },
        4: {
          DEFAULT: {
            'font-size': '20px',
            'font-weight': '700'
          },
          md: {
            'font-size': '30px',
            'font-weight': '700'
          }
        },
        5: {
          DEFAULT: {
            'font-size': '16px',
            'font-weight': '700'
          },
          md: {
            'font-size': '24px',
            'font-weight': '700'
          }
        },
        6: {
          DEFAULT: {
            'font-size': '14px',
            'font-weight': '700'
          },
          md: {
            'font-size': '18px',
            'font-weight': '700'
          }
        },
        7: {
          DEFAULT: {
            'font-size': '24px',
            'font-weight': '700',
            'line-height': '36px'
          },
          md: {
            'font-size': '30px',
            'font-weight': '700',
            'line-height': '39px'
          }
        },
        8: {
          DEFAULT: {
            'font-size': '12px',
            'font-weight': '400',
            'line-height': '18px'
          },
          md: {
            'font-size': '14px',
            'font-weight': '400',
            'line-height': '22px'
          }
        },
        9: {
          DEFAULT: {
            'font-size': '40px',
            'font-weight': '700',
            'line-height': '22px'
          },
          md: {
            'font-size': '55px',
            'font-weight': '700',
            'line-height': '50px'
          }
        },
        10: {
          DEFAULT: {
            'font-size': '28px',
            'font-weight': '700',
            'line-height': '18px'
          },
          md: {
            'font-size': '30px',
            'font-weight': '700',
            'line-height': '22px'
          }
        }
      },
      paragraph: {
        1: {
          DEFAULT: {
            'font-size': '16px'
          },
          md: {
            'font-size': '18px'
          }
        },
        2: {
          DEFAULT: {
            'font-size': '14px'
          },
          md: {
            'font-size': '16px'
          }
        },
        3: {
          DEFAULT: {
            'font-size': '12px'
          },
          md: {
            'font-size': '14px'
          }
        },
        4: {
          DEFAULT: {
            'font-size': '10px'
          },
          md: {
            'font-size': '12px'
          }
        },
        5: {
          DEFAULT: {
            'font-size': '8px'
          },
          md: {
            'font-size': '10px'
          }
        },
        6: {
          DEFAULT: {
            'font-size': '8px'
          }
        },
        7: {
          DEFAULT: {
            'font-size': '12px',
            'line-height': '18px',
            'font-weight': '700'
          },
          md: {
            'font-size': '14px',
            'line-height': '22px',
            'font-weight': '700'
          }
        },
        8: {
          DEFAULT: {
            'font-size': '12px',
            'line-height': '22px',
            'font-weight': '400'
          },
          md: {
            'font-size': '14px',
            'line-height': '22px',
            'font-weight': '400'
          }
        }
      }
    }
  }
}
