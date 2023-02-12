


app.get("/logout", session_checker, (req, res) => {
    //logout user and render menu
    req.session.destroy(() => {
        console.log("Session destroyed.");
    })
    res.render("menu", {message_success: "Du wurdest erfolgreich ausgeloggt."});
});



const session_checker = (req, res, next) => {
    if (req.session.user === undefined) {
        res.render("menu", {message_error: "Du musst dich zuerst einloggen!"})
    } else {
        next();
    }
}
