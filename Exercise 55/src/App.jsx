const App = () => {
  return (
    <div>
      <h1>Enter your name</h1>
      <input type="text" onChange={(e) => e.target.value} />

      <h1>Enter a Greating</h1>
      <input type="text" onChange={(e) => e.target.value} />
    </div>
  );
};

export default App;
