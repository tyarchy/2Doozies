async function add() {
    document.querySelector('#title').value
    document.querySelector('#description').value
    document.querySelector('#userid').value

    var newDoozieInput = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        User_id: document.querySelector('#userid').value
    }
    console.log(newDoozieInput)
    const response = await fetch('/api/doozies/', {
        method: 'post',
        body: JSON.stringify (newDoozieInput),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
}

document.querySelector('#add').addEventListener('click', add );