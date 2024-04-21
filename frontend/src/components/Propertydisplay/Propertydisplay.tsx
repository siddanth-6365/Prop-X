import { useParams } from 'react-router-dom'
import { STATS_TABLE } from '../../consts';
import './Propertydisplay.css';
import StatsTable from '../StatsTable';
import profile from '../../assets/slider4.jpg'
import Header2 from '../Header2';

const Propertydisplay = ({account,web3Handler}:any) => {
  const { property } = useParams();

  const singlenft = STATS_TABLE.find(item => item.id === property);

  return (
    <>
    <Header2 account={account} web3Handler={web3Handler} /> 
    <div className='propertypage'>
      <div className='propertydisplaysection'>
        <div className="image">
          <img src={profile} alt="" />
        </div>
        <div className="content">
          <div className="title">{singlenft?.name}</div>
          <div className="box">

            <div className="bottom">
              <div className="price">Current Volume: &nbsp; </div>
              <div className="rate"> {singlenft?.volume} ETH</div>
            </div>
            <div className="bottom">
              <div className="price">Total Items: &nbsp; </div>
              <div className="rate"> {singlenft?.volume} ETH</div>
            </div>

            <div className="bottom">
              <div className="price">Floor Price: &nbsp; </div>
              <div className="rate"> {singlenft?.floor} PRIME</div>


            </div>

            <div className="button">
              <button>BUY NOW</button>
              <button>MAKE OFFER</button>
            </div>
            <div className='sales'>Sale ends April 22,2024 at 11:00 AM</div>

          </div>



        </div>
      </div>
      <StatsTable />
    </div>
    </>
  )
}

export default Propertydisplay;