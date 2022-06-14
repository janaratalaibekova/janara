import React , {useState} from 'react';
import Post from '../../Post/Post';
//   1
// const Main = () => {
//    const[score, setScore] = useState(0) 
// //    const addOne = () => {
// //        if(score <5 )
// //        setScore(score + 1)
// //        const removeOne = () => {
// //         setScore(score -1)
// //    }}

//    return (
//       <main>
//         <h1>{score}</h1>
//         <button onClick={() => setScore(score + 1) }>+{score}</button>
//         <button onClick={() => setScore(score - 1) }>-{score}</button>
//       </main>
//     );
// };


// 1

const Main = (props) => {
    // const posts = [
    //     {
    //         id : 1,
    //         descr : "description1",
    //         title : "title1",
    //     },
    //     {
    //         descr : "description2",
    //         title : "title2",
    //     },
    //     {
    //         descr : "description3",
    //         title : "title3",
    //     },


    // ]
   let post1 ={
         id : 1,
           descr : "description1",
           title : "title1",
   }
   let post2 ={
         id : 1,
        descr : "description2",
         title : "title2",
    }
    let post3 ={
      id : 1,
      descr : "description3",
      title : "title3",
}



    return (
       <main>
      <Post  title={post1.title} descr={post1.descr}/>
      <Post  title={post2.title} descr={post2.descr}/>
      <Post  title={post3.title} descr={post3.descr}/>
       </main>
    )
};


export default Main;