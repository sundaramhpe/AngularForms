const app = express();
app.use(bodyParser.json());
app.use(cors);

app.get('/',function(req,res){
    res.send('Hello from Server');

});
app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send("message","Data Recived")
})
app.listen(PORT,function(){
    console.log('server is running on localhost:'+PORT);
})