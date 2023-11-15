'use client'
import { ItemType } from '../types/ItemType'
import { ContextProps } from '../interfaces/IContextProps'
import {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState
} from 'react'

const GlobalContext = createContext<ContextProps>({
    data: [],
    setData: (): ItemType[] => []
})

export const GlobalContextProvider=({children}:any) =>{
    const [data, setData] = useState<[] | ItemType[]>([])

    return  (
        <GlobalContext.Provider value={{data, setData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)