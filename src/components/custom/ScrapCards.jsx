import { Badge, Box, Button, Card, HStack, Image, SimpleGrid } from "@chakra-ui/react"

const ScrapCard = (props) => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="md">
    <Image
      objectFit="cover"
      maxW="150px"
      src={props.image}
      alt={props.id}
    />
    <Box>
    <Card.Body>
        <Card.Title mb="2">{props.title}</Card.Title>
        <Card.Description>{props.date}</Card.Description>
      </Card.Body>
      <Card.Footer>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button>Czytaj więcej</Button>
          </a>
      </Card.Footer>
    </Box>
  </Card.Root>
)

export default ScrapCard;