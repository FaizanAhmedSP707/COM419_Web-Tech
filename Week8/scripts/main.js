class Bar{
    
    constructor(health_set=100){
        this.health = health_set; 
        //Setting up the base attribute of the bar, with defaults (overrideable)
        
        // Putting the Red bar on the page
        this.bar = document.createElement("div");
        //Linking the css stuff for the bar
        this.bar.classList.add("bar");
        // Putting the newly created bar on the page
        document.body.appendChild(this.bar);

        // Putting the green bar on the page
        this.healthbar = document.createElement("div");
        //Linking the css stuff for the health bar
        this.healthbar.classList.add("health");
        this.bar.appendChild(this.healthbar); 
        /*
        Putting the health bar div on top of the bar div (which will increase or decrease
        when we do things to it)
        */
        
        this.update(); 

        this.bar.addEventListener("click", e=>{
            if(this.health - 10 < 0){
                this.health = 0;
                // The above is the check to ensure the health attribute doesn't go below 0
            }
            else{
                this.health -= 10;
            }
            this.update();
        });

        this.bar.addEventListener("mouseenter", e=>{
            if(this.health + 30 > 100){
                this.health = 100;
                // The above is the check to ensure the health attribute doesn't go above 100
            }
            else{
                this.health += 30;
            }
            this.update();
        });
    }

    update(){
        this.healthbar.style.width = `${this.health}px`;
        /* 
        the backtick char ` is used for passing variables into things
        the variables must be prefixed with a $ sign followed by curly brackets ( {} )
        In this scenario, the variable must be followed up with px as we are changing the
        width of the health bar, otherwise it will break.
        */
    }
}

