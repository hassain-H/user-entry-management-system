import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import UserEdit from "./components/UserEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page - add user form */}
        <Route path="/" element={<UserForm/>} />

        {/* View users table */}
        <Route path="/view" element={<UserTable />} />

        {/* Edit user page */}
        <Route path="/edit" element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;