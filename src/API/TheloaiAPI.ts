
import { promises } from "dns";
import React from "react";
import TheloaiModel from "../model/TheloaiModel";
import { Await } from "react-router-dom";

interface Theloai {
    matheloai : number ;
    tentheloai : string ;

}

export async function request( duongdan : string) {


    const response = await fetch(duongdan) ;
    if (!response.ok) {
        throw new Error(`Không thể truy cập ${duongdan}`);
    }

    // Nếu trả về OK
    return response.json();

}


export async function laytoanbotheloai() : Promise<TheloaiModel[]> {

   const ketqua: TheloaiModel[] = [] ;
   const duongdan : string = 'http://localhost:8080/theloai' ;

   const response = await request(duongdan) ;
   const reposedata = response._embedded.theloais ;
   for(const key in reposedata) {
    ketqua.push( {
     matheloai : reposedata[key].matheloai ,
      tentheloai : reposedata[key].tentheloai ,
    }
    );
  }

    return ketqua ;
}


