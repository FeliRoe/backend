const Benutzer = require('../datenstruktur/benutzer');



// Alles ändern bei uns ist genau das gleiche


exports.holAlles = async (req, res, next) => {
  try {
    const ALL = await Users.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.holEins = async (req, res, next) => {
  try {
    const user = await Users.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.erstellEins = async (req, res, next) => {
  try {
    const USER_MODEL = {
     username: req.body.username,
     email: req.body.mail,
     telefonnummer: req.body.telefonnummer,
     password: req.body.password

    };

    try {
      const user = await Users.create(USER_MODEL);
      console.log('User created');
      return res.status(201).json("Benutzer erfolgreich angelegt")
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.aktualisierEins = async (req, res, next) => {
  try {
    const USER_MODEL = {
      Benutzername: req.body.Benutzername,
      email: req.body.mail,
      telefonnummer: req.body.telefonnummer,
      Passwort: req.body.Passwort
    };

    try {
      const user = await Users.update(USER_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(user);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.loeschEins = async (req, res, next) => {
  try {
    const user = await Users.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};