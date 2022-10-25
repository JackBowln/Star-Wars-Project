
interface Props {
  color: string;
}


const index = (props: Props) => {
  const color = props.color.split("-")[0]
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 9C16.5 9 14.25 13.5 9 13.5C3.75 13.5 1.5 9 1.5 9C1.5 9 3.75 4.5 9 4.5C14.25 4.5 16.5 9 16.5 9Z" stroke={color}  stroke-linecap="round"/>
      <circle cx="9" cy="9" r="2.25" stroke={color}  stroke-linecap="round"/>
    </svg>
  )
}


export default index
