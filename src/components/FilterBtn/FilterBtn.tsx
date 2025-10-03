import useExtensionStore from "../../store/Extensions"
import type { FilterType } from "../../../types.d.ts"

interface Props {
    text: FilterType
}

export const FilterBtn = ({ text }: Props) => {
    const filter = useExtensionStore((state) => state.currentFilter)
    const changeFilter = useExtensionStore(state => state.setCurrentFilter)

    return (
        <button className={`text-lg font-medium py-2.5 px-5 rounded-full cursor-pointer
            transition leading-none border-2 border-transparent hover:border-red-700
            outline outline-transparent focus-visible:border-red-700
            dark:bg-neutral-700 dark:text-gray-300 dark:hover:bg-neutral-600
            dark:hover:border-white dark:focus-visible:border-white
            ${filter === text 
                ? `bg-red-700 text-white hover:border-white hover:outline-red-700 focus-visible:border-white focus-visible:outline-red-700
                dark:bg-red-700/85 dark:hover:bg-red-700/85`
                : "bg-white text-gray-700"}
            `}
            onClick={() => changeFilter(text)}
        >
            {text}
        </button>
    )
}