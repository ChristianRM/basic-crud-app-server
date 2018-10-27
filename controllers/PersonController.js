module.exports = {
  async index(req, res) {
    try {
      let persons;
      persons = await Persons.find({});
      res.send(persons).jsonp
    } catch (err) {
        console.log(err)
      res.status(500).send({
        error: "An error has ocurred"
      });
    }
  },
  async post(req, res) {
    try {
      console.log(req.body)
      var person = new Persons({ 
        _name: req.body._name,
        _avatar: req.body._avatar
      });
      var newPerson = await person.save()
      res.status(200).send({response: 'Person added'})
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has ocurred"
      });
    }
  },
  async put(req, res) {
    try {
      console.log(req.body)
      objUpdate = {}
      if(req.body._name){objUpdate._name=req.body._name}
      if(req.body._avatar){objUpdate._avatar=req.body._avatar}
      console.log(objUpdate)
      let person = await Persons.findOneAndUpdate({ _id : req.body._id}, objUpdate)
      console.log(person)
      if(!person) {
        return res.status(404).send('Not Found')
      } else {
        return res.status(200).send({response: 'Updated'})
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has ocurred"
      });
    }
  },
  async delete(req, res) {
    try {
      let person = await Persons.findOneAndRemove({ _id : req.body._id})
      if(!person) {
        return res.status(404).send('Not Found')
      } else {
        return res.status(200).send({response: 'Deleted'})
      }
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: "An error has ocurred"
      });
    }
  }
};
