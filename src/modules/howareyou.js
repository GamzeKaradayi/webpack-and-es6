export default function HowAreYou() {

    // Arrow functions
    var test = () => {
        alert("yeah this is an arrow function!");
    }    

    test();

    // New variable types : const, let
    const x = 5;
    let name = "Cengizhan";

    // This is an arrow function but the templating in alert is very old and ugly.    
    var SayMyName = (name = "Cengizhan", surname = "Peker") => {
        alert("Your name is: " + name + " " + surname);
    }

    SayMyName();
    SayMyName("Eray","Alakese");

    var SayMyNameWithTemplateLiteral = (name = "Cengizhan", surname = "Peker") => {
        const response = `Hey, merhaba. Benim adım ${name} ${surname}`;
        alert(response);
    }

    SayMyNameWithTemplateLiteral();
    SayMyNameWithTemplateLiteral("Pelin","Erdem");
  
} 