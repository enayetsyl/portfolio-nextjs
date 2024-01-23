import { Box, Button, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"


const BlogCard = ({image, heading, alt, details, link}) => {
  return (
    <div className='border border-signature border-solid rounded-lg'>
     <Image src={image} alt={alt} height={100} width={300} className="rounded-lg pb-5 w-full h-[60%] md:h-1/2 object-cover"/>
    <Box marginX={10} className="flex flex-col gap-2">
    <Heading as='h3' className="text-xl font-bold">{heading}</Heading>
     <div className="flex-1">
     <Text fontSize='lg' >{details}</Text>
     </div>

     <Link href={link} target="_blank">
     <Button className="px-4 py-2 bg-signature rounded-lg text-white hover:bg-hover">Read More</Button>
     </Link>

    </Box>
    </div>
  )
}

export default BlogCard