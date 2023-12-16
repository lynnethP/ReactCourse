import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Orgullo y Prejuicio', 'Yo antes de ti'])
    
    const onAddCategory = (newCategory) => {
        setCategories([...newCategory, ...categories])
        console.log(newCategory)
    }
    // console.log(categories)

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory = { event => onAddCategory(event)}

            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}