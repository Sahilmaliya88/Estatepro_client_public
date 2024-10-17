import {create} from 'zustand'
interface state{
    user:any
}
interface actions{
    addUser:(user:any)=>void
}
export const userStore = create<state & actions>((set)=>({
    user:null,
    addUser:(user:any)=>set((state)=>({user:user}))
}))