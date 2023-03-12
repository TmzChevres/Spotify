//get url parameters
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

//redirect to login on error
if (searchParams.get("error") == "access_denied") {
    console.log("Error: access_denied")
    window.location = "index.html"
}


const token = searchParams.get("access_token");

//return the user's top artists,default: time_range="medium-term" limit=10
//https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
function getTopArtists(time_range, limit) {
    const endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=${time_range}&limit=${limit}`; // replace with desired parameters
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return fetch(endpoint, options)
        .then(response => response.json())
        .then(data => data.items)
        .catch(error => console.error(error));
}

console.log(token);
getTopArtists("medium_term", 10)
  .then(data => console.log(data))
  .catch(error => console.error(error));