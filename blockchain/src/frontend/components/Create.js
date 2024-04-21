import { useState } from "react";
import { ethers } from "ethers";
import { Row, Form, Button } from "react-bootstrap";
import { create as ipfsHttpClient } from "ipfs-http-client";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Create = ({ marketplace, fractionalNFT }) => {
  const [price, setPrice] = useState(null);
  const [propertyId, setPropertyId] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);

  const createFractionalNFT = async () => {
    if (!price || !propertyId || !totalSupply) return;
    try {
      // Tokenize the property
      await (await fractionalNFT.tokenizeProperty(propertyId, totalSupply)).wait();

      // Mint fractional tokens
      const tokenAmount = Math.floor(totalSupply * 0.1); // Mint 10% of total supply
      await (await fractionalNFT.mintFractionalToken(propertyId, tokenAmount)).wait();

      // Get the tokenId of the first minted token
      const tokenId = await fractionalNFT.propertyStartingTokenId(propertyId);

      // Approve marketplace to spend the token
      await (await fractionalNFT.setApprovalForAll(marketplace.address, true)).wait();

      // Add the token to the marketplace
      const listingPrice = ethers.utils.parseEther(price.toString());
      await (await marketplace.makeItem(fractionalNFT.address, propertyId, tokenId, listingPrice)).wait();
    } catch (error) {
      console.log("Error creating fractional NFT: ", error);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: "1000px" }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                onChange={(e) => setPropertyId(e.target.value)}
                size="lg"
                required
                type="number"
                placeholder="Property ID"
              />
              <Form.Control
                onChange={(e) => setTotalSupply(e.target.value)}
                size="lg"
                required
                type="number"
                placeholder="Total Supply"
              />
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                size="lg"
                required
                type="number"
                placeholder="Price in ETH"
              />
              <div className="d-grid px-0">
                <Button onClick={createFractionalNFT} variant="primary" size="lg">
                  Create & List Fractional NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Create;
// import { useState } from 'react'
// import { ethers } from "ethers"
// import { Row, Form, Button } from 'react-bootstrap'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// const Create = ({ marketplace, nft }) => {
//   const [image, setImage] = useState('')
//   const [price, setPrice] = useState(null)
//   const [name, setName] = useState('')
//   const [description, setDescription] = useState('')
//   const uploadToIPFS = async (event) => {
//     event.preventDefault()
//     const file = event.target.files[0]
//     if (typeof file !== 'undefined') {
//       try {
//         const result = await client.add(file)
//         console.log(result)
//         setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
//       } catch (error){
//         console.log("ipfs image upload error: ", error)
//       }
//     }
//   }
//   const createNFT = async () => {
//     if (!image || !price || !name || !description) return
//     try{
//       const result = await client.add(JSON.stringify({image, price, name, description}))
//       mintThenList(result)
//     } catch(error) {
//       console.log("ipfs uri upload error: ", error)
//     }
//   }
//   const mintThenList = async (result) => {
//     const uri = `https://ipfs.infura.io/ipfs/${result.path}`
//     // mint nft 
//     await(await nft.mint(uri)).wait()
//     // get tokenId of new nft 
//     const id = await nft.tokenCount()
//     // approve marketplace to spend nft
//     await(await nft.setApprovalForAll(marketplace.address, true)).wait()
//     // add nft to marketplace
//     const listingPrice = ethers.utils.parseEther(price.toString())
//     await(await marketplace.makeItem(nft.address, id, listingPrice)).wait()
//   }
//   return (
//     <div className="container-fluid mt-5">
//       <div className="row">
//         <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
//           <div className="content mx-auto">
//             <Row className="g-4">
//               <Form.Control
//                 type="file"
//                 required
//                 name="file"
//                 onChange={uploadToIPFS}
//               />
//               <Form.Control onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
//               <Form.Control onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
//               <Form.Control onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />
//               <div className="d-grid px-0">
//                 <Button onClick={createNFT} variant="primary" size="lg">
//                   Create & List NFT!
//                 </Button>
//               </div>
//             </Row>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Create