import { PageWrapper } from 'components/PageWrapper';
import React from 'react';
import { useAuth } from 'utils/authState';

export const TestPage = () => {
  const { user } = useAuth();

  return (
    <PageWrapper title="Costam">
      Hi {user?.firstName}!
    </PageWrapper>
  );
};
