import React, { useEffect, useState } from 'react';
import API from '../API';
import ButtonOverlay from './ButtonOverlay';
import AddButton from './Buttons/AddButton';
import ProjectList from './Project/ProjectList';

//components
interface HomeProps {
  setProjectId: Function;
}

const initialState: any = [];

const Home: React.FC<HomeProps> = ({ setProjectId }) => {
  const [showButtonOverlay, setShowButtonOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(initialState);

  useEffect(() => {
    const fetchProj = async () => {
      const proj: any = await API.fetchProjects();
      setProjects(proj);
    };
    fetchProj();
  }, []);

  return (
    <>
      <h1 className="main-title">All Projects</h1>
      <ProjectList projects={projects} setProjectId={setProjectId} />
      <AddButton callback={() => setShowButtonOverlay(!showButtonOverlay)} />
      <ButtonOverlay
        showOverlay={showButtonOverlay}
        callback={() => setShowButtonOverlay(false)}
      />
    </>
  );
};

export default Home;
