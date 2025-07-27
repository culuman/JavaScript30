# CSS + JavaScript Clock

A simple analog clock that dynamically updates the hands in real time based on the current system time.

## Update

The clock hands are now implemented using CSS pseudo-elements (`::before`) instead of separate HTML divs. This approach keeps the HTML cleaner by using virtual elements generated purely through CSS for the hour, minute, and second hands. Each hand is a styled pseudo-element inside its container, which is rotated via JavaScript to show the current time.

I also added a digital clock below the original analog one from the tutorial.