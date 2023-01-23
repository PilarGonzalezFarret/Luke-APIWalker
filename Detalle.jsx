function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function DetailComponent(prop){
    return (
        <div>
            <h1>{prop.ppalAttr}</h1>
            {Object.entries(prop.attributes).map(([key,  value]) => {
                return <p key={key} >{capitalize(key.replace("_", " "))}: {value}</p>
            })}
        </div>
    )
}