import React from 'react';
import CompanyDetailsForm from '@/components/settings/CompanyDetailsForm';
import CrmSettings from '@/components/settings/CrmSettings';
import ProjectSettings from '@/components/settings/ProjectSettings';
import StaffSettings from '@/components/settings/StaffSettings';

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <CompanyDetailsForm />
      <CrmSettings />
      <ProjectSettings />
      <StaffSettings />
    </div>
  );
};

export default SettingsPage;
