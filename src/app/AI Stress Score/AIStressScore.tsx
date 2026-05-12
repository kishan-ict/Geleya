import React, { useState, useEffect } from 'react';
import { Play, ChevronRight, ChevronLeft, RotateCcw, Brain, AlertTriangle, CheckCircle, Info, Heart } from 'lucide-react';
import './AIStressScore.css';

const QUESTIONS = [
  {
    id: 1,
    question: "How was your sleep last night?",
    why: "Sleep is the #1 physiological stress indicator. Sleep deprivation directly amplifies cortisol.",
    options: [
      { text: "I slept well and feel rested", score: 0 },
      { text: "I slept but woke up feeling tired", score: 1 },
      { text: "I barely slept — under 4 hours", score: 2 },
      { text: "I couldn't sleep at all / pulled an all-nighter", score: 3 }
    ]
  },
  {
    id: 2,
    question: "How is your current academic workload feeling?",
    why: "Academic pressure is the PRIMARY stressor for Indian college students — targets cognitive overload.",
    options: [
      { text: "It's manageable — I'm on top of things", score: 0 },
      { text: "It's a lot but I'm handling it", score: 1 },
      { text: "I'm behind and it's overwhelming me", score: 2 },
      { text: "I have exams/submissions due and I'm completely lost", score: 3 }
    ]
  },
  {
    id: 3,
    question: "Have you noticed any of these in the last 24 hours?",
    why: "Physical symptoms are the body's stress alarm system (fight-or-flight mode).",
    options: [
      { text: "None — I feel physically fine", score: 0 },
      { text: "Mild headache or tired eyes", score: 1 },
      { text: "Tension in shoulders, poor appetite, or restlessness", score: 2 },
      { text: "Chest tightness, nausea, heart racing, or unable to sit still", score: 3 }
    ]
  },
  {
    id: 4,
    question: "Which of these best describes how you've felt TODAY?",
    why: "This is the EMOTIONAL LAYER. Directly maps to DSM-5 anxiety/depression markers.",
    options: [
      { text: "Calm, motivated, or generally okay", score: 0 },
      { text: "A bit low, distracted, or flat", score: 1 },
      { text: "Anxious, irritable, or on edge", score: 2 },
      { text: "Hopeless, panicked, or emotionally numb", score: 3 }
    ]
  },
  {
    id: 5,
    question: "How connected do you feel to people around you right now?",
    why: "Social isolation is a MULTIPLIER of stress — especially away from home.",
    options: [
      { text: "I feel supported — talked to friends/family today", score: 0 },
      { text: "A little isolated but it's okay", score: 1 },
      { text: "I feel alone even when around people", score: 2 },
      { text: "I've been avoiding everyone and don't want to talk", score: 3 }
    ]
  },
  {
    id: 6,
    question: "How is your ability to focus or stop negative thoughts?",
    why: "Cognitive impairment is both a symptom and cause. Rumination predicts chronic stress.",
    options: [
      { text: "I can focus fine — mind is clear", score: 0 },
      { text: "Slightly distracted but managing", score: 1 },
      { text: "My mind keeps wandering — can't concentrate", score: 2 },
      { text: "I'm stuck in a loop of negative/anxious thoughts", score: 3 }
    ]
  },
  {
    id: 7,
    question: "When something stressful happened today, how did you respond?",
    why: "Coping ability = resilience level. The final filter in the score.",
    options: [
      { text: "I handled it — took a breath and moved forward", score: 0 },
      { text: "It bothered me but I managed eventually", score: 1 },
      { text: "I shut down, procrastinated, or distracted myself", score: 2 },
      { text: "I completely broke down or felt like giving up", score: 3 }
    ]
  }
];

const AIStressScore = () => {
  const [step, setStep] = useState<'hero' | 'quiz' | 'analyzing' | 'result'>('hero');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finalScoreData, setFinalScoreData] = useState<{
    score: number;
    level: string;
    message: string;
    color: string;
    isCritical: boolean;
  } | null>(null);

  const startQuiz = () => {
    setStep('quiz');
    setCurrentQ(0);
    setAnswers([]);
  };

  const handleShare = async () => {
    if (!finalScoreData) return;
    
    const shareText = `My Geleya AI Stress Score is ${finalScoreData.score}/10 (${finalScoreData.level}). Check yours at geleya.pages.dev!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Geleya AI Stress Analysis',
          text: shareText,
          url: 'https://geleya.pages.dev',
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
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
    
    // Simulate AI Analysis delay
    setTimeout(() => {
      const rawScore = finalAnswers.reduce((a, b) => a + b, 0);
      const stressScore = parseFloat(((rawScore / 21) * 10).toFixed(1));
      
      // Override Rule: Q4=Option D (index 3) or Q7=Option D (index 3)
      // QUESTIONS[3] is Q4, QUESTIONS[6] is Q7
      const q4Score = finalAnswers[3];
      const q7Score = finalAnswers[6];
      const isOverride = q4Score === 3 || q7Score === 3;

      let level = "";
      let message = "";
      let color = "";
      let isCritical = false;

      if (isOverride || stressScore >= 8.0) {
        level = "Critical Stress ⚠️";
        message = "Please reach out — you don't have to face this alone.";
        color = "text-red-600";
        isCritical = true;
      } else if (stressScore >= 6.0) {
        level = "High Stress 🔴";
        message = "You're under serious pressure. Take action.";
        color = "text-red-500";
      } else if (stressScore >= 3.1) {
        level = "Moderate Stress 🟡";
        message = "Noticeable stress — let's manage it now.";
        color = "text-yellow-500";
      } else {
        level = "Low Stress 🟢";
        message = "You're doing well! Keep this energy.";
        color = "text-green-500";
      }

      setFinalScoreData({ score: isOverride && stressScore < 8 ? 8.5 : stressScore, level, message, color, isCritical });
      setStep('result');
    }, 2500);
  };
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-inter text-white">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" type="video/mp4" />
      </video>

      {/* BOTTOM BLUR OVERLAY */}
      <div className={`fixed inset-0 z-1 pointer-events-none backdrop-blur-xl blur-mask transition-opacity duration-700 ${step === 'quiz' ? 'opacity-100' : 'opacity-100'}`} />
      
      {/* FULL SCREEN BLUR DURING QUIZ (Cluster Clear) */}
      <div className={`fixed inset-0 z-1 pointer-events-none backdrop-blur-md bg-black/40 transition-opacity duration-700 ${step === 'quiz' ? 'opacity-100' : 'opacity-0'}`} />

      {/* HERO CONTENT */}
      {step === 'hero' && (
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-4 sm:px-6 md:px-12 pb-8 md:pb-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tighter mb-4 md:mb-6 animate-blur-fade-up" style={{ animationDelay: '400ms' }}>
              Step Through.<br />Work Smarter.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl animate-blur-fade-up" style={{ animationDelay: '500ms' }}>
              A voyage through forgotten realms, where past and future intertwine.
            </p>
            <button 
              onClick={startQuiz}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium transition-all hover:bg-gray-200 animate-blur-fade-up" 
              style={{ animationDelay: '600ms' }}
            >
              <Play size={20} fill="currentColor" />
              <span>Let's Start</span>
            </button>
          </div>
        </div>
      )}

      {/* QUIZ SECTION */}
      {step === 'quiz' && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-2xl animate-blur-fade-up">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2 block">Question {currentQ + 1} of 7</span>
                <h2 className="text-2xl sm:text-4xl font-normal tracking-tight">{QUESTIONS[currentQ].question}</h2>
              </div>
              <div className="text-gray-500 text-sm font-mono">
                {Math.round(((currentQ) / 7) * 100)}%
              </div>
            </div>

            <div className="space-y-4">
              {QUESTIONS[currentQ].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-6 rounded-2xl liquid-glass hover:bg-white/5 transition-all group flex justify-between items-center"
                >
                  <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{option.text}</span>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start">
              <Info size={20} className="text-primary shrink-0 mt-1" />
              <p className="text-sm text-gray-400 italic">
                {QUESTIONS[currentQ].why}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ANALYZING STATE */}
      {step === 'analyzing' && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="size-24 rounded-full border-4 border-white/10 border-t-white animate-spin mb-8" />
          <h2 className="text-3xl font-normal tracking-tight mb-4 animate-pulse">Analyzing Responses...</h2>
          <p className="text-gray-400 max-w-md">Our AI is processing your physiological and emotional indicators to calculate your precise stress score.</p>
        </div>
      )}

      {/* RESULT SECTION */}
      {step === 'result' && finalScoreData && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-y-auto">
          <div className="w-full max-w-4xl animate-blur-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                  <Brain size={18} className="text-primary" />
                  <span className="text-xs font-medium tracking-widest uppercase">Assessment Complete</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tighter mb-4">Your Stress<br />Analysis</h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md">{finalScoreData.message}</p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button 
                    onClick={startQuiz}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all"
                  >
                    <RotateCcw size={18} />
                    Retake Test
                  </button>
                  <button 
                    onClick={handleShare}
                    className="liquid-glass px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-all"
                  >
                    Share Results
                  </button>
                </div>
              </div>

              <div className="liquid-glass p-8 sm:p-12 rounded-[2.5rem] text-center relative overflow-hidden">
                {/* Score Circle */}
                <div className="relative size-48 sm:size-64 mx-auto mb-8">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="2" className="text-white/10" 
                    />
                    <circle 
                      cx="50" cy="50" r="45" 
                      fill="none" stroke="currentColor" 
                      strokeWidth="6" 
                      strokeDasharray="282.7"
                      strokeDashoffset={282.7 - (282.7 * finalScoreData.score / 10)}
                      className={`${finalScoreData.color} transition-all duration-1000 ease-out`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-6xl sm:text-8xl font-normal tracking-tighter">{finalScoreData.score}</span>
                    <span className="text-sm text-gray-500 uppercase tracking-widest">Score / 10</span>
                  </div>
                </div>

                <div className={`text-2xl font-medium mb-2 ${finalScoreData.color}`}>
                  {finalScoreData.level}
                </div>
              </div>
            </div>

            {/* AI INSIGHTS CARD */}
            <div className="mt-12 p-8 rounded-3xl liquid-glass border border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-medium">Gemma 4 Personalized Analysis</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">I noticed significant tension in your physical responses. Your body is holding onto academic pressure more than you realize.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle size={20} className="text-green-500 shrink-0 mt-1" />
                    <p className="text-gray-300">Your social connection score suggests you're isolating. Reaching out to just one person today could lower your score by 15%.</p>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <p className="text-sm text-gray-400 leading-relaxed italic">
                    "Remember, you're navigating a demanding phase. These scores don't define your worth, they simply map your current weather. Let's find some clear skies together."
                  </p>
                </div>
              </div>
            </div>

            {/* CRITICAL HELPLINES */}
            {finalScoreData.isCritical && (
              <div className="mt-8 p-8 rounded-3xl bg-red-500/10 border border-red-500/20 animate-pulse">
                <div className="flex items-center gap-3 mb-4 text-red-500">
                  <AlertTriangle size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-tight">Emergency Support Required</h3>
                </div>
                <p className="text-gray-300 mb-6">Your responses indicate you're in a critical stress state. Please reach out to these 24/7 student helplines in India:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-red-500/30">
                    <div className="text-xs text-gray-500 uppercase mb-1">Vandrevala Foundation</div>
                    <div className="text-xl font-mono text-white">9999 666 555</div>
                  </div>
                  <div className="p-4 rounded-xl bg-black/40 border border-red-500/30">
                    <div className="text-xs text-gray-500 uppercase mb-1">iCall (TISS)</div>
                    <div className="text-xl font-mono text-white">022-25521111</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIStressScore;
