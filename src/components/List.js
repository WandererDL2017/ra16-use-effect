import { useEffect, useState } from "react";

function List({handleProfile}) {
  const [names, setNames] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_INITIAL_URL}users.json`, {mode: 'cors'})
    .then(response => {
      if (response.ok) response.json()
      .then(data => setNames(data))
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  return (
    <>
     <ul className="list">
        {names.map(o => 
        <li key={o.id} className="list-item" onClick={() => handleProfile(o)}> 
          {o.name}
        </li>)}
      </ul>
    </>
  )
}

export default List;