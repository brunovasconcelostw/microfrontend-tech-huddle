import React from 'react'
import MicroFrontend from './Microfrontend';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my Host</h1>
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
        <MicroFrontend src={"http://localhost:8080"} name="FancyBox" />
      </header>
    </div>
  );
}

export default App;
