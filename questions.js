//[Question Text, Button 1 Text, Button 2 Text, Button 1 Color, Button 2 Color, Final Question?, Question after Button 1 Pressed, Question after Button 2 Pressed]
var q01 = ["All crimes that are victimless, like drug consumption, are not crimes.", "Agree", "Disagree", "#3772ff", "#df2935", 
          function() { init_question(q12); }, function() { init_question(q02); } ];

var q02 = ["Are monarchies contradictory to the principles of freedom and liberty?", "Yes, they are", "No, not necessarily", "#595959", "#31081f",
          function() { init_question(q03); }, function() { init_question(q10); } ];

var q03 = ["Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?", 
          "The Federal Government should be subservient to its subdivisions", "The Federal Government should have the ultimate authority", 
          "#0f084b", "#006ba6",
          function() { results("antifed"); }, function() { init_question(q04); } ];

var q04 = ["Ideally, how powerful should the central government be?", "Strong, in order to promote national unity", 
          "Relatively weak, with limited power", "#121420", "#394c6a",
          function() { results("hamilton"); }, function() { init_question(q05); } ];

var q05 = ["What should the economy primarily focus on?", "Agriculture", 
          "Industry", "#f2cd5d", "#6c7d47",
          function() { results("jeffersonian"); }, function() { init_question(q06); } ];

var q06 = ["Land should not be privately owned.", "Agree", "Disagree", "#3e5641", "#a24936",
          function() { results("georgism") }, function() { init_question(q07) } ];

var q07 = ["How is the value of products determined?", "By a natural sum of labor, profits, and expenditures", 
          "Through trading, value is subjective", "#5398be", "#dea54b",
          function() { results("adamsmith") }, function() { init_question(q08) } ];

var q08 = ["Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?", 
          "Generally, yes", "No, in most, if not all cases", "#683257", "#716f71",
          function() { results("goldwater"); }, function() { init_question(q09); } ];

var q09 = ["Are you strongly against prohibition of drugs and alcohol?", "Yes", "No", "#2d728f", "#f49e4c",
          function() { results("mises"); }, function() { results("coolidge"); } ];

var q10 = ["Which type of monarchy is more preferable?", "Absolute Monarchy", "Constitutional Monarchy", "#593f62", "#5f7995",
          function() { results("voltaire"); }, function() { init_question(q11); } ];

var q11 = ["Where does knowledge primarily come from?", "The sense of reason", "Sensory Experience", "#053b06", "#0b5d1e",
          function() { results("rosseau"); }, function() { results("locke"); } ];

var q12 = ["A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.", 
          "Agree", "Disagree", "#023c40", "#43281c",
          function() { init_question(q13); }, function() { init_question(q14); } ];

var q13 = ["Would it preferable if more people voluntarily gave charity to the unfortunate?", 
          "Yes", "No", "#2a9d8f", "#e9c46a",
          function() { results("aynrand"); }, function() { init_question(q15); } ];

var q14 = ["Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?", 
          "Yes", "No", "#2e2532", "#4c6085",
          function() { results("x"); }, function() { results("x"); } ];

var q15 = ["What is the best justification for the importance of liberty?", "Liberty is vital for an efficient society", 
           "People have inalienable rights that should not be infringed upon", "#2a9d8f", "#e9c46a",
          function() { init_question(q16); }, function() { init_question(q17); } ];

var q15 = ["Is the existence of voluntary slavery possible?", "Impossible; it is an oxymoron", 
           "It is possible through a contract", "#918868", "#347fc4",
          function() { results("milton"); }, function() { results("nozick"); } ];
