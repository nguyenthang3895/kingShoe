import './Card2.css'
export default function Card2(props){
    return <div className='card2-container'>
           <div className='img2-container'>
            <img className='img2' src={props.card2Prop.img} alt=''/>
           </div>
            <div className='card2-title pt-1'><i class="fa-solid fa-book"></i>{props.card2Prop.title}</div>
            <div className='card2-description pt-1'>{props.card2Prop.description}</div>
            <div className='btn2-container pt-1'>
                <button className='btn btn-success pt-1'>BUY COURSE</button>
            </div>
            <div className='timeline pt-1'>{props.card2Prop.time}</div>
            <div className='register pt-1'>{props.card2Prop.register}</div>
    </div>

}