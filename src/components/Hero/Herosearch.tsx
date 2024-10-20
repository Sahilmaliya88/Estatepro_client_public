"use client"
import { NextPage } from "next";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverlink } from "@/lib/serverlink";
interface Props{

}
type city = {
    city:string
}
const SeachInput:NextPage<Props> =()=>{
    const [cities,setcities] = useState<city[]>([])
    const getCities = async():Promise<void>=>{
        try{
            let response = await axios.get(`${serverlink}/location/allcities`)
            if(response.data){
                setcities(response.data.cities)
            }
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getCities()
    },[])
    return(
        <div className="searchip">
            <MdLocationOn className="loc-icon"></MdLocationOn>
            <input type="text" className="ip" list="cities" placeholder="Search by Location"></input>
            <datalist id="cities">
                {
                    cities.map((ele,index)=>(<option key={index}>{ele.city}</option>))
                }
            </datalist>
            <Button className="bg-[var(--primary-color)] max-md:w-[100px] w-[180px] max-md:rounded-[10px] rounded-[14px]  h-full">Search</Button>
        </div>
    )
}
export default SeachInput