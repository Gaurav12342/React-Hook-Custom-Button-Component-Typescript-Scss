import React, { FC } from 'react'
import '../components/style.scss';

const CustomButton: FC<any> = ({ variant = "contained", disabled = false, children = "Submit", onClick, color, size = "medium", loading = false }) => {

    const handleButtonClick = () => {
        onClick && onClick()
    }

    return (
        <div className='root'>
            <button
                className={`common-container ${variant} ${color} ${size}`}
                disabled={disabled}
                onClick={handleButtonClick}
            >{loading ? <div className="loader" /> : children}</button>
        </div >
    )
}

export default CustomButton