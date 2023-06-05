import React from "react";

function Section() {
  return (
    <>
      <div className="mr-2 ml-2">
        <img
          src="https://insanelygoodrecipes.com/wp-content/uploads/2021/12/Spaghetti-Bolognese-with-Basil-in-a-Plate.jpg"  className="homeimg"
         
        />
      </div>
      <div className="mt-4 d-flex flex-row ml-2 mr-2 justify-content-between"> 
        <div className="position-relative">
        
          <img className="img-fluid" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201507/yippie_story_647_070915112206.jpg?VersionId=8C_4338.AAiHwT1euWqpPp1Xl0bdSz_a&size=690:388"  className="marinoimg" />
          <div className="position-absolute top-0 mr-2  start-50 ">
        <h1 className="text-danger " style={{marginTop:'15px'}}>BamBino instant pasta</h1>
        <h1 style={{color:'white'}}>Want Something Real?</h1>
        <p className="fw-bold">Bumbino instant nutrious pasta with tasty masala</p>
        <button className="btn btn-danger">
            Read more
        </button>
      </div>
        </div>

        <div className="position-relative">
          <img className="img-fluid" src="https://static.wixstatic.com/media/dd75c3_782c93fb1f7d40cead051fc246712786~mv2.jpg/v1/fill/w_680,h_680,al_c,q_85/dd75c3_782c93fb1f7d40cead051fc246712786~mv2.jpg" className="pepimg" />
          <div className="position-absolute top-0 mr-2  start-10" style={{marginLeft:'15px',marginTop:'15px'}}>
        <h1 className="text-danger ">BamBino instant pasta</h1>
        <h1 style={{color:'white'}}>Bambino Macaroni Pep Elbows</h1>
      
        <button className="btn btn-danger" style={{marginTop:'15px'}}>
            Know more
        </button>
      </div>
        </div>
      </div>
      <div className=" mt-4 d-flex flex-row ml-2 justify-content-between">
        <div className="mr-3">
        <img className="img-fluid w-100 h-75 " style={{marginRight:'10px'}} src="https://www.spendwithpennies.com/wp-content/uploads/2021/11/SWP-2-cream-cheese-pasta-sauce-1-500x375.jpg"/>
        </div>
        <div className="mr-3">
        <img className="img-fluid w-100 h-75"   src="https://dinedelicious.in/wp-content/uploads/2018/10/Macaroni-442x375.jpg" />
        </div>
        <div className="mr-2">
        <img className="img-fluid w-100 h-75 "  src="https://www.sharmispassions.com/wp-content/uploads/2012/12/FusilliPasta8-500x375.jpg" /></div>
      </div>
      
      <div>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    s
  </div>
  <div className="card-body">
   a
  </div>
  <div className="card-body">
   d
  </div>
</div>
      

    </div>
    </>
  );
}

export default Section;
