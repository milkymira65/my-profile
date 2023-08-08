import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  // ...  (ข้อมูล testimonials เหมือนเดิม)
  {
    // name: "Brandon P.",
    role: "Chief Marketing Officer",
    content:
      "Front-End Development HTML CSS JavaScript TypeScript  React   Redux  chakra ui  material ui and Tailwind.",
    avatar: "picture/frontend.png",
  },
  {
    // name: "Krysta B.",
    role: "Entrepreneur",
    content:
      "Back-End Development: Nest.js ,Node.js, Express.js, MongoDB and PostgreSQL.",
    avatar: "picture/backend.png",
  },
  {
    // name: "Darcy L.",
    role: "Movie star",
    content:
      "Other materials: Software Testing, Git, GitLab and GitHub , Graphql , cypress , DBeaver ,3DMax , Figma ,Postman, Canva  ,Mockaroo.",
    avatar: "picture/onoterskill.png",
  },
];

const backgrounds = [
  // `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  // `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  // `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
  // ... (ข้อมูล backgrounds เหมือนเดิม)
];

function TestimonialCard(props) {
  const { role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={"lg"}
      maxW={[300, 500, 600, 800, 1000]}
      direction={{ base: "column-reverse", md: "row" }}
      width="80%"
      rounded={"xl"}
      p={5}
      ml="10%"
      // mt="50%"
      // justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("rgba(217, 220, 225, 0.7)", "purple.200")}
      _after={{
        // content: '""',
        position: "absolute",
        height: "21px",
        width: "29px",
        left: "35px",
        // top: "-10px",
        backgroundSize: "cover",
        backgroundImage: backgrounds[index % 4],
      }}
      _before={{
        // content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        // maxW: "200px",
        width: "full",
        // filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // top: 0,
        // left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.div
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"20px"}
          // pb={5}
        >
          {content}
        </chakra.div>
      </Flex>
      <Avatar
        src={avatar}
        height={"80px"}
        width={"80px"}
        alignSelf={"center"}
        m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={"center"}
      // pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
      // mt={["-5%", "-10%", "-20%"]}
      // mt={-20}
      // mb={40}
    >
      <Box>
        <chakra.h3
          // py={[5, 10, 20]}
          fontSize={30}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color="#735F32"
        >
          <h2 id="Skills">Skills</h2>
        </chakra.h3>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"5"}
        mt={[-20, 10]}
        // mb={20}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
