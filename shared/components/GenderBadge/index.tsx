interface Props {
  gender: string;
}

const index = (props: Props) => {
  let textColor= "text-blue-700"
  let bgColor = "bg-blue-100"
  if(props.gender === 'male') {
    textColor= "text-green-700"
    bgColor = "bg-green-100"
  } else if(props.gender === 'female') {
    textColor= "text-yellow-400"
    bgColor = "bg-yellow-100"
  } 
  
  return (
    <div className="w-auto">
      <div className={bgColor+" "+textColor+" px-3 py-1 rounded-xl"}>{props.gender}</div>
    </div>
  )
}

export default index
