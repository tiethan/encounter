import { useEffect, useState } from "react";
import EncounterMonsters from "./EncounterMonsters";

/* A container for encounter info, will have a list of encounter monsters */
function Encounter(props){
    const [encounter, setEncounter] = useState({
        totalXP: 0,
        totalCR: 0,
        totalMonsters: props.monsters.length
      });

    useEffect( () => {
        var xp = 0;
        var cr = 0;
        var tempEncounter = {...encounter};
        props.monsters.forEach(monster => {
            xp += monster.xp;
            cr += monster.challenge_rating;
        });
        tempEncounter.totalXP = xp;
        tempEncounter.totalCR = cr;
        tempEncounter.totalMonsters = props.monsters.length;
        setEncounter(tempEncounter);
    }, [props.monsters, encounter] );

    return(
        <div className="encounterBox">
            <h2>Encounter</h2>
            <div><b>Total XP:</b> {encounter.totalXP}</div>
            <div><b>Total CR:</b> {encounter.totalCR}</div>
            <div><b>Number of Monsters:</b> {encounter.totalMonsters}</div>
            <EncounterMonsters monsters={props.monsters} removeHandler={props.removeHandler}/>
        </div>
    )
}
export default Encounter;