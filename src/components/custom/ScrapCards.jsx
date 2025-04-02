import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react"

const ScrapCard = (props) => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="md">
    <Image
      objectFit="cover"
      maxW="150px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />
    <Box>
    <Card.Body>
        <Card.Title mb="2">{props.title}</Card.Title>
        <Card.Description>
          Dodano: data
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button>Czytaj więcej</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)

export default ScrapCard;