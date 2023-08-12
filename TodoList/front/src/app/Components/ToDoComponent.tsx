
'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Todo } from '../Model/ToDo';
import { useState } from 'react';



export default function BasicCard(todo: Todo) {

    const [complete, setCompleted] = useState(todo.isCompleted)


    function handleStateClick() {
        if (todo.isCompleted) {
            todo.isCompleted = false;
            setCompleted(false)

        } else {
            todo.isCompleted = true;
            setCompleted(true)
        }
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {todo.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleStateClick} variant='outlined' color={todo.isCompleted ? "error" : "success"}>
                    {todo.isCompleted ? "Abrir" : "Terminar"}</Button>
            </CardActions>
        </Card>
    );
}