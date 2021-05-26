import MonsterMiniStatBlock from "./MonsterMiniStatBlock";

/* A list of monster stat blocks */
function EncounterMonsters(props){
    var monsters = props.monsters;

    if(!monsters)
        monsters = [];

    

    return(
        <div className="encounterMonsters">
            {  monsters.map((monster, index) => {
                // removeHanlder could be: 
                // removeHandler={() => dispatch({type:'REMOVE_MONSTER', position: index})}
                // then we don't have to pass in position, and ministatblock doesn't need to implement handleclick
                return <MonsterMiniStatBlock key={'index_' + monster.index + '_' + index} position={index} monster={monster}  removeHandler={props.removeHandler} />
            })
          }
        </div>
    )

}


export default EncounterMonsters;