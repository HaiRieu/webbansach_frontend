import React from "react";


  interface phantrangsach {
    tranghientai : number ;
    tongsotrang : number ;
    phantrang : any ;
  }


export const Phantrang : React.FC<phantrangsach> = (pros) =>{
    const danhsachtrang  = []  ;
    if(pros.tranghientai == 1) {
           danhsachtrang.push(pros.tranghientai) ;
           if(pros.tongsotrang >= pros.tranghientai + 1 ) {
              danhsachtrang.push(pros.tranghientai+1);
           }
           if(pros.tongsotrang >=  pros.tranghientai + 2 ) {
              danhsachtrang.push (pros.tranghientai+ 2);
           }
    }else if(pros.tranghientai > 1) {
              if(pros.tranghientai >= 3 ) {
                 danhsachtrang.push(pros.tranghientai - 2) ;
              } 
              if(pros.tranghientai >= 2 ) {
                danhsachtrang.push(pros.tranghientai - 1) ;
             } 
             danhsachtrang.push(pros.tranghientai ) ; 
             if(pros.tongsotrang >= pros.tranghientai +1 ) {
                 danhsachtrang.push(pros.tranghientai + 1 ) ;
             } 
             if(pros.tongsotrang >= pros.tranghientai + 2 ) {
              danhsachtrang.push(pros.tranghientai + 2 ) ;
          } 
             
    }
   


   return(
<nav aria-label="...">
  <ul className="pagination">

    <li className="page-item " onClick={() => pros.phantrang(1)} >
      <button className="page-link" >Trang Đầu </button>
    </li>

       {
        danhsachtrang.map(trang =>(
          <li className="page-item" key={trang} onClick={()=>pros.phantrang(trang)}>
          <button className={ "page-link " + (pros.tranghientai === trang ? "active" : "" )}>
              {trang}
          </button>
         </li>

        ))
       }


    <li className="page-item" onClick={() => pros.phantrang(pros.tongsotrang)}>
      <button className="page-link" >Trang Cuối</button>
    </li>


  </ul>
</nav>


   );


}