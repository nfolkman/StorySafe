const express = require('express')
const passport = require('passport')
const router = express.Router()

//@desc     Google Authentication
// @desc   GET to /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))


//@desc     Google Auth Callback
// @desc   GET to (/auth/google/callback)
router.get(
   '/google/callback', 
   passport.authenticate('google', { failureRedirect: '/'} ), 
   (req, res) => {
      res.redirect('/dashboard')
   }
)


// @desc Logout User
// @route  /auth/logout

router.get('/logout', (req,res)=> {
   req.logout()
   res.redirect('/')
})



module.exports = router