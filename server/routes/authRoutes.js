const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
    console.log("User Logout", req.user);
  });

  app.get("/api/current_user", (req, res) => {
    console.log("current_user info", req.session);
    res.send(req.user);
  });
};
