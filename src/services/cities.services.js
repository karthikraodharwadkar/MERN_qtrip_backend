const AdvenutureModel = require("../models/adventure.model");
const CityModel = require("../models/cities.model");
const DetailModel = require("../models/detail.model");
const FormDataModel = require("../models/formData.model");

const getAllCities = async()=>{
    let response = await CityModel.find({})
    return response;
}

const getCityAdventures = async(city)=>{
    let response = await AdvenutureModel.find({id:city})
    return response
}

const getDetailList = async(adventure)=>{
    let response = await DetailModel.find({id:adventure})
    return response
}

const postData=async(data)=>{
    let response = await FormDataModel.create({
        name:data.name,
        date:data.date,
        personcount:data.personcount,
        adventure:data.adventure,
        priceperhead:data.priceperhead,
        adventureId:data.adventureId
    })
    await response.save()
    return response
}

const getUsersData=async()=>{
    let response = await FormDataModel.find({})
    return response
}

module.exports = {getAllCities,getCityAdventures,getDetailList,postData,getUsersData}