import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import ListGroup from "./components/ListGroup";
let items = ["New York", "Athens", "Tokio", "London", "Paris"];

function App() {
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span></span> World
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Primary Button</Button>
    </div>
  );
}

export default App;
