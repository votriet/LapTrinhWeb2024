 import bcrypt from 'bcryptjs';
 import db from '../models/index';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    let hashPasswordFromBcrypt =await hashUserPassword(data.password);
    console.log('data from service')
    console.log(data)
    console.log(hashPasswordFromBcrypt)
     return new Promise(async(resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })
            resolve('Create a new user succeed');
        } catch (e) { 
            reject(e);
            
        }
     })
}
//hàm mã hóa password lưu trong db
let hashUserPassword = (password) => {
    return new Promise( async(resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

// let getAllUser = (req, res) => {
//     return new Promise((resolve, reject) => {
//         try {
//             let users = db.User.findAll({
//                 raw : true,
//             });
//             resolve(users)
//         } catch (e) {
//             reject(e);
            
//         }
//     })
// }
// let getUserInfoById = (userId) => {
//     return new Promise( (resolve, reject) => {
//         try {
//             let user = db.User.findOne({
//                 where: {id : userId},
//                 raw : true,
//             });
//             if(user) {
//                 resolve(user)
//             }else{
//                 resolve({})
//             }
            
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// let updateUserData = (data) => {
//     return new Promise(async(resolve, reject) => {
//         try {
//             let user = await db.User.findOne({
//                 where: {id: data.id}
//             })
//             if(user) {
//                 user.firstName = data.firstName;
//                 user.lastName = data.lastName;
//                 user.address = data.address;
//                 user.phoneNumber = data.phoneNumber;

//                 await user.save();
//                 let allUsers = await db.User.findAll();
//                 resolve(allUsers);
//             }else{
//                 resolve();
//             }
//         } catch (e) {
//             reject(e);
            
//         }
//     })
// }

// let deleteUserById = (userId) => {
//     return new Promise(async(resolve, reject) => {
//         try {
//             let user = await db.User.findOne({
//                 where: {id : userId}
//             })
//             if (user) {
//                 await user.destroy();
//             }
//             resolve();
//         } catch (e) {
//             reject(e);
            
//         }
//     })
// }

module.exports = {
    createNewUser: createNewUser,
    // getAllUser: getAllUser,
    // getUserInfoById: getUserInfoById,
    // updateUserData: updateUserData,
    // deleteUserById: deleteUserById,
}