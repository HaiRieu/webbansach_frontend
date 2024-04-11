import React, { useEffect, useState } from "react";
import Chitiet from "./component/Chitiet";
import SachModel from "../../../model/SachModel";
import { laysach, laytoanbosach, timkiemsach } from "../../../API/SachApi";
import { Phantrang } from "../../util/Phantrang";

interface danhsachtimkiem {
   tukhoatimkiem : string ;
   matheloai : number ;
}

function List({tukhoatimkiem , matheloai} : danhsachtimkiem ){
   
   const [danhsachquyensach ,setdanhsachquyensach] = useState<SachModel[]>([]) ;
   const [dangtaidulieu ,setdangtaidulieu] = useState<boolean>(true) ;
   const [baoloi , setbaoloi] = useState(null) ; 
   
  const[tranghientai , settranghientai] = useState(1) ; 
  const[tongsotrang , settongsotrang] = useState(0) ; 
  const phantrang1 = (trang : number)=>{
     settranghientai(trang);
  } 

   useEffect(() =>{
      if(tukhoatimkiem == '' && matheloai == 0 )  {

    laytoanbosach(tranghientai - 1 ).then(
       kq=> {
         setdanhsachquyensach(kq.ketqua);
         settongsotrang(kq.tongsotrang) ;
       }

    ).catch() ;

   }else {
      timkiemsach(tukhoatimkiem , matheloai).then(
         kq=> {
           setdanhsachquyensach(kq.ketqua);
           settongsotrang(kq.tongsotrang) ;
         }
  
      ).catch() ;
   
   }
   }, [tranghientai , tukhoatimkiem , matheloai]
 
   )   ;

   if(danhsachquyensach.length == 0 ) {
      return (
      
      <div className="container"> 
   <div className = "d-flex align-items-center justìfy-content-center">
     <h1> Hiện Không Tìm Thấy Sách !</h1> 
   </div>
  
 </div>)

   }
 
return (

 <div className="container"> 
   <div className="row mt-4 mb-4">
     {
        danhsachquyensach.map((sach)=>(
            <Chitiet key={sach.masach} sach={sach} />
        )
    )    
     }
   </div>
    <Phantrang tranghientai={tranghientai} tongsotrang={tongsotrang} phantrang={phantrang1} />
 </div>


); 

}
export default List ;