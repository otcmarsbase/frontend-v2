import Layouts from '@app/layouts';

const List: React.FC<{ prop: string }> = ({ prop }) => {
  return <div>List {prop}</div>;
};

List.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default List;
