# Rock, Paper, Scissors, Lizard, Spock (RSPLS) Website


![RPSLS Website on different devices](assets/images/readme-images/rpsls-amiresponsive.png)

[View RPSLS on Github pages](https://github.com/Keszi94/rock-paper-scissors-lizard-spock)

- - -

## CONTENTS
 
* [User Experience](#user-experience-ux)
   * [User Stories](#user-stories)
 
 * [Design](#design)
   * [Colour Scheme](#colour-scheme)
   * [Typography](#typography)
   * [Imagery](#imagery)
   * [Wireframes](#wireframes)

   * [Features](#features)
   * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
   * [Languages Used](#languages-used)
   * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
   * [Deployment](#deployment)
   * [Local Development](#local-development)
   * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
   * [Code Used](#code-used)
   * [Content](#content)
   * [Media](#media)
   * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

## User Stories

#### First Time Visitor Goals

* 
* 
* 

#### Returning Visitor Goals

* 
* 


#### Frequent Visitor Goals

* 

- - - 

## Design 

### Color Scheme

![RPSLS Website Color Palette](assets/images/readme-images/rpsls-palette.png)

The website uses only two colors, black and white. The look of the website was inspired by 8bit games such as Underale and Deltarune. I have added a splash of color by using two small png images with red hearts in the body of the webpage.

The colour palette was created using the [Coolors](https://coolors.co/) website.

### Typography 

Google Fonts was used for the following font: 

* Silkscreen is used for all the text on the site. It is a sans serif font.
![Silkscreen regular 400](assets/images/readme-images/silkscreen-reg.png)
![Silkscreen Bold 700](assets/images/readme-images/silkscreen-bold.png)

### Imagery 

All featured photos were taken from various free stock photo websites. I have credited these in the [credits](#Credits) section.

### Wireframe

A wireframe was created for mobile, tablet and desktop.

![Wireframes](assets/images/readme-images/rpsls-wireframe.png)

### Features

The website is one page which is comprised of:

* A header with simple text stating the name of the website/game with a simple image underneath to break up the page.
![Header](assets/images/readme-images/header.png)

* at the top of the main area there are three buttons that gives the player the choice of how many rounds they would like to play.
![Rounds buttons](assets/images/readme-images/rounds-buttons.png)

* In the main game area there are five buttons with the possible choices of hands to play.
![Hands to play](assets/images/readme-images/hand-buttons.png)

* Also in the game area there is the message displaying the winner of each round and also the final winner of the game, two seperate sections for the player and the computer which have a score and a hand played display as well as images that change depending on the choices made.
![Game area message](assets/images/readme-images/game-area-w-message.png)
![Game area images](assets/images/readme-images/game-area-start.png)

* In the footer element you can find the rules section.
![Rules section](assets/images/readme-images/rules-footeer.png)

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

* Using semantic HTML.
* Using descriptive alt attributes on images on the site.
* Ensuring that there is a sufficient colour contrast throughout the site.
* Choosing a sans serif font for the site - these fonts are suitable for people with dyslexia.

- - - 

## Technologies Used

### Languages Used

HTML, CSS and JavaScript

### Frameworks, Libraries & Programs Used

Balsamiq - Used to create wireframes.

Github - To save and store the files for the website.

Google Fonts - To import the fonts used on the website.

[ImageResizer.com](https://imageresizer.com/resize/download/66b0eeb175dd25c968ff86c6) To resize images.

[Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

[Favicon.io](https://favicon.io/) To create the favicon.

[Google Developer Tools](https://developer.chrome.com/docs/) To troubleshoot and test features, test the websites loading speed with the Lighthouse feature.

- - -

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, rock-paper-scissors-lizard-spock.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the rock-paper-scissors-lizard-spock repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Keszi94/rock-paper-scissors-lizard-spock](https://github.com/Keszi94/rock-paper-scissors-lizard-spock).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the rock-paper-scissors-lizard-spock repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Keszi94/rock-paper-scissors-lizard-spock](https://github.com/Keszi94/rock-paper-scissors-lizard-spock).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

### W3C Validator

The W3C validator was used to validate the HTML on the website. It was also used to validate CSS in the style.css file.

* [Index.html HTML](assets/images/readme-images/markup-validation-html.png)
* [style.css CSS](assets/images/readme-images/validation-css.png)

### WAVE Testing

During testing Wave gave me the following alert: "No page regions"
![WAVE alert 1](assets/images/readme-images/wave-alert-first.png)
![WAVE alert 2](assets/images/readme-images/wave-alert-second.png)

I have fixed the issue by including a Header, a body and a footer element in my HTML code. 
![WAVE test final](assets/images/readme-images/wave-complete.png)

### Manual Testing



### Lighthouse Testing

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

#### Mobile Testing:

![Lighthouse mobile](assets/images/readme-images/lighthouse-mobile.png)

#### Desktop Testing:

![Lighthouse desktop](assets/images/readme-images/lighthouse-desktop.png)

### JavaScript Validator

[jshint](https://jshint.com/) was used to test the JavaScript code.

[script.js](assets/images/readme-images/jshint.png) - Passed with two warnings, both the same: "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics."

### Solved Bugs

1. During manual testing I have noticed that when playing a 3 round game the message displaying the winner would print the 'tie' message even if the scores were 2 to 1. This was caused by calling declareWinner before updateScores in the runGame function. I have fixed the issue by swapping them. 
![Tie bug](assets/images/readme-images/tie-bug.png)

2. After creating the function that changed the meassage's text color depending on the games outcome the text color would stay the same after resetting the game. I have fixed this by removing the css classes from the message in the round button's event listener.

3. When adding the function getHandPlayed to display which button the player and the computer chose for the current round, the playerHand would not display. It was caused by a typo in declaring the constant for playerHand. I corrected it and the function worked without any issues after.

4.  During manual testing I have noticed that the checkWinner function did not work. This was due to the incorrect use of the 'or' (||) operator. After searching on google for a solution I was able to find a relevant question on the [stackoverflow](https://stackoverflow.com/) forum, which helped me with the correct usage of the operator.

5. After calling the resetGame function the images displayed inside the game area would not go back to the original image. I have fixed this by calling the images from inside the function, therefore whenever the function executes now it calls on the images by using the source provided inside the function.

6.  After adding the option to choose how many rounds the player would like to play the game logic started working backwards, declaring that rock beat paper and paper beat rock, etc. My mentor, Graeme Taylor pointed it out to me  that inside the runGame function and in the getHandPlayed function call the arguments were written in the wrong order. Switching them solved the issue.
![Winner bug](assets/images/readme-images/winner-bug.png)

- - - 

## Credits

### Code Used

* I was inspired by [this Youtube tutorial](https://www.youtube.com/watch?v=3uKdQx-SZ5A&t=9s) - to make the winner messages display with a different color depending on the game's outcome.
* Used the exaamples on [this](https://www.codewizardshq.com/javascript-tutorial-for-kids-rock-paper-scissors/) - website to help me create a basic structure for some of my functions.
<!-- * [Stackoverflow](https://stackoverflow.com/) - Found some relevant questions to some of my bugs and was able to fix them with the answers provided. -->

I have used the following websites to gather relevant information during my research:
* [Stackoverflow](https://stackoverflow.com/)
* [Reddit](https://www.reddit.com/)
* [Thecodingforums](https://www.thecodingforums.com/)
* [W3Schools](https://www.w3schools.com/)

### Content

* I took the complete list of rules from the [Big Bang Theory Wiki](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) website.
* I created my Readme file based on [Kera Cudmore's](https://github.com/kera-cudmore) [Bully Book Club](https://github.com/kera-cudmore/Bully-Book-Club) Readme file.

### Media

#### Images

* The 'hand' images used in the game-area and the 'heart' images, including the favicon were taken from the website [pngwing.com](https://www.pngwing.com/) and then cropped using windows paint.

### Acknowledgments

I would like to acknowledge the following people who helped me along the way in completing my first milestone project:

* [Graeme Taylor](https://github.com/G-Taylor), my Code Institute Mentor.