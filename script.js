//your JS code here. If required.
 function updateText() {
      // Get the <p> element by its id
      var statusParagraph = document.getElementById('status');

      // Create a new h1 element
      var h1Element = document.createElement('h1');
      
      // Set the text content of the h1 element
      h1Element.textContent = 'Entered Metaverse';

      // Replace the existing <p> element with the new h1 element
      statusParagraph.parentNode.replaceChild(h1Element, statusParagraph);
    }
