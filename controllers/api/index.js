const router = require("..");

router.get("/events", (req, res) => {
    db.finAll({}).then (data => {
        res.render("", data)
    })
})