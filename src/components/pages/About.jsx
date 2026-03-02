import Container from "../common/container"

const About = () => {
  return (
    <div className="bg-[url(/src/assets/Bannar.jpg)] py-75 bg-no-repeat bg-cover bg-center">
      <Container className={'flex justify-center'}>
        <h1 className="text-black text-5xl font-bold p-5 backdrop-blur-[3px] w-fit rounded-2xl bg-white/25 italic">I'm the About Page</h1>
      </Container>
    </div>
  )
}

export default About