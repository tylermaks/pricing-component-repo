import React from "react"
import {useState} from "react"
import './Assets/Styles/App.scss';
import Cards from "./Assets/Components/Cards";
import Toggle from "./Assets/Components/Toggle";

function App() {

  const [billingPlan, setBillingPlan] = useState(false)

  const toggle = () => { 
    setBillingPlan(!billingPlan)
  }

  return (
    <main className="App">
      <Toggle 
        toggle={toggle}
      />
      <Cards 
        billingPlan={billingPlan}
      />
    </main>
  );
}

export default App;
