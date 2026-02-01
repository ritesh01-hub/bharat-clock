import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import ClockTime from './components/ClockTime';
import './App.css'

function App() {
 return <div className='container text-center mt-5'>
    <div className='card shadow p-4 mx-auto ' style={{maxWidth : "500px"}}>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <ClockTime></ClockTime>


    </div>


 </div>
   
}

export default App;
