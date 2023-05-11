import ListGroup from "./components/ListGroup";
let items = ["New York", "Athens", "Tokio", "London", "Paris"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
