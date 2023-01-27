const Interessenten = require('../datenstruktur/interessenten');


//alles ändern bei uns ist genau das gleiche




exports.holalles = async (req, res, next) => {
  try {
    const ALL = await Interessenten.findAll();
    return res.status(200).json(ALL);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.intressezeigen = async (req, res, next) => {
  try {
    const INTRESSENT_MODEL = {
     userId: req.body.userId,
     inseratId: req.body.inseratId
    };

    try {
      const Interessent = await Interessenten.create(INTERESSENT_MODEL);
      console.log('User created');
      return res.status(201).json(Interessent)
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.getNumber = async (req, res, next) => {
    try{
    const prop = await Interessenten.findAndCountAll({ where: { inseratId: req.params.inseratId } });
    return res.status(200).json(prop);
    }catch (error) {
        return res.status(500).json(anzahl);
    }
};


exports.loeschEins = async (req, res, next) => {
  try {
    const user = await Interessenten.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};