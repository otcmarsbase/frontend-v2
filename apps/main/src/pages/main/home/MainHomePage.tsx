import { observer } from 'mobx-react-lite';
import { Header } from '@/components';
import { RoutedComponent } from '@/router';
import {Web3ModalComponent} from "@/widgets/web3modal/ui/Web3Modal";

export const MainHomePage = observer(() => {
  return (
    <div style={{ background: 'yellow' }}>
      <Header
        menuItems={[
          { label: 'OTC', href: { url: '#' } },
          { label: 'Create offer', href: { url: '#' } },
        ]}
        rightContent={<Web3ModalComponent/>}
      />
    </div>
  );
}) as RoutedComponent;

MainHomePage.routeName = 'MainHome';
