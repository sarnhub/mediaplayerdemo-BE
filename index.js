// import json server using require method

const jsonServer=require('json-server')

// to create server using json server

const server=jsonServer.create()

// create routing
const router=jsonServer.router("db.json")

// create middle ware

const middleware=jsonServer.defaults()

// create port for server
const PORT=process.env.PORT||4000

// use middleware in server

server.use(middleware)
server.use(router)

// to use port in server

server.listen(PORT,()=>{
    console.log("media player server started at PORT"+PORT);
})