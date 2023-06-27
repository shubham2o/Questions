// https://codedamn.com/problem/xjMDBZ9RmvFAP8pBariPK

import { useState } from "react";

const WordCounter = () => {
    const [text, setText] = useState(0);

    return (
        <>
            <textarea
                onChange={(e) => {
                    const words = e.target.value
                    setText(words.trim().split(" ").length);
                }}
            />
            <h1>Your article has {text} words.</h1>
        </>
    )
}

export default WordCounter;