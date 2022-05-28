import React from 'react'
import Filters from '../components/filters'
import useCollapse from 'react-collapsed';
import '../styles/homepage.css'
import ListItem from '../components/menuList/ListItem';
import List from '../components/menuList/List';
import Main from '../components/main/Main';
const homepage: React.FunctionComponent<{}> = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      <div className='main'>
        <div>
          <h2>Reports</h2>
          <p>Easilt generate a report for your transactions</p>
        </div>
        <Filters />
      </div>

      <Main />

    </div>
  )
}

export default homepage