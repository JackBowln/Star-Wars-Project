interface Props {
  gender: string;
}

const index = (props: Props) => {
  let textColor= "blue-700"
  let bgColor = "blue-100"
  if(props.gender === 'male') {
    textColor= "green-700"
    bgColor = "green-100"
  } else if(props.gender === 'female') {
    textColor= "yellow-400"
    bgColor = "yellow-100"
  } 
  
  return (
    <div className={"bg-"+bgColor+" text-"+textColor+" px-3 py-1 rounded-xl"}>{props.gender}</div>
  )
}

export default index
