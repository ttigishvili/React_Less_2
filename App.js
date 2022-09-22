
import './App.css';
import React from 'react';



function App() {

  const hEader = () => {
    return <header style={{ width : '100%' ,height: '50px', backgroundColor : 'red',display: "flex", justifyContent: "center", alignItems: "center" }}><h2>header</h2></header>;
  };
  const fOoter = () => {
    return <footer style={{width : '100%' ,height: '50px', backgroundColor : 'red',display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", bottom: "0%"}}><h1> footer</h1></footer>;
  };

  let wRapper = () => {
    return (<div>{hEader()}  {fOoter()}</div>);
  };
  
 let pArent = () => {
      let user1 = {
      username: "bob",
      userlastname: "smith",
      age: 18,
      userid: 1
    }
    return user1;
  }
  
let cHild = (props) => {
   var user = pArent();


   if(true){
    return (
    <div>{JSON.stringify(user)}</div>
    );
  }

}



  return (
    <div className="App">
         {wRapper()}
         {cHild()}
         

         
    </div>
  );
}

export default App;
