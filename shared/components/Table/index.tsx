
import { useEffect, useState } from 'react';
import { PeopleApi } from '../../service/people-service';
import { People } from '../../types/people';
import TableHead from './TableHead';
import TableItem from './TableItem';
const Table = () => {
  const [people, setPeople] = useState<Array<People>>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const getPeople = async () => {
    try {
      setLoading(true)
      const response:any = await PeopleApi.getInstance().getPeople()
      const data = response.results
      setPeople(data)
    } catch(err){
      console.error(err)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  useEffect(()=>{
    getPeople()
  },[])
  function table() {
    people.map((person) => {
      return (
        <div key={person.name}>
          <TableItem person={person}/>
        </div>
      )
    })
  }
  return (
    <div className="w-[1100px] max-w-full mx-auto mt-48 ">
      {
        loading ?
        <div>Loading...</div> :
        
        <div>
          <TableHead/>
          {people.map((person) => {
            return (
              <div key={person.name}>
              <TableItem person={person}/>
            </div>
          )
        })}
        </div>
        
      }
    </div>
  )
}

export default Table
