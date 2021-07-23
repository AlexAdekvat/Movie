import React, { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Comments = () => {
    const [text, setText] = useState('')
    const [item, setItem] = useState(
        JSON.parse(localStorage.getItem('item')) || []
    )

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(item))
    }, [item])

    const newComments = () => {
        if (text.trim() !== '') {
            const newComments = {
                id: uuidv4(),
                text: text
            }
            setItem((item) => [...item, newComments])
            setText('')
        } else {
            alert('Enter')
            //setText('')
        }
    }

    const deleteComments = (id) => {
        setItem(item.filter((text) => text.id !== id))
    }

    return (
        <div>
            <div>
                <textarea type="text"
                    placeholder="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <button onClick={newComments} >Send</button>
            </div>
            <div>
                {item.map((text, index) => {
                    return (
                        <div key={index} >
                            {`${text.text}`}
                            <button onClick={()=>deleteComments(text.id)}>X</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Comments