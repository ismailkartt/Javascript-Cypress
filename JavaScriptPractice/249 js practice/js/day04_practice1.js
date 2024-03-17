

const oceanFacts = [
    {
        title: "Great Barrier Reef",
        content: "The Great Barrier Reef is the world's largest coral reef system.",
        image: "../sources/img/Great Barrier Reef.jpg",
        location: "Australia",
        size: "344,400 square kilometers",
        discoveryYear: 1770,
        uniqueFeature: "Largest living structure on Earth",
        conservationStatus: "Vulnerable"
    },
    {
        title: "Mariana Trench",
        content: "The Mariana Trench is the deepest part of the world's oceans.",
        image: "../sources/img/shutterstock_1853507206-1-1.jpg",
        location: "Western Pacific Ocean",
        depth: "10,984 meters",
        discoveryYear: 1875,
        uniqueFeature: "Contains deepest point on Earth",
        conservationStatus: "Not evaluated"
    },
   
    {
        title: "Arctic Ocean",
        content: "The Arctic Ocean is the smallest and shallowest of the world's five major oceans.",
        image: "../sources/img/Arctic Ocean.jpg",
        location: "Centered on the North Pole",
        size: "15.558 million square kilometers",
        discoveryYear: "Prehistoric times",
        uniqueFeature: "Home to polar ice pack",
        conservationStatus: "Threatened by climate change"
    },
    {
        title: "Indian Ocean",
        content: "The Indian Ocean is the third largest of the world's oceanic divisions.",
        image: "../sources/img/Indian Ocean.jpg",
        location: "Between Africa, Asia, Australia and the Southern Ocean",
        size: "70.56 million square kilometers",
        discoveryYear: "Prehistoric times",
        uniqueFeature: "Warmest ocean in the world",
        conservationStatus: "Affected by pollution and overfishing"
    },
    {
        title: "Baltic Sea",
        content: "The Baltic Sea is known for its brackish water and lies in Northern Europe.",
        image: "../sources/img/Baltic Sea.jpg",
        location: "Northern Europe",
        size: "377,000 square kilometers",
        discoveryYear: "Ancient history",
        uniqueFeature: "Lowest salinity of any ocean sea",
        conservationStatus: "Affected by industrial pollution"
    },
    {
        title: "Southern Ocean",
        content: "The Southern Ocean, also known as the Antarctic Ocean, encircles Antarctica.",
        image: "../sources/img/Southern Ocean.jpg",
        location: "Encircling Antarctica",
        size: "21.960 million square kilometers",
        discoveryYear: 1928,
        uniqueFeature: "Fourth-largest ocean division",
        conservationStatus: "Impacted by climate change"
    },
    {
        title: "Coral Triangle",
        content: "The Coral Triangle is the global center of marine biodiversity.",
        image: "../sources/img/Coral Triangle.jpg",
        location: "Western Pacific Ocean",
        size: "6 million square kilometers",
        discoveryYear: "Recognized in the 21st century",
        uniqueFeature: "Highest coral diversity in the world",
        conservationStatus: "Vulnerable due to overfishing and habitat loss"
    },
    {
        title: "Sargasso Sea",
        content: "The Sargasso Sea is a region in the middle of the North Atlantic Ocean.",
        image: "../sources/img/Sargasso Sea.jpg",
        location: "North Atlantic Ocean",
        size: "3.5 million square kilometers",
        discoveryYear: 1492,
        uniqueFeature: "Only sea without a land boundary",
        conservationStatus: "Threatened by plastic pollution"
    },
    {
        title: "Red Sea",
        content: "The Red Sea is one of the saltiest bodies of water in the ocean.",
        image: "../sources/img/Red Sea.jpg",
        location: "Between Africa and Asia",
        size: "438,000 square kilometers",
        discoveryYear: "Ancient history",
        uniqueFeature: "Home to extensive coral reefs",
        conservationStatus: "At risk from tourism and overfishing"
    },
    {
        title: "Dead Sea",
        content: "The Dead Sea is a salt lake bordered by Jordan to the east and Israel and Palestine to the west.",
        image: "../sources/img/Dead Sea.jpg", 
        location: "Jordan-Israel border",
        size: "605 square kilometers",
        discoveryYear: "Ancient history",
        uniqueFeature: "Lowest elevation on land and high salinity",
        conservationStatus: "Rapidly shrinking due to water diversion"
    }
    
    
];

let currentFactIndex=0;
let factInterval;//declare ettim.

function displayFact(){
    const {title,content, image, location, size, discoveryYear, uniqueFeature, conservationStatus}=oceanFacts[currentFactIndex];

    const factDiv=document.getElementById('ocean-fact');

    factDiv.style.backgroundImage=`url('${image}')`



    factDiv.innerHTML=`
    <div class='fact-text-content'>
        <h2>${title}</h2>
        <p>${content}</p>
        <p><strong>Location: </strong>${location}</p>
        <p><strong>Size: </strong>${size}</p>
        <p><strong>Discovery Year: </strong>${discoveryYear}</p>
        <p><strong>Unique Feature: </strong>${uniqueFeature}</p>
        <p><strong>Conservation Status: </strong>${conservationStatus}</p>
    </div>
    `

}

displayFact();





document.getElementById('next-fact').addEventListener('click',()=>{
    currentFactIndex=(currentFactIndex+1)% oceanFacts.length;
    displayFact();
})




document.getElementById('prev-fact').addEventListener('click',()=>{
    currentFactIndex=currentFactIndex ===0 ? oceanFacts.length-1 : currentFactIndex-1;
    displayFact();
})



//Bu sekilde kullandigimizda sayfa load oldugu anda calismaya basliyor, 
//ama kontrol edemiyoruz, kontrol edebilmek icin startFactRotation methodunu olusturuyoruz
// setInterval(()=>{
//     currentFactIndex=(currentFactIndex+1)% oceanFacts.length;
//     displayFact();
// }, 1000);

function startFactRotation(){

    //factInterval diye bir variable olusturduk, bunun icine setIntervalin dondurdugu id yi koyduk
    factInterval=setInterval(()=>{
        currentFactIndex=(currentFactIndex+1)% oceanFacts.length;
        displayFact();
    }, 1000);
}

startFactRotation();

document.getElementById('pause-fact').addEventListener('click',()=>{
    clearInterval(factInterval);
})

document.getElementById('continue-fact').addEventListener('click',()=>{
    startFactRotation();
})


document.getElementById('update-fact').addEventListener('click',()=>{
    // verilen datalari kullanicidan aldim.
    const newSize=document.getElementById('size').value;
    const newDiscoveryYear=document.getElementById('discoveryYear').value;
    const newUniqueFeature=document.getElementById('uniqueFeature').value;
    const newConservationStatus=document.getElementById('conservationStatus').value;

    //gecici bir object olusturdum ki daha sonra asil arrayin icinde update yapmak icin
    const updatedInfo={};
    newSize && (updatedInfo.size=newSize);
    newDiscoveryYear && (updatedInfo.discoveryYear=newDiscoveryYear);
    newUniqueFeature && (updatedInfo.uniqueFeature=newUniqueFeature);
    newConservationStatus && (updatedInfo.conservationStatus=newConservationStatus);

    updateFact(currentFactIndex, updatedInfo);



})

function updateFact(index, newFact){
    oceanFacts[index]={...oceanFacts[index],...newFact}
    displayFact();
}
