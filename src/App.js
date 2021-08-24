import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather unit="metric" />
      </div>
    </div>
  );
}
