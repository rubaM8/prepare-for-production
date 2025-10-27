//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for the navigation menu and the initial loading of the project.
//These are all the functions that render the pages
//DO NOT CHANGE ANYTHING IN THIS FILE//
// Our application contains flashcard study sets.
// This file is responsible for loading the page that
// displays the collection of sets.
// Users can click on a set to view and interact with the flashcards.
// Loads data for card sets
const $0304e7cffe532d7e$export$c671026f67f93278 = [
    {
        id: 1,
        title: "Web Dev Flash Cards",
        cards: [
            {
                term: "HTML",
                description: "HyperText Markup Language"
            },
            {
                term: "CSS",
                description: "Cascading Style Sheets "
            },
            {
                term: "element",
                description: "HTML Tags that make up the HTML documents. <h1>, <div>, <p>"
            },
            {
                term: "Attribute",
                description: "Properties that are added to an HTML element. src, href, id, class"
            },
            {
                term: "<h1>",
                description: "Headline tag, the largest and most important."
            },
            {
                term: "<a>",
                description: "Anchor Tag used for hyperlinks"
            },
            {
                term: "class",
                description: "html attribute used on to identify multiple elements. Is used as a selector for styles and JavaScript"
            },
            {
                term: "selector",
                description: "Used to select elements on a page, can be elements using the tag name, id using a # or class using a . "
            },
            {
                term: "Box Model",
                description: "Layout tool with margin, padding and borders"
            }
        ]
    },
    {
        id: 2,
        title: "Cloud Certification Flash Cards",
        cards: [
            {
                term: "Continuous Integration",
                description: "Automated build tests run during merge"
            },
            {
                term: "Microservices",
                description: "Small single purpose services"
            }
        ]
    },
    {
        id: 3,
        title: "React",
        cards: [
            {
                term: "Components",
                description: "Reusable module pieces of UI, Java Script functions."
            },
            {
                term: "Props",
                description: "Arguments passed to components that can hold data and functions"
            },
            {
                term: "useState",
                description: "A react hook used to update react state"
            },
            {
                term: "State",
                description: "Object that stores properties for the component"
            },
            {
                term: "useEffect",
                description: "React hook used to perform side effects, such as fetching data"
            },
            {
                term: "dependency array",
                description: "Array passed to useEffect to track values"
            }
        ]
    },
    {
        id: 4,
        title: "Python",
        cards: [
            {
                term: "List",
                description: "Data-structure that stores a collection of values in sequential order, are mutable"
            },
            {
                term: "Tuple",
                description: "Immutable Data-structure that stores a collection of values in sequential order "
            },
            {
                term: "Sets",
                description: "Mutable but only store immutable objects, collection of values non-sequential"
            },
            {
                term: "String",
                description: "Text data-type"
            },
            {
                term: "Logic Operators",
                description: "Used in if, else and else if, conditional statements"
            }
        ]
    }
];


//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for rendering the full flashcard set,
// with buttons to navigate between cards, a form to create new cards,
// and a button to shuffle the cards.
// This function is responsible for generating the form used to create a new card.
//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for the form that creates a new flashcard.
// This function is responsible for rendering a flashcard.
// It will be called upon form submission to render the newly created card.

//DO NOT CHANGE ANYTHING IN THIS FILE//
//This file is responsible for creating errors for our form
const $5b09ec562d45e2e8$export$3879b24e8245693d = (message)=>{
    const form = document.querySelector("form");
    const existingError = document.querySelector(".error");
    if (!existingError) {
        const error = document.createElement("p");
        error.textContent = message;
        error.style.color = "red";
        error.className = "error";
        form.appendChild(error);
    } else if (existingError.textContent !== message) existingError.textContent = message;
};


//TODO
//Note: You will not be able to run parcel without first fixing these errors
// Check for ESLint errors and format with Prettier.
// This file contains a number of helper functions that create DOM elements.
// These functions help prevent code repetition.
// While the functions are mostly correct, there are some errors, the code is messy and hard to read.
// Add configuration with ESLint for rules that disallow 'var', unused variables, require a semicolon
// and at least two other rules: https://eslint.org/docs/latest/rules/
// Use ESLint to identify the errors and Prettier to format the code.
// Create a general element with specified text
const $69f2203d503221f4$export$c8a8987d4410bf2d = (elementType, text)=>{
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
};
// Creates images with alt
const $69f2203d503221f4$export$ec664d7487540b = (url, alt)=>{
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    return img;
};
// Create a header element with specified text and data attribute
const $69f2203d503221f4$export$798e69447a57ffe5 = (headerType, text, dataCy)=>{
    const header = document.createElement(headerType);
    header.textContent = text;
    if (dataCy) header.setAttribute("data-cy", dataCy);
    return header;
};
// Create a button that toggles the visibility of the form
const $69f2203d503221f4$export$934057542c6ca351 = (text, element)=>{
    const button = document.createElement("button");
    button.textContent = text;
    if (element) button.addEventListener("click", ()=>{
        element.classList.toggle("notVisible");
    });
    return button;
};
// Form Helper Functions
const $69f2203d503221f4$export$f2839682b8c07f35 = (text, htmlFor)=>{
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", htmlFor);
    return label;
};
const $69f2203d503221f4$export$d80fffb1deb3b97e = (name)=>{
    const input = document.createElement("input");
    input.name = name;
    input.id = name;
    return input;
};
const $69f2203d503221f4$export$96449729d5b90cea = (value)=>{
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = value;
    return submit;
};


// This function will generate the create card form
const $9dddf2878bdff262$export$26b43a65ed9aa70e = (set)=>{
    // Create a header for the form
    const h3 = (0, $69f2203d503221f4$export$798e69447a57ffe5)("h3", "Create Cards", "create_cards");
    // Creates form element
    const cardForm = document.createElement("form");
    // Sets an attribute that will be used to select the form during testing
    cardForm.setAttribute("data-cy", "card_form");
    // Creates a label for the Term input
    const termLabel = (0, $69f2203d503221f4$export$f2839682b8c07f35)("Term", "termInput");
    // Creates input for the term
    const termInput = (0, $69f2203d503221f4$export$d80fffb1deb3b97e)("termInput");
    // Creates label for description
    const descriptionLabel = (0, $69f2203d503221f4$export$f2839682b8c07f35)("Description", "descriptionInput");
    // Creates input for description
    const descriptionInput = (0, $69f2203d503221f4$export$d80fffb1deb3b97e)("descriptionInput");
    //Creates submit input
    const addCardBtn = (0, $69f2203d503221f4$export$96449729d5b90cea)("Add Card");
    // Handle form submission ane errors
    cardForm.addEventListener("submit", (e)=>{
        // Prevents forms default behavior
        e.preventDefault();
        // Gets the input values from term and description
        const term = e.target.termInput.value;
        const description = e.target.descriptionInput.value;
        // Handles error if user enters an empty string in any of the inputs
        if (!term && !description) (0, $5b09ec562d45e2e8$export$3879b24e8245693d)("TERM AND DESCRIPTION CANNOT BE EMPTY");
        else if (!term) (0, $5b09ec562d45e2e8$export$3879b24e8245693d)("TERM CANNOT BE EMPTY");
        else if (!description) (0, $5b09ec562d45e2e8$export$3879b24e8245693d)("DESCRIPTION CANNOT BE EMPTY");
        else $9dddf2878bdff262$var$addCard(term, description, set);
    });
    // Append form elements to the form
    cardForm.append(termLabel, termInput, descriptionLabel, descriptionInput, addCardBtn);
    // Creates a container for the form elements and header
    const container = document.createElement("div");
    container.append(h3, cardForm);
    return container;
};
// Function to add a new card to the data set
const $9dddf2878bdff262$var$addCard = (term, description, set)=>{
    set.push({
        term: term,
        description: description
    });
    (0, $b965b0608c5156e9$export$f58269ac8b729db4)(set, set.length - 1); // Render the new card
};


//TODO
//Note: You will not be able to run parcel without first fixing these errors
//Note: Complete TODO in utilityRenderFunctions.js first.
// Check for ESLint errors and format with Prettier.
// This function is responsible for shuffling the flashcards.
// While the function is mostly correct, there are some errors.
// Use ESLint to identify the errors and Prettier to format the code.
const $d320a97df0ffcbc4$export$448332262467e042 = (cards)=>{
    let current = cards.length;
    const newCardsArray = [
        ...cards
    ];
    while(current !== 0){
        const randomIndex = Math.floor(Math.random() * current);
        current--;
        [newCardsArray[current], newCardsArray[randomIndex]] = [
            newCardsArray[randomIndex],
            newCardsArray[current]
        ];
    }
    return newCardsArray;
};



// The flash cards have two sides
// This generates one side of a flashcard card
const $b965b0608c5156e9$export$f3ba7e44516b087c = (text, className)=>{
    // Creates a container element for the card
    const div = document.createElement("div");
    // Creates the paragraph that will hold the text content
    const p = document.createElement("p");
    p.textContent = text;
    div.className = className;
    //Appends the content to the container
    div.append(p);
    return div;
};
// This generates the flashcard elements
// Takes a card as an argument
const $b965b0608c5156e9$export$16ef63051e9ab791 = (card)=>{
    // Creates the Term side
    const termSide = $b965b0608c5156e9$export$f3ba7e44516b087c(card.term, "term");
    // Creates the description side
    const descriptionSide = $b965b0608c5156e9$export$f3ba7e44516b087c(card.description, "description");
    // Creates an inner card that will help with the Flash Card animation
    const innerCard = document.createElement("div");
    innerCard.className = "innerCard";
    innerCard.append(termSide, descriptionSide);
    // Creates a container for the card
    const cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    cardContainer.append(innerCard);
    return cardContainer;
};
// Renders the flashcards to the DOM one card at a time
// Includes next and previous buttons.
// Takes a study set and a current index as arguments
const $b965b0608c5156e9$export$f58269ac8b729db4 = (set, index = 0)=>{
    // Clear the main content area
    const main = document.querySelector("main");
    main.innerHTML = "";
    // Creates a container for the page
    const container = document.createElement("div");
    container.className = "cardPageContainer";
    // If we are not at the end of the study set
    // Create the flash card at the current index
    if (set.length !== 0) {
        const currentCard = $b965b0608c5156e9$export$16ef63051e9ab791(set[index]);
        // creates Previous button
        const previousBtn = $b965b0608c5156e9$var$createNavigationButton("Previous", ()=>{
            // If the current index is 0, set the index to the last item in the set.
            // Allows us to loop to the end of the set
            index = index > 0 ? index - 1 : set.length - 1;
            $b965b0608c5156e9$export$f58269ac8b729db4(set, index);
        });
        //Creates next button
        const nextBtn = $b965b0608c5156e9$var$createNavigationButton("Next", ()=>{
            // If the current index is at the last item in the set, set the index to 0.
            // Allows us to loop to the start of the set
            index = index < set.length - 1 ? index + 1 : 0;
            $b965b0608c5156e9$export$f58269ac8b729db4(set, index);
        });
        //Creates a container for out buttons
        const nextAndPrevBtn = document.createElement("div");
        nextAndPrevBtn.append(previousBtn, nextBtn);
        nextAndPrevBtn.className = "nextAndPrevBtnContainer";
        //Appends card and buttons to the page container
        container.append(currentCard, nextAndPrevBtn);
    }
    // Generates from for creating cards
    const form = (0, $9dddf2878bdff262$export$26b43a65ed9aa70e)(set);
    // Sets form to be invisible
    form.className = "notVisible";
    // Creates button for toggling the form
    const addCardBtn = (0, $69f2203d503221f4$export$934057542c6ca351)("Add New Card", form);
    addCardBtn.setAttribute("data-cy", "toggle_form");
    // Creates button for shuffling the cards
    const shuffleBtn = document.createElement("button");
    shuffleBtn.textContent = "Shuffle Cards";
    // Adds an event listener to the shuffle button.
    // On click, the flashcards will be shuffled.
    shuffleBtn.addEventListener("click", ()=>$b965b0608c5156e9$var$shuffleCards(set));
    // Appends cards form and shuffle button to the page containers
    container.append(shuffleBtn, addCardBtn, form);
    // Appends the container to the dom
    main.append(container);
};
// Creates a navigation button
const $b965b0608c5156e9$var$createNavigationButton = (text, onClick)=>{
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    return btn;
};
const $b965b0608c5156e9$var$shuffleCards = (set)=>{
    const shuffledCards = (0, $d320a97df0ffcbc4$export$448332262467e042)(set);
    $b965b0608c5156e9$export$f58269ac8b729db4(shuffledCards);
};


//DO NOT CHANGE ANYTHING IN THIS FILE//
//// This file is responsible for generating the form used to create a new study set.
// This function will be used to render the new study set on submit



// This function generates the form for creating new study sets
const $7b1c4e8f2a87accd$export$9cbc389274db4075 = (setCards)=>{
    // Generates the new form element
    const form = document.createElement("form");
    // Sets an attribute that will be used to select the form during testing
    form.setAttribute("data-cy", "set_form");
    // Sets the form to invisible
    form.className = "notVisible";
    //Creates the label for the title input
    const label = (0, $69f2203d503221f4$export$f2839682b8c07f35)("Card Set Title", "titleInput");
    // Creates the input fot the title
    const input = (0, $69f2203d503221f4$export$d80fffb1deb3b97e)("titleInput");
    const submitButton = (0, $69f2203d503221f4$export$96449729d5b90cea)("Submit Set");
    // Adds an event listener to the form.
    // On submission, a new study set will be created.
    form.addEventListener("submit", (e)=>$7b1c4e8f2a87accd$var$submitSet(e, setCards));
    //Adds elements to the form
    form.append(label, input, submitButton);
    return form;
};
// This function creates a new study set.
// It assigns a title to the set and initializes an empty array for cards,
// which can be added later on the flashcards page.
const $7b1c4e8f2a87accd$var$submitSet = (e, setCards)=>{
    // Prevents default form behavior and screen refresh
    e.preventDefault();
    //Get value form title input
    const title = e.target.titleInput.value;
    // Errors if user entered an empty string
    if (!title) (0, $5b09ec562d45e2e8$export$3879b24e8245693d)("TITLE CANNOT BE EMPTY");
    else {
        //Creates set object
        const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
        //Adds set data
        setCards.push({
            id: id,
            title: title,
            cards: []
        });
        //Adds new card set to DOM
        (0, $2cb511643212099d$export$b98638c281c2c630)();
    }
};



const $2cb511643212099d$export$b98638c281c2c630 = ()=>{
    // Creates a container for the pages contents
    const container = document.createElement("div");
    container.className = "cardPageContainer";
    // Creates the header for the page
    const pageHeader = (0, $69f2203d503221f4$export$798e69447a57ffe5)("h2", "Study Set Library", "study-set-header");
    // Function creates the element representing the study card set
    const sets = $2cb511643212099d$var$createCardSets();
    // Function responsible for creating the form to create a new study set.
    const form = (0, $7b1c4e8f2a87accd$export$9cbc389274db4075)((0, $0304e7cffe532d7e$export$c671026f67f93278));
    // Sets the form to be invisible
    //Creates a button that will toggle the forms visibility
    const toggleFormButton = (0, $69f2203d503221f4$export$934057542c6ca351)("Add New Set", form);
    // Attribute used for selecting the forms during Cypress tests.
    toggleFormButton.setAttribute("data-cy", "toggle_form");
    //Appends all the content to the pages container
    container.append(pageHeader, sets, toggleFormButton, form);
    //Gets the main section of the dom
    const main = document.querySelector("main");
    // Clears the main section of any existing content.
    main.innerHTML = "";
    //Appends content to the DOM
    main.append(container);
};
// Render the study set preview card
// Includes the study sets title and number of terms
// Takes the current study set and the sets container as arguments
const $2cb511643212099d$var$createSetPreviewCard = (set, setContainer)=>{
    // Container for study set
    const setCard = document.createElement("ul");
    setCard.className = "cardSets";
    // Dynamic attribute used to select a study set during testing.
    setCard.setAttribute("data-cy", set.id);
    // Creates the Study Sets Title element
    const liTitle = document.createElement("li");
    liTitle.textContent = set.title;
    // Creates the Study Sets Number of Terms element
    const liNumberOfTerms = document.createElement("li");
    liNumberOfTerms.textContent = `Terms: ${set.cards.length}`;
    // Adds an event listener to the study set.
    // On click, the current page will clear, and the full study set will be rendered.
    setCard.addEventListener("click", ()=>{
        document.querySelector("main").innerHTML = "";
        (0, $b965b0608c5156e9$export$f58269ac8b729db4)(set.cards);
    });
    // Appends elements to the set preview
    setCard.append(liTitle, liNumberOfTerms);
    // Appends the preview to the container
    setContainer.append(setCard);
};
// Iterates through the study sets and dynamically creates their DOM elements.
const $2cb511643212099d$var$createCardSets = ()=>{
    // Creates a container for the sets
    const setContainer = document.createElement("ul");
    setContainer.className = "setContainer";
    // Iterates though the sets and creates their dom elements dynamically
    (0, $0304e7cffe532d7e$export$c671026f67f93278).forEach((set)=>$2cb511643212099d$var$createSetPreviewCard(set, setContainer));
    return setContainer;
};


//DO NOT CHANGE ANYTHING IN THIS FILE//
//This file is responsible for rendering the About page,
//including loading any content about the application and organization.
//This imports helper functions
//This imports the image
//changing the import way to work with parcel, since this one doesn't
//import aboutPageImage from "../images/aboutImage.png";

const $ef50c7e2c6334f48$var$aboutPageImage = new URL("aboutImage.15f68e2e.png", import.meta.url).href;
const $ef50c7e2c6334f48$export$967e639dc382139b = ()=>{
    // Clear the main content area
    const main = document.querySelector("main");
    main.innerHTML = "";
    // Create the outer container for the about section
    const containerOuter = document.createElement("div");
    containerOuter.className = "aboutContainer";
    // Create the text container for the heading, subheading, and paragraph
    const textContainer = document.createElement("div");
    textContainer.className = "textContainer";
    // Create and set up the heading
    const heading = (0, $69f2203d503221f4$export$798e69447a57ffe5)("h2", "About Study Night", "about_page");
    // Create and set up the subheading
    const subHeading = (0, $69f2203d503221f4$export$c8a8987d4410bf2d)("h3", "Flash Cards Anywhere Anytime");
    // Create and set up the paragraph
    let text = "Whether you're studying at night or during the day, Study Night's flashcard application is designed to help you grow your skills in any subject. Whether you're preparing for an exam or learning a new language, Study Night makes it easy to create flashcard sets that are available anytime, anywhere.\n\nStudy Night was created by experienced educators and developers who are passionate about helping students achieve their goals and making learning more accessible.";
    const aboutP = (0, $69f2203d503221f4$export$c8a8987d4410bf2d)("p", text);
    // Create and set up the image
    const aboutImage = (0, $69f2203d503221f4$export$ec664d7487540b)($ef50c7e2c6334f48$var$aboutPageImage, "Child Studying");
    // Append the text elements to the text container
    textContainer.append(heading, subHeading, aboutP);
    // Append the text container and image to the outer container
    containerOuter.append(textContainer, aboutImage);
    // Append the outer container to the main content area
    main.append(containerOuter);
};


//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page
//Imports image for homepage
//changing the import way to work with parcel, since this one doesn't
//import homePageImage from "../images/homePage.png";

const $e7707c6f809fa483$var$homePageImage = new URL("homePage.1f74a7b8.png", import.meta.url).href;
//Renders home page
const $e7707c6f809fa483$export$29b010004a948d8 = ()=>{
    //Gets main element
    const main = document.querySelector("main");
    main.innerHTML = "";
    //Creates header element
    const header = (0, $69f2203d503221f4$export$798e69447a57ffe5)("h1", "Study Night", "home_header");
    //Creates subheader element
    const subHeading = (0, $69f2203d503221f4$export$c8a8987d4410bf2d)("h2", "A Digital Study Solution for the Modern World");
    //Creates elements
    const image = (0, $69f2203d503221f4$export$ec664d7487540b)($e7707c6f809fa483$var$homePageImage, "Desk of laptops");
    //Container for elements
    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";
    homeContainer.append(header, subHeading, image);
    main.append(homeContainer);
};


// Navigation logic
const $cf838c15c8b009ba$var$addListenerToNavigation = ()=>{
    $cf838c15c8b009ba$var$addNavListener("cardSetPage", (0, $2cb511643212099d$export$b98638c281c2c630));
    $cf838c15c8b009ba$var$addNavListener("aboutPage", (0, $ef50c7e2c6334f48$export$967e639dc382139b));
    $cf838c15c8b009ba$var$addNavListener("homePage", (0, $e7707c6f809fa483$export$29b010004a948d8));
};
// Helper function to add event listeners to navigation items
const $cf838c15c8b009ba$var$addNavListener = (elementId, callback)=>{
    const element = document.getElementById(elementId);
    if (element) element.addEventListener("click", callback);
};
// Initialize the page
// Load the home page
(0, $e7707c6f809fa483$export$29b010004a948d8)();
// Add event listeners to navigation items
$cf838c15c8b009ba$var$addListenerToNavigation();


//# sourceMappingURL=main.js.map
