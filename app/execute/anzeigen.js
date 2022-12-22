const anzeigen = require('../datenstruktur/anzeigen');
const { Op } = require("sequelize");

exports.erstelleAnzeige = async (req, res, next) => {
  try {
    const ANZEIGE = {
      createdOn : req.body.createdOn,
      createdBy : req.body.createdBy,
      softwareVersion: req.body.softwarVersion,
      customer: req.body.customer,
      type: req.body.entry.type,
      address: req.body.entry.address,
      postal: req.body.entry.postal,
      city: req.body.entry.city,
      size: req.body.entry.size,
      comment: req.body.entry.comment,
      shortHand: req.body.entry.shortHand,
    };

    try {
      const anzeige = await anzeigen.create(ANZEIGE);
      console.log('Inserat crerated');
      return res.status(201).json(anzeige);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};



exports.alleAnzeigen = async (req, res, next) => {
  try {
    
    const address = req.query.address;
    const condition = address ? { address: { [Op.iLike]: `%${address}%` } } : null;
    const alle = await anzeigen.findAll({ where: condition });
    return res.status(200).json(alle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.Haeuser = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'house'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.ConstructionSites = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'construction-site'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.Apartments = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'apartment'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.specificAnzeige = async (req, res, next) => {
  try {
    const anzeige = await anzeigen.findByPk(req.params.id);
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};




exports.putAnzeige = async (req, res, next) => {
  try {
    const ANZEIGE = {
      createdOn : req.body.createdOn,
      createdBy : req.body.createdBy,
      softwareVersion: req.body.softwarVersion,
      customer: req.body.customer,
      type: req.body.entry.type,
      address: req.body.entry.address,
      postal: req.body.entry.postal,
      city: req.body.entry.city,
      size: req.body.entry.size,
      comment: req.body.entry.comment,
      shortHand: req.body.entry.shortHand,
    };

    try {
      const anzeige = await anzeigen.update(ANZEIGE, { where: { id: req.params.id } });
      return res.status(200).json(anzeige);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.loesche = async (req, res, next) => {
  try {
    const anzeige = await anzeigen.destroy({ where: { id: req.params.id } });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};
