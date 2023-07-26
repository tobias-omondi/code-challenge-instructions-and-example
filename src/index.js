function helloThere() {
  return "Hello there."
}

console.log(helloThere())
//get an argument by element id;

document.addEventListener('DOMContentLoaded', () => {
  const animalList = document.getElementById("animallist");
  const animalDetailsContainer = document.getElementById('animalDetails');
// Create HTML content for the animal detail
  // Function to display animal details when clicked
  function displayAnimalDetails(animal) {
    const detailsHTML = `
      <h3>${animal.name}</h3>
      <img src="${animal.image}" alt="${animal.name}" />
      <p>Votes: ${animal.votes}</p>
      <button onclick="voteForAnimal(${animal.id})">Vote</button>
    `;

    animalDetailsContainer.innerHTML = detailsHTML;
  }

  // Function to handle voting for an animal
  function voteForAnimal(animalId) {
    const animalDetails = document.getElementById('animalDetails');
    const voteCountElement = animalDetails.querySelector('p');
    const currentVotes = parseInt(voteCountElement.textContent.split(':')[1].trim());
    voteCountElement.textContent = `Votes: ${currentVotes + 1}`;

  }

  // Fetch data from the server and display the list of animal names
  fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
      data.forEach(animal => {
        let li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener('click', () => displayAnimalDetails(animal));
        animalList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching animals:', error);
    });
});



// Function to handle voting for an animal
function voteForAnimal(animalId) {

 
  const animalDetails = document.getElementById('animalDetails');
  const voteCountElement = animalDetails.querySelector('p');
  const currentVotes = parseInt(voteCountElement.textContent.split(':')[1].trim());

  // Update the vote count and display it on the page
  const newVotes = currentVotes + 1;
  voteCountElement.textContent = `Votes: ${newVotes}`;

  // Disable the Vote button 
  const voteButton = animalDetails.querySelector('button');
  voteButton.disabled = true;
}
// Create HTML content for the animal details
// Function to display animal details when clicked
function displayAnimalDetails(animal) {
  
  const detailsHTML = `
    <h3>${animal.name}</h3>
    <img src="${animal.image}" alt="${animal.name}" />
    <p>Votes: ${animal.votes}</p>
    <button onclick="voteForAnimal(${animal.id})" ${animal.voted ? 'disabled' : ''}>Vote</button>
  `;

  animalDetailsContainer.innerHTML = detailsHTML;
}

