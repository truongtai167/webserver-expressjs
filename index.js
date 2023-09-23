const express = require('express');
const app = express();
const PORT = 5000;

const {mygroup} = require('./models/models.mygroup');
const {studentRequest} = require('./controllers/controllers.mygroup');
const studentReq = require('./routes/routes.mygroup');
const {studentmessage} = require('./controllers/controllers.mygroup');
const studentmes = require('./routes/routes.mygroup');
app.use(express.json());


app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

//xuất ra tất cả thông tin trong mygroup dạng json
app.get('',((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(mygroup));
}));
// /<MSSV>/<id> 
app.get('/MSSV/:studentID', studentRequest);

app.post('/MSSV',((req,res)=> {
    console.log(`${req.body}`);
    if (!req.body.name) {
        return res.status(400).json({
            error:'must have username'
        });
    }
    const student = {name: req.body.name,id:students.length};
    mygroup.push(student);
    res.status(200).json(student);
}))

// /message/<id>:
app.get ('/message/:studentID',studentmessage);

app.get('/message',((req,res) => {
    const studentList = mygroup.map(member => `<li>${member.name}</li`).join();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><ul> ${studentList} </ul></body></html>`);
}));
app.use('/MSSV', studentReq);
app.use('/MSSVV', studentmes);


app.listen(PORT);