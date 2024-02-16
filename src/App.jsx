//import "./App.css";
import dict from "./data";
import Card from "./components/Card"; // Updated import statement

function App() {
  return (
    <>
      <div className="dictionary">
        <header>
          <h1>DevDivas Dictionary</h1>
          <p>
            Decode the Language of Chat: Your Ultimate Dictionary for Unraveling
            Chatspeak!
          </p>
          <div className="actions">
            <form action="">
              <input type="text" />
              <button className="button">Search Words</button>
            </form>
            <button className="add button">Add New Words</button>
          </div>
        </header>
        <section id="cards">
          {dict.map((item) => (
            <Card key={item.id} title={item.title} desc={item.description} />
          ))}
        </section>
        <footer>
          <p id="last">
            &copy; 2024 Digital. All Rights Reserved | Developed by DevDivas
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
