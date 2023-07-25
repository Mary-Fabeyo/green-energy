// Load  images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}

window.addEventListener("load", preloader);

// Complete resource-object that will store the dynamic content
const resource = {
    solution1: {
        headingContent: "Government Subsidies and Incentives",
        bodyText: " Governments can play a significant role in promoting green energy adoption by offering subsidies and incentives to individuals and businesses. These could include tax credits for installing solar panels or other renewable energy systems, grants for energy-efficient home improvements, and reduced interest rates for green energy loans. By making green technologies more financially attractive, these initiatives can help offset the initial costs and encourage more people to invest in sustainable energy solutions.",
        imgUrl: "./img/money.png",
        imgAlt: "Solution 1 Image"
    },
    solution2: {
        headingContent: "Community-Based Renewable Energy Projects",
        bodyText: "Creating community-based renewable energy projects can help distribute the costs and benefits among a larger group of people, making it more affordable for individuals with average budgets. These projects might involve setting up solar or wind farms collectively, with the generated energy shared among the participants. By pooling resources and leveraging economies of scale, the overall costs can be reduced, and community members can access green energy at more affordable rates.",
        imgUrl: "./img/solar.png",
        imgAlt: "Solution 2 Image"
    },
    solution3: {
        headingContent: "Energy Efficiency Programs -Efficient Savings",
        bodyText: "Improving energy efficiency is a crucial aspect of reducing overall energy consumption and making renewable energy more accessible. Governments and utility companies can run energy efficiency programs that offer incentives and rebates for energy-saving appliances, insulation upgrades, and other energy-efficient home improvements. By using less energy, individuals can potentially lower their utility bills and have more financial capacity to invest in renewable energy solutions. Additionally, educating the public about the long-term benefits of green energy and its potential to save money over time can encourage more people to make the switch. Financial institutions could also offer specialized loans with favorable terms for green energy projects to further support the affordability of these initiatives for those with average budgets.",
        imgUrl: "./img/moneybox.png",
        imgAlt: "Solution 3 Image"
    }
};

// Get the reference toHTML-container
const contentContainer = document.getElementById("content-container");

// The first button in a NODE LIST of buttons will initially have the id: active-button
// This will uniquely style the active button (CSS rule).
const buttons = document.querySelectorAll(".buttons .button-image");
buttons[0].classList.add("active");

// Load the first content on page load
contentContainer.innerHTML = `<h1>${resource.solution1.headingContent}</h1>
                               <img src="${resource.solution1.imgUrl}" alt="${resource.solution1.imgAlt}">
                  <p>${resource.solution1.bodyText}</p>`;


// Load the first content on page load
//contentContainer.innerHTML =    `<h1>${headingContent}</h1>
                            //    <img src="${imgUrl}" alt="${imgAlt}">
                             //   <p>${bodyText}</p>`;

// Function to move the active line
function moveActiveLine(buttonNumber) {
    const activeLine = document.querySelector(".active-line");
    const buttonWidth = buttons[buttonNumber - 1].offsetWidth;
    const buttonOffsetLeft = buttons[buttonNumber - 1].offsetLeft;
    activeLine.style.width = buttonWidth + "px";
    activeLine.style.transform = `translateX(${buttonOffsetLeft}px)`;
}

// Start your handleSelection function here.
function handleButtonClick(buttonNumber) {
    // Remove the active class from all buttons
    for (const button of buttons) {
        button.classList.remove("active");
    }

    // Add the active class to the clicked button
    buttons[buttonNumber - 1].classList.add("active");

    // Move the active line to the clicked button
    moveActiveLine(buttonNumber);

    // Get the selected content based on the button number
    let selectedContent;
    if (buttonNumber === 1) {
        selectedContent = resource.solution1;
    } else if (buttonNumber === 2) {
        selectedContent = resource.solution2;
    } else if (buttonNumber === 3) {
        selectedContent = resource.solution3;
    }

    // Assign this content to your HTML-container that will be dynamically loaded.
    contentContainer.innerHTML = `<h1>${selectedContent.headingContent}</h1>
                                   <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
                                   <p>${selectedContent.bodyText}</p>`;
}

// Register all buttons to click event. The event-handler handleButtonClick will listen for this event to happen.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        handleButtonClick(i + 1);
    });
}