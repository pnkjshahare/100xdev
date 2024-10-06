const express = require("express");
const app = express();
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
            noHealthyKedneys += 1;
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
app.listen(3000);