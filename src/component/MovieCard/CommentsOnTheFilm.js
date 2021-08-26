import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styles from "./Comments.module.scss"


const Comments = () => {

    const { id } = useParams()
    const [text, setText] = useState('')
    const [item, setItem] = useState(JSON.parse(localStorage.getItem(id)) || [])

    useEffect(() => {
        localStorage.setItem(id, JSON.stringify(item))
    }, [item])

    const date = new Date();
    date.toLocaleDateString();

    const newComments = () => {
        if (text.trim() !== '') {
            const newComments = {
                id: uuidv4(),
                text: text,
                date: date.toLocaleDateString(),
                author: "you"
            }
            setItem((item) => [...item, newComments])
            setText('')
        }
    }

    const deleteComments = (id) => {
        setItem(item.filter((text) => text.id !== id))
    }

    return (
        <div >
            <div className={styles.container}>
                <textarea type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={styles.textarea} />
                <div>
                    <button onClick={newComments} className={styles.button}>Send</button>
                </div>
            </div>
            <div className={styles.main}>
                {item.map((text, index) => {
                    return (
                        <div key={index} className={styles.comments} >
                            <div className={styles.authorDate}>
                                <div> {text.author}</div>
                                <div className={styles.text}>{text.date}</div>
                                <div>
                                <button onClick={() => deleteComments(text.id)}>X</button>
                            </div>
                            </div>
                            <div className={styles.text}>{text.text}</div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Comments