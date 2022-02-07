const questions = {
  q01: {
    qtext: "All crimes that are victimless, like drug consumption, are not crimes.",
    btn: ["Agree", "Disagree"],
    color: ["#3772ff", "#df2935"],
    nextq: ["q12", "q02"],
    results: ["none", "none"],
    prevq: "none"
  },

  q02: {
    qtext: "Are monarchies contradictory to the principles of freedom and liberty?",
    btn: ["Yes, they are", "No, not necessarily"],
    color: ["#595959", "#31081f"],
    nextq: ["q03", "q10"],
    results: ["none", "none"],
    prevq: "q01"
  },

  q03: {
    qtext: "Within a federal state, what should be the relationship between the federal government of a country, and its subdivisions?",
    btn: ["The Federal Government should be subsurvient to its subdivisions", "The Federal Government should have the ultimate authority"],
    color: ["#0f084b", "#006ba6"],
    nextq: ["none", "q04"],
    results: ["antifed", "none"],
    prevq: "q02"
  },

  q04: {
    qtext: "Ideally, how powerful should the central government be?",
    btn: ["Strong, in order to promote national unity", "Relatively weak, with limited power"],
    color: ["#0f084b", "#006ba6"],
    nextq: ["none", "q05"],
    results: ["hamilton", "none"],
    prevq: "q03"
  },

  q05: { //Buggy
    qtext: "What should the economy primarily focus on?",
    btn: ["Agriculture", "Industry"],
    color: ["#f2cd5d", "#6c7d47"],
    nextq: ["none", "q06"],
    results: ["jeffersonian", "none"],
    prevq: "q04"
  },

  q06: {
    qtext: "Land should not be privately owned.",
    btn: ["Agree", "Disagree"],
    color: ["#3e5641", "#a24936"],
    nextq: ["none", "q07"],
    results: ["georgism", "none"],
    prevq: "q05",
  },

  q07: {
    qtext: "How can the inherent value of a product be determined?",
    btn: ["By a sum of labor, profits, and expenditures", "It cannot be; value is subjective"],
    color: ["#5398be", "#dea54b"],
    nextq: ["none", "q08"],
    results: ["adamsmith", "none"],
    prevq: "q06"
  },

  q08: {
    qtext: "Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?",
    btn: ["Generally, yes", "No, in most, if not all cases"],
    color: ["#683257", "#716f71"],
    nextq: ["none", "q09"],
    results: ["goldwater", "none"],
    prevq: "q07"
  },

  q09: {
    qtext: "Are you against the prohibition of drugs and alcohol?",
    btn: ["Yes", "No"],
    color: ["#2d728f", "#f49e4c"],
    nextq: ["none", "none"],
    results: ["mises", "coolidge"],
    prevq: "q08"
  },

  q10: {
    qtext: "Which type of monarchy is more preferable?",
    btn: ["Absolute Monarchy", "Constitutional Monarchy"],
    color: ["#593f62", "#5f7995"],
    nextq: ["none", "q11"],
    results: ["voltaire", "none"],
    prevq: "q02"
  },

  q11: { //Buggy
    qtext: "What should be the primary source of knowledge?",
    btn: ["Rational Thinking", "Sensory Experience"],
    color: ["#053b06", "#0b5d1e"],
    nextq: ["none", "none"],
    results: ["rosseau", "locke"],
    prevq: "q10"
  },

  q12: {
    qtext: "A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.",
    btn: ["Agree", "Disagree"],
    color: ["#023c40", "#43281c"],
    nextq: ["q13", "q14"],
    results: ["none", "none"],
    prevq: "q01"
  },

  q13: {
    qtext: "Would it preferable if more people voluntarily gave charity to the unfortunate?",
    btn: ["Yes", "No"],
    color: ["#2a9d8f", "#e9c46a"],
    nextq: ["q15", "none"],
    results: ["none", "aynrand"],
    prevq: "q12"
  },

  q14: {
    qtext: "Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?",
    btn: ["Yes", "No"],
    color: ["#2e2532", "#4c6085"],
    nextq: ["none", "q21"],
    results: ["agorism", "none"],
    prevq: "q12"
  },

  q15: {
    qtext: "What is the best justification for the importance of liberty?",
    btn: ["Liberty is vital for an efficient society", "People have inalienable rights that should not be infringed upon"],
    color: ["#2a9d8f", "#e9c46a"],
    nextq: ["q16", "q17"],
    results: ["none", "none"],
    prevq: "q13"
  },

  q16: {
    qtext: "Is the existence of voluntary slavery possible?",
    btn: ["No, it is an oxymoron", "Yes, it is possible through a contract"],
    color: ["#918868", "#347fc4"],
    nextq: ["none", "none"],
    results: ["mfriedman", "nozick"],
    prevq: "q15"
  },

  q17: {
    qtext: "What is your position on cultural issues?",
    btn: ["Conservative", "Progressive"],
    color: ["#29335c", "#7da64e"],
    nextq: ["q18", "none"],
    results: ["none", "garyjohnson"],
    prevq: "q15"
  },

  q18: {
    qtext: "What is your opinion on capital punishment (the death penalty)?",
    btn: ["It should be used for some crimes", "It should be abolished"],
    color: ["#463f3a", "#c36346"],
    nextq: ["none", "q19"],
    results: ["korwin", "none"],
    prevq: "q17"
  },

  q19: {
    qtext: "In most, if not all cases, foreign intervention is wrong if it's not defensive.",
    btn: ["Agree", "Disagree"],
    color: ["#f0c808", "#f44174"],
    nextq: ["q20", "none"],
    results: ["none", "randpaul"],
    prevq: "q18"
  },

  q20: {
    qtext: "In the short term, should immigration be expanded?",
    btn: ["Yes", "No"],
    color: ["#59c9a5", "#1a8fe3"],
    nextq: ["none", "none"],
    results: ["amash", "ronpaul"],
    prevq: "q19"
  },

  q21: {
    qtext: "Which label do you self-identify more with?",
    btn: ["Anarchist, without adjectives", "Anarcho-Capitalist"],
    color: ["#242423", "#d39e0d"],
    nextq: ["none", "q22"],
    results: ["malice", "none"],
    prevq: "q14"
  },

  q22: {
    qtext: "Ideally, what should be done to the state?",
    btn: ["Turn it into a voluntary government", "Completely abolish it"],
    color: ["#7a7d7d", "#565254"],
    nextq: ["none", "q23"],
    results: ["voluntaryism", "none"],
    prevq: "q21"
  },

  q23: {
    qtext: "What should be the primary reason for the aboolition of the state?",
    btn: ["A statist society is inefficient", "The existence of the state is unethical"],
    color: ["#5c826a", "#9e8e31"],
    nextq: ["none", "q24"],
    results: ["dfriedman", "none"],
    prevq: "q22"
  },

  q24: {
    qtext: "Does a fetus posses the natural rights that humans have?",
    btn: ["Yes", "No"],
    color: ["#222e50", "#007991"],
    nextq: ["q25", "none"],
    results: ["none", "rothbard"],
    prevq: "q23"
  },

  q25: {
    qtext: "Does a mother have the right to \"evict\" a fetus out of her womb, even if the fetus might not survive as a result?",
    btn: ["Yes", "No"],
    color: ["#29524a", "#aa8974"],
    nextq: ["block", "none"],
    results: ["none", "q26"],
    prevq: "q24"
  },

  q26: {
    qtext: "Which political system is the lesser evil?",
    btn: ["Absolute Monarchy", "Liberal Democracy"],
    color: ["#5f0f40", "#0f4c5c"],
    nextq: ["none", "none"],
    results: ["hoppe", "woods"],
    prevq: "q25"
  }
};
