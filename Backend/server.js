import express from 'express';
const app = express();
// const port = 3000;
const port = 4000;

import cors from 'cors';
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("test")
});

app.get('/api/tasks', (req, res)=>{
    const myTasks = [{"title":"Task 1"},{"title":"Task 2"}]
    res.json({myArray:myTasks});
})

app.post('/api/tasks',(req, res)=>{
   console.log(req.body);
   res.send('POST request to the tasks endpoint'); 
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
})