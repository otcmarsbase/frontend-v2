import Layouts from '@app/layouts';

const Create: React.FC<{ prop: string }> = ({ prop }) => {
  return <div>List {prop}</div>;
};

Create.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default Create;
