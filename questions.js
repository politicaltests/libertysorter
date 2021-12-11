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
    btn1: "The Federal Government should be subsurvient to its subdivisions",
    btn2: "The Federal Government should have the ultimate authority",
    color1: "#0f084b",
    color2: "#006ba6",
    result1: function() { results("antifed"); },
    result2: function() { init_question(q04); }
  },

  q04: {
    qtext: "Ideally, how powerful should the central government be?",
    btn1: "Strong, in order to promote national unity",
    btn2: "Relatively weak, with limited power",
    color1: "#0f084b",
    color2: "#006ba6",
    result1: function() { results("hamilton"); },
    result2: function() { init_question(q05); }
  },

  q05: {
    qtext: "What should the economy primarily focus on?",
    btn1: "Agriculture",
    btn2: "Industry",
    color1: "#f2cd5d",
    color2: "#6c7d47",
    result1: function() { results("jeffersonian"); },
    result2: function() { init_question(q06); }
  },

  q06: {
    qtext: "Land should not be privately owned.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#3e5641",
    color2: "#a24936",
    result1: function() { results("georgism"); },
    result2: function() { init_question(q07); }
  },

  q07: {
    qtext: "How can the inherent value of a product be determined?",
    btn1: "By a sum of labor, profits, and expenditures",
    btn2: "It cannot be; value is subjective",
    color1: "#5398be",
    color2: "#dea54b",
    result1: function() { results("adamsmith"); },
    result2: function() { init_question(q08); }
  },

  q08: {
    qtext: "Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?",
    btn1: "Generally, yes",
    btn2: "No, in most, if not all cases",
    color1: "#683257",
    color2: "#716f71",
    result1: function() { results("goldwater"); },
    result2: function() { init_question(q09); }
  },

  q09: {
    qtext: "Are you strongly against prohibition of drugs and alcohol?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2d728f",
    color2: "#f49e4c",
    result1: function() { results("mises"); },
    result2: function() { results("coolidge"); }
  },

  q10: {
    qtext: "Which type of monarchy is more preferable?",
    btn1: "Absolute Monarchy",
    btn2: "Constitutional Monarchy",
    color1: "#593f62",
    color2: "#5f7995",
    result1: function() { results("voltaire"); },
    result2: function() { init_question(q11); }
  },

  q11: {
    qtext: "Where does knowledge primarily come from?",
    btn1: "The sense of reason",
    btn2: "Sensory Experience",
    color1: "#053b06",
    color2: "#0b5d1e",
    result1: function() { results("rosseau"); },
    result2: function() { results("locke"); }
  },

  q12: {
    qtext: "A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#023c40",
    color2: "#43281c",
    result1: function() { init_question(q13); },
    result2: function() { init_question(q14); }
  },

  q13: {
    qtext: "Would it preferable if more people voluntarily gave charity to the unfortunate?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2a9d8f",
    color2: "#e9c46a",
    result1: function() { results("aynrand"); },
    result2: function() { init_question(q15); }
  },

  q14: {
    qtext: "Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2e2532",
    color2: "#4c6085",
    result1: function() { },
    result2: function() { }
  },

  q15: {
    qtext: "What is the best justification for the importance of liberty?",
    btn1: "Liberty is vital for an efficient society",
    btn2: "People have inalienable rights that should not be infringed upon",
    color1: "#2a9d8f",
    color2: "#e9c46a",
    result1: function() { init_question(q16); },
    result2: function() { init_question(q17); }
  },

  q16: {
    qtext: "Is the existence of voluntary slavery possible?",
    btn1: "Impossible; it is an oxymoron",
    btn2: "It is possible through a contract",
    color1: "#918868",
    color2: "#347fc4",
    result1: function() { results("milton"); },
    result2: function() { results("nozick"); }
  },

}
