import { grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import { css } from 'styled-components'
import { FormDown, FormUp } from 'grommet-icons'

const baseSpacing = 24

const fontSizing = factor => {
  const scale = baseSpacing * 0.25
  const baseFontSize = baseSpacing - scale

  const size = Math.round(baseFontSize + factor * scale)
  const height = Math.round(baseSpacing + factor * scale)
  const maxWidth = baseSpacing * size

  return {
    size: `${size}px`,
    height: `${height}px`,
    maxWidth: `${maxWidth}px`,
  }
}

export const customTheme = deepMerge(grommet, {
  spacing: baseSpacing,
  // defaultMode: 'light',
  global: {
    font: {
      family: '"Gotham", "Lato", sans-serif',
    },
    colors: {
      icon: 'text',
      brand: 'blue!',
      background: {
        dark: '#1A1F2B',
        light: '#FFFFFF',
      },
      'background-back': {
        dark: '#1A1F2B',
        light: '#EFEFEF',
      },
      'background-front': {
        dark: '#222938',
        light: '#FFFFFF',
      },
      'background-contrast': {
        dark: '#FFFFFF08',
        light: '#11111108',
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333',
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000',
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444',
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666',
      },
      border: {
        light: '#CCCCCC',
        dark: '#444444',
      },
      control: 'brand',
      'active-background': '#EFEFEF',
      'active-text': 'text-strong',
      'selected-background': 'active-background',
      'selected-text': 'text-strong',
      'status-critical': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      blue: {
        dark: '#0E5265',
        light: '#00C8FF',
      },
      'blue!': '#3e5170',
      green: {
        dark: '#007A5E',
        light: '#6FFFB0',
      },
      'green!': '#00C781',
      teal: {
        dark: '#007366',
        light: '#82FFF2',
      },
      'teal!': '#00E8CF',
      purple: {
        dark: '#371177',
        light: '#F740FF',
      },
      'purple!': '#7630EA',
      red: {
        dark: '#4B1916',
        light: '#FF4F4F',
      },
      'red!': '#FF0000',
      orange: {
        dark: '#CC4B00',
        light: '#FFB024',
      },
      'orange!': '#FF8300',
      yellow: {
        dark: '#D78F00',
        light: '#FFEB59',
      },
      'yellow!': '#FEC901',
      'graph-0': 'orange',
      'graph-1': 'blue',
      'graph-2': 'purple',
      focus: 'blue!',
    },
    active: {
      background: 'active-background',
      color: 'active-text',
    },
    hover: {
      background: 'active-background',
      color: 'active-text',
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text',
    },
  },
  anchor: {
    fontWeight: 700,
    textDecoration: 'none',
    hover: {
      textDecoration: 'none',
    },
  },
  button: {
    border: {
      radius: '6px',
    },
    extend: css`
      ${props => !props.plain && 'font-weight: bold;'}
    `,
  },
  heading: {
    level: {
      1: {
        medium: fontSizing(5),
      },
      2: {
        small: fontSizing(1),
        medium: fontSizing(3),
      },
      3: {
        medium: fontSizing(1),
      },
    },
    weight: 700,
  },
  formField: {
    round: 'xsmall',
    border: {
      side: 'all',
    },
    label: {
      size: 'xsmall',
      margin: { horizontal: 'none' },
    },
  },
  icon: {
    size: {
      xxlarge: '166px',
    },
  },
  select: {
    options: {
      pad: 'none',
      text: {
        size: 'xsmall',
      },
    },
    icons: {
      down: FormDown,
      up: FormUp,
    },
  },
  text: {
    small: fontSizing(0),
    medium: fontSizing(1),
    large: fontSizing(3),
  },
  paragraph: {
    small: fontSizing(0),
    medium: fontSizing(1),
    large: fontSizing(3),
  },
})
