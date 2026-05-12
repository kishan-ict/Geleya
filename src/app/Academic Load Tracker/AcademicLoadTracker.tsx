import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, RotateCcw, Brain, AlertTriangle, CheckCircle, Info, Clock, ListChecks, Target, AlertCircle, ShieldCheck } from 'lucide-react';
import './AcademicLoadTracker.css';

const QUESTIONS = [
  {
    id: 1,
    question: "Do you have any exams, tests, or quizzes coming up?",
    why: "Exam proximity is the SINGLE BIGGEST academic stressor. It sets the entire urgency context.",
    options: [
      { text: "Nothing for at least 2 weeks — I'm clear", score: 0 },
      { text: "Something in about a week — not urgent yet", score: 1 },
      { text: "Exam/test within the next 2-3 days", score: 2 },
      { text: "Exam/test tomorrow or today — I'm not ready", score: 3 }
    ]
  },
  {
    id: 2,
    question: "How many assignments or projects are pending right now?",
    why: "Pending work creates cognitive overload (Zeigarnik Effect). 5+ tasks = decision paralysis.",
    options: [
      { text: "Nothing pending — I'm fully up to date", score: 0 },
      { text: "1-2 things due but I've started them", score: 1 },
      { text: "3-4 things due and I've barely started", score: 2 },
      { text: "5 or more things pending — I'm lost", score: 3 }
    ]
  },
  {
    id: 3,
    question: "How is your attendance looking this semester?",
    why: "In India, below 75% = exam ban risk. This is a critical hidden stressor.",
    options: [
      { text: "Above 85% — completely safe", score: 0 },
      { text: "Between 75-85% — okay but need to be careful", score: 1 },
      { text: "Below 75% — I'm at risk of being detained", score: 2 },
      { text: "Critical — I may not be allowed to sit for exams", score: 3 }
    ]
  },
  {
    id: 4,
    question: "How well do you understand what's being taught right now?",
    why: "Academic helplessness is the gateway to burnout. Measures cognitive stress.",
    options: [
      { text: "I'm following along well — concepts are clear", score: 0 },
      { text: "I understand most of it but have some doubts", score: 1 },
      { text: "I'm lost in at least 1-2 subjects completely", score: 2 },
      { text: "I've fallen so far behind I don't know how to catch up", score: 3 }
    ]
  },
  {
    id: 5,
    question: "How much time are you realistically getting to study each day?",
    why: "Measures the GAP between what needs to be done and what's actually happening.",
    options: [
      { text: "3+ hours of focused study — enough", score: 0 },
      { text: "1-2 hours — manageable but tight", score: 1 },
      { text: "Less than 1 hour — getting very little done", score: 2 },
      { text: "I haven't studied at all in the last 2-3 days", score: 3 }
    ]
  },
  {
    id: 6,
    question: "Are you feeling pressure from outside academics right now?",
    why: "External pressure (family/placement) multiplies academic load. India-first thinking.",
    options: [
      { text: "No — I feel supported and pressure-free", score: 0 },
      { text: "Mild pressure — family asks occasionally", score: 1 },
      { text: "Strong pressure — family or placement stress", score: 2 },
      { text: "Extreme pressure — conflicts or constant peer comparison", score: 3 }
    ]
  },
  {
    id: 7,
    question: "When you sit down to study, what actually happens?",
    why: "Procrastination is both a symptom and cause. 'Can't start' = academic paralysis.",
    options: [
      { text: "I study — I get into it and finish my plan", score: 0 },
      { text: "I study but get distracted after a while", score: 1 },
      { text: "I open my books but end up on my phone", score: 2 },
      { text: "I can't bring myself to start at all", score: 3 }
    ]
  }
];

/**
 * FadeIn Component
 */
const FadeIn = ({ children, delay, duration }: { children: React.ReactNode, delay: number, duration: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`fade-in ${visible ? 'visible' : ''}`} 
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

/**
 * AnimatedHeading Component
 */
const AnimatedHeading = ({ text, initialDelay = 200, charDelay = 30 }: { text: string, initialDelay?: number, charDelay?: number }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');
  let charCount = 0;

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight mb-4" style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIdx) => {
        const lineStartCount = charCount;
        charCount += line.length;
        return (
          <React.Fragment key={lineIdx}>
            {line.split('').map((char, charIdx) => {
              const delay = (lineIdx * line.length * charDelay) + (charIdx * charDelay);
              return (
                <span 
                  key={charIdx}
                  className={`char-entrance ${visible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
            {lineIdx < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </h1>
  );
};

const AcademicLoadTracker = () => {
  const [step, setStep] = useState<'hero' | 'quiz' | 'analyzing' | 'result'>('hero');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [loadData, setLoadData] = useState<{
    score: number;
    level: string;
    predict: string;
    urgency: string;
    color: string;
    isCrisis: boolean;
    priorityContext: any;
  } | null>(null);

  const startQuiz = () => {
    setStep('quiz');
    setCurrentQ(0);
    setAnswers([]);
  };

  const handleShare = async () => {
    if (!loadData) return;
    
    const shareText = `My Academic Load Score is ${loadData.score}/10 (${loadData.level}). Predicted future stress: ${loadData.predict}. Check yours at geleya.pages.dev!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Geleya Academic Load Analysis',
          text: shareText,
          url: 'https://geleya.pages.dev',
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: number[]) => {
    setStep('analyzing');
    
    setTimeout(() => {
      const rawScore = finalAnswers.reduce((a, b) => a + b, 0);
      let loadScore = parseFloat(((rawScore / 21) * 10).toFixed(1));
      
      const q1 = finalAnswers[0];
      const q3 = finalAnswers[2];
      const q4 = finalAnswers[3];
      const q5 = finalAnswers[4];
      const q7 = finalAnswers[6];

      let level = "";
      let predict = "";
      let urgency = "";
      let color = "";
      let isCrisis = false;

      const isExamTrap = q1 === 3 && q5 === 3;
      const isDetentionRisk = q3 === 3 && q1 >= 2;
      const isBurnoutLoop = q4 === 3 && q7 === 3;

      if (isExamTrap || isBurnoutLoop || loadScore >= 8.0) {
        level = "Academic Crisis ⚠️";
        predict = "You are already in crisis — get help NOW.";
        urgency = "CRITICAL — Don't face this alone";
        color = "text-red-600";
        isCrisis = true;
        loadScore = Math.max(loadScore, 8.5);
      } else if (isDetentionRisk || loadScore >= 6.0) {
        level = "Overloaded 🔴";
        predict = "High stress incoming in 24-48 hours.";
        urgency = "HIGH — Immediate action needed";
        color = "text-red-500";
        loadScore = Math.max(loadScore, 6.5);
      } else if (loadScore >= 3.1) {
        level = "Building Up 🟡";
        predict = "Stress likely in 3-5 days if nothing changes.";
        urgency = "MEDIUM — Reorganize your schedule";
        color = "text-yellow-500";
      } else {
        level = "Manageable 🟢";
        predict = "Your academic load is under control.";
        urgency = "LOW — Keep your current routine";
        color = "text-green-500";
      }

      const priorityContext = {
        hasExamSoon: q1 >= 2,
        manyPending: finalAnswers[1] >= 2,
        attendanceRisk: q3 >= 2,
        conceptsLost: q4 >= 2,
        noStudyTime: q5 >= 2,
        externalPressure: finalAnswers[5] >= 2,
        cantStart: q7 >= 2
      };

      setLoadData({ score: loadScore, level, predict, urgency, color, isCrisis, priorityContext });
      setStep('result');
    }, 2500);
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-inter text-white">
      {/* FULL-SCREEN BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
      </video>
      {/* FULL SCREEN BLUR DURING QUIZ (Cluster Clear) */}
      <div className={`fixed inset-0 z-1 pointer-events-none backdrop-blur-md bg-black/40 transition-opacity duration-700 ${step === 'quiz' ? 'opacity-100' : 'opacity-0'}`} />

      {/* HERO CONTENT */}
      {step === 'hero' && (
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div className="max-w-4xl">
              <AnimatedHeading text={"Shaping tomorrow\nwith vision and action."} />
              
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl">
                  Analyze your future workload and stay ahead of the stress curve.
                </p>
              </FadeIn>
              
              <FadeIn delay={1200} duration={1000}>
                <button 
                  onClick={startQuiz}
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
                >
                  Let's Start
                </button>
              </FadeIn>
            </div>

            <div className="hidden lg:flex items-end justify-end">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light tracking-tight">Academics. Load. Analysis.</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      )}

      {/* QUIZ SECTION */}
      {step === 'quiz' && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-2xl animate-blur-fade-up">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <span className="text-white/40 font-medium text-xs tracking-widest uppercase mb-2 block">Prediction Step {currentQ + 1} of 7</span>
                <h2 className="text-2xl sm:text-4xl font-normal tracking-tight leading-tight">{QUESTIONS[currentQ].question}</h2>
              </div>
              <div className="text-white/20 text-sm font-mono">
                {Math.round(((currentQ) / 7) * 100)}%
              </div>
            </div>

            <div className="space-y-3">
              {QUESTIONS[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-6 rounded-xl liquid-glass hover:bg-white/5 border border-white/5 transition-all group flex justify-between items-center"
                >
                  <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{option.text}</span>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>

            <div className="mt-12 p-5 rounded-xl bg-white/5 border border-white/5 flex gap-4 items-start">
              <Info size={18} className="text-white/40 shrink-0 mt-1" />
              <p className="text-sm text-white/40 italic leading-relaxed">
                {QUESTIONS[currentQ].why}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ANALYZING STATE */}
      {step === 'analyzing' && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="size-20 rounded-full border-4 border-white/5 border-t-white animate-spin mb-8" />
          <h2 className="text-3xl font-light tracking-tight mb-4 animate-pulse">Calculating Load Profile...</h2>
          <p className="text-white/40 max-w-xs text-sm">Predicting stress triggers for the next 72 hours based on your academic trajectory.</p>
        </div>
      )}

      {/* RESULT DASHBOARD */}
      {step === 'result' && loadData && (
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-20 overflow-y-auto">
          <div className="w-full max-w-5xl animate-blur-fade-up">
            {/* TOP HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 text-white/40 mb-2">
                  <ShieldCheck size={16} />
                  <span className="text-xs font-medium tracking-widest uppercase">Verified Academic Profile</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-normal tracking-tighter">Your Load Dashboard</h1>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={startQuiz}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-all text-sm"
                >
                  <RotateCcw size={16} />
                  Reset Tracker
                </button>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl liquid-glass border border-white/10 text-white font-medium hover:bg-white/5 transition-all text-sm"
                >
                  Share Results
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* SCORE CARD */}
              <div className="lg:col-span-1 liquid-glass p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
                <div className="relative size-48 mb-6">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5" 
                      strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * loadData.score / 10)}
                      className={`${loadData.color} transition-all duration-1000 ease-out`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl font-light tracking-tighter">{loadData.score}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Load Score</span>
                  </div>
                </div>
                <div className={`text-2xl font-medium mb-1 ${loadData.color}`}>{loadData.level}</div>
                <div className="text-sm text-white/40">{loadData.predict}</div>
              </div>

              {/* PREDICTION TIMELINE */}
              <div className="lg:col-span-2 liquid-glass p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 mb-8">
                  <Clock size={20} className="text-white/60" />
                  <h3 className="text-lg font-medium">Stress Prediction Timeline</h3>
                </div>
                <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 size-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className="size-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm font-medium mb-1">Next 24 Hours</div>
                    <p className="text-sm text-white/40">{loadData.isCrisis ? "Extreme risk of burnout. Academic pressure is already critical." : "Workload is manageable but demands focus."}</p>
                  </div>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 size-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <div className={`size-2 rounded-full ${loadData.score >= 6 ? 'bg-red-500' : 'bg-yellow-500'}`} />
                    </div>
                    <div className="text-sm font-medium mb-1">48 - 72 Hours</div>
                    <p className="text-sm text-white/40">{loadData.urgency}</p>
                  </div>
                </div>
              </div>

              {/* AI ACTION PLAN */}
              <div className="lg:col-span-3 liquid-glass p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Brain size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Gemma 4 Personalized Action Plan</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Based on your academic pressure points</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <ListChecks size={16} /> Priority Tasks for Today
                    </h4>
                    <div className="space-y-4">
                      {loadData.priorityContext.hasExamSoon && (
                        <div className="flex gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10">
                          <div className="size-6 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">1</div>
                          <p className="text-sm text-white/80">Focus ONLY on tomorrow's exam topics. Use active recall for the next 2 hours.</p>
                        </div>
                      )}
                      {loadData.priorityContext.manyPending && (
                        <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                          <div className="size-6 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">{loadData.priorityContext.hasExamSoon ? 2 : 1}</div>
                          <p className="text-sm text-white/80">Break down your 5+ pending assignments. Finish just ONE small task to break the cycle.</p>
                        </div>
                      )}
                      {loadData.priorityContext.attendanceRisk && (
                        <div className="flex gap-4 p-4 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
                          <div className="size-6 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">!</div>
                          <p className="text-sm text-white/80">Attend all sessions tomorrow. Your attendance is in the danger zone.</p>
                        </div>
                      )}
                      {!loadData.priorityContext.hasExamSoon && !loadData.priorityContext.manyPending && (
                        <div className="flex gap-4 p-4 rounded-2xl bg-green-500/5 border border-green-500/10">
                          <div className="size-6 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">✓</div>
                          <p className="text-sm text-white/80">Maintain your current routine. Review current topics for 30 mins to stay safe.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Target size={14} /> AI Recommendation
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed italic">
                        "Your procrastination loop (Q7) is feeding your academic helplessness (Q4). Set a timer for just 10 minutes of study—it's the only way to silence the anxiety."
                      </p>
                    </div>
                    {loadData.isCrisis && (
                      <div className="p-6 rounded-2xl bg-red-600/10 border border-red-600/20 animate-pulse">
                        <div className="flex items-center gap-2 text-red-500 mb-3">
                          <AlertCircle size={18} />
                          <span className="text-xs font-bold uppercase tracking-widest">Emergency Alert</span>
                        </div>
                        <p className="text-xs text-white/60 mb-4">You're in academic crisis mode. Reach out to a senior or counselor immediately.</p>
                        <div className="text-sm font-mono text-white">iCall: 022-25521111</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicLoadTracker;
