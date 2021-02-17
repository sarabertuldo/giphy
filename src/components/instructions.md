# Classwork

We'll be creating a new application to implement the tools we have learned so far. We'll be utilizing the Giphy API so you'll need to sign up for a free key. The application should have the following

- Component to log in to the application. All other routes should be protected
- Once logged in, store the user into state management (right now let's just use a parent state and props)
- A search page that allows you to type in a search field and bring up gifs that match that query
- The ability to add favorites based off search results
- A favorites component that allows you to see your favorites

Now add pre-existing favorites for different users that are hard coded into the application. Once you do that, add the following functionality:

- Allow someone to go to: `/user/username` and based off the username, pull that user's favorites from the pre-built list.

Strip out any code to different files as needed and think about how you might (implement it if there is time) protect against any errors that might pop up.

## Order of Attack

1. Create a new application
2. Sign up for an API key through Giphy and look through the docs
   - verify you have an API key
   - test the API to ensure you understand it
   - Example URL: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=0&rating=${rating}&lang=en`
   - grab specific keys:

```javascript
let response = { data: [], meta: {}, pagination: {} };
let gifs = response.data.map((val) => {
  return { id: val.id, title: val.title, url: val.images.original.url };
});
// gif.id;
// gif.title;
// gif.images.original.url;
// setGifs(gifs);
```

3. Determine structure of the application
   - Components
     - Login
       - State - username, password
       - Props - NONE
     - Search
       - State - query, limit, rating, gifs (pieces of data user is entering in)
       - Props - username??
     - Favorites
       - State - favorites?
       - Props - username, favorites?
   - Gif Display (child component of Favorites and Search)
     - State - NONE
     - Props - Gif
4. Set-up folder structure
5. Create Default Component code and simple message
6. Set up routing and top-level components / HTML (menu, footer, etc)
7. Start buidling components
   1. Login
   2. Search
   3. GifDisplay
   4. Favorites
8. Clean up code and style

giphy key:
2BkANBTRPYGKHGFxk2I5cfkAYdDoendB
