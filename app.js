//Variables
const express   = require("express");
const app       = express();
const hbs = require('hbs');
const PORT      = 3000;



// -------------------------------------------------- ARRAY -------------------------------------  
const players = [
    {
    name: "Rusell",
    lastName: "Westbrook",
    team: "OKC",
    photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg",
    average: [
        { year: 2013, points: 82 },
        { year: 2014, points: 82 },
        { year: 2015, points: 60 },
        { year: 2016, points: 46 },
        { year: 2017, points: 67 },
        { year: 2018, points: 80 }
    ]
    },
    {
    name: "Kevin",
    lastName: "Durant",
    team: "GSW",
    photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
    average: [
        { year: 2013, points: 76 },
        { year: 2014, points: 80 },
        { year: 2015, points: 65 },
        { year: 2016, points: 50 },
        { year: 2017, points: 67 },
        { year: 2018, points: 78 }
    ]
    },
    {
    name: "Lebron",
    lastName: "James",
    team: "CLE",
    photo: "https://clutchpoints.com/wp-content/uploads/2019/08/THUMBNAIL_027.jpg",
    average: [
        { year: 2013, points: 78 },
        { year: 2014, points: 82 },
        { year: 2015, points: 76 },
        { year: 2016, points: 84 },
        { year: 2017, points: 67 },
        { year: 2018, points: 60 }
    ]
    },
    {
    name: "Emanuel",
    lastName: "Ginóbilli",
    team: "SAS",
    photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
    average: [
        { year: 2013, points: 82 },
        { year: 2014, points: 76 },
        { year: 2015, points: 74 },
        { year: 2016, points: 80 },
        { year: 2017, points: 66 },
        { year: 2018, points: 63 }
    ]
    },
    {
    name: "Kyrie",
    lastName: "Irving",
    team: "BOS",
    photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
    average: [
        { year: 2013, points: 74 },
        { year: 2014, points: 72 },
        { year: 2015, points: 66 },
        { year: 2016, points: 82 },
        { year: 2017, points: 64 },
        { year: 2018, points: 61 }
    ]
    }
];
//-------------------------------------------------- ARRAY -------------------------------------  


 
//Middleware for the view engine
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//Middleware for the partials
hbs.registerPartials(__dirname + "/views/partials");

//Middleware for the static files located in public
app.use(express.static('public'));
 
//Routes
app.get("/", (req, res, next) => {
  res.render("index")
});
 
app.get("/players", (req, res, next) => {
  res.render("players", {players: players})
});
 
app.get("/teams", (req, res, next) => {
  res.render("teams", {layout: false})  //este layout false es para que esta página no cargue el layout
});
 
//Activate the server
app.listen(PORT, ()=>{
  console.log(`Server open at PORT number ${PORT}`)
});