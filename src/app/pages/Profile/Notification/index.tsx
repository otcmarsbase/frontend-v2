import { FC, useEffect } from 'react';

import { useAuth } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Heading } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Empty, Pagination, usePagination, List } from '@shared/ui-kit';

const Notification: FC = () => {
  const router = useRouter();
  const { isAuthorized } = useAuth();
  const notifications = { items: [], total: 0 };
  const { skip, limit, ...paginationProps } = usePagination();

  useEffect(() => {
    if (!isAuthorized) router.navigateComponent(MBPages.Marketplace.Home, {}, {});
  }, [isAuthorized, router]);

  if (!isAuthorized) return;

  return (
    <>
      <Heading fontSize="xl" mb="5">
        Notifications
      </Heading>
      <List
        width="full"
        items={notifications.items}
        itemKey={(item) => item.id}
        isLoading={false}
        emptyText={<Empty title="Sorry, no notification" description="You have 0 notifications so far" />}
        itemRender={(item) => <></>}
        footer={notifications?.total > 0 && <Pagination {...paginationProps} total={notifications.total} />}
      />
    </>
  );
};

Notification.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Notification;
