import { useState } from "react"
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./styles"

// define the new item form props
type NewItemFormProps = {
    onAdd(text: string): void
}

// define the new item form component
export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("")

   // define the layout - combine all the components we just defined in the styles
    return (
       <NewItemFormContainer>
        <NewItemInput value={text} onChange={(e) => setText(e.target.value)}/>
        <NewItemButton onClick={() => onAdd(text)}>
            Create
        </NewItemButton>
       </NewItemFormContainer>   
    )
}
