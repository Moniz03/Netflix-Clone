let movies = [
{
    name:"Avengers:Endgame",
    poster:"https://i.ebayimg.com/images/g/TuoAAOSw4ARhoMr~/s-l1200.webp",
    rating: 9.1,
    Cast:"Chris Evans . Robert Downey Jr . Scarlett Johannson . Tom Holland . Chris Hemsworth . Mark Ruffalo . Benedict Cumberbatch"
},
{
    name:"Avengers:Infinity-War",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810",
    rating: 8.7,
    Cast:"Chris Evans . Robert Downey Jr . Scarlett Johannson . Tom Holland . Chris Hemsworth . Mark Ruffalo . Benedict Cumberbatch"
},
{
    name:"Captain America:Civil War",
    poster:"https://i.pinimg.com/originals/5e/a5/ac/5ea5ac38d4100add82c333391c92c06c.jpg",
    rating: 8.5,
    Cast:"Chris Evans . Robert Downey Jr . Scarlett Johannson . Tom Holland . Chris Hemsworth . Mark Ruffalo"
},
{
    name:"Spider-Man:No Way Home",
    poster:"https://i.ebayimg.com/images/g/I0YAAOSwG-diRapp/s-l1200.webp",
    rating: 8.2,
    Cast:" Tom Holland . Zendaya . Andrew Garfield . Toby Maguire"
},
{
    name:"Thor:Love and Thunder",
    poster:"https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/07/Thor-Love-and-Thunder-1.jpeg?w=720",
    rating: 7.3,
    Cast:"Chris Hemsworth . Christian Bale . Natalie Portman"
},
{
    name:"Ant-Man and The Wasp",
    poster:"https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/MOVIE_AntManATWasp.jpg?resize=540%2C810&ssl=1",
    rating: 7.9,
    Cast:"Paul Rudd . Evangeline Lily"
},
{
    name:"Iron-Man",
    poster:"https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
    rating: 8.2,
    Cast:"Robert Downey Jr . Gwenyth Paltrow . Jon Favreu"
},
{
    name:"Doctor Strange",
    poster:"https://www.joblo.com/wp-content/uploads/2016/09/doctor-strange-poster-1.jpg",
    rating: 8.0,
    Cast:"Benedict Cumberbatch . Rachel McAdams . Benedict Wong"
},
{
    name:"Captain Marvel",
    poster:"https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top",
    rating: 7.1,
    Cast:"Brie Larson . Samuel L Jackson . Gemma Chan"
},
{
    name:"Guardians of the Galaxy Vol 1",
    poster:"https://townsquare.media/site/442/files/2017/10/guardians_of_the_galaxy_ver2_xlg.jpg?w=980&q=75",
    rating: 8.2,
    Cast:"Chris Pratt . Zoe Saldana . Vin Diesel"
},
{
    name:"Black Panther",
    poster:"https://images.bauerhosting.com/legacy/empire-images/articles/5a048e6c57ad965d0a46ccbe/DONLSEDVAAAiZnW.jpg?auto=format&w=1440&q=80",
    rating: 8.7,
    Cast:"Chadwick Boseman . Michael B Jordan"
},
{
    name:"The Incredible Hulk",
    poster:"https://posters.movieposterdb.com/12_07/2008/800080/l_800080_0e7eda3b.jpg",
    rating: 7.6,
    Cast:"Edward Norton . Liv Tyler"
},
{
    name:"Black Widow",
    poster:"https://i.pinimg.com/originals/5a/72/92/5a7292c82822183b41e9d917f24782b1.jpg",
    rating: 7.3,
    Cast:"Scarlett Johannson . David Harbour . Chloe Grace Mortez"
},
{
    name:"Iron-Man 2",
    poster:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/8171kEgHRRL._AC_UF1000,1000_QL80_.jpg",
    rating:8.1,
    Cast:"Robert Downey Jr . Gwenyth Paltrow"
},
{
    name:"Thor",
    poster:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    rating:8.0,
    Cast:"Chris Hemsworth . Tom Hiddleston . Natalie Portman . Kat Dennings"
},
{
    name:"Captain America:The First Avenger",
    poster:"https://www.movieposters.com/cdn/shop/products/e5b711eb334a692f7be29efaf18eafdb_efa9d9c1-09e6-49a6-aff4-0d2d2d9571a5_500x.jpg?v=1573584624",
    rating:8.3,
    Cast:"Chris Evans . Sebastian Stan . Haylee Atwell"
},
{
    name:"The Avengers",
    poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    rating:8.5,
    Cast:"Chris Evans . Robert Downey Jr . Scarlett Johannson . Chris Hemsworth . Mark Ruffalo"
},
{
    name:"Iron-Man 3",
    poster:"https://collider.com/wp-content/uploads/iron-man-3-international-poster1.jpg",
    rating:7.6,
    Cast:"Robert Downey Jr . Scarlett Johannson . Gwenyth Paltrow"
},
{
    name:"Thor:Dark World",
    poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg",
    rating:7.5,
    Cast:"Chris Hemsworth . Tom Hiddleston . Natalie Portman . Kat Dennings"
    
},
{
    name:"Captain America:The Winter Soldier",
    poster:"https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_.jpg",
    rating:8.1,
    Cast:"Chris Evans . Sebastian Stan . Robert Downey Jr . Scarlett Johannson  "
},
{
    name:"Avengers:Age of Ultron",
    poster:"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
    rating:8.3,
    Cast:"Chris Evans . Robert Downey Jr . Scarlett Johannson . Chris Hemsworth . Mark Ruffalo . Elizabeth Olsen"
},
{
    name:"Ant-Man",
    poster:"https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_.jpg",
    rating:7.8,
    Cast:"Paul Rudd . Evangeline Lilly"
},
{
    name:"Guardians of the Galaxy:Vol 2",
    poster:"https://wallpapers.com/images/hd/guardians-of-the-galaxy-2-tux1ylleo7xd1op3.jpg",
    rating:7.6,
    Cast:"Chris Pratt . Zoe Saldana . Vin Diesel"
},
{
    name:"Spider-Man:Homecoming",
    poster:"https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg",
    rating:7.7,
    Cast:"Tom Holland . Zendaya . Robert Downey Jr"
},
{
    name:"Thor:Ragnarok",
    poster:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    rating:7.9,
    Cast:"Chris Hemsworth . Tom Hiddleston . Mark Ruffalo"
},
{
    name:"Spider-Man:Far from Home",
    poster:"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rating:7.5,
    Cast:"Tom Holland . Zendaya . Jake Gyllenhal"
},
{
    name:"Shang-Chi:The Legend of Ten Rings",
    poster:"https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    rating:8.1,
    Cast:"Simu Liu . Bendict Wong"
},
{
    name:"ETERNALS",
    poster:"https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    rating:6.5,
    Cast:"Angelina Jolie . Kumail Nanjiani . Kit Harrington . Richard Madden . Harry Styles"
},
{
    name:"Doctor Strange:Multiverse of Madness",
    poster:"https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg",
    rating:6.3,
    Cast:"Benedict Cumberbatch . Rachel McAdams . Benedict Wong . Elizabeth Olsen"
},
{
    name:"Black Panther:Wakanda Forever",
    poster:"https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    rating:7.1,
    Cast:"Michael B Jordan . Letitia Wright . Angela Basset"
},
{
    name:"AntMan and Wasp:Quantamania",
    poster:"https://m.media-amazon.com/images/M/MV5BODZhNzlmOGItMWUyYS00Y2Q5LWFlNzMtM2I2NDFkM2ZkYmE1XkEyXkFqcGdeQXVyMTU5OTA4NTIz._V1_.jpg",
    rating:6.9,
    Cast:"Paul Rudd . Evangeline Lily . Kathryn Newton . Jonathon Mayors"
},


];



function searchMovie()
{
   let movieName = document.getElementById('search').value;
 
 if(movieName!=="")
 {
    let result=movies.filter(function(movie)
               {
   
                return movie.name.toUpperCase().includes(movieName.toUpperCase())

               } )


               displayMovies(result);
 }
else{
    displayMovies(movies);
}

}


function displayMovies(data)
{
    document.getElementById("movies").innerHTML="";

    let htmlString= ``;

for(let i=0;i<data.length;i++)
{
   
  htmlString=htmlString+`
  <div class="movie">
        <div class="overlay">

           <div class="video">

           </div>

           <div class="details">

                 <h1>${data[i].name}</h1>
                 <h2>IMDB: ${data[i].rating}</h2>
                 <p>${data[i].Cast}</p>
                </div>

            </div>
            <img class="poster" src="${data[i].poster}">
         </div>
  `
}

console.log(htmlString);

document.getElementById("movies").innerHTML=htmlString;


}

displayMovies(movies);