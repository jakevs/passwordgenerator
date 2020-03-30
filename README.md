# passwordgenerator
<h1>Homework 3</h1>
<p>Create a password generator</p>
<h2>Project Details</h2>
<p>This assignment calls for the developer to create a website that will generate a password and display it on the screen for the user. The user should be able to create a password and select which, and how characters they would want to use for their password. This will be to ensure that the user has a secure password.
<h3>Working Details</h3>
<p>I created this so that when a user selects the "Generate Password" button, they will be given a series of "confirms", "alerts" and "prompts" in which they can select the amount and type of character they would like to use on the screen. At the top of my javascript document, I left my pseudocode I used to go through the assignment in my head before I started writing code. The first question will give a "confirm" to ask if they would like to created password, if they select ok, then it will continue on, if they select cancel, they will be given an exit "alert." I did this by using "if/else" statements, so that if they decline to use a certain type of character, it will be omitted from the randomly generated password.</p>
<p>I then generated the password by using a "for loop," that takes all user selected criteria and randomly generates an array of characters with "math.random." I had some issues getting the result to display in the text box, so I used a "getElementById" "document." and "on-click" to get the password to show up on the screen properly. I ended up getting rid of some of the orignial code to make this work. The user can then create a new password if the first one was not to their liking.</p>

