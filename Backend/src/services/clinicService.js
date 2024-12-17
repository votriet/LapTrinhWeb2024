const db = require("../models")

let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.address
                || !data.imageBase64
                || !data.descriptionHTML
                || !data.descriptionMarkdown
            ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                await db.Clinic.create({
                    name: data.name,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })
                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

// let getAllClinic = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let data = await db.Clinic.findAll({
               
//             });
//             if (data && data.length > 0) {
//                 data.map(item => {
//                     item.image = new Buffer(item.image, 'base64').toString('binary');
//                     return item;
//                 })
//             }

//             resolve({
//                 errCode: 0,
//                 errMessage: 'OK',
//                 data
//             })

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// let getDetailClinicById = (inputId, location) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if(!inputId || !location) {
//                 resolve({
//                     errCode: 1,
//                     errMessage: 'Missing parameter'
//                 })
//             }else{
//                 let data = await db.Clinic.findOne({
//                         where: {
//                             id: inputId
//                         },
//                         attributes: ['descriptionHTML', 'descriptionMarkdown'],
//                     })

//                     if(data) {
//                         let doctorClinic = [];
//                         if(location === 'ALL'){
//                             doctorClinic = await db.Doctor_Infor.findAll({
//                                 where: {clinicId: inputId},
//                                 attributes: ['doctorId', 'provinceId'],
//                             })
//                         }else{
//                             doctorClinic = await db.Doctor_Infor.findAll({
//                                 where: {
//                                     clinicId: inputId,
//                                     provinceId: location
//                                 },
//                                 attributes: ['doctorId', 'provinceId'],
//                             })
//                         }

//                         data.doctorClinic = doctorClinic;
//                     }else data = {}
                    
//                 resolve({
//                     errMessage: 'OK',
//                     errCode: 0,
//                     data
//                 })
            
//             }
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

module.exports = {
    createClinic: createClinic,
    // getAllClinic: getAllClinic,
    // getDetailClinicById: getDetailClinicById
}