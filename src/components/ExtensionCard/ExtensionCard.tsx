import useExtensionStore from "../../store/Extensions"

interface Props {
    logo: string
    name: string
    description: string
    isActive: boolean
    id: number
}

export const ExtensionCard = ({ logo, name, description, isActive, id }: Props) => {
    const setToggleExtension = useExtensionStore((state) => state.setToggleExtension);


    const handleActiveToggle = () => {
        setToggleExtension(id);
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-2xs w-full max-w-lg transition-all
            border-2 border-transparent dark:bg-neutral-800 dark:border-gray-500
        ">
            <div className="flex gap-5 items-start">
                <img src={logo} alt={name} />

                <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-gray-100">{name}</h3>
                    <p className="text-neutral-500 text-sm lg:text-base dark:text-gray-300">{description}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <span className="border border-neutral-500 font-semibold rounded-full py-1 px-3 text-sm text-gray-900 dark:text-white">Remove</span>

                <button className={`bg-neutral-400 rounded-full py-3 px-2 w-12 h-6 relative 
                    cursor-pointer transition-all border-2 border-transparent outline-2 outline-transparent
                    hover:border-white hover:outline-red-700 focus-visible:border-white focus-visible:outline-red-700
                    ${isActive ? "bg-red-700" : ""}
                    dark:!outline-transparent
                `}
                    onClick={handleActiveToggle}
                >
                    <span className={`block absolute top-0.5 bg-white rounded-full w-5 h-5 transition-all 
                        ${isActive ? "left-5.5" : "left-0.5"}`}>
                    </span>
                </button>
            </div>
        </div>
    )
}
