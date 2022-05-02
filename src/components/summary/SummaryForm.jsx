import React, { useState } from 'react';
import './SummaryForm.css'

const SummaryForm = () => {
    const [ disableStatus, setDisableStatus ] = useState(true)
    const [ displayStatus, setDisplayStatus ] = useState("hidden")

    return (
        <>
            <form>
                <label 
                    onMouseEnter={()=> setDisplayStatus("")}
                    onMouseLeave={() => setDisplayStatus("hidden")}
                >
                I agree to terms and conditions
                    <input 
                        type="checkbox"
                        onChange={(e)=> setDisableStatus(!e.target.checked)}
                    />
                </label>
                <button 
                    disabled={disableStatus}
                >
                Confirm Order
                </button>
            </form>
            <div className={displayStatus}>No ice cream</div>
        </>
    )
}

export default SummaryForm;