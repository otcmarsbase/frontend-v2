import { observer } from 'mobx-react-lite';
import { Header } from '@/components';
import { RoutedComponent } from '@/router';
import {Web3ModalComponent} from "@/widgets/web3modal/ui/Web3Modal";
import {DataPicker} from "@/features/DataPicker";
import {Box} from "@chakra-ui/react";

export const MainHomePage = observer(() => {
  return (
    <Box h='100vh'>
      <Header
        menuItems={[
          { label: 'OTC', href: { url: '#' } },
          { label: 'Create offer', href: { url: '#' } },
        ]}
        rightContent={<Web3ModalComponent/>}
      />
      <Box
        w='100%'
        display='flex'
        justifyContent='center'
        mt='50'
        border='1px'
      ><DataPicker/></Box>
    </Box>
  );
}) as RoutedComponent;

MainHomePage.routeName = 'MainHome';
