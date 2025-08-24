const scenes = {
  /* ======== CORE: OPENING & EARLY FLOW (1–4) ======== */
  scene1: {
    type: "text",
    image: "images/1.png",
    text: "Today’s acquisition review — we need a concise go/no-go by 17:00. Preliminary notes: a possible claim or liability on title that could limit use, a long-standing tenancy with unusual indexation, and a plant-room materials issue the seller calls “encapsulated.” While the schedule is tight, we should nevertheless aim for precise, evidence-based wording. Which strand do you want to tackle first to build your recommendation?",
    choices: [
      { text: "Start with registry & title inconsistencies", next: "scene2_quiz" },
      { text: "Start with tenancy & cashflow sensitivities", next: "scene2_quiz" },
      { text: "Start with technical/environmental signals", next: "scene2_quiz" }
    ]
  },

  scene2_quiz: {
    type: "survivor-quiz",
    text: "Quick pulse check under time pressure. Choose the best option. You have 3 lives.",
    lives: 3,
    timer: 75,
    questions: [
      {
        text: "Before completion, the seller ___ provide evidence that all fire safety tests have been carried out.",
        options: ["must", "should", "may"],
        correct: 0,
        explain: "Obligation before completion is typically framed with “must”."
      },
      {
        text: "The title report is ___ Land Registry standards.",
        options: ["in line with", "according to", "in accordance with"],
        correct: 2,
        explain: "Formal legal phrasing prefers “in accordance with”."
      },
      {
        text: "We propose ___ the closing until the planning certificate arrives.",
        options: ["to defer", "deferring", "for deferring"],
        correct: 1,
        explain: "Gerund after “propose”: propose deferring."
      },
      {
        text: "If the plant-room insulation might be friable, we ___ commission a specialist survey.",
        options: ["must", "should", "might"],
        correct: 1,
        explain: "Advisory obligation under uncertainty → “should”."
      },
      {
        text: "Please set out the variance ___ the plans and the registry entry.",
        options: ["between", "among", "of"],
        correct: 0,
        explain: "Variance between A and B."
      }
    ],
    next: "scene3_hotspots"
  },

  /* Rewritten Scene 3 (no image) */
  scene3_hotspots: {
    type: "fill-in-the-blank",
    text: "Language & risk note drafting (no image). Choose the best options to complete the memo line. Focus: gerund vs infinitive, precise prepositions, and adjective order.",
    sentence: [
      "We","propose","__________","the","closing","until","the","certificate","of","occupancy","is","issued;","please","set","out","the","variance","__________","the","plans","and","the","registry,","and","prepare","a","short,","__________","note","for","the","CFO","."
    ],
    blanks: [2, 17, 27],
    options: [
      "deferring","to","defer","for",
      "between","among",
      "evidence-based","evidenced"
    ],
    correct: ["deferring","between","evidence-based"],
    next: "scene4_buckets"
  },

  scene4_buckets: {
    type: "buckets",
    text: "Drag each item into the correct folder. Watch collocations as you sort: evidence of compliance; variation to the lease; request for information.",
    buckets: [
      { id: "title", label: "Title & Legal", hint: "Deeds, rights, boundaries, certificates of occupancy." },
      { id: "leasing", label: "Leasing", hint: "Guarantees, service charges, indexation, estoppels." },
      { id: "technical", label: "Technical / Environmental", hint: "Surveys, plant rooms, noise, environmental reports." },
      { id: "closing", label: "Corporate / Closing", hint: "Statements, minutes, checklists, prorations." }
    ],
    tokens: [
      "Surveyor's boundary overlay",
      "Historic right of way note",
      "Certificate of occupancy application",
      "Tenant guarantee letter",
      "Service charge reconciliation draft",
      "Rent indexation schedule",
      "Noise complaint log (Mar–May)",
      "Plant room insulation photo",
      "Phase I environmental summary",
      "Board minutes: facade reserve",
      "Draft completion statement",
      "Closing checklist (v2)"
    ],
    answers: {
      title: [
        "Surveyor's boundary overlay",
        "Historic right of way note",
        "Certificate of occupancy application"
      ],
      leasing: [
        "Tenant guarantee letter",
        "Service charge reconciliation draft",
        "Rent indexation schedule"
      ],
      technical: [
        "Noise complaint log (Mar–May)",
        "Plant room insulation photo",
        "Phase I environmental summary"
      ],
      closing: [
        "Board minutes: facade reserve",
        "Draft completion statement",
        "Closing checklist (v2)"
      ]
    },
    allowExtraInBank: false,
    showAnswerOnWrong: true,
    next: "scene5_voicemail"
  },

  /* ======== SCENE 5 VOICEMAIL (AUDIO, NO IMAGE) ======== */
  scene5_voicemail: {
    type: "interaction-audio-mc",
    text: "Voicemail from **Daniel Park (Seller’s Representative)**. Tap Play, then choose the most professional callback stance.",
    audio: "audio/1.mp3",
    options: [
      "Acknowledge receipt; request encapsulation test scope & dates; ask for schedule of guarantees; propose a call window; set a response deadline.",
      "Push to waive retention and proceed; promise to sort documents after completion.",
      "Park the issue pending legal with no timeline or requests."
    ],
    correct: 0,
    next: "scene6_email"
  },

  /* ======== SCENE 6: EMAIL MICRO-EDIT (FORMAL EMAIL) ======== */
scene6_email: {
    type: "fill-in-the-blank",
    image: "images/2.png",
    text: "Email to Seller’s Counsel (cc **Daniel Park**). Choose the most precise particles to complete the draft.",
    sentence: [
      "Subject:","Due","diligence","—","outstanding","items","and","next","steps","(by","Friday","17:00)","\n\n",
      "Further","to","your","voicemail,","we","__________","your","providing","the","encapsulation","test","scope","and","dates","__________","our","checklist.","We","also","__________","deferring","completion","pending","these","items","or","confirming","escrow","wording.","Please","respond","__________","Friday","17:00.","\n\n",
      "Kind","regards,","\n","Valerie","Sylvain"
    ],
    blanks: [18, 27, 32, 44],
    options: [
      "would appreciate","demand","in accordance with","according to","recommend","recommend to","by","within"
    ],
    correct: ["would appreciate","in accordance with","recommend","by"],
    next: "scene7_q1"
  },
  /* ======== SCENE 7: AUDIO GATE (CHAINED, NO IMAGES) ======== */
  /* Q1 — Alex Chen (CFO) */
/* ======== SCENE 7 AUDIO GATE — SHUFFLED & CORRECTED ROUTING ======== */

/* Q1 — Alex Chen (CFO) */
scene7_q1: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Alex Chen (CFO)**. Tap Play, then choose the best summary response (agenda-first, concise, no blame).",
  audio: "audio/2.mp3",
  shuffleOptions: true,
  options: [
    "Minimize issues; suggest proceeding regardless and tidying documentation post-completion.",
    "Escalate tone; insist that seller is obstructive and halt all work until further notice.",
    "Propose a two-sentence plan: (1) risks grouped (title, tenancy, plant room), (2) owners & deadlines for each item before 17:00."
  ],
  correct: 2,
  nextOnCorrect: "scene7_q2_s1",
  nextOnWrong: "scene7_q2_s0",
  next: "scene7_q2_s0"
},

/* Q2 — Laura Bennett (Legal), path with 1 correct so far */
scene7_q2_s1: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Laura Bennett (Legal Counsel)**. Tap Play, then choose firm-but-courteous wording to keep momentum.",
  audio: "audio/3.mp3",
  shuffleOptions: true,
  options: [
    "“We might look at documents later if time allows; for now we’ll take your word for it.”",
    "“Send anything you have; there’s no set format or deadline.”",
    "“We will need evidence and cannot proceed without it; please furnish documents in accordance with our checklist.”"
  ],
  correct: 2,
  nextOnCorrect: "scene7_q3_s2",
  nextOnWrong: "scene7_q3_s1",
  next: "scene7_q3_s1"
},

/* Q2 — Laura Bennett (Legal), path with 0 correct so far */
scene7_q2_s0: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Laura Bennett (Legal Counsel)**. Tap Play, then choose firm-but-courteous wording to keep momentum.",
  audio: "audio/3.mp3",
  shuffleOptions: true,
  options: [
    "“Send anything you have; there’s no set format or deadline.”",
    "“We might look at documents later if time allows; for now we’ll take your word for it.”",
    "“We will need evidence and cannot proceed without it; please furnish documents in accordance with our checklist.”"
  ],
  correct: 2,
  nextOnCorrect: "scene7_q3_s1",
  nextOnWrong: "scene7_q3_s0",
  next: "scene7_q3_s0"
},

/* Q3 — Priya Singh (PM), path with 2 correct so far */
scene7_q3_s2: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Priya Singh (Project Manager)**. Tap Play, then choose the clearest action–owner–deadline line.",
  audio: "audio/4.mp3",
  shuffleOptions: true,
  options: [
    "“We’ll try to do everything at once; no need to specify timings.”",
    "“Someone should probably email the seller soon; we’ll figure out owners later.”",
    "“Legal to request encapsulation test scope & dates by 12:00 Thursday; Analyst to reconcile area discrepancy between plans and registry by EOD Friday.”"
  ],
  correct: 2,
  /* Branching based on performance — keep existing IDs */
  nextOnCorrect: "scene8A_followup",
  nextOnWrong: "scene8B_followup",
  next: "scene8B_followup"
},

/* Q3 — Priya Singh (PM), path with 1 correct so far */
scene7_q3_s1: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Priya Singh (Project Manager)**. Tap Play, then choose the clearest action–owner–deadline line.",
  audio: "audio/4.mp3",
  shuffleOptions: true,
  options: [
    "“We’ll try to do everything at once; no need to specify timings.”",
    "“Legal to request encapsulation test scope & dates by 12:00 Thursday; Analyst to reconcile area discrepancy between plans and registry by EOD Friday.”",
    "“Someone should probably email the seller soon; we’ll figure out owners later.”"
  ],
  correct: 1,
  nextOnCorrect: "scene8B_followup",
  nextOnWrong: "scene8C_remedial",
  next: "scene8C_remedial"
},

/* Q3 — Priya Singh (PM), path with 0 correct so far */
scene7_q3_s0: {
  type: "interaction-audio-mc",
  text: "Internal sync — **Priya Singh (Project Manager)**. Tap Play, then choose the clearest action–owner–deadline line.",
  audio: "audio/4.mp3",
  shuffleOptions: true,
  options: [
    "“Someone should probably email the seller soon; we’ll figure out owners later.”",
    "“We’ll try to do everything at once; no need to specify timings.”",
    "“Legal to request encapsulation test scope & dates by 12:00 Thursday; Analyst to reconcile area discrepancy between plans and registry by EOD Friday.”"
  ],
  correct: 2,
  nextOnCorrect: "scene8B_followup",
  nextOnWrong: "scene8C_remedial",
  next: "scene8C_remedial"
},

/* ======== SCENE 8 BRANCHES — PHRASE-PART SCRAMBLES (genuinely scrambled order) ======== */

/* 8A — High path: Executive email scramble to CFO (image OK) */
scene8A_followup: {
  type: "scramble",
  image: "images/3.png",
  text: "Executive email to **Alex Chen (CFO)** — assemble a concise two-sentence update (tone: courteous, precise).",
  /* SCRAMBLE order deliberately mixed (not aligned to 'correct') */
  scramble: [
    "clarify",
    "the right of way,",
    "and reconcile",
    "the area discrepancy.",
    "We will request",
    "evidence of encapsulation,",
    "we recommend",
    "pending documents",
    "or agreeing escrow wording.",
    "Owners and deadlines are set;",
    "deferring completion"
  ],
  /* CORRECT sequence */
  correct: [
    "We will request",
    "evidence of encapsulation,",
    "clarify",
    "the right of way,",
    "and reconcile",
    "the area discrepancy.",
    "Owners and deadlines are set;",
    "we recommend",
    "deferring completion",
    "pending documents",
    "or agreeing escrow wording."
  ],
  next: "scene9_dashboard"
},

/* 8B — Medium path: Audio-prompted interaction scramble (NO image) */
scene8B_followup: {
  type: "interaction-scramble",
  text: "Brief from **Priya Singh (PM)** — reconstruct a clear, polite email line (phrase-level, object parts separated).",
  audio: "audio/5.mp3",
  /* SCRAMBLE order deliberately mixed */
  scramble: [
    "a short executive note",
    "Please request",
    "the area discrepancy",
    "between the plans and the registry,",
    "and propose",
    "by EOD Friday.",
    "the encapsulation test scope and dates,",
    "reconcile"
  ],
  /* CORRECT sequence */
  correct: [
    "Please request",
    "the encapsulation test scope and dates,",
    "reconcile",
    "the area discrepancy",
    "between the plans and the registry,",
    "and propose",
    "a short executive note",
    "by EOD Friday."
  ],
  next: "scene9_dashboard"
},

/* 8C — Remedial path: keep FIB but FIX blank indexes alignment */
scene8C_remedial: {
  type: "fill-in-the-blank",
  image: "images/4.png",
  text: "Formal email fixes — select the most appropriate particles.",
  sentence: [
    "Further","to","your","message,","we","__________","your","providing","the","documents","__________","our","checklist.","For","the","title","point,","please","clarify","the","historic","right","__________","way.","We","__________","deferring","completion","pending","the","above","items","."
  ],
  /* Fixed: indices now point to the actual “__________” tokens */
  blanks: [5, 10, 22, 25],
  options: [
    "would appreciate","in accordance with","of","recommend","recommend to","according to","by"
  ],
  correct: ["would appreciate","in accordance with","of","recommend"],
  next: "scene9_dashboard"
},


  /* ======== SCENE 9: DASHBOARD SUMMARY ======== */
  scene9_dashboard: {
    type: "dashboard",
    text: "Mini-dashboard — interpret key indicators and confirm you’re ready to proceed.",
    widgets: [
      { kind: "kpi", label: "NOI impact (est.)", value: "-2.4%" },
      { kind: "kpi", label: "Capex buffer (est.)", value: "€250k" },
      { kind: "kpi", label: "Risk score (env./title)", value: "Medium" },
      {
        kind: "table",
        columns: ["Item", "Owner", "Deadline"],
        rows: [
          ["Encapsulation evidence", "Legal", "Thu 12:00"],
          ["Area discrepancy reconciliation", "Analyst", "Fri EOD"],
          ["Guarantee schedule check", "Leasing", "Fri 16:00"]
        ]
      }
    ],
    questions: [
      {
        text: "Which line best states a polite but firm deadline?",
        options: [
          "Please respond at your convenience.",
          "We would appreciate your response by Friday 17:00.",
          "It’d be great to hear back sometime next week."
        ],
        correct: 1
      }
    ],
    next: "scene10_router"
  },

  /* ======== SCENE 10: FORWARD-ONLY ROUTER (no restart/back) ======== */
  scene10_router: {
    type: "text",
    text: "Great stuff!Let's keep the momemtum going!",
    choices: [
      { text: "Continue", next: "scene11_internal_brief" }
    ]
  },

 


/* ===================== SCENE 11 HUB + FOCUS ===================== */
  scene11_internal_brief: {
    type: "text",
    image: "images/5.png",
    text: "It’s 14:45. By 17:00, Alex (CFO) needs a clean go/no-go with conditions to proceed. Which front do you push first?",
    choices: [
      { text: "Title & Access Risks (easement / encumbrance)", next: "scene11A_title_focus" },
      { text: "Leasing Instruments (guarantees / service charge)", next: "scene11B_leasing_focus" },
      { text: "Technical Evidence (encapsulation / testing)", next: "scene11C_technical_focus" }
    ]
  },

  scene11A_title_focus: {
    type: "text",
    text: "Focus set: Title & Access. Objective: confirm easement documentation and reconcile any encumbrance affecting the loading ramp.",
    choices: [
      { text: "Continue", next: "scene12_hangman_title" }
    ]
  },

  scene11B_leasing_focus: {
    type: "text",
    text: "Focus set: Leasing. Objective: confirm schedule of guarantees in force and resolve service charge allocation queries.",
    choices: [
      { text: "Continue", next: "scene12_hangman_leasing" }
    ]
  },

  scene11C_technical_focus: {
    type: "text",
    text: "Focus set: Technical. Objective: obtain encapsulation test scope and dates; align on any retention/escrow wording.",
    choices: [
      { text: "Continue", next: "scene12_hangman_technical" }
    ]
  },

  /* ===================== SCENE 12 HANGMAN (FOCUS-SPECIFIC) ===================== */
  scene12_hangman_title: {
    type: "hangman",
    hint: "A claim or liability on title that may limit use.",
    target: "encumbrance",
    maxWrong: 6,
    next: "scene13_scramble_title",
    onLoseNext: "scene12b_remedial_title"
  },

  scene12b_remedial_title: {
    type: "text",
    text: "Clarification: An encumbrance is a claim or liability on title that may limit use or transfer. Example: “The property is subject to an encumbrance affecting access.”",
    choices: [
      { text: "Continue", next: "scene13_scramble_title" }
    ]
  },

  scene12_hangman_leasing: {
    type: "hangman",
    hint: "Tenant-signed certificate confirming lease terms relied on by purchasers/lenders.",
    target: "estoppel",
    maxWrong: 6,
    next: "scene13_scramble_leasing",
    onLoseNext: "scene12b_remedial_leasing"
  },

  scene12b_remedial_leasing: {
    type: "text",
    text: "Clarification: An estoppel certificate confirms key lease terms so the tenant cannot later contradict them.",
    choices: [
      { text: "Continue", next: "scene13_scramble_leasing" }
    ]
  },

  scene12_hangman_technical: {
    type: "hangman",
    hint: "A method of sealing hazardous material to prevent fiber release.",
    target: "encapsulation",
    maxWrong: 6,
    next: "scene13_scramble_technical",
    onLoseNext: "scene12b_remedial_technical"
  },

  scene12b_remedial_technical: {
    type: "text",
    text: "Clarification: Encapsulation seals asbestos-containing material to prevent fiber release; evidence requires test scope and dates.",
    choices: [
      { text: "Continue", next: "scene13_scramble_technical" }
    ]
  },

  /* ===================== SCENE 13 SCRAMBLE (PHRASE-LEVEL, CHALLENGING BUT FAIR) ===================== */
  /* Title version — segmented object phrases; scramble order differs from correct */
  scene13_scramble_title: {
    type: "scramble",
    text: "Reconstruct a concise, formal action line for Title & Access (phrase-level scramble).",
    scramble: [
      "between the plans and the registry",
      "We will request",
      "the easement deed,",
      "and confirm conditions to proceed.",
      "reconcile the discrepancy"
    ],
    correct: [
      "We will request",
      "the easement deed,",
      "reconcile the discrepancy",
      "between the plans and the registry",
      "and confirm conditions to proceed."
    ],
    next: "scene14_conjugation_race"
  },

  /* Leasing version — include formal thanks; segmented object phrases */
  scene13_scramble_leasing: {
    type: "scramble",
    text: "Reconstruct a concise, formal action line for Leasing (phrase-level scramble).",
    scramble: [
      "Thank you for your prompt assistance.",
      "Please provide",
      "applied to rooftop equipment.",
      "the schedule of guarantees in force",
      "and clarify any service charge exclusions"
    ],
    correct: [
      "Please provide",
      "the schedule of guarantees in force",
      "and clarify any service charge exclusions",
      "applied to rooftop equipment.",
      "Thank you for your prompt assistance."
    ],
    next: "scene14_conjugation_race"
  },

  /* Technical version — split “in accordance with” and its object */
  scene13_scramble_technical: {
    type: "scramble",
    text: "Reconstruct a concise, formal action line for Technical (phrase-level scramble).",
    scramble: [
      "in accordance with",
      "before we recommend deferring completion.",
      "our checklist",
      "We would appreciate",
      "the encapsulation test scope and dates"
    ],
    correct: [
      "We would appreciate",
      "the encapsulation test scope and dates",
      "in accordance with",
      "our checklist",
      "before we recommend deferring completion."
    ],
    next: "scene14_conjugation_race"
  },

  /* ===================== SCENE 14 CONJUGATION RACE (OBLIGATION & CONDITIONS) ===================== */
  scene14_conjugation_race: {
    type: "conjugation-race",
    text: "Choose precise obligation/condition wording. Multiple correct variants may be accepted.",
    timerOverall: 75,
    showAnswerOnWrong: true,
    questions: [
      {
        prompt: "We ___ request documentary evidence of encapsulation.",
        answers: ["must","will","will need to"]
      },
      {
        prompt: "We ___ deferring completion pending evidence or agreeing escrow wording.",
        answers: ["recommend","propose"]
      },
      {
        prompt: "Guarantees currently ___ to be in force and provided in full.",
        answers: ["are confirmed","are warranted"]
      }
    ],
    next: "scene14_results"
  },
    /* NEW: results/continue scene so the player is pushed forward explicitly */
  scene14_results: {
    type: "text",
    text: "Nice work. Your phrasing choices have been recorded. Continue to select your next front.",
    choices: [
      { text: "Continue", next: "scene15_branch_router" }
    ]
  },

  /* ===================== SCENE 15 FORWARD-ONLY ROUTER (FOCUS + SCORE TO PATHS) ===================== */
  scene15_branch_router: {
    type: "text",
    text: "Based on your focus and progress, choose the next front to lead.",
    choices: [
      { text: "Proceed with Title & Access (conditions)", next: "scene16_title_path_intro" },
      { text: "Proceed with Leasing (instruments)", next: "scene16_leasing_path_intro" },
      { text: "Proceed with Technical (evidence)", next: "scene16_technical_path_intro" }
    ]
  },

  /* ===================== PLACEHOLDER INTRO SCENES TO RESOLVE LINKS ===================== */
/* ===================== UPDATED INTROS -> FINANCE ROUTER ===================== */
  scene16_title_path_intro: {
    type: "text",
    text: "Title Path — continuing to financial analysis next (escrow vs reserve informed by title findings).",
    choices: [
      { text: "Continue", next: "scene16_finance_router" }
    ]
  },

  scene16_leasing_path_intro: {
    type: "text",
    text: "Leasing Path — continuing to financial analysis next (NOI impact, guarantees, service charges).",
    choices: [
      { text: "Continue", next: "scene16_finance_router" }
    ]
  },

  scene16_technical_path_intro: {
    type: "text",
    text: "Technical Path — continuing to financial analysis next (evidence timing, reserve/retention).",
    choices: [
      { text: "Continue", next: "scene16_finance_router" }
    ]
  },

  /* ===================== 16: PIVOT TO FINANCIALS ===================== */
  scene16_finance_router: {
    type: "text",
    image: "images/6.png",
    text: "Finance focus: quantify impacts before 17:00. You’ll hear a short directive from Alex (CFO), review KPIs, sort the closing statement, then cite on-site audit evidence.",
    choices: [
      { text: "Continue", next: "scene17_cfo_audio" }
    ]
  },

  /* ===================== 17: CFO AUDIO DIRECTIVE (no image) ===================== */
  scene17_cfo_audio: {
    type: "interaction-audio-mc",
    text: "Audio from **Alex Chen (CFO)** — pick the most defensible financial next step.",
    audio: "audio/6.mp3",
    options: [
      "Ignore unresolved items; assume zero impact; present a clean go.",
      "Model two cases: (A) escrow retention until evidence; (B) proceed with a CapEx reserve; then break out NOI impact by line item.",
      "Delay analysis until Legal confirms everything; decide later."
    ],
    correct: 1,
    next: "scene18_finance_dashboard"
  },

  /* ===================== 18: FINANCE DASHBOARD (KPIs + checks) ===================== */
scene18_finance_dashboard: {
  type: "dashboard",
  text: "Interpret the model hot spots and answer two checks.",
  widgets: [
    { type: "kpi",   id: "w_noi",   label: "NOI Δ (Base → Case A/B)", value: "-1.8% / -1.2%" },
    { type: "kpi",   id: "w_capex", label: "CapEx reserve proposed",  value: "€250,000" },
    { type: "kpi",   id: "w_escrow",label: "Escrow retention proposed", value: "€250,000" },
    {
      type: "table", id: "w_tasks", label: "Action List",
      columns: ["Line Item", "Owner", "Due"],
      rows: [
        ["Encapsulation evidence", "Legal",   "Thu 12:00"],
        ["Area reconciliation",     "Analyst", "Fri EOD"],
        ["Guarantee schedule",      "Leasing", "Fri 16:00"]
      ]
    }
  ],
  questions: [
    {
      text: "Which item most directly affects NOI rather than only cash timing?",
      options: ["Board minutes filing", "Service charge allocation fix", "Title deed copy"],
      correct: 1
    },
    {
      text: "Which is a proration at closing (timing, not P&L)?",
      options: ["Municipal property tax to completion date", "Annual indexation uplift", "CapEx reserve"],
      correct: 0
    }
  ],
  next: "scene19_proration_buckets"
},


  /* ===================== 19: PRORATION / NOI / RESERVES SORT ===================== */
  scene19_proration_buckets: {
    type: "buckets",
    text: "Drag each line item into the correct bucket: P&L (NOI), Proration at Closing, or Reserves/Retention.",
    buckets: [
      { id: "pnl", label: "P&L (NOI)" },
      { id: "proration", label: "Proration at Closing" },
      { id: "reserves", label: "Reserves / Retention" }
    ],
    tokens: [
      "Property tax to completion date",
      "Service charge true-up (YTD)",
      "Encapsulation reserve",
      "Escrow retention for title regularization",
      "Indexation uplift from 1 Jan",
      "Leasing commission amortization",
      "Energy back-billing (last quarter)",
      "Prepaid insurance to completion",
      "Rent collected in advance (seller’s portion)"
    ],
    answers: {
      pnl: [
        "Service charge true-up (YTD)",
        "Indexation uplift from 1 Jan",
        "Energy back-billing (last quarter)",
        "Leasing commission amortization"
      ],
      proration: [
        "Property tax to completion date",
        "Prepaid insurance to completion",
        "Rent collected in advance (seller’s portion)"
      ],
      reserves: [
        "Encapsulation reserve",
        "Escrow retention for title regularization"
      ]
    },
    allowExtraInBank: false,
    showAnswerOnWrong: true,
    next: "scene20_video_audit_mq"
  },

  /* ===================== 20: VIDEO MULTI-QUESTION (uses videos/1.mp4) ===================== */
  scene20_video_audit_mq: {
    type: "video-multi-question",
    text: "Watch the on-site audit recap and answer the questions (timer running).",
    videoSrc: "videos/1.mp4",
    timer: 75,
    questions: [
      {
        text: "What document does Valerie request regarding access?",
        options: [
          "Title insurance policy",
          "Easement deed",
          "Noise log"
        ],
        correct: 1
      },
      {
        text: "What must be reconciled before confirming conditions?",
        options: [
          "Discrepancy between the plans and the registry",
          "Service charge caps",
          "Fire alarm drill report"
        ],
        correct: 0
      },
      {
        text: "Which is the most professional deadline line?",
        options: [
          "Please reply whenever.",
          "We would appreciate your response by Friday 17:00.",
          "Hit me up soon."
        ],
        correct: 1
      }
    ],
    next: "scene21_video_quote_fib"
  },

  /* ===================== 21: VIDEO QUOTE FIB (exact phrasing capture) ===================== */
  scene21_video_quote_fib: {
    type: "video-fill-in-the-blank",
    text: "Complete the exact line from the video.",
    videoSrc: "videos/1.mp4",
    sentence: [
      "We", "__________", "the", "__________", "test", "__________", "and", "dates,", "__________", "our", "checklist", "."
    ],
    blanks: [1, 3, 5, 8],
    options: [
      "would appreciate",
      "encapsulation",
      "scope",
      "in accordance with",
      "according to",
      "by",
      "recommend to"
    ],
    correct: [
      "would appreciate",
      "encapsulation",
      "scope",
      "in accordance with"
    ],
    next: "scene22_financial_email"
  },

  /* ===================== 22: FINANCIAL EMAIL (formalities included) ===================== */
  scene22_financial_email: {
    type: "fill-in-the-blank",
    image: "images/7.png",
    text: "Draft a formal email proposing escrow vs CapEx reserve. Pick the most precise particles; formal opener/closer included.",
    sentence: [
      "I","hope","this","email","finds","you","well",".","\n\n",
      "Further","to","our","site","review","and","your","recent","message,","we","__________","your","providing","the","evidence","listed","__________","our","checklist",".",
      "In","parallel,","we","__________","setting","either","an","escrow","retention","or","a","CapEx","reserve","pending","receipt","of","those","items",".",
      "Please","respond","__________","Friday","17:00",".","\n\n",
      "Thank","you","for","your","assistance",".","\n",
      "Kind","regards,", "\n",
      "Valerie","Sylvain"
    ],
    /* exact positions of the blanks (the “__________” tokens) */
    blanks: [19, 25, 32, 50],
    options: [
      "would appreciate",
      "in accordance with",
      "recommend",
      "by",
      "according to",
      "recommend to",
      "within"
    ],
    correct: [
      "would appreciate",
      "in accordance with",
      "recommend",
      "by"
    ],
    next: "scene23_retention_decision"
  },

  /* ===================== 23: RETENTION / RESERVE DECISION ===================== */
  scene23_retention_decision: {
    type: "text",
    text: "Choose the financial safeguard to propose while evidence is pending.",
    choices: [
      { text: "Case A — Escrow retention €250,000 until documents land", next: "scene24_router" },
      { text: "Case B — CapEx reserve €250,000 with timed evidence condition", next: "scene24_router" },
      { text: "Case C — Hybrid: Escrow €150,000 + Reserve €100,000", next: "scene24_router" }
    ]
  },

  /* ===================== 24: FORWARD-ONLY ROUTER (stub for next build) ===================== */
  scene24_router: {
    type: "text",
    text: "You're a cool cat! Hit that continue button!",
    choices: [
      { text: "Continue", next: "scene24_next_intro" }
    ]
  },

  scene24_next_intro: {
  type: "text",
  text: "Financial track continues — prepare numbers and terms for management sign-off.",
  choices: [
    { text: "Continue", next: "scene25_negotiation_prep" }
  ]
},

/* ===================== 25) NEGOTIATION PREP (TEXT) ===================== */
scene25_negotiation_prep: {
  type: "text",
  image: "images/8.png",
  text: "Internal prep. Talking points for today’s call: (A) Escrow retention €250k pending evidence; (B) CapEx reserve €250k if proceeding. Clearly separate NOI impacts from prorations. Deadline remains 17:00.",
  choices: [
    { text: "Call Seller’s Counsel", next: "scene26_counsel_audio" }
  ]
},

/* ===================== 26) COUNSEL CALL (AUDIO MC — NO IMAGE, SHUFFLED) ===================== */
scene26_counsel_audio: {
  type: "interaction-audio-mc",
  text: "Call with **Sara Cain (Seller’s Counsel)**. Tap Play, then choose the most defensible response.",
  audio: "audio/7.mp3",
  shuffleOptions: true,
  options: [
    "Defer all decisions until next week; make no written record.",
    "Acknowledge; request full test scope & dates; keep escrow retention on the table until documentation lands; flag proration list to follow.",
    "Accept a CapEx reserve only and drop evidence requests to keep timing."
  ],
  /* Correct is intentionally not the first option to avoid predictability */
  correct: 1,
  next: "scene27_financial_clause_fib"
},

/* ===================== 27) FINANCIAL CLAUSE — FIB (NO IMAGE, SHUFFLED OPTIONS) ===================== */
scene27_financial_clause_fib: {
  type: "fill-in-the-blank",
  text: "Complete the clause that will enter the term sheet (escrow vs timing).",
  sentence: [
    "The","parties","__________","€250,000","__________","pending","receipt","of","the","encapsulation","test","scope","and","dates,","__________","the","checklist;","failing","receipt","__________","Friday","17:00,","the","CapEx","reserve","shall","remain","in","place","."
  ],
  /* blanks correspond to: agree to hold / in escrow / in accordance with / by */
  blanks: [2, 4, 14, 19],
  shuffleOptions: true,
  options: [
    "according to",
    "agree hold",
    "in escrow",
    "within",
    "agree to hold",
    "on",
    "by",
    "in accordance with"
  ],
  correct: [
    "agree to hold",
    "in escrow",
    "in accordance with",
    "by"
  ],
  next: "scene28_management_email"
},

/* ===================== 28) MANAGEMENT EMAIL (DRAFT — SCRAMBLE, PUNCTUATION-AWARE) ===================== */
scene28_management_email: {
  type: "scramble",
  image: "images/9.png",
  text: "Assemble a concise email to **Alex Chen (CFO)** summarizing the recommendation. Use a formal opener/closer and both cases.",
  /* Phrase-level tokens (punctuation kept); scramble order deliberately mixed */
  scramble: [
    "We would appreciate your decision by 17:00.",
    "Kind regards, Valerie Sylvain.",
    "Case A: Escrow retention €250,000 pending evidence.",
    "I hope this email finds you well.",
    "We will confirm conditions to proceed once documents arrive.",
    "Case B: CapEx reserve €250,000 with expiry on receipt."
  ],
  correct: [
    "I hope this email finds you well.",
    "Case A: Escrow retention €250,000 pending evidence.",
    "Case B: CapEx reserve €250,000 with expiry on receipt.",
    "We will confirm conditions to proceed once documents arrive.",
    "We would appreciate your decision by 17:00.",
    "Kind regards, Valerie Sylvain."
  ],
  next: "scene29_router"
},

/* ===================== 29) FORWARD-ONLY ROUTER (no restart; placeholder end of current build) ===================== */
scene29_router: {
  type: "text",
  text: "We are almost there! Keep on keeping on!",
  choices: [
    { text: "Continue", next: "scene29_next_intro" }
  ]
},

/* UPDATE LINK FROM PREVIOUS BUILD */
scene29_next_intro: {
  type: "text",
  text: "Agreement language and sign-off continue from here.",
  choices: [
    { text: "Continue", next: "scene30_agreement_prep" }
  ]
},

/* ===================== 30) TERM SHEET ALIGNMENT (TEXT) ===================== */
scene30_agreement_prep: {
  type: "text",
  image: "images/10.png",
  text: "Term sheet alignment. Objective: lock wording for escrow vs CapEx reserve before the final calls. Keep the 17:00 deadline explicit and tie release to documented evidence.",
  choices: [
    { text: "Management huddle", next: "scene31_management_huddle_audio" }
  ]
},

/* ===================== 31) MANAGEMENT HUDDLE (AUDIO MC — SHUFFLED) ===================== */
scene31_management_huddle_audio: {
  type: "interaction-audio-mc",
  text: "Internal huddle — **Alex Chen (CFO)** with **Laura Bennett (Legal)**. Choose the least risky wording approach.",
  audio: "audio/8.mp3",
  shuffleOptions: true,
  options: [
    "Drop escrow entirely and rely on a soft commitment to send documents later.",
    "Hold no reserve if the seller states access is sufficient; rely on verbal assurances.",
    "Escrow €250k pending receipt of the test scope & dates in accordance with the checklist and the easement deed; by 17:00, absent evidence, the CapEx reserve shall remain."
  ],
  /* correct is intentionally NOT the first option to avoid predictability */
  correct: 2,
  next: "scene32_clause_scramble"
},

/* ===================== 32) CLAUSE SCRAMBLE (PHRASE-LEVEL, PUNCTUATION-AWARE) ===================== */
scene32_clause_scramble: {
  type: "scramble",
  text: "Assemble the term-sheet sentence (punctuation matters).",
  scramble: [
    "the CapEx reserve shall remain in place.",
    "Escrow €250,000 pending receipt of the encapsulation test scope and dates,",
    "and confirmation that the easement deed is on file;",
    "in accordance with our checklist,",
    "failing receipt by 17:00,"
  ],
  correct: [
    "Escrow €250,000 pending receipt of the encapsulation test scope and dates,",
    "in accordance with our checklist,",
    "and confirmation that the easement deed is on file;",
    "failing receipt by 17:00,",
    "the CapEx reserve shall remain in place."
  ],
  next: "scene33_seller_counter_audio"
},

/* ===================== 33) SELLER COUNTER (AUDIO MC — SHUFFLED) ===================== */
scene33_seller_counter_audio: {
  type: "interaction-audio-mc",
  text: "Call with **Sara Cain (Seller’s Counsel)** — seller proposes a reduction. Choose the most defensible response.",
  audio: "audio/9.mp3",
  shuffleOptions: true,
  options: [
    "Release escrow immediately on counsel’s assurance; drop the reserve.",
    "Delay completion and restart diligence next week.",
    "Accept €150k escrow upon easement confirmation today and maintain the CapEx reserve until the test scope & dates arrive; keep the deadline stated as by 17:00."
  ],
  correct: 2,
  next: "scene34_exec_summary_draft"
},

/* ===================== 34) EXEC SUMMARY DRAFT (PHRASE SCRAMBLE, WITH IMAGE) ===================== */
scene34_exec_summary_draft: {
  type: "scramble",
  image: "images/11.png",
  text: "Assemble a concise executive summary email draft to **Alex Chen (CFO)**.",
  scramble: [
    "We would appreciate your decision by 17:00.",
    "Case A: Escrow €150,000 today on easement confirmation; reserve remains pending test scope & dates.",
    "Kind regards, Valerie Sylvain.",
    "Thank you for the time earlier.",
    "We will confirm conditions to proceed once documents arrive.",
    "Case B: CapEx reserve €250,000 until full evidence, with escrow optional on receipt."
  ],
  correct: [
    "Thank you for the time earlier.",
    "Case A: Escrow €150,000 today on easement confirmation; reserve remains pending test scope & dates.",
    "Case B: CapEx reserve €250,000 until full evidence, with escrow optional on receipt.",
    "We will confirm conditions to proceed once documents arrive.",
    "We would appreciate your decision by 17:00.",
    "Kind regards, Valerie Sylvain."
  ],
  next: "scene35_final_email_send"
},

/* ===================== 35) FINAL EMAIL — ACTUAL SEND (PENULTIMATE SCENE) ===================== */
scene35_final_email_send: {
  type: "email",
  text: "FINAL ACTION — This opens your email client to send a real message to the instructor.\n\nWrite the email body yourself. Include:\n• Case A: Escrow €150,000 today on easement confirmation; CapEx reserve remains pending test scope & dates.\n• Case B: CapEx reserve €250,000 until full evidence, with escrow optional on receipt.\n• Evidence lines: easement deed on file; discrepancy between the plans and the registry; and the quote “We would appreciate the encapsulation test scope and dates, in accordance with our checklist.”\n• Deadline phrasing: “We would appreciate your decision by 17:00.”\n• Formal opener and closer (e.g., “I hope this email finds you well.” / “Kind regards,”).\n\nCheck the recipient and subject, compose your message, then click **Send Email**.",
  teacherEmail: "xavier.benitz@gmail.com",
  emailSubject: "Final audit recommendation — escrow/reserve (by 17:00)",
  emailBody: "",
  next: "scene36_thank_you"
},



/* ===================== 36) THANK YOU — FINAL ===================== */
scene36_thank_you: {
  type: "text",
  image: "images/12.png",
  text: "Thank you — your final recommendation was submitted. You can replay to explore other routes.",
  choices: [
    { text: "Replay from start", next: "scene1" }
  ]
}


};









// ✅ Step A: make scenes available globally
window.scenes = scenes;



















// === UNIVERSAL SCENE NORMALIZER (v1) ===
(function normalizeForEngine(){
  function tokensFromText(t){ return String(t||'').trim().split(/\s+/).filter(Boolean); }
  function sentenceFromTextWithBlanks(text){
    const out=[]; const blanks=[];
    const parts = String(text||'').split('___');
    parts.forEach((seg,i)=>{
      if (seg) out.push(...tokensFromText(seg));
      if (i < parts.length-1){ blanks.push(out.length); out.push('___'); }
    });
    return { sentence: out, blanks };
  }

  Object.values(scenes).forEach(sc=>{
    if (!sc || typeof sc !== 'object') return;

    if (sc.type === "dashboard" && Array.isArray(sc.widgets)) {
  sc.widgets = sc.widgets.map((w, i) => {
    const ww = { ...w };
    if (!ww.type && ww.kind) ww.type = ww.kind;   // accept `kind` alias
    if (!ww.id) ww.id = `w_${ww.type || 'widget'}_${i}`;
    return ww;
  });
}

    // SCRAMBLE: accept words/sentence/correct(string)
    if (sc.type === 'scramble'){
      if (!Array.isArray(sc.scramble)) {
        sc.scramble =
          Array.isArray(sc.words)    ? sc.words.slice() :
          Array.isArray(sc.sentence) ? sc.sentence.slice() :
          tokensFromText(sc.text);
      }
      if (typeof sc.correct === 'string') sc.correct = tokensFromText(sc.correct);
      if (!Array.isArray(sc.correct) && Array.isArray(sc.sentence)) sc.correct = sc.sentence.slice();
    }

    // FIB: build sentence/blanks from "___" if missing; normalize correct to array
    if (sc.type === 'fill-in-the-blank'){
      if (!Array.isArray(sc.sentence) || !Array.isArray(sc.blanks)) {
        const { sentence, blanks } = sentenceFromTextWithBlanks(sc.text || '');
        sc.sentence = sentence;
        sc.blanks = blanks.length ? blanks : [Math.max(0, sentence.indexOf('___'))];
      }
      if (typeof sc.correct === 'string') sc.correct = [sc.correct];
      if (!Array.isArray(sc.correct)) sc.correct = [];
      if (!Array.isArray(sc.options)) sc.options = [];
    }

    // AUDIO MC: allow audioSrc + text options + correct as string
    if (sc.type === 'interaction-audio-mc'){
      if (!sc.audio && sc.audioSrc) sc.audio = sc.audioSrc;
      if (typeof sc.correct === 'string' && Array.isArray(sc.options)) {
        const idx = sc.options.findIndex(o =>
          (typeof o === 'string' ? o : o.text).trim().toLowerCase() === sc.correct.trim().toLowerCase()
        );
        if (idx >= 0) sc.__correctIndex = idx;
      } else if (Number.isInteger(sc.correct)) {
        sc.__correctIndex = sc.correct;
      }
    }
    
  });
})();

// --- Scene Normalizer & Validator (global) ---

function normalizeScenes(rawScenes) {
  // Accept either array or object-map; always return array
  const arr = Array.isArray(rawScenes)
    ? rawScenes
    : Object.values(rawScenes || {});

  return arr.map(sc => {
    const s = { ...sc };

    // Normalize casing/aliases
    if ('ken_burns' in s && !('kenBurns' in s)) s.kenBurns = !!s.ken_burns;

    // FIB: normalize correct for single blank
    if (s.type === 'fill-in-the-blank') {
      // never allow empty-token options like "—"
      if (Array.isArray(s.options)) {
        s.options = s.options.map(o =>
          (o === '—' || o === '–' || o === '— (none)') ? 'no preposition' : o
        );
      }
      // if correct provided as array with one entry, flatten to string
      if (Array.isArray(s.correct) && s.correct.length === 1) {
        s.correct = s.correct[0];
      }
    }

    // Scramble: if correct provided as single string, split to tokens
    if (s.type === 'scramble') {
      if (typeof s.correct === 'string') {
        s.correct = s.correct.trim().split(/\s+/);
      }
      if (typeof s.sentence === 'string') {
        s.sentence = s.sentence.trim().split(/\s+/);
      }
    }

    // Hard rule: no custom "timed" type; normalize legacy data
    if (s.type === 'timed') {
      throw new Error(
        `Legacy type "timed" found in ${s.id}. Use a supported type (e.g., fill-in-the-blank) and add "timer".`
      );
    }

    return s;
  });
}

function validateScenesContract(scenesArr) {
  const ids = new Set(scenesArr.map(x => x.id));
  const problems = [];

  const must = (cond, msg) => { if (!cond) problems.push(msg); };

  for (const sc of scenesArr) {
    must(!!sc.id, `Scene missing id.`);
    must(!!sc.type, `${sc.id}: missing type.`);

    // forward links
    if (sc.next) must(ids.has(sc.next), `${sc.id}: next -> "${sc.next}" not found.`);
    if (Array.isArray(sc.choices)) {
      sc.choices.forEach((c, i) => must(ids.has(c.next), `${sc.id}: choices[${i}].next -> "${c.next}" not found.`));
    }

    switch (sc.type) {
      case 'text':
        must((Array.isArray(sc.choices) && sc.choices.length) || !!sc.next,
            `${sc.id}: text scene needs choices[] or next.`);
        break;

      case 'scramble':
        must(Array.isArray(sc.sentence) && sc.sentence.length > 0,
            `${sc.id}: scramble needs sentence[].`);
        must(Array.isArray(sc.correct) && sc.correct.length > 0,
            `${sc.id}: scramble needs correct[].`);
        must(sc.sentence.length === sc.correct.length,
            `${sc.id}: sentence[] and correct[] length mismatch.`);
        break;

      case 'fill-in-the-blank':
        must(typeof sc.text === 'string' && sc.text.includes('___'),
            `${sc.id}: FIB text must include ___ placeholder.`);
        must(Array.isArray(sc.options) && sc.options.length > 0,
            `${sc.id}: FIB requires non-empty options[].`);
        must(sc.correct !== undefined && sc.correct !== null && sc.correct !== '',
            `${sc.id}: FIB missing correct answer.`);
        // if multiple blanks, enforce array
        const blanks = (sc.text.match(/___/g) || []).length;
        if (blanks > 1) {
          must(Array.isArray(sc.correct) && sc.correct.length === blanks,
              `${sc.id}: FIB has ${blanks} blanks; correct must be array of ${blanks}.`);
        } else {
          must(typeof sc.correct === 'string',
              `${sc.id}: FIB (single blank) correct must be a string.`);
        }
        break;

      case 'interaction-audio-mc':
        must(!!sc.audioSrc, `${sc.id}: audioSrc missing.`);
        must(Array.isArray(sc.options) && sc.options.length >= 2,
            `${sc.id}: audio MC needs options[].`);
        must(typeof sc.correct === 'string',
            `${sc.id}: audio MC correct must be a string.`);
        break;

      case 'video-multiple-choice':
        must(!!sc.videoSrc, `${sc.id}: videoSrc missing.`);
        must(Array.isArray(sc.options) && sc.options.length >= 2,
            `${sc.id}: video MC needs options[].`);
        sc.options.forEach((o, i) => {
          must(typeof o.text === 'string', `${sc.id}: options[${i}].text missing.`);
          must(typeof o.correct === 'boolean', `${sc.id}: options[${i}].correct missing.`);
          must(ids.has(o.next), `${sc.id}: options[${i}].next -> "${o.next}" not found.`);
        });
        break;

      case 'email':
        must(!!sc.teacherEmail, `${sc.id}: email needs teacherEmail.`);
        must(!!sc.next, `${sc.id}: email needs next (usually thank_you_scene).`);
        break;

      default:
        problems.push(`${sc.id}: Unsupported type "${sc.type}".`);
    }
  }
  return problems;
}

// ===== Engine Hardening v2 =====
window.ENGINE_VERSION = '2.0.0';

// 0) Make transient registry visible to helpers (prevents ReferenceError)
window.__transients = window.__transients || { nodes:new Set(), timers:new Set(), cleaners:new Set(), listeners:new Set() };
const __transients = window.__transients; // <-- critical alias used by helpers

// 1) Global error overlay so crashes never look like a black screen
(function installErrorOverlay(){
  if (window.__errorOverlayInstalled) return; window.__errorOverlayInstalled=true;
  function showOverlay(title, detail){
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:fixed;inset:0;background:#000b;color:#0ff;z-index:999999;display:grid;place-items:center;padding:20px;';
    const card = document.createElement('pre');
    card.style.cssText = 'background:#0a0a0f;border:1px solid #00ffff55;border-radius:12px;max-width:90vw;max-height:80vh;overflow:auto;padding:16px;font:12px/1.5 monospace;white-space:pre-wrap;';
    card.textContent = `[A-State Engine]\n${title}\n\n${detail}`;
    wrap.appendChild(card);
    document.body.appendChild(wrap);
  }
  window.addEventListener('error', e => showOverlay('Runtime Error', (e.error && e.error.stack) || e.message));
  window.addEventListener('unhandledrejection', e => showOverlay('Unhandled Promise Rejection', (e.reason && e.reason.stack) || String(e.reason)));
})();

// 2) Strict validator (lightweight, no external libs)
function validateScenesStrict(all){
  const ids = new Set(Object.keys(all||{}));
  const errors = [];
  const warns  = [];
  function req(cond, id, msg){ if(!cond) errors.push(`[${id}] ${msg}`); }
  function w(cond, id, msg){ if(!cond) warns.push(`[${id}] ${msg}`); }

  for (const [id, sc] of Object.entries(all||{})) {
    req(sc && typeof sc === 'object', id, 'scene must be an object');
    const t = sc.type || 'text';

    // Common forward-refs
    if (sc.next) w(ids.has(sc.next), id, `next → "${sc.next}" not found`);
    if (sc.endings) {
      ['high','medium','low'].forEach(key => { if (sc.endings[key]) w(ids.has(sc.endings[key]), id, `endings.${key} → "${sc.endings[key]}" not found`); });
    }
    if (Array.isArray(sc.choices)) sc.choices.forEach(c => w(ids.has(c.next), id, `choice "${c.text}" → "${c.next}" not found`));

    // Per-type checks (subset; extend as needed)
    switch (t) {
      case 'text':
        req(!!sc.text, id, 'text scene needs "text"');
        break;

      case 'scramble': {
  const src =
    (Array.isArray(sc.scramble) && sc.scramble) ||
    (Array.isArray(sc.words) && sc.words) ||
    (Array.isArray(sc.sentence) && sc.sentence) ||
    null;

  req(Array.isArray(src) && src.length, id, 'scramble needs tokens in scramble[]/words[]/sentence[]');

  const corr = Array.isArray(sc.correct)
    ? sc.correct
    : (typeof sc.correct === 'string' ? sc.correct.trim().split(/\s+/) : null);

  req(Array.isArray(corr) && corr.length, id, 'scramble needs correct[] (or string)');
  req(!!sc.next, id, 'scramble needs next');
  break;
}


      case 'fill-in-the-blank':
      case 'interaction-fill-in-the-blank':
        req(Array.isArray(sc.sentence), id, 'needs sentence[]');
        req(Array.isArray(sc.blanks), id, 'needs blanks[]');
        req(Array.isArray(sc.options), id, 'needs options[]');
        req(Array.isArray(sc.correct), id, 'needs correct[]');
        req(sc.correct.length === sc.blanks.length, id, 'correct length must equal blanks length');
        req(!!sc.next, id, 'needs next');
        break;

      case 'interaction':
        req(Array.isArray(sc.interactions) && sc.interactions.length, id, 'needs interactions[]');
        sc.interactions.forEach((it, i)=>{
          req(typeof it.audio === 'string' && it.audio.length, id, `interactions[${i}] needs audio`);
          req(Array.isArray(it.options) && it.options.length, id, `interactions[${i}] needs options[]`);
          req(typeof it.correct !== 'undefined', id, `interactions[${i}] needs correct (index or scoring)`);
        });
        req(sc.scoring && typeof sc.scoring === 'object', id, 'needs scoring{high,medium}');
        req(sc.endings && typeof sc.endings === 'object', id, 'needs endings{high,medium,low}');
        break;

      case 'interaction-scramble':
        req(Array.isArray(sc.scramble) && sc.scramble.length, id, 'needs scramble[]');
        req(Array.isArray(sc.correct) && sc.correct.length, id, 'needs correct[]');
        req(typeof sc.audio === 'string' && sc.audio.length, id, 'needs audio');
        req(sc.next, id, 'needs next');
        break;

      case 'interaction-audio-mc':
  req( (typeof sc.audio === 'string' && sc.audio.length) ||
       (typeof sc.audioSrc === 'string' && sc.audioSrc.length),
       id, 'needs prompt audio (audio or audioSrc)');
  req(Array.isArray(sc.options) && sc.options.length >= 2,
      id, 'needs options[]');
  // allow either numeric index or string match
  req(Number.isInteger(sc.correct) || typeof sc.correct === 'string' || Number.isInteger(sc.__correctIndex),
      id, 'needs correct (index or matching string)');
  req(sc.next, id, 'needs next');
  break;


      case 'video':
      case 'video-scramble':
      case 'video-fill-in-the-blank':
      case 'video-multi-question':
      case 'video-multi-audio-choice':
        req(typeof sc.videoSrc === 'string' && sc.videoSrc.length, id, `${t} needs videoSrc`);
        // question/fields validated inside loader, but we warn:
        if (t==='video-multi-question') w(Array.isArray(sc.questions) && sc.questions.length, id, 'video-multi-question expects questions[]');
        break;

      case 'email':
        req(typeof sc.teacherEmail === 'string' && sc.teacherEmail.includes('@'), id, 'needs teacherEmail');
        req(typeof sc.emailSubject === 'string', id, 'needs emailSubject');
        break;

      // Mini-games
      case 'hangman':
        req(typeof sc.target === 'string' && sc.target.length, id, 'hangman needs target');
        break;

      case 'survivor-quiz':
      case 'conjugation-race':
      case 'image-hotspots':
      case 'buckets':
      case 'particle-swapper':
      case 'comic-bubbles':
      case 'dashboard':
        // Keep loose; these scenes vary. Rely on loader internals.
        break;

      default:
        w(false, id, `unknown type "${t}" — engine will treat as text`);
    }
  }
  return { errors, warns };
}

// 3) Asset preloader (quietly warms images/audio/video for next scene)
function listAssetsForScene(sc){
  const imgs = new Set(), auds = new Set(), vids = new Set();
  if (!sc || typeof sc !== 'object') return {imgs,auds,vids};
  if (sc.image) imgs.add(sc.image);
  if (Array.isArray(sc.images)) sc.images.forEach(x=>imgs.add(x));
  if (sc.audio) auds.add(sc.audio);
  if (Array.isArray(sc.interactions)) sc.interactions.forEach(it=>{
    if (it.audio) auds.add(it.audio);
    if (Array.isArray(it.options)) it.options.forEach(opt=>{
      if (typeof opt === 'string' && /\.(mp3|wav|ogg|m4a)$/i.test(opt)) auds.add(opt);
    });
  });
  if (typeof sc.videoSrc === 'string') vids.add(sc.videoSrc);
  return {imgs,auds,vids};
}
const __preloaded = new Set();
function preloadAssetsFor(id){
  const sc = (window.scenes||{})[id]; if (!sc) return;
  const {imgs,auds,vids} = listAssetsForScene(sc);
  imgs.forEach(src=>{ if (__preloaded.has(src)) return; const i=new Image(); i.src=src; __preloaded.add(src); });
  auds.forEach(src=>{ if (__preloaded.has(src)) return; const a=new Audio(); a.preload='auto'; a.src=src; __preloaded.add(src); });
  vids.forEach(src=>{ if (__preloaded.has(src)) return; const v=document.createElement('video'); v.preload='metadata'; v.src=src; __preloaded.add(src); });
}

// 4) Safe start: clean data → validate → preload → start or show errors
(function safeBootstrap(){
  try {
 // sanitize unicode quirks
if (typeof cleanScenesData === 'function') cleanScenesData(window.scenes);

// 🔧 normalize scene shapes BEFORE validating/using
if (typeof window.normalizeScenesForEngine === 'function') {
  // (not needed because we used an IIFE above)
} // kept for clarity

const {errors, warns} = validateScenesStrict(window.scenes);

    warns.forEach(w => console.warn('[Scene Warning]', w));
    if (errors.length){
      console.error('[Scene Errors]', errors);
      const detail = errors.join('\n');
      const evt = new Error('Scene validation failed:\n' + detail);
      throw evt; // triggers overlay
    }

    // Preload first scene + immediate next(s)
    if (window.scenes && window.scenes.scene1) {
      preloadAssetsFor('scene1');
      if (window.scenes.scene1.next) preloadAssetsFor(window.scenes.scene1.next);
      if (Array.isArray(window.scenes.scene1.choices)) window.scenes.scene1.choices.forEach(c=>preloadAssetsFor(c.next));
    }

    // expose a safeStart you already call from the Play button
    window.safeStartGame = function(){
      try { startGame(); } catch(err) { console.error(err); throw err; }
    };

    // optional: make the homepage button call safeStartGame instead
    const btn = document.querySelector('#overlay-content .button-group button');
    if (btn && !btn.__wired) { btn.onclick = () => window.safeStartGame(); btn.__wired = true; }

  } catch(e) {
    // overlay installs in (1); rethrow for visibility
    console.error('[Bootstrap]', e);
    throw e;
  }
})();



























































// --- Usage (do this once where you load scenes) ---
// const raw = scenes; // your imported scenes (object or array)
// const normalized = normalizeScenes(raw);
// const errs = validateScenesContract(Array.isArray(normalized) ? normalized : Object.values(normalized));
// if (errs.length) { console.error(errs); alert("Scene errors:\n\n" + errs.join("\n")); throw new Error("Invalid scenes."); }
// window.scenes = Array.isArray(normalized) ? normalized : Object.values(normalized);



const ENABLE_TEST_HUB = false; // flip to true only while testing




// --- Transient registry (one-time, keep above loadScene) ---
// --- Transient registry (one-time, keep above loadScene) ---
window.__transients = window.__transients || { nodes:new Set(), timers:new Set(), cleaners:new Set(), listeners:new Set() };


function registerNode(node){
  node.dataset.transient = "1";
  __transients.nodes.add(node);
  return node;
}
function registerTimer(id){
  __transients.timers.add(id);
  return id;
}
function registerCleanup(fn){
  __transients.cleaners.add(fn);
  return fn;
}
function registerListener(target, evt, handler, opts){
  target.addEventListener(evt, handler, opts);
  __transients.listeners.add(() => target.removeEventListener(evt, handler, opts));
  return handler;
}
function cleanupTransients(){
  __transients.timers.forEach(t => { try { clearInterval(t); clearTimeout(t); } catch(_){} });
  __transients.timers.clear();

  __transients.cleaners.forEach(fn => { try { fn(); } catch(_){} });
  __transients.cleaners.clear();

  __transients.listeners.forEach(off => { try { off(); } catch(_){} });
  __transients.listeners.clear();

  document.querySelectorAll('[data-transient="1"]').forEach(n => n.remove());
  __transients.nodes.clear();
}

// --- Scene hero (image-on-top) helper ---
function renderSceneHeader(sc, root) {
  // image (if provided)
  if (sc.image) {
    const wrap = document.createElement('div');
    wrap.className = 'scene-hero';
    const img = document.createElement('img');
    img.src = sc.image;
    img.alt = sc.alt || '';
    img.loading = 'eager';
    wrap.appendChild(img);
    root.appendChild(wrap);
  }
  // title/lead text (optional if your loader already shows sc.text)
  if (sc.text) {
    const p = document.createElement('div');
    p.className = 'scene-lead';
    p.innerHTML = sc.text; // if you already render sc.text elsewhere, remove this
    root.appendChild(p);
  }
}




// === Add-ons: persistence + QA overlay + scene validator ===
(function () {
  const STORAGE_KEY = 'game_progress_v1';

  // 1) Ensure a progress object exists (and normalize types)
  if (!window.progress) {
    window.progress = { flags: {}, unlocked: new Set(['scene1']) };
  } else if (!(progress.unlocked instanceof Set)) {
    progress.unlocked = new Set(progress.unlocked || ['scene1']);
  }

  // 2) Load saved progress
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      progress.flags = saved.flags || {};
      progress.unlocked = new Set(saved.unlocked || ['scene1']);
    }
  } catch (e) { console.warn('Progress load failed:', e); }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ flags: progress.flags, unlocked: Array.from(progress.unlocked) })
      );
    } catch (e) { console.warn('Progress save failed:', e); }
  }

  // 3) Ensure/augment helpers (wrap existing to add auto-save)
  if (typeof window.setFlag !== 'function') {
    window.setFlag = function setFlag(name, val = true) {
      progress.flags[name] = !!val;
      saveProgress();
    };
  } else {
    const _setFlag = window.setFlag;
    window.setFlag = function (name, val = true) { _setFlag(name, val); saveProgress(); };
  }

  if (typeof window.unlockScene !== 'function') {
    window.unlockScene = function unlockScene(id) {
      if (id) progress.unlocked.add(id);
      saveProgress();
    };
  } else {
    const _unlockScene = window.unlockScene;
    window.unlockScene = function (id) { _unlockScene(id); saveProgress(); };
  }

  window.hasFlag = window.hasFlag || function hasFlag(name) { return !!progress.flags[name]; };
  window.isUnlocked = window.isUnlocked || function isUnlocked(id) { return progress.unlocked.has(id); };



// 4) QA overlay (Shift+Q to toggle)
(function () {
  let visible = false;
  window.toggleQA = function toggleQA() {
    visible = !visible;
    let el = document.getElementById('qa-overlay');
    if (visible) {
      if (!el) {
        el = document.createElement('pre');
        el.id = 'qa-overlay';
        el.style.cssText =
          'position:fixed;right:8px;bottom:8px;max-width:40vw;max-height:40vh;overflow:auto;' +
          'background:#000a;color:#0ff;padding:8px;border:1px solid #0ff;font:12px/1.4 monospace;z-index:99999;';
        document.body.appendChild(el);
      }
      el.textContent = JSON.stringify({
        currentSceneId: window.currentSceneId,
        flags: progress.flags,
        unlocked: Array.from(progress.unlocked)
      }, null, 2);
    } else if (el) {
      el.remove();
    }
  };
})();

(function addQAShortcut() {
  if (window.__qaShortcutAdded) return;
  window.__qaShortcutAdded = true;
  document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key.toLowerCase() === 'q') {
      e.preventDefault();
      window.toggleQA();
    }
  });
})();

// === CRM mini-store (state + persistence + pub/sub) ===
(function initCRM() {
  const KEY = 'crm_state_v1';

  const defaultState = {
    kpis: { revenue: 0, churn: 0, satisfaction: 50 },
    bars: { satisfaction: [ { label: 'Eng', value: 68 }, { label: 'Sales', value: 74 }, { label: 'Ops', value: 62 } ] },
    pies: { satisfactionSplit: [ { label: 'Satisfied', value: 60 }, { label: 'Neutral', value: 25 }, { label: 'Dissatisfied', value: 15 } ] },
    tables: { tickets: [['#812','Resolved','5m'], ['#905','Escalated','24h']] }
  };

  const listeners = new Set();

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      return raw ? deepMerge(structuredClone(defaultState), raw) : structuredClone(defaultState);
    } catch { return structuredClone(defaultState); }
  }

  function save() { try { localStorage.setItem(KEY, JSON.stringify(window.crm.state)); } catch {} }
  function notify() { listeners.forEach(fn => { try { fn(window.crm.state); } catch {} }); }
  function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }

  function setByPath(obj, path, val) {
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
      cur = cur[p];
    }
    cur[parts[parts.length - 1]] = val;
  }

  function apply(delta) {
    if (!delta) return;
    const st = window.crm.state;

    if (delta.kpis && typeof delta.kpis === 'object') {
      for (const [k, v] of Object.entries(delta.kpis)) {
        st.kpis[k] = (Number(st.kpis[k]) || 0) + Number(v || 0);
      }
    }
    if (delta.set && typeof delta.set === 'object') {
      for (const [path, val] of Object.entries(delta.set)) setByPath(st, path, val);
    }
    if (delta.appendRows && typeof delta.appendRows === 'object') {
      for (const [tableId, rows] of Object.entries(delta.appendRows)) {
        if (!Array.isArray(st.tables[tableId])) st.tables[tableId] = [];
        st.tables[tableId].push(...rows);
      }
    }
    save();
    notify();
  }

  function deepMerge(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) return b.slice();
    if (a && typeof a === 'object' && b && typeof b === 'object') {
      for (const k of Object.keys(b)) a[k] = deepMerge(a[k], b[k]);
      return a;
    }
    return b === undefined ? a : b;
  }

  window.crm = {
    state: load(),
    apply,
    subscribe,
    reset() { window.crm.state = structuredClone(defaultState); save(); notify(); },
    save
  };
})();


  (function addQAShortcut() {
    if (window.__qaShortcutAdded) return;
    window.__qaShortcutAdded = true;
    document.addEventListener('keydown', function (e) {
      if (e.shiftKey && e.key.toLowerCase() === 'q') {
        e.preventDefault();
        window.toggleQA();
      }
    });
  })();

  // 5) Scene graph validator (warns only)
  window.validateScenes = window.validateScenes || function validateScenes() {
    if (!window.scenes) return;
    const ids = new Set(Object.keys(window.scenes));
    for (const [id, sc] of Object.entries(window.scenes)) {
      (sc.choices || []).forEach(c => {
        if (c.next && !ids.has(c.next)) console.warn(`[validateScenes] Missing choice target: ${id} → ${c.next}`);
      });
      if (sc.next && !ids.has(sc.next)) console.warn(`[validateScenes] Missing next: ${id} → ${sc.next}`);
      if (sc.endings) {
        ['high', 'medium', 'low'].forEach(k => {
          const dest = sc.endings[k];
          if (dest && !ids.has(dest)) console.warn(`[validateScenes] Missing ending target: ${id}.${k} → ${dest}`);
        });
      }
    }
  };

  // Run once after scenes load
  window.validateScenes();
})();


// === Game start setup ===
let currentSceneId = "scene1";

function startGame() {
  const overlay = document.getElementById("overlay-content");
  const gameContainer = document.getElementById("game-container");
  if (overlay) overlay.style.display = "none";
  if (gameContainer) gameContainer.style.display = "block";
  if (window.BGM) window.BGM.pauseForGameStart(); // NEW: stop homepage music when game starts
  loadScene(currentSceneId);
}

// === Utilities ===
function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}
// Helper to clean words of problematic Unicode characters
function cleanWord(word) {
  // Replace non-breaking spaces and remove non-ASCII chars
  return word.replace(/\u00A0/g, ' ').replace(/[^\x00-\x7F]/g, '');
}
// Helper to clean words of problematic Unicode characters
function cleanWord(word) {
  return word.replace(/\u00A0/g, ' ').replace(/[^\x00-\x7F]/g, '');
}

// Clean all relevant arrays in all scenes
function cleanScenesData(scenesObj) {
  for (const key in scenesObj) {
    if (!scenesObj.hasOwnProperty(key)) continue;
    const scene = scenesObj[key];
    if (!scene) continue;

    if (scene.sentence && Array.isArray(scene.sentence)) {
      scene.sentence = scene.sentence.map(word => cleanWord(word));
    }
    if (scene.options && Array.isArray(scene.options)) {
      scene.options = scene.options.map(word => cleanWord(word));
    }
    if (scene.correct && Array.isArray(scene.correct)) {
      scene.correct = scene.correct.map(word => cleanWord(word));
    }
    if (scene.scramble && Array.isArray(scene.scramble)) {
      scene.scramble = scene.scramble.map(word => cleanWord(word));
    }
  }
}




// === Main scene loader ===
function loadScene(id) {
  console.log(`\n>>> loadScene called with ID: "${id}"`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }
  currentSceneId = id;

  if (Array.isArray(scene.onEnterUnlockScenes)) scene.onEnterUnlockScenes.forEach(unlockScene);
  if (Array.isArray(scene.onEnterSetFlags)) scene.onEnterSetFlags.forEach(setFlag);

  // Apply CRM deltas on enter (optional per scene)
  try {
    if (scene.applyCrm) window.crm && window.crm.apply(scene.applyCrm);
  } catch (e) { console.warn('CRM apply (onEnter) failed', e); }

  // === UNIVERSAL CLEANUP AT START ===
  console.log('[onEnter]', {
    sceneId: id,
    setFlags: scene.onEnterSetFlags || [],
    unlockScenes: scene.onEnterUnlockScenes || [],
    flagsNow: { ...progress.flags },
    unlockedNow: Array.from(progress.unlocked || [])
  });

  // Remove and clean audio player if present
  const audioElem = document.getElementById("scene-audio");
  if (audioElem) {
    audioElem.pause();
    audioElem.src = "";
    audioElem.load();
    audioElem.remove();
  }

  // Grab all containers safely
  const sceneImage = document.getElementById("scene-image");
  const sceneText = document.getElementById("scene-text");
  const scrambleDiv = document.getElementById("sentence-scramble");
  const feedbackDiv = document.getElementById("scramble-feedback");
  const fillBlankContainer = document.getElementById("sceneFillInTheBlank");
  const infoDiv = document.getElementById("challenge-info");
  const choicesDiv = document.getElementById("choices-container");
  const scene6UI = document.getElementById("scene6-ui");
  const gameContainer = document.getElementById("game-container");
  const container = document.getElementById('scene-container');
  const emailContainer = document.getElementById("email-challenge-container");

  // Clear and hide all relevant containers to prevent UI seepage
  [
    container,
    sceneImage,
    sceneText,
    infoDiv,
    choicesDiv,
    scrambleDiv,
    feedbackDiv,
    fillBlankContainer,
    scene6UI
  ].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  // Clear video multi-question UI if present
  const questionUI = document.getElementById("video-question-ui");
  if (questionUI) {
    questionUI.style.display = "none";
    questionUI.innerHTML = "";
  }

  // Remove or hide video player if present
  const videoElem = document.getElementById("scene-video");
  if (videoElem) {
    videoElem.pause();
    videoElem.src = "";
    videoElem.load();
    videoElem.remove(); // completely remove from DOM
  }

  // --- Hangman teardown (prevents elements seeping across scenes) ---
  const hm = document.getElementById('hangman');
  if (hm) hm.remove();
  if (window.__hmKeyHandler) {
    document.removeEventListener('keydown', window.__hmKeyHandler);
    window.__hmKeyHandler = null;
  }

  // --- Survivor teardown (prevents seepage) ---
  if (window.__svCleanup) { window.__svCleanup(); window.__svCleanup = null; }
  const svWrap = document.getElementById('survivor-quiz');
  if (svWrap) svWrap.remove();

  // --- Conjugation Race teardown (prevents seepage) ---
  if (window.__crCleanup) { window.__crCleanup(); window.__crCleanup = null; }
  const crWrap = document.getElementById('conj-race');
  if (crWrap) crWrap.remove();

  // --- Hotspots teardown (prevents seepage) ---
  if (window.__hsCleanup) { window.__hsCleanup(); window.__hsCleanup = null; }
  const hsWrap = document.getElementById('hotspots');
  if (hsWrap) hsWrap.remove();

  // --- Buckets teardown (prevents seepage) ---
  if (window.__bkCleanup) { window.__bkCleanup(); window.__bkCleanup = null; }
  const bkWrap = document.getElementById('buckets');
  if (bkWrap) bkWrap.remove();

  // --- Particle Swapper teardown (prevents seepage) ---
  if (window.__psCleanup) { window.__psCleanup(); window.__psCleanup = null; }
  const psWrap = document.getElementById('particle-swapper');
  if (psWrap) psWrap.remove();

  // --- Comic Bubbles teardown (prevents seepage) ---
  if (window.__cbCleanup) { window.__cbCleanup(); window.__cbCleanup = null; }
  const cbWrap = document.getElementById('comic-bubbles');
  if (cbWrap) cbWrap.remove();

  // --- Dashboard teardown (prevents seepage) ---
  if (window.__dashCleanup) { window.__dashCleanup(); window.__dashCleanup = null; }
  const dashWrap = document.getElementById('dashboard-wrap');
  if (dashWrap) dashWrap.remove();

    // === TRANSIENTS: nuke anything registered by loaders (Step 2) ===
  if (window.cleanupTransients) cleanupTransients();

  // Extra: destroy any global Sortable handle we might have left around
  try {
    if (window.scrambleSortable && typeof window.scrambleSortable.destroy === 'function') {
      window.scrambleSortable.destroy();
    }
  } catch(_) {}
  window.scrambleSortable = null;

  // Extra: kill common stray UI blocks some loaders create
  [
    'video-question',
    'video-multi-audio-question-ui',
    'video-multi-question-options',
    'video-multi-question-timer',
    'video-multi-question-feedback'
  ].forEach(id => { const n = document.getElementById(id); if (n) n.remove(); });

  // HARD SWEEPER: keep only the canonical containers under #game-container
  (function sweepGameContainer(){
    const gc = document.getElementById('game-container');
    if (!gc) return;
    const keep = new Set([
      'scene-image',
      'scene-text',
      'challenge-info',
      'choices-container',
      'scene6-ui',
      'sentence-scramble',
      'scramble-feedback',
      'sceneFillInTheBlank',
      'scene-container',
      'email-challenge-container'
    ]);
    Array.from(gc.children).forEach(child => {
      // remove anything not in the canonical set
      if (!keep.has(child.id)) child.remove();
    });
  })();


  // === TRANSIENTS: nuke anything registered by loaders (Step 2) ===
  if (window.cleanupTransients) cleanupTransients();

  // Special handling for emailContainer:
  // Clear and hide only if scene.type !== 'email'
  if (emailContainer) {
    if (scene.type !== "email") {
      emailContainer.style.display = "none";
      emailContainer.innerHTML = "";
    } else {
      // For email scenes, keep it visible and intact
      emailContainer.style.display = "block";
    }
  }

  if (gameContainer) gameContainer.style.display = "block";

 // === Unified hero image (works for ALL scene types) ===
{
  const imgHost = sceneImage || document.getElementById("scene-image");
  if (imgHost) {
    if (scene.image) {
      imgHost.style.display = "block";
      const cls = scene.imageClass ? ` class="${scene.imageClass}"` : "";
      imgHost.innerHTML = `<img src="${scene.image}" alt="Scene Image"${cls}>`;
    } else {
      imgHost.style.display = "none";
      imgHost.innerHTML = "";
    }
  }
}


  // Dispatch by scene type
  switch (scene.type) {
    case "interaction":
      loadInteractionScene(id);
      return;

    case "interaction-scramble":
      loadInteractionScrambleScene(id);
      return;

    case "interaction-fill-in-the-blank":
      if (fillBlankContainer) {
        fillBlankContainer.style.display = "block";
        loadInteractionFillBlankScene(id);
      }
      return;

    case "interaction-audio-mc":
      loadInteractionAudioMCScene(id);
      return;

    case "fill-in-the-blank":
      if (fillBlankContainer) {
        fillBlankContainer.style.display = "block";
        loadFillInTheBlankScene(id, fillBlankContainer);
      }
      return;

    case "video":
      loadVideoScene(id);
      return;

    case "video-multi-question":
      loadVideoMultiQuestionScene(id);
      return;

    case "video-multi-audio-choice":
      loadVideoMultiAudioChoiceScene(id);
      return;

    case "video-scramble":
      loadVideoScrambleScene(id);
      return;

    case "video-fill-in-the-blank":
      loadVideoFillBlankScene(id);
      return;

    case "hangman":
      loadHangmanScene(id);
      return;

    case "survivor-quiz":
      loadSurvivorQuizScene(id);
      return;

    case "conjugation-race":
      loadConjugationRaceScene(id);
      return;

    case "image-hotspots":
      loadHotspotsScene(id);
      return;

    case "buckets":
      loadBucketsScene(id);
      return;

    case "particle-swapper":
      loadParticleSwapperScene(id);
      return;

    case "comic-bubbles":
      loadComicBubblesScene(id);
      return;

    case "dashboard":
      loadDashboardScene(id);
      return;

    case "classify-buckets":
      loadBucketsScene(id);
      return;

    case "email":
      loadEmailChallengeScene(id);
      return;

    default:
      break;
  }

  // Show text or hide
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else if (scene.render) {
      sceneText.style.display = "none";
    } else {
      sceneText.innerHTML = "";
    }
  }

  // Show image or hide
  if (sceneImage) {
    if (scene.image) {
      sceneImage.style.display = "block";
      const cls = scene.imageClass ? ` class="${scene.imageClass}"` : '';
      sceneImage.innerHTML = `<img src="${scene.image}" alt="Scene Image"${cls}>`;
    } else {
      sceneImage.style.display = "none";
      sceneImage.innerHTML = "";
    }
  }

  // Scramble challenge (existing scramble logic)
 // Scramble challenge (universal scramble logic)
// Scramble challenge (robust + back-compat)
if (
  (scene.type === "scramble" ||
    ((scene.scramble || scene.words || scene.sentence) && scene.correct && scene.next)) &&
  scene.type !== "fill-in-the-blank" &&
  scene.type !== "interaction-scramble"
) {
  if (scrambleDiv && feedbackDiv) {
    scrambleDiv.style.display = "block";
    feedbackDiv.style.display = "block";
    scrambleDiv.innerHTML = "";
    feedbackDiv.innerText = "";

    const instruction = document.createElement("p");
    instruction.className = "scramble-instructions";
    instruction.textContent = "🧩 Drag the words into the correct order:";
    scrambleDiv.appendChild(instruction);

    // Accept any of: scramble[] | words[] | sentence[]
    const source =
      (Array.isArray(scene.scramble) && scene.scramble) ||
      (Array.isArray(scene.words) && scene.words) ||
      (Array.isArray(scene.sentence) && scene.sentence) ||
      [];

    // Normalize correct → array of tokens
    const correctArr = Array.isArray(scene.correct)
      ? scene.correct
      : (typeof scene.correct === "string" ? scene.correct.trim().split(/\s+/) : []);

    if (!source.length || !correctArr.length) {
      console.warn("[Scramble] Missing tokens/correct for:", scene.id);
      feedbackDiv.textContent = "⚠️ This scramble is missing data.";
      feedbackDiv.style.color = "orange";
      return;
    }

    const scrambleContainer = document.createElement("div");
    scrambleContainer.id = "scramble-words";

    const shuffled = shuffleArray(source.slice());
    shuffled.forEach((token) => {
      const span = document.createElement("span");
      span.className = "scramble-word";
      span.textContent = token;
      scrambleContainer.appendChild(span);
    });
    scrambleDiv.appendChild(scrambleContainer);

    try { Sortable.create(scrambleContainer, { animation: 150 }); }
    catch (e) { console.warn("Sortable unavailable; drag disabled.", e); }

    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Check Answer";
    checkBtn.onclick = () => checkScrambleAnswer(correctArr, scene.next);
    scrambleDiv.appendChild(checkBtn);
  }
  return;
}



  // Choices buttons (with optional gating + CRM apply)
  if (scene.choices && scene.choices.length > 0 && choicesDiv) {
    choicesDiv.style.display = "block";
    choicesDiv.innerHTML = "";
    scene.choices.forEach((choice) => {
      const reqFlags = choice.requiresFlags || [];
      const reqScenes = choice.requiresScenes || [];
      const okFlags = reqFlags.every(hasFlag);
      const okScenes = reqScenes.every(isUnlocked);
      const available = okFlags && okScenes;

      const btn = document.createElement("button");
      btn.textContent = available ? choice.text : `🔒 ${choice.text}`;
      btn.disabled = !available;
      btn.onclick = () => {
        if (!available) return;
        try {
          if (choice.applyCrm) window.crm && window.crm.apply(choice.applyCrm);
        } catch (e) { console.warn('CRM apply (choice) failed', e); }
        loadScene(choice.next);
      };
      choicesDiv.appendChild(btn);
    });
    return;
  }

  // Render function fallback
  if (scene.render && sceneText) {
    sceneText.innerHTML = "";
    scene.render(sceneText);
    return;
  }

  // Text only fallback
  if (scene.text && sceneText) {
    sceneText.innerHTML = "";
    const p = document.createElement("p");
    p.textContent = scene.text;
    sceneText.appendChild(p);
  }

  // Add Play Again button only on final thank you scene (outside switch, after all rendering)
  if (id === "thank_you_scene" && container) {
    container.style.display = "block"; // ensure container visible
    if (!document.getElementById("play-again")) {
      console.log(">>> Adding Play Again button now!");
      const message = document.createElement('p');
      message.textContent = "Thank you for playing! Please click below to play again.";
      container.appendChild(message);

      const playAgainBtn = document.createElement('button');
      playAgainBtn.id = "play-again";
      playAgainBtn.textContent = "Play Again";
      playAgainBtn.style.cssText = `
        margin-top: 20px;
        font-size: 1.2rem;
        padding: 10px 20px;
        background-color: #0ff;
        color: #000;
        border: none;
        cursor: pointer;
      `;
      playAgainBtn.onclick = () => {
        currentSceneId = "scene1"; // Reset to first scene
        loadScene(currentSceneId);
      };
      container.appendChild(playAgainBtn);
    } else {
      console.log(">>> Play Again button already exists.");
    }
  } else {
    console.log(`>>> No Play Again button added on scene "${id}".`);
  }
}























// === Scramble answer check ===
function checkScrambleAnswer(correctOrder, nextSceneId) {
  const words = Array.from(document.querySelectorAll("#scramble-words .scramble-word"));
  const userOrder = words.map((w) => w.textContent.trim());
  const feedback = document.getElementById("scramble-feedback");
  const container = document.getElementById('scene-container');
  const scene = scenes[currentSceneId];  // get current scene

  if (!feedback) return;

  if (arraysEqual(userOrder, correctOrder)) {
    feedback.textContent = "✅ Correct! Moving on...";
    feedback.style.color = "lightgreen";

       // ✅ award unlocks/flags defined on the current scene
    if (Array.isArray(scene.unlockScenes)) scene.unlockScenes.forEach(unlockScene);
    if (Array.isArray(scene.setFlags)) scene.setFlags.forEach(setFlag);

    setTimeout(() => {
      const nextScene = scenes[nextSceneId];
      if (nextScene && nextScene.type === "interaction") {
        loadInteractionScene(nextSceneId);
      } else {
        loadScene(nextSceneId);
      }
    }, 1000);
  } else {
    feedback.textContent = "❌ Not quite. Try again.";
    feedback.style.color = "salmon";
  }

  if (scene.playAgain && container && !document.getElementById("play-again")) {
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.id = "play-again";
    playAgainBtn.style.cssText = `
      margin-top: 20px;
      font-size: 1.2rem;
      padding: 10px 20px;
      background-color: #0ff;
      color: #000;
      border: none;
      cursor: pointer;
    `;
    playAgainBtn.addEventListener('click', () => {
      // Reset game variables/state here if needed
      loadScene('scene1');
    });
    container.appendChild(playAgainBtn);
  }
}


// === Drag-and-drop Fill-in-the-Blank ===
function loadFillInTheBlankScene(sceneId, container) {
  const infoDiv = document.getElementById("challenge-info");
  if (infoDiv) {
    infoDiv.style.display = "none";
    infoDiv.innerHTML = "";
  }

  const scene = scenes[sceneId];
  // --- Defensive: build sentence/blanks from "___" if not provided ---
if (!Array.isArray(scene.sentence) || !Array.isArray(scene.blanks)) {
  const parts = String(scene.text || '').split('___');
  const toks = []; const blanks = [];
  const toWords = s => String(s).trim().split(/\s+/).filter(Boolean);
  parts.forEach((seg, i) => {
    if (seg) toks.push(...toWords(seg));
    if (i < parts.length - 1) { blanks.push(toks.length); toks.push('___'); }
  });
  scene.sentence = Array.isArray(scene.sentence) ? scene.sentence : toks;
  scene.blanks   = Array.isArray(scene.blanks)   ? scene.blanks   : blanks;
}
// normalize correct to array
if (typeof scene.correct === 'string') scene.correct = [scene.correct];

  if (!scene) {
    console.error(`Scene ${sceneId} not found.`);
    return;
  }

  // Inject HTML structure into container
  container.innerHTML = `
    <h2>Fill in the Blanks Challenge</h2>
    <p>${scene.text || "Fill in the blanks by dragging the correct options below."}</p>
    <p id="fill-blank-sentence" style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;"></p>
    <div id="fill-blank-options" style="margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 8px;"></div>
    <button id="check-fill-blank-answer">Check Answer</button>
    <div id="fill-blank-feedback" style="margin-top: 10px; font-weight: bold;"></div>
  `;

  const sentenceEl = container.querySelector("#fill-blank-sentence");
  const optionsEl = container.querySelector("#fill-blank-options");
  const feedbackEl = container.querySelector("#fill-blank-feedback");

  // Destroy any existing Sortable instances before creating new ones
  if (container._sortableBlanks) {
    container._sortableBlanks.forEach(s => s.destroy());
    container._sortableBlanks = null;
  }
  if (container._sortableOptions) {
    container._sortableOptions.destroy();
    container._sortableOptions = null;
  }

  // Render the sentence with blanks as droppable zones
  let html = "";
  for (let i = 0; i < scene.sentence.length; i++) {
    if (scene.blanks.includes(i)) {
      html += `<span class="fill-blank-dropzone" data-index="${i}" style="
        display: inline-block;
        min-width: 80px;
        border-bottom: 2px solid #00ffff;
        margin: 0 4px;
        vertical-align: bottom;
        padding: 4px 6px;
        cursor: pointer;
        background-color: #111;
      "></span> `;
    } else {
      html += `<span style="margin: 0 4px;">${scene.sentence[i]}</span> `;
    }
  }
  sentenceEl.innerHTML = html;

  // Render draggable options
  optionsEl.innerHTML = "";
  scene.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "fill-blank-option";
    btn.style.cssText = `
      padding: 6px 12px;
      border-radius: 6px;
      border: 2px solid #00ffff;
      background: #000;
      color: #0ff;
      font-weight: bold;
      cursor: grab;
      user-select: none;
    `;
    optionsEl.appendChild(btn);
  });

  // Setup SortableJS for blanks (droppable zones)
  const dropzones = sentenceEl.querySelectorAll(".fill-blank-dropzone");
  container._sortableBlanks = Array.from(dropzones).map(zone => {
    return Sortable.create(zone, {
      group: "fillInTheBlank",
      animation: 150,
      sort: false,
      onAdd: evt => {
        const dragged = evt.item;
        // Remove dragged from options pool when dropped into blank
        if (dragged.parentNode === optionsEl) {
          dragged.parentNode.removeChild(dragged);
        }
        // Ensure only one child in each dropzone
        if (evt.to.children.length > 1) {
          Array.from(evt.to.children).forEach(child => {
            if (child !== dragged) {
              evt.to.removeChild(child);
              optionsEl.appendChild(child);
            }
          });
        }
      },
      onRemove: evt => {
        // Append dragged item back to options pool when removed from blank
        optionsEl.appendChild(evt.item);
      }
    });
  });

  // Setup SortableJS for options container
  container._sortableOptions = Sortable.create(optionsEl, {
    group: "fillInTheBlank",
    animation: 150,
  });

  // Check answer button logic
  container.querySelector("#check-fill-blank-answer").onclick = () => {
    const userAnswers = [];
    let allFilled = true;
    dropzones.forEach(zone => {
      if (zone.children.length === 1) {
        userAnswers.push(zone.children[0].textContent.trim());
      } else {
        allFilled = false;
      }
    });

    if (!allFilled) {
      feedbackEl.textContent = "⚠️ Please fill all blanks.";
      feedbackEl.style.color = "orange";
      return;
    }

    // Compare user answers to correct answers case-insensitively
    const allCorrect = userAnswers.every(
      (ans, i) => ans.toLowerCase() === scene.correct[i].toLowerCase()
    );

    if (allCorrect) {
      feedbackEl.textContent = "✅ Correct! Well done.";
      feedbackEl.style.color = "lightgreen";
            // ✅ award unlocks/flags for this scene
      if (Array.isArray(scene.unlockScenes)) scene.unlockScenes.forEach(unlockScene);
      if (Array.isArray(scene.setFlags)) scene.setFlags.forEach(setFlag);
      if (scene.next) {
        setTimeout(() => loadScene(scene.next), 1500);
      }
    } else {
      feedbackEl.textContent = "❌ Not quite. Try again.";
      feedbackEl.style.color = "red";
    }
  };
}








// === Video challenge loader ===
function loadVideoScene(sceneId) {
  const infoDiv = document.getElementById("challenge-info");
  if (infoDiv) { infoDiv.style.display = "none"; infoDiv.innerHTML = ""; }

  const scene = scenes[sceneId];
  if (!scene) { console.error(`Scene ${sceneId} not found.`); return; }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");

  if (gameContainer) gameContainer.style.display = "block";

  // Keep your standard containers; just manage the video + question UI
  // Clean any previous video/question UI
  const oldVideo = document.getElementById("scene-video");
  if (oldVideo) { oldVideo.pause(); oldVideo.src = ""; oldVideo.load(); oldVideo.remove(); }
  const oldQ = document.getElementById("video-question");
  if (oldQ) oldQ.remove();

  // Optional instruction
  if (sceneText) {
    sceneText.style.display = "block";
    sceneText.textContent = scene.text || "";
  }

  // Build video
  const video = document.createElement("video");
  video.id = "scene-video";
  video.controls = true;
  video.style.maxWidth = "100%";
  video.style.height = "auto";
  video.innerHTML = `<source src="${scene.videoSrc}" type="video/mp4" />Your browser does not support the video tag.`;

  // Insert video after sceneText if possible
  if (sceneText && sceneText.parentNode) {
    sceneText.parentNode.insertBefore(video, sceneText.nextSibling);
  } else {
    gameContainer.appendChild(video);
  }

  // Build question UI (hidden initially)
  const q = document.createElement("div");
  q.id = "video-question";
  q.style.marginTop = "20px";
  q.style.display = "none";
  q.innerHTML = `
    <p>${scene.question || "Watch the video and answer the question below."}</p>
    <div id="video-options"></div>
    <div id="video-feedback" style="margin-top:10px;font-weight:bold;"></div>
    <button id="check-video-answer" disabled>Check Answer</button>
  `;
  gameContainer.appendChild(q);

  const optionsDiv = q.querySelector("#video-options");
  const feedbackDiv = q.querySelector("#video-feedback");
  const checkBtn = q.querySelector("#check-video-answer");

  video.onended = () => {
    q.style.display = "block";
    optionsDiv.innerHTML = "";
    scene.options.forEach((opt, i) => {
      const label = document.createElement("label");
      label.style.display = "block";
      label.style.marginBottom = "8px";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "video-answer";
      radio.value = i;
      radio.addEventListener("change", () => {
        checkBtn.disabled = false;
        feedbackDiv.textContent = "";
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(" " + opt));
      optionsDiv.appendChild(label);
    });
  };

  checkBtn.onclick = () => {
    const selected = q.querySelector('input[name="video-answer"]:checked');
    if (!selected) {
      feedbackDiv.textContent = "⚠️ Please select an answer.";
      feedbackDiv.style.color = "orange";
      return;
    }
    const answerIndex = parseInt(selected.value, 10);
    const isCorrect = (answerIndex === scene.correct);

    if (isCorrect) {
      feedbackDiv.textContent = "✅ Correct! Moving on...";
      feedbackDiv.style.color = "lightgreen";

      // Optional: award unlocks/flags if you want video->MCQ to unlock too
      if (Array.isArray(scene.unlockScenes)) scene.unlockScenes.forEach(unlockScene);
      if (Array.isArray(scene.setFlags)) scene.setFlags.forEach(setFlag);

      setTimeout(() => { if (scene.next) loadScene(scene.next); }, 1200);
    } else {
      feedbackDiv.textContent = "❌ Not quite. Try again.";
      feedbackDiv.style.color = "red";
    }
  };
}


// === Audio negotiation interaction loader ===
function loadInteractionScene(id) {
  const infoDiv = document.getElementById("challenge-info");
if (infoDiv) {
  infoDiv.style.display = "none";
  infoDiv.innerHTML = "";
}

  console.log(`Loading interaction scene: ${id}`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const scramble = document.getElementById("sentence-scramble");
  const feedback = document.getElementById("scramble-feedback");
  const interactionUI = document.getElementById("scene6-ui");

  if (gameContainer) gameContainer.style.display = "block";
  if (interactionUI) interactionUI.style.display = "block";

  // Show text if present
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
    }
  }

  // Show image if present
  if (sceneImage) {
    if (scene.image) {
      sceneImage.style.display = "block";
  const imgClass = scene.imageClass ? ` class="${scene.imageClass}"` : '';
sceneImage.innerHTML = `<img src="${scene.image}" alt="Scene Image"${imgClass}>`;

    } else {
      sceneImage.style.display = "none";
      sceneImage.innerHTML = "";
    }
  }

  // Hide scramble and feedback
  if (scramble) scramble.style.display = "none";
  if (feedback) feedback.style.display = "none";

  if (interactionUI) {
    interactionUI.innerHTML = `
      <h2>Negotiation</h2>
      <p>🎙️ Listen carefully. Press play when ready. Once the audio ends, you’ll have <strong>30 seconds</strong> to choose your reply.</p>
      <div id="interaction"></div>
    `;
  }

  let score = 0;
  let index = 0;

  function showInteraction() {
    
    console.log(`showInteraction called, index = ${index}`);

    if (index >= scene.interactions.length) {
      const ending =
        score >= scene.scoring.high ? scene.endings.high :
        score >= scene.scoring.medium ? scene.endings.medium :
        scene.endings.low;

      console.log("All interactions done, loading ending:", ending);

      // Show back regular UI containers
      if (sceneText) sceneText.style.display = "block";
      if (sceneImage) sceneImage.style.display = "block";
      if (scramble) scramble.style.display = "block";
      if (feedback) feedback.style.display = "block";

      if (interactionUI) {
        interactionUI.style.display = "none";
        interactionUI.innerHTML = "";
      }

      loadScene(ending);
      return;
    }

    const interaction = scene.interactions[index];
    const interactionDiv = document.getElementById("interaction");
    if (!interactionDiv) return;

    interactionDiv.innerHTML = `
      <audio id="interaction-audio" controls>
        <source src="${interaction.audio}" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div id="timer">⏳ Waiting for audio to finish...</div>
      <div id="options" style="margin-top: 10px;"></div>
      <div id="feedback" style="margin-top: 10px;"></div>
    `;

    const audio = document.getElementById("interaction-audio");

    audio.onplay = () => {
      console.log("Audio started playing");
    };

    audio.onerror = (e) => {
      console.error("Audio error:", e);
    };

    audio.onended = () => {
      console.log("Audio ended");

      let timeLeft = 30;
      const timerEl = document.getElementById("timer");
      if (timerEl) timerEl.textContent = `⏳ ${timeLeft} seconds remaining...`;

      const countdown = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = `⏳ ${timeLeft} seconds remaining...`;
        if (timeLeft <= 0) {
          clearInterval(countdown);
          const feedbackDiv = document.getElementById("feedback");
          if (feedbackDiv) feedbackDiv.textContent = "⌛ Time expired. No reply sent.";
          index++;
          setTimeout(showInteraction, 2000);
        }
      }, 1000);

      const optionsDiv = document.getElementById("options");
      if (!optionsDiv) return;
      optionsDiv.innerHTML = "";

      interaction.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = typeof opt === "string" ? opt : opt.text;
        btn.onclick = () => {
          clearInterval(countdown);
          console.log(`Option clicked: ${btn.textContent}`);
          const isCorrect = (typeof opt === "string") ? (i === interaction.correct) : (opt.score === 1);
          const feedbackDiv = document.getElementById("feedback");
          if (feedbackDiv) {
            if (isCorrect) {
              score++;
              feedbackDiv.textContent = "✅ Response recorded.";
              feedbackDiv.style.color = "lightgreen";
            } else {
              feedbackDiv.textContent = "⚠️ Response recorded.";
              feedbackDiv.style.color = "orange";
            }
          }
          index++;
          setTimeout(showInteraction, 1500);
        };
        optionsDiv.appendChild(btn);
      });
    };
  }

  showInteraction();
}

// === Email writing challenge loader ===
function loadEmailChallengeScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) {
    console.error(`Scene ${sceneId} not found.`);
    return;
  }

  // Clear and hide the scene image container to prevent lingering images from previous scenes
  const sceneImage = document.getElementById("scene-image");
  if (sceneImage) {
    sceneImage.style.display = "none";
    sceneImage.innerHTML = "";
  }

  const emailContainer = document.getElementById("email-challenge-container");
  if (!emailContainer) {
    console.error("Email challenge container not found");
    return;
  }

  // Use scene.text explicitly, with a console warning if missing
  if (!scene.text || scene.text.trim() === "") {
    console.warn(`Scene ${sceneId} missing 'text' property or it is empty.`);
  }

  emailContainer.innerHTML = `
    <h2>Final Assignment</h2>
    <p style="white-space: pre-wrap; font-weight: 600;">${scene.text || "Please write an email to your teacher below."}</p>
    <form id="email-form" style="margin-top: 20px;">
      <label for="email-to">To:</label><br/>
      <input type="email" id="email-to" name="email-to" value="${scene.teacherEmail || ''}" style="width: 100%;" readonly /><br/><br/>
      
      <label for="email-subject">Subject:</label><br/>
      <input type="text" id="email-subject" name="email-subject" value="${scene.emailSubject || 'Assignment Submission'}" style="width: 100%;" /><br/><br/>
      
      <label for="email-body">Message:</label><br/>
      <textarea id="email-body" name="email-body" rows="8" style="width: 100%;">${scene.emailBody || ''}</textarea><br/><br/>
      
      <button type="button" id="send-email-btn">Send Email</button>
    </form>
    <div id="email-feedback" style="margin-top: 15px; font-weight: bold;"></div>
  `;

  const form = emailContainer.querySelector("#email-form");
  const toInput = emailContainer.querySelector("#email-to");
  const subjectInput = emailContainer.querySelector("#email-subject");
  const bodyInput = emailContainer.querySelector("#email-body");
  const feedback = emailContainer.querySelector("#email-feedback");
  const sendBtn = emailContainer.querySelector("#send-email-btn");

// Inside loadEmailChallengeScene(sceneId) — replace ONLY the click handler
sendBtn.onclick = () => {
  // Resolve the current scene safely (works even if the param name differs)
  const sid = typeof sceneId !== "undefined" ? sceneId : window.currentSceneId;
  const sc  = (window.scenes && window.scenes[sid]) || null;
  if (!sc) { console.error("Email scene not found for", sid); return; }

  const to  = (sc.teacherEmail || "").trim();
  const sub = encodeURIComponent(sc.emailSubject || "");

  // Try to read the body from UI; fall back to scene.emailBody
  const bodyEl =
    document.getElementById("email-body") ||
    document.getElementById("emailBody") ||
    document.querySelector("#email-challenge-container textarea");

  const uiBodyRaw = (bodyEl && bodyEl.value) || sc.emailBody || "";
  const body = encodeURIComponent(uiBodyRaw.replace(/\r?\n/g, "\r\n"));

  const href = `mailto:${to}?subject=${sub}&body=${body}`;

  // Try opening the mail client, but ALWAYS advance to next scene
  try { window.open(href, "_blank"); } catch (_) { location.href = href; }

  const nextId = sc.next;
  if (nextId) {
    try { window.unlockScene && window.unlockScene(nextId); } catch {}
    setTimeout(() => window.loadScene(nextId), 150);
  }
};


}
function loadInteractionScrambleScene(id) {
  console.log(`Loading interaction-scramble scene: ${id}`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  const scrambleDiv = document.getElementById("sentence-scramble");
  const feedbackDiv = document.getElementById("scramble-feedback");
  const infoDiv = document.getElementById("challenge-info");
  const container = document.getElementById('scene-container');
  const emailContainer = document.getElementById("email-challenge-container");
  const fillBlankContainer = document.getElementById("sceneFillInTheBlank");
  const choicesDiv = document.getElementById("choices-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const scene6UI = document.getElementById("scene6-ui");

  // Clear unrelated UI containers
  [container, emailContainer, fillBlankContainer, choicesDiv, sceneText, sceneImage, scene6UI].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  // Setup scramble UI
  scrambleDiv.style.display = "block";
  scrambleDiv.innerHTML = "";
  feedbackDiv.style.display = "none";
  feedbackDiv.innerHTML = "";

  // Show info text if present
  if (infoDiv) {
    if (scene.emailFromClient) {
      infoDiv.style.display = "block";
      infoDiv.innerHTML = scene.emailFromClient;
    } else if (scene.contextText) {
      infoDiv.style.display = "block";
      infoDiv.textContent = scene.contextText;
    } else {
      infoDiv.style.display = "none";
      infoDiv.innerHTML = "";
    }
  }

  // Instruction
  const instruction = document.createElement("p");
  instruction.className = "scramble-instructions";
  instruction.textContent = "🧩 Drag the words into the correct order after listening to the audio:";
  scrambleDiv.appendChild(instruction);

  // Scramble words container
  const scrambleContainer = document.createElement("div");
  scrambleContainer.id = "scramble-words";
  const shuffled = shuffleArray(scene.scramble);
  shuffled.forEach(word => {
    const span = document.createElement("span");
    span.className = "scramble-word";
    span.textContent = word;
    scrambleContainer.appendChild(span);
  });
  scrambleDiv.appendChild(scrambleContainer);

  // Destroy old Sortable instance
  if (window.scrambleSortable) {
    window.scrambleSortable.destroy();
  }
  window.scrambleSortable = Sortable.create(scrambleContainer, { animation: 150 });

  // Audio player
  let audioElem = document.getElementById("scene-audio");
  if (audioElem) {
    audioElem.pause();
    audioElem.src = "";
    audioElem.load();
    audioElem.remove();
  }
  audioElem = document.createElement("audio");
  audioElem.id = "scene-audio";
  audioElem.controls = true;
  audioElem.src = scene.audio;
  document.getElementById("game-container").appendChild(audioElem);
  audioElem.load();

  // Submit button
  let submitBtn = document.getElementById("scramble-submit-btn");
  if (submitBtn) {
    submitBtn.removeEventListener('click', submitBtn._listener);
    submitBtn.remove();
  }
  submitBtn = document.createElement("button");
  submitBtn.id = "scramble-submit-btn";
  submitBtn.textContent = "Submit Answer";
  submitBtn.style.marginTop = "15px";
  scrambleDiv.appendChild(document.createElement("br"));
  scrambleDiv.appendChild(submitBtn);

  const onSubmit = () => {
    const arrangedWords = Array.from(scrambleContainer.querySelectorAll('.scramble-word')).map(el => el.textContent);
    if (arraysEqual(arrangedWords, scene.correct)) {
      alert("Correct! Moving to next scene.");
      currentSceneId = scene.next;
      loadScene(currentSceneId);
    } else {
      alert("Not quite right. Try again.");
    }
  };
  submitBtn.addEventListener('click', onSubmit);
  submitBtn._listener = onSubmit;
}

function loadInteractionFillBlankScene(id) {
  console.log(`Loading interaction-fill-in-the-blank scene: ${id}`);
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  // Containers
  const scrambleDiv = document.getElementById("sentence-scramble");
  const feedbackDiv = document.getElementById("scramble-feedback");
  const infoDiv = document.getElementById("challenge-info");
  const container = document.getElementById('scene-container');
  const emailContainer = document.getElementById("email-challenge-container");
  const fillBlankContainer = document.getElementById("sceneFillInTheBlank");
  const choicesDiv = document.getElementById("choices-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const scene6UI = document.getElementById("scene6-ui");

  // Clear unrelated UI containers
  [container, emailContainer, scrambleDiv, feedbackDiv, choicesDiv, sceneText, sceneImage, scene6UI].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  if (fillBlankContainer) {
    fillBlankContainer.style.display = "block";
    fillBlankContainer.innerHTML = "";
  }

  // Show info text if present
  if (infoDiv) {
    if (scene.emailFromClient) {
      infoDiv.style.display = "block";
      infoDiv.innerHTML = scene.emailFromClient;
    } else if (scene.contextText) {
      infoDiv.style.display = "block";
      infoDiv.textContent = scene.contextText;
    } else {
      infoDiv.style.display = "none";
      infoDiv.innerHTML = "";
    }
  }

  // Audio player
  let audioElem = document.getElementById("scene-audio");
  if (audioElem) {
    audioElem.pause();
    audioElem.src = "";
    audioElem.load();
    audioElem.remove();
  }
  audioElem = document.createElement("audio");
  audioElem.id = "scene-audio";
  audioElem.controls = true;
  audioElem.src = scene.audio;
  document.getElementById("game-container").appendChild(audioElem);
  audioElem.load();

  // Build fill-in-the-blank UI
  fillBlankContainer.innerHTML = `
    <h2>Fill in the Blanks Challenge</h2>
    <p>${scene.text || "Fill in the blanks by dragging the correct options below."}</p>
    <p id="fill-blank-sentence" style="font-size: 1.2rem; line-height: 1.5; margin-bottom: 20px;"></p>
    <div id="fill-blank-options" style="margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 8px;"></div>
    <button id="check-fill-blank-answer">Check Answer</button>
    <div id="fill-blank-feedback" style="margin-top: 10px; font-weight: bold;"></div>
  `;

  const sentenceEl = fillBlankContainer.querySelector("#fill-blank-sentence");
  const optionsEl = fillBlankContainer.querySelector("#fill-blank-options");
  const feedbackEl = fillBlankContainer.querySelector("#fill-blank-feedback");

  // Render sentence with blanks
  let html = "";
  for (let i = 0; i < scene.sentence.length; i++) {
    if (scene.blanks.includes(i)) {
      html += `<span class="fill-blank-dropzone" data-index="${i}" style="
        display: inline-block;
        min-width: 80px;
        border-bottom: 2px solid #00ffff;
        margin: 0 4px;
        vertical-align: bottom;
        padding: 4px 6px;
        cursor: pointer;
        background-color: #111;
      "></span> `;
    } else {
      html += `<span style="margin: 0 4px;">${scene.sentence[i]}</span> `;
    }
  }
  sentenceEl.innerHTML = html;

  // Render draggable options
  optionsEl.innerHTML = "";
  scene.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "fill-blank-option";
    btn.style.cssText = `
      padding: 6px 12px;
      border-radius: 6px;
      border: 2px solid #00ffff;
      background: #000;
      color: #0ff;
      font-weight: bold;
      cursor: grab;
      user-select: none;
    `;
    optionsEl.appendChild(btn);
  });

  // Cleanup Sortable instances if any
  if (fillBlankContainer._sortableBlanks) {
    fillBlankContainer._sortableBlanks.forEach(s => s.destroy());
    fillBlankContainer._sortableBlanks = null;
  }
  if (fillBlankContainer._sortableOptions) {
    fillBlankContainer._sortableOptions.destroy();
    fillBlankContainer._sortableOptions = null;
  }

  // Setup SortableJS droppable blanks
  const dropzones = sentenceEl.querySelectorAll(".fill-blank-dropzone");
  fillBlankContainer._sortableBlanks = Array.from(dropzones).map(zone => {
    return Sortable.create(zone, {
      group: "fillInTheBlank",
      animation: 150,
      sort: false,
      onAdd: evt => {
        const dragged = evt.item;
        if (dragged.parentNode === optionsEl) {
          dragged.parentNode.removeChild(dragged);
        }
        if (evt.to.children.length > 1) {
          Array.from(evt.to.children).forEach(child => {
            if (child !== dragged) {
              evt.to.removeChild(child);
              optionsEl.appendChild(child);
            }
          });
        }
      },
      onRemove: evt => {
        optionsEl.appendChild(evt.item);
      }
    });
  });

  // Setup SortableJS options container
  fillBlankContainer._sortableOptions = Sortable.create(optionsEl, {
    group: "fillInTheBlank",
    animation: 150,
  });

  // Check answer logic
  const checkBtn = fillBlankContainer.querySelector("#check-fill-blank-answer");
  checkBtn.removeEventListener('click', checkBtn._listener);
  const onCheck = () => {
    const userAnswers = [];
    let allFilled = true;
    dropzones.forEach(zone => {
      if (zone.children.length === 1) {
        userAnswers.push(zone.children[0].textContent.trim());
      } else {
        allFilled = false;
      }
    });

    if (!allFilled) {
      feedbackEl.textContent = "⚠️ Please fill all blanks.";
      feedbackEl.style.color = "orange";
      return;
    }

    const allCorrect = userAnswers.every(
      (ans, i) => ans.toLowerCase() === scene.correct[i].toLowerCase()
    );

    if (allCorrect) {
      feedbackEl.textContent = "✅ Correct! Well done.";
      feedbackEl.style.color = "lightgreen";
      if (scene.next) {
        setTimeout(() => loadScene(scene.next), 1500);
      }
    } else {
      feedbackEl.textContent = "❌ Not quite. Try again.";
      feedbackEl.style.color = "red";
    }
  };
  checkBtn.addEventListener('click', onCheck);
  checkBtn._listener = onCheck;
}

function loadInteractionAudioMCScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  const regNode     = window.registerNode     || ((n)=>n);
  const regListener = window.registerListener || ((t,e,h)=>t.addEventListener(e,h));
  const regTimer    = window.registerTimer    || ((t)=>t);

  const game = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const container = document.getElementById("scene-container");

  [sceneImage, container].forEach(el => { if (el) { el.style.display="none"; el.innerHTML=""; } });
  if (game) game.style.display = "block";
  if (sceneText) { sceneText.style.display = "block"; sceneText.textContent = scene.text || ""; }

  // --- Prompt audio ---
  const prompt = document.createElement("audio");
  prompt.id = "scene-audio";
  prompt.controls = true;
  prompt.src = scene.audio || scene.audioSrc || "";
  prompt.style.display = "block";
  prompt.style.margin = "0 auto 12px";
  prompt.style.maxWidth = "720px";
  regNode(prompt);

  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(prompt, sceneText.nextSibling);
  else game.appendChild(prompt);

  // --- Helpers ---
  const isAudioSrc = (s) => typeof s === "string" && /\.(mp3|wav|ogg|m4a)$/i.test(s);
  const basename = (p) => String(p||"").replace(/[#?].*$/,"").split("/").pop().toLowerCase().trim();
  const normText = (s) => String(s||"").trim().toLowerCase();

  const options = Array.isArray(scene.options) ? scene.options : [];
  const audioChoices = options.length > 0 && options.every(o => {
    if (typeof o === "string") return isAudioSrc(o);
    if (o && typeof o === "object") return isAudioSrc(o.audio || o.src);
    return false;
  });

  function getLabel(opt) {
    if (audioChoices) return (typeof opt === "string" ? opt : (opt.audio || opt.src));
    return (typeof opt === "string" ? opt : (opt.text || String(opt)));
  }
  function getNext(opt) {
    return (opt && typeof opt === "object" && opt.next) ? opt.next : scene.next;
  }
  function isCorrectIndex(i) {
    if (Number.isInteger(scene.__correctIndex)) return i === scene.__correctIndex;
    if (Number.isInteger(scene.correct)) return i === scene.correct;

    if (typeof scene.correct === "string") {
      const target = scene.correct;
      if (audioChoices) {
        // match by filename (robust across relative paths)
        return basename(getLabel(options[i])) === basename(target);
      } else {
        return normText(getLabel(options[i])) === normText(target);
      }
    }
    // Also honor per-option {correct:true}
    const opt = options[i];
    return !!(opt && typeof opt === "object" && opt.correct);
  }

  // --- UI wrapper (hidden until prompt ends or user skips) ---
  const ui = document.createElement("div");
  ui.id = "iamc-ui";
  ui.style.maxWidth = "720px";
  ui.style.margin = "0 auto";
  ui.style.display = "none";
  ui.style.color = "#eee";
  regNode(ui);
  game.appendChild(ui);

  let timerId = null;
  function clearTimer(){ if (timerId){ clearInterval(timerId); timerId = null; } }
  function startTimerIfNeeded(onTimeout) {
    const sec = Number(scene.timerSeconds || scene.timer);
    if (!sec || sec <= 0) return;
    const bar = document.createElement("div");
    bar.id = "iamc-timer";
    bar.style.cssText = "font-weight:700;margin-bottom:8px;color:#0ff;";
    bar.textContent = `⏳ ${sec}s`;
    ui.insertBefore(bar, ui.firstChild);
    let left = sec;
    timerId = regTimer(setInterval(() => {
      left--; bar.textContent = `⏳ ${Math.max(0,left)}s`;
      if (left <= 0) { clearTimer(); onTimeout(); }
    }, 1000));
  }

  function finish(ok, dest) {
    clearTimer();
    const fb = document.getElementById("iamc-feedback");
    if (fb) {
      fb.textContent = ok ? "✅ Correct! Moving on..." : "❌ Not quite. Moving on...";
      fb.style.color = ok ? "lightgreen" : "salmon";
    }
    setTimeout(() => { if (dest) loadScene(dest); }, 900);
  }

  function buildTextOptions() {
    ui.style.display = "block";
    ui.innerHTML = `
      <div id="iamc-options" style="display:flex;flex-direction:column;gap:8px;margin:10px 0;"></div>
      <div id="iamc-feedback" style="margin-top:10px;font-weight:700;"></div>
    `;
    const wrap = ui.querySelector("#iamc-options");

    options.forEach((opt, i) => {
      const label = getLabel(opt);
      const btn = document.createElement("button");
      btn.textContent = label;
      btn.style.cssText = "text-align:left;padding:10px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;font-weight:700;cursor:pointer";
      btn.onmouseenter = () => (btn.style.background = "#00cccc");
      btn.onmouseleave = () => (btn.style.background = "#00ffff");
      regListener(btn, "click", () => finish(isCorrectIndex(i), getNext(opt)));
      wrap.appendChild(btn);
    });

    startTimerIfNeeded(() => finish(false, scene.next));
  }

  function buildAudioOptions() {
    ui.style.display = "block";
    ui.innerHTML = `
      <p style="font-weight:700;margin-bottom:8px;">Play each reply and choose the best one:</p>
      <div id="iamc-audioopts" style="margin-bottom:12px;"></div>
      <button id="iamc-submit" style="padding:8px 16px;font-weight:700;background:#00ffff;border:none;border-radius:8px;cursor:pointer">Submit Answer</button>
      <div id="iamc-feedback" style="margin-top:10px;font-weight:700;"></div>
    `;
    const wrap = ui.querySelector("#iamc-audioopts");
    const submit = ui.querySelector("#iamc-submit");

    options.forEach((opt, i) => {
      const src = (typeof opt === "string" ? opt : (opt.audio || opt.src));
      const row = document.createElement("label");
      row.style.cssText = "display:flex;align-items:center;gap:10px;margin-bottom:12px;cursor:pointer;";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "audio-choice";
      radio.value = String(i);
      const a = document.createElement("audio");
      a.controls = true;
      a.src = src;
      a.style.flex = "1";
      row.appendChild(radio);
      row.appendChild(a);
      wrap.appendChild(row);
    });

    regListener(submit, "click", () => {
      const picked = document.querySelector('input[name="audio-choice"]:checked');
      if (!picked) {
        const fb = document.getElementById("iamc-feedback");
        if (fb) { fb.textContent = "⚠️ Please select an answer."; fb.style.color = "orange"; }
        return;
      }
      const idx = parseInt(picked.value, 10);
      finish(isCorrectIndex(idx), getNext(options[idx]));
    });

    startTimerIfNeeded(() => finish(false, scene.next));
  }

  function buildUI() {
    if (audioChoices) buildAudioOptions();
    else buildTextOptions();
  }

  // Allow skipping prompt
  if (prompt.src) {
    prompt.onended = () => buildUI();
    const skip = document.createElement("button");
    skip.textContent = "Show options now";
    skip.style.cssText = "display:block;margin:0 auto 6px;padding:6px 10px;border-radius:8px;border:1px solid #00ffff55;background:#0a0a0a;color:#0ff;cursor:pointer";
    regListener(skip, "click", () => { buildUI(); skip.remove(); });
    prompt.parentNode.insertBefore(skip, prompt.nextSibling);
  } else {
    buildUI();
  }
}





 
// ─────────────────────────────────────────────────────────────────────────────
// Mobile-safe VIDEO → MULTI QUESTION
// ─────────────────────────────────────────────────────────────────────────────
function loadVideoMultiQuestionScene(id) {
  const scene = scenes[id];

  // 🔄 Optional cross-scene tally reset
  if (scene?.tallyKey && scene.tallyReset) {
    try { tallyReset(scene.tallyKey, scene.tallyMax ?? (scene.questions?.length || null)); } catch(_) {}
  }

  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  const VMQ_DEFAULT_SECONDS = 15; // fallback default

  // Safe shorthands
  const regNode     = window.registerNode     || function(){};
  const regListener = window.registerListener || function(t,e,h){ t.addEventListener(e,h); };
  const regCleanup  = window.registerCleanup  || function(){};

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");

  // Nuke stale UI
  ["scene-video","video-multi-question-timer","video-multi-question-options","video-multi-question-feedback"]
    .forEach(id => { const n = document.getElementById(id); if (n) n.remove(); });

  if (gameContainer) gameContainer.style.display = "block";
  if (sceneText) { sceneText.style.display = "block"; sceneText.textContent = scene.text || ""; }

  // ── Video (mobile-safe)
  const videoWrap = document.createElement("div");
  videoWrap.style.cssText = "position:relative;max-width:100%;margin:0 auto 16px;";

  const videoElem = document.createElement("video");
  videoElem.id = "scene-video";
  videoElem.controls = true;
  videoElem.preload = "metadata";
  if (scene.poster) videoElem.poster = scene.poster;
  videoElem.src = scene.videoSrc;
  videoElem.style.cssText = "width:100%;height:auto;max-height:45vh;display:block;border-radius:12px;background:#000;";
  // iOS inline playback
  videoElem.setAttribute("playsinline", "");
  videoElem.setAttribute("webkit-playsinline", "");
  videoElem.playsInline = true;

  // Tap-to-play overlay (required on iOS if unmuted)
  const playOverlay = document.createElement("button");
  playOverlay.textContent = "▶ Tap to Play";
  playOverlay.style.cssText = "position:absolute;inset:auto 0 0 0;margin:auto;top:0;bottom:0;width:180px;height:48px;" +
                              "background:#00ffff;color:#000;border:none;border-radius:10px;font-weight:700;cursor:pointer";
  const hideOverlay = () => { if (playOverlay.parentNode) playOverlay.remove(); };

  playOverlay.onclick = async () => {
    try { await videoElem.play(); hideOverlay(); } catch(e) { console.warn("User play failed:", e); }
  };

  // On first user interaction with video controls, hide overlay
  videoElem.addEventListener("play", hideOverlay);

  // Fallback if the video errors (bad codec, etc.)
  videoElem.addEventListener("error", () => {
    hideOverlay();
    const msg = document.createElement("div");
    msg.style.cssText = "margin-top:8px;color:orange;font-weight:700";
    msg.textContent = "⚠️ This device can’t play the video inline.";
    const a = document.createElement("a");
    a.href = scene.videoSrc;
    a.target = "_blank";
    a.textContent = "Open video in a new tab";
    a.style.cssText = "display:inline-block;margin-left:8px;color:#0ff;text-decoration:underline";
    msg.appendChild(a);
    videoWrap.appendChild(msg);
  });

  videoWrap.appendChild(videoElem);
  videoWrap.appendChild(playOverlay);
  gameContainer.insertBefore(videoWrap, sceneText ? sceneText.nextSibling : null);
  regNode(videoElem);

  // State
  const questions = Array.isArray(scene.questions) ? scene.questions : [];
  let qIndex = 0;
  let score = 0;
  let timerInterval = null;
  let timeLeft = 0;

  // Optional SKIP button (start questions without finishing the video)
  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip video";
  skipBtn.style.cssText = "margin-top:8px;padding:8px 12px;border:none;border-radius:8px;background:#222;color:#eee;cursor:pointer;font-weight:700";
  skipBtn.onclick = () => onVideoEnded();
  videoWrap.appendChild(skipBtn);

  function resolveTimerSeconds(scene, q) {
    const pick = (v) => {
      if (v === false || v == null) return null;
      if (v === true) return VMQ_DEFAULT_SECONDS;
      const n = Number(v);
      return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
    };
    const perQ     = pick(q && q.timer);
    const perScene = pick(scene && scene.timer);
    return (perQ != null) ? perQ : (perScene != null ? perScene : VMQ_DEFAULT_SECONDS);
  }

  function clearTimer(){ if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }

  function cleanupQuestionUI() {
    ["video-multi-question-timer","video-multi-question-options","video-multi-question-feedback"]
      .forEach(id => { const el = document.getElementById(id); if (el) el.remove(); });
    clearTimer();
  }

  function finish() {
    cleanupQuestionUI();
    try { videoElem.pause(); } catch(_) {}
    if (videoWrap.parentNode) videoWrap.remove();

    if (scene.scoring && scene.endings) {
      const { high = Infinity, medium = -Infinity } = scene.scoring;
      let dest;
      if (score >= high) dest = scene.endings.high;
      else if (score >= medium) dest = scene.endings.medium;
      else dest = scene.endings.low;
      if (dest) return loadScene(dest);
    }
    if (scene.next) return loadScene(scene.next);
    console.warn("video-multi-question: No endings or next specified.");
  }

  function renderQuestion() {
    if (qIndex >= questions.length) return finish();
    cleanupQuestionUI();

    const q = questions[qIndex];
    if (!q) { console.error(`Question ${qIndex} missing`); return finish(); }

    if (sceneText) sceneText.textContent = q.text || "";

    // Timer
    const seconds = resolveTimerSeconds(scene, q);
    if (seconds && seconds > 0) {
      timeLeft = seconds;
      const timerDiv = document.createElement("div");
      timerDiv.id = "video-multi-question-timer";
      timerDiv.style.cssText = "font-weight:700;font-size:1.1rem;color:#00ffff;margin-top:10px;";
      timerDiv.textContent = `⏳ Time left: ${timeLeft}s`;
      gameContainer.appendChild(timerDiv);

      clearTimer();
      timerInterval = setInterval(() => {
        timeLeft -= 1;
        if (timerDiv) timerDiv.textContent = `⏳ Time left: ${Math.max(0, timeLeft)}s`;
        if (timeLeft <= 0) {
          clearTimer();
          try { if (scene.tallyKey && typeof tallyAdd === 'function') tallyAdd(scene.tallyKey, 0); } catch(_) {}
          feedback("⏲️ Time's up. Moving on...", "orange", false, true);
        }
      }, 1000);
    }

    // Options
    const optionsDiv = document.createElement("div");
    optionsDiv.id = "video-multi-question-options";
    optionsDiv.style.marginTop = "15px";
    gameContainer.appendChild(optionsDiv);

    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "video-multi-question-feedback";
    feedbackDiv.style.cssText = "margin-top:15px;font-weight:700;";
    gameContainer.appendChild(feedbackDiv);

    function disableOptions() { [...optionsDiv.children].forEach(b => b.disabled = true); }

    function feedback(msg, color, isCorrect, timedOut=false) {
      clearTimer();
      disableOptions();
      feedbackDiv.textContent = msg;
      feedbackDiv.style.color = color;
      if (isCorrect) score++;
      setTimeout(() => { qIndex++; renderQuestion(); }, timedOut ? 900 : 700);
    }

    (q.options || []).forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = typeof opt === "string" ? opt : String(opt);
      btn.style.cssText = "margin:5px;padding:8px 16px;font-weight:700;background:#00ffff;border:none;border-radius:8px;cursor:pointer";
      btn.onmouseenter = () => (btn.style.backgroundColor = "#00cccc");
      btn.onmouseleave = () => (btn.style.backgroundColor = "#00ffff");
      regListener(btn, "click", () => {
        const correctIndex = Number(q.correct);
        const ok = (i === correctIndex);
        try { if (scene.tallyKey && typeof tallyAdd === 'function') tallyAdd(scene.tallyKey, ok ? (scene.tallyWeight || 1) : 0); } catch(_) {}
        feedback(ok ? "✅ Correct! Moving on..." : "❌ Not quite. Moving on...", ok ? "lightgreen" : "salmon", ok);
      });
      optionsDiv.appendChild(btn);
    });
  }

  function onVideoEnded() {
    // Hide video panel, start questions
    videoWrap.style.display = "none";
    if (sceneText) sceneText.textContent = "";
    qIndex = 0;
    score = 0;
    renderQuestion();
  }

  regListener(videoElem, "ended", onVideoEnded);
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile-safe VIDEO → MULTI *AUDIO* CHOICE (each option is an audio clip)
// ─────────────────────────────────────────────────────────────────────────────
function loadVideoMultiAudioChoiceScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene data not found for ID: ${id}`); return; }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const container = document.getElementById("scene-container");

  [sceneImage, container].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) { sceneText.style.display = "block"; sceneText.textContent = scene.text || ""; }
  if (gameContainer) gameContainer.style.display = "block";

  // Remove stale UI
  const prevUI = document.getElementById("video-multi-audio-question-ui");
  if (prevUI) prevUI.remove();
  const oldVid = document.getElementById("scene-video");
  if (oldVid) oldVid.remove();

  // Video (mobile-safe)
  const videoWrap = document.createElement("div");
  videoWrap.style.cssText = "position:relative;max-width:100%;margin:0 auto 16px;";

  const videoElem = document.createElement("video");
  videoElem.id = "scene-video";
  videoElem.controls = true;
  videoElem.preload = "metadata";
  if (scene.poster) videoElem.poster = scene.poster;
  videoElem.src = scene.videoSrc;
  videoElem.style.cssText = "width:100%;height:auto;max-height:45vh;display:block;border-radius:12px;background:#000;";
  videoElem.setAttribute("playsinline", "");
  videoElem.setAttribute("webkit-playsinline", "");
  videoElem.playsInline = true;

  const playOverlay = document.createElement("button");
  playOverlay.textContent = "▶ Tap to Play";
  playOverlay.style.cssText = "position:absolute;inset:auto 0 0 0;margin:auto;top:0;bottom:0;width:180px;height:48px;" +
                              "background:#00ffff;color:#000;border:none;border-radius:10px;font-weight:700;cursor:pointer";
  playOverlay.onclick = async () => {
    try { await videoElem.play(); playOverlay.remove(); } catch(e) { console.warn("User play failed:", e); }
  };
  videoElem.addEventListener("play", () => playOverlay.remove());

  videoElem.addEventListener("error", () => {
    const msg = document.createElement("div");
    msg.style.cssText = "margin-top:8px;color:orange;font-weight:700";
    msg.textContent = "⚠️ This device can’t play the video inline.";
    const a = document.createElement("a");
    a.href = scene.videoSrc;
    a.target = "_blank";
    a.textContent = "Open video in a new tab";
    a.style.cssText = "display:inline-block;margin-left:8px;color:#0ff;text-decoration:underline";
    msg.appendChild(a);
    videoWrap.appendChild(msg);
  });

  // Optional SKIP button
  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip video";
  skipBtn.style.cssText = "margin-top:8px;padding:8px 12px;border:none;border-radius:8px;background:#222;color:#eee;cursor:pointer;font-weight:700";
  skipBtn.onclick = () => showQuestion();
  videoWrap.appendChild(skipBtn);

  videoWrap.appendChild(videoElem);
  videoWrap.appendChild(playOverlay);
  gameContainer.appendChild(videoWrap);

  // Question UI (hidden until video ends or skip)
  let questionUI = document.createElement("div");
  questionUI.id = "video-multi-audio-question-ui";
  questionUI.style.maxWidth = "700px";
  questionUI.style.margin = "0 auto";
  questionUI.style.color = "#eee";
  questionUI.style.fontSize = "1.1rem";
  questionUI.style.display = "none";
  gameContainer.appendChild(questionUI);

  let index = 0;
  let score = 0;

  function cleanupQuestionUI() {
    questionUI.style.display = "none";
    questionUI.innerHTML = "";
  }

  function finishBlock() {
    cleanupQuestionUI();
    try { videoElem.pause(); } catch(_) {}
    if (videoWrap.parentNode) videoWrap.remove();

    if (scene.scoring && scene.endings) {
      let endingScene;
      if (score >= scene.scoring.high) endingScene = scene.endings.high;
      else if (score >= scene.scoring.medium) endingScene = scene.endings.medium;
      else endingScene = scene.endings.low;
      if (endingScene) return loadScene(endingScene);
    }
    if (scene.next) return loadScene(scene.next);
    console.warn("video-multi-audio-choice: no next/endings specified.");
  }

  function showQuestion() {
    // hide video area once questions start
    videoWrap.style.display = "none";

    if (index >= (scene.questions?.length || 0)) return finishBlock();

    const question = scene.questions[index];
    questionUI.style.display = "block";
    questionUI.innerHTML = `
      <p><strong>Question ${index + 1}:</strong> ${question.text || ""}</p>
      <div id="audio-options-container" style="margin-top: 12px;"></div>
      <div id="video-multi-audio-feedback" style="margin-top: 10px; font-weight: bold;"></div>
    `;

    const optionsContainer = document.getElementById("audio-options-container");
    const feedbackDiv = document.getElementById("video-multi-audio-feedback");

    optionsContainer.innerHTML = "";

    (question.options || []).forEach((audioSrc, i) => {
      const optionLabel = document.createElement("label");
      optionLabel.style.display = "block";
      optionLabel.style.marginBottom = "12px";
      optionLabel.style.cursor = "pointer";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "audio-choice";
      radio.value = i;
      radio.style.marginRight = "10px";

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "metadata";
      audio.src = audioSrc;
      audio.style.verticalAlign = "middle";

      optionLabel.appendChild(radio);
      optionLabel.appendChild(audio);
      optionsContainer.appendChild(optionLabel);
    });

    // Submit button (fresh each q)
    let submitBtn = document.getElementById("video-multi-audio-submit-btn");
    if (submitBtn) submitBtn.remove();

    submitBtn = document.createElement("button");
    submitBtn.id = "video-multi-audio-submit-btn";
    submitBtn.textContent = "Submit Answer";
    submitBtn.style.cssText = "margin-top: 15px; padding: 8px 16px; font-weight: 700; background: #00ffff; border: none; border-radius: 8px; cursor: pointer";
    submitBtn.onmouseover = () => (submitBtn.style.backgroundColor = "#00cccc");
    submitBtn.onmouseout  = () => (submitBtn.style.backgroundColor = "#00ffff");
    questionUI.appendChild(submitBtn);

    submitBtn.onclick = () => {
      const selected = document.querySelector('input[name="audio-choice"]:checked');
      if (!selected) {
        feedbackDiv.textContent = "⚠️ Please select an answer.";
        feedbackDiv.style.color = "orange";
        return;
      }
      const answerIndex = parseInt(selected.value, 10);
      if (answerIndex === question.correct) {
        score++;
        feedbackDiv.textContent = "✅ Correct! Moving on...";
        feedbackDiv.style.color = "lightgreen";
      } else {
        feedbackDiv.textContent = "❌ Not quite. Moving on...";
        feedbackDiv.style.color = "salmon";
      }
      submitBtn.disabled = true;
      setTimeout(() => { index++; showQuestion(); }, 900);
    };
  }

  // Start questions after video ends (or on Skip)
  videoElem.addEventListener("ended", showQuestion);
}




function loadVideoMultiAudioChoiceScene(id) {
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  // Clear previous UI containers
  const sceneImage = document.getElementById("scene-image");
  const sceneText = document.getElementById("scene-text");
  const container = document.getElementById("scene-container");

  [sceneImage, sceneText, container].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  const gameContainer = document.getElementById("game-container");
  if (gameContainer) gameContainer.style.display = "block";

  // Create video player
  const videoElem = document.createElement("video");
  videoElem.id = "scene-video";
  videoElem.controls = true;
  videoElem.style.maxWidth = "100%";
  videoElem.style.maxHeight = "360px";
  videoElem.style.display = "block";
  videoElem.style.margin = "0 auto 20px";
  videoElem.src = scene.videoSrc;
  videoElem.load();

  // Show text + video in sceneText container
  if (sceneText) {
    sceneText.style.display = "block";
    sceneText.textContent = scene.text || "";
    sceneText.appendChild(videoElem);
  } else {
    gameContainer.appendChild(videoElem);
  }

  // Create container for question UI (hidden initially)
  let questionUI = document.getElementById("video-multi-audio-question-ui");
  if (!questionUI) {
    questionUI = document.createElement("div");
    questionUI.id = "video-multi-audio-question-ui";
    questionUI.style.maxWidth = "700px";
    questionUI.style.margin = "0 auto";
    questionUI.style.color = "#eee";
    questionUI.style.fontSize = "1.1rem";
    questionUI.style.display = "none";
    gameContainer.appendChild(questionUI);
  }
  questionUI.innerHTML = "";

  let index = 0;
  let score = 0;

  function cleanupQuestionUI() {
    questionUI.style.display = "none";
    questionUI.innerHTML = "";
  }

  function showQuestion() {
    if (index >= scene.questions.length) {
      cleanupQuestionUI();

      if (videoElem) {
        videoElem.pause();
        videoElem.src = "";
        videoElem.load();
        videoElem.remove();
      }

      if (scene.scoring && scene.endings) {
        let endingScene;
        if (score >= scene.scoring.high) endingScene = scene.endings.high;
        else if (score >= scene.scoring.medium) endingScene = scene.endings.medium;
        else endingScene = scene.endings.low;

        loadScene(endingScene);
      } else if (scene.next) {
        loadScene(scene.next);
      } else {
        console.warn("No ending or next scene specified for video-multi-audio-choice scene.");
      }
      return;
    }

    const question = scene.questions[index];
    questionUI.style.display = "block";
    questionUI.innerHTML = `
      <p><strong>Question ${index + 1}:</strong> ${question.text}</p>
      <div id="audio-options-container" style="margin-top: 12px;"></div>
      <div id="video-multi-audio-feedback" style="margin-top: 10px; font-weight: bold;"></div>
    `;

    const optionsContainer = document.getElementById("audio-options-container");
    const feedbackDiv = document.getElementById("video-multi-audio-feedback");

    optionsContainer.innerHTML = "";

    question.options.forEach((audioSrc, i) => {
      const optionLabel = document.createElement("label");
      optionLabel.style.display = "block";
      optionLabel.style.marginBottom = "12px";
      optionLabel.style.cursor = "pointer";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "audio-choice";
      radio.value = i;
      radio.style.marginRight = "10px";

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = audioSrc;
      audio.style.verticalAlign = "middle";

      optionLabel.appendChild(radio);
      optionLabel.appendChild(audio);
      optionsContainer.appendChild(optionLabel);
    });

    // Submit button
    let submitBtn = document.getElementById("video-multi-audio-submit-btn");
    if (submitBtn) {
      submitBtn.removeEventListener("click", submitBtn._listener);
      submitBtn.remove();
    }
    submitBtn = document.createElement("button");
    submitBtn.id = "video-multi-audio-submit-btn";
    submitBtn.textContent = "Submit Answer";
    submitBtn.style.marginTop = "15px";
    submitBtn.style.padding = "8px 16px";
    submitBtn.style.fontWeight = "bold";
    submitBtn.style.backgroundColor = "#00ffff";
    submitBtn.style.border = "none";
    submitBtn.style.borderRadius = "8px";
    submitBtn.style.cursor = "pointer";
    submitBtn.style.transition = "background-color 0.3s ease";

    submitBtn.onmouseover = () => (submitBtn.style.backgroundColor = "#00cccc");
    submitBtn.onmouseout = () => (submitBtn.style.backgroundColor = "#00ffff");

    questionUI.appendChild(submitBtn);

    submitBtn._listener = () => {
      const selected = document.querySelector('input[name="audio-choice"]:checked');
      if (!selected) {
        feedbackDiv.textContent = "⚠️ Please select an answer.";
        feedbackDiv.style.color = "orange";
        return;
      }

      const answerIndex = parseInt(selected.value, 10);

      if (scene.questions.length === 1 && !scene.scoring) {
        // Single question, no scoring mode
        if (answerIndex === question.correct) {
          feedbackDiv.textContent = "✅ Correct! Moving on...";
          feedbackDiv.style.color = "lightgreen";
          cleanupQuestionUI();
          setTimeout(() => {
            videoElem.pause();
            videoElem.remove();
            if (question.correctNext) loadScene(question.correctNext);
            else if (scene.next) loadScene(scene.next);
            else console.warn("No next scene specified after correct answer");
          }, 1200);
        } else {
          feedbackDiv.textContent = "❌ Not quite. Try again.";
          feedbackDiv.style.color = "salmon";
          if (question.incorrectNext) {
            cleanupQuestionUI();
            setTimeout(() => loadScene(question.incorrectNext), 1200);
          }
        }
      } else {
        // Multiple questions with scoring mode
        if (answerIndex === question.correct) {
          score++;
          feedbackDiv.textContent = "✅ Correct! Moving on...";
          feedbackDiv.style.color = "lightgreen";
        } else {
          feedbackDiv.textContent = "❌ Not quite. Moving on...";
          feedbackDiv.style.color = "salmon";
        }

        submitBtn.disabled = true;

        setTimeout(() => {
          index++;
          showQuestion();
        }, 1500);
      }
    };

    submitBtn.addEventListener("click", submitBtn._listener);

  }

  // Start questions only after video ends
  videoElem.onended = () => {
    showQuestion();
  };
}







function loadVideoScrambleScene(id) {
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene data not found for ID: ${id}`);
    return;
  }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const scrambleDiv = document.getElementById("sentence-scramble");
  const feedbackDiv = document.getElementById("scramble-feedback");
  const infoDiv = document.getElementById("challenge-info");
  const container = document.getElementById('scene-container');

  // Clear unrelated UI containers
  [sceneImage, infoDiv, container].forEach(el => {
    if (el) {
      el.style.display = "none";
      el.innerHTML = "";
    }
  });

  // Show scene text instructions (if any)
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
      sceneText.innerHTML = "";
    }
  }

  // Clear scramble & feedback areas initially, hide scrambleDiv
  if (scrambleDiv) {
    scrambleDiv.style.display = "none";
    scrambleDiv.innerHTML = "";
  }
  if (feedbackDiv) {
    feedbackDiv.style.display = "none";
    feedbackDiv.textContent = "";
  }

  // Create or reuse video element
  let videoElem = document.getElementById("scene-video");
  if (videoElem) {
    videoElem.pause();
    videoElem.src = "";
    videoElem.load();
    videoElem.remove();
  }
  videoElem = document.createElement("video");
  videoElem.id = "scene-video";
  videoElem.src = scene.videoSrc;
  videoElem.controls = true;
  videoElem.style.maxWidth = "100%";
  videoElem.style.maxHeight = "360px";
  videoElem.style.display = "block";
  videoElem.style.margin = "0 auto 20px";
  videoElem.style.borderRadius = "12px";

  if (gameContainer) {
    gameContainer.insertBefore(videoElem, sceneText.nextSibling);
  }

  // After video ends, show scramble challenge UI
  videoElem.onended = () => {
    if (scrambleDiv && feedbackDiv) {
      scrambleDiv.style.display = "block";
      feedbackDiv.style.display = "block";
      scrambleDiv.innerHTML = "";
      feedbackDiv.textContent = "";

      // Instruction
      const instruction = document.createElement("p");
      instruction.className = "scramble-instructions";
      instruction.textContent = "🧩 Drag the words into the correct order:";
      scrambleDiv.appendChild(instruction);

      // Scramble words container
      const scrambleContainer = document.createElement("div");
      scrambleContainer.id = "scramble-words";
      const shuffled = shuffleArray(scene.scramble);
      shuffled.forEach(word => {
        const span = document.createElement("span");
        span.className = "scramble-word";
        span.textContent = word;
        scrambleContainer.appendChild(span);
      });
      scrambleDiv.appendChild(scrambleContainer);

      // Destroy old Sortable if any
      if (window.scrambleSortable) {
        window.scrambleSortable.destroy();
      }
      window.scrambleSortable = Sortable.create(scrambleContainer, { animation: 150 });

      // Check answer button
      const checkBtn = document.createElement("button");
      checkBtn.textContent = "Check Answer";
      checkBtn.style.marginTop = "15px";
      scrambleDiv.appendChild(checkBtn);

      checkBtn.onclick = () => {
        const words = Array.from(document.querySelectorAll("#scramble-words .scramble-word"));
        const userOrder = words.map(w => w.textContent.trim());

        if (arraysEqual(userOrder, scene.correct)) {
          feedbackDiv.textContent = "✅ Correct! Moving on...";
          feedbackDiv.style.color = "lightgreen";
          setTimeout(() => {
            loadScene(scene.next);
          }, 1200);
        } else {
          feedbackDiv.textContent = "❌ Not quite. Try again.";
          feedbackDiv.style.color = "salmon";
        }
      };
    }
  };

  // Show the video element now, hide scramble & feedback until video ends
  videoElem.style.display = "block";
  if (scrambleDiv) scrambleDiv.style.display = "none";
  if (feedbackDiv) feedbackDiv.style.display = "none";
}

// --- Video → Fill-in-the-Blank loader ---
function loadVideoFillBlankScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  const regNode     = window.registerNode     || function(){};
  const regListener = window.registerListener || function(t,e,h){ t.addEventListener(e,h); };
  const regCleanup  = window.registerCleanup  || function(){};

  const game = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  if (game) game.style.display = "block";
  if (sceneText) { sceneText.style.display = "block"; sceneText.textContent = scene.text || ""; }

  // Clear prior UI
  ["video-fillblank-wrap","fill-blank-ui","scene-video"].forEach(id => { const n = document.getElementById(id); if (n) n.remove(); });

  // Video wrapper
  const wrap = document.createElement("div");
  wrap.id = "video-fillblank-wrap";
  wrap.style.cssText = "position:relative;max-width:100%;margin:0 auto 16px;";
  game.appendChild(wrap);

  const video = document.createElement("video");
  video.id = "scene-video";
  video.controls = true;
  video.preload = "metadata";
  if (scene.poster) video.poster = scene.poster;
  video.src = scene.videoSrc;
  video.style.cssText = "width:100%;height:auto;max-height:45vh;display:block;border-radius:12px;background:#000;";
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");
  video.playsInline = true;
  regNode(video);

  const overlay = document.createElement("button");
  overlay.textContent = "▶ Tap to Play";
  overlay.style.cssText = "position:absolute;inset:auto 0 0 0;margin:auto;top:0;bottom:0;width:180px;height:48px;" +
                          "background:#00ffff;color:#000;border:none;border-radius:10px;font-weight:700;cursor:pointer";
  overlay.onclick = async () => { try { await video.play(); overlay.remove(); } catch(e){} };
  video.addEventListener("play", () => { if (overlay.parentNode) overlay.remove(); });

  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip video";
  skipBtn.style.cssText = "margin-top:8px;padding:8px 12px;border:none;border-radius:8px;background:#222;color:#eee;cursor:pointer;font-weight:700";
  skipBtn.onclick = () => startFIB();

  const errorMsg = () => {
    const msg = document.createElement("div");
    msg.style.cssText = "margin-top:8px;color:orange;font-weight:700";
    msg.textContent = "⚠️ This device can’t play the video inline.";
    const a = document.createElement("a");
    a.href = scene.videoSrc; a.target = "_blank";
    a.textContent = "Open video in a new tab";
    a.style.cssText = "display:inline-block;margin-left:8px;color:#0ff;text-decoration:underline";
    msg.appendChild(a);
    wrap.appendChild(msg);
  };
  video.addEventListener("error", errorMsg);

  wrap.appendChild(video);
  wrap.appendChild(overlay);
  wrap.appendChild(skipBtn);

  function sameToken(a,b){
    const norm = s => String(s||'')
      .replace(/[’‘`]/g,"'")
      .replace(/\s+/g,' ')
      .toLowerCase().trim();
    return norm(a) === norm(b);
  }

  function startFIB(){
    wrap.style.display = "none";
    try { video.pause(); } catch(_){}
    if (sceneText) sceneText.textContent = scene.text || "";

    // Defensive: build sentence/blanks from "___" if not provided
    if (!Array.isArray(scene.sentence) || !Array.isArray(scene.blanks)) {
      const parts = String(scene.text || '').split('___');
      const toks = []; const blanks = [];
      const toWords = s => String(s).trim().split(/\s+/).filter(Boolean);
      parts.forEach((seg, i) => {
        if (seg) toks.push(...toWords(seg));
        if (i < parts.length - 1) { blanks.push(toks.length); toks.push('___'); }
      });
      scene.sentence = Array.isArray(scene.sentence) ? scene.sentence : toks;
      scene.blanks   = Array.isArray(scene.blanks)   ? scene.blanks   : blanks;
    }
    if (typeof scene.correct === 'string') scene.correct = [scene.correct];

    const ui = document.createElement("div");
    ui.id = "fill-blank-ui";
    ui.style.cssText = "max-width:900px;margin:0 auto;";
    game.appendChild(ui);

    ui.innerHTML = `
      <p style="margin-bottom:10px;">Complete the sentence by dragging options into the blanks:</p>
      <p id="fill-blank-sentence" style="font-size:1.1rem;line-height:1.6;margin-bottom:16px;"></p>
      <div id="fill-blank-options" style="margin-bottom:16px;display:flex;flex-wrap:wrap;gap:8px;"></div>
      <button id="check-fill-blank-answer" style="padding:8px 12px;border:none;border-radius:8px;background:#00ffff;color:#000;font-weight:700;cursor:pointer">Check Answer</button>
      <div id="fill-blank-feedback" style="margin-top:10px;font-weight:700;"></div>
    `;

    const sentenceEl = ui.querySelector("#fill-blank-sentence");
    const optionsEl  = ui.querySelector("#fill-blank-options");
    const feedbackEl = ui.querySelector("#fill-blank-feedback");

    // Render sentence with blanks
    let html = "";
    for (let i = 0; i < scene.sentence.length; i++) {
      if (scene.blanks.includes(i)) {
        html += `<span class="fill-blank-dropzone" data-index="${i}" style="
          display:inline-block;min-width:90px;border-bottom:2px solid #00ffff;margin:0 4px;vertical-align:bottom;padding:4px 6px;background:#111;color:#0ff;border-radius:6px;"></span> `;
      } else {
        html += `<span style="margin:0 4px;">${scene.sentence[i]}</span> `;
      }
    }
    sentenceEl.innerHTML = html;

    // Render options
    optionsEl.innerHTML = "";
    (scene.options || []).forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.className = "fill-blank-option";
      btn.style.cssText = "padding:6px 12px;border-radius:6px;border:2px solid #00ffff;background:#000;color:#0ff;font-weight:700;cursor:grab;user-select:none";
      optionsEl.appendChild(btn);
    });

    // Enable drag/drop via SortableJS
    const dropzones = sentenceEl.querySelectorAll(".fill-blank-dropzone");

    // Clean any previous instances on this node
    if (ui._sortableBlanks) { ui._sortableBlanks.forEach(s=>s.destroy()); ui._sortableBlanks=null; }
    if (ui._sortableOptions) { ui._sortableOptions.destroy(); ui._sortableOptions=null; }

    ui._sortableBlanks = Array.from(dropzones).map(zone => Sortable.create(zone, {
      group: "videoFillBlank",
      animation: 150,
      sort: false,
      onAdd: evt => {
        const dragged = evt.item;
        if (dragged.parentNode === optionsEl) dragged.parentNode.removeChild(dragged);
        if (evt.to.children.length > 1) {
          Array.from(evt.to.children).forEach(child => {
            if (child !== dragged) { evt.to.removeChild(child); optionsEl.appendChild(child); }
          });
        }
      },
      onRemove: evt => { optionsEl.appendChild(evt.item); }
    }));

    try {
      ui._sortableOptions = Sortable.create(optionsEl, { group: "videoFillBlank", animation: 150 });
    } catch(e){ console.warn("Sortable create failed:", e); }

    ui.querySelector("#check-fill-blank-answer").onclick = () => {
      const userAnswers = [];
      let allFilled = true;
      dropzones.forEach(zone => {
        if (zone.children.length === 1) userAnswers.push(zone.children[0].textContent.trim());
        else allFilled = false;
      });

      if (!allFilled) {
        feedbackEl.textContent = "⚠️ Please fill all blanks.";
        feedbackEl.style.color = "orange";
        return;
      }

      const ok = userAnswers.every((ans,i) => sameToken(ans, scene.correct[i]));
      if (ok) {
        feedbackEl.textContent = "✅ Correct! Moving on...";
        feedbackEl.style.color = "lightgreen";
        setTimeout(() => { if (scene.next) loadScene(scene.next); }, 900);
      } else {
        feedbackEl.textContent = "❌ Not quite. Try again.";
        feedbackEl.style.color = "salmon";
      }
    };

    regCleanup(() => { const ui = document.getElementById("fill-blank-ui"); if (ui) ui.remove(); });
  }

  regListener(video, "ended", startFIB);
}

// === Hangman loader (updated: no seepage, defensive keyboard cleanup) ===
function loadHangmanScene(id) {
  const scene = scenes[id];
  if (!scene) {
    console.error(`Scene ${id} not found.`);
    return;
  }

  // Pre-clean any previous hangman instance + key handler (belt & suspenders)
  const stale = document.getElementById('hangman');
  if (stale) stale.remove();
  if (window.__hmKeyHandler) {
    document.removeEventListener('keydown', window.__hmKeyHandler);
    window.__hmKeyHandler = null;
  }

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated bits; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
      sceneText.innerHTML = "";
    }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // Clean previous video/audio just in case
  const oldVideo = document.getElementById("scene-video");
  if (oldVideo) { oldVideo.pause(); oldVideo.src = ""; oldVideo.load(); oldVideo.remove(); }
  let audioElem = document.getElementById("scene-audio");
  if (audioElem) { audioElem.pause(); audioElem.src = ""; audioElem.load(); audioElem.remove(); }

  // Config
  const rawTarget = scene.target || "";
  const target = rawTarget.toUpperCase();
  const alphabet = (scene.alphabet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  const maxWrong = Number.isFinite(scene.maxWrong) ? scene.maxWrong : 6;

  // State
  const guessed = new Set();
  let wrong = 0;
  let solved = false;

  // Build UI
  const wrap = document.createElement("div");
  wrap.id = "hangman";
  wrap.style.maxWidth = "720px";
  wrap.style.margin = "0 auto";
  wrap.style.padding = "12px 8px";
  wrap.style.textAlign = "center";
  wrap.style.color = "#eee";

  wrap.innerHTML = `
    <div id="hm-header" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
      <div id="hm-lives" style="font-weight:bold;">❤️ Lives: <span id="hm-lives-num">${maxWrong - wrong}</span></div>
      ${scene.hint ? `<div id="hm-hint" style="opacity:.85;">💡 ${scene.hint}</div>` : `<div></div>`}
    </div>

    <div id="hm-word"
         style="margin:18px 0;font:700 28px/1.4 system-ui,Segoe UI,Arial,Helvetica,Apple Color Emoji,Segoe UI Emoji;letter-spacing:.08em;"></div>

    <div id="hm-letters" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;"></div>

    <div id="hm-feedback" style="margin-top:14px;font-weight:700;"></div>
    <div id="hm-ctrl" style="margin-top:12px;"></div>
  `;

  // Insert
  if (sceneText && sceneText.parentNode) {
    sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  } else if (gameContainer) {
    gameContainer.appendChild(wrap);
  }

  const livesNum = wrap.querySelector("#hm-lives-num");
  const wordEl = wrap.querySelector("#hm-word");
  const lettersEl = wrap.querySelector("#hm-letters");
  const feedbackEl = wrap.querySelector("#hm-feedback");
  const ctrlEl = wrap.querySelector("#hm-ctrl");

  // Helpers
  function isLetter(ch) { return /[A-Z]/.test(ch); }
  function displayWord() {
    const out = [];
    for (const ch of target) {
      if (!isLetter(ch)) { out.push(ch); continue; } // keep spaces/punct visible
      out.push(guessed.has(ch) ? ch : "_");
    }
    wordEl.textContent = out.join(" ");
  }
  function allRevealed() {
    for (const ch of target) {
      if (isLetter(ch) && !guessed.has(ch)) return false;
    }
    return true;
  }
  function disableAll() {
    lettersEl.querySelectorAll("button").forEach(b => b.disabled = true);
  }

  function finishWin() {
    solved = true;
    feedbackEl.textContent = "✅ Correct! You solved it.";
    feedbackEl.style.color = "lightgreen";
    disableAll();

    // Award (optional)
    if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
    if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);

    // Next
    if (scene.next) {
      setTimeout(() => loadScene(scene.next), 1200);
    } else {
      // manual continue button if no next provided
      ctrlEl.innerHTML = "";
      const btn = document.createElement("button");
      btn.textContent = "Continue";
      btn.onclick = () => loadScene("scene1");
      ctrlEl.appendChild(btn);
    }
  }

  function finishLose() {
    feedbackEl.textContent = `❌ Out of lives. The answer was: "${rawTarget}"`;
    feedbackEl.style.color = "salmon";
    disableAll();
    ctrlEl.innerHTML = "";

    const retry = document.createElement("button");
    retry.textContent = "Retry";
    retry.style.marginRight = "8px";
    retry.onclick = () => loadScene(id);
    ctrlEl.appendChild(retry);

    const back = document.createElement("button");
    back.textContent = "Back to Hub";
    back.onclick = () => loadScene("scene1");
    ctrlEl.appendChild(back);

    if (scene.onLoseNext) {
      const nextBtn = document.createElement("button");
      nextBtn.textContent = "Continue";
      nextBtn.style.marginLeft = "8px";
      nextBtn.onclick = () => loadScene(scene.onLoseNext);
      ctrlEl.appendChild(nextBtn);
    }
  }

  function guessLetter(letter) {
    if (guessed.has(letter) || solved) return;
    guessed.add(letter);

    const btn = lettersEl.querySelector(`button[data-letter="${letter}"]`);
    if (btn) btn.disabled = true;

    if (target.includes(letter)) {
      displayWord();
      if (allRevealed()) finishWin();
    } else {
      wrong++;
      livesNum.textContent = String(maxWrong - wrong);
      if (wrong >= maxWrong) finishLose();
    }
  }

  // Render alphabet
  alphabet.forEach(ch => {
    const b = document.createElement("button");
    b.textContent = ch;
    b.dataset.letter = ch;
    b.style.cssText = "min-width:34px;padding:8px;border-radius:8px;border:none;background:#00ffff;color:#000;font-weight:700;cursor:pointer";
    b.onmouseenter = () => (b.style.background = "#00cccc");
    b.onmouseleave = () => (b.style.background = "#00ffff");
    b.onclick = () => guessLetter(ch);
    lettersEl.appendChild(b);
  });

  // Keyboard support (defensive: clear any previous handler and store globally)
  if (window.__hmKeyHandler) {
    document.removeEventListener('keydown', window.__hmKeyHandler);
    window.__hmKeyHandler = null;
  }
  const keyHandler = (e) => {
    const k = (e.key || "").toUpperCase();
    if (/^[A-Z]$/.test(k)) {
      e.preventDefault();
      guessLetter(k);
    }
  };
  document.addEventListener("keydown", keyHandler);
  window.__hmKeyHandler = keyHandler;

  // Cleanup keyboard when hangman DOM is removed
  const observer = new MutationObserver(() => {
    const alive = document.getElementById('hangman');
    if (!alive && window.__hmKeyHandler) {
      document.removeEventListener('keydown', window.__hmKeyHandler);
      window.__hmKeyHandler = null;
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial paint
  displayWord();
}


// === Grammar Survivor (seepage-proof) ===
function loadSurvivorQuizScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // Pre-clean any previous instance + timers
  if (window.__svCleanup) { try { window.__svCleanup(); } catch(_){} window.__svCleanup = null; }
  const stale = document.getElementById('survivor-quiz');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated UI; show prompt/instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
      sceneText.innerHTML = "";
    }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // Config
  const qs = Array.isArray(scene.questions) ? scene.questions.slice() : [];
  const livesStart = Number.isFinite(scene.lives) ? scene.lives : 3;
  const defaultTimer = Number.isFinite(scene.timer) && scene.timer > 0 ? scene.timer : 0;

  // State
  let qIndex = 0;
  let lives = livesStart;
  let score = 0;
  let timer = 0;
  let interval = null;

  // Wrapper
  const wrap = document.createElement('div');
  wrap.id = 'survivor-quiz';
  wrap.style.maxWidth = '760px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '12px 8px';
  wrap.style.color = '#eee';

  wrap.innerHTML = `
    <div id="sv-top" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
      <div id="sv-progress" style="font-weight:700;">Q 1/${qs.length}</div>
      <div id="sv-lives" style="font-weight:700;">❤️ ${'❤'.repeat(lives)}<span style="opacity:.4">${'♡'.repeat(Math.max(0, livesStart - lives))}</span></div>
      <div id="sv-timer" style="min-width:120px;text-align:right;font-weight:700;"></div>
    </div>
    <div id="sv-question" style="margin:14px 0 8px;font:600 20px/1.35 system-ui,Segoe UI,Arial,Helvetica;"></div>
    <div id="sv-options" style="display:flex;flex-direction:column;gap:10px;"></div>
    <div id="sv-feedback" style="margin-top:12px;font-weight:700;"></div>
    <div id="sv-ctrl" style="margin-top:14px;"></div>
  `;

  if (sceneText && sceneText.parentNode) {
    sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  } else if (gameContainer) {
    gameContainer.appendChild(wrap);
  }

  const elProgress = wrap.querySelector('#sv-progress');
  const elLives    = wrap.querySelector('#sv-lives');
  const elTimer    = wrap.querySelector('#sv-timer');
  const elQ        = wrap.querySelector('#sv-question');
  const elOpts     = wrap.querySelector('#sv-options');
  const elFB       = wrap.querySelector('#sv-feedback');
  const elCtrl     = wrap.querySelector('#sv-ctrl');

  function paintLives() {
    elLives.innerHTML = `❤️ ${'❤'.repeat(lives)}<span style="opacity:.4">${'♡'.repeat(Math.max(0, livesStart - lives))}</span>`;
  }
  function stopTimer() { if (interval) { clearInterval(interval); interval = null; } elTimer.textContent = ''; }
  function startTimer(seconds) {
    stopTimer();
    if (!seconds || seconds <= 0) return;
    timer = seconds;
    elTimer.textContent = `⏳ ${timer}s`;
    interval = setInterval(() => {
      timer--;
      if (timer >= 0) elTimer.textContent = `⏳ ${timer}s`;
      if (timer <= 0) { stopTimer(); handleAnswer(-1, true); }
    }, 1000);
  }
  function disableButtons() { [...elOpts.querySelectorAll('button')].forEach(b => b.disabled = true); }

  // local cleanup used before navigating away
  function cleanup() {
    try { stopTimer(); } catch(_) {}
    const node = document.getElementById('survivor-quiz');
    if (node) node.remove();
  }
  // safe navigation: cleanup first, then go
  function goNext(dest) {
    cleanup();
    if (dest) loadScene(dest);
  }

  function nextQuestion() { qIndex++; (qIndex >= qs.length) ? finish() : renderQuestion(); }

  function finishLose() {
    stopTimer();
    elFB.textContent = "❌ You ran out of lives.";
    elFB.style.color = "salmon";
    elCtrl.innerHTML = "";

    if (Array.isArray(scene.setFlagsOnLose)) scene.setFlagsOnLose.forEach(setFlag);
    if (Array.isArray(scene.unlockScenesOnLose)) scene.unlockScenesOnLose.forEach(unlockScene);

    const retry = document.createElement('button');
    retry.textContent = "Retry";
    retry.style.marginRight = "8px";
    retry.onclick = () => goNext(id);
    elCtrl.appendChild(retry);

    const back = document.createElement('button');
    back.textContent = "Back to Hub";
    back.onclick = () => goNext("scene1");
    elCtrl.appendChild(back);

    if (scene.onLoseNext) {
      const cont = document.createElement('button');
      cont.textContent = "Continue";
      cont.style.marginLeft = "8px";
      cont.onclick = () => goNext(scene.onLoseNext);
      elCtrl.appendChild(cont);
    }
  }

  function finish() {
    stopTimer();
    if (scene.scoring && scene.endings) {
      const { high = Infinity, medium = -Infinity } = scene.scoring;
      let dest;
      if (score >= high) dest = scene.endings.high;
      else if (score >= medium) dest = scene.endings.medium;
      else dest = scene.endings.low;
      if (dest) return goNext(dest);
    }
    if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
    if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);

    if (scene.next) return goNext(scene.next);

    elFB.textContent = `🏁 Done! Score: ${score}/${qs.length}`;
    elFB.style.color = "#7fffd4";
    elCtrl.innerHTML = "";
    const back = document.createElement('button');
    back.textContent = "Back to Hub";
    back.onclick = () => goNext("scene1");
    elCtrl.appendChild(back);
  }

  function handleAnswer(choiceIndex, timedOut = false) {
    stopTimer();
    disableButtons();
    const q = qs[qIndex];
    const correct = (choiceIndex === q.correct);
    if (correct) {
      score++;
      elFB.textContent = "✅ Correct!";
      elFB.style.color = "lightgreen";
    } else {
      lives--;
      paintLives();
      elFB.textContent = timedOut ? "⌛ Time’s up!" : "❌ Not quite.";
      elFB.style.color = "salmon";
      if (q.explain) {
        const exp = document.createElement('div');
        exp.style.marginTop = "6px";
        exp.style.opacity = ".85";
        exp.textContent = `Hint: ${q.explain}`;
        elFB.appendChild(exp);
      }
    }
    if (lives <= 0) setTimeout(finishLose, 700);
    else setTimeout(nextQuestion, 800);
  }

  function renderQuestion() {
    elCtrl.innerHTML = "";
    elFB.textContent = "";
    const q = qs[qIndex];

    elProgress.textContent = `Q ${qIndex + 1}/${qs.length}`;
    elQ.textContent = q.text || "";

    elOpts.innerHTML = "";
    (q.options || []).forEach((opt, i) => {
      const b = document.createElement('button');
      b.textContent = opt;
      b.style.cssText = "text-align:left;padding:10px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;font-weight:700;cursor:pointer";
      b.onmouseenter = () => (b.style.background = "#00cccc");
      b.onmouseleave = () => (b.style.background = "#00ffff");
      b.onclick = () => handleAnswer(i, false);
      elOpts.appendChild(b);
    });

    const perQ = Number.isFinite(q.timer) && q.timer > 0 ? q.timer : defaultTimer;
    startTimer(perQ);
  }

  // Global cleanup hook so UNIVERSAL CLEANUP can stop timers + remove DOM
  window.__svCleanup = function () { cleanup(); };

  // Auto-clean timers if wrapper disappears for any reason
  const mo = new MutationObserver(() => {
    const alive = document.getElementById('survivor-quiz');
    if (!alive) { stopTimer(); mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });

  // Kick off
  paintLives();
  renderQuestion();
}

// === Conjugation Race (timed typing drill; seepage-proof) ===
function loadConjugationRaceScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // Pre-clean any previous instance
  if (window.__crCleanup) { try { window.__crCleanup(); } catch(_){} window.__crCleanup = null; }
  const stale = document.getElementById('conj-race');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated UI; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) {
      sceneText.style.display = "block";
      sceneText.textContent = scene.text;
    } else {
      sceneText.style.display = "none";
      sceneText.innerHTML = "";
    }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // Config
  const items = Array.isArray(scene.questions) ? scene.questions.slice() : [];
  const shuffle = !!scene.shuffle;
  const timerOverall = Number.isFinite(scene.timerOverall) ? scene.timerOverall : null; // one clock for all
  const timerPer = Number.isFinite(scene.timerPer) ? scene.timerPer : null;             // per item clock
  const showAnswerOnWrong = scene.showAnswerOnWrong !== false; // default true
  const acceptPunctuationVariants = scene.acceptPunctuationVariants !== false; // default true
  const caseInsensitive = scene.caseInsensitive !== false; // default true

  if (shuffle && typeof shuffleArray === "function") {
    // reuse your existing util
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }

  // State
  let qIndex = 0;
  let score = 0;
  let totalAnswered = 0;
  let tRemaining = timerOverall || 0;
  let tItem = timerPer || 0;
  let intervalOverall = null;
  let intervalPer = null;

  // Build UI
  const wrap = document.createElement('div');
  wrap.id = 'conj-race';
  wrap.style.maxWidth = '760px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '12px 8px';
  wrap.style.color = '#eee';

  wrap.innerHTML = `
    <div id="cr-top" style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
      <div id="cr-progress" style="font-weight:700;">Q 1/${items.length}</div>
      <div id="cr-score" style="font-weight:700;">Score: 0</div>
      <div id="cr-timer" style="min-width:140px;text-align:right;font-weight:700;"></div>
    </div>

    <div id="cr-prompt" style="margin:16px 0 8px;font:600 20px/1.35 system-ui,Segoe UI,Arial,Helvetica;"></div>

    <div id="cr-inputrow" style="display:flex;gap:8px;align-items:center;">
      <input id="cr-input" type="text" autocomplete="off"
             style="flex:1;min-width:140px;padding:10px;border-radius:10px;border:2px solid #00ffff;background:#000;color:#0ff;font-weight:700"/>
      <button id="cr-submit" style="padding:10px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;font-weight:700;cursor:pointer">Submit</button>
    </div>

    <div id="cr-feedback" style="margin-top:10px;font-weight:700;"></div>
    <div id="cr-ctrl" style="margin-top:14px;"></div>
  `;

  if (sceneText && sceneText.parentNode) {
    sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  } else if (gameContainer) {
    gameContainer.appendChild(wrap);
  }

  const elProgress = wrap.querySelector('#cr-progress');
  const elScore    = wrap.querySelector('#cr-score');
  const elTimer    = wrap.querySelector('#cr-timer');
  const elPrompt   = wrap.querySelector('#cr-prompt');
  const elInput    = wrap.querySelector('#cr-input');
  const elSubmit   = wrap.querySelector('#cr-submit');
  const elFB       = wrap.querySelector('#cr-feedback');
  const elCtrl     = wrap.querySelector('#cr-ctrl');

  // Helpers
  const norm = (s) => {
    if (s == null) return '';
    let x = String(s).trim();
    if (caseInsensitive) x = x.toLowerCase();
    if (acceptPunctuationVariants) {
      // normalize smart quotes & common punctuation
      x = x
        .replace(/[’‘]/g, "'")
        .replace(/[“”]/g, '"')
        .replace(/\s+/g, ' ')
        .replace(/\u00A0/g, ' ');
    }
    return x;
  };

  function stopOverallTimer() { if (intervalOverall) { clearInterval(intervalOverall); intervalOverall = null; } }
  function stopPerTimer() { if (intervalPer) { clearInterval(intervalPer); intervalPer = null; } }

  function startOverallTimer(seconds) {
    stopOverallTimer();
    if (!seconds || seconds <= 0) return;
    tRemaining = seconds;
    elTimer.textContent = `⏳ ${tRemaining}s total`;
    intervalOverall = setInterval(() => {
      tRemaining--;
      if (tRemaining >= 0) elTimer.textContent = `⏳ ${tRemaining}s total`;
      if (tRemaining <= 0) {
        stopPerTimer(); stopOverallTimer();
        finish(); // time up
      }
    }, 1000);
  }

  function startPerTimer(seconds) {
    stopPerTimer();
    if (!seconds || seconds <= 0) { elTimer.textContent = ''; return; }
    tItem = seconds;
    elTimer.textContent = `⏳ ${tItem}s`;
    intervalPer = setInterval(() => {
      tItem--;
      if (tItem >= 0) elTimer.textContent = `⏳ ${tItem}s`;
      if (tItem <= 0) {
        stopPerTimer();
        checkAnswer('', true); // timed out as empty answer
      }
    }, 1000);
  }

  function paintScore() { elScore.textContent = `Score: ${score}`; }
  function paintProgress() { elProgress.textContent = `Q ${Math.min(qIndex+1, items.length)}/${items.length}`; }

  function setPrompt(q) {
    // Question item shape: { prompt: "He ____ (go) — Past Simple", answers: ["went","'went'"] }
    // Optional: q.display (rich), q.hint
    elPrompt.textContent = q.prompt || '';
    elFB.textContent = q.hint ? `💡 ${q.hint}` : '';
    elFB.style.color = q.hint ? "#9fe8ff" : "";
  }

  function disableInput() {
    elInput.disabled = true;
    elSubmit.disabled = true;
  }
  function enableInput() {
    elInput.disabled = false;
    elSubmit.disabled = false;
  }

  function nextQuestion() {
    qIndex++;
    if (qIndex >= items.length) { finish(); return; }
    renderQuestion();
  }

function finish() {
  stopPerTimer(); stopOverallTimer();
  disableInput();

  const summary = `🏁 Done! Score: ${score}/${items.length}`;
  elFB.textContent = summary;
  elFB.style.color = "#7fffd4";
  elCtrl.innerHTML = "";

  // If using scoring/endings
  if (scene.scoring && scene.endings) {
    const { high = Infinity, medium = -Infinity } = scene.scoring;
    let dest;
    if (score >= high) dest = scene.endings.high;
    else if (score >= medium) dest = scene.endings.medium;
    else dest = scene.endings.low;
    if (dest) {
      const btn = document.createElement('button');
      btn.textContent = "Continue";
      btn.onclick = () => goNext(dest);
      elCtrl.appendChild(btn);
      return;
    }
  }

  // Respect scene.next if provided
  if (scene.next) {
    const btn = document.createElement('button');
    btn.textContent = "Continue";
    btn.onclick = () => goNext(scene.next);
    elCtrl.appendChild(btn);
    return;
  }

  // Final fallback
  const back = document.createElement('button');
  back.textContent = "Back to Hub";
  back.onclick = () => goNext("scene1");
  elCtrl.appendChild(back);
}


  function checkAnswer(userRaw, timedOut=false) {
    stopPerTimer();
    totalAnswered++;
    const q = items[qIndex] || {};
    const answers = Array.isArray(q.answers) ? q.answers : (q.answer ? [q.answer] : []);
    const user = norm(userRaw);
    const ok = answers.some(a => norm(a) === user);

    if (ok && !timedOut) {
      score++;
      paintScore();
      elFB.textContent = "✅ Correct!";
      elFB.style.color = "lightgreen";
      setTimeout(() => {
        qIndex++;
        (qIndex >= items.length) ? finish() : renderQuestion();
      }, 600);
    } else {
      elFB.textContent = timedOut ? "⌛ Time’s up." : "❌ Not quite.";
      elFB.style.color = "salmon";
      if (showAnswerOnWrong && answers.length) {
        const ans = document.createElement('div');
        ans.style.marginTop = "6px"; ans.style.opacity = ".9";
        ans.textContent = `Answer: ${answers[0]}`;
        elFB.appendChild(ans);
      }
      setTimeout(() => {
        qIndex++;
        (qIndex >= items.length) ? finish() : renderQuestion();
      }, 900);
    }
  }

  function renderQuestion() {
    paintProgress();
    enableInput();
    elInput.value = "";
    elInput.focus();
    const q = items[qIndex];
    setPrompt(q);

    if (timerPer) startPerTimer(timerPer);
    else if (timerOverall) {
      // already running; keep showing overall
      elTimer.textContent = `⏳ ${tRemaining}s total`;
    } else {
      elTimer.textContent = "";
    }
  }

  // Wire up events
  elSubmit.onclick = () => checkAnswer(elInput.value, false);
  elInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      checkAnswer(elInput.value, false);
    }
  });

  // Safe navigation: cleanup then go
  function cleanup() {
    try { stopPerTimer(); } catch(_) {}
    try { stopOverallTimer(); } catch(_) {}
    const node = document.getElementById('conj-race');
    if (node) node.remove();
  }
  function goNext(dest) { cleanup(); if (dest) loadScene(dest); }

  // Global cleanup hook for universal cleanup
  window.__crCleanup = function () { cleanup(); };

  // Auto-clean timers if wrapper disappears
  const mo = new MutationObserver(() => {
    const alive = document.getElementById('conj-race');
    if (!alive) { stopPerTimer(); stopOverallTimer(); mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });

  // Start timers + first question
  if (timerOverall) startOverallTimer(timerOverall);
  renderQuestion();
}

// === Image Hotspots → drag tokens onto pins (seepage-proof) ===
function loadHotspotsScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // kill any previous instance
  if (window.__hsCleanup) { try { window.__hsCleanup(); } catch(_){} window.__hsCleanup = null; }
  const stale = document.getElementById('hotspots');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated bits; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) { sceneText.style.display = "block"; sceneText.textContent = scene.text; }
    else { sceneText.style.display = "none"; sceneText.innerHTML = ""; }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // Config shape:
  // image: 'images/…'
  // pins: [{ id:'p1', x:25, y:60, answers:['look up'] }, ...]  // x/y = % (relative to image box)
  // tokens: ['look up','pick up','put down','get over']
  // next: 'scene1' (optional)
  const pins = Array.isArray(scene.pins) ? scene.pins : [];
  const tokens = Array.isArray(scene.tokens) ? scene.tokens.slice() : [];
  const bankTitle = scene.bankTitle || 'Choices';

  // Wrapper
  const wrap = document.createElement('div');
  wrap.id = 'hotspots';
  wrap.style.maxWidth = '980px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '10px 6px';
  wrap.style.color = '#eee';

  wrap.innerHTML = `
    <div id="hs-grid" style="display:grid;grid-template-columns:1fr 320px;gap:16px;align-items:start;">
      <div id="hs-stage" style="position:relative;border-radius:12px;overflow:hidden;background:#000;">
        <img id="hs-img" src="${scene.image}" alt="scene" style="display:block;width:100%;height:auto;"/>
        <div id="hs-layer" style="position:absolute;inset:0;pointer-events:none;"></div>
      </div>
      <div id="hs-side">
        <div style="font-weight:700;margin-bottom:8px;">${bankTitle}</div>
        <div id="hs-bank" style="display:flex;flex-wrap:wrap;gap:8px;min-height:48px;"></div>
        <div id="hs-feedback" style="margin-top:12px;font-weight:700;"></div>
        <div id="hs-ctrl" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;"></div>
      </div>
    </div>
  `;

  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  else gameContainer.appendChild(wrap);

  const layer = wrap.querySelector('#hs-layer');
  const bank  = wrap.querySelector('#hs-bank');
  const fb    = wrap.querySelector('#hs-feedback');
  const ctrl  = wrap.querySelector('#hs-ctrl');

  // Build token chips in bank
  tokens.forEach(val => {
    const chip = document.createElement('div');
    chip.className = 'hs-chip';
    chip.textContent = val;
    chip.dataset.value = val;
    chip.style.cssText = "pointer-events:auto;user-select:none;padding:8px 10px;border-radius:10px;border:2px solid #00ffff;background:#000;color:#0ff;font-weight:700;cursor:grab";
    bank.appendChild(chip);
  });

  // Make bank sortable (source list)
  const bankSortable = Sortable.create(bank, {
    group: { name: 'hs', pull: 'clone', put: true },
    animation: 150,
    sort: false
  });

  // Build pins (droppable 1-item targets)
  const dropSortables = {};
  pins.forEach(pin => {
    const pinWrap = document.createElement('div');
    pinWrap.className = 'hs-pin';
    pinWrap.style.cssText = `
      position:absolute;left:${pin.x}%;top:${pin.y}%;
      transform:translate(-50%,-50%);
      width:48px;height:48px;border-radius:50%;
      background:radial-gradient(circle at 30% 30%, #5ff, #09a);
      box-shadow:0 0 0 3px rgba(0,255,255,.3), 0 0 12px rgba(0,255,255,.6);
      display:flex;align-items:center;justify-content:center;
      pointer-events:auto;`;
    pinWrap.title = pin.label || '';

    const slot = document.createElement('div');
    slot.id = `hs-slot-${pin.id}`;
    slot.dataset.pin = pin.id;
    slot.style.cssText = `
      width:36px;min-height:24px;max-width:80px;
      pointer-events:auto;background:#000d;border:2px dashed #bdf;
      border-radius:8px;padding:2px;display:flex;align-items:center;justify-content:center;`;
    pinWrap.appendChild(slot);

    // label below (optional)
    if (pin.caption) {
      const cap = document.createElement('div');
      cap.textContent = pin.caption;
      cap.style.cssText = "position:absolute;top:54px;left:50%;transform:translateX(-50%);font:600 12px/1.2 system-ui;white-space:nowrap;background:#000a;padding:2px 6px;border-radius:6px;border:1px solid #00bcd4";
      pinWrap.appendChild(cap);
    }

    layer.appendChild(pinWrap);

    dropSortables[pin.id] = Sortable.create(slot, {
      group: { name: 'hs', pull: true, put: true },
      animation: 150,
      sort: false,
      onAdd: (evt) => {
        const to = evt.to;
        // keep only one chip in the slot
        while (to.children.length > 1) {
          bank.appendChild(to.children[0]);
        }
      },
      onRemove: () => {}
    });
  });

  // Controls
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Reset";
  resetBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#333;color:#eee;cursor:pointer;font-weight:700";
  resetBtn.onclick = () => {
    // move all chips back to bank
    const chips = layer.querySelectorAll('.hs-chip');
    chips.forEach(ch => bank.appendChild(ch));
    fb.textContent = "";
  };
  ctrl.appendChild(resetBtn);

  const checkBtn = document.createElement('button');
  checkBtn.textContent = "Check";
  checkBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;cursor:pointer;font-weight:700";
  checkBtn.onmouseenter = () => (checkBtn.style.backgroundColor = "#00cccc");
  checkBtn.onmouseleave = () => (checkBtn.style.backgroundColor = "#00ffff");
  checkBtn.onclick = () => {
    let ok = true;
    let filled = true;
    pins.forEach(pin => {
      const slot = document.getElementById(`hs-slot-${pin.id}`);
      const chip = slot && slot.firstElementChild;
      if (!chip) { filled = false; ok = false; return; }
      const val = (chip.dataset.value || "").trim();
      const answers = Array.isArray(pin.answers) ? pin.answers : [pin.answer].filter(Boolean);
      const match = answers.some(a => (a || "").trim().toLowerCase() === val.toLowerCase());
      if (!match) ok = false;
    });

    if (!filled) {
      fb.textContent = "⚠️ Place a token on every pin.";
      fb.style.color = "orange";
      return;
    }
    if (ok) {
      fb.textContent = "✅ Correct! Moving on...";
      fb.style.color = "lightgreen";

      // optional rewards
      if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
      if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);

      setTimeout(() => {
        if (scene.next) goNext(scene.next);
      }, 900);
    } else {
      fb.textContent = "❌ Not quite. Try again.";
      fb.style.color = "salmon";
    }
  };
  ctrl.appendChild(checkBtn);

  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Hub";
  backBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#222;color:#eee;cursor:pointer;font-weight:700";
  backBtn.onclick = () => goNext("scene1");
  ctrl.appendChild(backBtn);

  // Cleanup helpers
  function cleanup() {
    const node = document.getElementById('hotspots');
    if (node) node.remove();
  }
  function goNext(dest) { cleanup(); if (dest) loadScene(dest); }

  // Expose global cleanup for Universal Cleanup
  window.__hsCleanup = function(){ cleanup(); };

  // Auto-stop if wrapper disappears
  const mo = new MutationObserver(() => {
    const alive = document.getElementById('hotspots');
    if (!alive) { mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// === Buckets / Kanban Sort (seepage-proof) ===
function loadBucketsScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // kill previous instance if any
  if (window.__bkCleanup) { try { window.__bkCleanup(); } catch(_){} window.__bkCleanup = null; }
  const stale = document.getElementById('buckets');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated bits; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) { sceneText.style.display = "block"; sceneText.textContent = scene.text; }
    else { sceneText.style.display = "none"; sceneText.innerHTML = ""; }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // Scene shape:
  // buckets: [{ id:'separable', label:'Separable' }, { id:'inseparable', label:'Inseparable' }, ...]
  // tokens:  ['take off','turn on','look after','get over', ...]
  // answers: { separable:['take off','turn on'], inseparable:['look after','get over'] }
  // allowExtraInBank: true (optional), showAnswerOnWrong: true (default), next:'scene1'
  const buckets = Array.isArray(scene.buckets) ? scene.buckets : [];
  const tokens  = Array.isArray(scene.tokens) ? scene.tokens.slice() : [];
  const answers = scene.answers || {};
  const allowExtraInBank = scene.allowExtraInBank !== false; // default true: distractors can stay in bank
  const showAnswerOnWrong = scene.showAnswerOnWrong !== false; // default true

  // Wrapper
  const wrap = document.createElement('div');
  wrap.id = 'buckets';
  wrap.style.maxWidth = '1100px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '10px 6px';
  wrap.style.color = '#eee';

  // grid: bank on top, buckets below
  wrap.innerHTML = `
    <div id="bk-bank-wrap" style="margin-bottom:14px;">
      <div style="font-weight:700;margin-bottom:8px;">Tokens</div>
      <div id="bk-bank" style="display:flex;flex-wrap:wrap;gap:8px;min-height:54px;border:1px dashed #00ffff33;border-radius:12px;padding:10px;"></div>
    </div>
    <div id="bk-buckets" style="display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));align-items:start;"></div>
    <div id="bk-feedback" style="margin-top:14px;font-weight:700;"></div>
    <div id="bk-ctrl" style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;"></div>
  `;

  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  else gameContainer.appendChild(wrap);

  const bank = wrap.querySelector('#bk-bank');
  const panel = wrap.querySelector('#bk-buckets');
  const fb = wrap.querySelector('#bk-feedback');
  const ctrl = wrap.querySelector('#bk-ctrl');

  // Build chips
  tokens.forEach(txt => {
    const chip = document.createElement('div');
    chip.className = 'bk-chip';
    chip.dataset.value = txt;
    chip.textContent = txt;
    chip.style.cssText = "pointer-events:auto;user-select:none;padding:8px 10px;border-radius:10px;border:2px solid #00ffff;background:#000;color:#0ff;font-weight:700;cursor:grab";
    bank.appendChild(chip);
  });

  // Bank Sortable
  const bankSortable = Sortable.create(bank, {
    group: { name: 'classify', pull: true, put: true },
    animation: 150,
    sort: false
  });

  // Buckets UIs + Sortables
  const bucketSortables = {};
  buckets.forEach(b => {
    const col = document.createElement('div');
    col.className = 'bk-col';
    col.style.cssText = "background:#000a;border:1px solid #00bcd455;border-radius:12px;padding:10px;min-height:140px;";

    col.innerHTML = `
      <div class="bk-title" style="font-weight:800;margin-bottom:8px;color:#9fe8ff">${b.label || b.id}</div>
      <div class="bk-drop" id="bk-drop-${b.id}" data-bucket="${b.id}"
           style="display:flex;flex-wrap:wrap;gap:8px;min-height:54px;"></div>
      <div class="bk-hint" style="opacity:.85;margin-top:6px;font-size:.9rem;"></div>
    `;
    if (b.hint) col.querySelector('.bk-hint').textContent = b.hint;
    panel.appendChild(col);

    const drop = col.querySelector(`#bk-drop-${b.id}`);
    bucketSortables[b.id] = Sortable.create(drop, {
      group: { name: 'classify', pull: true, put: true },
      animation: 150,
      sort: false
    });
  });

  // Controls
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Reset";
  resetBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#333;color:#eee;cursor:pointer;font-weight:700";
  resetBtn.onclick = () => {
    // send all chips back to bank
    wrap.querySelectorAll('.bk-drop .bk-chip').forEach(ch => bank.appendChild(ch));
    fb.textContent = "";
    // clear highlights
    wrap.querySelectorAll('.bk-chip').forEach(ch => ch.style.borderColor = '#00ffff');
  };
  ctrl.appendChild(resetBtn);

  const checkBtn = document.createElement('button');
  checkBtn.textContent = "Check";
  checkBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;cursor:pointer;font-weight:700";
  checkBtn.onmouseenter = () => (checkBtn.style.backgroundColor = "#00cccc");
  checkBtn.onmouseleave = () => (checkBtn.style.backgroundColor = "#00ffff");
  checkBtn.onclick = () => {
    // Clear previous highlights
    wrap.querySelectorAll('.bk-chip').forEach(ch => ch.style.borderColor = '#00ffff');

    // build placed map
    const placed = {};
    buckets.forEach(b => {
      const drop = document.getElementById(`bk-drop-${b.id}`);
      placed[b.id] = Array.from(drop.querySelectorAll('.bk-chip')).map(c => c.dataset.value);
    });

    // If not allowing extra in bank, require that every token left the bank
    if (!allowExtraInBank) {
      const leftovers = Array.from(bank.querySelectorAll('.bk-chip')).length;
      if (leftovers > 0) {
        fb.textContent = "⚠️ Sort all tokens into a bucket.";
        fb.style.color = "orange";
        return;
      }
    }

    // Validate: each bucket should contain exactly the expected items (order irrelevant)
    let allOk = true;
    buckets.forEach(b => {
      const want = new Set((answers[b.id] || []).map(s => s.toLowerCase()));
      const got  = placed[b.id].map(s => s.toLowerCase());

      // Wrong if: any missing target OR any extra not in want
      let ok = true;

      // missing
      want.forEach(w => { if (!got.includes(w)) ok = false; });
      // extras
      got.forEach(g => { if (!want.has(g)) ok = false; });

      if (!ok) {
        allOk = false;
        // highlight wrong chips in this bucket
        const drop = document.getElementById(`bk-drop-${b.id}`);
        Array.from(drop.querySelectorAll('.bk-chip')).forEach(ch => {
          const val = (ch.dataset.value || "").toLowerCase();
          if (!want.has(val)) ch.style.borderColor = 'salmon';
        });
        if (showAnswerOnWrong && want.size) {
          const hintEl = drop.parentElement.querySelector('.bk-hint');
          hintEl.textContent = `Expected: ${Array.from(want).join(', ')}`;
          hintEl.style.color = '#ffd27f';
        }
      }
    });

    if (allOk) {
      fb.textContent = "✅ Correct! Moving on...";
      fb.style.color = "lightgreen";
      if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
      if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);
      setTimeout(() => { if (scene.next) goNext(scene.next); }, 900);
    } else {
      fb.textContent = "❌ Some items are misplaced. Adjust and try again.";
      fb.style.color = "salmon";
    }
  };
  ctrl.appendChild(checkBtn);

  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Hub";
  backBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#222;color:#eee;cursor:pointer;font-weight:700";
  backBtn.onclick = () => goNext("scene1");
  ctrl.appendChild(backBtn);

  // cleanup + navigation
  function cleanup() {
    const node = document.getElementById('buckets');
    if (node) node.remove();
  }
  function goNext(dest) { cleanup(); if (dest) loadScene(dest); }

  window.__bkCleanup = function(){ cleanup(); };

  const mo = new MutationObserver(() => {
    const alive = document.getElementById('buckets');
    if (!alive) { mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// === Particle Swapper (live preview, seepage-proof) ===
// Supports two modes:
//
//  A) Full-phrase mode (default):
//     template: 'Please {{CHOICE}} the music.'
//     options: ['turn up','turn down','turn off']
//     correct: 1
//
//  B) Particle-only mode:
//     template: 'Please {{PARTICLE}} the heater.'   (or 'Please turn {{PARTICLE}} the heater.')
//     verb: 'turn'   // optional, used only for preview notes mapping
//     options: ['up','down','off']
//     correct: 2
//
// Optional:
//     previews: { '<option or full>': 'emoji or note', ... }
//     next, setFlagsOnWin[], unlockScenesOnWin[]
function loadParticleSwapperScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // kill any previous instance
  if (window.__psCleanup) { try { window.__psCleanup(); } catch(_){} window.__psCleanup = null; }
  const stale = document.getElementById('particle-swapper');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated bits; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) { sceneText.style.display = "block"; sceneText.textContent = scene.text; }
    else { sceneText.style.display = "none"; sceneText.innerHTML = ""; }
  }
  if (gameContainer) gameContainer.style.display = "block";

  // shape
  const mode = (scene.mode === 'particle') ? 'particle' : 'full';
  const template = scene.template || 'Please {{CHOICE}} the object.';
  const options = Array.isArray(scene.options) ? scene.options : [];
  const correctIndex = Number.isInteger(scene.correct) ? scene.correct : 0;
  const previews = scene.previews || {};
  const verb = scene.verb || ''; // only for particle mode helper text

  // Build UI
  const wrap = document.createElement('div');
  wrap.id = 'particle-swapper';
  wrap.style.maxWidth = '840px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '10px 6px';
  wrap.style.color = '#eee';

  wrap.innerHTML = `
    <div id="ps-sentence" style="font:700 26px/1.5 system-ui,Segoe UI,Arial;letter-spacing:.02em;margin-bottom:12px;"></div>
    <div id="ps-note" style="opacity:.9;margin-bottom:12px;"></div>
    <div id="ps-options" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;"></div>
    <div id="ps-feedback" style="font-weight:700;margin-top:4px;"></div>
    <div id="ps-ctrl" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;"></div>
  `;
  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  else gameContainer.appendChild(wrap);

  const sentenceEl = wrap.querySelector('#ps-sentence');
  const noteEl = wrap.querySelector('#ps-note');
  const optsEl = wrap.querySelector('#ps-options');
  const fbEl = wrap.querySelector('#ps-feedback');
  const ctrlEl = wrap.querySelector('#ps-ctrl');

  let selectedIndex = null;

  function renderSentence() {
    let s = template;
    if (mode === 'particle') {
      const particle = (selectedIndex != null) ? options[selectedIndex] : '___';
      s = s.replace('{{PARTICLE}}', particle);
      // If the template did not include PARTICLE, fall back to a reasonable preview
      if (s === template) {
        s = `Please ${verb ? (verb + ' ') : ''}${particle} the object.`;
      }
    } else {
      const choice = (selectedIndex != null) ? options[selectedIndex] : '_____';
      s = s.replace('{{CHOICE}}', choice);
      if (s === template) {
        s = `Please ${choice} the object.`;
      }
    }
    sentenceEl.textContent = s;
  }

  function renderNote() {
    if (selectedIndex == null) { noteEl.textContent = ''; return; }
    const val = options[selectedIndex];
    // Build key for previews
    let key = val;
    if (mode === 'particle' && verb) key = `${verb} ${val}`;
    const note = previews[key] || previews[val] || '';
    noteEl.textContent = note;
  }

  // Build option buttons
  options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'ps-opt';
    btn.textContent = opt;
    btn.dataset.index = i;
    btn.style.cssText = "padding:8px 12px;border-radius:10px;border:2px solid #00ffff;background:#000;color:#0ff;font-weight:700;cursor:pointer";
    btn.onmouseenter = () => (btn.style.background = "#001a1a");
    btn.onmouseleave = () => (btn.style.background = "#000");
    btn.onclick = () => {
      // clear selection
      optsEl.querySelectorAll('.ps-opt').forEach(b => { b.style.borderColor = '#00ffff'; b.style.opacity = '1'; });
      selectedIndex = i;
      btn.style.borderColor = '#9effa0';
      renderSentence();
      renderNote();
      fbEl.textContent = '';
    };
    optsEl.appendChild(btn);
  });

  // Controls
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Reset";
  resetBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#333;color:#eee;cursor:pointer;font-weight:700";
  resetBtn.onclick = () => {
    selectedIndex = null;
    optsEl.querySelectorAll('.ps-opt').forEach(b => { b.style.borderColor = '#00ffff'; b.style.opacity = '1'; });
    fbEl.textContent = '';
    noteEl.textContent = '';
    renderSentence();
  };
  ctrlEl.appendChild(resetBtn);

  const checkBtn = document.createElement('button');
  checkBtn.textContent = "Submit";
  checkBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;cursor:pointer;font-weight:700";
  checkBtn.onmouseenter = () => (checkBtn.style.backgroundColor = "#00cccc");
  checkBtn.onmouseleave = () => (checkBtn.style.backgroundColor = "#00ffff");
  checkBtn.onclick = () => {
    if (selectedIndex == null) {
      fbEl.textContent = '⚠️ Select an option first.';
      fbEl.style.color = 'orange';
      return;
    }
    const correct = (selectedIndex === correctIndex);
    if (correct) {
      fbEl.textContent = '✅ Correct! Moving on...';
      fbEl.style.color = 'lightgreen';
      if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
      if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);
      setTimeout(() => { if (scene.next) goNext(scene.next); }, 900);
    } else {
      fbEl.textContent = '❌ Not quite. Try another particle.';
      fbEl.style.color = 'salmon';
      // nudge UI
      optsEl.querySelectorAll('.ps-opt').forEach((b, idx) => {
        if (idx === selectedIndex) b.style.borderColor = 'salmon';
      });
    }
  };
  ctrlEl.appendChild(checkBtn);

  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Hub";
  backBtn.style.cssText = "padding:8px 12px;border-radius:10px;border:none;background:#222;color:#eee;cursor:pointer;font-weight:700";
  backBtn.onclick = () => goNext('scene1');
  ctrlEl.appendChild(backBtn);

  function cleanup() {
    const node = document.getElementById('particle-swapper');
    if (node) node.remove();
  }
  function goNext(dest) { cleanup(); if (dest) loadScene(dest); }
  window.__psCleanup = function(){ cleanup(); };

  const mo = new MutationObserver(() => {
    const alive = document.getElementById('particle-swapper');
    if (!alive) { mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });

  // Initial paint
  renderSentence();
  renderNote();
}

// === Comic Bubbles (speech/thought over image) — seepage-proof ===
// Scene shape:
//   type: 'comic-bubbles',
//   image: 'images/whatever.png',
//   text: 'instructions...',
//   bubbles: [
//     { x: 22, y: 28, kind: 'speech', prompt: 'Can you ___ the word?', options: ['look up','pick up','put down'], correct: 0 },
//     { x: 72, y: 62, kind: 'thought', prompt: 'We should ___ the TV.', options: ['turn up','turn down','turn off'], correct: 2 }
//   ],
//   next: 'scene1', setFlagsOnWin:[], unlockScenesOnWin:[]
function loadComicBubblesScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  // kill any previous instance
  if (window.__cbCleanup) { try { window.__cbCleanup(); } catch(_){} window.__cbCleanup = null; }
  const stale = document.getElementById('comic-bubbles');
  if (stale) stale.remove();

  const gameContainer = document.getElementById("game-container");
  const sceneText = document.getElementById("scene-text");
  const sceneImage = document.getElementById("scene-image");
  const infoDiv = document.getElementById("challenge-info");

  // Hide unrelated bits; show instructions if provided
  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) { sceneText.style.display = "block"; sceneText.textContent = scene.text; }
    else { sceneText.style.display = "none"; sceneText.innerHTML = ""; }
  }
  if (gameContainer) gameContainer.style.display = "block";

  const bubbles = Array.isArray(scene.bubbles) ? scene.bubbles : [];

  // Wrapper with the image and overlay layer
  const wrap = document.createElement('div');
  wrap.id = 'comic-bubbles';
  wrap.style.maxWidth = '980px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '8px 6px';
  wrap.style.color = '#eee';

  wrap.innerHTML = `
    <div id="cb-figure" style="position:relative; width:100%; border-radius:12px; overflow:hidden; background:#000;">
      <img id="cb-img" src="${scene.image || ''}" alt="scene" style="width:100%; height:auto; display:block;"/>
      <div id="cb-overlay" style="position:absolute; inset:0;"></div>
    </div>
    <div id="cb-feedback" style="margin-top:12px; font-weight:700;"></div>
    <div id="cb-ctrl" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap;"></div>
  `;
  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  else gameContainer.appendChild(wrap);

  const overlay = wrap.querySelector('#cb-overlay');
  const fbEl = wrap.querySelector('#cb-feedback');
  const ctrlEl = wrap.querySelector('#cb-ctrl');

  // Create bubbles
  const state = { chosen: Array(bubbles.length).fill(null) };

  function bubbleShellStyles(kind) {
    const base = "position:absolute; transform:translate(-50%,-50%); max-width:46%;";
    const pad = "padding:10px 12px; border-radius:16px;";
    const common = "background:#111; color:#0ff; border:2px solid #00ffff; box-shadow:0 2px 10px #0008;";
    const tail =
      kind === 'thought'
        ? ``
        : ``;
    return `${base} ${pad} ${common} ${tail}`;
  }

  function renderBubble(i, b) {
    const el = document.createElement('div');
    el.className = 'cb-bubble';
    el.style.cssText = bubbleShellStyles(b.kind || 'speech');
    el.style.left = (b.x || 50) + '%';
    el.style.top = (b.y || 50) + '%';
    el.style.cursor = 'default';

    const prompt = document.createElement('div');
    prompt.textContent = b.prompt || '';
    prompt.style.fontWeight = '700';
    prompt.style.marginBottom = '8px';
    el.appendChild(prompt);

    const optWrap = document.createElement('div');
    optWrap.className = 'cb-options';
    optWrap.style.display = 'flex';
    optWrap.style.flexWrap = 'wrap';
    optWrap.style.gap = '6px';
    el.appendChild(optWrap);

    (b.options || []).forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.textContent = optText;
      btn.dataset.index = idx;
      btn.style.cssText = "padding:6px 10px; border-radius:10px; border:2px solid #00ffff; background:#000; color:#0ff; font-weight:700; cursor:pointer;";
      btn.onmouseenter = () => (btn.style.background = "#001a1a");
      btn.onmouseleave = () => (btn.style.background = "#000");
      btn.onclick = () => {
        state.chosen[i] = idx;
        // reset all buttons border in this bubble
        optWrap.querySelectorAll('button').forEach(bn => bn.style.borderColor = '#00ffff');
        btn.style.borderColor = '#9effa0';
        fbEl.textContent = '';
      };
      optWrap.appendChild(btn);
    });

    // inline result area for this bubble
    const note = document.createElement('div');
    note.className = 'cb-note';
    note.style.marginTop = '6px';
    note.style.opacity = '.95';
    el.appendChild(note);

    overlay.appendChild(el);
  }

  bubbles.forEach((b, i) => renderBubble(i, b));

  // Controls
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "Reset";
  resetBtn.style.cssText = "padding:8px 12px; border-radius:10px; border:none; background:#333; color:#eee; cursor:pointer; font-weight:700";
  resetBtn.onclick = () => {
    state.chosen = Array(bubbles.length).fill(null);
    overlay.querySelectorAll('.cb-bubble .cb-options button').forEach(b => b.style.borderColor = '#00ffff');
    overlay.querySelectorAll('.cb-bubble .cb-note').forEach(n => { n.textContent = ''; n.style.color = '#eee'; });
    fbEl.textContent = '';
  };
  ctrlEl.appendChild(resetBtn);

  const checkBtn = document.createElement('button');
  checkBtn.textContent = "Submit";
  checkBtn.style.cssText = "padding:8px 12px; border-radius:10px; border:none; background:#00ffff; color:#000; cursor:pointer; font-weight:700";
  checkBtn.onmouseenter = () => (checkBtn.style.backgroundColor = "#00cccc");
  checkBtn.onmouseleave = () => (checkBtn.style.backgroundColor = "#00ffff");
  checkBtn.onclick = () => {
    let allAnswered = true;
    let allCorrect = true;

    bubbles.forEach((b, i) => {
      const note = overlay.querySelectorAll('.cb-bubble .cb-note')[i];
      const chosen = state.chosen[i];
      if (chosen == null) { allAnswered = false; note.textContent = '⚠️ Choose an option.'; note.style.color = 'orange'; return; }
      if (chosen !== b.correct) { allCorrect = false; note.textContent = '❌ Try another option.'; note.style.color = 'salmon'; }
      else { note.textContent = '✅'; note.style.color = 'lightgreen'; }
    });

    if (!allAnswered) {
      fbEl.textContent = "⚠️ Answer all bubbles before submitting.";
      fbEl.style.color = "orange";
      return;
    }

    if (allCorrect) {
      fbEl.textContent = "✅ Perfect! Moving on…";
      fbEl.style.color = "lightgreen";
      if (Array.isArray(scene.setFlagsOnWin)) scene.setFlagsOnWin.forEach(setFlag);
      if (Array.isArray(scene.unlockScenesOnWin)) scene.unlockScenesOnWin.forEach(unlockScene);
      setTimeout(() => { if (scene.next) goNext(scene.next); }, 900);
    } else {
      fbEl.textContent = "❌ Some bubbles are incorrect. Adjust and submit again.";
      fbEl.style.color = "salmon";
    }
  };
  ctrlEl.appendChild(checkBtn);

  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Hub";
  backBtn.style.cssText = "padding:8px 12px; border-radius:10px; border:none; background:#222; color:#eee; cursor:pointer; font-weight:700";
  backBtn.onclick = () => goNext('scene1');
  ctrlEl.appendChild(backBtn);

  // cleanup + navigation
  function cleanup() {
    const node = document.getElementById('comic-bubbles');
    if (node) node.remove();
  }
  function goNext(dest) { cleanup(); if (dest) loadScene(dest); }
  window.__cbCleanup = function(){ cleanup(); };

  const mo = new MutationObserver(() => {
    const alive = document.getElementById('comic-bubbles');
    if (!alive) { mo.disconnect(); }
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

// === Dashboard (universal CRM-style widgets + data MCQs) ===
// Scene shape:
//   type: 'dashboard',
//   text: 'instructions...',
//   widgets: [
//     { type:'kpi', id:'rev', label:'Revenue', value:'$1.2M', delta:+8 },
//     { type:'bar', id:'perf', label:'Quarterly Performance', data:[{label:'Q1',value:20},...], max:100 },
//     { type:'pie', id:'mix', label:'Product Mix', data:[{label:'A',value:50},...], colors:['#0ff','#9f0','#f90'] },
//     { type:'table', id:'top', label:'Top Accounts', columns:['Client','MRR','Status'], rows:[['Acme','$50k','Active'], ...] }
//   ],
//   questions: [
//     { text:'Which product leads the mix?', options:['A','B','C'], correct:0 },
//     { text:'Which quarter was best?', options:['Q1','Q2','Q3','Q4'], correct:3 }
//   ],
//   next:'scene1' OR {scoring:{high:2,medium:1}, endings:{high:'id',medium:'id',low:'id'}}
// === Dashboard loader (binds to crm.state + live updates) ===
// === Dashboard (narrative CRM) loader ===
function loadDashboardScene(id) {
  const scene = scenes[id];
  if (!scene) { console.error(`Scene ${id} not found.`); return; }

  const regNode     = window.registerNode     || function(){};
  const regCleanup  = window.registerCleanup  || function(){};

  // Kill any previous instance
  const stale = document.getElementById('dashboard-wrap');
  if (stale) stale.remove();

  const game       = document.getElementById('game-container');
  const sceneText  = document.getElementById('scene-text');
  const sceneImage = document.getElementById('scene-image');
  const infoDiv    = document.getElementById('challenge-info');

  [sceneImage, infoDiv].forEach(el => { if (el) { el.style.display = "none"; el.innerHTML = ""; } });
  if (sceneText) {
    if (scene.text) { sceneText.style.display = 'block'; sceneText.textContent = scene.text; }
    else { sceneText.style.display = 'none'; sceneText.innerHTML = ''; }
  }
  if (game) game.style.display = 'block';

  // Wrapper
  const wrap = document.createElement('div');
  wrap.id = 'dashboard-wrap';
  wrap.style.maxWidth = '1100px';
  wrap.style.margin = '0 auto';
  wrap.style.padding = '8px 6px';
  wrap.style.color = '#eee';
  regNode(wrap);

  const questions = Array.isArray(scene.questions) ? scene.questions : [];

  wrap.innerHTML = `
    <div id="dash-grid" style="
      display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
      gap:12px;align-items:start;">
    </div>
    ${questions.length ? `<div id="dash-qa" style="margin-top:16px;border-top:1px solid #00ffff55;padding-top:12px;"></div>` : ``}
  `;
  if (sceneText && sceneText.parentNode) sceneText.parentNode.insertBefore(wrap, sceneText.nextSibling);
  else game.appendChild(wrap);

  regCleanup(() => { const n = document.getElementById('dashboard-wrap'); if (n) n.remove(); });

  const grid = wrap.querySelector('#dash-grid');
  const qa   = wrap.querySelector('#dash-qa');

  // --- Card helpers
  function card(title) {
    const c = document.createElement('div');
    c.className = 'dash-card';
    c.style.cssText = 'background:#0a0a0a;border:1px solid #00ffff33;border-radius:12px;padding:12px;box-shadow:0 4px 16px #0006;';
    if (title) {
      const h = document.createElement('div');
      h.textContent = title;
      h.style.cssText = 'font-weight:800;margin-bottom:8px;color:#0ff;';
      c.appendChild(h);
    }
    regNode(c);
    return c;
  }
  function renderKPI(w) {
    const c = card(w.label);
    const val = document.createElement('div');
    val.textContent = w.value ?? '';
    val.style.cssText = 'font-size:28px;font-weight:900;letter-spacing:.02em;margin-bottom:6px;';
    const d = document.createElement('div');
    const delta = Number(w.delta || 0);
    const sign = delta > 0 ? '+' : '';
    d.textContent = `${sign}${delta}% vs prev`;
    d.style.cssText = `font-weight:700;${delta>=0?'color:#9effa0;':'color:salmon;'}`;
    c.appendChild(val); c.appendChild(d);
    return c;
  }
  function renderBar(w) {
    const c = card(w.label);
    const max = Number.isFinite(w.max) ? w.max : Math.max(...(w.data||[]).map(d=>d.value||0), 1);
    (w.data||[]).forEach(row=>{
      const line = document.createElement('div');
      line.style.cssText='display:flex;align-items:center;gap:8px;margin:6px 0;';
      const label = document.createElement('div');
      label.textContent = row.label ?? '';
      label.style.cssText='min-width:64px;opacity:.9;';
      const barBox = document.createElement('div');
      barBox.style.cssText='flex:1;background:#111;border-radius:8px;overflow:hidden;border:1px solid #00ffff33;';
      const bar = document.createElement('div');
      const pct = Math.max(0, Math.min(100, (row.value||0)/max*100));
      bar.style.cssText=`height:14px;width:${pct}%;background:linear-gradient(90deg,#00ffff,#00cccc);`;
      barBox.appendChild(bar);
      const val = document.createElement('div');
      val.textContent = row.value ?? '';
      val.style.cssText='min-width:44px;text-align:right;opacity:.85;';
      line.appendChild(label); line.appendChild(barBox); line.appendChild(val);
      c.appendChild(line);
    });
    return c;
  }
  function renderPie(w) {
    const total = (w.data||[]).reduce((a,b)=>a+(b.value||0),0) || 1;
    let acc = 0;
    const colors = ['#00ffff','#9effa0','#f9f871','#f99','#0bf','#f0f','#ffa500'];
    const stops = (w.data||[]).map((seg,i)=>{
      const start = acc/total*360; acc += (seg.value||0);
      const end = acc/total*360;
      const col = (w.colors && w.colors[i]) || colors[i%colors.length];
      return `${col} ${start}deg ${end}deg`;
    }).join(', ');
    const c = card(w.label);
    const ring = document.createElement('div');
    ring.style.cssText=`width:140px;height:140px;border-radius:50%;margin:6px auto;background:conic-gradient(${stops});`;
    const hole = document.createElement('div');
    hole.style.cssText='width:80px;height:80px;border-radius:50%;background:#0a0a0a;margin:-110px auto 8px;border:1px solid #00ffff33;';
    c.appendChild(ring); c.appendChild(hole);
    (w.data||[]).forEach((seg,i)=>{
      const row=document.createElement('div');
      const col=(w.colors && w.colors[i]) || colors[i%colors.length];
      row.innerHTML=`<span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:${col};margin-right:6px;"></span>${seg.label ?? ''} — ${seg.value ?? 0}`;
      row.style.margin='4px 0'; row.style.opacity='.9';
      c.appendChild(row);
    });
    return c;
  }
  function renderTable(w) {
    const c = card(w.label);
    const tbl = document.createElement('table');
    tbl.style.cssText='width:100%;border-collapse:collapse;font-size:14px;';
    const thead = document.createElement('thead');
    const trh = document.createElement('tr');
    (w.columns||[]).forEach(h=>{
      const th=document.createElement('th');
      th.textContent=h; th.style.cssText='text-align:left;border-bottom:1px solid #00ffff33;padding:6px;';
      trh.appendChild(th);
    });
    thead.appendChild(trh); tbl.appendChild(thead);
    const tbody=document.createElement('tbody');
    (w.rows||[]).forEach(r=>{
      const tr=document.createElement('tr');
      (r||[]).forEach(cell=>{
        const td=document.createElement('td');
        td.textContent=cell; td.style.cssText='padding:6px;border-bottom:1px dashed #00ffff1f;';
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    tbl.appendChild(tbody);
    c.appendChild(tbl);
    return c;
  }

  // Render widgets
  (scene.widgets||[]).forEach(w=>{
    let node=null;
    if (w.type==='kpi') node=renderKPI(w);
    else if (w.type==='bar') node=renderBar(w);
    else if (w.type==='pie') node=renderPie(w);
    else if (w.type==='table') node=renderTable(w);
    if (node) { node.dataset.id = w.id || ''; grid.appendChild(node); }
  });

  // --- Questions (auto-advance on correct) OR auto-skip if none
  if (questions.length && qa) {
    let qIndex = 0;

    function renderDashQuestion(i) {
      const q = questions[i];
      qa.innerHTML = '';
      const cardQ = card(`Question ${i+1} of ${questions.length}`);
      const p = document.createElement('div');
      p.textContent = q.text || '';
      p.style.marginBottom = '10px';
      cardQ.appendChild(p);

      const opts = document.createElement('div');
      opts.style.display = 'flex';
      opts.style.flexDirection = 'column';
      opts.style.gap = '8px';

      (q.options || []).forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.style.cssText = "text-align:left;padding:10px 12px;border-radius:10px;border:none;background:#00ffff;color:#000;font-weight:700;cursor:pointer";
        btn.onmouseenter = () => (btn.style.background = "#00cccc");
        btn.onmouseleave = () => (btn.style.background = "#00ffff");
        btn.onclick = () => {
          const correct = (idx === q.correct);
          // disable all to avoid double clicks
          Array.from(opts.children).forEach(b => b.disabled = true);
          if (correct) {
            // brief feedback flash
            const fb = document.createElement('div');
            fb.textContent = "✅ Correct!";
            fb.style.cssText = "margin-top:8px;font-weight:800;color:lightgreen;";
            cardQ.appendChild(fb);

            setTimeout(() => {
              // next question or navigate
              if (i + 1 < questions.length) {
                renderDashQuestion(i + 1);
              } else if (scene.endings && scene.scoring) {
                // optional scoring path (count corrects)
                // minimal: treat all answered correctly path
                const dest = scene.endings.high || scene.next;
                if (dest) loadScene(dest);
              } else if (scene.next) {
                loadScene(scene.next);
              }
            }, 700);
          } else {
            // allow retry on wrong
            btn.style.background = '#ff9e9e';
            btn.style.color = '#000';
            // re-enable others so they can try again
            Array.from(opts.children).forEach(b => { if (b !== btn) b.disabled = false; });
          }
        };
        opts.appendChild(btn);
      });

      cardQ.appendChild(opts);
      qa.appendChild(cardQ);
    }

    renderDashQuestion(qIndex);
  } else if (scene.next) {
    // No questions: jump straight to the next scene
    setTimeout(() => loadScene(scene.next), 0);
  }
}




