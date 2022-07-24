import './Card.css'
export default function Card(props){
    return<div className='card-container'>
                <div className='img-container'>
                    <img className='img' src={props.cardProp.img} alt='img'/>
                </div>
                <div className='card-title'>{props.cardProp.title}</div>
                <div className='card-description'>{props.cardProp.description}</div>
    </div>
}