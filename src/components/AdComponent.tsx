
import React, { useState } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { toast } from '@/components/ui/use-toast';

interface AdComponentProps {
  onClose: () => void;
}

const AdComponent: React.FC<AdComponentProps> = ({ onClose }) => {
  const [adIndex] = useState(() => Math.floor(Math.random() * 5));
  
  const adTemplates = [
    {
      title: "LIMITED TIME OFFER!",
      description: "Buy now and get 50% off on premium productivity tools!",
      color: "bg-momento-yellow"
    },
    {
      title: "HOT SINGLES IN YOUR AREA",
      description: "Want to meet people who are also procrastinating?",
      color: "bg-momento-pink"
    },
    {
      title: "QUIZ: What type of procrastinator are you?",
      description: "Take our 30-minute survey to find out now!",
      color: "bg-momento-blue"
    },
    {
      title: "DOCTORS HATE THIS ONE TRICK",
      description: "Click here to learn how to focus without actually trying!",
      color: "bg-momento-green"
    },
    {
      title: "YOUR COMPUTER MAY BE AT RISK",
      description: "Download our totally legitimate scanner now!",
      color: "bg-momento-red"
    }
  ];

  const currentAd = adTemplates[adIndex];

  const handleCloseAd = () => {
    // Spawn confetti when closing an ad
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.5, x: 0.5 }
    });
    
    toast({
      title: "Mom Says:",
      description: "You didn't even click the ad! How will I pay for your education?",
      duration: 3000,
    });
    
    onClose();
  };

  const handleAdClick = () => {
    toast({
      title: "Mom Says:",
      description: "I knew you couldn't resist! Back to work now.",
      duration: 3000,
    });
    
    // More distracting confetti
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.5, x: 0.5 },
      colors: ['#FF61D8', '#FFD600', '#00FF9E']
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-popup">
      <div className={`neubrutalism-box ${currentAd.color} p-6 max-w-md w-full`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-black uppercase">{currentAd.title}</h3>
          <button onClick={handleCloseAd} className="bg-white border-4 border-black p-2">
            <X size={20} />
          </button>
        </div>
        
        <div className="neubrutalism-box bg-white p-4 mb-6">
          <div className="h-40 flex items-center justify-center border-2 border-black">
            <p className="font-bold text-lg text-center px-4">
              {currentAd.description}
            </p>
          </div>
        </div>
        
        <button 
          onClick={handleAdClick} 
          className="neubrutalism-button w-full bg-white"
        >
          Click Here Now!
        </button>
      </div>
    </div>
  );
};

export default AdComponent;
