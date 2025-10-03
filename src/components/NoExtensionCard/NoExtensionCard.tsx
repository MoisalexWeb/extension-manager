interface Props {
    text: string
}

export const NoExtensionCard = ({ text }: Props) => {
    return (
        <p className="bg-white w-full col-span-full max-w-lg mx-auto
            shadow-2xs rounded-lg p-5 text-center text-xl font-semibold text-gray-800
            dark:bg-neutral-700 dark:text-gray-300
        ">{text}</p>
    )
}
