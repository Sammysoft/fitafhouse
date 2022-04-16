import React from 'react';
// import rocket from '/images/rocket.png'


const Developing = ()=>{
    return(
        <>
         <div className="wrapper" style={{height: "100vh", width:"100vjh", backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(/images/launch-waves.svg)", backgroundRepeat: "no-repeat", backgroundPosition :"center", backgroundSize: "cover", color: 'white'}}>
         <div className="container" style={{fontFamily: "ubuntu", textAlign: "center", height: "50vh",marginTop: "25%", backgroundColor: 'transparent'}}>
                    <p>
                        <h3>Soon to Launch <img src={'/images/rocket.png'} alt="rocket" height="100px" width="100px"/></h3>
                    </p>
                    <p>
                        <h6>We are currently undergoing development, please stay tunned<br/><br></br><span style={{fontWeight:"900", fontSize: "1.5rem", fontFamily: "Raleway"}}>https://www.fitafhouse.com</span></h6>
                    </p>
            </div>
         </div>
        </>
    )
}

export default Developing;