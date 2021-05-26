import { useEffect, useState } from "react";
import MonsterIndexItem from "./MonsterIndexItem"

// A list of MonsterIndexItems
function MonsterIndex(props){
    const monsterIndex = props.monsterIndex;
    const [filteredList, setFilteredList] = useState(monsterIndex);
    const [filterText, setFilterText] = useState('');

    const handleChange = (e) => {
        setFilterText(e.target.value);
    }

    useEffect(()=>{
        if(filterText !== ''){
            var temp = monsterIndex.filter( monster => monster.name.toLowerCase().includes(filterText.toLowerCase()));
            setFilteredList(temp);
        }
        else
        {
            setFilteredList(monsterIndex);
        }
    }, [filterText, monsterIndex]);

    return(
        <div className="monsterIndexBox">
            <h2>Monsters</h2>
            <input type="text" value={filterText} onChange={handleChange} />
            {filteredList.map((monster) => {
                return <MonsterIndexItem key={'index_' + monster.name} monster={monster} addHandler={props.addHandler}  />
            })
          }
        </div>
    )
}

export default MonsterIndex;