const express = require('express')
const cors = require('cors')
const app = express();
const axios = require("axios")


app.use(
    cors({
        origin: '*',
    })
)

app.get('/:endpoint', (req, res) => {
    let endpoint = "https://www.metaweather.com/api/location/" + req.params.endpoint + "/?lattlong=" + req.query.lattlong 
    console.log(endpoint)
    console.log(req.params.endpoint)
    console.log(req.query.lattlong)
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.get('/:woeid', (req, res) => {
    let woeid = "https://www.metaweather.com/api/location/" + req.params.woeid
    console.log("woeid ep", woeid)
    console.log("woeid", req.params.woeid)
    axios.get(woeid).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})



// app.get("/", (res, req) => {
//     console.log("local server");
//     const data = {result : "sucess"};
//     res.send(JSON.parse(data))
// })

app.listen(3000, () => {
    console.log("Server dey run")
})
// // app.use(cors({
// //     origin: '*'
// // }))

// // app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {
// //     let endpoint = "https://www.metaweather.com/api/location" + req.params.endpoint
// //     axios.get(endpoint).then(response => {
// //         res.json(response.data)
// //     }).catch(error => {
// //         res.json(error)
// //     })
// // })

// // app.listen(3000);