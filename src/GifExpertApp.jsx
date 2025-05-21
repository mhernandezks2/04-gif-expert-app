import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={ onAddCategory } />

            <ol>
                {
                    categories.map( category => (
                        <li key={ category }>{ category }</li>
                    ))
                }
            </ol>
        </>
    )
};