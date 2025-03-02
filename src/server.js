require("dotenv").config()

const app = require("./app");
// Usar el router en la aplicación


const port = process.env.PORT

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

