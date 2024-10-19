"use client"
import Typing from "@/components/Typing";
import { serverlink } from "@/lib/serverlink";
import { userStore } from "@/lib/Store";
import axios from "axios";
import { useEffect, useTransition } from "react";
import Header, { varient } from './../components/Header/Header';

export default function Home({}) {
  const {addUser} = userStore()
  const [isPending,startVerifing] = useTransition()
  const verifyUser = async():Promise<void>=>{
    try{
      const response = await axios.get(`${serverlink}/auth/verify`,{withCredentials:true})
      if(response.data){
          addUser(response.data.user)
      }
    }catch(err){
      console.log(err)
    }  
  }
  useEffect(()=>{
      startVerifing(verifyUser)
  },[])
  return (
    <div className="">
        <Header varient={varient.light} ispending={isPending}></Header>
      { isPending &&  <h1>pending...</h1>}
    </div>
  );
}
