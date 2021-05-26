// props:
//  object, consisting of key, values
function KeyValueList(props)
{

    const renderList = (object) => {
        var result = "";
        for (const [key, value] of Object.entries(props.object)) {
            result = result + " " + key + ' ' + value;
        }
        return result;
    }

    return (
        <>
            {renderList (props.object)}
        </>
    )

}

export default KeyValueList;