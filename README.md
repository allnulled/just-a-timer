# Simple Timer

Let's keep it simple.

1. Import the simple-timer module to your project:

       ~$ npm install simple-timer --save

2. Import the simple-timer module to your code:

       var Timer = require("simple-timer");

3. Create a new instance of the timer:

       var mytimer = new Timer();

4. Get the time that has passed since the timer was created:

       console.log(mytimer.time());

5. If you need to reset the timer, you can do it like:

       mytimer.reset()

That is all. Simple?