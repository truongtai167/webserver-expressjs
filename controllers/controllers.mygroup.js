const {mygroup} = require('../models/models.mygroup');

function studentRequest (req, res) {
    var student = mygroup.find( (student) => {
		return student.id == parseInt(req.params.studentID);
	});
    if (student) {
        res.status(200).json(student);
    }
    else {
        res.status(400).json({error:'not valid'});
    }
}

function studentmessage (req ,res)
{
    var student = mygroup.find( (student) => {
		return student.id == parseInt(req.params.studentID);
	});
    if (student) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html>
                        <body>
                            <ul>
                                <li>${student.name}</li>
                            </ul>
                        </body>
                    </html>`);
        } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not valid');
        }

}
module.exports = {
    studentRequest,
    studentmessage

}
