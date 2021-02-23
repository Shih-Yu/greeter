// IIFE passing in window Object as the global argument and 
// jQuery as the $ argument
// ; - is added incase previous code to this might not complete its semicolon
;(function(global, $) {

// Create a function constructor to generate the Greeter Object
    let Greeter = function(firstName, lastName, language) {
      return new Greeter.init(firstName,lastName, language);
    }

    // Add languages to greet but hidden within scope of IIFE
    let supportedLangs = ["en", "es"];

    // greetings object
    let greetings = {
      en: "Hello",
      es: "Hola"
    };

    // Formal greetings object
    let formalGreetings = {
      en: "Greetings",
      es: "Saludos"
    };

    // Create Greeter prototype for creating Greeter methods
    Greeter.prototype = {
      // Method to return full name of user
      fullName: function() {
        return `${this.firstName} ${this.lastName}`;
      },
      // Method to validate supporeted language, rtuns -1 if not found
      validate: function() {
        if(supportedLangs.indexOf(this.language) === -1) {
          throw "Invalid language";
        }
      },
      // Greeting method
      greeting: function() {
        return `${greetings[this.language]} ${this.firstName}!`
      },
      // Formal greeting method
      formalGreeting: function() {
        return `${formalGreetings[this.language]}, ${this.fullName()}`
      },
      // Method for greeting to decide whether to use formal of informal
      greet: function(formal) {
        let msg;

        // if undefined or null it will be coerced to "false"
        if(formal){
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }
        // Log greetings into the console
        if(console) {
          console.log(msg);
        }
        // "this" refers to the calling object at execution time
        // makes the method chainable
        return this;
      },
      // Method to validate language
      setLang: function(lang) {
        this.language = lang;
        this.validate();
        return this;
      },
      // jQuery
      HTMLGreeting: function(selector, formal) {
        // throw error if misssing jQuery or selector
        if(!$) {
          throw "jQuery not loaded";
        }
        if(!selector) {
          throw "Missing jQuery selector";
        }

        let msg;
        if(formal) {
          msg = this.formalGreeting();
        } else {
          msg = greeting();
        }
        $(selector).html(msg);
        return this;
      }
    };

    // Greeter function
    Greeter.init = function(firstName, lastName, language) {
      // Assign this to self so it reference Greeter and not the global object
      let self = this;

      // Assign function parameters and set their default to empty string 
      // for name and English for language
      self.firstName = firstName || "";
      self.lastName = lastName || "";
      self.language = language || "en";

      // validate the function params when it is created
      self.validate();
    }

    // Point all objects created for Greeter to prototype
    Greeter.init.prototype = Greeter.prototype;

    // Assign the Greeter function to global object and
    // renaming it G$ for shorthand
    global.Greeter = global.G$ = Greeter;

}(window, jQuery));