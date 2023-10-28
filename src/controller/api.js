// bikin call api disini aja ya

import axios from "axios"

export async function getList(id) {
    const data = await axios.get(`/api/users/${id}`, {
        baseURL: 'https://reqres.in'
    })
    return data.data
}