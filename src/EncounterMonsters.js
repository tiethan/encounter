import MonsterMiniStatBlock from "./MonsterMiniStatBlock";
import Grid from '@material-ui/core/Grid';

/* A list of monster stat blocks */
function EncounterMonsters(props){
    var monsters = props.monsters;

    if(!monsters)
        monsters = [];

    

    return(
            <Grid container spacing={1}>
            {  monsters.map((monster, index) => {
                // removeHanlder could be: 
                // removeHandler={() => dispatch({type:'REMOVE_MONSTER', position: index})}
                // then we don't have to pass in position, and ministatblock doesn't need to implement handleclick
                return <Grid item xs={4}> <MonsterMiniStatBlock key={'index_' + monster.index + '_' + index} position={index} monster={monster}  removeHandler={props.removeHandler} /> </Grid>
            })
            }
          </Grid>
    )

}


export default EncounterMonsters;