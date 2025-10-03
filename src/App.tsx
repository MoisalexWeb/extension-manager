import { Header } from "./components/Header/Header";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import { ExtensionsGrid } from "./components/ExtensionsGrid/ExtensionsGrid";

function App() {

    return (
        <>
            <Header />

            <main className="pb-10">
                <section className="w-[90%] mx-auto max-w-6xl">
                    <FilterButtons />

                    <ExtensionsGrid />
                </section>
            </main>
        </>
    )
}

export default App
