import { BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

interface Props{
  title: string
  showIcon: boolean | null
  Icon: React.ElementType | undefined
  action:(()=>void )| undefined
}
const OtherHeather = ({title,showIcon=false,Icon,action}:Props) => {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <header className="flex justify-between items-center p-4 border-b rounded-b-lg shadow">
      <BsChevronLeft role="button" onClick={back}/>
      <p className="flex-1 text-center font-mont-bold capitalize text-medium">{title}</p>
      {showIcon && Icon && <Icon role="button" onClick={action}/>}
    </header>
  )
}

export default OtherHeather