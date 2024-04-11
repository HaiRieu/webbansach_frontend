import HinhanhModel from "../model/HinhanhModel";
import { request } from "./Request";

 export async function laytoanboanh(masach: number) : Promise<HinhanhModel[]>{
      const ketqua: HinhanhModel[] = [] ;
      const duongdan : string = `http://localhost:8080/sach/${masach}/danhsachhinhanh` ;
      const respon = await request(duongdan) ;
      const respondata = respon._embedded.hinhanhs ; 

      for(const key in respondata ) {
          ketqua.push( {
            mahinhanh : respondata[key].mahinhanh ,
            tenhinhanh : respondata[key].tenhinhanh,
            dulieuanh : respondata[key].dulieuanh,
            icon : respondata[key].icon,
            url : respondata[key].url

          })};
      return ketqua;
    
}







