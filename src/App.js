import './App.css';
import List from './components/List';
import Details from './components/Details';
import { useState, useEffect } from 'react';


function App() {
  const [info, setInfo] = useState({id: null});
  const [data, setData] = useState({id: null});

  function handleProfile(id) {
    setInfo({id});
  }

  useEffect(() => {

    if (info.id) {
      fetch(`${process.env.REACT_APP_INITIAL_URL}${info.id.id}.json`, {mode: 'cors'})
      .then(response => {
        if(response.ok) {
          response.json()
          .then(d => {
            setData({id: d});
          })
        }
      })
      .then(setInfo({id: 0}))
      .catch(err => {
        console.error(err);
      })

      if((data.id !== null) && (data.id.id !== info.id.id)) {
        setData({id: null})
      }

    }

  }, [info.id, data]);

  return (
    <div className='content'>
      <List handleProfile={handleProfile}/>
      {data.id !== null ? <Details data={data.id}/> : null }
    </div>
  )
}

export default App;