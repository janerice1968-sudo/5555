/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);

  const nextStep = (next: number) => {
    setStep(next);
  };

  const startLoading = () => {
    setStep(4);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsFinal(true);
      setStep(5);
    }, 1500);
  };

  const getProgress = () => {
    if (step === 1) return 25;
    if (step === 2) return 50;
    if (step === 3) return 75;
    if (step === 4) return 90;
    if (step === 5) return 100;
    return 25;
  };

  return (
    <>
      <div className="card-container">
        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#0b0c10] rounded-full mb-6 overflow-hidden">
          <motion.div 
            className="h-full bg-[#66fcf1]"
            initial={{ width: "25%" }}
            animate={{ 
              width: `${getProgress()}%`,
              backgroundColor: isFinal ? "#ff0055" : "#66fcf1"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold text-white min-h-[52px]">
                步骤 1: 您正在寻找什么?
              </h2>
              <div className="space-y-3">
                <button onClick={() => nextStep(2)} className="option-btn">寻找女性</button>
                <button onClick={() => nextStep(2)} className="option-btn">寻找男性</button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold text-white min-h-[52px]">
                步骤 2: 您是否已满 18 周岁?
              </h2>
              <div className="space-y-3">
                <button onClick={() => nextStep(3)} className="option-btn">是的，我已满 18 岁</button>
                <button onClick={() => nextStep(3)} className="option-btn">否</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold text-white min-h-[52px]">
                步骤 3: 您同意对其他用户的身份保密吗?
              </h2>
              <button onClick={startLoading} className="option-btn">我同意</button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold text-white min-h-[52px]">
                正在分析您的偏好并搜索附近用户...
              </h2>
              <div className="flex justify-center py-4">
                <Loader2 className="w-9 h-9 text-[#66fcf1] animate-spin" />
              </div>
              <p className="text-[#66fcf1] font-medium">已找到 14 个匹配项</p>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-5"
            >
              <h2 className="text-xl font-bold text-[#66fcf1] min-h-[52px]">
                匹配成功!
              </h2>
              <p className="text-sm leading-relaxed text-gray-400 mb-1">
                请点击下方按钮验证您的身份，并查看附近的匹配对象。
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <a 
        id="enterBtn"
        href="https://t.crdtg2.com/409098/9953/37712?aff_sub5=SF_006OG000004lmDN"
        className="btn"
      >
        验证身份并进入
      </a>

      <div className="disclaimer mt-4 text-[11px] text-white/30 max-w-[380px] text-center relative z-10">
        This website contains adult material. By clicking 'Enter', you verify that you are of legal age and consent to viewing such content.
      </div>
    </>
  );
}

