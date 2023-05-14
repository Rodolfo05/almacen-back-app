import app from './app';

app.listen(app.get('port'));

console.log("Servidor PK_App ejecutandose. Puerto: ", app.get('port'));