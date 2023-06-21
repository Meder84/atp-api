/* eslint-disable linebreak-style */
const Ad = require('../models/ad');

module.exports.createAd = (req, res) => {
  const { title, text, creatorId } = req.body;

  Ad.create({ title, text, creator: creatorId })
    .then((ad) => res.send({ data: ad }));
};

module.exports.getAds = (req, res) => {
  Ad.find({})
    .populate(['creator', 'followers']) // Чтобы отправить в ответе несколько полей, полученных из связей, методу populate следует передавать массив:
    .then((ad) => res.send({ data: ad }));
};
