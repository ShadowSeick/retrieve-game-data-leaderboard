const express = require('express');
const router = express.Router();
const FortinteUser = require('../models/FortniteData');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

router.get('/', (req, res) => {
    res.send('This is the main REST API');
})

router.get('/:id', async (req, res) => {

        try {
            const id = req.url;
            const userData = await fetch(`https://fortnite-api.com/v2/stats/br/v2${id}`);
            const data = await userData.json();
            return res.status(200).send(data);
        } catch (error) {
            return res.json({ message: error });
        }


})

module.exports = router;