const router = require('express').Router();
const { Doozie } = require('../../models');

// GET - display all doozies
router.get('/', (req, res) => {
    Doozie.findAll()
        .then(dbDoozieData => res.json(dbDoozieData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST - create new doozie
router.post('/', (req, res) => {
    Doozie.create({
        userID: req.body.User_id,
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.due_date
    });
});

// PUT - update a doozie
router.put('/:id', (req, res) => {
    Doozie.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbDoozieData => {
        if(!dbDoozieData[0]) {
            res.status(404).json({ message: 'No to-do found with this id'});
            return;
        }
        res.json(dbDoozieData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE doozie
router.delete('/:id', (req, res) => {
    Doozie.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDoozieData => {
            if (!dbDoozieData) {
                res.status(404).json({ message: 'No to-do found with this id' });
                return;
            }
            res.json(dbDoozieData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;