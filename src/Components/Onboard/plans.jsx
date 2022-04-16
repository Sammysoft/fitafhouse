import React from 'react';

const Plans = () =>{
    return(
        <>
            <div style={{color: "grey", textAlign:"left"}}>
            <p>
            <b>Investment windows:</b>
            <ul>
                <li>
                    Winter :<br/>Dec 1 - Feb 28/29
                </li>
                <li>
                    Spring :<br/>March 1 - May 31
                </li>
                <li>
                    Summer :<br/>June 1 - Aug 31
                </li>
                <li>
                    Autumn :<br/>Sept 1 - Nov 30
                </li>
            </ul><br/><br/>
            </p>
            <p>
                Investment portal is opened at the beginning of new season for one month and closed after till the next season.<br/>
                ROI is in two folds, One is fixed and the other is varied. The fixed is 10% per annum while the varied is according to
                bussiness performance during the year under review.<br/>
                In summary your investment ripes after 12 months.
            </p>
            </div>
        </>
    )
}
export default Plans;