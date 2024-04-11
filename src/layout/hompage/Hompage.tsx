import React from "react";
import Banner from "./componets/banner";
import List from "./danhsachsanpham/List";
import { laysach, laytoanbosach } from "../../API/SachApi";
import { useParams } from "react-router-dom";

interface homepageProc {
  tukhoatimkiem : string ; 
}

function Hompage( {tukhoatimkiem} : homepageProc) {

const {matheloai} = useParams();
let matheloaiNumber = 0 ;
try {
  matheloaiNumber = parseInt(matheloai + ' ') ;

  
} catch (error) {
  matheloaiNumber = 0 ;
  console.log('eross' ,error)
}
if(Number.isNaN(matheloaiNumber)) 
     matheloaiNumber = 0 ; 

  return (
    
    <div>
  <Banner/>
  <List tukhoatimkiem = {tukhoatimkiem} matheloai = {matheloaiNumber} />

 </div>

 
  
);
}
export default Hompage ; 