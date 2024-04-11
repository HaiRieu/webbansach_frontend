import { error } from "console";
import SachModel from "../model/SachModel";
import { request } from "./Request";


  interface ketquaintaface {
    ketqua : SachModel[] ;
    tongsotrang : number ;
    sosachtrong1trang : number ;
  }


   export async function laysach(duongdan :string) :Promise <ketquaintaface>{
          
    const ketqua:SachModel[] = [] ;
     const respon =  await request(duongdan)
     const respondata = respon._embedded.saches ;

// lay thong tin trang 
  const tongsotrang : number = respon.page.totalPages ;
  const sosachtrong1trang : number = respon.page.size ; 
  const tongsosach : number = respon.page.totalElements ; 



   for(const key in respondata ) {
    ketqua.push({
    masach : respondata[key].masach ,
    tensach:  respondata[key].tensach ,
    tentacgia :  respondata[key].tentacgia ,
    mota:  respondata[key].mota ,
    gianiemyet:  respondata[key].gianiemyet ,
    giaban: respondata[key].giaban,
    soluong :  respondata[key].soluong ,
    trungbinhxephang :  respondata[key].trungbinhxephang 
    })} ;
  

   

    return {ketqua : ketqua , tongsotrang : tongsotrang , sosachtrong1trang : sosachtrong1trang} ;
   }


    export async function laytoanbosach(tranghientai : number) :Promise <ketquaintaface>{
          
     const duongdan : string = `http://localhost:8080/sach?sort=masach,desc&size=4&&page=${tranghientai}`;

    return laysach(duongdan);

  }


   export async function timkiemsach(tukhoatimkiem : string , matheloai : number ) :Promise<ketquaintaface> {
   let duongdan :string = `http://localhost:8080/sach?sort=masach,desc&size=4&&page=0` ; 

    if(  tukhoatimkiem != ' ' && matheloai == 0 ) {
        duongdan = `http://localhost:8080/sach/search/findByTensachContaining?tensach=${tukhoatimkiem}` ;   
        
    }else if(tukhoatimkiem == ' ' && matheloai > 0) {
       duongdan = `http://localhost:8080/sach/search/findByDanhsachtheloai_matheloai?matheloai=${matheloai}` ;
    }else if(tukhoatimkiem != ' ' && matheloai > 0) {
      duongdan = `http://localhost:8080/sach/search/findByTensachContainingAndDanhsachtheloai_matheloai?tensach=${tukhoatimkiem}&matheloai=${matheloai}` ;
    }
    
    return laysach(duongdan) ; 
  }


    export async function laysachtheomasach(masach : number): Promise<SachModel|null> {
  try {
    let ketqua : SachModel ;
       const duongdan = `http://localhost:8080/sach/${masach}`;
     const respons = await fetch(duongdan) ;
     if(!respons.ok) {
         throw new Error("loi roi");
     }
     const sachdata =  await respons.json() ;
     if(sachdata) {
      return {
        masach : sachdata.masach ,
        tensach:  sachdata.tensach ,
        tentacgia :  sachdata.tentacgia ,
        mota:  sachdata.mota ,
        gianiemyet:  sachdata.gianiemyet ,
        giaban: sachdata.giaban,
        soluong :  sachdata.soluong ,
        trungbinhxephang :  sachdata.trungbinhxephang 
      }
  }else {
    throw new Error("sach nay k ton tai") ; 
  }
}catch{
  return null
}
  
    }
   
