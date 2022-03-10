import React from "react";

const Withdrawal = ()=>{
    return(
    <>
        <div className="withdrawal-wrapper" style={{display: "flex", justifyContent: "space-between"}}>
            <img style={{flex: "1"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0VCI4iARUJiiB6pWCqzg5Wq8q0gEtBEIDXnFCnXQE7eR1kEho1wgKEYtoJEeCXwbDdrQ&usqp=CAU" alt="clock" height="60px" width={"60px"}/>
                <h4 style={{flex: "3", paddingLeft: "10px"}}>You have 2 months, 11days left</h4>
        </div>
    </>
    )
}

export default Withdrawal;