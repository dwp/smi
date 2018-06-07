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
  else if (req.query.nino == 'QF082262D') {
    res.redirect('/smi/v'+v+"/search-nino-found-start?nino="+nino)
  }
  else {
    res.redirect('/smi/v'+v+"/search-nino-none?nino="+nino)
  }

});


router.get('/smi/v*/search',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  next();
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

router.get('/smi/v*/add-loan',function(req,res,next)
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


router.get('/smi/v*/property-money',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.newapplication = req.query.newapplication;
  const newapplication = req.data.newapplication;

  next();
});


router.get('/smi/v*/money-lookup',function(req,res,next)
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

router.get('/smi/v*/money-additional-lookup',function(req,res,next)
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


router.get('/smi/v*/money-additional',function(req,res,next)
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

router.get('/smi/v*/submit_for_processing',function(req,res,next)
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




router.get('/smi/smits/*',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };


req.data.warning = req.query.warning;
const warning = req.data.warning;

const date = new Date().getFullYear();

req.data.nino = req.query.nino;
const nino = req.data.nino;


req.data.loanreference = req.query.loanreference;
const loanreference = req.data.loanreference;

req.data.benefittype = req.query.benefittype;
const benefittype = req.data.benefittype;

req.data.report = req.query.report;
const report = req.data.report;

req.data.overrideupperlimit = req.query.overrideupperlimit;
const overrideupperlimit = req.data.overrideupperlimit;

req.data.nondependantdeductions = req.query.nondependantdeductions;
const nondependantdeductions = req.data.nondependantdeductions;

req.data.groundrentandservicecharge = req.query.groundrentandservicecharge;
const groundrentandservicecharge = req.data.groundrentandservicecharge;

req.data.outstandingbalance = req.query.outstandingbalance;
const outstandingbalance = req.data.outstandingbalance;

req.data.sharedhousingcosts1 = req.query.sharedhousingcosts1;
const sharedhousingcosts1 = req.data.sharedhousingcosts1;

req.data.sharedhousingcosts2 = req.query.sharedhousingcosts2;
const sharedhousingcosts2 = req.data.sharedhousingcosts2;

req.data.loanexemptamount = req.query.loanexemptamount;
const loanexemptamount = req.data.loanexemptamount;

req.data.weeklyMPPI = req.query.weeklyMPPI;
const weeklyMPPI = req.data.weeklyMPPI;

  next();
});


router.get('/smi/smits/*/check_answers',function(req,res,next)
{

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.loanreference = req.query.loanreference;
  const loanreference = req.data.loanreference;

  req.data.benefittype = req.query.benefittype;
  const benefittype = req.data.benefittype;

  req.data.overrideupperlimit = req.query.overrideupperlimit;
  const overrideupperlimit = req.data.overrideupperlimit;

  req.data.nondependantdeductions = req.query.nondependantdeductions;
  const nondependantdeductions = req.data.nondependantdeductions;

  req.data.groundrentandservicecharge = req.query.groundrentandservicecharge;
  const groundrentandservicecharge = req.data.groundrentandservicecharge;

  req.data.outstandingbalance = req.query.outstandingbalance;
  const outstandingbalance = req.data.outstandingbalance;

  req.data.sharedhousingcosts1 = req.query.sharedhousingcosts1;
  const sharedhousingcosts1 = req.data.sharedhousingcosts1;

  req.data.sharedhousingcosts2 = req.query.sharedhousingcosts2;
  const sharedhousingcosts2 = req.data.sharedhousingcosts2;

  req.data.loanexemptamount = req.query.loanexemptamount;
  const loanexemptamount = req.data.loanexemptamount;

  req.data.weeklyMPPI = req.query.weeklyMPPI;
  const weeklyMPPI = req.data.weeklyMPPI;

  if (nino == '' || loanreference == '' || benefittype == '' || outstandingbalance == '') {
    res.redirect('screen_1?warning=yes&'+'nino=' + nino + '&' +
                        'loanreference=' + loanreference + '&' +
                        'benefittype=' + benefittype + '&' +
                        'overrideupperlimit=' + overrideupperlimit + '&' +
                        'nondependantdeductions=' + nondependantdeductions + '&' +
                        'groundrentandservicecharge=' + groundrentandservicecharge + '&' +
                        'outstandingbalance=' + outstandingbalance + '&' +
                        'sharedhousingcosts1=' + sharedhousingcosts1 + '&' +
                        'sharedhousingcosts2=' + sharedhousingcosts2 + '&' +
                        'loanexemptamount=' + loanexemptamount + '&' +
                        'weeklyMPPI=' + weeklyMPPI)
  } else {
    res.redirect('screen_2?'+'nino=' + nino + '&' +
                        'loanreference=' + loanreference + '&' +
                        'benefittype=' + benefittype + '&' +
                        'overrideupperlimit=' + overrideupperlimit + '&' +
                        'nondependantdeductions=' + nondependantdeductions + '&' +
                        'groundrentandservicecharge=' + groundrentandservicecharge + '&' +
                        'outstandingbalance=' + outstandingbalance + '&' +
                        'sharedhousingcosts1=' + sharedhousingcosts1 + '&' +
                        'sharedhousingcosts2=' + sharedhousingcosts2 + '&' +
                        'loanexemptamount=' + loanexemptamount + '&' +
                        'weeklyMPPI=' + weeklyMPPI)
  }

});




router.get('/smi/data_transfer_tool/*/screen_1',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };

/* App actions, like on the next screen show and alert */

req.data.alert = req.query.alert;
const alert = req.data.alert;

req.data.referpage = req.query.referpage;
const referpage = req.data.referpage;

req.data.hasnotes = req.query.hasnotes;
const hasnotes = req.data.hasnotes;

req.data.newnote = req.query.newnote;
const newnote  = req.data.newnote;

req.data.warning = req.query.warning;
const warning = req.data.warning;


req.data.startnino = req.query.startnino;
const startnino = req.data.startnino;


/* Data of claimant to pass through screens */

  req.data.nino = req.query.nino;
  const nino = req.data.nino;

  req.data.title = req.query.title;
  const title = req.data.title;

  req.data.firstname = req.query.firstname;
  const firstname = req.data.firstname;

  req.data.lastname = req.query.lastname;
  const lastname = req.data.lastname;

  req.data.dob_dd = req.query.dob_dd;
  const dob_dd = req.data.dob_dd;

  req.data.dob_mm = req.query.dob_mm;
  const dob_mm = req.data.dob_mm;

  req.data.dob_yy = req.query.dob_yy;
  const dob_yy = req.data.dob_yy;

  req.data.claimantaddress1 = req.query.claimantaddress1;
  const claimantaddress1 = req.data.claimantaddress1;

  req.data.claimantaddress2 = req.query.claimantaddress2;
  const claimantaddress2 = req.data.claimantaddress2;

  req.data.claimantaddress3 = req.query.claimantaddress3;
  const claimantaddress3 = req.data.claimantaddress3;

  req.data.claimantaddress4 = req.query.claimantaddress4;
  const claimantaddress4 = req.data.claimantaddress4;

  req.data.claimantpostcode = req.query.claimantpostcode;
  const claimantpostcode = req.data.claimantpostcode;

  req.data.correspondenceaddress1 = req.query.correspondenceaddress1;
  const correspondenceaddress1 = req.data.correspondenceaddress1;

  req.data.correspondenceaddress2 = req.query.correspondenceaddress2;
  const correspondenceaddress2 = req.data.correspondenceaddress2;

  req.data.correspondencepostcode = req.query.correspondencepostcode;
  const correspondencepostcode = req.data.correspondencepostcode;

  next();
});



router.get('/smi/data_transfer_tool/v*/add_new_note',function(req,res,next)
{

  req.data.hasnotes = req.query.hasnotes;
  const hasnotes = req.data.hasnotes;

  req.data.referpage = req.query.referpage;
  const referpage = req.data.referpage;


  if (req.query.newnote == '') {

    res.redirect('screen_notes_add?warning=nonote&hasnotes='+hasnotes+'&referpage='+referpage)

  } else {

    if (req.query.referpage == 'overview') {

      res.redirect('screen_3-with-info-and-notes-1?alert=noteadded&hasnotes='+hasnotes+'&referpage='+referpage)

    } else if (req.query.referpage == 'noteslist') {

      res.redirect('screen_notes_1?alert=noteadded&hasnotes='+hasnotes+'&referpage='+referpage)

    }

  }

});


router.get('/smi/data_transfer_tool/v*/check_for_nino',function(req,res,next)
{

  req.data.nino = req.query.nino;
  const nino = req.data.nino;


  if (req.query.nino == '') {
    res.redirect('screen_0?warning=nonino')
  } else {
    res.redirect('screen_1?nino='+nino)
  }

});

router.get('/smi/v13/*',function(req,res,next)
{
  var v = req.params[0];
  req.data = req.data || { };


  req.data.casestatus = req.query.casestatus;
  const casestatus = req.query.casestatus;

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
