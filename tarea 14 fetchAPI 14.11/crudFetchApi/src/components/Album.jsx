import React from "react";
import './Album.css'

const Album = ({id, title, onDelete}) => {
    
    const handleDelete = () => {
        onDelete(id)
    }
    
    return (
        <div className="list">
                
                <span data-testid="titleId" >{title}</span>
                <span>
                    <button>edit</button>
                    <button data-testid="deleteButtonId"  onClick={handleDelete}>delete</button>
                </span>
        </div>
    )
}
export default Album