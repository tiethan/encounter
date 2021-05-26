import './App.css';
import { useState, useEffect } from 'react';
import MonsterIndex from './MonsterIndex';
import Encounter from './Encounter';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MonsterDetail from './MonsterDetail';
import Grid from '@material-ui/core/Grid';

function App() {
  const apiRoot = 'https://www.dnd5eapi.co';
  const apiMonsters = '/api/monsters/';
  const [monsterIndex, setMonsterIndex] = useState([]);
  const [encounterList, setEncounterList] = useState([]);
  const [monsterCache, setMonsterCache] = useState({});



  useEffect( ()=> {
     async function fetchMonsters() {
      // Make AJAX request here
      try{
      const response = await fetch(apiRoot + apiMonsters)
      const apiData = await response.json();
      setMonsterIndex(apiData.results);

      //console.log(monsterIndex.length)
      }
      catch (err){
        console.log(err);
      }
    }
    fetchMonsters();

  },[]);


  const fetchMonster = async (index, url) => {
    try{
      if(!monsterCache[index]){
        const response = await fetch(apiRoot + url);
        const apiData = await response.json();
        var tempCache = monsterCache;
        tempCache[index] = apiData;
        setMonsterCache(tempCache);
        //console.log(apiData);
      }
    }
    catch(err){
      console.log(err);
    }
  }

  const addToEncounter = (index, url) => {
    
    fetchMonster(index, url).then( () => {
        //console.log("Get from Cahe:")
        var cachedItem = monsterCache[index];
        //console.log(cachedItem)
        if(cachedItem){
          const tempEncounterList = [...encounterList];
          tempEncounterList.push(cachedItem);
          setEncounterList(tempEncounterList);
          console.log("added cached item");
        }
      }
    );

  }

  const removeFromEncounter = (position) => {
    const tempEncounterList = [...encounterList];
    tempEncounterList.splice(position, 1);
    setEncounterList(tempEncounterList);
  }


  return (
    <div className="App">
      <Router>
        <header className="App-header">
            <h1>Encounter Builder</h1>
        </header>
        <div className="pageBody">

        <Switch>
          <Route path="/:index" >
            <MonsterDetail monsterCache={monsterCache} fetchMonster={fetchMonster}/>
          </Route>

          <Route path="/" render={ (props) => {
            return(
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Encounter monsters={encounterList} removeHandler={removeFromEncounter}  />
                </Grid>
                <Grid item xs={3}>
                  <MonsterIndex monsterIndex={monsterIndex} addHandler={addToEncounter} />
                </Grid>
              </Grid>
            )
          }} />
        </Switch>


        </div>
      </Router>
    </div>
  );
}

export default App;
