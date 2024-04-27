import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
