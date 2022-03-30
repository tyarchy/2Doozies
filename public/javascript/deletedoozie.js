async function deleteDoozie(e) {
    console.log(e.target.value)
    const response = await fetch('/:id', {
        onDelete: 'SET NULL'
    });
}

document.querySelector('#doozieContainer').addEventListener('click', e => deleteDoozie(e) );