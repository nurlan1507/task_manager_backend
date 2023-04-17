const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const {userModel} = require("../config/database")
const bcrypt = require("bcrypt")
const {GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID} =  require("../config/settings")
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(
    new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "https://www.example.com/oauth2/redirect/google",
        session:false
    },
    function(accessToken, refreshToken, profile, done) {
        // функция обратного вызова, которая будет вызвана при успешной аутентификации
        // profile содержит информацию о пользователе, которую вернул Google
        return done(null, profile);
      }
    )
)


module.exports = passport