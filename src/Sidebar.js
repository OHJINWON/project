import menu from './imgs/menuBar.png'
import logo from './imgs/logo.png'
import home from './imgs/home.png'
import calendar from './imgs/calendar.png'
import clock from './imgs/clock.png'
import person from './imgs/person.png'
import monitor from './imgs/monitor.png'
import shield from './imgs/shield.png'
import earphone from './imgs/earphone.png'
import spanner from './imgs/spanner.png'
import setting from './imgs/setting.png'

import styles from "./Sidebar.module.css"
export default function Sidebar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.first}>
                <img src={menu}/>
                <img src={logo} alt='로고이미지'/>
            </div>
            <div className={styles.logo}>
                <img src={home} alt='홈 이미지'/>
            </div>
            <div className={styles.contents}>
                <img src={calendar} alt='달력 이미지'/>
                <img src={clock} alt='시계 이미지'/>
                <img src={person} alt='유저 이미지'/>
                <img src={monitor} alt='모니터 이미지'/>
                <img src={shield} alt='보호 이미지'/>
            </div>
            <div>
                <img src={earphone} alt='헤드셋 이미지'/>
            </div>
            <div className={styles.end}>
                <img src={spanner} alt='스페너 이미지'/>
                <img src={setting} alt='환경설정 이미지'/>
            </div>
        </div>
    )
}