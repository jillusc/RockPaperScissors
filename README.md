# ROCKPAPERSCISSORS!

This page hosts a classic game that is normally played by people using gestures with their hands. Rock, Paper, Scissors is typically used as a way to determine possession of some kind and the decision-making aspect is presented via an easy and very fair concept of play. ROCKPAPERSCISSORS! enables users to play against an "unseen opponent" as the computer generates a random response to the player's choice. It is a fun and chance-based game; it makes no demands, requiring simply the user's interaction. And, designed for mobiles, it can be enjoyed in any situation on the go!

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/main%20page%20screenshot 576px.png">

The webpage can be viewed here: <a href="https://jillusc.github.io/RockPaperScissors">ROCKPAPERSCISSORS!</a>


## Functionality

Players select an item from rock, paper and scissors by clicking a corresponding button.<br>
In the gaming area, the two halves are reserved for the player's and the computer's choices; they have image-container div's which by default are displaying "blank" placeholder images.<br>
When the player clicks a button, this triggers the computer to generate a random choice and the image is then displayed alongside the player's.<br>
The winner is automatically determined and points are incremented accordingly. In the case of a tie, no points are awarded.<br>
It operates on a "first-to-score-5" basis: when either opponent's score reaches 5, the game ends with an alert that the user can then click in order to restart the game.<br>

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/sample%20image.png">


## Features

* the colour scheme employs a neutral grey background with highly contrasting, juicy colours for the gaming area features, intended to draw the eye and encourage the user's desire to interact
  
* the font is imported to the css from Google Fonts and is called Sigmar: it is soft and chunky with an air of fun without being necessarily childlike

* the title is written in block capital letters without spaces and has an exclamation mark at the end - this is to reinforce the idea that this game is customarily fast whilst players say out loud the words, "Rock, paper, scissors!" before immediately revealing their choice in a quick hand motion:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/heading.png">

* the logo image was created using Photoshop and features a juxtaposition of the three images for each item that are used in the game; these are photographic and therefore present an interesting visual when, possibly, a graphic is expected. This, again, is intentionally avoidant of childlike associations whilst simultaneously also not being a barrier to players that are children:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/logo.webp">

* the player buttons were also created using Photoshop and utilise the same images; they are round buttons to support the presentation of chunky visuals and a fun vibe:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/btn-rock.webp" width="100px" height="100px">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/btn-paper.webp" width="100px" height="100px">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/btn-scissors.webp" width="100px" height="100px">

* the borders of the gaming areas are white and all corners are rounded for a cartoon-like aesthetic and visual appeal

* for simplicity, the header does not utilise a band of colour across the top of the page as per convention, allowing the emphasis to fall on the colourful gaming area

* in contrast, the footer is a simple band that signifies the bounds of the viewing area. And within it, the text's contrast is reduced because it is not key information

* the favicon was created using Photoshop: it complies with the overall theme by being simple, round like a button and comprised of the main three colours:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/RPS-favicon.webp">

* text is used sparingly to emphasise the role of the page - that is, with which to simply play an image-based game

* the images have alt text and the buttons have aria-labels for good practice with regards to accessibility

* the game is designed to be played in landscape format on mobile phones (576px) and has been fine-tuned via media queries to screen widths of 601, 768, 992 and 1280px

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/amiresponsive%20screenshot.png">


## Features to implement

* a method by which the page loads on mobiles ONLY in landscape orientation might be beneficial as the game relies on a width aspect; alternatively, to reshape the playing area (and split the heading into 3 separate words) so that it can function in a vertical format

* an option to view the rules might be useful in the case of users not being already familiar

* inserting sounds to accompany the appearance of the images on the screen would be a nice addition, e.g. a "thud!" for when the rock appears


## Testing

* the page was inspected using Chrome's devtools

* JSHint was used to check the JavaScript

* the page's html and css passed validation tests using W3C online tools:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/html%20validator%20pass.png">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/assets/images/readme%20images/css%20validator%20pass.png">

* using Lighthouse, the page's accessibility scored 100:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/lighthouse%20pass.png">

* troubleshooting was aided by ChatGPT

* the page was viewed in Chrome, Firefox, Edge, Safari and Samsung Internet browsers


## Known bugs

* in the JavaScript, the maxScore is set at 5: in reality, the scores never display 5 because the game ends based on the number of wins counted. To counter this, the maxScore was set to 6. This did not resolve the issue because in Safari it works differently, and meant that the game continued after a score of 5 had displayed (and ended after 6 wins were counted). The maxScore was then reset to 5. So to add a fix whereby the game ends not until <em>after a score of 5 is displayed </em>would be ideal


## Deployment

The site is deployed to Github by the following process:

* click Settings
* select Pages in the pane on the left
* source is set to 'Deploy from a branch' and the main branch is selected with the folder set to / (root)
* click Save


The live link can be found here: <a href="https://jillusc.github.io/RockPaperScissors">ROCKPAPERSCISSORS!</a>


## Credits

Code credits:<BR>
The site <https://www.w3schools.com/> was used as an additional resource. The method of refreshing the page was found here and is used as the last instruction after the game ends.<BR>
All other JavaScript code was inspired by teaching materials provided by CodeInstitute before being modified.

Image credits:<BR>
The three images used in the site were found on free images websites as detailed below:

* rock - <https://clipart-library.com/clip-art/rock-clipart-transparent-20.htm>
* paper - <https://www.pngwing.com/en/free-png-icbtr>
* scissors - <https://clipart-library.com/clipart/883558.htm>

The images were converted to .webp files using the online tool Convertio.


## Acknowledgements

Thanks to Rahul Lakhanpal for his support.
