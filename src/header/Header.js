import styles from "./Header.module.css";
import alarm from "../imgs/alarm.png"
import setting from "../imgs/setting01.png"
import profile from "../imgs/myprofile.png"
import logout from "../imgs/logout.png"
import dhwlsdnjs from "../imgs/dhwlsdnjs.jpg"
import { useState } from "react";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    
    const toggleDropdown = () => {
        setToggle(!toggle);
    };

    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <p className={styles.contentLeft__01}>반갑습니다, 홍길동 사원님</p>
                    <p className={styles.contentLeft__02}>오스텔 임플란트 치과</p>
                </div>
                <div className={styles.contentRight}>
                    <div>
                        <img src={alarm}/>
                    </div>
                    <div className={styles.myImg}>
                        <img onClick={toggleDropdown} src={dhwlsdnjs}/>
                        {
                            toggle === true ? 
                            <div className={styles.toggle}>
                                <div>
                                    <div className={styles.profile}>
                                        <img src={profile}/>
                                        <p>내 프로필</p>
                                    </div>
                                    <p>info@platcube.com</p>
                                </div>
                                <div>
                                    <div>
                                        <img src={setting}/>
                                        <p>내 설정</p>    
                                    </div>
                                </div>
                                <div className={styles.logout}>
                                    <div>
                                        <img src={logout}/>
                                        <p>로그아웃</p>
                                    </div>
                                </div>
                            </div> :""
                        }
                    </div>    
                </div>
            </div>
        </div>
    );
}