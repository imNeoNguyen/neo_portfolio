
import './Services.css'

//Components Import
import Card from '../../UI/Card'
import HeadingText from '../HeadingText/HeadingText'

//Data Import
import { services } from '../../data/Data'

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Service() {
  return (
    <section className='services'>
        <HeadingText title={"What I"} titlePrimary={"Offer"} />

        <div className="container services-container">
            {
                services.map(({id, icon, name, des})=>{
                    return(
                        <Card key={id} classname={'services-card'}>
                            <span><FontAwesomeIcon icon={icon}/></span>
                            <h3>{name}</h3>
                            <p>{des}</p>
                        </Card>
                    )
                })
            }
        </div>
    </section>
  )
}
