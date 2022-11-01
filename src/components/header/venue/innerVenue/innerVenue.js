import React from 'react';
import classNames from 'classnames';
import { venueTabNames } from '../../../../api/venue';
// Styles
import styles from './innerVenue.module.scss';

const InnerVenue = (props) => {

  const {
		current,
		setCurrent,
		showNav,
		setShowNav,
	} = props;

  return (
   <>
    <div className={styles.innerVenueContainer}>
      {venueTabNames?.map((item, index) => (
        <div
          onMouseEnter={() => setShowNav(true)}
          onMouseLeave={() => setShowNav(false)} 
          key={index} 
          className={classNames({
            [styles.innerVenueDefault]: true,
            [styles.innerVenueIn]: showNav && item.subName === current,
          })}>
          <div className={styles.venueItemContent}>
            <div className={styles.leftContent}>
              <div className={styles.englishTitle}>
                <h1>{item.tabName}</h1> 
              </div>
              <div className={styles.description}>
                <p></p>
              </div>
              <div className={classNames ({
              [styles.venueBtnGrp]: true,
            })}>	
              {/* {item?.data?.map((item1, i) => (
                <div key={i} className={classNames ({
                  [styles.venueBtn]: true,
                  [styles.animateee]: showNav,
                })}>
                  <div className={styles.btnTitle}>
                   
                  </div>
                </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
   </>
  )
}

export default InnerVenue