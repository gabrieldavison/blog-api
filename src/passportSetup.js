import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/userModel";
import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return cb(null, false, { message: "Incorrect login or password." });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          return cb(null, user, { message: "Logged In Successfully" });
        }
      } catch (err) {
        cb(err);
      }
    }
  )
);
