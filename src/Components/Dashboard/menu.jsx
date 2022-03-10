import React from "react";

const Menu = ()=>{
    return(
        <>
                <div className="menu-wrapper">
                        <div className="inner-menu">
                                <b>Welcome </b> <i>@Sammysoft</i>

                                <div className="page">
                                        <div className="circles-container">
                                        <div id="circle-1" data-circle-dialwidth="{10}" data-circle-skin="{&quot;yellow&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">00:00:00</div>
                                        </div>
                                        </div>
                                        <div className="circle-2" data-circle-counter="{1000}" data-circle-size="{&quot;300px&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">0%</div>
                                        </div>
                                        </div>
                                        <div className="circlebar" data-circle-starttime="{0}" data-circle-dialwidth="{20}" data-circle-size="{&quot;250px&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">00:00:00</div>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="circles-container bg-white">
                                        <div id="circle-3" data-circle-dialwidth="{10}" data-circle-skin="{&quot;purple&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">00:00:00</div>
                                        </div>
                                        </div>
                                        {/* <div className="circlebar" data-circle-starttime="{0}" data-circle-maxvalue="{&quot;90&quot;}" data-circle-dialwidth="{10}" data-circle-size="{&quot;100px&quot;}" data-circle-type="{&quot;progress&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">00:00:00</div>
                                        </div>
                                        </div> */}
                                        </div>

                                </div>



                                {/* <div className="circlebar" data-circle-starttime="{0}" data-circle-dialwidth="{20}" data-circle-size="{&quot;250px&quot;}">
                                        <div className="loader-bg">
                                        <div className="text">00:00:00</div>
                                        </div>
                                </div> */}


                                                 <svg className="radial-progress" data-percentage={82} viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx={40} cy={40} r={35} />
                                                        <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                                                        <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">82%</text>
                                                </svg>
                        </div>
                </div>

        </>
    )
}

export default Menu;