import React from "react";
import Withdrawal from "./Withdrawal";
import Investment from "./investment";
import Amount from "./Amount";

const RightMenu = () => {
    return(
        <>
                <div className="right-menu-wrapper">
                    <Investment />
                    <Amount />
                    <Withdrawal />
                </div>
        </>
    )
}

export default RightMenu;