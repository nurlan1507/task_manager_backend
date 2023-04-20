const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const {userModel} = require("../config/database")
const bcrypt = require("bcrypt")
const {GOOGLE_CLIENT_SECRET,GOOGLE_CLIENT_ID} =  require("../config/settings")
const GoogleStrategy = require('passport-google-oauth20').Strategy


passport.use(
    new GoogleStrategy({
        clientID: "828297641879-hhvt5thvjfqvj76mbh9pupi6blnrh543.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/google/callback",
        scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://mail.google.com/',
        session:false,
        prompt: 'consent'
    },
    function(accessToken, refreshToken, profile, done) {
        // функция обратного вызова, которая будет вызвана при успешной аутентификации
        // profile содержит информацию о пользователе, которую вернул Google
        return done(null, profile);
      }
    )
)


module.exports = passport