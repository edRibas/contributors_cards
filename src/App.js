import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX and Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    }
  ]

  const [contributors, setContributors] = useState([])
  
  const forNewContributorAdded = (contributor) => {
    debugger;
    setContributors([...contributors, contributor])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms teams={teams.map(team => team.name)} toContributorRegistered={forNewContributorAdded}/>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        contributors={contributors.filter(contributor => contributor.team === team.name)}
        />)}
    </div>
  );
}

export default App;