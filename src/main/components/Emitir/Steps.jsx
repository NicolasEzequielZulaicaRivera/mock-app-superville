import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cotizacionesActions from 'cotizaciones/cotizaciones.actions';


function Step1(props){

    
    const [ state , setState ] = useState({
        name: "",
        surname: "",
        documentType: "",
        documentNumber: "",
        idType: "",
        idNumber: "",
        email: "",
        areaCode:"",
        phone:"",
        ...props
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }
    
    return (
		<div className="form">

			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Nombre</label></div>
					<div className="f-row">
						<div className="f-row">
							<input type="text" placeholder="" name="name" value={state.name} onChange={handleInputChange}/>
						</div>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Apellido</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="surname" value={state.surname} onChange={handleInputChange}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Documento de identidad</label></div>
					<div className="f-row">
						<select name="documentType" value={state.documentType} onChange={handleInputChange}>
							<option value="">Tipo</option>
							<option value="DNI">DNI</option>
						</select>
						<input type="text" placeholder="Numero" name="documentNumber" value={state.documentNumber} onChange={handleInputChange}/>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Codigo de identificacion</label></div>
					<div className="f-row">
						<select name="idType" value={state.idType} onChange={handleInputChange}>
							<option value="">Tipo</option>
							<option value="1">COD</option>
						</select>
						<input type="text" placeholder="Numero" name="idNumber" value={state.idNumber} onChange={handleInputChange}/>
					</div>
				</div>
			</div>
			<div className="f-label"><label >Correo electronico</label></div>
			<div className="f-row">
				<input type="text" placeholder="" name="email" value={state.email} onChange={handleInputChange}/>
			</div>
			<div className="f-label"><label >Telefono</label></div>
			<div className="f-cols">
				<div className="f-col w30">
					<div className="f-row"><input type="text" placeholder="Cod. area" name="areaCode" value={state.areaCode} onChange={handleInputChange}/></div>
				</div>
				<div className="f-col">
					<div className="f-row"><input type="number" placeholder="Numero" name="phone" value={state.phone} onChange={handleInputChange}/></div>
				</div>
			</div>
			
		</div>
	)
}

function Step2(props){

    const [ state , setState ] = useState({
        riskDirection: {province: props.province,city: "",street: "",numstreet: "",floor: "",dept: "",postalCode: "",},
        sameDir: true,
        clientDirection: {province: props.province,city: "",street: "",numstreet: "",floor: "",dept: "",postalCode: "",},
        ...props,
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }
    const dirChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name.split(".");

        const dir = name[0];
        const prop = name[1];

        const newDir = { ...state[dir] , [prop]:value }

        setState( {...state, [dir]: newDir } )
    }

	return (
		<div className="form">

			<h5>Direccion del riesgo</h5>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="riskDirection.province" value={state.riskDirection.province} onChange={dirChange}>
							<option value="BsaAs">Buenos Aires</option>
							<option value="Mendoza">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.city" value={state.riskDirection.city} onChange={dirChange}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Calle</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.street" value={state.riskDirection.street} onChange={dirChange}/>
					</div>
				</div>
				<div className="f-col w40">
					<div className="f-label"><label >Numero</label></div>
					<div className="f-row">
						<input type="number" placeholder="Numero" name="riskDirection.numstreet" value={state.riskDirection.numstreet} onChange={dirChange}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col f-cols">
					<div className="f-col">
						<div className="f-label"><label >Piso</label></div>
						<div className="f-row">
							<input type="text" placeholder="" name="riskDirection.floor" value={state.riskDirection.floor} onChange={dirChange}/>
						</div>
						<span className="anotation"> Solo si corresponde </span>
					</div>
					<div className="f-col">
						<div className="f-label"><label >Depto</label></div>
						<div className="f-row">
							<input type="text" placeholder="" name="riskDirection.dept" value={state.riskDirection.dept} onChange={dirChange}/>
						</div>
					</div>
				</div>		
				<div className="f-col">
					<div className="f-label"><label >Codigo postal(opcional)</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.postalCode" value={state.riskDirection.postalCode} onChange={dirChange}/>
					</div>
				</div>
			</div>

			<div className="f-check-row">
				<input type="checkbox" className="checkbox" 
                name="sameDir" onChange={handleInputChange}
                checked={state.sameDir} 
            />
				Utiliza la misma direccion para el cliente
			</div>

            { state.sameDir?"":(
            
            <div className="m-top">
                
                <h5>Direccion del cliente</h5>
                <div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="clientDirection.province" value={state.clientDirection.province} onChange={dirChange}>
							<option value="BsaAs">Buenos Aires</option>
							<option value="Mendoza">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="clientDirection.city" value={state.clientDirection.city} onChange={dirChange}/>
					</div>
				</div>
			</div>
                <div className="f-cols">
                    <div className="f-col">
                        <div className="f-label"><label >Calle</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" name="clientDirection.street" value={state.clientDirection.street} onChange={dirChange}/>
                        </div>
                    </div>
                    <div className="f-col w40">
                        <div className="f-label"><label >Numero</label></div>
                        <div className="f-row">
                            <input type="number" placeholder="Numero" name="clientDirection.numstreet" value={state.clientDirection.numstreet} onChange={dirChange}/>
                        </div>
                    </div>
                </div>
                <div className="f-cols">
                    <div className="f-col f-cols">
                        <div className="f-col">
                            <div className="f-label"><label >Piso</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" name="clientDirection.floor" value={state.clientDirection.floor} onChange={dirChange}/>
                            </div>
                            <span className="anotation"> Solo si corresponde </span>
                        </div>
                        <div className="f-col">
                            <div className="f-label"><label >Depto</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" name="clientDirection.dept" value={state.clientDirection.dept} onChange={dirChange}/>
                            </div>
                        </div>
                    </div>		
                    <div className="f-col">
                        <div className="f-label"><label >Codigo postal(opcional)</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" name="clientDirection.postalCode" value={state.clientDirection.postalCode} onChange={dirChange}/>
                        </div>
                    </div>
                </div>

            </div>

            )}

		</div>
	)
}

function Step3(props){

    const [ state , setState ] = useState({
        cardType: "Debito",
        creditCard: "",
        bank: "",
        cbu: "",
        cardNumber: "",
        cardExpiration: "",
        ...props,
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }

	return (
		<div className="form">

            <div className="f-cols">
                <div className="f-col w50">
                    <div className="f-label"><label> Tipo </label></div>
                    <div className="f-row">
                        <select name="cardType" value={state.cardType} onChange={handleInputChange}>
                            <option value="Debito" >Debito</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                { state.cardType === "Credito"?
                (
                <div className="f-col w50">
                    <div className="f-label"><label> Tarjeta </label></div>
                    <div className="f-row">
                        <select name="creditCard" value={state.creditCard} onChange={handleInputChange} >
                            <option value="" >Seleccionar tipo</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                ):""}
                
            </div>
            
            { state.cardType === "Credito"?
            ( <div>
                <div className="f-label"><label> Numero </label></div>

                <div className="f-row">
                    <input type="text" placeholder="" name="cardNumber" value={state.cardNumber} onChange={handleInputChange} />
                </div>

                <div className="f-label"><label> Vencimiento </label></div>
                <div className="f-row w30">
                    <input type="text" placeholder="MM/AA"  name="cardExpiration" value={state.cardExpiration} onChange={handleInputChange}/>
                </div>
            </div> ):
            ( <div>
                <div className="f-label"><label> Banco </label></div>

                <div className="f-row">
                    <select name="bank" value={state.bank} onChange={handleInputChange}>
                        <option value="">Seleccionar banco</option>
                        <option value="BBVA">BBVA</option>
                    </select>
                </div>

                <div className="f-label"><label> CBU </label></div>
                <div className="f-row">
                    <input type="text" placeholder="" name="cbu" value={state.cbu} onChange={handleInputChange}/>
                </div>
            </div> )
            }

		</div>
	)
}


export function GetStep( {i,...props} ) {


    if( i===0 ) return <Step1 {...props} />
    if( i===1 ) return <Step2 {...props} />
    if( i===2 ) return <Step3 {...props} />

	return ( <Step3 {...props} /> )
}