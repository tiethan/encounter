
function MonsterIndexItem(props){
    const handleClick = (e) =>{
        e.preventDefault();
        props.addHandler(props.monster.index, props.monster.url);
    }

    return(
        <div>
            {props.monster.name} <button title={`Add ${props.monster.name} to Encounter` } onClick={handleClick}>+</button>
        </div>
    )
}

export default MonsterIndexItem;