const config = {

  // mint with bnb contract
  LeaderSupply:25 ,
  LegendarySupply:150,
  EpicSupply:250, // change values here
  RareSupply:350,
  UncommonSupply:400,
  CommonSupply:500,

  leader_items_cost: 5,
  legendary_items_cost: 1,
  epic_items_cost: 0.7,
  rare_items_cost: 0.4,
  uncommon_items_cost: 0.2,
  common_items_cost: 0.1 
}

const social ={
  googlePlayStore:'', // will update after game launch to play store and app store
  appleAppStore:'',
  windows :'',
  twitter:'', 
  discord:'',
  telegram:'',
  facebook:'',
  opensea: '', // will update after we create opeansea collection
  email : '',
  instagram : '/'
}

const dex ={

  //mint with dex coin contract
  LeaderSupply:25 ,
  LegendarySupply:150,
  EpicSupply:250, // change values here
  RareSupply:350,
  UncommonSupply:400,
  CommonSupply:500,

  leader_items_cost: 5000,
  legendary_items_cost: 3500, //replace cost here
  epic_items_cost: 2800,
  rare_items_cost: 2300,
  uncommon_items_cost: 1800,
  common_items_cost: 1250 
}
  export {config , social, dex}


