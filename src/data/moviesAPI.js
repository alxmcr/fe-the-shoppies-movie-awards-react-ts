const moviesAPI = [
    {
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": "2017",
        "Rated": "PG-13",
        "Released": "05 May 2017",
        "Runtime": "136 min",
        "Genre": "Action, Adventure, Comedy, Sci-Fi",
        "Director": "James Gunn",
        "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "85%"
            },
            {
                "Source": "Metacritic",
                "Value": "67/100"
            }
        ],
        "Metascore": "67",
        "imdbRating": "7.6",
        "imdbVotes": "583,183",
        "imdbID": "tt3896198",
        "Type": "movie",
        "DVD": "10 Jul 2017",
        "BoxOffice": "$389,813,101",
        "Production": "Walt Disney Pictures, Marvel Studios",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Rambo",
        "Year": "2008",
        "Rated": "R",
        "Released": "25 Jan 2008",
        "Runtime": "92 min",
        "Genre": "Action, Thriller",
        "Director": "Sylvester Stallone",
        "Writer": "Art Monterastelli, Sylvester Stallone, David Morrell (character)",
        "Actors": "Sylvester Stallone, Julie Benz, Matthew Marsden, Graham McTavish",
        "Plot": "In Thailand, John Rambo joins a group of mercenaries to venture into war-torn Burma, and rescue a group of Christian aid workers who were kidnapped by the ruthless local infantry unit.",
        "Language": "English, Burmese, Thai",
        "Country": "Germany, USA, Thailand",
        "Awards": "1 win & 1 nomination.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.0/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "37%"
            },
            {
                "Source": "Metacritic",
                "Value": "46/100"
            }
        ],
        "Metascore": "46",
        "imdbRating": "7.0",
        "imdbVotes": "219,755",
        "imdbID": "tt0462499",
        "Type": "movie",
        "DVD": "26 Aug 2016",
        "BoxOffice": "$42,754,105",
        "Production": "Lionsgate Films",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Hey Ram",
        "Year": "2000",
        "Rated": "Not Rated",
        "Released": "18 Feb 2000",
        "Runtime": "186 min",
        "Genre": "Crime, Drama, History",
        "Director": "Kamal Haasan",
        "Writer": "H. Banerjee (Subtitles), Kamal Haasan, Manohar Shyam Joshi (Hindi dialogue)",
        "Actors": "Kamal Haasan, Shah Rukh Khan, Rani Mukerji, Hema Malini",
        "Plot": "Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him.",
        "Language": "Tamil, Hindi",
        "Country": "India",
        "Awards": "5 wins & 7 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTZjNGMzODItNTNkNi00MDE1LWI3Y2UtNTQ3ZTdmMjRlZjkzXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.9/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "78%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "7.9",
        "imdbVotes": "11,643",
        "imdbID": "tt0222012",
        "Type": "movie",
        "DVD": "30 Nov 2016",
        "BoxOffice": "$274,675",
        "Production": "Raajkamal Films International",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Harry Potter and the Deathly Hallows: Part 2",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "15 Jul 2011",
        "Runtime": "130 min",
        "Genre": "Adventure, Drama, Fantasy, Mystery",
        "Director": "David Yates",
        "Writer": "Steve Kloves (screenplay), J.K. Rowling (novel)",
        "Actors": "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
        "Plot": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
        "Language": "English",
        "Country": "UK",
        "Awards": "Nominated for 3 Oscars. Another 46 wins & 91 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.1/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "96%"
            },
            {
                "Source": "Metacritic",
                "Value": "85/100"
            }
        ],
        "Metascore": "85",
        "imdbRating": "8.1",
        "imdbVotes": "776,303",
        "imdbID": "tt1201607",
        "Type": "movie",
        "DVD": "24 Jul 2014",
        "BoxOffice": "$381,409,310",
        "Production": "Heyday Films, Moving Picture Company, Warner Bros.",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Home",
        "Year": "2015",
        "Rated": "PG",
        "Released": "27 Mar 2015",
        "Runtime": "94 min",
        "Genre": "Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi",
        "Director": "Tim Johnson",
        "Writer": "Tom J. Astle (screenplay by), Matt Ember (screenplay by), Adam Rex (book)",
        "Actors": "Jim Parsons, Rihanna, Steve Martin, Jennifer Lopez",
        "Plot": "An alien on the run from his own people makes friends with a girl. He tries to help her on her quest, but can be an interference.",
        "Language": "English, French",
        "Country": "USA",
        "Awards": "3 wins & 9 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjExOTQ4MDMyMV5BMl5BanBnXkFtZTgwMTE3NDM2MzE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "51%"
            },
            {
                "Source": "Metacritic",
                "Value": "55/100"
            }
        ],
        "Metascore": "55",
        "imdbRating": "6.6",
        "imdbVotes": "92,838",
        "imdbID": "tt2224026",
        "Type": "movie",
        "DVD": "24 Nov 2015",
        "BoxOffice": "$177,397,510",
        "Production": "DreamWorks Animation",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Home Alone",
        "Year": "1990",
        "Rated": "PG",
        "Released": "16 Nov 1990",
        "Runtime": "103 min",
        "Genre": "Comedy, Family",
        "Director": "Chris Columbus",
        "Writer": "John Hughes",
        "Actors": "Macaulay Culkin, Joe Pesci, Daniel Stern, John Heard",
        "Plot": "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 2 Oscars. Another 11 wins & 4 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "67%"
            },
            {
                "Source": "Metacritic",
                "Value": "63/100"
            }
        ],
        "Metascore": "63",
        "imdbRating": "7.6",
        "imdbVotes": "494,710",
        "imdbID": "tt0099785",
        "Type": "movie",
        "DVD": "25 Nov 2015",
        "BoxOffice": "$285,761,243",
        "Production": "20th Century Fox, Hughes Entertainment",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Shrek",
        "Year": "2001",
        "Rated": "PG",
        "Released": "18 May 2001",
        "Runtime": "90 min",
        "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
        "Director": "Andrew Adamson, Vicky Jenson",
        "Writer": "William Steig (based upon the book by), Ted Elliott, Terry Rossio, Joe Stillman, Roger S.H. Schulman, Cody Cameron (additional dialogue), Chris Miller (additional dialogue), Conrad Vernon (additional dialogue)",
        "Actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
        "Plot": "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
        "Language": "English",
        "Country": "USA, Japan",
        "Awards": "Won 1 Oscar. Another 39 wins & 60 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "7.8/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "7.8",
        "imdbVotes": "620,107",
        "imdbID": "tt0126029",
        "Type": "movie",
        "DVD": "25 Nov 2015",
        "BoxOffice": "$267,665,011",
        "Production": "DreamWorks SKG, Pacific Data Images (PDI)",
        "Website": "N/A",
        "Response": "True"
    }
]

export { moviesAPI }