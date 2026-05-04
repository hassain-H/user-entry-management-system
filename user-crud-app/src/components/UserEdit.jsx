import { useState } from "react";
import { Card, CardBody,CardHeader,Container,FormControl,Form,Button,CardFooter } from "react-bootstrap";
import { useNavigate,useLocation } from "react-router-dom";
import api from "../service/UserService";
function UserEdit() {

    const navigate = useNavigate();
    const location = useLocation();

    const [editUser, setEditUser] = useState(location.state?.userToBeEdited || {});

    function handleChange(event) {
        setEditUser({
            ...editUser,
            [event.target.name]: event.target.value
        });
    }

    function handleSaveUser(event) {
        event.preventDefault();

        // ✅ SAFETY CHECK
        if (!editUser.id) {
            alert("User ID missing!");
            return;
        }

        api.updateUser(editUser.id, editUser).then(() => {
            navigate("/view");
        }).catch(err => {
            console.error(err);
            alert("Update failed");
        });
    }

    function ViewTable() {
        navigate("/view");
    }

    return (
        <Container>
            <Card>
                <CardHeader className="d-flex align-items-center">
                    <Button className="btn-warning" onClick={ViewTable}>Back</Button>
                    <h2>User Edit</h2>
                </CardHeader>

                <Form onSubmit={handleSaveUser}>
                    <CardBody>
                        <FormControl className="mb-2" name="userName"
                            value={editUser.userName || ""}
                            onChange={handleChange} />

                        <FormControl className="mb-2" name="userAge"
                            value={editUser.userAge || ""}
                            onChange={handleChange} />

                        <FormControl className="mb-2" name="userPlace"
                            value={editUser.userPlace || ""}
                            onChange={handleChange} />
                    </CardBody>

                    <CardFooter>
                        <Button type="submit" className="btn-success">Update</Button>
                    </CardFooter>
                </Form>
            </Card>
        </Container>
    );
}

export default UserEdit;