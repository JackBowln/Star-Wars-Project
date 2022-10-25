import { People } from "../../types/people"

const TableItem = (person: People) => {
  return (
    <div>
      { person.name }
    </div>
  )
}

export default TableItem
