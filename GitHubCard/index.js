/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

const testRequest = axios.get("https://api.github.com/users/pshushereba")
  .then((axiosData) => {
    // console.log("data", axiosData);
    userCards.appendChild(createCard(axiosData));
  })
  .catch((err) => {
    console.log("There was an error", err);
  });


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd","bigknell"];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(userObj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = userObj.data.avatar_url;
  cardDiv.appendChild(cardImg);

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');
    const nameHeader = document.createElement('h3');
    nameHeader.classList.add('name');
    nameHeader.textContent = userObj.data.name;
    infoDiv.appendChild(nameHeader);

    const pUsername = document.createElement('p');
    pUsername.classList.add('username');
    pUsername.textContent = userObj.data.login;
    infoDiv.appendChild(pUsername);
  
    const pLocation = document.createElement('p');
    pLocation.textContent = "Location: " + userObj.data.location;
    infoDiv.appendChild(pLocation);

    const pProfile = document.createElement('p');
    pProfile.textContent = "Profile: ";
      const profileLink = document.createElement('a');
      profileLink.href = userObj.data.html_url;
      profileLink.textContent = "View Profile";
    pProfile.appendChild(profileLink);
    infoDiv.appendChild(pProfile);

    pFollowers = document.createElement('p');
    pFollowers.textContent = "Followers: " + userObj.data.followers;
    infoDiv.appendChild(pFollowers);

    pFollowing = document.createElement('p');
    pFollowing.textContent = "Following: " + userObj.data.following;
    infoDiv.appendChild(pFollowing);

    pBio = document.createElement('p');
    pBio.textContent = "Bio: " + userObj.data.bio;
    infoDiv.appendChild(pBio);
  
  cardDiv.appendChild(infoDiv);


  return cardDiv
}

const userCards = document.querySelector('.cards');
// console.log(userCards);

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then((axiosData) => {
    // console.log("data", axiosData);
    userCards.appendChild(createCard(axiosData));
  })
  .catch((err) => {
    console.log("There was an error", err);
  });
});

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
