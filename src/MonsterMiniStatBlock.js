import { IconButton , Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import KeyValueList from "./KeyValueList";
import styles from "./MonsterMiniStatBlock.module.css"
import CancelIcon from '@material-ui/icons/Cancel';
import VisibilityIcon from '@material-ui/icons/Visibility';

/* an individual stat block for a monster */
function MonsterMiniStatBlock(props){
    var monster = props.monster;

    const handleClick = (e) => {
        e.preventDefault();
        props.removeHandler(props.position);
    }

    //name (size, type) (XP)
    // AC HP Speed
    // Abiltiy modifiers
    // Senses
    // special abilities
    // Attacks

    return(
        <Paper elevation={3}>
            <div className={styles.statHeader}>
                <div className={styles.baseInfo}>
                    <div>{monster.name} ({monster.size} {monster.alignment} {monster.type}) (XP {monster.xp} CR {monster.challenge_rating}) </div>
                    <div>AC: {monster.armor_class} HP: {monster.hit_points} SPD: <KeyValueList object={monster.speed} /></div>
                    <div>Senses: <KeyValueList object={monster.senses}/></div>
                </div>
                <div className={styles.buttonContainer}>
                    <IconButton  variant="contained" title="Remove" onClick={handleClick}>
                        <CancelIcon color="secondary" />
                    </IconButton >
                    <Link to={`/${monster.index}`} title="View Details">
                        <VisibilityIcon color="primary" />
                    </Link>
                </div>
            </div>
            <div className="actions">
                Actions:
                <ul>
                    {
                        monster.actions.map((action, index) => {
                            return <li key={"actions_"+index}><b>{action.name}</b> {action.desc}</li>
                        })
                    }
                </ul>
            </div>
        </Paper>
    )
}

export default MonsterMiniStatBlock;