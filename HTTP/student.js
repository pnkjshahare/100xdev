const express = require("express");
const app = express();
app.use(express.json());
let user = []
app.get("/add-user", function (req, res) {
    let result = [];
    let totalStudent = user.length;
    for (let i = 0; i < user.length; i++) {
        let use = user[i];
        let mark = use.marks[0]
        let avg = (mark.physics + mark.chemistry + mark.math) / 3;
        result.push({
            name: use.name,
            Average: avg
        });
    }
    res.json({
        result,
        totalStudent
    })
})
app.post("/add-user", function (req, res) {
    let name = req.body.name;
    let physics = req.body.physics;
    let chemistry = req.body.chemistry;
    let math = req.body.math;
    user.push({
        name: name,
        marks: [{
            physics: physics,
            chemistry: chemistry,
            math: math
        }]
    })
    res.json({
        msg: " add student Done!"
    })
})
app.delete("/add-user", function (req, res) {
    let userName = req.body.userName;
    const arrUser = [];
    for (let i = 0; i < user.length; i++) {
        if (user[i].name !== userName) {
            let use = user[i];
            let mark = use.marks[0];

            // Push user details who should remain in the array
            arrUser.push({
                name: use.name,
                marks: [
                    {
                        physics: mark.physics,
                        chemistry: mark.chemistry,
                        math: mark.math
                    }
                ]
            });
        }
    }
    user = arrUser;
    res.json({
        msg: "Delete Done"
    })
})
app.listen(3000);