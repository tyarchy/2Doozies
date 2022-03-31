async function deleteDoozie(e) {
    const response = await fetch(`/api/doozies/${e.target.value}`, {
        method: 'DELETE'
    })
        // .then(() => alert('Delete successful!!!'));

        console.log(response)
    if (response.ok) {
        document.location.replace('/');
    } else {
         alert(response.statusText);
    }
}

document.querySelector('#doozieContainer').addEventListener('click', e => deleteDoozie(e));