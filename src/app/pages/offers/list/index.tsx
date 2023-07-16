import Layouts from '@app/layouts';

const Create: React.FC = () => {
  return <div>List</div>;
};

Create.getLayout = ({ children }) => {
  return <Layouts.TestLayout>{children}</Layouts.TestLayout>;
};

export default Create;
