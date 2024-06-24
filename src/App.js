import './App.css';
import Sidebar from './Sidebar';
import Notice from './component/notice/Notice';
import Schedule from './component/schedule/Schedule';
import Statistics from './component/statistics/Statistics';
import Header from './header/Header';

function App() {
  return (
    <div className='App'>
        <Sidebar/>
        <div className='wrapper'>
            <Header/>
            {/* <Notice/> */}
            <Schedule/>
            {/* <Statistics/> */}
        </div>
    </div>
  );
}

export default App;
