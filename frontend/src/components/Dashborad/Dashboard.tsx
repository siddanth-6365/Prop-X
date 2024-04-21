import React from 'react'
import './Dashboard.css'
import profile from '../../assets/slider4.jpg'
import Header2 from '../Header2'

const arrays = [
  {
      image : "https://i.seadn.io/s/raw/files/64ee553ce158e9d378b22960b7b14cf8.jpg?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 5",
      nft : "Jerry NFT",
      price : "0.007",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/e3eeae48aef68746d7a4f6eb736c5974.png?auto=format&dpr=1&w=1920",
      name : "Cartoon Cat 6",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/76055a92a50aad445237b59a610c6f43.png?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 7",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/64ee553ce158e9d378b22960b7b14cf8.jpg?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 5",
      nft : "Jerry NFT",
      price : "0.007",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/e3eeae48aef68746d7a4f6eb736c5974.png?auto=format&dpr=1&w=1920",
      name : "Cartoon Cat 6",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/76055a92a50aad445237b59a610c6f43.png?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 7",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/64ee553ce158e9d378b22960b7b14cf8.jpg?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 5",
      nft : "Jerry NFT",
      price : "0.007",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/e3eeae48aef68746d7a4f6eb736c5974.png?auto=format&dpr=1&w=1920",
      name : "Cartoon Cat 6",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/76055a92a50aad445237b59a610c6f43.png?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 7",
      nft : "Jerry NFT",
      price : "0.005",
      currency : "ETH"
  },
  {
      image : "https://i.seadn.io/s/raw/files/76055a92a50aad445237b59a610c6f43.png?auto=format&dpr=1&w=384",
      name : "Cartoon Cat 7",
      nft : "Jerry NFT",
      price : "",
      currency : "ETH"
  }
]

function Dashboard({account,web3Handler}:any) {
    return (
        
      <>  
        <Header2 account={account} web3Handler={web3Handler} /> 
        <div id="header"></div>
        <div className="background-cover"></div>
            <div className="container-max" style={{ marginTop: "15px" }}>
                <div className="col-lg-12">
                    <div className="profile-card">
                        <img src={profile} alt="" />
                    </div>
                    <h2 className="username">kartikswarnkartestnet</h2>
                    <p>
                        <img className="img-icon" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ethereum-eth-icon.png" />
                        0xF60f...B217 <span className="text-muted ml-3">Joined October 2023</span>
                    </p>
                </div>

                <div className="col-lg-12 mt-5">
                    <button className="btn main-btn px-4">Collected 7</button>
                    <button className="btn main-btn px-4">Offer made</button>
                    <button className="btn main-btn px-4">Deals</button>
                    <button className="btn main-btn px-4">Created</button>
                    <button className="btn main-btn px-4">Favourite</button>
                    <button className="btn main-btn px-4">Activity</button>
                </div>

                <div className="col-lg-12 mt-4">
                    <div className="">
                        <div className="flex" id="nft-list">
                            {arrays.map((result, index) => (
                                <a key={index} className="col5 card mb-4" href="/assets.html">
                                    <span className="p-3">
                                        <h6>{result.name}</h6>
                                        <h6>{result.nft}</h6>
                                        <h5 className="mt-3 font-weight-bold">{result.price ? result.price + " " + result.currency : ""}</h5>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
}

export default Dashboard;
