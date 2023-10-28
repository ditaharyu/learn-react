import React, { useEffect, useState } from "react"
import { getList } from "../controller/api.js"

const Menu = () => {
    const [id, setId] = useState(1)
    const [data, setData] = useState(null)

    const getData = async () => {
        const data = await getList(id)
        setData(data)
    }
    useEffect(() => {
        getData()
    }, [id])
    return (
        <div className='menu-container'>
            <h1>MENU NIH</h1>
            <div>
                Mau Call API disini
                <span>INSERT ID : {id}</span>
                <input type="text" id="id" onChange={(e) => setId(e.target.value)} />
                {/* <button onClick={refetch}>Tampilkan</button> */}
                <pre>
                    {JSON.stringify(data.data)}
                </pre>
            </div>
        </div>
    )
}

export default Menu