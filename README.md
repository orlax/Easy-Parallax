# paralax-p5js
a simple project with parallax implementation on p5js. 


this example draws a bunch of images on the canvas element with the p5.js 
and them updates this images position based on mouse or device movement 

if you want to reuse this for your own page there are two things to take into account: 


preload your images on the preload function as i do, the "scale" function is there to save the correct aspect ratio of the images you add. 

then on the drawing function you use the "placeImage" function to draw your images this function takes this parameters: 

(x, y, iw, z, from bottom)

x = x position 
y = y position 
iw = width of image on percentage relative to the canvas width 
z = z position
fromBottom = calculate y position from the bottom of the canvas instead of top, defaults to false. 


I hope to have time soon to update this. 
