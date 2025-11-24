const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());
const schema=zod.array(zod.number());
/*
{
email: string ->@ gmail.com
password: atleast length 8 char
country : IN US
}
*/

const schema1=zod.object({
email:zod.string().email(),
password:zod.string().min(8),
country:z.literal("IN").or(z.literal("US"))

})

app.post("/", function (req, res) {
    const kidney = req.body.kidney;
    // const kidenyLength = kidney.length;
    const response=schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(3000);