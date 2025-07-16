

function List(props) {

    let category = props.category
    let itemList = props.data

    // itemList.sort((a , b) => a.name.localeCompare(b.name)) //sort alpha..
    // itemList.sort((a,b)=> a.calories - b.calories) //sort calories

    let item = itemList.map(allItems => 
    <li key={allItems.id}>{allItems.name} <span>{allItems.calories}</span></li>)

   
    return(
        <>
            <h1>{category}</h1>
            <ol>
                {item}
            </ol>
        </>
        
    )
}

export default List