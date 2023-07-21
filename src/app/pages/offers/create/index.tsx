import Layouts from '@app/layouts';

const Create: React.FC = () => {
  return <div>Create</div>;
};

Create.getLayout = ({ children }) => {
  return <Layouts.AppLayout>{children}</Layouts.AppLayout>;
};

export default Create;
