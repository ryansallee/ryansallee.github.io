#### Lawn_Paynes

Purpose

The Lawn Paynes website is a proposal page for a friend who is looking to expand his small lawn care and landscaping business by showing which services he provides, examples of his work using a slideshow, and a contact page to allow customers to reach out to him. 

### JavaScript Functions


1. `displayMessage()` file: [spring.js](https://github.com/ryansallee/ryansallee.github.io/blob/master/js/spring.js)
This function's purpose is to insert a message into the #alert div on index.html dependent upon the date listed on the computer detected by JavaScript with the Date.now() method saved into the todayDate variable in Unix Time as a date object . As well, two dates are saved as date objects in the variables beingSpringDate (03/20/2018), the beginning of spring, and beginSummerDate (06/21/2018), the beginning of summer, that will determine the messages displayed. If the date is before the beginning of spring, the message stored in the variable beforeSpringMessage will display in the #alert div set to an orange background. However, if the date is after the beginning of spring but before the beginning of summer, the messsage stored in the variable beforeSummer Message will display in the #alert div set to a red background.
-*Testing Notes*
To test the the displayMessage conditions for when it is before spring, please change the date on your computer to a date before 3/20/18, navigate away from the domain, and then return back to the page. You should be able to see the message "Spring is coming! *Call us* now to get your Lawn Paynes solved! with a orange background. If the date on the computer is set to a date between 03/20/2018 and 06/21/2018, you should see the message Spring is here! *Call us* now before your Lawn Paynes are out of control! with a red background. If the date is set past 06/21/2018, there will be no message.

### CSS Classes
1. `.slide-container` file: [our_workstyle.css](https://github.com/ryansallee/ryansallee.github.io/blob/master/css/our_workstyle.css) 
The purpose of this this custom class is to set a flex container for the images displayed on small screens to stack them upon one another as well as the images in the slideshow on larger screens (>=640px). For all screens, this container gives depth to the page with a box-shadow style and decreases the blockiness of the container with a border-radius style of 25px in addition to providing some contrast by using a shade of blue, but with the gradient-direction reversed from the direction of the body.On smaller screens, the container almost fills the page with a 97.5% width to give it some breathing room, but ensure that the container is not small on mobile devices. For larger screens, the width is decreased so that the slideshow images are not overly large, and padding is applied to allow the slideshow images to breathe since the img selector for tablet sized screens fills the whole container with a 100% max-width and max-height. Furthermore, the width is significantly decreased on desktops and laptops (>=1025px)to ensure that the container does not extend below the user's viewport.