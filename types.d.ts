export type ExtensionItem = {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
    id: number;
}

export type FilterType = "All" | "Active" | "Inactive";