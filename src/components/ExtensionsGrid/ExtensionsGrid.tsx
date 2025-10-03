import { ExtensionCard } from "../ExtensionCard/ExtensionCard"
import useExtensionStore from "../../store/Extensions"
import { NoExtensionCard } from "../NoExtensionCard/NoExtensionCard";

export const ExtensionsGrid = () => {
    const extensions = useExtensionStore((state) => state.extensions);
    const currentFilter = useExtensionStore((state) => state.currentFilter);

    const filteredExtensions = currentFilter === "Active"
        ? extensions.filter((ext) => ext.isActive)
        : (currentFilter === "Inactive") ?
            extensions.filter((ext) => !ext.isActive) : extensions


    return (
        <div className="grid grid-cols-1 mt-10 gap-5 justify-items-center
            md:grid-cols-2 lg:grid-cols-3
        ">
            {
                filteredExtensions.length > 0 ? filteredExtensions.map((extension) => (
                    <ExtensionCard
                        key={extension.id}
                        name={extension.name}
                        logo={extension.logo}
                        description={extension.description}
                        isActive={extension.isActive}
                        id={extension.id}
                    />
                ))
                : <NoExtensionCard text={`There is no any ${currentFilter} extensions`}/>
            }
        </div>
    )
}
