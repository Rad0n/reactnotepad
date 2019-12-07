const express = require('express');
let id=3;
let data = [{
	    		"id":1,
				"title":"Hello",
				"body":"world"
			},
			{
				"id":2,
				"title":"react",
				"body":"fun"
			}

]

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/' , (req, res) => {
    
    res.json(data);


})

app.post('/api/', (req, res) => {
	let newData = {
		id,
		title:req.body.title,
		body:req.body.body
	}

	id+=1
	console.log(newData);

	data.push(newData)
    

})

app.delete('/api/:id', (req, res)=> {

	console.log(req.params.id)
	data = data.filter((x) => x.id != req.params.id)
	res.end('swag')


})
let port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));



