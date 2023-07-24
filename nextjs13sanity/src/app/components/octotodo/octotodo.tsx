import React from 'react'
import styles from './page.module.css'
import { client } from "../..///utils/configSanity"

interface IOctoTodo {
  _id: string;
  title: string;
  description: any;
  _createdAt: string;
}

async function getData(){
  const query = `*[_type == "octotodo"]`;
  const data = await client.fetch(query);
  return data as IOctoTodo[];
}
const  OctoTodo =async()=> {
  const data = (await getData()) as IOctoTodo[];
  console.log(data);
  return (
    <div className={styles.container}>
       <h1 className={styles.selectTitle}>
        <div className={styles.items}>
            문어의꿈
        </div>
       </h1>
    </div>
  )
}

export default OctoTodo