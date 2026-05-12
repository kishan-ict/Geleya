import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Brain, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SendMessageButton.css';

interface FeatureChoicePopupProps {
  buttonText?: string;
}

export default function FeatureChoicePopup({ buttonText = "Let's Talk With GELEYA" }: FeatureChoicePopupProps) {
  const [isSent, setIsSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsSent(true);
    // Open the dialog after a short delay to allow the animation to play a bit
    setTimeout(() => {
      setIsOpen(true);
      // Reset isSent after dialog opens so it can be clicked again
      setTimeout(() => setIsSent(false), 1000);
    }, 600);
  };

  const letters = buttonText.split("");
  const sentLetters = "Sent".split("");

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <button 
        className={`send-message-button ${isSent ? 'is-sent' : ''}`}
        onClick={handleButtonClick}
      >
          <div className="outline"></div>
          <div className="state state--default">
            <div className="icon">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ filter: 'url(#shadow)' }}>
                  <path
                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <filter id="shadow">
                    <feDropShadow
                      dx="0"
                      dy="1"
                      stdDeviation="0.6"
                      floodOpacity="0.5"
                    ></feDropShadow>
                  </filter>
                </defs>
              </svg>
            </div>
            <p>
              {letters.map((char, index) => (
                <span key={index} style={{ '--i': index } as React.CSSProperties}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>
          </div>
          <div className="state state--sent">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                strokeWidth="0.5px"
                stroke="black"
              >
                <g style={{ filter: 'url(#shadow)' }}>
                  <path
                    fill="currentColor"
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  ></path>
                </g>
              </svg>
            </div>
            <p>
              {sentLetters.map((char, index) => (
                <span key={index} style={{ '--i': index + 5 } as React.CSSProperties}>
                  {char}
                </span>
              ))}
            </p>
          </div>
        </button>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl z-[101] focus:outline-none">
          <Dialog.Description className="sr-only">
            Select one of the available AI wellness features.
          </Dialog.Description>
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-semibold text-black" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Choose a Feature
            </Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            <button 
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group text-left"
              onClick={() => {
                setIsOpen(false);
                navigate('/ai-stress-score');
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-black text-lg">AI Stress Score</div>
                <div className="text-sm text-[#6F6F6F]">Analyze your stress levels using AI</div>
              </div>
            </button>

            <button 
              className="w-full flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all group text-left"
              onClick={() => {
                setIsOpen(false);
                navigate('/academic-load-tracker');
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-black text-lg">Academic Load Tracker</div>
                <div className="text-sm text-[#6F6F6F]">Manage your study workload effectively</div>
              </div>
            </button>
          </div>

          <div className="mt-8 text-center text-xs text-[#6F6F6F]">
            These features are under active development. Stay tuned!
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
