export const MAIN_TABS = ['All', 'Lands', "Apartments", 'Collections']

async function fetchDataFromUrl() {
  try {
    const url = "https://osdc-hack-backend.onrender.com/api/properties/getProperty";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json(); 
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


export const CAROUSEL_ITEMS = await fetchDataFromUrl();

export const STATS_TABLE = await fetchDataFromUrl();

export const FOOTER_MARKETPLACE = ['All NFTs', 'Art', 'Gaming', 'Memberships', 'PFPs', 'Photography']
export const FOOTER_MYACCOUNT = ['Profile', 'Favorites', 'Watchlist', 'My Collections', 'Create', 'OpenSea Pro', 'Settings']
export const FOOTER_STATS = ['Rankings', 'Activity']
export const FOOTER_RESOURCES = [
  'Blog',
  'Learn',
  'Help Center',
  'User Content FAQs',
  'Taxes',
  'Partners',
  'Developer Platform',
  'Platform Status',
]
export const FOOTER_COMPANY = ['About', 'Careers', 'Ventures']
export const FOOTER_LEARN = [
  'What is an NFT?',
  'How to buy an NFT',
  'What are NFT drops?',
  'How to sell an NFT using OpenSea',
  'How to create an NFT on OpenSea',
  'What is a crypto wallet?',
  'What is cryptocurrency?',
  'What are blockchain gas fees?',
  'What is a blockchain?',
  'What is web3?',
  'How to stay protected in web3',
]
