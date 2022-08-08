import * as C from './RightSide'
import { Level, levels } from '../Helpers/Imc'
import UpImage from '../../../../Assets/up.png'
import DownImage from '../../../../Assets/down.png'
import LeftArrow from '../../../../Assets/leftarrow.png'


type CardProps = {
  item: Level,
}

const HandleNewCalc = () => {
  window.location.reload()
}


export const CardItem = ({ item }: CardProps) => {
  return (
    <C.Item cor={item.color}>
      <C.IconArea>
        <C.Icon src={item.icon === 'up' ? UpImage : DownImage} />
      </C.IconArea>
      <C.CardTitle>{item.title}</C.CardTitle>
      {item.imc &&
        <C.CardInfo>{`IMC esta entre ${item.imc[0]} e ${item.imc[1]}`}</C.CardInfo>
      }
      {item.yourImc &&
        <C.BigRigthSide>
          <C.LeftArrowArea>
            <C.LeftArrowImg onClick={HandleNewCalc} src={LeftArrow} />
          </C.LeftArrowArea>
          <C.CardInfo>{`Seu IMC é ${item.yourImc.toFixed(2)} kg/m²`}
          </C.CardInfo>
        </C.BigRigthSide>
      }
    </C.Item>
  )
}