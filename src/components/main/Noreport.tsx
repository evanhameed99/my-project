import React from 'react'
import '../../styles/homepage.css'
import image from '../../assets/no_report.png'
const Noreport: React.FC = () => {
    return (
        <div className='noreport'>
            <h2>No report</h2>
            <p>Currently you have no data for the reports to be generated.
                Once you start generating traffic through the Balance application
                the reports will be shown.</p>
            <img src={image} alt='no report' width={400} height={170} />
        </div>
    )
}

export default Noreport