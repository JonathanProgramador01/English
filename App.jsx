import React, { useState } from 'react';
import { ChevronRight, RefreshCcw, Heart, Flame, Leaf, Coffee, MessageSquare, BookOpen, CheckCircle, Award, UserCircle } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('quiz');
  
  // --- STATE PARA EL QUIZ ---
  const [step, setStep] = useState('home'); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  // --- DATA DEL QUIZ ---
  const questions = [
    { id: 1, text: "It’s Friday night, you:", options: [{ label: "Plan a chill hangout but make it stylish", value: "A" }, { label: "Start something spontaneous and just go with it", value: "B" }, { label: "Prefer something romantic or aesthetic", value: "C" }, { label: "Want a full-on party, no drama", value: "D" }] },
    { id: 2, text: "Your social media vibe is:", options: [{ label: "Mysterious but classy", value: "A" }, { label: "Natural and fun", value: "B" }, { label: "Cute and creative", value: "C" }, { label: "Straightforward and unfiltered", value: "D" }] },
    { id: 3, text: "In your friend group you are:", options: [{ label: "The advisor", value: "A" }, { label: "The easygoing one", value: "B" }, { label: "The sweetest one", value: "C" }, { label: "The brutally honest one", value: "D" }] },
    { id: 4, text: "Your ideal playlist includes:", options: [{ label: "Emotional pop or dramatic vibes", value: "A" }, { label: "Chill indie or alternative", value: "B" }, { label: "Romantic pop", value: "C" }, { label: "Reggaeton or hype music", value: "D" }] },
    { id: 5, text: "When you like someone, you:", options: [{ label: "Take it slow but steady", value: "A" }, { label: "Play a little hard to get", value: "B" }, { label: "Catch feelings fast", value: "C" }, { label: "Go straight to the point", value: "D" }] },
    { id: 6, text: "Your biggest personality trait is:", options: [{ label: "Passionate", value: "A" }, { label: "Go-with-the-flow", value: "B" }, { label: "Loving", value: "C" }, { label: "Bold", value: "D" }] }
  ];

  const resultsData = {
    A: { title: "Mole Tamal", description: "You’re intense, deep, and full of character. Not everyone gets you, but those who do stick around. You’re traditional with power.", color: "bg-amber-900", textColor: "text-amber-100", icon: <Coffee className="w-12 h-12" /> },
    B: { title: "Green Tamal", description: "Relaxed, adaptable, and good vibes only. You know how to go with the flow. You’re classic but never boring.", color: "bg-emerald-600", textColor: "text-emerald-50", icon: <Leaf className="w-12 h-12" /> },
    C: { title: "Sweet Tamal", description: "You’re pure sweetness (maybe a little dramatic). You love connecting and making others feel special. Main-character energy for sure.", color: "bg-pink-400", textColor: "text-pink-50", icon: <Heart className="w-12 h-12" /> },
    D: { title: "Rajas Tamal", description: "Authentic, direct, and a little spicy. You don’t do basic. You’ve got that unforgettable spark.", color: "bg-orange-500", textColor: "text-orange-50", icon: <Flame className="w-12 h-12" /> }
  };

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const counts = newAnswers.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
      setResult(resultsData[winner]);
      setStep('result');
    }
  };

  // --- DATA DE REPORTE DE ENTREVISTA SIN EXPLICACIONES TÉCNICAS ---
  const interviewReport = [
    { 
      question: "How long have you been in this area?", 
      erickSaid: "I moved to this city four years ago, and I have been working in this specific administrative area for over three years, so I know the local market perfectly.",
      reported: "Erick told us that he had moved to that city four years before, and he added that he had been working in that specific administrative area for over three years."
    },
    { 
      question: "Have you managed schedules in other companies?", 
      erickSaid: "Yes, in my previous job at a logistics firm, I managed complex schedules for a team of 30 employees while ensuring there were no overlaps.",
      reported: "He said that in his previous job he had managed complex schedules for a team of 30 employees, ensuring that there were no overlaps."
    },
    { 
      question: "What is your level of English?", 
      erickSaid: "I consider my English level to be intermediate-advanced because I usually communicate with international clients, though I am still studying to improve my vocabulary.",
      reported: "He explained that he considered his English level to be intermediate-advanced and mentioned that he was still studying to improve his vocabulary."
    },
    { 
      question: "Do you wait for indications or do you take decisions?", 
      erickSaid: "I always value my boss's instructions, but if there is an emergency, I don't wait for indications; I take my own decisions to keep the workflow moving.",
      reported: "Erick stated that he always valued instructions, but he added that if there was an emergency, he didn't wait; he took his own decisions."
    },
    { 
      question: "What does honesty mean to you?", 
      erickSaid: "To me, honesty is the foundation of every professional relationship, so I always tell the truth about the budget even if the numbers are not looking good.",
      reported: "He explained that honesty was the foundation of every relationship and that he always told the truth about the budget even if the numbers were not looking good."
    },
    { 
      question: "How do you manage office supplies?", 
      erickSaid: "I use a customized digital system to track every single item in the office, and I personally make sure that we never run out of materials during busy months.",
      reported: "He mentioned that he used a customized digital system to track every item and that he personally made sure they never ran out of materials."
    }
  ];

  const [revealIndex, setRevealIndex] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col items-center py-10 px-4">
      
      {/* NAVEGACIÓN DE PESTAÑAS */}
      <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-200 mb-8 w-full max-w-md">
        <button 
          onClick={() => setActiveTab('quiz')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === 'quiz' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <Award size={18} /> Tamal Quiz
        </button>
        <button 
          onClick={() => setActiveTab('english')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all ${activeTab === 'english' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <MessageSquare size={18} /> Interview Report
        </button>
      </div>

      {/* CONTENIDO: QUIZ DE TAMALES */}
      {activeTab === 'quiz' && (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500" />
          
          {step === 'home' && (
            <div className="p-8 text-center space-y-6">
              <div className="bg-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl">🫔</div>
              <h1 className="text-3xl font-black text-orange-600 tracking-tight leading-none uppercase">Which Tamal are you?</h1>
              <p className="text-gray-500">The most accurate personality test ever.</p>
              <button onClick={() => setStep('quiz')} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2">
                Start Quiz <ChevronRight size={20} />
              </button>
            </div>
          )}

          {step === 'quiz' && (
            <div className="p-8 space-y-6">
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full transition-all duration-300" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 leading-tight h-14">{questions[currentQuestion].text}</h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button key={i} onClick={() => handleAnswer(opt.value)} className="w-full text-left p-4 rounded-xl border-2 border-gray-50 hover:border-orange-200 hover:bg-orange-50 transition-all font-medium text-gray-700">
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'result' && result && (
            <div className="animate-in fade-in duration-700">
              <div className={`${result.color} p-10 text-center text-white`}>
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">{result.icon}</div>
                <h2 className="text-4xl font-black mb-1">{result.title}</h2>
                <p className="text-xs uppercase tracking-widest opacity-80">Your Soul Food</p>
              </div>
              <div className="p-8 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">{result.description}</p>
                <button onClick={() => {setStep('home'); setCurrentQuestion(0); setAnswers([]);}} className="w-full border-2 border-gray-100 py-4 rounded-2xl text-gray-400 font-bold hover:bg-gray-50 flex items-center justify-center gap-2">
                  <RefreshCcw size={18} /> Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CONTENIDO: REPORTE DE ENTREVISTA DE ERICK */}
      {activeTab === 'english' && (
        <div className="w-full max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-indigo-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <UserCircle size={40} />
                </div>
                <div>
                  <h2 className="text-2xl font-black">Erick's Professional Report</h2>
                  <p className="text-indigo-200 text-sm">Detailed Interview Analysis</p>
                </div>
              </div>
              <p className="bg-indigo-800/50 p-4 rounded-xl text-sm italic border border-indigo-500/30 leading-relaxed">
                "We had a long conversation with Erick. He provided detailed descriptions of his background and values. Below is the report of his answers transformed into reported speech."
              </p>
            </div>

            <div className="p-6 space-y-6">
              {interviewReport.map((item, idx) => (
                <div key={idx} className="group border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Question:</span>
                      <p className="text-gray-700 font-bold italic">"{item.question}"</p>
                    </div>
                    <button 
                      onClick={() => setRevealIndex(revealIndex === idx ? null : idx)}
                      className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${revealIndex === idx ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-50 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 shadow-sm'}`}
                    >
                      {revealIndex === idx ? 'HIDE DETAILS' : 'VIEW REPORT'}
                    </button>
                  </div>

                  {revealIndex === idx && (
                    <div className="space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 relative">
                        <span className="absolute -top-2 left-4 bg-slate-200 text-slate-600 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Direct Answer (Erick's words)</span>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2 italic">"{item.erickSaid}"</p>
                      </div>
                      
                      <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 relative">
                        <span className="absolute -top-2 left-4 bg-indigo-500 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Reported Speech Narrative</span>
                        <p className="text-sm text-indigo-900 font-bold leading-relaxed mt-2">{item.reported}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* EVALUACIÓN FINAL */}
          <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white/20 p-5 rounded-2xl shrink-0">
                <CheckCircle size={48} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black">Hiring Decision</h3>
                <p className="text-emerald-50 leading-relaxed text-sm md:text-base">
                  Erick's interview was very impressive. When we asked about his history, he <strong>told us</strong> that he <strong>had been</strong> in the area for three years and that he <strong>had managed</strong> large teams before. He also <strong>explained</strong> that he <strong>considered</strong> honesty to be the foundation of his work. Because of his detailed answers and professional attitude, we have officially offered him the position.
                </p>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 bg-white/10 w-40 h-40 rounded-full blur-3xl" />
          </div>
        </div>
      )}

      <footer className="mt-12 text-gray-400 text-xs font-medium uppercase tracking-[0.2em] text-center">
        Interview Simulation &bull; Reporting Exercises
      </footer>
    </div>
  );
};

export default App;
