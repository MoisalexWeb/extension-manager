import Logo from "/images/logo.svg"
import LogoDark from "/images/logo-dark.svg"
import IconMoon from "/images/icon-moon.svg"
import IconSun from "/images/icon-sun.svg"
import { useThemeHook } from "./hooks/useThemeHook"

export const Header = () => {
    const { theme, toggleTheme } = useThemeHook()
    return (
        <header className="w-[90%] mx-auto my-7 rounded-lg py-3 px-2
            flex justify-between items-center bg-white shadow-xs max-w-6xl
            dark:bg-neutral-700 transition-colors
        ">
            <img src={(theme === "dark" ? LogoDark : Logo)}
                className="w-max" alt="Logo"
            />

            <button className="bg-gray-200 w-11 h-11 rounded-lg flex justify-center items-center cursor-pointer outline-0
                border-2 border-transparent hover:border-red-700 focus-visible:border-red-700 transition-all duration-200
                dark:bg-neutral-600 dark:hover:bg-neutral-500/60 dark:hover:border-white dark:focus-visible:border-white"
                onClick={toggleTheme}
            >
                <img className="w-6 h-6" src={theme === "light" ? IconMoon : IconSun} alt="Icon theme" />
            </button>
        </header>
    )
}
