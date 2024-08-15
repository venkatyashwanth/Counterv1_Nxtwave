import React, { useState } from 'react';
import styles from "./counter.module.scss";

function Counter() {
    const [count,setcount] = useState(0);
    const handleClick = () => {
        setcount(count => count + 1);
    }
    return (
        <>
            <div className={styles.appBg}>
                <div className={styles.appContent}>
                    <h1>
                        The Button has been clicked <br /> <span>{count}</span> times
                    </h1>
                    <p>
                        Click the button to increase the count!
                    </p>
                    <button type="button" className={styles.countBtn} onClick={handleClick}>
                        Click Me!
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter