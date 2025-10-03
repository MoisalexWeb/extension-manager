import { FilterBtn } from "../FilterBtn/FilterBtn"

const FilterButtons = () => {
    return (
        <div className="md:flex md:justify-between md:items-center">
            <h1 className="text-center font-bold text-4xl mb-6 text-gray-900 md:mb-0
            dark:text-white transition-colors">
                Extensions List
            </h1>

            <div className="flex gap-3 my-2 justify-center items-center">
                <FilterBtn text="All" />
                <FilterBtn text="Active" />
                <FilterBtn text="Inactive" />
            </div>
            
        </div>
    )
}

export default FilterButtons