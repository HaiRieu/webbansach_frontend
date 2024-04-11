export async function request(duongdan:string) {

    const response = await fetch(duongdan) ;
   
    if(!response.ok ){
   
        throw new Error('khong the truy cap') ;
   
    }
    return response.json() ;
  }