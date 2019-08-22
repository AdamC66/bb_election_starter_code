document.addEventListener("DOMContentLoaded", function() {
    axios
    .get('https://eric-deploy-test.herokuapp.com/bb')
    .then(function(response){
        console.log(response.data)
        let mainlist = document.querySelector('#candidates')
        let arr = response.data.candidates
        arr.forEach(candidate =>{
            let newCandidate = document.createElement('li')
            newCandidate.innerText = ('Name: ' + candidate.name + ', Votes: ' + candidate.votes)
            mainlist.appendChild(newCandidate)
        })
    })
});
