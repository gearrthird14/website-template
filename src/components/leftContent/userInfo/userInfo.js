import React, { useState } from 'react'
import classNames from 'classnames';
import { loginBtn } from '../../../api/leftContent';
import { sideVenue } from '../../../api/leftContent';
import { appDownload } from '../../../api/leftContent';
// Styles
import styles from './userInfo.module.scss'; 

const UserInfo = () => {

  const [isLogin, setIsLogin] = useState(false);
  const [hasPCDownload, setHasPCDownload] = useState(false);
  const [sportsAppDownload, setSportsAppDownload] = useState(false)

  return (
   <>
    <div className={styles.leftContent}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.btnGrp}>
          {loginBtn?.map((item) => (
            <>
              { isLogin ? ( 
                <div className={styles.btnTab1}>
                  {item.userIn}
                </div>
              ) : (
              <div className={classNames ({
                [styles.btnTab2]:true,
                [styles.btnTab3]: !isLogin
              })}>
                  {item.userOut}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className={styles.sideVenueContainer}>
        <div className={styles.sideVenueList}>
          {sideVenue?.map((item, i) => (
            <div 
            key={i}
            className={styles.sideVenueTabs}>
              {item.sideVenue}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.appDownloadContainer}>
        <div className={styles.appDownloadImage}>
          IMAGE
        </div>
        <div className={classNames ({
          [styles.appDownloadList]:true,
        })}>
            {appDownload?.map((item) => (
              <div className={classNames ({
                [styles.appDownloadTabs]: true,
                [styles.hasPCDownload2]: hasPCDownload || (hasPCDownload  && !sportsAppDownload) ,
                [styles.sportsAppDownload2]: sportsAppDownload 
              })}>
                {item?.appTabs}
              </div>
            ))}
        </div>
      </div>
    </div>
   </>
  )
}

export default UserInfo