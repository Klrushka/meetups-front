import { getTheme } from '@themes'
import { Themes } from '@themes/themes.enum'

export const themeSwithcher = (setTheme) => {
  return (event) => {
    event.target.checked ? setTheme(getTheme(Themes.DARK)) : setTheme(getTheme(Themes.LIGHT))
  }
}