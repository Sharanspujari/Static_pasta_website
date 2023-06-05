import React from 'react'

function Section2() {
  return (
   <>

<div className="d-flex justify-content-center h-fit-content mt-3 mb-5"> <h2 className="text-danger ">Pasta Stories</h2></div>
<div className="mt-4  d-flex flex-row ml-2 mr-2 justify-content-between"> 
        <div className="position-relative">
        
          <img className='img-fluid w-100 h-75'    src="https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg"   />
        
        </div>

        <div className="position-relative">
          <img className='img-fluid w-100 h-75' src="https://thumbs.dreamstime.com/b/various-uncooked-pasta-red-background-top-view-flat-lay-art-banner-food-concept-healthy-eating-180629540.jpg"  />
          <div className="position-absolute top-0 mr-2  start-10" style={{marginLeft:'15px',marginTop:'15px'}}>
        <h1 className="textwelcome ">Welcome</h1>
        <h3 style={{color:'white'}}>THE SPECIALITY OF THE HOUSE</h3>
        <p style={{color:"white"}}>Get the maximum flavour out of all the veg in our pasta bake by pan-frying it first. You can also freeze </p>
      
        <button className="btn btn-light" style={{marginTop:'15px'}}>
            Know more
        </button>

      </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-5"> <h2 className="text-danger ">Pasta videos</h2></div>

      <div className="mt-4  d-flex flex-row ml-2 mr-4 justify-content-between"> 
        <div className="position-relative">
        
        <iframe width="700" height="315" src="https://www.youtube.com/embed/6szIKaaGVAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        </div>

        <div className="position-relative">
        <iframe className='mr-4' width="650" height="315" src="https://www.youtube.com/embed/X-Z6mtWvXM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         
        </div>
      </div>

    <div className=" mt-5 ml-2 mr-2 d-flex navbar navbar-primary " style={{backgroundColor:'lightgray'}}>
  
  <div className="container-fluid d-flex justify-content-center">
  <div className='mr-5'>
    <h4  className="text-dark">Subscribe for Newsletter</h4>
    </div>
    <div>
    <form className="d-flex">
    
      <input className="form-control me-2" type="search" placeholder="Enter email" aria-label="Search"/>
      <button className="btn btn-danger" type="submit">Search</button>
    </form>
    </div>
  </div>
</div>
   </>
  )
}

export default Section2