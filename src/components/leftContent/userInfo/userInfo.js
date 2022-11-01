import React, { useState } from 'react'
import classNames from 'classnames';
import { loginBtn } from '../../../api/leftContent';
// Styles
import styles from './userInfo.module.scss'; 

const UserInfo = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
   <>
    <div className={styles.userInfoContainer}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatar}></div>
        <div className={styles.btnGrp}>
          {loginBtn?.map((item, i) => (
            <div>{isLogin ? item.userIn : item.userOut}</div>
          ))}
          
        </div>
      </div>
    </div>
   </>
  )
}

export default UserInfo