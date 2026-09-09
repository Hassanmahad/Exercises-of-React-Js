import ListUsers from "./ListUsers";

function App() {
  const List = [
    {
      id: 1,
      name: "Hassan",
      Email: "Hassanma07@gmail.com",
    },
    { id: 2, 
      name: "Ali", 
      Email: "Aliyuusuf@gmail.com" 
    },
    { id: 3, 
      name: "Mohamed", 
      Email: "Mohamed@gmail.com" 
    },
  ];
  return (
    <>
      <ListUsers List={List} />
    </>
  );
}

export default App;
