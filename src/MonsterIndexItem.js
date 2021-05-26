import { IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import styles from "./MonsterIndexItem.module.css"

function MonsterIndexItem(props){
    const handleClick = (e) =>{
        e.preventDefault();
        props.addHandler(props.monster.index, props.monster.url);
    }

    return(
        <div  className={styles.buttonContainer}>
            {props.monster.name} <IconButton color="primary" title={`Add ${props.monster.name} to Encounter` } onClick={handleClick}>
                <AddCircleOutline />
            </IconButton>
        </div>
    )
}

export default MonsterIndexItem;