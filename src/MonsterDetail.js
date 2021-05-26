import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import KeyValueList from "./KeyValueList";
import styles from "./MonsterMiniStatBlock.module.css"

function MonsterDetail({monsterCache, fetchMonster}){
    let {index} = useParams();
    const [monster, setMonster] = useState( monsterCache[index]);

    if(!monster){
        fetchMonster(index, `/api/monsters/${index}`).then(() => {
            var cachedItem = monsterCache[index];
            setMonster(cachedItem);
        });
    }

    return(
        <>
            { monster  && (
            <div>
                <div>
                    <h2>{monster.name} ({monster.size} {monster.alignment} {monster.type}) (XP {monster.xp} CR {monster.challenge_rating}) </h2>
                    <div>
                        <Link to="/">Back</Link>
                    </div>
                </div>
                <div>
                    <div className={styles.baseInfo}>
                        <div>AC: {monster.armor_class} HP: {monster.hit_points} SPD: <KeyValueList object={monster.speed} /></div>
                        <div>Senses: <KeyValueList object={monster.senses}/></div>
                    </div>
                    <div className="actions">
                        Actions:
                        <ul>
                            {
                                monster.actions.map((action, index) => {
                                    return <li><b>{action.name}</b> {action.desc}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default MonsterDetail;