import React, { useEffect, useState } from "react";
import { NavBarPanel } from "../components/navs/NavBar";
import { Footer } from "../components/Footer";
import axios from 'axios';
import Lottie from "lottie-react";
import leaf from '../assets/leaf.json';


// TO BE REMOVED
const data = [

    {
        "conversation_id" : "AA123456BT78906RE",
        "response" : "coversation 1 cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start",
        "messages" : [
            {
                "role" : "user",
                "content" : "question 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline ",      
            },
            {
                "role" : "assistant",
                "content" : "answer 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
            },
            {
                "role" : "user",
                "content" : "question 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
            },
            {
                "role" : "user",
                "content" : "question 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "    
            }
        ]
    },
    {
        "conversation_id" : "BB123456BT78906RE",
        "response" : "coversation 2 cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start",
        "messages" : [
            {
                "role" : "user",
                "content" : "question 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline ",      
            },
            {
                "role" : "assistant",
                "content" : "answer 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
            },
            {
                "role" : "user",
                "content" : "question 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
            },
            {
                "role" : "user",
                "content" : "question 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "    
            }
        ]
    }
];

// TO BE REMOVED
const conv =     {
    "conversation_id" : "AA123456BT78906RE",
    "response" : "coversation 1 cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start",
    "messages" : [
        {
            "role" : "user",
            "content" : "question 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline ",      
        },
        {
            "role" : "assistant",
            "content" : "answer 1 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
        },
        {
            "role" : "user",
            "content" : "question 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
        },
        {
            "role" : "user",
            "content" : "answer 2 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "    
        },
        {
            "role" : "user",
            "content" : "question 3 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline ",      
        },
        {
            "role" : "assistant",
            "content" : "answer 3 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
        },
        {
            "role" : "user",
            "content" : "question 4 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "     
        },
        {
            "role" : "user",
            "content" : "answer 4 : rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline rounded-2 fs-s cursor outline border px-2 py-1 color-gray text-start rounded-2 fs-s cursor outline "    
        }
    ]
}

export function ChatBot()
{

    const [ message, setMessage ] = useState('') // value of the input form as a question

    const [ state, setState ] = useState(false) // show if the user is in a new or an old discussion

    const [ allDiscussions, setAllDiscussions ] = useState(data) // get all informations

    const [ currentDiscussion , setCurrentDiscussion ] = useState()  // it save the current discussion

    const [ idCurrentDiscussion , setIdCurrentDiscussion ] = useState(0) // it save the ID of the current discussion



    const handleInputs = ( event )=>{ setMessage( event.target.value ) }
    
    // It sends the user's question to the API
    const sendMessage = async ( event )=>{
        event.preventDefault();
        console.log(message) // TO BE REMOVED
        console.log(idCurrentDiscussion) // TO BE REMOVED
        setCurrentDiscussion( conv ); // TO BE REMOVED
        const data = {
            "question" : message,
            "conversation_id" : idCurrentDiscussion
        };
        // const apiUrl = `http://127.0.0.1:8001/chat`;
        // const res = await axios.post(apiUrl, data);
        // setCurrentDiscussion(res.data);
        setState(true);
        setMessage('');
        // console.log(res.data)
    }

    // it gets a discussion from its id
    const getDiscussionById = async ( convid )=>{
        console.log( convid )  // TO BE REMOVED
        setCurrentDiscussion( conv ); // TO BE REMOVED
        // const apiUrl = `http://127.0.0.1:8001/conversations/${ convid }`;
        // const res = await axios.get(apiUrl);
        // setCurrentDiscussion(res.data);
        setState(true);
        setIdCurrentDiscussion( convid )
        // console.log(res.data)
    }


    useEffect( ()=>{

        // const fetchtAllDiscussions = async ()=>{
        //     const apiUrl = `http://127.0.0.1:8001/conversations`;
        //     const res = await axios.get(apiUrl);
        //     setAllDiscussions(res.data);
        //     // console.log(res.data)
        // }


        // fetchtAllDiscussions(); 

    } , [state])


    // This is for new discussion
    const createDiscussion = ()=>{
        setIdCurrentDiscussion(0)
        setState(false)
    }    


    const [menuBtnState , setMenuBtnState] = useState(false);



    return (

        <div className="bg-second">

            <NavBarPanel />

            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-3 col-lg-2 border-end border-bottom py-3" >
                        <span className="menu-btn cursor" onClick={ ()=>{ setMenuBtnState( !menuBtnState ) } }> <img src='/img/icons8-menu-96.png' width={25} height={25} alt="Logo"  className="img-center" /> </span>
                        <div className={ !menuBtnState ? "hide-md" : null } >
                            <div className="d-flex flex-column pt-2 pb-4 hide-md" >
                                <button type="submit" className="btn btn-fifth mb-4" onClick={ createDiscussion } > + Discussion </button>
                                {
                                    ( Array.isArray( allDiscussions ) && allDiscussions.length > 0 ) ?
                                    (
                                        allDiscussions.map(( item , index )=>{
                                            return(
                                                <div className="mb-2 rounded-2 fs-s cursor outline border p-2 color-gray text-start" key={ index } onClick={ ()=>{ getDiscussionById( item.conversation_id ) } } > < TextReducer text={ item.response } maxsize={20} /> </div>
                                            )
                                        })
                                    ) : null
                                }    
                            </div>
                        </div>
                    </div>
                    {/* ******************************************************************************** */}
                    <div className="col-md-9 py-5 col-lg-10 vh-100 d-flex justify-content-center align-items-center scrollable-container" >
                        <div className="row p-4 w-100 d-flex justify-content-center" >

                            {
                                !state ? (
                                    
                                    <div className="col-md-10 mb-4 d-flex flex-column justify-content-center align-items-center"> 
                                        <div className="row d-flex justify-content-center" > 
                                            <div className="col-3 sml-size mb-3" > <Lottie animationData={ leaf } /> </div>
                                        </div>
                                        <span className="color-fifth ps-2 mb-1"> Agro-space vous propose Jaari </span> 
                                        <span className="color-fifth ps-2 mb-3"> un chatbot conçu exclusivement pour des activités agricoles  </span> 
                                        <div className="d-flex rounded-5 bg-second px-5 py-4 border" > <span className="color-gray fs"> Posez des questions qui vous préoccupent en rapprt avec l'itinéraire technique des cultures </span> </div>
                                    </div>

                                ) : 
                                (
                                    ( typeof currentDiscussion === "object" && currentDiscussion !== null && Object.keys( currentDiscussion ).length >= 0 ) ? (

                                        currentDiscussion.messages.map(( item , index )=>{
                                            return(
                                                <div className="col-12 mt-4" > 
                                                    <span className={ !(index % 2 === 0 ) ?  "py-1 px-3 mb-1 ms-2 bg-fourth color-white fs-s rounded-2" : "fs-s color-gray border-left ps-1 ms-2" }>  { !(index % 2 === 0 ) ? "La réponse" : "La question"  }  </span> 
                                                    <div className= { !( index % 2 === 0 ) ? "d-flex rounded-2 bg-white p-3 mt-1 border" : "d-flex rounded-2 p-3 mt-1 border" } > <span className="color-gray fs-s mb-3" > { item.content } </span> </div>
                                                </div> 
                                            )
                                        })

                                    ) : null 
 
                                )
                            }

                        </div>   
                    </div>
                </div>
            </div>

            {/* ************************************* SUBMISSION FORM ******************************************* */}
            <div className="fixed-box"> 
                <div className="row d-flex justify-content-center"> 
                    <div className="col-md-9"> 
                        <div className="row"> 
                            <div className="col-12"> 
                                <div className="d-flex align-items-center w-100 p-3 shadow rounded-5 bg-white">
                                    <input type="text" name="msg" value={ message } className="input-default w-100 color-gray px-3" placeholder="Entrer votre text ici ..." required onChange={ handleInputs } /> 
                                    <button className="btn-sm-rounded bg-fourth btn" onClick={ sendMessage } > <img src='/img/icons8-envoyé-96.png' width={25} height={25} alt="Logo"  className="img-center" /> </button>
                                </div>
                            </div>
                        </div> 
                    </div>       
                </div>
            </div>

            {/* **************************************************************************************************************** */}
            <div className="container-fluid bg-darks" >
                <Footer />
            </div>

        </div>
    )
}




export function TextReducer({text, maxsize}) 
{
    if ( text.length <= maxsize ) return ( <span > { text }  </span> )
    else{
        const reducer = text.slice(0, maxsize) + '...';
        return ( <span > { reducer }  </span> )
    }
}