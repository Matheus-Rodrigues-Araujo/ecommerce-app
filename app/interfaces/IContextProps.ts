import { ItemType } from "../types/ItemType"
import { Dispatch, SetStateAction } from 'react'

export interface ContextProps{
    data: ItemType[],
    setData: Dispatch<SetStateAction<ItemType[]>>
}