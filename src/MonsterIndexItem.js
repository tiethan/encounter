import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import styles from "./MonsterIndexItem.module.css"

function MonsterIndexItem(props){
    const handleClick = (e) =>{
        e.preventDefault();
        props.addHandler(props.monster.index, props.monster.url);
    }

    return(
        <ListItem className={styles.buttonContainer} alignItems="flex-start" dense={true}>
            <ListItemText primary={props.monster.name} />
            <ListItemSecondaryAction>
                <IconButton color="primary" size="small" title={`Add ${props.monster.name} to Encounter` } onClick={handleClick}>
                    <AddCircleOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default MonsterIndexItem;