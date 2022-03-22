
import './App.css';

function App() {

  const title = "This Is My-Blog";//dynamic data thats to be displayed
  const likes = 50 ; 


  return (
    <div className="App">
      <h1 className="trial">{title}</h1> {/* inside jsx, the variables have to be put in { } inorder for it to be displayed */}
      <p>Likes on this blog :{likes}</p> {/* Note , here the value for like is an integer, but react converts it to String before rendering */}
      {/* ideally , Valid javascript inside the '{ }'  is also a valid way . Example :*/}
      <p>{1+5}</p>
      <p>{Math.random()}</p>{/* this produces random numbers on every refresh */}
    </div>
  );
}

export default App;
