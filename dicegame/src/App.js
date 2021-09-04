import Dice from './Dice';
import Handicon from './Handicon';

function App() {
  return (
  <div>
   <Handicon value="rock" />
   <Handicon value="scissor" />
   <Handicon value="paper" />
   <Dice color='red' num={1}/>
  </div>
  );
}

export default App;