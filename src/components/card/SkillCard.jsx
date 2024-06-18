import React, {useState, useEffect} from 'react'
import Circular from '../circular/Circular'
import styled from 'styled-components'

const SkillCard = ({data, isVisible}) => {
  // console.log("skill card", isVisible)
  const [percent, setPercent] = useState(0)

  // useEffect(() => {
  //   let start = 0;
  //   const end = data.percent

  //   if(start === end) return;

  //   const incrementTime = (2 / end);
  //   const timer = setInterval(() => {
  //     start += 1;
  //     setPercent(start);
  //     if(start === end) clearInterval(timer);
  //   }, incrementTime);

  //   return () => clearInterval(timer)

  // },[data.percent])

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = data.percent;

      if (start === end) return;

      const incrementTime = (2 / end);
      const timer = setInterval(() => {
        start += 1;
        setPercent(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [data.percent, isVisible]);

  return (
    <Container>
        <Circular
        data={data}
        isVisible={isVisible}
        />
        <Content>
          <Percent>
            <h4>{percent} %</h4>
          </Percent>
          <Title>
            <h5>
            {data.title}
            </h5>
          </Title>
        </Content>
    </Container>
  )
}

export default SkillCard

const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  /* margin */
  border-radius: 2rem;
  box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.2);
  /* border: 1px solid red; */
  /* padding: 2rem 5rem 2rem 5rem; */
  width: 20rem;
  height: 20rem;
  background: linear-gradient(159deg, rgb(45,45,58) 0%, rgb(43,43,53) 100%);
`

const Title = styled.div`

`

const Percent = styled.div``


const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`