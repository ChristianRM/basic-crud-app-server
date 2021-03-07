var mongodb = require('mongodb'),
  uuid = require('node-uuid'),
  mongoose = require('mongoose');
  mongoose.set('useFindAndModify', false);

exports.mongodb = mongodb;
//   ---------------------------------------------------------------------
//   					START CONNECTION
//   ---------------------------------------------------------------------
mongoose.connect(<<Your-mongodb-connection-uri-goes-here>>, { useNewUrlParser: true });
//...47732/practica', { useNewUrlParser: true });
var db = mongoose.connection;
exports.dbmc = db;
//prueba de conexion
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
  console.log('Connected to DB');

  Persons = mongoose.model('persons', new mongoose.Schema(
    {
      _id: { type: String, default: function () { return uuid.v1(); } },
      _name: { type: String, required: true},
      _avatar: { type: String }
    }
  ));
});