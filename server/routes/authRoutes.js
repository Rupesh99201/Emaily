const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
    console.log("User Logout", req.user);
  });

  app.get("/api/current_user", (req, res) => {
    console.log("current_user info", req.session);
    res.send(req.user);
  });
};
