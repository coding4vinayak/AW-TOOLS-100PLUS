import React from 'react';

interface RateLimitAlertProps {
  isLimited: boolean;
  limit: number;
  toolName: string;
}

const RateLimitAlert: React.FC<RateLimitAlertProps> = ({ isLimited, limit, toolName }) => {
  if (!isLimited) return null;

  return (
    <div className="alert alert-warning animate__animated animate__shakeX" role="alert">
      <h5 className="alert-heading">⏱️ Daily Limit Reached</h5>
      <p className="mb-0">
        You have reached the free daily limit of {limit} uses for the <strong>{toolName}</strong> tool to prevent automated abuse. 
        Please try again tomorrow, or explore our other tools!
      </p>
    </div>
  );
};

export default RateLimitAlert;
