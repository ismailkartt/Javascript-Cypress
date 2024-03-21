let candidates=[
    {
        id:0,
    candName:'Melisa',
    country:'usa',
    skills:'Apex, LWC, js',
    experience:1
    },
    {
        id:1,
    candName:'Harry',
    country:'Germany',
    skills:'Apex, LWC(Lightning Web Components), js(javaScript),html',
    experience:2
    },{
        id:2,
    candName:'Melisa',
    country:'usa',
    skills:'Apex, lwc, js, html, css, flow',
    experience:6
    },
    {
        id:3,
    candName:'George',
    country:'USA',
    skills:'Apex, js, html, css, flow',
    experience:4
    }
]


function findCandi(){
    let cntry = document.querySelector("#cntry").value.toLowerCase();
    let skills = document.querySelector("#skills").value.toLowerCase();
    let experience = parseInt(document.querySelector("#experience").value.toLowerCase());

    let interview = candidates.filter(function(person){
        return (cntry === "" || person.country.toLocaleLowerCase()==cntry) && 
        (skills==="" || person.skills.toLocaleLowerCase().includes(skills)) &&
        (!experience || person.experience >= experience);
    });

    displayResults(interview);
}

function displayResults(filteredCandidates){
    let resultsDiv = document.querySelector("#results");
    resultsDiv.innerHTML = "";

    if(filteredCandidates.lenght === 0){
        resultsDiv.innerHTML = `<p>Aradiginiz sartlara gore aday bulunamamistir</p>`;
    }

    filteredCandidates.forEach(function(candidate){
        resultsDiv.innerHTML += `<div><h4>Candidate Name: ${candidate.candName}</h4></div>`;
    });

 

}