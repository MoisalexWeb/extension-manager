import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ExtensionItem } from "../../types.d.ts";
import type { FilterType } from "../../types.d.ts";
import extensionsData from "../../data.json"


interface ExtensionState {
    currentFilter: FilterType;
    setCurrentFilter: (filter: FilterType) => void;

    extensions: ExtensionItem[];
    setToggleExtension: (id: number) => void;

    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

const useExtensionStore = create<ExtensionState>()(
    persist(
        (set) => ({
            currentFilter: "All",

            setCurrentFilter: (filter) => set({ currentFilter: filter }),

            extensions: [...extensionsData],

            setToggleExtension: (id) => set((state) => ({
                extensions: state.extensions.map((ext) =>
                    ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
                )
            })),

            theme: "light",

            setTheme: (theme) => set({ theme })
        }),
        {
            name: "extension-storage",
            partialize: (state) => ({
                currentFilter: state.currentFilter,
                theme: state.theme,
            })
        }
    )
);

export default useExtensionStore;