const questions = {
  victimless_crimes: {
    qtext: "All crimes that are victimless, such as drug consumption, are not crimes.",
    btn: ["Agree", "Disagree"],
    color: ["#3772ff", "#df2935"],
    nextq: ["statism", "govt_system"],
    results: ["none", "none"],
    prevq: "none"
  },

  govt_system: {
    qtext: "Which system of government is more compatible with the principles of liberty?",
    btn: ["Monarchy", "Republicanism / Democracy"],
    color: ["#595959", "#31081f"],
    nextq: ["monarchy", "federalism"],
    results: ["none", "none"],
    prevq: "victimless_crimes"
  },

  federalism: {
    qtext: "In a federal state, what should be the relationship between the federal government of a country and its subdivisions?",
    btn: ["The Federal Government should be subsurvient to its subdivisions", "The Federal Government should have the ultimate authority"],
    color: ["#0f084b", "#006ba6"],
    nextq: ["none", "govt_power"],
    results: ["antifed", "none"],
    prevq: "govt_system"
  },

  govt_power: {
    qtext: "Ideally, how powerful should the central government be?",
    btn: ["Strong, in order to promote national unity", "Relatively weak, with limited power"],
    color: ["#0f084b", "#006ba6"],
    nextq: ["none", "economy"],
    results: ["hamilton", "none"],
    prevq: "federalism"
  },

  economy: {
    qtext: "What should the economy primarily focus on?",
    btn: ["Agriculture", "Industry"],
    color: ["#f2cd5d", "#6c7d47"],
    nextq: ["none", "land"],
    results: ["jeffersonian", "none"],
    prevq: "govt_power"
  },

  land: {
    qtext: "Land should not be a commodity to be bought and sold.",
    btn: ["Agree", "Disagree"],
    color: ["#3e5641", "#a24936"],
    nextq: ["none", "value"],
    results: ["georgism", "none"],
    prevq: "economy",
  },

  value: {
    qtext: "How can the objective value of goods be determined?",
    btn: ["By a sum of labor, profits, and expenditures", "It cannot be; value is subjective"],
    color: ["#5398be", "#dea54b"],
    nextq: ["none", "intervention"],
    results: ["adamsmith", "none"],
    prevq: "land"
  },

  intervention: {
    qtext: "Is it ideal for countries to intervene in other countries, in order to protect and preserve democracy abroad?",
    btn: ["Generally, yes", "No, in most, if not all cases"],
    color: ["#683257", "#716f71"],
    nextq: ["none", "prohibition"],
    results: ["goldwater", "none"],
    prevq: "value"
  },

  prohibition: {
    qtext: "Are you against both the prohibition of drugs and alcohol?",
    btn: ["Yes", "No"],
    color: ["#2d728f", "#f49e4c"],
    nextq: ["none", "none"],
    results: ["mises", "coolidge"],
    prevq: "intervention"
  },

  monarchy: {
    qtext: "Which type of monarchy is more preferable?",
    btn: ["Absolute Monarchy", "Constitutional Monarchy"],
    color: ["#593f62", "#5f7995"],
    nextq: ["none", "knowledge"],
    results: ["voltaire", "none"],
    prevq: "govt_system"
  },

  knowledge: {
    qtext: "What should be the primary source of knowledge?",
    btn: ["Reason", "Sensory Experience"],
    color: ["#053b06", "#0b5d1e"],
    nextq: ["none", "none"],
    results: ["rosseau", "locke"],
    prevq: "monarchy"
  },

  statism: {
    qtext: "A state, defined as a monopoly on violence, should exist, so that the rights of life, liberty, and property can be protected.",
    btn: ["Agree", "Disagree"],
    color: ["#023c40", "#43281c"],
    nextq: ["charity", "counter_economics"],
    results: ["none", "none"],
    prevq: "victimless_crimes"
  },

  charity: {
    qtext: "Would it preferable if more people voluntarily gave charity to the unfortunate?",
    btn: ["Yes", "No"],
    color: ["#2a9d8f", "#e9c46a"],
    nextq: ["ethics1", "none"],
    results: ["none", "aynrand"],
    prevq: "statism"
  },

  counter_economics: {
    qtext: "Is the usage of counter-economics (i.e. black and gray markets) the best method for a non-violet revolution against the state?",
    btn: ["Yes", "No"],
    color: ["#2e2532", "#4c6085"],
    nextq: ["none", "capitalist"],
    results: ["agorism", "none"],
    prevq: "statism"
  },

  ethics1: {
    qtext: "What is the best justification for the importance of liberty?",
    btn: ["Liberty is vital for an efficient society", "People have inalienable rights that should not be infringed upon"],
    color: ["#2a9d8f", "#e9c46a"],
    nextq: ["voluntary_slavery", "social_justice"],
    results: ["none", "none"],
    prevq: "charity"
  },

  voluntary_slavery: {
    qtext: "Is the existence of voluntary slavery possible?",
    btn: ["No, it is an oxymoron", "Yes, it is possible through a contract"],
    color: ["#918868", "#347fc4"],
    nextq: ["none", "none"],
    results: ["mfriedman", "nozick"],
    prevq: "ethics1"
  },

  social_justice: {
    qtext: "Is social justice a core part of Libertarianism?",
    btn: ["Yes", "No"],
    color: ["#29335c", "#7da64e"],
    nextq: ["capital_punishment", "none"],
    results: ["none", "garyjohnson"],
    prevq: "ethics1"
  },

  capital_punishment: {
    qtext: "Do you support the usage of capital punishment on certain crimes?",
    btn: ["Yes", "No"],
    color: ["#463f3a", "#c36346"],
    nextq: ["none", "defensive_war"],
    results: ["korwin", "none"],
    prevq: "social_justice"
  },

  defensive_war: {
    qtext: "In most, if not all cases, foreign intervention is wrong if it's not defensive.",
    btn: ["Agree", "Disagree"],
    color: ["#f0c808", "#f44174"],
    nextq: ["immigration", "none"],
    results: ["none", "randpaul"],
    prevq: "capital_punishment"
  },

  immigration: {
    qtext: "In the short term, should immigration be expanded?",
    btn: ["Yes", "No"],
    color: ["#59c9a5", "#1a8fe3"],
    nextq: ["none", "none"],
    results: ["amash", "ronpaul"],
    prevq: "defensive_war"
  },

  capitalist: {
    qtext: "Are you a Capitalist?",
    btn: ["Yes", "No"],
    color: ["#d39e0d", "#242423"],
    nextq: ["anarchism", "none"],
    results: ["none", "malice"],
    prevq: "counter_economics"
  },

  voluntary_state: {
    qtext: "Ideally, what should be done to the state?",
    btn: ["Turn it into a voluntary government", "Completely abolish it"],
    color: ["#7a7d7d", "#565254"],
    nextq: ["none", "anarchism"],
    results: ["voluntaryism", "none"],
    prevq: "capitalist"
  },

  anarchism: {
    qtext: "Do you self-identify as an Anarchist?",
    btn: ["Yes", "No"],
    color: ["#d39e0d", "#242423"],
    nextq: ["ethics2", "none"],
    results: ["none", "autarchism"],
    prevq: "voluntary_state"
  },

  ethics2: {
    qtext: "What should be the primary reason for the abolition of the state?",
    btn: ["Stateless societies are more efficient", "The existence of the state violates natural rights"],
    color: ["#5c826a", "#9e8e31"],
    nextq: ["none", "abortion"],
    results: ["dfriedman", "none"],
    prevq: "voluntary_state"
  },

  abortion: {
    qtext: "Does a fetus posses the natural rights that humans have?",
    btn: ["Yes", "No"],
    color: ["#222e50", "#007991"],
    nextq: ["blockian_proviso", "none"],
    results: ["none", "rothbard"],
    prevq: "ethics2"
  },

  blockian_proviso: {
    qtext: "If a piece of property is necessary for people to use in order to get to a piece of unowned land, do people have a right to cross over that property?",
    btn: ["Yes", "No"],
    color: ["#29524a", "#aa8974"],
    nextq: ["block", "none"],
    results: ["none", "covenant_communities"],
    prevq: "abortion"
  },

  covenant_communities: {
    qtext: "Should society consist of a variety of voluntary 'covenant communities' (communities with agreements that define the rules of that community) ?",
    btn: ["Absolute Monarchy", "Liberal Democracy"],
    color: ["#5f0f40", "#0f4c5c"],
    nextq: ["none", "none"],
    results: ["hoppe", "woods"],
    prevq: "blockian_proviso"
  }
};
