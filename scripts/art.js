async function populate() {
    const requestURL = 
      "https://worm-b0y16.github.io/scripts/artData.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    imageData = await response.json();
}
