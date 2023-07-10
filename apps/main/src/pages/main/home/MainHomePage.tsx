import { observer } from 'mobx-react-lite';
import { Header } from '@/components';
import { RoutedComponent } from '@/router';

export const MainHomePage = observer(() => {
  return (
    <div style={{ background: 'yellow' }}>
      <Header
        menuItems={[
          { label: 'OTC', href: { url: '#' } },
          { label: 'Create offer', href: { url: '#' } },
        ]}
        rightContent={<></>}
      />
    </div>
  );
}) as RoutedComponent;

MainHomePage.routeName = 'MainHome';
