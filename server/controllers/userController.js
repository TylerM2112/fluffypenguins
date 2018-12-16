module.exports = {

  getAllUsers: (req, res) => {
    const db = req.app.get('db');
    // console.log('db', db);
    db.get_all_users()
      .then(
        (users) => {
          let user = users[0];
          user.addresses = JSON.parse(user.addresses);
          // console.log(user.address);
          res.status(200).send(user) 
        }
      )
      .catch(
        (err) => {
          console.log('it errored')
          res.status(500).send(err);
        }
      )
  }
}