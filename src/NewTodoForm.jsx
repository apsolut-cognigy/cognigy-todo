import { useState } from 'react';

export function NewTodoForm( { onSubmit }) {
    // props.onSubmit // dont need it with destructuring

    const [newItem, setNewItem] = useState(''); // '' is the initial state value

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newItem);
        if ( newItem === '') return; // don't add empty item )
        // props.onSubmit(newItem);
        onSubmit(newItem);

        setNewItem(''); // just to clear input
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"/>
            </div>
            <button className="btn">Add</button>

        </form>
    )

}