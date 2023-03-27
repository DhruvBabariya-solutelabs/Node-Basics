import fs from "fs";

const requestHandler = (req,res)=>{
    console.log("Inside HAndler");
    console.log("Inside");
    const url = req.url;
    const method = req.method;
    console.log(url);
    if(url === '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<html>");
        res.write("<head><title> First Node Demo </title></head>");
        res.write('<body><h1>Hello World</h1><form action = "/create-user" method="POST">')
        res.write('<input type=text name = "username"> <button type="submit">ADD</button>')
        res.write("</form></body>")
        res.write("</html>");
        res.end("<h1>hello</h1>");
    }
    else if(url === '/users'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write("<html>");
        res.write("<head><title> First Node Demo </title></head>");
        res.write("<body><ul><li>User1</li><li>User 2</li><li>User 3</li></ul></body>")
        res.write("</html>");
        res.end();
    }
    else if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunks)=>{
            body.push(chunks);
        })
        req.on('end',()=>{
            const data = Buffer.concat(body).toString().split('=')[1];
            fs.writeFile("./users.txt",data,(err)=>{
                if(!err){
                    res.writeHead(302,{"Location":"/"});
                    res.end();
                }
                else{
                    console.log(err);
                }
            }); 
        })
    }
}
export default requestHandler;