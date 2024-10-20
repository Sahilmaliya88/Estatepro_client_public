"use client"
import { serverlink } from "@/lib/serverlink";
import { userStore } from "@/lib/Store";
import axios from "axios";
import { useEffect, useTransition } from "react";
import Header, { varient } from './../components/Header/Header';
import Hero from "@/components/Hero/Hero";
import Trustedby from "@/components/Hero/Trustedby";
import Popular from "@/components/Hero/Popular";
import Separator from "@/components/Separator";

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
      <div className="hero">
         <Header varient={varient.dark} ispending={isPending}></Header>
         <Hero></Hero>
      </div>
      <Trustedby></Trustedby>
      <Separator></Separator>
      <Popular></Popular>
    </div>
  );
}
