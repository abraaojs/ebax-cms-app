import formatClassString from "./format.class.string"

export default (mobileClass?: string, desktopClass?: string): string => {
  const mobile = formatClassString(mobileClass ? mobileClass : '')
  const desktop = formatClassString(desktopClass ? desktopClass : '')
  return mobile + " " + desktop
}