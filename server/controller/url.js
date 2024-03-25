const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId();

const URL = require('../models/url');

async function handleGenerateNewShortURL (req, res) {
    const body = req.body;
    findurl = body.url;  

    // finding the redirectURL in database
    const result = await URL.findOne({ redirectURL:findurl });
    
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    else if (result) {
        
        return res.status(201).json({ id: result.shortID })
    }

    const shortID = uid.rnd(10);
    
    const url= await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })
    storedShortID= url.shortID;

    return res.json({ id: shortID });

}

async function handleRedirectToURL(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        { shortID },
        {
            $push: { visitHistory: { timestamp: Date.now() } }
        });

    res.redirect(entry.redirectURL);

}

async function handleAnalytics(req, res) {
    const shortID = req.params.shortID;
    const result = await URL.findOne({ shortID });
    return res.json({ TotalClicks: result.visitHistory.length, Analytics: result.visitHistory })
}

module.exports = {
    handleGenerateNewShortURL,
    handleRedirectToURL,
    handleAnalytics
}
