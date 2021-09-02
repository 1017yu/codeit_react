import ReactDOM from 'react-dom';
import App from './App';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

const me = 'rock';
const other = 'scissor';

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

ReactDOM.render(  // Empty Fragment 사용
  <> 
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>  
    <button onClick={handleClick} className="hand">가위</button>
    <button onClick={handleClick} className="hand">바위</button>
    <button onClick={handleClick} className="hand">보</button>
    <App />
  </>
  , document.getElementById('root')
);
