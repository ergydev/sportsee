import './HealthStat.css'

function HealthStat({ cardIcon, cardTitle, cardText }) {
    return(
        <div className='card'>
            <img src={cardIcon} alt="Infos utiles" />
            <div className='card__info'>
                <h3 className='card__info--title'>{cardTitle}</h3>
                <p className='card__info--text'>{cardText}</p>
            </div>
        </div>
    )
}

export default HealthStat