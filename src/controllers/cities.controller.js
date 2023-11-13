//const AdvenutureModel = require("../models/adventure.model")
const {getAllCities,getCityAdventures,getDetailList,postData,getUsersData} = require("../services/cities.services")

const getCitiesList = async(req,res)=>{
    try{
        let response = await getAllCities()
        res.status(200).json(response)  
    }
    catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}

const getAdventuresList = async(req,res)=>{
    try{
        let {city}=req.query
        let response = await getCityAdventures(city)
        res.status(200).json(response)  
    }
    catch(error){
        console.log(error)
        res.status(404).json(error)
    }
}

const getAdventureDetail=async(req,res)=>{
    try{
        let {adventure} = req.query;
        let response = await getDetailList(adventure);
        res.status(200).json(response)
    }
    catch(error){
        res.status(404).json(error)
    }
}

const postUserFormdata=async(req,res)=>{
    try{
        let response = await postData(req.body)
        res.status(201).json(response)
    }
    catch(error){
        res.status(404).json(error)
    } 
}

const getTableData=async(req,res)=>{
    try{
        let response = await getUsersData()
        res.status(200).json(response)
    }
    catch(error){
        res.status(404).json(error)
    }
}

module.exports = {getCitiesList,getAdventuresList,getAdventureDetail,postUserFormdata,getTableData}