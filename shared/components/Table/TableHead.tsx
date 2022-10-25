
const TableHead = () => {
  return (
    <div className="flex text-sm">
      <div className="w-[30%] ml-5">Name</div>
      <div className="flex gap-8 justify-between ml-auto w-[50%] mr-[10%] break-words">
        <div className="whitespace-nowrap	">
          Eye color
        </div>
        <div>
          Gender
        </div>
        <div>
          Height
        </div>
        <div className="whitespace-nowrap	">
          Birth year
        </div>
        <div>
          Mass
        </div>
        <div>
          Created
        </div>
      </div>
    </div>
  )
}


export default TableHead
