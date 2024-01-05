import axios from 'axios'

export type booksType = {
    title: string,
    description: string,
    price: number,
    author: string
}[]

export async function getData(): Promise<any> {
    const data = await axios.get('https://testcasefe2023.ignorelist.com/api/v1/data/', {
        headers: {
            "nim": "215150400111021"
        }
    })
    return data;
}