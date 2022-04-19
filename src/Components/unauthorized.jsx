import React from "react";

const Unauthorized = ()=>{
    return(
        <>
                <div style={{height: "100vh"}}>
                <div className="container" style={{fontFamily: "ubuntu", textAlign: "center", paddingTop: "40vh"}}>
                    <p>
                        <h3>Error 403</h3>
                    </p>
                    <p>
                        <h6>Unauthorized Access, skeddadle!</h6>
                    </p>
                </div>
                </div>
        </>
    )
}

export default Unauthorized;