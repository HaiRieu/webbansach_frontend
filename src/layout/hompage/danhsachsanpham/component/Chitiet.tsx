import React, { useEffect, useState } from "react";
import Sach from "../../../../model/Sach";
import SachModel from "../../../../model/SachModel";
import HinhanhModel from "../../../../model/HinhanhModel";
import { laytoanboanh } from "../../../../API/HinhanhApi";
import { Link } from "react-router-dom";



interface Chitiet{
    sach : SachModel ;

}

const Chitiet : React.FC<Chitiet> = ({sach})=>{

    const masach : number = sach.masach ;

    const [danhsachanh ,setdanhsachanh] = useState<HinhanhModel[]>([]) ;
    const [dangtaidulieu ,setdangtaidulieu] = useState<boolean>(true) ;
    const [baoloi , setbaoloi] = useState(null) ; 
 
    useEffect(() =>{
          laytoanboanh(masach).then(
            hinhdata=>{
                setdanhsachanh(hinhdata);
            }

          ) .catch( loi=>{
            setbaoloi(loi);
            console.log(baoloi);
          }

          )
    }
);


let duongdan : string = "" ;
if(danhsachanh[0] && danhsachanh[0].url) {
        duongdan = danhsachanh[0].url ;
}
   return(
    <div className="col-md-3 mt-2">
    <div className="card">
  <Link to={`/sach/${sach.masach} `} >
    <img
            src={duongdan} 
            className="card-img-top"
       
            style={{ height: '200px' }} 
        />   
          </Link>

        <div className="card-body">
            <Link  to={`/sach/${sach.masach} `}   style={{textDecoration:'none'}} > 
            
            <h5 className="card-title">{sach.tensach}</h5>
          </Link  >    
           <p className="card-text">{sach.mota}</p>
            
          
           <div className="price">

                <span className="original-price">
                    <del>{sach.gianiemyet}</del>
                </span>
                <span className="discounted-price">
                    <strong>{sach.giaban}</strong>
                </span>
               
            </div>
           
            <div className="row mt-2" role="group">
                <div className="col-6">
                    <a href="#" className="btn btn-secondary btn-block">
                        <i className="fas fa-heart"></i>
                    </a>
                </div>
                <div className="col-6">
                    <button className="btn btn-danger btn-block">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
   ) ;

}
export default Chitiet