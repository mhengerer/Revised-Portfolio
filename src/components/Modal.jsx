import React, { useState } from "react";
import { styles } from "../styles";

const Modal = () => {
    const [modal, setModal] = useState(false);

    const handleAlert = () => {
        setModal(!modal)
    }

    return (
        < >
            <button
                onClick={handleAlert}
                className=""
            >

            </button>
        </>
    )
}

export default Modal;