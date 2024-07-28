import Alert from "./components/Alert";

function App() {
  
  return (
    <div >
      <Alert >
        Hello
        <span>World</span> 
        </Alert>

    </div>
  );
}

export default App;








// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = [
//     "New York",
//     "Los Angeles",
//     "Chicago",
//     "Texas",
//     "London",
//     "Paris",
//   ];
//   const handleSelectItem = (item: string) => {
//     console.log('!!!!',item);
//   }
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
//     </div>
//   );
// }

// export default App;
