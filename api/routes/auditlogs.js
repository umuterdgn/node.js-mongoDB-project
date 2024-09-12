const express = require('express');
const router = express.Router();
//req: body head gibi bilgileri tutar,----, res: cevap için kullanılıcak fonsksiyonları tutuyor,-----,next: bir sonraki fonksiyonun adını tutuyor
router.get('/', (req, res, next) => {
   res.json({
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers,
   });
});

module.exports = router;