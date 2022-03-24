const { Doozie } = require('../models');

const doozieData = [
    {
        title: 'Test title for doozie.',
        description: 'Test desription for doozie.',
        date: 'Test date.',
    },
    {
        title: 'Test 2 title for doozie.',
        description: 'Test 2 desription for doozie.',
        date: 'Test 2 date.',
    },
    {
        title: 'Test 3 title for doozie.',
        description: 'Test 3 desription for doozie.',
        date: 'Test 3 date.',
    }
]

const seedDoozies = () => Doozie.bulkCreate(doozieData);

module.exports = seedDoozies;