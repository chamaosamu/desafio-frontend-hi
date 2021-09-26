import List from "../../components/List/"
import Container from "../../components/ContainerHome"
import { useRecoilValue } from "recoil"
import Add from "../../hooks/storage/addItemState"

const Homepage = () => {
  const data = useRecoilValue(Add)
  return (
    <Container>
      <List data={data} />
    </Container>
  )
}

export default Homepage
