const Intressenten = require('../datenstruktur/intressenten');


exports.getAll = async (req, res, next) => {
  try {
    const ALL = await Intressenten.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.intressemelden = async (req, res, next) => {
  try {
    const INTRESSENT_MODEL = {
     userId: req.body.userId,
     inseratId: req.body.inseratId
    };

    try {
      const Intressent = await Intressenten.create(INTRESSENT_MODEL);
      console.log('User crerated');
      return res.status(201).json(Intressent)
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.getAnzahl = async (req, res, next) => {
    try{
    const prop = await Intressenten.findAndCountAll({ where: { inseratId: req.params.inseratId } });
    return res.status(200).json(prop);
    }catch (error) {
        return res.status(500).json(anzahl);
    }
};


exports.deleteOne = async (req, res, next) => {
  try {
    const user = await Intressenten.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};