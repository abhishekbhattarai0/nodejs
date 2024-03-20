const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000


//Routes
app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/users", (req, res) => {
    const html = `
    <ul>${users.map( (user)=> `<li style="color: red;">${user.first_name}</li>`).join("")}</ul>
    `
    res.send(html)
})

app
    .route("/api/users/:id")
    .get( (req, res ) => {
        const id = Number(req.params.id);
        const user = users.find( (user) => user.id === id)
        res.send(user)
    })
    .put( (req, res) => {
        //Edit user with id 
        return res.json({ status: "Pending"})
    })
    .delete( (req, res) => {
        //Delete user with id
        return res.json({ status: "Pending"})
    })

//Routes
app.listen(PORT, ()=> console.log(`Server at ${PORT} has started`))