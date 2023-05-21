import Profile from './components/Profile'
import Calendar from './components/Calendar/Calendar'
import Balance from './components/Balance'
import Score from './components/Score/Score'
import Points from './components/Points'
import Currency from './components/Currency'

import RechartsExample from "./components/RechartsExample";
// import ChartsJSExample from "./components/ChartJSExample";



function App() {

  return (
    <div className='flex w-full min-h-screen bg-slate-950 '>
      <div className='flex flex-col w-full h-screen justify-between'>
        <Profile />
        <Points />
      </div>

      <div className='flex flex-col w-full h-screen justify-between mx-2'>
        <Balance />
        <Score />
        <Calendar />
        <Currency />
      </div>
    </div>
      
  )
}

export default App
