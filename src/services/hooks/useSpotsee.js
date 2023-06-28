// import { useState, useEffect } from 'react';
// import { fetchUserData } from './service'; 

// const useSpotsee = (userId) => {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await fetchUserData(userId); // call the function to import user ID
//         console.log(data)
//         setUserData(data);
//       } catch (error) {
//         // Gère les erreurs de manière appropriée
//         console.error('Une erreur s\'est produite lors de la récupération des données utilisateur :', error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   //retrive username
//   const userName = userData ? userData.userInfos.firstName : ''

//   return {
//     userData,
//     userName,
//   };
// };

// export default useSpotsee;
