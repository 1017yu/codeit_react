import ReactDOM from 'react-dom';

ReactDOM.render(  // Empty Fragment 사용
  <>  
    <h1 id="title">가위바위보</h1>
    <button className="hand">가위</button>
    <button className="hand">바위</button>
    <button className="hand">보</button>
  </>
  , document.getElementById('root')
);
