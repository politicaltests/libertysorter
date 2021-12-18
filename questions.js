var questions = {

  q01: {
    qtext: "All crimes that are victimless, like drug consumption, are not crimes.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#3772ff",
    color2: "#df2935",
    prevq: "none",
    nextq: ["q12", "q02"],
    results: ["none", "none"]
  },

  q02: {
    qtext: "Are monarchies contradictory to the principles of freedom and liberty?",
    btn1: "Yes, they are",
    btn2: "No, not necessarily",
    color1: "#595959",
    color2: "#31081f",
    prevq: "q01",
    nextq: ["q03", "q10"],
    results: ["none", "none"]
  },

  q03: {
    qtext: "Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?",
    btn1: "The Federal Government should be subsurvient to its subdivisions",
    btn2: "The Federal Government should have the ultimate authority",
    color1: "#0f084b",
    color2: "#006ba6",
    prevq: "q02",
    nextq: ["none", "q04"],
    results: ["antifed", "none"]
  },

  q04: {
    qtext: "Ideally, how powerful should the central government be?",
    btn1: "Strong, in order to promote national unity",
    btn2: "Relatively weak, with limited power",
    color1: "#0f084b",
    color2: "#006ba6",
    prevq: "q03",
    nextq: ["none", "q05"],
    results: ["hamilton", "none"]
  },

  q05: {
    qtext: "What should the economy primarily focus on?",
    btn1: "Agriculture",
    btn2: "Industry",
    color1: "#f2cd5d",
    color2: "#6c7d47",
    prevq: "q04",
    nextq: ["none", "q06"],
    results: ["jeffersonian", "none"]
  },

  q06: {
    qtext: "Land should not be privately owned.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#3e5641",
    color2: "#a24936",
    prevq: "q05",
    nextq: ["none", "q07"],
    results: ["georgism", "none"]
  },

  q07: {
    qtext: "How can the inherent value of a product be determined?",
    btn1: "By a sum of labor, profits, and expenditures",
    btn2: "It cannot be; value is subjective",
    color1: "#5398be",
    color2: "#dea54b",
    prevq: "q06",
    nextq: ["none", "q08"],
    results: ["adamsmith", "none"]
  },

  q08: {
    qtext: "Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?",
    btn1: "Generally, yes",
    btn2: "No, in most, if not all cases",
    color1: "#683257",
    color2: "#716f71",
    prevq: "q07",
    nextq: ["none", "q09"],
    results: ["goldwater", "none"]
  },

  q09: {
    qtext: "Are you strongly against prohibition of drugs and alcohol?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2d728f",
    color2: "#f49e4c",
    prevq: "q08",
    nextq: ["none", "none"],
    results: ["mises", "coolidge"]
  },

  q10: {
    qtext: "Which type of monarchy is more preferable?",
    btn1: "Absolute Monarchy",
    btn2: "Constitutional Monarchy",
    color1: "#593f62",
    color2: "#5f7995",
    prevq: "q02",
    nextq: ["none", "q11"],
    results: ["voltaire", "none"]
  },

  q11: {
    qtext: "Where does knowledge primarily come from?",
    btn1: "The sense of reason",
    btn2: "Sensory Experience",
    color1: "#053b06",
    color2: "#0b5d1e",
    prevq: "q10",
    nextq: ["none", "none"],
    results: ["rosseau", "locke"]
  },

  q12: {
    qtext: "A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#023c40",
    color2: "#43281c",
    prevq: "q01",
    nextq: ["q13", "q14"],
    results: ["none", "none"]
  },

  q13: {
    qtext: "Would it preferable if more people voluntarily gave charity to the unfortunate?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2a9d8f",
    color2: "#e9c46a",
    prevq: "q12",
    nextq: ["q15", "none"],
    results: ["none", "aynrand"]
  },

  q14: {
    qtext: "Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?",
    btn1: "Yes",
    btn2: "No",
    color1: "#2e2532",
    color2: "#4c6085",
    prevq: "q12",
    nextq: ["none", "q21"],
    results: ["agorism", "none"]
  },

  q15: {
    qtext: "What is the best justification for the importance of liberty?",
    btn1: "Liberty is vital for an efficient society",
    btn2: "People have inalienable rights that should not be infringed upon",
    color1: "#2a9d8f",
    color2: "#e9c46a",
    prevq: "q13",
    nextq: ["q16", "q17"],
    results: ["none", "none"]
  },

  q16: {
    qtext: "Is the existence of voluntary slavery possible?",
    btn1: "Impossible; it is an oxymoron",
    btn2: "It is possible through a contract",
    color1: "#918868",
    color2: "#347fc4",
    prevq: "q15",
    nextq: ["none", "none"],
    results: ["mfriedman", "nozick"]
  },

  q17: {
    qtext: "What is your position on cultural issues?",
    btn1: "Conservative",
    btn2: "Progressive",
    color1: "#29335c",
    color2: "#7da64e",
    prevq: "q15",
    nextq: ["q18", "none"],
    results: ["none", "garyjohnson"]
  },

  q18: {
    qtext: "What is your opinion on capital punishment (the death penalty)?",
    btn1: "It should be used for some crimes",
    btn2: "It should be abolished",
    color1: "#463f3a",
    color2: "#c36346",
    prevq: "q17",
    nextq: ["none", "q19"],
    results: ["korwin", "none"]
  },

  q19: {
    qtext: "In most, if not all cases, foreign intervention is wrong, if it's not defensive.",
    btn1: "Agree",
    btn2: "Disagree",
    color1: "#f0c808",
    color2: "#f44174",
    prevq: "q18",
    nextq: ["q20", "none"],
    results: ["none", "randpaul"]
  },

  q20: {
    qtext: "In the current system, should immigration be expanded?",
    btn1: "Yes",
    btn2: "No",
    color1: "#59c9a5",
    color2: "#1a8fe3",
    prevq: "q19",
    nextq: ["none", "none"],
    results: ["amash", "ronpaul"]
  },

  q21: {
    qtext: "Which label do you self-identify more with?",
    btn1: "Anarchist, without adjectives",
    btn2: "Anarcho-Capitalist",
    color1: "#242423",
    color2: "#d39e0d",
    nextq: ["none", "q22"],
    results: ["malice", "none"]
  },

  q22: {
    qtext: "Ideally, what should be done to the state?",
    btn1: "Remove its monopoly on violence and make it voluntary",
    btn2: "Completely dismantle and abolish it",
    color1: "#7a7d7d",
    color2: "#565254",
    prevq: "q21",
    nextq: ["none", "q23"],
    results: ["voluntaryism", "none"]
  },

  q23: {
    qtext: "What should be the primary reason for the aboolition of the state?",
    btn1: "A statist society is inefficient",
    btn2: "The state, by definition, violates the rights of its subjects",
    color1: "#5c826a",
    color2: "#9e8e31",
    prevq: "q22",
    nextq: ["none", "q24"],
    results: ["dfriedman", "none"]
  },

  q24: {
    qtext: "Does a fetus posses the natural rights that humans have?",
    btn1: "Yes",
    btn2: "No",
    color1: "#222e50",
    color2: "#007991",
    prevq: "q23",
    nextq: ["q25", "none"],
    results: ["none", "rothbard"]
  },

  q25: {
    qtext: "Does a mother have the right to \"evict\" a fetus out of her womb, even if the fetus might not survive as a result?",
    btn1: "Yes",
    btn2: "No",
    color1: "#29524a",
    color2: "#aa8974",
    prevq: "q24",
    nextq: ["block", "none"],
    results: ["none", "q26"]
  },

  q26: {
    qtext: "Which political system is less worse?",
    btn1: "Absolute Monarchy",
    btn2: "Liberal Democracy",
    color1: "#5f0f40",
    color2: "#0f4c5c",
    prevq: "q25",
    nextq: ["none", "none"],
    results: ["hoppe", "woods"]
  }

};
