var express = require('express')
var path    = require('path')
var router  = express.Router()

// Route index page
router.get('/', function (req, res) {
  // res.render('index')
  res.redirect('/smi/')
})

/*
  Pass 'path' info into all templates.
*/
router.get('*', function (req, res, next) {
  req.data = req.data || { };
  req.data.path = path.dirname(req.params[0]).substr(1);
  next();
})

router.get('/smi/v*/dosearch/',function(req,res,next)
{
  var v = req.params[0];

  if (req.query.nino == 'GB654321C') res.redirect('/smi/v'+v+"/person-2?nino=GB654321C")
  else if (req.query.nino == 'ZZ918273C') res.redirect('/smi/v'+v+"/person-3?nino=ZZ918273C")
  else res.redirect('/smi/v'+v+"/person-1?nino=QQ123456C")

});



router.get('/smi/v*/person*', function (req, res, next) {
  req.data = req.data || { };
  req.data.nino = req.query.nino;
  next();
})

router.get('/smi/v*/search-nino/',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };
  req.data.nino = req.query.nino;

  const nino = req.data.nino;

  if (req.query.nino == '') {
    res.redirect('/smi/v'+v+"/search-nino-no-entry")
  }
  else if (req.query.nino == 'GB654321C') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino)
  }
  else if (req.query.nino == 'ZZ918273C') {
    res.redirect('/smi/v'+v+"/search-nino-found-continue?nino="+nino)
  }

  else {
    res.redirect('/smi/v'+v+"/search-nino-none?nino="+nino)
  }

});

router.get('/smi/v*/search-nino-*/',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };
  req.data.nino = req.query.nino;
  const nino = req.data.nino;
  next();
});


router.get('/smi/v*/account-details/',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  const nino = req.data.nino;

  if (req.query.payingTo == "lender") {
    res.redirect('/smi/v'+v+"/account-details-lender")
  }
  else if (req.query.payingTo == "applicant") {
    res.redirect('/smi/v'+v+"/account-details-applicant")
  }
  else {
    res.redirect('/smi/v'+v+"/account-details-none")
  }

});


/*
  Redirect all posts to gets.
*/
router.post(/^\/([^.]+)$/, function (req, res) {
  var path = (req.params[0]);
  res.redirect('/'+path);
});
// add your routes here

module.exports = router
