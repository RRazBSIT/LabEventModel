import { Panel } from "./components/Panel";
import { Badge } from "./components/Badge";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Laboratory Activity 3</h1>

      <Panel title="React + TypeScript">
        <p>This is a typed React component.</p>
      </Panel>

      <Panel title="Event-Driven UI">
        <p>These components are ready for later event wiring.</p>

        <div>
          <Badge label="Ready" tone="success" />
          <Badge label="In Progress" tone="info" />
          <Badge label="Practice" tone="warning" />
        </div>
      </Panel>
    </main>
  );
}

export default App;