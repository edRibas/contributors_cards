import Contributor from '../Contributors'
import './Team.css'

const Team = (props) => {
    const css = {backgroundColor: props.secondaryColor}

    return (
        (props.contributors.length > 0) && <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='contributors'>
            {props.contributors.map(contributor => 
                <Contributor
                    backgroundColor={props.primaryColor}
                    key={contributor.name} 
                    name={contributor.name} 
                    role={contributor.role} 
                    image={contributor.image}
                />)}
            </div>
        </section>
    )
}

export default Team