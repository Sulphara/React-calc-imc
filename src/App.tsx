import './App.css';
import { Container } from './Components/Container/Container'
import { Header, Logo } from './Components/Header/Header';
import poweredImage from '../Assets/powered.png'
import { LeftSide, Title, Paragraph, Inputs, Input, Button } from './Components/LeftSide/LeftSide'
import { RigthSide, Grid, BigRigthSide, Item } from './Components/RightSide/Result/RightSide'
import { CardItem } from './Components/RightSide/Result/CardItem'
import { useState } from 'react';
import { levels, CalculateImc, Level } from './Components/RightSide/Helpers/Imc'



function App() {

  const [HeigthField, setHeightField] = useState<number>(0)
  const [WeightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)


  const HandleCalculateButton = () => {
    if (HeigthField && WeightField) {
      setToShow(CalculateImc(HeigthField, WeightField))


    } else { alert('Campos obrigatórios') }


  }

  return (
    <>
      <Header>
        <Logo src={poweredImage} />
      </Header>
      <Container>
        <LeftSide>
          <Title>
            Calcule o seu IMC.
          </Title>
          <Paragraph>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </Paragraph>
          <Input
            type='number'
            placeholder='Digite a sua altura. Ex: 1.75 (Em Cm)'
            value={HeigthField > 0 ? HeigthField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false} />
          <Input type='number'
            placeholder='Digite o seu peso. Ex: 95.3 (em Kg)'
            value={WeightField > 0 ? WeightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <Button onClick={HandleCalculateButton}
            disabled={toShow ? true : false} >Calcular
          </Button>
        </LeftSide>
        <RigthSide>
          {!toShow &&
            <Grid>
              {levels.map((item, index) => (
                <CardItem key={index} item={item} />
              ))}
            </Grid>}
          {toShow &&
            <BigRigthSide>
              <CardItem item={toShow} />
            </BigRigthSide>
          }


        </RigthSide>
      </Container>
    </>
  )
}

export default App
