### Session 11-30 1:00-4:00 Commit: 381a7a6

This session lasted about 3 hours of me deciding which type of website I want to create whether that was a multi-page website or a scroll down website and since I had already done something to a multi-page I thought to try out a single long page. In this website I currently have set up the basic parts of the webite which is the outline and what will be on it in general I have been using websites as reference but not their code, however I have been using hw4 when I get stuck because it is similar to what I want my website to look like.

### Session 11-30 4:00-9:00 Commit: 615ba15 and bc62445

The outline is done and its very bland I used hw#4 as a reference and to help get a more professional look for the texts but there is still no color, design, or information on screen. However now the navbar I would say is done, and I decided on a color scheme for the website which will be like 5 colors all earthy colors.

After the navbar is finished I changed some of the setting from the ones used in hw#4 to better fit with what I am making and to fit a personal website. Also in this time period I made the "intro" page which is the first page that is seen with a selfie and some generated latin text to make it make look the part till I fill in all the correct info. I also finished previous work section and added filler text and a layout of the button that will download my resume.

### What was done: 
Added a basic outline of each section and the titles of each section, mainly used h1 and p saying this were this information is going and above all that in the header element is where I set up the navbar by making the hyper link for it using the a element 'a' and href for tying the hyperlink to the title of each section for me it was #Introduction,#PreviousWork, #projects, and #contact now the idea is when I click the word in the navbar it will scroll the screen down to that section. 

In the css file I added some setting for the body of the html and some of the setting for the different sizes of the screen making if the the display setting is different depending on how big your screen is. Also some visual setting for the nav bar till I get a theme, the setting are that the hyperlinks in the navbar don't look like hyper links and are centered at the top and have an equal spacing between the 4 of them.

For the next part in my root class which is where I keep my colors in the css page I choose a more earthy color palatte and added names to them to better access them later and have consistant colors. Now I fully went into finishing the css of the navbar by adding a hover when hovering over a section name adding the color from root making it have a new background, and be visual that the user is hovering.

Back to html, I made a class that deals the different background styles that I will be using one is a lighter background that is the regular background and making another class that will be container so all the background in this section have this darker gradiant earthy look mixing css and html. Next I added a langing image of myself and a title just being my name, and currently I am using generated latin text to simulate information of myself. For the landing image I made a class for it and changed how it would look with css, making it be a round image and smaller to fit the section along with making it be to the left of the text by putting a class for the paragraph about myself.

In the same section of my landing page and image is the Introduction section which I will just keep in the dark background class and make a p element and add 3 more paragraphs in latin and now the landing page, introduction section and navbar are all complete.

### Session 12-1 12:00-4:00 Commit: ceef37a

So far I have made some css changes from the code I am using as a reference to better fit with my idea of a professional website. I finished the button that download my offical resume, I did this downloading my resume as a pdf and making it a hyper link to that pdf, but it still needs more testing.

I added projects to the project section, adding pictures of the projects and the name of the projects and for now it has filler text till I fill in the information later. The two projects I added also have to do with html so I have a picture for both and need to set up the git for one of the projects because it was in a gitlab and I will put into a github. The only changes to the css was making the button look better and match the website, along with adding sections for the text in my project to be left leaning or right leaning. Also in Css was I edited the images and how big they were, also how rounded the corners are.
### What was done: 

There was a lot done in this section that I will be going over
-Finished Previous work section
-Finished the Project section
-added images to both sections
-Added a resume button

-Previous work section
For this section I added some containers one for all the content content container and one that will add 3 different texts vertially and each one will talk 1 class that I took. To do this I made three class one which is the row class called space-evenly-distributed-row-container and vertically-stacked-mid-screen-container. These two classes which are implmented in the css basically make whatever is added in the class each part or section will be spaced evenly and have space between each other just using justify content and display. Secondly I made a class called card which will be used three times one for every class and this will all be done while in class talked about above, this class sets the width and padding between it and other cards making a column of words. Next I copy and pasted this card class for each section and added another class inside the card class which holds the title of the class useing margin-top 0 and making it h2, lastly just adding the element p for paragraph which again was the generated latin.

-Added a resume button
In the first implementation I added my pdf resume and made a hyper link under the second class using 'a' element so when someone pressed the hyper link my resume was downloaded. I also added classes to the hyper link just calling it download-resume and make css setting to make it look like a button and also adding a hover, basicially just adding a set width for the button, changing the color of the text and background, and finally adding a hover to change the color to be lighter when hovered over.

-Added the project section for this section I added three pictures to my image folder, and made a class so that each image will look the same, and changed the size and roundness of the image, and added an alt for every image for accessibility. This section will have a darker background so I added a class surrounding all this content with the already made div class dark background and content container class. After adding an image that is already in a class so its small, I have two others classes for the text on that make the text left sided and one that makes the text rigt sided and I alternate betweent the two so text will push the image to either side of the screen. I also added two paragraphs to each project and made it generated latin as filler.


### Session 12-1 6:00-8:00 Commit: ceef37a
Added the contact form and finished it to fit the look of my page, and fixed the issue with the contact reset not resetting the text and it was just the reset was not in the form. Also, adding css for all the texts and the two buttons at the bottom which also have a hover to them.

### what was done:
Because we could use form code from our other work I just imported that, making a form element with class fropm before being content container and new form class. Also using space-between-distributed-row-container and vertically stacked for the text and containers in the form. Next I added every part that needed text entry which for me was name, company...etc, putting them all the titles in a form-label class. Next I added some aria-label, class, type, id, and name for each input thats all specific to one type of information. Lastly at the bottom of the form I have the submit and reset buttons which are just inputer using the type submit and rest and sending those same values when pressed.

### Session 12-2 12:00-5:00 Commit: 3302fa4

In this section I changed the download pdf file button to a popup like in hw#4 because I still needed to use javescript and I got a Wave alert about a pdf and I could not get rid of it for the life of me, I still need to add the image of the resume to the popup. So instead I made a pop for the the resume which lets me use java script, and doesnt give me an alert 

### what was done:

I went back to the hyper link in the previous work section and changed the hyper link that did work to instead be a pop up using java script, with a exit button that closed the pop up. I reused the style of the button for the resume button and changed the name of it to preview the resume I still need to add the resume image. For the java script I made and query selector using the css download button, than using the action of pressing the button an event would take place and that event would make the pop-up selection which is whatever calls it and the element possibly a paragraph in html. The style of the pop-up is a block that still shows the website faded on the sides in the color of the faded dark background. Also in java script I made that in the popup is a very similar structued function that makes and x at on the pop up and when pressed will change the style of the screen to none bringing it back to a web page. Also making the form which will include the name, company, email, and phone of the contact, also adding css to match the theme of the website.

### Session 12-3 4:00 Commit: 380a894

In this sectioon I got rid of the filler text that was a place holder, and added infromation that came from me, this included an introduction, previous classes, projects that are all relavent to the website.

This also included a change a small part of the css, to make the popup of my resume be easier to see.

### Session 12-3 8:00 Commit: 9cd7239

In this section there was edits to the text to sound better in all sections, made changes to images to have better accessibility, along with small changes to the css of the varbar to make the hyperlink bigger and easier to click.

### Session 12-5 9:00 commit: 04f1581

In this session I formated every file, did the html and css checker and fixed any errors that came from that which included renameing pictures, but also added pop ups for the submit and reset along with add the abilty to download my resume at a push of a button, all while not getting a wave accessibilty error. Also adding pop up for when submit was clicked or reset was click, also adding a button layout in css to match the theme of the website and a hover to let the user know it was a clickable. 

-css and html Checker
-js additions
-css additions to js addition

When I did the css and html checker I didnt get an css error which made sense as I wasnt doing anything too different from what we normally do on assignments, however for html I got the same error in every image and that was the name of the image included a scace so I had to go and rename all the images which is good anyway added name to each one and not just a random string of numbers. Along with changing the @media and adding some navbar setting so that when a screen is small all of the sections are outline without having to press the more button.

The js Additions was a bit hard as I feel I am not to familar in js, but my best way to describe it is, I made a function that would be a link to download my resume, than I went back to html and added the resume while being a child or part of the function of link, but all making it of the already made class of download that was used earler and putting it under the preview of my resume.

Lastly I added to the css by making a those buttons for the resume or resuing them is the better word and changing the margin between them to look more natural, and adding the space in the pop up for my preview image of my resume.

### Session 12-6 12:00 commit: 04f1581
