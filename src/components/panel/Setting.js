import React, {useState} from "react";
import { UpdateUser } from "../../config/Auth";

export function SetProfil()
{
    const [ response, setResponse ] = useState();
    const [ inputs, setInputs ] = useState(
        {
            fname : sessionStorage.getItem('fname'),
            lname : sessionStorage.getItem('lname'),
            sex : sessionStorage.getItem('sex'),
            phone : sessionStorage.getItem('phone'),
        }
    );

    const handleInputs = ( event ) => {
        const { name , value } =  event.target ;
        setInputs( { ...inputs, [name] : value  } ) ; 
    }

    const handleForm = async ( event ) => {

        event.preventDefault();
        try {
            await UpdateUser( inputs )
            sessionStorage.setItem("fname", inputs.fname );
            sessionStorage.setItem("lname", inputs.lname );
            sessionStorage.setItem("phone", inputs.phone );
            sessionStorage.setItem("sex", inputs.sex );
            setResponse(1)
            }catch (err) {
            setResponse(0)
        }     
    }
    
    
  
    return(

        <div className="container pb-5 pt-4">
            <div className="row d-flex justify-content-between mb-5">  
                
                {/* ********************************************************************************************* */}
                <div className="col-lg-8 d-flex flex-column">

                    <div className="bg-white rounded-2 border mb-4 px-4">
                        <div className="row d-flex flex-column p-4"> 
                            <div className="col-12 d-flex border-bottom mb-2"> <span className={"py-2 px-3 fs bold color-gray" } > Information personnelle </span> </div>
                        </div>
                        {/* ********************************************************************************************* */}
                        <div className="px-4 d-flex flex-column ">    
                            <div className="row mb-3" >
                                <div className="col-md-4" > <div className="rounded-2 bg-second p-2 border"> <span className="color-fifth"> Prenom : </span> </div> </div>
                                <div className="col-md-8" > <div className="rounded-2 bg-second p-2 border"> <span className="color-gray"> { sessionStorage.getItem('fname') } </span> </div> </div>
                            </div>
                            <div className="row mb-3" >
                                <div className="col-md-4" > <div className="rounded-2 bg-second p-2 border"> <span className="color-fifth"> Nom : </span> </div> </div>
                                <div className="col-md-8" > <div className="rounded-2 bg-second p-2 border"> <span className="color-gray"> { sessionStorage.getItem('lname') } </span> </div> </div>
                            </div>
                            <div className="row mb-3" >
                                <div className="col-md-4" > <div className="rounded-2 bg-second p-2 border"> <span className="color-fifth"> Sexe : </span> </div> </div>
                                <div className="col-md-8" > <div className="rounded-2 bg-second p-2 border"> <span className="color-gray"> { sessionStorage.getItem('sex') } </span> </div> </div>
                            </div>
                            <div className="row mb-5" >
                                <div className="col-md-4" > <div className="rounded-2 bg-second p-2 border"> <span className="color-fifth"> Téléphone : </span> </div> </div>
                                <div className="col-md-8" > <div className="rounded-2 bg-second p-2 border"> <span className="color-gray">  { sessionStorage.getItem('phone') }  </span> </div> </div>
                            </div>
                        </div>
                    </div>
                    {/* ********************************************************************************************* */}
                    <div className="bg-white rounded-2 border mb-4">
                        <div className="row d-flex flex-column p-4"> 
                            <div className="col-12 d-flex border-bottom mb-2"> <span className={"py-2 px-3 fs bold color-gray" } > Statistique </span> </div>
                        </div>
                        {/* ********************************************************************************************* */}
                        <div className="px-4 d-flex flex-column ">
                            
                        </div>
                    </div>

                </div>

                {/* ********************************************************************************************* */}
                <div className="col-lg-4 d-flex flex-column"> 

                    {/* ********************************************************************************************* */}
                    <div className="border d-flex flex-column bg-white rounded-2 p-4 mb-4"> 
                        <div className="mb-3" > <span className="fs bold color-gray"> Modifier les informations </span> </div>
                        
                        {/* ************************************************************************ */}
                        <div className="mb-3" >
                        {
                            ( response === 1 )  ?
                            ( <div className='alert alert-success'> Information modifié avec success </div> ) :
                            ( response === 0 ) ?
                            ( <div className='alert alert-danger'> Une erreur est survenue lors de la mise à jour. Veillez réessayer à nouveau.  </div> ) : null
                        }
                     </div>

                        <form className="">
                            <div className="row" >
                                {/* ************************************************************************ */}
                                <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                    <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Prénom </span>
                                    <input type="text" name="fname" value={ inputs.fname } className="form-control" placeholder="prénom" required onChange={ handleInputs } /> 
                                </div>
                                {/* ************************************************************************ */}
                                <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                    <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Nom </span>
                                    <input type="text" name="lname" value={ inputs.lname } className="form-control" placeholder="nom" required onChange={ handleInputs } />
                                </div>
                                {/* ************************************************************************ */}
                                <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                    <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Sexe </span>
                                    <select class="form-select" name='sex' value={ inputs.sex } aria-label="Default select example" required onChange={ handleInputs }  >
                                        <option value="feminin" > Féminin </option>
                                        <option value="masculin" > Masculin </option>
                                        <option value="feminin" > Féminin </option>
                                    </select>
                                </div>
                                {/* ************************************************************************ */}
                                <div className="col-lg-12 mb-3 form-outline  d-flex flex-column"> 
                                    <span className="fs-xs color-gray text-start mb-1 border-left px-2" > Numéro de téléphone </span>
                                    <input type="text" name="phone" value={ inputs.phone } className="form-control" placeholder="770000000" onChange={ handleInputs } />
                                </div>
                                {/* ************************************************************************ */}
                                <div className="col-lg-12 form-outline d-flex flex-column"> 
                                    <div className="d-flex justify-content-end"> 
                                        <button onClick={ handleForm } className="btn btn-fifth"> Enregistrer </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    )
}