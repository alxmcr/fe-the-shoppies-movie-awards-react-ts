
![Logo](https://user-images.githubusercontent.com/8689897/116800025-58cf5d80-aacb-11eb-9ad1-fb98162796ac.png)

# The Shoppies

Movie awards for entrepreneurs.


## Features

- Search OMDB and display the results (movies only).
- Add a movie from the search results to our nomination list.
- View the list of films already nominated.
- Remove a nominee from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.
- Save nomination lists if the user leaves the page (in LocalStorage).

  
## Documentation

[Documentation by Shopify](https://docs.google.com/document/d/1SdR9rQpocsH5rPTOcxr9noqHRld5NJlylKO9Hf94U8U/edit#heading=h.31w9woubunro)

  
## Lessons Learned

- Use React Hooks like `useState`, `useEffect`, `useReducer`, and `useContext`.
- `useReducer`: I should use this hook when you have complex state logic and how to use dispatch function.
- Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.

What did you learn while building this project? What challenges did you face and how did you overcome them?

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/the-shoppies-movie-awards.git
```

Go to the project directory

```bash
  cd the-shoppies-movie-awards
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

You should put as value the API KEY that you got from [OMDB's API](https://www.omdbapi.com/apikey.aspx).

  
## Tech Stack

**Client:** HTML, CSS, JavaScript, React, React Hooks, and Font Awesome.

**Server:** Node

  
## Screenshots

![image](https://user-images.githubusercontent.com/8689897/116796142-3546eb80-aaa8-11eb-9067-5bdb54ae6eee.png)

![image](https://user-images.githubusercontent.com/8689897/116800003-24f43800-aacb-11eb-850d-4cf9f2050d42.png)

  
## Demo

[https://the-shoppies-movie-awards-app.netlify.app/](https://the-shoppies-movie-awards-app.netlify.app/)

  
## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

  
## Feedback

If you have any feedback, please reach out to us at amcocarojas@gmail.com.

  