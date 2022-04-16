import React from 'react';
// import rocket from '/images/rocket.png'


const Developing = ()=>{
    return(
        <>
          <div className="container" style={{fontFamily: "ubuntu", textAlign: "center", marginTop: "25%"}}>
                    <p>
                        <h3>Soon to Launch <img src={'/images/rocket.png'} alt="rocket" height="100px" width="100px"/></h3>
                    </p>
                    <p>
                        <h6>We are currently undergoing development, please stay tunned</h6>
                    </p>
            </div>
        </>
    )
}

export default Developing;