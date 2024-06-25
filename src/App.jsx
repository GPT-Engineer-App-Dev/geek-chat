import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Topics from "./pages/Topics.jsx";
import Thread from "./pages/Thread.jsx";
import NewThread from "./pages/NewThread.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/topics" element={<Topics />} />
        <Route exact path="/topics/:id" element={<Thread />} />
        <Route exact path="/new-thread" element={<NewThread />} />
      </Routes>
    </Router>
  );
}

export default App;