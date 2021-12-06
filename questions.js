//[Question Text, Button 1 Text, Button 2 Text, Button 1 Color, Button 2 Color, Final Question?, Question after Button 1 Pressed, Question after Button 2 Pressed]
var q1 = ["All crimes that are victimless, like drug consumption, are not crimes.", "Agree", "Disagree", "#3772ff", "#df2935", "false", "false", 
          function() { init_question(q1) }, function() { init_question(q2) } ];

var q2 = ["Are monarchies inherently contradictory to the principles of freedom and liberty?", "Yes, they are", "No, not necessarily", "#595959", "#31081f", "false", "false",
          function() { init_question(q3) }, function() { init_question(q9) } ];

var q3 = ["Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?", 
          "The Federal Government should be subservient to its subdivisions", "The Federal Government should have the ultimate authority", 
          "#0f084b", "#a6cfd5", "antifed", "false",
          function() { results(antifed) }, function() { init_question(q4) } ];

var q4 = ["Ideally, how powerful should the central government be?", "Strong, in order to promote national unity", 
          "Relatively weak, with limited power", "#121420", "#394c6a", "hamilton", "false",
          function() { results(hamilton) }, function() { init_question(q5) } ];

var q5 = ["What should the economy focus more on?", "Agriculture", "Industries", "#f2cd5d", "#6c7d47", "jefferson", "false",
          function() { results(jefferson) }, function() { init_question(q6) } ];

var q6 = ["How is the value of products determined?", "By a natural sum of labor, profits, and expenditures", 
          "Through trading, value is subjective", "#5398be", "#dea54b", "adamsmith", "false",
          function() { results(adamsmith) }, function() { init_question(q7) } ];

var q7 = ["Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?", 
          "Generally, yes", "No, in most, if not all cases", "#683257", "#716f71", "goldwater", "false",
          function() { results(goldwater) }, function() { init_question(q8) } ];

var q8 = ["Are you strongly against prohibition of drugs and alcohol?", "Yes", "No", "#2d728f", "#f49e4c", "mises", "coolidge",
          function() { results(mises) }, function() { results(coolidge) } ];

var q9 = ["Which type of monarchy is more preferable?", "Absolute Monarchy", "Constitutional Monarchy", "#593f62", "#5f7995", "voltaire", "false",
          function() { results(voltaire) }, function() { init_question(q10) } ];

var q10 = ["Where does knowledge primarily come from?", "Sensory Experience", "The sense of reason", "#053b06", "#0b5d1e", "locke", "rosseau",
          function() { results(locke) }, function() { results(rosseau) } ];
