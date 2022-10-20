import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { loadEnv, defineConfig } from 'vite'
import { typeOf } from './hooks/utils'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import ThemeConfig from './theme.config'

const { screens, colors, sizes, borderRadius, fonts } = ThemeConfig

const minify = (str) => str.replaceAll(' ', '').replaceAll('\n', '')

const baseVariations = Object.fromEntries(
  Object.keys(screens).map((key) => [screens[key], new Set()])
)

const getVariables = (list) => {
  list
    .filter(([, , value]) => typeOf(value) === 'Object')
    .forEach(([, key, value]) => {
      Object.entries(value)
        .filter(([key]) => key !== 'DEFAULT')
        .forEach(([k, value]) => {
          baseVariations[screens[k]].add(`${key}:${value};`)
        })
    })
  return list
    .map(
      ([, key, value]) =>
        `${key}:${typeOf(value) === 'Object' ? value.DEFAULT : value}`
    )
    .join(';')
}

const applyVariations = () =>
  Object.entries(baseVariations)
    .filter(([, value]) => [...value].length > 0)
    .map(([key, value]) =>
      minify(`@media (min-width: ${key}) {
        body{
          ${[...value].join('')}
        }
      }`)
    )
    .join('')

const getColorsVariables = (colors) =>
  getVariables(Object.entries(colors).flatMap(([, variations]) => variations))

const getAttributes = (list) =>
  Object.fromEntries(list.map(([key, value]) => [key, `var(${value})`]))

const getColorsAttributes = (colors) =>
  Object.fromEntries(
    Object.entries(colors).map(([key, variations]) => [
      key,
      getAttributes(variations)
    ])
  )

const fontRules = [
  ...Object.entries(fonts.types).map(([key, value]) => [`font-${key}`, value]),
  ...Object.entries(fonts.sizes).map(([key, value]) => {
    const newKey = new RegExp(`^${key}-(\\d+)$`)
    return [
      newKey,
      ([, size], { rawSelector, theme }) => {
        const toContent = (obj) =>
          Object.entries(obj)
            .map(([key, value]) => `${key}:${value};`)
            .join('')

        const { screens } = theme
        const toUse = value[size]

        const variations = Object.entries(toUse)
          .filter(([key]) => key !== 'DEFAULT')
          .map(([key, value]) =>
            minify(`@media (min-width: ${screens[key]}) {
                .${rawSelector} {
                  ${toContent(value)}
                }
              }`)
          )

        return [
          `.${rawSelector}{${toContent(toUse.DEFAULT)}}`,
          ...variations
        ].join('\n')
      }
    ]
  })
]

// export default config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const ambientMode = env.AMBIENT_ENV
  return {
    // vite config
    plugins: [
      {
        name: 'remove-swiper',
        transform(code, id, options = {}) {
          if (options.ssr)
            return code.replace(/import .swiper\/(s?css|less).*$/gm, '')
        },
      },
      react(),
      ssr({
        prerender: true,
        includeAssetsImportedByServer: ambientMode !== 'development',
        disableAutoFullBuild: true
      }),
      // UnoCSS config
      Unocss({
        presets: [presetAttributify(), presetUno(), presetIcons()],
        theme: {
          breakpoints: screens,
          screens,
          colors: getColorsAttributes(colors),
          spacing: getAttributes(sizes),
          borderRadius: getAttributes(borderRadius)
        },
        rules: [
          ...fontRules,
          [
            /^grid-cols-(\d+)$/,
            ([, d]) => ({
              'grid-template-columns': `repeat(${d},1fr)`,
              display: 'grid'
            })
          ],
          [
            /^grid-rows-(\d+)$/,
            ([, d]) => ({
              'grid-template-rows': `repeat(${d},1fr)`,
              display: 'grid'
            })
          ],
          [
            'stack',
            {
              display: 'flex',
              'flex-direction': 'column'
            }
          ],
          [
            'line',
            {
              display: 'flex',
              'flex-direction': 'row',
              'flex-wrap': 'nowrap',
              'overflow-x': 'auto'
            }
          ],
          [
            /^hide-scrollbar$/,
            () =>
              minify(`
            .hide-scrollbar {
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar { 
              display: none;
            }`)
          ]
        ],
        preflights: [
          {
            getCSS: ({ theme }) => {
              return minify(`:root {
                ${getColorsVariables(colors)};
                ${getVariables(sizes)};
                ${getVariables(borderRadius)};
              }
              ${applyVariations()}`)
            }
          }
        ]
      })
    ]
  }
})
