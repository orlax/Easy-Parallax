let EasyParallax = function(container, layers, viewPortWidth, viewPortHeight){
    this.sketch = function(p){
        let instance = this; 

        this.sourceSize = [viewPortWidth,viewPortHeight]
        this.canvasAspectRatio = sourceSize[1]/sourceSize[0];
        this.maxXrotation = 10; 
        this.minXrotation = -10; 
        this.maxYrotation = -20; 
        this.minYrotation = -90; 
        this.w =0; 
        this.h = 0; 

        p.preload = () => {
            for (var l in layers) {
                let layer = layers[l];
                layer.img = p.loadImage(layer.src, (img) => { 
                        var aspectRatio = img.height/img.width; 
                        layer.aspectRatio = aspectRatio;                
                });
            }
        }
        
        p.setup = () => {
            p.noCursor();
            w = p.windowWidth; 
            h = instance.w*instance.canvasAspectRatio; 
            p.createCanvas(w, h-40);
        }

        p.draw = function(){
            p.background(0); 
        
            for (var l in layers) {
                let layer = layers[l];
                p.PlaceImage(layer); 
            }
        
            p.noStroke(); 
            p.fill("rgba(255,255,255,.3)"); 
            p.ellipse(p.mouseX, p.mouseY, 60, 60);
        }

        p.PlaceImage = function(layer){
            let yPos = instance.h*layer.y; 
            let xPos = instance.w*layer.x; 
            let width =  instance.w*layer.w; 
            let height = instance.w*layer.w*layer.aspectRatio; 
        
            if(layer.fromBottom) yPos = instance.h-(instance.w*layer.w*layer.aspectRatio)-(layer.y*instance.h);
        
            //how much do layers move from parallax.  
             let parallaxXAmount = .6*instance.w*layer.z; 
             let parallaxYAmount = .4*instance.h*layer.z; 
            
            
             //we load mouse x position to a variable.
            let posX = p.mouseX; 
            //Y position must be limit to either 0 or the full height of the canvas 
            let posY = p.mouseY; 
            if(posY > instance.h){ posY = instance.h; }
            if(posY < 0){ posY = 0; } 
           
        
            //if rotation information is available we use that to control de parallax effect. 
            if(p.rotationX){
                //rotation on the x axis works from 
                let rotX = p.rotationX; 
                if(rotX < instance.minXrotation ) rotX = instance.minXrotation; 
                if(rotX > instance.maxXrotation) rotX = instance.maxXrotation; 
                posX = p.map(rotX,instance.minXrotation, instance.maxXrotation, 0, instance.w); 
            }
        
            if(p.rotationY){
                //rotation on the x axis works from 
                let rotY = rotationY; 
                if(rotY < instance.minYrotation ) rotY = instance.minYrotation; 
                if(rotY > instance.maxYrotation) rotY = instance.maxYrotation; 
                posY = p.map(rotY,instance.minYrotation, instance.maxYrotation, 0, instance.h); 
            }
        
            let parallaxX = (.5- (posX  * 1 / instance.w));
            let parallaxY = (.5- ( posY  * 1 / instance.h));
        
            xPos += parallaxXAmount*parallaxX; 
            yPos += parallaxYAmount*parallaxY; 
        
            
            p.image(layer.img, xPos , yPos , width, height );
        }

        p.windowResized = function(){
            instance.w = p.windowWidth; 
            instance.h = w*instance.canvasAspectRatio; 
            p.resizeCanvas(instance.w, instance.h-40);
        }
    }

    new p5(this.sketch, container);
}




