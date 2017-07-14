var express = require('express')
var merge   = require('merge')
var path    = require('path')
var router  = express.Router()

/*
  Intercept all POST requests and save any data to
  the session in a slot named after the page it was
  submitted from.
*/
router.post(/^\/([^.]+)$/, function (req, res)
{
  // grab the name of the page we're heading to.
  var dest = req.params[0]
  // grab the name of the page we're coming from.
  var page = path.basename(req.headers.referer)
  // make sure session.data exists.
  req.session.data = req.session.data || {}
  // add the page data into the session (key'd on the page name it comes from).
  req.session.data[page] = req.body
  // redirect to the GET version of the page.
  res.redirect('/application/v1/'+dest)
})

/*
  Heading to the GET version of a page make sure to
  grab any data from the session and merge it with
  req.data which will end up in the page template
*/
router.get(/^\/([^.]+)$/, function (req, res, next)
{
  // merge the session data into req.data.
  req.data = req.data || {}
  merge(req.data,req.session)
  next();
})

module.exports = router
