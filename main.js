// Define an array of staff members
const staffMembers = [
    {
      name: "Wayne Barnett",
      position: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      position: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      position: "Office Manager",
      image: "walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      position: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      position: "Developer",
      image: "scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      position: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg"
    }
];
  
  // Get a reference to the container element
  const container = document.getElementById("container");
  
  // Loop over the staffMembers array and generate a div for each member
  for (let i = 0; i < staffMembers.length; i++) {
    // Create a new div element
    const staffCard = document.createElement("div");
  
    // Add the staffCard class to the new div
    staffCard.classList.add("staffCard");
  
    // Set the innerHTML of the new div to include the staff member's name, position, and photo URL
    staffCard.innerHTML = `
      <img src="img/${staffMembers[i].image}" alt="${staffMembers[i].name}">
      <h4>${staffMembers[i].name}</h4>
      <p>${staffMembers[i].position}</p>
    `;
  
    // Append the new div to the container element
    container.appendChild(staffCard);
};
  
  
  
