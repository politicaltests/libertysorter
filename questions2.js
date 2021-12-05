//[Question Text, Button 1 Text, Button 2 Text, Button 1 Color, Button 2 Color, Final Question?] (Question after Button 1 Pressed, Question after Button 2 Pressed)
var q1 = ["All crimes that are victimless, like drug consumption, are not crimes.", "Agree", "Disagree", "#3772ff", "#df2935", "false", "false", 
          function() { init_question(q10) }, function() { init_question(q10) } ];

var q10 = ["test like drug consumption, are not crimes.", "Agree", "Disagree", "#3772ff", "#df2935", "true", "true",
           function() { init_question(q2) }, function() { init_question(q3) } ];

var q2 = ["What should be the relationship between the federal government of a country, and its subdivisions?", "The Federal Government should be subservient to its subdivisions", "Disagree", "#ff9f1c", "#2ec4b6", "false", "false",
          function() { init_question(q10) }, function() { init_question(q10) } ];

var q3 = ["All crimes that are victimless, like drug consumption, are not crimes.", "Agree", "Disagree", "#3772ff", "#df2935", "false", "false",
          function() { init_question(q10) }, function() { init_question(q10) } ];
