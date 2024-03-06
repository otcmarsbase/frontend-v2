import { FC } from 'react';

import { ProfileLayout } from '@app/layouts';
import { Heading } from '@chakra-ui/react';
import { Empty, Pagination, usePagination, List } from '@shared/ui-kit';

const Notification: FC = () => {
  const notifications = { items: [], total: 0 };
  const { skip, limit, ...paginationProps } = usePagination();

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
