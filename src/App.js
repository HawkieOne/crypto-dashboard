import CurrencyConverter from "./components/CurrencyConverter";
import NewsFeed from "./components/Newsfeed";

function App() {
  return (
    <div className="app">
        <div className="content">
            <CurrencyConverter />
            <NewsFeed />
        </div>
    </div>
  );
}

export default App;
