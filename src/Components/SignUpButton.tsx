import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function SignupButton() {
  const [stage, setStage] = useState<'initial' | 'input' | 'success'>('initial');
  const [email, setEmail] = useState('');

  const handleInitialClick = () => {
    setStage('input');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStage('success');
    }
  };

  const handleStartOver = () => {
    setStage('initial');
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {stage === 'initial' && (
          <motion.button
            key="get-started"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInitialClick}
            className="h-12 px-8 text-white bg-gray-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Get Started
          </motion.button>
        )}

        {stage === 'input' && (
          <motion.form
            key="input-form"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
            onSubmit={handleSubmit}
            className="relative w-[400px]"
          >
            <div className="relative flex items-center w-full h-12">
              <Mail className="absolute left-3 text-gray-400 w-5 h-5 z-10" />
              <motion.input
                type="email"
                placeholder="hello@acme.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full pl-10 pr-28 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              />
              <motion.button
                type="submit"
                className="absolute right-1 h-[calc(100%-6px)] px-6 text-white bg-gray-900 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                Sign Up
              </motion.button>
            </div>
          </motion.form>
        )}

        {stage === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                delay: 0.1
              }}
              className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center"
            >
              <Check className="w-8 h-8 text-white" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-600 text-center max-w-sm"
            >
              If you didn't receive welcome email yet, you can try again or use different email address.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex gap-4"
            >
              <button
                onClick={() => setStage('input')}
                className="h-12 px-6 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Change Email
              </button>
              <button
                onClick={handleStartOver}
                className="h-12 px-6 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Start Over
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}