import React from "react";
import Chart from "./Example";

const Menu = (props)=>{
        console.log(props)
    return(
        <>
                <div className="menu-wrapper">
                        <div className="inner-menu">
                                <b>Welcome </b> <i>@{props.fullname}</i>
                                <Chart />
                        </div>
                </div>

        </>
    )
}

export default Menu;