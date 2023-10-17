import { LotWizard } from '@app/components';
import { UILayout } from '@app/layouts';
import { Center } from '@chakra-ui/react';

const View: React.FC<{}> = () => {
  return (
    <LotWizard
      defaultValues={{
        resource: 'lot',
        type: 'SAFE',
        direction: 'BUY',
      }}
    />
  );
};

View.getLayout = ({ children }) => (
  <UILayout.AppLayout containerSize="md">
    <Center>{children}</Center>
  </UILayout.AppLayout>
);

export default View;
