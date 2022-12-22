const Users = require('../datenstruktur/users');

exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Users.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.getOne = async (req, res, next) => {
  try {
    const user = await Users.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.createOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
     username: req.body.username,
     email: req.body.mail,
     telefonnummer: req.body.telefonnummer,
     password: req.body.password

    };

    try {
      const user = await Users.create(USER_MODEL);
      console.log('User crerated');
      return res.status(201).json("User erfolgreich angelegt")
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const USER_MODEL = {
      username: req.body.username,
      email: req.body.mail,
      telefonnummer: req.body.telefonnummer,
      password: req.body.password
    };

    try {
      const user = await Users.update(USER_MODEL, { where: { id: req.params.id } });
      return res.status(200).json(user);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await Users.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};