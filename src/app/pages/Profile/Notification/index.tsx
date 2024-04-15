import { FC, useEffect } from 'react';

import { useAuth, useRpcSchemaQuery } from '@app/components';
import { ProfileLayout } from '@app/layouts';
import { MBPages } from '@app/pages';
import { Heading } from '@chakra-ui/react';
import { useRouter } from '@packages/router5-react-auto';
import { Empty, Pagination, usePagination, List } from '@shared/ui-kit';

import { NotificationItem } from './_atoms/NotificationItem';

const Notification: FC = () => {
  const router = useRouter();
  const { isAuthorized } = useAuth();
  const { skip, limit, ...paginationProps } = usePagination();

  const { data: notifications, isLoading } = useRpcSchemaQuery('notification.list', {
    sort: { isReaded: 'ASC', createdAt: 'DESC' },
    page: { skip, limit },
    filter: {},
  });

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
        items={notifications?.items}
        itemKey={(item, index) => `${index}${item.notificationId}`}
        isLoading={isLoading}
        emptyText={<Empty title="Sorry, no notification" description="You have 0 notifications so far" />}
        itemRender={(item) => <NotificationItem notification={item} />}
        footer={notifications?.total > 0 && <Pagination {...paginationProps} total={notifications.total} />}
      />
    </>
  );
};

Notification.getLayout = ({ children }) => <ProfileLayout>{children}</ProfileLayout>;

export default Notification;
