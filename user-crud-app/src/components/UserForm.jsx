import { useEffect,useState } from "react";
import { Button,Card,CardBody,CardFooter,CardHeader,Container,Form,FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../service/UserService";
function UserForm(){

    const [user,setUser]=useState({
        userName:"",
        userAge:"",
        userPlace:""
    });

    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        api.getAllUsers().then((res)=>{
            setUsers(res.data);
        });
    },[]);

    function handleChange(event){
        setUser({...user,[event.target.name]:event.target.value});
    }

    function handleAddUser(event){
        event.preventDefault();

        api.addUser(user).then(()=>{
            api.getAllUsers().then((res)=>setUsers(res.data));
        });

        setUser({
            userName:"",
            userAge:"",
            userPlace:""
        });
    }

    function handleShow(){
        navigate("/view");
    }

    return(
        <Container>
            <Card>
                <CardHeader className="d-flex justify-content-between align-items-center">
                    <h2>User Form</h2>
                    <Button className="bi-table btn-info" onClick={handleShow}>
                        <sub>{users.length}</sub>
                    </Button>
                </CardHeader>

                <CardBody>
                    <Form onSubmit={handleAddUser}>
                        <FormControl className="mb-3" placeholder="Enter Your Name" name="userName" value={user.userName} onChange={handleChange}/>
                        <FormControl className="mb-3" placeholder="Enter Your Age" name="userAge" value={user.userAge} onChange={handleChange}/>
                        <FormControl className="mb-3" placeholder="Enter Place" name="userPlace" value={user.userPlace} onChange={handleChange}/>

                        <CardFooter>
                            <button type="submit" className="btn btn-primary w-100">Save</button>
                        </CardFooter>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
}

export default UserForm;