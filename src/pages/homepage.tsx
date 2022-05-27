import React from 'react'
import Filters from '../components/filters'
import '../styles/homepage.css'
const homepage: React.FunctionComponent<{}> = () => {
  return (
    <div className='main'>
      <div>
        <h2>Reports</h2>
        <p>Easilt generate a report for your transactions</p>
      </div>
      <Filters />
    </div>
  )
}

export default homepage