import React, { useState } from 'react';

const SummaryForm = () => {
    const [ disableStatus, setDisableStatus ] = useState(true)

    return (
        <form>
            <label>I agree to terms and conditions
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
    )
}

export default SummaryForm;