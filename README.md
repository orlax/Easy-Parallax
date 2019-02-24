# Easy Parallax 
Easy parallax is a small library for making illustations with a parallax effect, you can check a demo in my  [The legend of zelda parallax illustration](https://orla.games/zelda)

the way it works right now is very easy, checkout the index.html for a code example. 

## How to use it:

1. load p5.js library on your file. 
2. load easy_parallax.js on your file 
3. add a container for the canvas element that will be created for your illustration, for example: 

    ```html
        <div id="parallax_container"></div>
    ```
4. then create a new EasyParallax object: 

```javascript
    let parallaxIlustration = new EasyParallax("parallax_container", layers, 2912, 1429); 
```

the EasyParallax function receives four parameters: 

- the id of the container
- a **layers object** were you define all the image layers for your parallax illustration
- the width* of your viewport
- the height* of your viewport

*this should be the ideal width and height of your illustration, they are used to calculate the aspect ratio of your canvas and keep it while redimentioning it, the default size for the canvas is 100% width of the window's Width and automatic height. 

## Defining the layers object: 

the layers object you pass to the EasyParallax function should look like this: 

```javascript
 let layers = {
            "layer_1": {
                src:"img/bg_bottom.png",
                x: .5,
                y: .5, 
                w: 1.3, 
                z: 1,
                fromBottom: true
            },
        /* the rest of your layers... */
 }
```

the layers object has properties that are your layer objects, you can name this layer properties anything you want, but they must have this attributtes: 

- **src** : the image location  
- **x** : the image x position relative to the left of the canvas, 0 is 0%, 1 is 100%  
- **y** : the image location relative to the top of the canvas, 0 is 0%, 1 is 100%  
- **w** : the width of image relative to the width of the canvas, 0 is 0%, 1 is 100%.
- **fromBottom**: optional, if true the y position is calculated relative to the bottom of the canvas


the order your layers are drawn is from the firs property to the last one, so objects in the background should go first in the code, and objects on the foreground should be the las properties. 


## Some las words: 

This is something i made for fun after watching something similar on twitter, i am thinking about keep to work on this Easy_parallax script to make it really straight forward to use and create more illustrations like this on the web. 

things that i am thinking on doing: 

- Making a UI tool for positioning images/layers that doesnt require writing code (will probably be a paid thing)
- makin tests to be sure you can put many parallax illustrations on the same page. 
- adding animation capabilities 
- supporting "scrolling" inside the illustration. 
- Adding support to read layer positions from a .psd file

That is for the time being, if you find this cool or do something with it please show it to me at [twitter](https://twitter.com/orlax22)
