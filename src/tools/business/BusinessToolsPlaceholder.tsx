import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

// This is a placeholder for the 11th business tool
// Continuing with the pattern established

const BusinessToolsPlaceholder: React.FC<{ toolName: string; icon: string; description: string }> = ({ toolName, icon, description }) => {
  const [output, setOutput] = useState('');

  return (
    <ToolWrapper
      title={toolName}
      description={description}
      icon={icon}
      outputValue={output || 'Coming soon...'}
      outputLabel="Output"
      showCopy={false}
      showDownload={false}
    >
      <div className="text-center py-5">
        <p className="text-muted">This tool is under development. Check back soon!</p>
      </div>
      <div className="mt-4">
        <LeadCaptureForm toolName={toolName} compact />
      </div>
    </ToolWrapper>
  );
};

export default BusinessToolsPlaceholder;
