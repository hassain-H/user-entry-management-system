import { useEffect,useState } from "react";
import { Button,Card,CardBody,CardHeader,Container,Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../service/UserService";
function UserTable() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAllUsers().then((res)=>{
      setUsers(res.data);
    });
  }, []);

  function handleEdit(user) {
    navigate("/edit", {
      state: { userToBeEdited: user }
    });
  }

  function handleDelete(id) {
    api.deleteUser(id).then(()=>{
      api.getAllUsers().then((res)=>setUsers(res.data));
    });
  }

  function addUser() {
    navigate("/");
  }

  return (
    <Container>
      <Card>
        <CardHeader className="d-flex align-items-center">
          <Button className="bi-arrow-left btn-warning me-2" onClick={addUser}></Button>
          <h1>View Users<sup>{users.length}</sup>Here</h1>
        </CardHeader>

        <CardBody>
          <Table hover striped bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Place</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, index) => (
                <tr key={u.id}>
                  <td>{index + 1}</td>
                  <td>{u.userName}</td>
                  <td>{u.userAge}</td>
                  <td>{u.userPlace}</td>
                  <td className="d-flex justify-content-around">
                    <Button className="bi-pencil btn btn-sm" onClick={() => handleEdit(u)}></Button>
                    <Button className="bi-trash btn btn-danger btn-sm" onClick={() => handleDelete(u.id)}></Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
        </CardBody>
      </Card>
    </Container>
  );
}

export default UserTable;