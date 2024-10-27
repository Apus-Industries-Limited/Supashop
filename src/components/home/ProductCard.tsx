import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { CiHeart, CiShoppingCart } from "react-icons/ci"
import { FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"


const ProductCard = () => {
  return (
    <Card shadow="md" role="button" className="relative">
      <CardBody className="overflow-visible p-0">
        <Link to={`/product/testId`} className="w-full">
          <Image
            radius="lg"
            width="100%"
            className="w-full object-cover h-[185px]"
            src="https://picsum.photos/200"
          />
        </Link>
      </CardBody>
      <CardFooter className="flex flex-col items-start justify-start">
        <Link to={`/product/testId`} className="w-full">
          <p>Comfy Arm Chair</p>
          <p className="text-primary text-small font-mont-bold">N43,000</p>
        </Link>
        <div className="flex justify-between items-center w-full">
          <Link to={`/product/testId`} className="flex space-x-1 items-center">
            <FaStar size={10} color="#ff7900"/>
            <p className="text-tiny">(25)</p>
          </Link>
          <Button size="sm" color="primary">
            <CiShoppingCart size={18}/>
          </Button>
        </div>
      </CardFooter>
      <div role="button" onClick={()=>console.log("Added to favorite")} className="absolute z-10 p-2 bg-foreground-200 rounded-full top-2 right-2">
        <CiHeart/>
      </div>
    </Card>
  )
}

export default ProductCard