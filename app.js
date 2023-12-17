const thumbnails = document.querySelectorAll(".thumbnails img");
const displayImage = document.getElementById("displayImage");

thumbnails.forEach(function (thumb){
    thumb.addEventListener("click", function (){
        displayImage.src = thumb.src;
        displayImage.alt = thumb.alt;
    });
});

const imageArray = [
    {
    src:"Anfield.jpeg",
    alt:"LFC",
    description: "This is the home of Liverpool FC"
    },
    {
    src:"bernabeau.jpeg",
    alt:"RMFC",
    description: "This is the home of Real Madrid FC"
    },
    {
    src:"campnou.jpeg",
    alt:"BFC",
    description: "This is the home of Barcelona FC"
    },
    {
    src:"goodison.jpeg",
    alt:"EFC",
    description: "This is the home of Everton FC"
    },
    {
    src:"idunapark.jpeg",
    alt:"BVB",
    description: "This is the home of Borussia Dortmond FC"
    },
    {
    src:"oldtrafford.jpeg",
    alt:"MUFC",
    description:"This is the home of Manchester utd FC"
    },
    {
    src:"parcpsg.jpeg",
    alt:"PSG",
    description:"This is the home of paris st germain FC"
    },
    {
    src:"spurs.jpeg",
    alt:"THFC",
    description:"This is the home of Tottenham Hotspur FC"
    },
    {
    src:"stamfordbridge.jpeg",
    alt:"CFC",
    description:"This is the home of Chelsea FC"
    },
    {
    src:"stjamespark.jpeg",
    alt:"NFC",
    description:"This is the home of Newcastle utd FC"
    },
    {
    src:"villapark.jpeg",
    alt:"AVFC",
    description:"This is the home of Aston Villa FC"
    },
    {
    src:"emirates.jpeg",
    alt:"AFC",
    description:"This is the home of Arsenal FC"
    },
    {
    src:"wandamadrid.jpeg",
    alt:"AMFC",
    description:"This is the home of Athletico Madrid FC"
    },
    {
    src:"allianz.jpeg",
    alt:"BMFC",
    description:"This is the home of Bayern Munich FC"
    },
]

for (let i = 0; i < imageArray.length; i++) {
    console.log(imageArray[i])
}
