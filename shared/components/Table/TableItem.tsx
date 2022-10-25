import { People } from "../../types/people"
import EyeIcon from "../EyeIcon"
import GenderBadge from "../GenderBadge"

interface Props {
  person: People
}

const TableItem = (props: Props) => {
  return (
    <div className="bg-gray-100 flex rounded-lg mt-2 px-3 py-6">
      <div className="w-[30%] text-sm">
        { props.person.name}
      </div>
      <div className="flex text-xs justify-between ml-auto w-[55%] mr-6">
        <div>
          <EyeIcon color={props.person.eye_color}/>
        </div>
        <div className="w-16 flex justify-end">
          <GenderBadge gender={props.person.gender} />
        </div>
        <div className="w-16 flex justify-start">{ props.person.height }</div>
        <div className="w-16 flex justify-start">{ props.person.birth_year }</div>
        <div className="w-16 flex justify-center">{ props.person.mass }</div>
        <div className="text-gray-200">{ new Date(props.person.created).toLocaleDateString() }</div>
        <div className="flex items-center">
        <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="2" r="1.75" stroke="#9FA3A9" stroke-width="0.5"/>
          <circle cx="8" cy="2" r="1.75" stroke="#9FA3A9" stroke-width="0.5"/>
          <circle cx="2" cy="2" r="1.75" stroke="#9FA3A9" stroke-width="0.5"/>
        </svg>
        </div>
      </div>
    </div>
  )
}

export default TableItem
