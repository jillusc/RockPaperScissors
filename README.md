# ROCKPAPERSCISSORS!

This page displays a classic game that is normally played by people using gestures with their hands. Rock, Paper, Scissors is typically used as a way to determine possession of some kind and the decision-making aspect is presented via an easy and very fair concept of play. This page enables users to play against an "unseen opponent" as the computer generates a random response to the player's choice. The game operates on a "first-to-score-5" basis.

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/main%20page%20screenshot 576px.png">

The page can be viewed here: <a href="https://jillusc.github.io/RockPaperScissors">ROCKPAPERSCISSORS!</a>


## Functionality

Players select an item from rock, paper and scissors by clicking a corresponding button.<br>
In the gaming area, the two halves are reserved for the player's and the computer's choices; they have image-container div's which by default are displaying "blank" placeholder images.<br>
When the player clicks a button, this triggers the computer to generate a random choice. The image is then displayed alongside the player's.<br>
The winner is determined and points are incremented accordingly. In the case of a tie, no points are awarded.<br>
When either opponent's score reaches 5, the game ends with an alert that the user can then click in order to restart the game.<br>

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/sample%20image.png">


## Features

* the colour scheme employs a neutral grey background with highly contrasting, juicy colours for the gaming area features, intended to draw the eye and encourage the user's desire to interact
  
* the font is imported to the css from Google Fonts and is called Sigmar: it is soft and chunky with an air of fun without being necessarily childlike

* the title is written in block capital letters without spaces and has an exclamation mark at the end - this is to reinforce the idea that this game is customarily fast whilst players say out loud the words, "Rock, paper, scissors" before immediately revealing their choice in a quick motion; any decision for which the game was the tool is reached in a very short time:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/heading.png">

* the logo image was created using Photoshop and features a juxtaposition of the three images for each item that are used in the game; these are photographic and therefore present an interesting visual when, possibly, a graphic is expected. This, again, is intentionally avoidant of childlike associations whilst simultaneously also not being a barrier to players that are children:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/logo.webp">

* the player buttons were also created using Photoshop and utilise the same images; they are round buttons to support the presentation of chunky visuals and a fun vibe:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/btn-rock.webp" width="100px" height="100px">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/btn-paper.webp" width="100px" height="100px">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/btn-scissors.webp" width="100px" height="100px">

* the borders of the gaming areas are white and all corners are rounded for a cartoon-like aesthetic and visual appeal

* for simplicity, the header does not utilise a band of colour across the top of the page as per convention, allowing the emphasis to fall on the colourful gaming area

* the footer is a simple band, by contrast, to signify the bounds of the viewing area

* the favicon was created using Photoshop: it complies with the overall theme by being simple, round like a button and comprised of the main three colours:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/RPS-favicon.webp">

* text is used sparingly to emphasise the role of the page - that is, with which to simply play an image-based game

* all images have aria-labels for good practice with regards to accessibility

* the game is designed to be played in landscape format on mobile phones (576px) and has been fine-tuned to screen widths of 601, 768, 992 and 1280px

<img src="https://github.com/jillusc/RockPaperScissors/blob/main/amiresponsive%20screenshot.png">

## Features to implement

* an option to view the rules might be useful in the case of users not being already familiar

* Rock, Paper, Scissors has versions whereby four and five choices are available: the option to progress to a new "level" could be a positive development

* sounds that accompany the appearance of the images on the screen would be a nice addition, e.g. a "thud!" for when the rock pops up


## Testing

* the page was inspected using Chrome's devtools

* JSHint was used to check the JavaScript

* the page's html and css passed validated tests using W3C online tools:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/html%20validator%20pass.png">
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/css%20validator%20pass.png">

* troubleshooting was aided by ChatGPT

* the page was viewed in Chrome, Firefox, Edge, Safari and Samsung Internet browsers

* using Lighthouse, the page's accessibility scored 100:
<img src="https://github.com/jillusc/RockPaperScissors/blob/main/lighthouse%20pass.png">



## Known bugs

* the game presented an error in Safari whereby when the player reached the max score of 5, the game did not end at this point


## Deployment

The site is deployed to Github by the following process:

* click Settings
* select Pages in the pane on the left
* source is set to 'Deploy from a branch' and the main branch is selected with the folder set to / (root)
* click Save

The live link can be found here: <a href="https://jillusc.github.io/RockPaperScissors">ROCKPAPERSCISSORS!</a>


## Credits

Code credits:
The site https://www.w3schools.com/ was used as an additional resource.

Image credits:
The images used in the site were found on free images websites as detailed below:

* rock - <https://clipart-library.com/clip-art/rock-clipart-transparent-20.htm>
* paper - <https://www.pngwing.com/en/free-png-icbtr>
* scissors - <https://clipart-library.com/clipart/883558.htm>

The images were converted to .webp files using the online tool Convertio.


## Acknowledgements

Thanks to Rahul Lakhanpal for his support.
