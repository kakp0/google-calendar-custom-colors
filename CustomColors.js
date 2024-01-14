// Define the function to be executed
function processDivElements() {

// Get all elements with role "heading"
const headingElements = document.querySelectorAll('[role="heading"]');

// Define a regex pattern for hex color code
const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;

// Iterate through each heading element
headingElements.forEach(headingElement => {
    // Get the text content of the heading element
    const headingText = headingElement.textContent;

    // Find the first match of hex color code in the text content
    const match = headingText.match(hexColorRegex);

    // If a hex color code is found, remove it from the text content
    if (match) {
        const updatedText = headingText.replace(match[0], '');
        headingElement.textContent = updatedText.trim(); // Trim to remove leading/trailing spaces
    }
});





    // Get all div elements on the page
    var divElements = document.querySelectorAll('div');

    // Iterate through each div element
    divElements.forEach(function(div) {
        // Check if the div or its children contain a hex color code
        var hexColor = getHexColor(div);
        if (hexColor) {
            // Check if the div has the 'role' attribute set to "button"
            if (div.getAttribute('role') === 'button') {
                // Set the background color to the found hex color
                div.style.backgroundColor = hexColor;

                // Look for a child span with class "FAxxKc"
                var spanElement = div.querySelector('.FAxxKc');

                // Check if a matching span element is found
                if (spanElement) {
                    // Remove the hex color code from the span's content
                    spanElement.textContent = spanElement.textContent.replace(hexColor, '');
                }

                // Log something to the console
            }
        }
    });
}

// Function to get the first hex color code found in a div or its children
function getHexColor(element) {
    // Check the current element
    var match = element.textContent.match(/#[0-9A-Fa-f]{6}/);
    if (match) {
        return match[0];
    }

    // Check each child element
    for (var i = 0; i < element.children.length; i++) {
        var childHexColor = getHexColor(element.children[i]);
        if (childHexColor) {
            return childHexColor;
        }
    }

    // If no match is found, return null
    return null;
}


// Set up a MutationObserver to run the function on mutations
var observer = new MutationObserver(function(mutations) {
    // Run the function whenever there are mutations
    processDivElements();
});

// Configuration of the observer
var config = { subtree: true, childList: true, characterData: true };

// Start observing the entire document for configured mutations
observer.observe(document.body, config);
