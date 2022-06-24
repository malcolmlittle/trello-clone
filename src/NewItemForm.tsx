import React, { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles"
import { useFocus } from "./utils/useFocus"

// define the new item form props
type NewItemFormProps = {
    onAdd(text: string): void
}

// define the new item form component
export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("")
    const inputRef = useFocus()

    const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onAdd(text)
        }
    }

   // define the layout - combine all the components we just defined in the styles
    return (
       <NewItemFormContainer>
        <NewItemInput ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} onKeyPress={handleAddText}/>
        <NewItemButton onClick={() => onAdd(text)}>
            Create
        </NewItemButton>
       </NewItemFormContainer>   
    )
}
