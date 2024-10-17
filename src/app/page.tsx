"use client"
import Typing from "@/components/Typing";
import { serverlink } from "@/lib/serverlink";
import { userStore } from "@/lib/Store";
import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import Header, { varient } from './../components/Header/Header';

export default function Home({}) {
  const {user,addUser} = userStore()
  function changeUsername(){
    addUser("sahil")
  }
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
    verifyUser()
  },[])
  return (
    <div className="">
        <Header varient={varient.light}></Header>
    </div>
  );
}
