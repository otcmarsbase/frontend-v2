import { RoutedComponent } from '@/router';
import { observer } from 'mobx-react-lite';

export const MainHomePage = observer(() => {
  return <div style={{ background: 'yellow' }}>MainHomePage</div>;
}) as RoutedComponent;

MainHomePage.routeName = 'MainHome';
