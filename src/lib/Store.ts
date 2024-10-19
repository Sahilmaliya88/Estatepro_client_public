import {create} from 'zustand'
import { user_type } from './types'
interface state{
    user:user_type | null
}
interface actions{
    addUser:(user:user_type | null)=>void
}
export const userStore = create<state & actions>((set)=>({
    user:null,
    addUser:(user:user_type | null)=>set((state)=>({user:user}))
}))