export default function ListCard2(props){
    const listCard2 = props.listcard2.map((card,index)=>{
        return <div className='card-container2' key={index}>
        <div className='img-container'>
            <img className='img' src={card.img} alt='img'/>
        </div>
        <div className='card-title'>{card.title}</div>
        <div className='card-description'>{card.description}</div>
    </div>
    })
    return<div className="d-flex justify-content-between">
       {listCard2}
    </div>
}