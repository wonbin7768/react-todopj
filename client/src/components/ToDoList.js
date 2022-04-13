import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  Table,
} from "react-bootstrap";
import "./style.css";
import axios from "axios";
function ToDoList() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const [toDoList, setTodolist] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };

  const save = () => {
    axios
      .post("/api/toDoList", toDos)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };
  const load = () => {
    axios
      .get("api/toDoListLoad")
      .then((res) => {
        setTodolist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    load();
  }, []);

  const tableLoad = () => {
    const result = [];
    for (var i = 0; i < toDoList.length; i++) {
      result.push(
        <tr key={i}>
          <td>{toDoList[i].todolist}</td>
          <td>{toDoList[i].dt.slice(0, 10)}</td>
          <td>
            <Button
              className="btn_delete"
              value={toDoList[i].idx}
              variant="secondary"
              type="button"
              onClick={deleteTodo}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    }
    return result;
  };
  const deleteTodo = (e) => {
    axios
      .post("/api/toDoListDelete", {
        idx: e.target.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <Container className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group as={Row} onChange={onChange} className="mb-3">
            <Col sm>
              <Form.Control
                value={toDo}
                type="text"
                placeholder="Write your to do!!"
              />
            </Col>
          </Form.Group>
          <br />
          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit">
              Add To Do
            </Button>
          </div>
          <br />
          <div className="d-grid gap-1">
            <Button variant="secondary" type="button" onClick={save}>
              Save
            </Button>
          </div>
        </Form>
        <br />
        <ListGroup>
          {toDos.map((item, index) => (
            <ListGroup.Item variant="dark" eventKey={index}>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Table striped hover variant="dark" border="4px solid #444444">
          <thead>
            <tr>
              <td colSpan="3">ToDoList Record</td>
            </tr>
            <tr>
              <td>Todos</td>
              <td>Date</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{tableLoad()}</tbody>
        </Table>
      </Container>
      <hr />
    </div>
  );
}

export default ToDoList;
