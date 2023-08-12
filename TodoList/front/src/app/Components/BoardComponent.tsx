import { Box, Container } from "@mui/material";
import { Todo } from "../Model/ToDo";
import BasicCard from "./ToDoComponent";

const todos: Array<Todo> = [
    new Todo({ name: "Test" }),
    new Todo({ name: "asd" }),
    new Todo({ name: "dsad", isCompleted: true }),
    new Todo({ name: "asdasdasd" }),
]
export function ToDoBoard() {
    const listTodo = todos.map(
        todo =>
            // eslint-disable-next-line react/jsx-key
            <BasicCard {...todo} />)
    return (

        <div style={{ width: '100%' }} className="pt-6 px-4">

            <Box
                sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                }}
            >

                {listTodo}
            </Box>


        </div>
    )

}