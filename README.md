# Lawn_Paynes

Purpose

The Lawn Paynes website is a proposal page for a friend who is looking to expand his small lawn care and landscaping business by showing which services he provides, examples of his work, and a contact page to allow customers to reach out to him.

JavaScript Functions
js/spring.js

1. displayMessage()
This function's purpose is to insert a message into the #alert div on index.html dependent upon the date listed on the computer detected by JavaScript with the Date.now() method saved into the todayDate variable in Unix Time as a date object . As well, two dates are saved as date objects in the variables beingSpringDate (03/20/2018), the beginning of spring, and beginSummerDate (06/21/2018), the beginning of summer, that will determine the messages displayed. If the date is before the beginning of spring, the message stored in the variable beforeSpringMessage will display in the #alert div set to an orange background. However, if the date is after the beginning of spring but before the beginning of summer, the messsage stored in the variable beforeSummer Message will display in the #alert div set to a red background.

*Testing Notes*
To test the the displayMessage conditions for when it is before spring, please change the date on your computer to a date before 3/20/18, navigate away from the domain, and then return back to the page. You should be able to see the message "Spring is coming! Call us now to get your Lawn Paynes solved! with a orange background. If the date on the computer is set to a date between 03/20/2018 and 06/21/2018, you should see the message Spring is here! Call us now before your Lawn Paynes are out of control! with a red background. If the date is set past 06/21/2018, there will be no message.