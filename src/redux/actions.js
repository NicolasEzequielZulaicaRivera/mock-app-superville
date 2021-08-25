import commonActions from '../common/common.actions';
import mainActions from '../main/main.actions';
import cotizacionesActions from 'cotizaciones/cotizaciones.actions';
import emisionesActions from '../emisiones/emisiones.actions';
// [GLOBAL ACTIONS] IMPORT MODULE ACTIONS

export default {
    common: commonActions,
	main: mainActions,
    cotizacion: cotizacionesActions,
	emisiones: emisionesActions,
    // [GLOBAL ACTIONS] EXPORT ACTIONS
};
