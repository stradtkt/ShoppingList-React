const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find({})
        .sort({date: -1})
        .then(items => res.json(items))
        .catch(err => res.json(err))
});

module.exports = router;
