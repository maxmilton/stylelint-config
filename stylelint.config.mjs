const propertyOrder = [
  'all',
  '#apply',

  // Position
  'position',
  'z-index',
  'inset',
  'inset-block',
  'inset-block-start',
  'inset-block-end',
  'inset-inline',
  'inset-inline-start',
  'inset-inline-end',
  'top',
  'right',
  'bottom',
  'left',

  // Box model & layout
  'display',
  'box-sizing',
  'vertical-align',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'grid',
  'grid-area',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row-gap',
  'grid-column-gap',
  'gap',
  'row-gap',
  'column-gap',
  'place-content',
  'place-items',
  'place-self',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'justify-items',
  'justify-self',
  'order',
  'float',
  'clear',
  'object-fit',
  'overflow',
  'overflow-x',
  'overflow-y',
  'overflow-scrolling',
  'clip',
  'clip-path',
  'inline-size',
  'width',
  'min-width',
  'max-width',
  'height',
  'min-height',
  'max-height',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'border',
  'border-spacing',
  'border-collapse',
  'border-width',
  'border-style',
  'border-color',
  'border-radius',
  'border-image',
  'border-image-source',
  'border-image-slice',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'border-top',
  'border-top-width',
  'border-top-style',
  'border-top-color',
  'border-top-radius',
  'border-top-image',
  'border-right',
  'border-right-width',
  'border-right-style',
  'border-right-color',
  'border-right-radius',
  'border-right-image',
  'border-bottom',
  'border-bottom-width',
  'border-bottom-style',
  'border-bottom-color',
  'border-bottom-radius',
  'border-bottom-image',
  'border-left',
  'border-left-width',
  'border-left-style',
  'border-left-color',
  'border-left-radius',
  'border-left-image',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  'border-corner-image',
  'border-top-left-image',
  'border-top-right-image',
  'border-bottom-right-image',
  'border-bottom-left-image',

  // Typography
  'color',
  'font',
  'font-family',
  'font-size',
  'font-style',
  'font-weight',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-display',
  'src',
  'unicode-range',
  'line-height',
  'letter-spacing',
  'quotes',
  'counter-increment',
  'counter-reset',
  'writing-mode',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-indent',
  'text-justify',
  'text-outline',
  'text-transform',
  'text-wrap',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-shadow',
  'white-space',
  'word-break',
  'word-spacing',
  'word-wrap',
  'overflow-wrap',
  'tab-size',
  'hyphens',
];

/** @type {import('stylelint').Config} */
export const config = {
  plugins: ['stylelint-order'],
  rules: {
    'comment-empty-line-before': [
      'always',
      { ignoreComments: ['prettier-ignore'] },
    ],
    'declaration-property-value-no-unknown': [
      true,
      { ignoreProperties: { '#apply': '/.+/' } },
    ],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        { type: 'at-rule', name: 'supports' },
        { type: 'at-rule', name: 'media' },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'order/properties-order': [
      propertyOrder,
      {
        unspecified: 'bottomAlphabetical',
        severity: 'warning',
      },
    ],
    'property-no-unknown': [true, { ignoreProperties: ['#apply'] }],
  },
  overrides: [
    {
      files: ['**/*.xcss'],
      customSyntax: 'postcss-ekscss',
    },
  ],
};

export default config;
