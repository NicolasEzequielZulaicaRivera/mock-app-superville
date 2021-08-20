import React, { useState } from "react"


function Step1(props){
	
    const [ state , setState ] = useState({
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        tipoID: "",
        numeroID: "",
        email: "",
        codArea:"",
        telefono:"",
        ...props
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }
    
    return (
		<div className="form"><form>

			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Nombre</label></div>
					<div className="f-row">
						<div className="f-row">
							<input type="text" placeholder="" name="nombre" value={state.nombre} onChange={handleInputChange}/>
						</div>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Apellido</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="apellido" value={state.apellido} onChange={handleInputChange}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Documento de identidad</label></div>
					<div className="f-row">
						<select name="tipoDocumento" value={state.tipoDocumento} onChange={handleInputChange}>
							<option value="">Tipo</option>
							<option value="DNI">DNI</option>
						</select>
						<input type="text" placeholder="Numero" name="numeroDocumento" value={state.numeroDocumento} onChange={handleInputChange}/>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Codigo de identificacion</label></div>
					<div className="f-row">
						<select name="tipoID" value={state.tipoID} onChange={handleInputChange}>
							<option value="">Tipo</option>
							<option value="1">COD</option>
						</select>
						<input type="text" placeholder="Numero" name="numeroID" value={state.numeroID} onChange={handleInputChange}/>
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
					<div className="f-row"><input type="text" placeholder="Cod. area" name="codArea" value={state.codArea} onChange={handleInputChange}/></div>
				</div>
				<div className="f-col">
					<div className="f-row"><input type="number" placeholder="Numero" name="telefono" value={state.telefono} onChange={handleInputChange}/></div>
				</div>
			</div>
			
		</form></div>
	)
}

function Step2(props){

    const [ state , setState ] = useState({
        dirRiesgo: {provincia: "BsAs",ciudad: "",calle: "",numCalle: "",piso: "",depto: "",cp: "",},
        mismaDir: true,
        dirCliente: {provincia: "BsAs",ciudad: "",calle: "",numCalle: "",piso: "",depto: "",cp: "",},
        ...props
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }

	return (
		<div className="form"><form>

			<h5>Direccion del riesgo</h5>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="prov">
							<option value="0">Buenos Aires</option>
							<option value="1">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Calle</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
				<div className="f-col w40">
					<div className="f-label"><label >Numero</label></div>
					<div className="f-row">
						<input type="number" placeholder="Numero" />
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col f-cols">
					<div className="f-col">
						<div className="f-label"><label >Piso</label></div>
						<div className="f-row">
							<input type="text" placeholder="" />
						</div>
						<span className="anotation"> Solo si corresponde </span>
					</div>
					<div className="f-col">
						<div className="f-label"><label >Depto</label></div>
						<div className="f-row">
							<input type="text" placeholder="" />
						</div>
					</div>
				</div>		
				<div className="f-col">
					<div className="f-label"><label >Codigo postal(opcional)</label></div>
					<div className="f-row">
						<input type="text" placeholder="" />
					</div>
				</div>
			</div>

			<div className="f-check-row">
				<input type="checkbox" className="checkbox" 
                name="mismaDir" onChange={handleInputChange}
                checked={state.mismaDir} 
            />
				Utiliza la misma direccion para el cliente
			</div>

            { state.mismaDir?"":(
            
            <div className="m-top">
                
                <h5>Direccion del cliente</h5>
                <div className="f-cols">
                    <div className="f-col">
                        <div className="f-label"><label >Provincia</label></div>
                        <div className="f-row">
                            <select name="prov">
                                <option value="0">Buenos Aires</option>
                                <option value="1">Mendoza</option>
                            </select>
                        </div>
                    </div>
                    <div className="f-col">
                        <div className="f-label"><label >Ciudad</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className="f-cols">
                    <div className="f-col">
                        <div className="f-label"><label >Calle</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="f-col w40">
                        <div className="f-label"><label >Numero</label></div>
                        <div className="f-row">
                            <input type="number" placeholder="Numero" />
                        </div>
                    </div>
                </div>
                <div className="f-cols">
                    <div className="f-col f-cols">
                        <div className="f-col">
                            <div className="f-label"><label >Piso</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" />
                            </div>
                            <span className="anotation"> Solo si corresponde </span>
                        </div>
                        <div className="f-col">
                            <div className="f-label"><label >Depto</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                    </div>		
                    <div className="f-col">
                        <div className="f-label"><label >Codigo postal(opcional)</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                </div>

            </div>

            )}

		</form></div>
	)
}

function Step3(props){

    const [ state , setState ] = useState({
        tipoTarjeta: "Debito",
        tarjetaTarjeta: "",
        banco: "",
        cbu: "",
        numeroTarjeta: "",
        vencimientoTarjeta: "",
        ...props
    })

    const handleInputChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState( {...state, [name]: value } )
    }

	return (
		<div className="form"><form>

			

            <div className="f-cols">
                <div className="f-col w50">
                    <div className="f-label"><label> Tipo </label></div>
                    <div className="f-row">
                        <select name="tipoTarjeta" value={state.tipoTarjeta} onChange={handleInputChange}>
                            <option value="Debito" >Debito</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                { state.tipoTarjeta === "Credito"?
                (
                <div className="f-col w50">
                    <div className="f-label"><label> Tarjeta </label></div>
                    <div className="f-row">
                        <select name="tarjetaTarjeta" value={state.tarjetaTarjeta} onChange={handleInputChange} >
                            <option value="" >Seleccionar tipo</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                ):""}
                
            </div>
            
            { state.tipoTarjeta === "Credito"?
            ( <div>
                <div className="f-label"><label> Numero </label></div>

                <div className="f-row">
                    <input type="text" placeholder="" name="numeroTarjeta" value={state.numeroTarjeta} onChange={handleInputChange} />
                </div>

                <div className="f-label"><label> Vencimiento </label></div>
                <div className="f-row w30">
                    <input type="text" placeholder="MM/AA"  name="vencimientoTarjeta" value={state.vencimientoTarjeta} onChange={handleInputChange}/>
                </div>
            </div> ):
            ( <div>
                <div className="f-label"><label> Banco </label></div>

                <div className="f-row">
                    <select name="banco" value={state.banco} onChange={handleInputChange}>
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

		</form></div>
	)
}

export function GetStep( props ) {

	switch( props.i ){
		case 0 : return <Step1 {...props} />
		case 1 : return <Step2 {...props} />
		case 2 : return <Step3 {...props} />
	}

	return ( <div>Empty</div> )
}
