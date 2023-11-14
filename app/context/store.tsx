'use client'
import {createContext, useContext, Dispatch, SetStateAction, useState} from 'react'

type ItemType = {
    photo: string;
    name: string;
    price: number;
    description:string;
}

interface ContextProps{
    data: ItemType[],
    setData: Dispatch<SetStateAction<ItemType[]>>
}

const GlobalContext = createContext<ContextProps>({
    data: [],
    setData: (): ItemType[] => []
})

export const GlobalContextProvider=({children}:any) =>{
    const [userId, setUserId] = useState('')
    const [data, setData] = useState<[] | ItemType[]>([])

    return  (
        <GlobalContext.Provider value={{data, setData}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)