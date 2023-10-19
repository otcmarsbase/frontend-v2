import { SubmitHandler } from 'react-hook-form';

import { LotCreateModel, LotWizard } from '@app/components';
import { UILayout } from '@app/layouts';
import { Center } from '@chakra-ui/react';

const View: React.FC<{}> = () => {
  const onSubmit: SubmitHandler<LotCreateModel> = (data) => {
    console.log(data);
  };

  return <LotWizard onSubmit={onSubmit} />;
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
