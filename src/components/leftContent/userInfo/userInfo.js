import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    setIsLogin(true);
  }, []) 

  const filterLogin = (item, index) => {
    if (!isLogin && index > 1) {
      return '';
    }
    return item;
  }

  return (
   <>
    <div className={styles.leftContent}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.btnGrp}>
          {loginBtn?.filter(filterLogin).map((item) => (
            <>
              { isLogin ? ( 
                <div className={styles.btnTab1}>
                  <span>{item?.userIn}</span>
                </div>
              ) : (
                <div className={ styles.btnTab2}>
                  <span>{item?.userOut}</span>
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
              <span>{item.sideVenue}</span>
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