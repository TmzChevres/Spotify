//get url parameters
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

//redirect to login on error
if (searchParams.get("error") == "access_denied") {
    console.log("Error: access_denied")
    window.location = "index.html"
}

//request app token
$.get("https://peddiecs.peddie.org/live/Spotify/nodejs/requestToken", {
}, function (res) {
    console.log(res);
});