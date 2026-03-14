import { useState, useEffect } from 'react';

const DEFAULT_DAILY_LIMIT = 100;

/**
 * A hook to restrict the number of times a specific tool can be used per day
 * entirely client-side using localStorage.
 */
export const useRateLimit = (toolId: string, customDailyLimit?: number) => {
  const limit = customDailyLimit || DEFAULT_DAILY_LIMIT;
  const storageKey = `abetworks_usage_${toolId}`;
  
  const [usageCount, setUsageCount] = useState<number>(0);
  const [isLimited, setIsLimited] = useState<boolean>(false);

  useEffect(() => {
    checkLimit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLimit = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      const storedData = localStorage.getItem(storageKey);
      
      let data = storedData ? JSON.parse(storedData) : { date: today, count: 0 };
      
      // Reset if it's a new day
      if (data.date !== today) {
        data = { date: today, count: 0 };
        localStorage.setItem(storageKey, JSON.stringify(data));
      }
      
      setUsageCount(data.count);
      setIsLimited(data.count >= limit);
    } catch (e) {
      console.error("Local storage error:", e);
    }
  };

  /**
   * Attempts to increment the usage counter. 
   * Returns true if allowed (under limit), false if blocked (over limit).
   */
  const incrementUsage = (): boolean => {
     try {
        const today = new Date().toISOString().split('T')[0];
        const storedData = localStorage.getItem(storageKey);
        let data = storedData ? JSON.parse(storedData) : { date: today, count: 0 };
        
        if (data.date !== today) {
          data = { date: today, count: 0 };
        }
        
        if (data.count >= limit) {
           setIsLimited(true);
           return false; // Denied
        }
        
        data.count += 1;
        localStorage.setItem(storageKey, JSON.stringify(data));
        setUsageCount(data.count);
        setIsLimited(data.count >= limit);
        return true; // Allowed
     } catch (e) {
        // Failsafe allow if localstorage breaks (e.g. private mode)
        return true; 
     }
  };

  return { usageCount, isLimited, limit, incrementUsage, checkLimit };
};
