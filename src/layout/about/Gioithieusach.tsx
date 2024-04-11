import React, { useEffect, useState } from "react";
import SachModel from "../../model/SachModel";
import { useParams } from "react-router-dom";
import { laysachtheomasach } from "../../API/SachApi";
import Chitiet from "../hompage/danhsachsanpham/component/Chitiet";




  const Gioithieusach : React.FC = ()=> {

    const { masach } = useParams() ;
   

    let masachnumber = 0 ;
    try {
        masachnumber = parseInt( masach + ' ') ;
        if(Number.isNaN(masachnumber)) {
            masachnumber = 0 ;
        }

    } catch (error) {
        masachnumber = 0;
        console.error("Error", error);
    }
 const [sach ,setsach] = useState< SachModel | null>(null) ; 
    useEffect(()=>{
         laysachtheomasach(masachnumber).then(
            (sach)=>{
                setsach(sach) ;
            }

         ).catch(

         )
    },[masach] 

) ;


return (
    
  
    <div className="container mt-4">
        <div id="thongbao" className="alert alert-danger d-none face" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>

        <div className="card">
            <div className="container-fliud">
                
                    <input type="hidden" name="sp_ma" id="sp_ma" value="5"/>
                    <input type="hidden" name="sp_ten" id="sp_ten" value="Samsung Galaxy Tab 10.1 3G 16G"/>
                    <input type="hidden" name="sp_gia" id="sp_gia" value="10990000.00"/>
                    <input type="hidden" name="hinhdaidien" id="hinhdaidien" value="samsung-galaxy-tab-10.jpg" />

                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                               
                               
                                <div className="tab-pane active" id="pic-3">
                                  
                                </div>
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active">
                                    <a data-target="#pic-1" data-toggle="tab" className="">
                                        <img src="https://newshop.vn/public/uploads/products/56029/huong-dan-hoc-tot-tieng-anh-6-theo-chuong-trinh-moi-cua-bo-gd-dt.jpg"/>
                                    </a>
                                </li>
                                <li className="">
                                    <a data-target="#pic-2" data-toggle="tab" className="">
                                        <img src="https://newshop.vn/public/uploads/products/56029/huong-dan-hoc-tot-tieng-anh-6-theo-chuong-trinh-moi-cua-bo-gd-dt.jpg"/>
                                    </a>
                                </li>
                                <li className="">
                                    <a data-target="#pic-3" data-toggle="tab" className="active">
                                        <img src="https://newshop.vn/public/uploads/products/56029/huong-dan-hoc-tot-tieng-anh-6-theo-chuong-trinh-moi-cua-bo-gd-dt.jpg"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title"> {sach?.tensach} </h3>
                            <div className="rating">
                              
                                <span className="review-no"></span>
                            </div>
                            <p className="product-description">{sach?.mota}</p>
                            <small className="text-muted">Giá cũ: <s><span>{sach?.gianiemyet} vnđ</span></s></small>
                            <h4 className="price">Giá hiện tại: <span> {sach?.giaban} vnđ</span></h4>
                            <p className="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
                                <strong>Uy
                                    tín</strong>!</p>
                            <div className="form-group">
                                <label >Số lượng đặt mua:</label>
                                <input type="number" className="form-control" id="soluong" name="soluong"/>
                            </div>
                            <div className="action">
                                <a className="add-to-cart btn btn-default" id="btnThemVaoGioHang">Mua Ngay</a>
                                <a className="add-to-cart btn btn-default" id="btnThemVaoGioHang">Thêm vào giỏ hàng</a>
                            </div>
                        </div>

                    </div>
            </div>
        </div>

        <div className="card">
            <div className="container-fluid">
                <h3>Thông tin chi tiết về Sản phẩm</h3>
                <div className="row">
                    <div className="col">
                        Vi xử lý Dual-core 1 Cortex-A9 tốc độ 1GHz
                    </div>
                </div>
            </div>
        </div>
    </div>



) ;


}
 export default Gioithieusach ;