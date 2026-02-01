import{ connection, collectionName, ObjectId} from "../models/todoModel.js";


export const listTodo= async(req, res) => {
    const db=await connection();
    const collection=db.collection(collectionName);
    const result=await collection.find().toArray();
    // console.log(result);


    res.render('list',{result});
}

export const addPage = (req, res) => {
    res.render('add');
};

export const addTodo = async(req, res) => {
    const db=await connection();
    const collection=db.collection(collectionName);
    const result=collection.insertOne(req.body)

    if(result){
         res.redirect('/');
    }
    else{
        res.redirect('/add');
    }
    
};

export const deleteTodo = async(req, res) => {
    const db=await connection();
    const collection=db.collection(collectionName);
    const result=collection.deleteOne({_id:new ObjectId(req.params.id)})

    if(result){
         res.redirect('/');
    }
    else{
        res.send ('/some error');
    }

};

export const updatePage = async(req, res) => {
    const db=await connection();
    const collection=db.collection(collectionName);
    const result=await collection.findOne({_id:new ObjectId(req.params.id)})
     
    // console.log(result)
    if(result){
         res.render('update',{result});
    }
    else{
        res.send ('some error');
    }
  
};

export const updateTodo = async(req, res) => {
    const db=await connection();
    const collection=db.collection(collectionName);

    const filter={_id: new ObjectId(req.params.id)}
    const updatedata={$set:{task:req.body.task,description:req.body.description}}
    const result=await collection.updateOne(filter,updatedata)
      
    if(result){
         res.redirect("/");
    }
    else{
        res.redirect ("some error");
    }
};
