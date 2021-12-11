var questions = {
  q01: { 
    qtext: "All crimes that are victimless, like drug consumption, are not crimes.", 
    btn1: "Agree", 
    btn2: "Disagree", 
    color1: "#3772ff", 
    color2: "#df2935", 
    result1: function() { init_question(q12); }, 
    result2: function() { init_question(q02); } 
  },

  q02: { 
    qtext: "Are monarchies contradictory to the principles of freedom and liberty?", 
    btn1: "Yes, they are", 
    btn2: "No, not necessarily", 
    color1: "#595959", 
    color2: "#31081f", 
    result1: function() { init_question(q03); }, 
    result2: function() { init_question(q10); } 
  },

  q03: { 
    qtext: "Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?", 
    btn1: "Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?", 
    btn2: "The Federal Government should have the ultimate authority", 
    color1: "#0f084b", 
    color2: "#006ba6", 
    result1: function() { results("antifed"); }, 
    result2: function() { init_question(q04); } 
  },
          
  q04: { 
    qtext: "Ideally, how powerful should the central government be?", "Strong, in order to promote national unity", 
    btn1: "Strong, in order to promote national unity", 
    btn2: "Ideally, how powerful should the central government be?", "Strong, in order to promote national unity", 
    color1: "#0f084b", 
    color2: "#006ba6", 
    result1: function() { results("antifed"); }, 
    result2: function() { init_question(q04); } 
  },

q04: { qtext: "Ideally, how powerful should the central government be?", "Strong, in order to promote national unity", 
          "Relatively weak, with limited power", "#121420", "#394c6a",
          function() { results("hamilton"); }, function() { init_question(q05); } },

q05: { qtext: "What should the economy primarily focus on?", "Agriculture", 
          "Industry", "#f2cd5d", "#6c7d47",
          function() { results("jeffersonian"); }, function() { init_question(q06); } },

q06: { qtext: "Land should not be privately owned.", "Agree", "Disagree", "#3e5641", "#a24936",
          function() { results("georgism") }, function() { init_question(q07) } },

q07: { qtext: "How is the value of products determined?", "By a natural sum of labor, profits, and expenditures", 
          "Through trading, value is subjective", "#5398be", "#dea54b",
          function() { results("adamsmith") }, function() { init_question(q08) } },

q08: { qtext: "Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?", 
          "Generally, yes", "No, in most, if not all cases", "#683257", "#716f71",
          function() { results("goldwater"); }, function() { init_question(q09); } },

q09: { qtext: "Are you strongly against prohibition of drugs and alcohol?", "Yes", "No", "#2d728f", "#f49e4c",
          function() { results("mises"); }, function() { results("coolidge"); } },

q10: { qtext: "Which type of monarchy is more preferable?", "Absolute Monarchy", "Constitutional Monarchy", "#593f62", "#5f7995",
          function() { results("voltaire"); }, function() { init_question(q11); } },

q11: { qtext: "Where does knowledge primarily come from?", "The sense of reason", "Sensory Experience", "#053b06", "#0b5d1e",
          function() { results("rosseau"); }, function() { results("locke"); } },

q12: { qtext: "A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.", 
          "Agree", "Disagree", "#023c40", "#43281c",
          function() { init_question(q13); }, function() { init_question(q14); } },

q13: { qtext: "Would it preferable if more people voluntarily gave charity to the unfortunate?", 
          "Yes", "No", "#2a9d8f", "#e9c46a",
          function() { results("aynrand"); }, function() { init_question(q15); } },

q14: { qtext: "Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?", 
          "Yes", "No", "#2e2532", "#4c6085",
          function() {  }, function() {  } },

q15: { qtext: "What is the best justification for the importance of liberty?", "Liberty is vital for an efficient society", 
           "People have inalienable rights that should not be infringed upon", "#2a9d8f", "#e9c46a",
          function() { init_question(q16); }, function() { init_question(q17); } },

q16: { qtext: "Is the existence of voluntary slavery possible?", "Impossible; it is an oxymoron", 
           "It is possible through a contract", "#918868", "#347fc4",
          function() { results("milton"); }, function() { results("nozick"); } },

}
