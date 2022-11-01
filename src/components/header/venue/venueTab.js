import React from 'react';
import classNames from 'classnames';
import { venueTabNames } from '../../../api/venue';
import InnerVenue from './innerVenue/innerVenue';
// Styles
import styles from './venueTab.module.scss';

const VenueTab = (props) => {

  const {
    current,
    setCurrent,
    showNav,
    setShowNav,
  } = props; // used for venueTabs
    
  const secondVenueHandler = (item) => {
    setCurrent(item.subName)
    setShowNav(true)
  }
  
  console.log('@@@@@', current)

  return (
   <>
    <div className={styles.container}>
      <div className={styles.tabGroup}>
        {venueTabNames?.map((item, i) => (
          <div 
          key={i}
          onMouseEnter={() => secondVenueHandler(item)}
          onMouseLeave={() => setShowNav(false)}
          className={styles.tabList}>
            <div 
              className={classNames ({
              [styles.tabNames]: true,
              [styles.active]: showNav && item.subName === current,
            })}>
              <span>{item.tabName}</span>
            </div>
          </div>
          ))}
      </div>
    </div>
    <InnerVenue {...props}/>
   </>
  )
}


export default VenueTab