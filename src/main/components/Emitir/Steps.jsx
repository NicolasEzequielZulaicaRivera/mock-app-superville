import React, { useEffect, useRef } from "react";

const Step1 = (props) => {
    
    return (
		<div className="form">

			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Nombre</label></div>
					<div className="f-row">
						<div className="f-row">
							<input type="text" placeholder="" name="name" defaultValue={props.name}/>
						</div>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Apellido</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="surname" defaultValue={props.surname}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Documento de identidad</label></div>
					<div className="f-row">
						<select name="documents[0].type" defaultValue={props.documents[0].type}>
							<option value="">Tipo</option>
							<option value="DNI">DNI</option>
						</select>
						<input type="text" placeholder="Numero" name="documents[0].number" defaultValue={props.documents[0].number}/>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Codigo de identificacion</label></div>
					<div className="f-row">
						<select name="idType" defaultValue={props.idType}>
							<option value="">Tipo</option>
							<option value="1">COD</option>
						</select>
						<input type="text" placeholder="Numero" name="idNumber" defaultValue={props.idNumber}/>
					</div>
				</div>
			</div>
			<div className="f-label"><label >Correo electronico</label></div>
			<div className="f-row">
				<input type="text" placeholder="" name="email" defaultValue={props.email}/>
			</div>
			<div className="f-label"><label >Telefono</label></div>
			<div className="f-cols">
				<div className="f-col w30">
					<div className="f-row"><input type="text" placeholder="Cod. area" name="areaCode" defaultValue={props.areaCode}/></div>
				</div>
				<div className="f-col">
					<div className="f-row"><input type="number" placeholder="Numero" name="phone" defaultValue={props.phone}/></div>
				</div>
			</div>
			
		</div>
	)
}

const Step2 = (props) => {

    props = { sameDir: true, ...props }

    const clientDirection = useRef(null);
    const sameDir = useRef(null);

    const handleChange = (e) => {
        sameDir.current.value = e.target.checked ? '1' : '';
        if (e.target.checked) {
            clientDirection.current.classList.add('hidden');
        } else {
            clientDirection.current.classList.remove('hidden');
        }
    }

    useEffect(() => {
        if (props.sameDir) {
            clientDirection.current.classList.add('hidden');
        } else {
            clientDirection.current.classList.remove('hidden');
        }
    }, [])

	return (
		<div className="form">

			<h5>Direccion del riesgo</h5>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="riskDirection.province" defaultValue={props.riskDirection?.province}>
							<option value="BsaAs">Buenos Aires</option>
							<option value="Mendoza">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.city" defaultValue={props.riskDirection?.city}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Calle</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.street" defaultValue={props.riskDirection?.street}/>
					</div>
				</div>
				<div className="f-col w40">
					<div className="f-label"><label >Numero</label></div>
					<div className="f-row">
						<input type="number" placeholder="Numero" name="riskDirection.numstreet" defaultValue={props.riskDirection?.numstreet}/>
					</div>
				</div>
			</div>
			<div className="f-cols">
				<div className="f-col f-cols">
					<div className="f-col">
						<div className="f-label"><label >Piso</label></div>
						<div className="f-row">
							<input type="text" placeholder="" name="riskDirection.floor" defaultValue={props.riskDirection?.floor}/>
						</div>
						<span className="anotation"> Solo si corresponde </span>
					</div>
					<div className="f-col">
						<div className="f-label"><label >Depto</label></div>
						<div className="f-row">
							<input type="text" placeholder="" name="riskDirection.dept" defaultValue={props.riskDirection?.dept}/>
						</div>
					</div>
				</div>		
				<div className="f-col">
					<div className="f-label"><label >Codigo postal(opcional)</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="riskDirection.postalCode" defaultValue={props.riskDirection?.postalCode}/>
					</div>
				</div>
			</div>

			<div className="f-check-row">
				<input 
                    type="checkbox"
                    className="checkbox" 
                    defaultChecked={props.sameDir} 
                    onChange={handleChange}
                />
                <input 
                    type="hidden"
                    name="sameDir"
                    defaultValue={props.sameDir} 
                    ref={sameDir}
                />
				Utiliza la misma direccion para el cliente
			</div>

            <div className="m-top"  ref={clientDirection}>
                
                <h5>Direccion del cliente</h5>
                <div className="f-cols">
				<div className="f-col">
					<div className="f-label"><label >Provincia</label></div>
					<div className="f-row">
						<select name="clientDirection.province" defaultValue={props.clientDirection?.province}>
							<option value="BsaAs">Buenos Aires</option>
							<option value="Mendoza">Mendoza</option>
						</select>
					</div>
				</div>
				<div className="f-col">
					<div className="f-label"><label >Ciudad</label></div>
					<div className="f-row">
						<input type="text" placeholder="" name="clientDirection.city" defaultValue={props.clientDirection?.city}/>
					</div>
				</div>
			</div>
                <div className="f-cols">
                    <div className="f-col">
                        <div className="f-label"><label >Calle</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" name="clientDirection.street" defaultValue={props.clientDirection?.street}/>
                        </div>
                    </div>
                    <div className="f-col w40">
                        <div className="f-label"><label >Numero</label></div>
                        <div className="f-row">
                            <input type="number" placeholder="Numero" name="clientDirection.numstreet" defaultValue={props.clientDirection?.numstreet}/>
                        </div>
                    </div>
                </div>
                <div className="f-cols">
                    <div className="f-col f-cols">
                        <div className="f-col">
                            <div className="f-label"><label >Piso</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" name="clientDirection.floor" defaultValue={props.clientDirection?.floor}/>
                            </div>
                            <span className="anotation"> Solo si corresponde </span>
                        </div>
                        <div className="f-col">
                            <div className="f-label"><label >Depto</label></div>
                            <div className="f-row">
                                <input type="text" placeholder="" name="clientDirection.dept" defaultValue={props.clientDirection?.dept}/>
                            </div>
                        </div>
                    </div>		
                    <div className="f-col">
                        <div className="f-label"><label >Codigo postal(opcional)</label></div>
                        <div className="f-row">
                            <input type="text" placeholder="" name="clientDirection.postalCode" defaultValue={props.clientDirection?.postalCode}/>
                        </div>
                    </div>
                </div>

            </div>

		</div>
	)
}

const Step3 = (props) => {

	return (
		<div className="form">

            <div className="f-cols">
                <div className="f-col w50">
                    <div className="f-label"><label> Tipo </label></div>
                    <div className="f-row">
                        <select name="cardType" defaultValue={props.cardType}>
                            <option value="Debito" >Debito</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                { props.cardType === "Credito"?
                (
                <div className="f-col w50">
                    <div className="f-label"><label> Tarjeta </label></div>
                    <div className="f-row">
                        <select name="creditCard" defaultValue={props.creditCard} >
                            <option value="" >Seleccionar tipo</option>
                            <option value="Credito" >Credito</option>
                        </select>
                    </div>
                </div>
                ):""}
                
            </div>
            
            { props.cardType === "Credito"?
            ( <div>
                <div className="f-label"><label> Numero </label></div>

                <div className="f-row">
                    <input type="text" placeholder="" name="cardNumber" defaultValue={props.cardNumber} />
                </div>

                <div className="f-label"><label> Vencimiento </label></div>
                <div className="f-row w30">
                    <input type="text" placeholder="MM/AA"  name="cardExpiration" defaultValue={props.cardExpiration}/>
                </div>
            </div> ):
            ( <div>
                <div className="f-label"><label> Banco </label></div>

                <div className="f-row">
                    <select name="bank" defaultValue={props.bank}>
                        <option value="">Seleccionar banco</option>
                        <option value="BBVA">BBVA</option>
                    </select>
                </div>

                <div className="f-label"><label> CBU </label></div>
                <div className="f-row">
                    <input type="text" placeholder="" name="cbu" defaultValue={props.cbu}/>
                </div>
            </div> )
            }

		</div>
	)
}


export const GetStep = ( {i,...props} ) => {

    switch( i ){
        case 0: return <Step1 {...props} />
        case 1: return <Step2 {...props} />
        case 2: return <Step3 {...props} />
    }

	return ( <Step3 {...props} /> )
}