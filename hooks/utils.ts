export const typeOf = (el: any) =>
  'object' === typeof el && null !== el
    ? el.constructor.name
    : {}.toString.call(el)?.match(/\s(\w+)/)?.[1]

export const arrayOf = (length: number) => Array.from({ length }, (_, i) => i)

interface Config {
  [thingName: string]: string
}
export const getValue = (block: Config, att: string) => (config: Config) =>
  config[block[att]]
