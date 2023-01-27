const inserate = require('../datenstruktur/show');
const { Op } = require("sequelize");

exports.erstelleInserat = async (req, res, next) => {
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
      console.log('Ad created');
      return res.status(201).json(anzeige);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};



exports.alleInserate = async (req, res, next) => {
  try {
    
    const address = req.query.address;
    const condition = address ? { address: { [Op.iLike]: `%${address}%` } } : null;
    const alle = await anzeigen.findAll({ where: condition });
    return res.status(200).json(alle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.haueser = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'house'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.bauplaetze = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'construction-site'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.wohnungen = async (req, res, next) => {
  try { const anzeige = await anzeigen.findAll({ where: { type: 'apartment'} });
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};


exports.speziellInserat = async (req, res, next) => {
  try {
    const anzeige = await anzeigen.findByPk(req.params.id);
    return res.status(200).json(anzeige);
  } catch (error) {
    return res.status(500).json(error);
  }
};




exports.putInserat = async (req, res, next) => { // Schwiering evtl. hier was anderes machen-> zu ähnlich
  try { 
    //Neu :(
    try {
      const anzeige = await anzeigen.update(ANZEIGE, { where: { id: req.params.id } }); // Neu
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
