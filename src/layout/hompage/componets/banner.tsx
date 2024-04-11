import React from "react";
function Banner() {
return(

<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/literature-book-club-twitch-banner-template_23-2149730151.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1316920199/vi/vec-to/bi%E1%BB%83u-ng%E1%BB%AF-qu%E1%BA%A3ng-c%C3%A1o-v%E1%BB%9Bi-s%C3%A1ch-ch%C4%83n-v%C3%A0-n%E1%BA%BFn-hi%E1%BB%87u-s%C3%A1ch-hi%E1%BB%87u-s%C3%A1ch-ng%C6%B0%E1%BB%9Di-y%C3%AAu-s%C3%A1ch-bibliophile-kh%C3%A1i.jpg?s=170667a&w=0&k=20&c=ykzcgI-dTiO0GsqtYGOvdI3y-xVNH1_Fbg5fJgq94qc=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/04/32/32/87/1000_F_432328795_gyl6zdxtuKrwTDLSOgLF2NfnHNLkg1oC.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


); 

}
export default Banner ; 
