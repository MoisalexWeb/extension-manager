import { useEffect } from "react"
import useExtensionStore from "../../../store/Extensions"


export const useThemeHook = () => {
    const theme = useExtensionStore((state) => state.theme)
    const setTheme = useExtensionStore((state) => state.setTheme)
    

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    useEffect(() => {        
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return {
        theme,
        toggleTheme
    }
}
