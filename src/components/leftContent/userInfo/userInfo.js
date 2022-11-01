import React, { useState } from 'react'
import classNames from 'classnames';
// Styles
import styles from './userInfo.module.scss'; 

const UserInfo = () => {
  return (
   <>
    <div className={styles.userInfoContainer}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.btnGrp}>
          <div>Login</div>
          <div>Register</div>
        </div>
      </div>
    </div>
   </>
  )
}

export default UserInfo