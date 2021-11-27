import { createContext, useState } from "react";

const AppContext = createContext({})

const AppContextWrapper = ({ children }) => {
    const [priceChartValues, setPriceChartValues] = useState([])
    const [stats, setStats] = useState([])
    const [meta, setMeta] = useState([])
    const [voting, setVoting] = useState([])

    return (
        <AppContext.Provider
            value={{
                priceChartValues,
                stats,
                voting,
                meta,
                setPriceChartValues,
                setStats,
                setVoting,
                setMeta,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppContextWrapper
}