import { useParams } from 'react-router-dom';

const Progress = () => {
  const { step } = useParams();
  return <h1>{`Progress ${step}`}</h1>;
};
export default Progress;
