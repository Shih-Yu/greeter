// Using jQuery for accessing DOm elements and incorporate Greeter 
// library for the greetings based o user input
$("#login").click(function (){
  // Assign Greeter library as loginGreeter
  let loginGreeter = G$("John", "Doe");
  // Hides the login div once the login button is pressed
  $("#logindiv").hide();
  // Dipslays the greeting and name based on user selection using Greeter library of setLsng and HTMLGreeting
  loginGreeter.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});