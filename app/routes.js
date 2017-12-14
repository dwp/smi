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
  if (req.query.nino == 'GB654321C') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino)
  }
  else if (req.query.nino == 'BG112233N') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino)
  }
  else if (req.query.nino == 'DD445566X') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino)
  }
  else if (req.query.nino == 'ZZ918273C') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino+"&existingapplication=yes")
  }
  else if (req.query.nino == 'AA11111Z') {
    res.redirect('/smi/v'+v+"/search-nino-found-no-qualifying-benefit?nino="+nino)
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

  req.data.benefit = req.query.benefit;
  const benefit = req.data.benefit;

  req.data.existingapplication = req.query.existingapplication;
  const existingapplication = req.data.existingapplication;

  process.stdout.write("OK");

  next();
});

router.get('/smi/v*/limit_and_deductions',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.newapplication = req.query.newapplication;
  const newapplication = req.data.newapplication;

  next();
});

router.get('/smi/v*/money',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.newapplication = req.query.newapplication;
  const newapplication = req.data.newapplication;

  req.data.lendercode = req.query.lendercode;
  const lendercode = req.data.lendercode;


  next();
});


router.get('/smi/v*/summary',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.mortgagesloans = req.query.mortgagesloans;
  const mortgagesloans = req.data.mortgagesloans;

  req.data.payments = req.query.payments;
  const payments = req.data.payments;

  req.data.smitsstatus = req.query.smitsstatus;
  const smitsstatus = req.data.smitsstatus;


  next();
});

router.get('/smi/v*/notes',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;


  next();
});

router.get('/smi/v*/payment-detail',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  next();
});


router.get('/smi/v*/calculate_award',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;


  next();
});

router.get('/smi/v*/send-to-smits',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;


  next();
});

router.get('/smi/v*/payments-list',function(req,res,next)
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

  const nino = req.query.nino;

  if (req.query.payingTo == "lender") {
    res.redirect('/smi/v'+v+"/account-details-lender?nino="+nino)
  }
  else if (req.query.payingTo == "applicant") {
    res.redirect('/smi/v'+v+"/account-details-applicant?nino="+nino)
  }
  else {
    res.redirect('/smi/v'+v+"/account-details-none?nino="+nino)
  }

});

router.get('/smi/v*/account-details-*',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  next();

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
