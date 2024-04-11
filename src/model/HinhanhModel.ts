

class HinhanhModel {
    mahinhanh : number ;
    tenhinhanh?: string ;
    icon? : string ;
    dulieuanh?: string ;
    url? : string ;


   constructor(
    mahinhanh : number ,
    tenhinhanh?: string ,
    icon? : string ,
    dulieuanh?: string ,
    url? : string 
  
   )
   
   {
       this.mahinhanh = mahinhanh ;
       this.tenhinhanh = tenhinhanh ;
       this.icon = icon ;
       this.dulieuanh = dulieuanh ;
       this.url = url ;
   }
}
export default HinhanhModel ;

