const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mandip:mandip@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  try{
    await client.connect();
     const db=client.db("hospital");
     console.log(`connected to database ${db.databaseName}`)
     
     //  1) step creating collection 
  /*
     const collection=db.createCollection("disease");
     console.log(`collection created ${(await collection).collectionName}`)
     
  */
    
    const disease=db.collection("disease")
  
    /*
  
   // 2) insert  documents into collection
      const insertCursor= await disease.insertMany([
    {
        name:"Chickenpox",
        symptoms:"spots with a blister ",
        spread_by:["Coughing", "sneezing ","contact with weeping blisters"],
        causes:"infection with VZV"
    },
    {
        name:"Malaria",
        symptoms:["fever","headache","muscle pain","cough"],
        spread_by:["night-biting of mosquitoes","dirty water"],
        causes:"mosquito transmission"
    },
    {
        name:"COVID-19",
        symptoms:["fever","dry cough","tiredness","sore throat"],
        spread_by:["droplet contact","airbone transmission"],
        causes:"infection with coronavirus"
    },
    {   name:"asthma",
        symptoms:["shortness of breath","chest pain","wheezing"],
        spread_by:["environmental factors","hereditary factor"],
        causes:"allergens or respiratory infection"
    },
    {    name:"typhoid",
         symptoms:["weakness"," abdominal pain","constipation","headaches"],
         spread_by:["contaminated foodor water","direct contact with infected person","poor sanitation"],
         causes:"bacteria infection"
    },
    {    name:"diabetes",
         symptoms:["increased thirst and urination","fatigue","blurred vision","sores that do not heal"],
         spread_by:["environmental factors","hereditary factor"],
         causes:"chronic condition"
        }
              
  ])
  
  
  console.log(insertCursor.insertedCount)
  */
  
  // 3) finding the document 
  
  //const searchCursor =await disease.find();
  const searchCursor =await disease.find({"name":"asthma"});
  const result=await searchCursor.toArray();
  result.forEach(r=>console.log(r));
  console.table(result)
  
  
  // 4)  updating the document
  /*
  const updateCursor=await disease.updateOne(
    {"name":"Chickenpox"},
    {"$set":{"causes":"infection with VZV bacteria"}}
  )
  console.log(updateCursor.modifiedCount);
  
  */
  
  //deleting the document
  /*
  const deleteCursor=await disease.deleteOne(
      {"name":"diabetes"}
   
  )
  console.log(deleteCursor.deletedCount)
  */
  }
  
  
  catch(ex){
    console.error(`something bad happen ${ex}`)
  }
  
  finally{
    client.close();
  }
  
  }
  connect();
   
  
  