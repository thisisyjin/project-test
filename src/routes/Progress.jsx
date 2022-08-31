import { useParams } from 'react-router-dom';
import InputText from '../components/search/InputText';

const Progress = () => {
  const { step } = useParams();
  return (
    <>
      <InputText />
    </>
  );
};
export default Progress;
