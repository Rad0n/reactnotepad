const {createServer} = require('http')
const express = require('express');
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')


let id=0;
let data = []

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(compression())
app.use(morgan('dev'))


app.get('/api/' , (req, res) => {    
    res.json(data)
})

app.post('/api/', (req, res) => {
	let newData = {
		id,
		title:req.body.title,
		body:req.body.body
    }
    
	id+=1
	data.push(newData)
})

app.delete('/api/:id', (req, res)=> {

	data = data.filter((x) => x.id != req.params.id)
	
})

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const server = createServer(app)

let port = process.env.PORT || 5000;
app.listen(port, err => {
    if(err) throw err
    console.log(`Server started`)
});



