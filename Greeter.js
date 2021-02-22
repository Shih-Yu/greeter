// IIFE passing in window Object as the global argument and 
// jQuery as the $ argument
(function(global, $) {

// Create a function constructor to generate the Greeter Object
    let Greeter = function(firstName, lastName, language) {
      return new Greeter.init(firstName,lastName, language);
    }
// Create Greeter prototype for creating Greeter methods
    Greeter.prototype = {};
// Greeter function
    Greeter.init = function(firstName, lastName, language) {
      // Assign this to self so it reference Greeter and not the global object
      let self = this;
      // Assign function parameters and set their default to empty string 
      // for name and English for language
      self.firstName = firstName || "";
      self.lastName = lastName || "";
      self.language = language || "en";
    }
    // Point all objects created for Greeter to prototype
    Greeter.init.prototype = Greeter.prototype;
    // Assign the Greeter function to global object and
    // renaming it G$ for shorthand
    global.Greeter = global.G$ = Greeter;

}(window, jQuery));