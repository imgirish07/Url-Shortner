const express = require('express');

const router = express.Router();

const { handleGenerateNewShortURL } = require('../controller/url');
const { handleRedirectToURL, handleAnalytics } = require('../controller/url');

router.post('/', handleGenerateNewShortURL);

router.get('/:shortID', handleRedirectToURL);

router.get('/analytics/:shortID', handleAnalytics);

module.exports = router;