 
 import React, { useState } from "react";

  function Dangkikhachhang () {

    const[tendangnhap , settendangnhap] =  useState("") ;
    const[tenkhachhang , settenkhachhang] =  useState("") ;
    const[diachi , setdiachi] =  useState("") ;
    const[email , setemail] =  useState("") ;
    const[sdt , setsdt] =  useState("") ;
    const[gioitinh ,setgioitinh] = useState("") ;
    const[matkhau ,setmatkhau] = useState("") ;
    const[matkhaulaplai , setmatkhaulaplai] = useState("") ;
   
    const[errorTendangnhap , seterrorTendangnhap] =  useState(" ") ;
    const[erroremail , seterroremail] = useState(" ") ;
    const[errormatkhaulaplai , seterrormatkhaulaplai] =  useState(" ") ;
    const[thongbao , setthongbao] = useState("") ;
  
const handelSumbit =  async (e: React.FormEvent ) =>{

    seterrorTendangnhap("") ;
    setemail("");
    seterrormatkhaulaplai("");

    e.preventDefault() ;

    const istendangnhap = !await kiemtratendangnhap(tendangnhap) ;
    const isemail = !await kiemtaemail(email) ;
 

    
    if(istendangnhap && isemail) {
           try {
            const url = "http://localhost:8080/taikhoan/dangki"
            const reponse = await fetch (url , {
                method: 'POST' ,
                headers :{ 
                    'Content-type' : 'application/json' ,

                },
                body : JSON.stringify({
                    tendangnhap : tendangnhap ,
                    tenkhachhang : tenkhachhang ,
                    diachi : diachi ,
                    email : email ,
                    sdt : sdt ,
                    gioitinh : gioitinh ,
                    matkhau :matkhau 
                })


            });
            if(reponse.ok) {
              setthongbao("Đăng Kí Thành Công ");
            }else {
                console.log(reponse.json());
                setthongbao("Có lỗi Xả Ra ,Đăng Kí Không Thành Công") ;
            }
            
           } catch (error) {
            setthongbao("Có lỗi Xả Ra ,Đăng Kí Không Thành Công") ;
           }
    }


}
const kiemtratendangnhap =  async (tendangnhap : string ) =>{
   
    const duongdan = `http://localhost:8080/khachhang/search/existsByTendangnhap?tendangnhap=${tendangnhap}`;
    console.log(duongdan);
  try {
     const repose = await fetch(duongdan) ;
     const data = await repose.text( ) ;
     console.log(data);
     if(data == "true") {
           seterrorTendangnhap('Tên Đăng Nhập Đã Tồn Tại') ;
           return true ;
     } 
      return false ;
     
  }  catch (error) {
      console.error("loi roi ")
      return false ; 
 }
 

}

const kiemtaemail = async (email : string) =>{
    const duongdan = `http://localhost:8080/khachhang/search/existsByEmail?email=${email}` ; 
    const reposes = await fetch(duongdan);
    console.log(duongdan) ; 
    try {
        const data =  await reposes.text( ) ; 
        console.log(data)
    if(data == "true") {
       seterroremail("Email này đã tồn tại ");
       return true ; 
    }
    return false ;  
    
    } catch (error) {
        console.error("loi roi ")
        return false ; 
    } 
    
}

const handelTendangnhapchange =  async (e: React.ChangeEvent<HTMLInputElement> ) =>{
      settendangnhap(e.target.value) ;
      seterrorTendangnhap('') ;
    return  kiemtratendangnhap(e.target.value) ;
}

const handelemail = async (e: React.ChangeEvent<HTMLInputElement>)=>{
     setemail(e.target.value) ;
     seterroremail('');
    return kiemtaemail(e.target.value) ; 

}

const kiemtramatkhau = async(matkhau : string)=>{
    setmatkhau(matkhau) ;

}

const  handelmatkhau = async(e: React.ChangeEvent<HTMLInputElement>)=>{
      setmatkhau(e.target.value);
      
    
}

const  handelmatkhaulaplai = async(e: React.ChangeEvent<HTMLInputElement>)=>{
    setmatkhaulaplai(e.target.value);
    seterrormatkhaulaplai(" "); 
    return kiemtramatkhaulaplai(e.target.value);
}

const kiemtramatkhaulaplai = async (matkhaulaplai : string) =>{
         if(matkhaulaplai != matkhau) {
            seterrormatkhaulaplai("Mật Khẩu Không Khớp");
          }else {
            seterrormatkhaulaplai(" ");
          }
  
}




   return(
    <div className="container">
    <h1 className="mt-5 text-center">Đăng ký</h1>
    <div className="mb-3 col-md-6 col-12 mx-auto">
        <form onSubmit={handelSumbit} className="form">
            <div className="mb-3">
              
         
                    <label htmlFor="hovaten" className="form-label">Họ Và Tên </label>
                <input
                    type="text"
                    id="tenDangNhap"
                    className="form-control"
                    value={tenkhachhang}
                    onChange={(e) => settenkhachhang(e.target.value)} 
                />

                        <label htmlFor="diachi" className="form-label">Địa Chỉ</label>
                <input
                    type="text"
                    id="diachi"
                    className="form-control"
                   value={diachi}
                   onChange={(e)=> setdiachi(e.target.value)}
                />

                <label htmlFor="email" className="form-label">email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handelemail}
                    className="form-control"
                />
                 <div style={{ color: "red" }}>
                    {erroremail} 
                    </div>


               <label htmlFor="sodienthoai" className="form-label">Số Điện Thoại</label>
                <input
                    type="text"
                    id="sodienthoai"
                    className="form-control"
                    value={sdt}
                    onChange={(e) => setsdt(e.target.value)}
                />

               <label htmlFor="sodienthoai" className="form-label">Giới Tính</label>
                <input
                    type="text"
                    id="sodienthoai"
                    className="form-control"
                    value={gioitinh}
                    onChange={(e) => setgioitinh(e.target.value)}
                />
                  <label htmlFor="tendangnhap" className="form-label">Tên đăng nhập</label>
                <input
                    type="text"
                    id="tendangnhap"
                    className="form-control"
                    value={tendangnhap}
                    onChange={handelTendangnhapchange}
                />
                 <div style={{ color: "red" }}>
                    {errorTendangnhap}
                    </div>

                    <label htmlFor="matkhau" className="form-label">Mật Khẩu</label>
                <input
                    type="password"
                    id="matkhau"
                    className="form-control"
                    value={matkhau}
                    onChange={handelmatkhau}
                />

               <label htmlFor="matkhau" className="form-label">Nhập Lại Mật Khẩu</label>
                <input
                value={matkhaulaplai}
                    type="password"
                    id="matkhau"
                    className="form-control"
                    onChange={handelmatkhaulaplai}
                />
                 <div style={{ color: "red" }}>
                    {errormatkhaulaplai}
                    </div>

               <div className="text-center">
                <div style={{ color: "red" }}>
                    {thongbao}
                    </div>
                 <button type="submit"className="btn btn-primary"> Đăng Kí </button>
                 

                 </div>   
           
               
     
             </div>

         </form>

        </div>

    </div>





   ) ;

   

 } 
  export default Dangkikhachhang ;