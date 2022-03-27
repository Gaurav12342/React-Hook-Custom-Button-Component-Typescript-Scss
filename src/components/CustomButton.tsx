import React, { FC } from 'react'
import '../components/style.scss';

const CustomButton: FC<any> = ({ variant = "contained", disabled = false, children = "Submit", onClick, color }) => {

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <div className='root'>
            <button
                className={`common-container ${variant} ${color}`}
                disabled={disabled}
                onClick={handleButtonClick}
            >{children}</button>
        </div>
    )
}

export default CustomButton