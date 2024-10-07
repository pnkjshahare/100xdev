const express = require("express");
const app = express();
app.use(express.json());
const users = [{
    name: 'john',
    kidenys: [{
        health: false,
    },
    {
        health: true

    }
    ]
}]
app.get("/", function (req, res) {
    const johnkednys = users[0].kidenys;
    // console.log("john total kedenys"+johnkednys);
    const noOfKedneys = johnkednys.length;
    console.log("john total kedenys" + noOfKedneys);
    let noHealthyKedneys = 0;
    for (let i = 0; i < johnkednys.length; i++) {
        if (johnkednys[i].health) {
            noHealthyKedneys = noHealthyKedneys + 1;
        }

    }
    const noUnHealthyKedenys = noOfKedneys - noHealthyKedneys;

    console.log("healthy" + noHealthyKedneys);
    console.log("unhealthy" + noUnHealthyKedenys);
    res.json({
        noOfKedneys,
        noHealthyKedneys,
        noUnHealthyKedenys
    })

})

app.post("/", function (req, res) {
    console.log(req.body);


    const isHealthy = req.body.isHealthy;
    users[0].kidenys.push({
        health: isHealthy

    })
    res.json({
        msg: "Done! "
    })
})
app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidenys.length; i++) {
        users[0].kidenys[i].health = true;
    }
    res.json({})
})
app.delete("/", function (req, res) {
    if (findUnhealthy()) {
        let newKidenys = [];
        for (let i = 0; i < users[0].kidenys.length; i++) {
            if (users[0].kidenys[i].health) {
                newKidenys.push({
                    health: true
                })
            }
        }
        users[0].kidenys = newKidenys;
        res.json({})
    }
    else {
        res.status(411).json({
            msg: "you don't have bad kidney"
        })
    }

})
function findUnhealthy() {
    let checkUnhealthy = false;
    for (let i = 0; i < users[0].kidenys.length; i++) {
        if (users[0].kidenys[i].health == false) {
            checkUnhealthy = true;
        }
    }
    return checkUnhealthy;
}
app.listen(3000);