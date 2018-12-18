/***********************************************************
*  Module       : JavaScript
*  Language     : ES Spanish
*  Version      : vt5.4.0
*  Created Date : 2008-01-18 17:46:07
*  Author       : Joe Bordes
*  Last change  : 2012-04-04
*  es_mx Author : Francisco Hernandez Odin Consultores www.odin.mx
***********************************************************/

var alert_arr = {
	'DELETE':'¿Borrar los ',
	'RECORDS':' registros?',
	'SELECT':'Introduzca, al menos, una entidad',
	'SELECTTEMPLATE':'Selecciona al menos una plantilla',
	'SELECTMERGE':'Selecciona una entidad para la combinación!',
	'GENDOCSAVED':'Documento guardado. Por favor verifica que ha sido creado correctamente.',
	'DELETE_ACCOUNT':'Borrar esta cuenta eliminará las Oportunidades y Cotizaciones que tenga asociadas. ¿Continuar borrando los ',
	'DELETE_VENDOR':'Borrar este proveedor eliminará las Órdenes de Compra que tenga Asociadas. ¿Continuar borrando los ',
	'SELECT_MAILID':'Seleccione un e-mail',
	'OVERWRITE_EXISTING_ACCOUNT1':'¿Sobrescribir la dirección existente con la dirección de la cuenta seleccionada (',
	'OVERWRITE_EXISTING_ACCOUNT2':')?',
	'OVERWRITE_EXISTING_CONTACT1':'¿Sobrescribir la dirección existente con la dirección del contacto seleccionado (',
	'OVERWRITE_EXISTING_CONTACT2':')?',
	'MISSING_FIELDS':'Faltan Campos Obligatorios:',
	'NOT_ALLOWED_TO_EDIT':'no está autorizado a editar este campo',
	'NOT_ALLOWED_TO_EDIT_FIELDS':'no está autorizado a editar los campos',
	'COLUMNS_CANNOT_BE_EMPTY':'Las Columnas seleccionadas no pueden estar vacias',
	'CANNOT_BE_EMPTY':' no puede estar vacia',
	'CANNOT_BE_NONE':' no puede ser ninguno',
	'ENTER_VALID':'Seleccione un válido ',
	'SHOULDBE_LESS':' debe ser menor que ',
	'SHOULDBE_LESS_EQUAL':' debe ser menor o igual a',
	'SHOULDBE_EQUAL':' debe ser igual a ',
	'SHOULDBE_GREATER':' debe ser mayor que ',
	'SHOULDBE_GREATER_EQUAL':' debe ser mayor o igual a ',
	'INVALID':'Inválido ',
	'EXCEEDS_MAX':' Supera el límite máximo ',
	'OUT_OF_RANGE':' está fuera de rango',
	'SHOULDNOTBE_EQUAL':' no debe ser igual a ',
	'PORTAL_PROVIDE_EMAILID':'Usuario del portal debe tener un email válido',
	'ADD_CONFIRMATION':'¿Añadir los seleccionados ',
	'ACCOUNTNAME_CANNOT_EMPTY':'El nombre de cuenta no puede estar vacío',
	'CANT_SELECT_CONTACTS':'No puede seleccionar contactos relacionados desde un Prospecto',
	'LBL_THIS':'Este ',
	'DOESNOT_HAVE_MAILIDS':' no tiene email',
	'DOESNOT_HAVE_AN_MAILID':'" no tiene email',
	'MISSING_REQUIRED_FIELDS':'Faltan Campos Obligatorios: ',
	'READONLY':'Es de solo lectura',
	'SELECT_ATLEAST_ONE_USER':'Seleccione un usuario, al menos',
	'DISABLE_SHARING_CONFIRMATION':'Desactivar compartidos para los usuarios seleccionados ',
	'USERS':' ?',
	'ENDTIME_GREATER_THAN_STARTTIME':'La hora de finalización debe ser posterior a la de inicio ',
	'MISSING_EVENT_NAME':'Falta nombre del Evento',
	'EVENT_TYPE_NOT_SELECTED':'No ha seleccionado Tipo de Evento',
	'SITEURL_CANNOT_BE_EMPTY':'La Dirección Web no puede estar vacía',
	'SITENAME_CANNOT_BE_EMPTY':'La Página Web no puede estar vacía',
	'LISTPRICE_CANNOT_BE_EMPTY':'La Lista de precios no puede estar vacía',
	'INVALID_LIST_PRICE':'Lista de precios Inválida',
	'PROBLEM_ACCESSSING_URL':'Problema accediendo a la URL: ',
	'CODE':' Código: ',
	'WISH_TO_QUALIFY_MAIL_AS_CONTACT':'¿Quiere calificar este email como contacto?',
	'SELECT_ATLEAST_ONEMSG_TO_DEL':'Seleccione, al menos, un email para borrar',
	'ERROR':'Error',
	'FIELD_TYPE_NOT_SELECTED':'Tipo de Campo no seleccionado',
	'SPECIAL_CHARACTERS_NOT_ALLOWED':'No se admiten caracteres especiales en el campo Etiqueta',
	'SPECIAL_CHARACTERS':'Caracteres especiales',
	'NOT_ALLOWED':'no estan permitidos. Intenta con otros valores.',
	'DUPLICATE_MAPPING_ACCOUNTS':'¡Asignación Duplicada en Cuentas!',
	'DUPLICATE_MAPPING_CONTACTS':'¡Asignación Duplicada en Contactos!',
	'DUPLICATE_MAPPING_POTENTIAL':'¡Asignación Duplicada en Oportunidades!',
	'ERROR_WHILE_EDITING':'Error Editando',
	'CURRENCY_CHANGE_INFO':'Cambio de Moneda Realizado correctamente',
	'CURRENCY_CONVERSION_INFO':'¿Está usando el Dolar como moneda? \n Pulse OK para mantener $, Cancelar para cambiar la Paridad.',
	'THE_EMAILID':'El email id \\\'',
	'EMAIL_FIELD_INVALID':'\\\' en el campo email es inválido',
	'MISSING_REPORT_NAME':'Falta el Nombre del Informe',
	'REPORT_NAME_EXISTS':'El nombre del informe existe, use otro...',
	'WANT_TO_CHANGE_CONTACT_ADDR':'¿Cambiar las direcciones de los Contactos relacionados con esta Cuenta?',
	'SURE_TO_DELETE':'¿Borrar?',
	'NO_PRODUCT_SELECTED':'No hay productos seleccionados, Elija uno.',
	'VALID_FINAL_PERCENT':'Introduzca un Porcentaje de Descuento válido',
	'VALID_FINAL_AMOUNT':'Introduzca un Importe Final válido',
	'VALID_SHIPPING_CHARGE':'Introduzca un Cargo por Manipulado y Transporte válido',
	'VALID_ADJUSTMENT':'Introduzca un ajuste válido',
	'WANT_TO_CONTINUE':'¿Quiere continuar?',
	'ENTER_VALID_TAX':'Introduzca un Valor de Impuesto válido',
	'VALID_TAX_NAME':'Introduzca un Nombre de Impuesto válido',
	'CORRECT_TAX_VALUE':'Introduzca un Valor de Impuesto correcto',
	'ENTER_POSITIVE_VALUE':'Introduzca un Valor positivo',
	'LABEL_SHOULDNOT_EMPTY':'El nombre del Impuesto no puede estar vacío',
	'NOT_VALID_ENTRY':'no es una entrada válida. Introduzca un valor correcto.',
	'VALID_DISCOUNT_PERCENT':'Introduzca un Porcentaje de Descuento válido',
	'VALID_DISCOUNT_AMOUNT':'Introduzca un Importe de Descuento válido',
	'SELECT_TEMPLATE_TO_MERGE':'Seleccione una plantilla para combinar',
	'SELECTED_MORE_THAN_ONCE':'Ha seleccionado este elemento más de una vez.',
	'YES':'si',
	'NO':'no',
	'MAIL':'mail',
	'EQUALS':'igual',
	'NOT_EQUALS_TO':'no igual a',
	'STARTS_WITH':'empieza con',
	'CONTAINS':'contiene',
	'DOES_NOT_CONTAINS':'no contiene',
	'LESS_THAN':'menor que',
	'GREATER_THAN':'mayor que',
	'LESS_OR_EQUALS':'menor o igual',
	'GREATER_OR_EQUALS':'mayor o igual',
	'NO_SPECIAL_CHARS':'No se admiten caracteres especiales en la cadena de la factura',
	'PLS_SELECT_VALID_FILE':'Seleccione un archivo con las siguientes extensiones:\n',
	'NO_SPECIAL':'Caracteres especiales no permitidos',
	'NO_QUOTES':'Comillas (\' ") y el símbolo de sumar (+) no permitidos ',
	'IN_PROFILENAME':' en Nombre de Perfil',
	'IN_GROUPNAME':' en Nombre de Grupo',
	'IN_ROLENAME':' en Nombre de Rol',
	'VALID_TAX_PERCENT':'Introduzca un Porcentaje de Impuesto válido',
	'VALID_SH_TAX':'Introduzca un Impuesto válido para Manipulación y Transportes',
	'ROLE_DRAG_ERR_MSG':'No puede mover un Nodo Padre bajo un Nodo Hijo',
	'LBL_DEL':'Supr',
	'VALID_DATA':' Introduzca una fecha válida. ',
	'STDFILTER':'Filtros Estandar',
	'STARTDATE':'Fecha de Inicio',
	'ENDDATE':'Fecha de Fin',
	'START_DATE_TIME':'Fecha y Hora de Inicio',
	'START_TIME':'Hora de Inicio',
	'LBL_AND':'y',
	'LBL_OR': 'o',
	'LBL_ENTER_VALID_PORT':'Introduzca un Nº de puerto válido',
	'IN_USERNAME':' en Usuario ',
	'LBL_ENTER_VALID_NO':'Introduzca un número',
	'LBL_PROVIDE_YES_NO':' Valor incorrecto.\n introduzca YES o NO',
	'LBL_SELECT_CRITERIA':'Criterio Invalido.\n Elija otro criterio',
	'OPPORTUNITYNAME_CANNOT_BE_EMPTY':'El nombre de la Oportunidad no puede estar vacío',
	'NAME_DESC':' para Nombre de Carpeta y Descripción',
	'ENDS_WITH':'termina con',
	'SHARED_EVENT_DEL_MSG':'El usuario no está autorizado a eliminar el registro.',
	'LBL_WRONG_IMAGE_TYPE':'Los tipos de archivo permitidos son: jpeg, png, jpg, pjpeg, x-png or gif',
	'SELECT_MAIL_MOVE':'Seleccionar correo y mover',
	'LBL_NOTSEARCH_WITHSEARCH_ALL':'No ha usado la búsqueda. Todos los registros serán exportados desde ',
	'LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE':'No ha buscado nada. Pero ha seleccionado con una búsqueda y <br> página actual. Los registros de la página actual se<br> exportarán desde ',
	'LBL_NO_DATA_SELECTED':'No hay registros seleccionados. Seleccione, al menos, un registro a exportar',
	'LBL_SEARCH_WITHOUTSEARCH_ALL':'You have used search option but you have not selected without search & all options.\n You can click [ok] to export all data or  You can click [cancel] and try again with other export criteria',
	'STOCK_IS_NOT_ENOUGH':'No hay suficiente Stock',
	'LBL_QTY_IN_STOCK' : 'Cantidad en Stock',
	'INVALID_QTY':'Cantidad Inválida',
	'LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE':'You have used search option but you have not selected without search & currentpage options.\n You can click [ok]to export  current page data or You can click [cancel] and try again with some other export criteria.',
	'LBL_SELECT_COLUMN':'Columna inválida.\nSelecciona columna.',
	'LBL_NOT_ACCESSIBLE':'Inaccesible',
	'LBL_FILENAME_LENGTH_EXCEED_ERR':'El nombre del archivo no puede contener más de 255 caracteres.',
	'LBL_DONT_HAVE_EMAIL_PERMISSION':'No tienes permiso para acceder al campo de email.',
	'LBL_NO_FEEDS_SELECTED':'No se ha seleccionado una difusión',
	'LBL_SELECT_PICKLIST':'Por favor selecciona al menos un valor para borrar',
	'LBL_CANT_REMOVE':'No se pueden eliminar todos los valores',

	/*For global add/delete in picklist*/
	'LBL_GIVE_PICKLIST_VALUE':'Añade algún valor a la lista de selección',
	'LBL_SELECT_ROLE':'Selecciona al menos un rol que verá los nuevos valores',
	'LBL_ADD_PICKLIST_VALUE':'Añade al menos un nuevo valor',
	'LBL_NO_VALUES_TO_DELETE': 'no hay valores para eliminar',

	/* For Duplicate merging feature */
	'SAME_GROUPS': 'Tienes que seleccionar los registros en el mismo grupo para combinar',
	'ATLEAST_TWO': 'Selecciona al menos dos registros para combinar',
	'MAX_THREE': 'Está permitido seleccionar un máximo de tres registros',
	'MAX_RECORDS': 'Está permitido seleccionar un máximo de cuatro registros',
	'CON_MANDATORY': 'Selecciona el campo obligatorio Apellido',
	'LE_MANDATORY': 'Selecciona el campo obligatorio Apellido y Compañía',
	'ACC_MANDATORY': 'Selecciona el campo obligatorio Nombre Cuenta',
	'PRO_MANDATORY': 'Selecciona el campo obligatorio Nombre Producto',
	'TIC_MANDATORY': 'Selecciona el campo obligatorio Título Caso',
	'POTEN_MANDATORY': 'Selecciona el campo obligatorio Nombre Oportunidad',
	'VEN_MANDATORY': 'Selecciona el campo obligatorio Nombre Proveedor',
	'DEL_MANDATORY': 'No está permitido eliminar el campo obligatorio',

	/* For Multi-Currency Support */
	'MSG_CHANGE_CURRENCY_REVISE_UNIT_PRICE': 'El precio unitario de todas las monedas se actualizará basándose en la moneda seleccionada. ¿Estás seguro?',

	'Select_one_record_as_parent_record' : 'Selecciona un registro como entidad superior',
	'RECURRING_FREQUENCY_NOT_PROVIDED' : 'Frecuencia de recurrencia no establecida',
	'RECURRING_FREQNECY_NOT_ENABLED' : 'Frecuencia de recurrencia establecida, pero recursión no activada',
	/* Added for Documents module */
	'NO_SPECIAL_CHARS_DOCS':'No están permitidos Caracteres especiales como comillas, barra invertida, suma +, porcentaje % e interrogante ? ',
	'FOLDER_NAME_TOO_LONG':'Nombre de carpeta demasiado largo. Inténtalo de nuevo!',
	'FOLDERNAME_EMPTY':'Nombre de carpeta vacío.',
	'DUPLICATE_FOLDER_NAME':'Nombre de carpeta ya existe. Inténtalo de nuevo!',
	'FOLDER_DESCRIPTION_TOO_LONG':'Descripción de carpeta demasiado larga. Inténtalo de nuevo!',
	'NOT_PERMITTED':'No tienes permiso para ejecutar esta operación.',

	'ALL_FILTER_CREATION_DENIED':'No se puede crear un filtro de nombre "All"/"Todo", utiliza un nombre diferente',
	'OPERATION_DENIED':'No tiene permiso para realizar esta operación',
	'EMAIL_CHECK_MSG': 'Deshabilita el acceso al portal para poder dejar vacío el campo de cuenta de correo',
	'IS_PARENT' : 'Este producto tiene sub-productos, no está permitido asignarle un producto superior o paterno',

	'PICKLIST_CANNOT_BE_EMPTY': 'El valor de la lista no puede quedar vacío',
	'DUPLICATE_VALUES_FOUND': 'Se han encontrado valores duplicados',
	'LBL_NO_ROLES_SELECTED': 'No se ha seleccionado ningún rol. ¿Quieres continuar?',
	'LBL_DUPLICATE_FOUND': 'Entrada duplicada encontrada para el valor ',
	'LBL_CANNOT_HAVE_EMPTY_VALUE': 'No se puede tener valor nulo. Para eliminar, retrocede y pulsa el botón de eliminar',
	'LBL_DUPLICATE_VALUE_EXISTS': 'Valores duplicados existen',
	'LBL_WANT_TO_DELETE': 'Esto eliminará los valores de selección marcados para todos los roles. ¿Estás seguro de continuar? ',
	'LBL_DELETE_ALL_WARNING': 'Has marcado para eliminar todos los valores de selección. ¿Estás seguro de continuar?',
	'LBL_PLEASE_CHANGE_REPLACEMENT': 'por favor cambia el valor de sustitución; también está seleccionado para eliminación',

	/*layout Editor changes*/
	'BLOCK_NAME_CANNOT_BE_BLANK' : 'El nombre del bloque no puede quedar vacío',
	'ARE_YOU_SURE_YOU_WANT_TO_DELETE' : '¿Estás seguro que quieres eliminar?',
	'PLEASE_MOVE_THE_FIELDS_TO_ANOTHER_BLOCK' : 'Por favor mueve los campos a otro bloque',
	'ARE_YOU_SURE_YOU_WANT_TO_DELETE_BLOCK' : '¿Estás seguro que quieres eliminar el bloque?',
	'ARE_YOU_SURE_YOU_WANT_TO_DELETE_EXACT_DUPLICATE': '¿Estás seguro que quieres eliminar Todos los Duplicados Exactos?',
	'LABEL_CANNOT_NOT_EMPTY' : 'La etiqueta no puede quedar vacía',
	'LBL_TYPEALERT_1' : 'No se puede vincular',
	'LBL_WITH' : 'con el tipo de dato',
	'LBL_TYPEALERT_2' : '. Vincula siempre tipos de datos equivalentes.',
	'LBL_LENGTHALERT' : 'No está permitido vincular campos con diferente número de caracteres. Trate de vincular los datos con igual número de caracteres.',
	'LBL_DECIMALALERT' : 'No está permitido vincular campos con diferente número de decimales. Trate de vincular los datos con igual número de decimales.',
	'PICKLIST2PICKLISTALERT': 'Asegúrate de que ambas listas comparten los mismos valores',
	'PICKLIST2TEXTALERT': 'Asegúrate de que el campo de texto puede guardar el valor más largo de la lista desplegable',
	'FIELD_IS_MANDATORY' : 'Campo obligatorio',
	'FIELD_IS_ACTIVE' : 'Campo disponible',
	'FIELD_IN_QCREATE' : 'Disponible en Creación Rápida',
	'FIELD_IS_MASSEDITABLE' : 'Disponible para Edición Masiva',

	'IS_MANDATORY_FIELD' : 'es Campo Obligatorio',
	'CLOSEDATE_CANNOT_BE_EMPTY' : 'Fecha Cierre no puede quedar vacío',
	'AMOUNT_CANNOT_BE_EMPTY' : 'Cantidad no puede quedar vacío',
	'ARE_YOU_SURE' : '¿Estás seguro que quieres eliminar?',
	'LABEL_ALREADY_EXISTS' : 'Etiqueta ya existe. Por favor introduce una etiqueta diferente',
	'LENGTH_OUT_OF_RANGE' : 'La longitud del Bloque debe ser inferior a los 50 caracteres',
	'LBL_SELECT_ONE_FILE' : 'Por favor selecciona al menos un archivo',
	'LBL_UNABLE_TO_ADD_FOLDER' : 'No se ha podido agregar la Carpeta. Por favor intentalo otra vez.',
	'LBL_ARE_YOU_SURE_YOU_WANT_TO_DELETE_FOLDER' : '¿Estas seguro que quieres eliminar la carpeta?',
	'LBL_ERROR_WHILE_DELETING_FOLDER' : 'Error eliminando la carpeta. Por favor intentalo otra vez.',
	'LBL_FILE_CAN_BE_DOWNLOAD' : 'Archivo disponible para descarga',
	'LBL_DOCUMENT_LOST_INTEGRITY':'Documento no disponible. Se marcará como Inactivo',
	'LBL_DOCUMENT_NOT_AVAILABLE' : 'Archivo no disponible para descarga',
	'LBL_FOLDER_SHOULD_BE_EMPTY' : 'La carpeta ha de estar vacía para eliminarla!',

	'LBL_PLEASE_SELECT_FILE_TO_UPLOAD' : 'Por favor selecciona el archivo a cargar.',
	'LBL_ARE_YOU_SURE_TO_MOVE_TO' : '¿Estás seguro que quieres mover los archivos a la carpeta ',
	'LBL_FOLDER' : '',
	'LBL_UNABLE_TO_UPDATE' : 'No se ha podido actualizar! Por favor intentalo otra vez.',
	'LBL_BLANK_REPLACEMENT': 'No se puede seleccionar un valor vacío como sustitución',

	'LBL_IMAGE_DELETED' : 'Imagen Eliminada',

	/* Tooltip management */
	'ERR_FIELD_SELECTION' : 'Errores en la selección de campos',

	/* Inventory validation strings */
	'NO_LINE_ITEM_SELECTED' : 'No hay ninguna línea seleccionada. Por favor selecciona al menos una línea.',
	'LINE_ITEM' : 'Línea',
	'LIST_PRICE': 'Precio Lista',

	/* Webmails */
	'LBL_PRINT_EMAIL' : 'Imprimir',
	'LBL_DELETE_EMAIL' : 'Borrar',
	'LBL_DOWNLOAD_ATTACHMENTS' : 'Descargar Adjuntos',
	'LBL_QUALIFY_EMAIL' : 'Clasificar',
	'LBL_FORWARD_EMAIL' : 'Reenviar',
	'LBL_REPLY_TO_SENDER' : 'Responder',
	'LBL_REPLY_TO_ALL' : 'Responder a todos',

	'LBL_WIDGET_HIDDEN' : 'Elemento escondido',
	'LBL_RESTORE_FROM_PREFERENCES' : 'Se puede habilitar en tus preferencias',
	'ERR_HIDING' : 'Error al esconder',
	'MSG_TRY_AGAIN' : 'Por favor intentalo otra vez',

	'MSG_ENABLE_SINGLEPANE_VIEW' : 'Vista sin Pestañas Habilitada',
	'MSG_DISABLE_SINGLEPANE_VIEW' : 'Vista sin Pestañas Deshabilitada',

	'MSG_FTP_BACKUP_DISABLED' : 'Copia FTP Deshabilitada',
	'MSG_LOCAL_BACKUP_DISABLED' : 'Copia Local Deshabilitada',
	'MSG_FTP_BACKUP_ENABLED' : 'Copia FTP Habilitada',
	'MSG_LOCAL_BACKUP_ENABLED' : 'Copia Local Habilitada',
	'MSG_CONFIRM_PATH' : 'confirma detalles de la ruta',
	'MSG_CONFIRM_FTP_DETAILS' : 'confirma detalles de acceso FTP',

	'START_PERIOD_END_PERIOD_CANNOT_BE_EMPTY' : 'Periodo inicial o final no pueden quedar vacíos',

	/* added to fix i18n issues with home page*/
	'LBL_ADD': 'Agregar ',
	'Module': 'Módulo',
	'DashBoard': 'Cuadro de Mando',
	'RSS': 'RSS',
	'Default': 'Defecto',
	'Notebook': 'Bloc de Notas',
	'ReportCharts': 'Informe Gráfico',
	'SPECIAL_CHARS':'\\ / < > + \' " ',

	'BETWEEN': 'entre',
	'BEFORE': 'antes',
	'AFTER': 'después',
	'ERROR_DELETING_TRY_AGAIN': 'Error eliminando. Por favor inténtalo otra vez.',
	'LBL_ENTER_WINDOW_TITLE': 'Introduce el título de la ventana.',
	'LBL_SELECT_ONLY_FIELDS': 'Selecciona menos campos.',
	'LBL_ENTER_RSS_URL':'Introduce la URL del RSS',
	'LBL_ADD_HOME_WIDGET': 'No se ha podido agregar elementos a la portada! Por favor inténtalo otra vez.',
	'LBL_DEFAULT_VALUE_FOR_THIS_FIELD' : 'Valor por defecto para este campo',

	'RECIPIENTS_CANNOT_BE_EMPTY' : 'Los Destinatarios no puede estar vacío',
	'VALID_SCANNER_NAME' : 'Ingrese un nombre válido para Mail Scanner (Solo letras y números)',
	'ERR_SAME_SOURCE_AND_TARGET' : 'Campo origen y Destino no pueden ser el mismo',
	'ERR_ATLEAST_ONE_VALUE_FOR' : 'Necesita seleccionar al menos un valor',
	'ERR_SELECT_MODULE_FOR_DEPENDENCY' : 'Selecciona un módulo para agregar la dependencia',
	'LBL_SIZE_SHOULDNOTBE_GREATER':'El tamaño del Archivo no debe ser superior a ', //added for upload error message
	'LBL_MAX_SIZE':'Tamaño máximo de archivo aceptado es', //added for display file size limit
	'LBL_FILESIZEIN_MB':'MB', // added to show filesize limit in MB
	'LBL_FILESIZEIN_KB':'KB', // added to show filesize limit in KB
	'LBL_FILESIZEIN_B':'B', // added to show filesize limit in B
	//Contexual help page
	'LBL_HELP_TITLE' : 'Ayuda',
	'LBL_WIKI_TITLE' : 'Manuales',
	'LBL_FAQ_TITLE'   : 'FAQ',
	'LBL_VIDEO_TITLE' : 'Video',
	'LBL_CLOSE_TITLE' : 'Cerrar',
	'LBL_SELECT':'Selecciona los widgets por defecto a mostrar',

	'ERR_SELECT_ATLEAST_ONE_MERGE_CRITERIA_FIELD' : 'Selecciona al menos un campo para la combinación',
	'ERR_PLEASE_MAP_MANDATORY_FIELDS' : 'Por favor, vincula los siguientes campos obligatorios',
	'ERR_MAP_NAME_ALREADY_EXISTS' : 'Nombre de vinculación ya existe. Introduce un nombre distinto',
	'ERR_MAP_NAME_CANNOT_BE_EMPTY' : 'Nombre de vinculación no puede quedar vacío',
	'ERR_FIELDS_MAPPED_MORE_THAN_ONCE' : 'El siguiente campo se ha vinculado más de una vez. Verifica la vinculación.',
	'LBL_MERGE_SHOULDHAVE_INFO' : 'Selecciona al menos un campo como criterio de combinación',
	'MAP_NAME_EXISTS' : 'Ya existe una Asignación con este nombre. ¿Sobrescribir?',
	'MAP_DELETED_INFO' : 'Se ha eliminado este mapeo. No se puede volver a utilizar',

	//error messages for lead conversion
	'ERR_SELECT_EITHER':'Selecciona Cuenta o Contacto para convertir el Prospecto',
	'ERR_SELECT_ACCOUNT':'Selecciona Cuenta para seguir',
	'ERR_SELECT_CONTACT':'Selecciona Contacto para seguir',
	'ERR_MANDATORY_FIELD_VALUE':'Faltan valores de campos obligatorios',
	'ERR_POTENTIAL_AMOUNT':'Cantidad de la oportunidad debe ser numérico',
	'ERR_EMAILID':'Introduce un email válido',
	'ERR_TRANSFER_TO_ACC':'Debes seleccionar una cuenta a la que se transferirán los elementos relacionados',
	'ERR_TRANSFER_TO_CON':'Debes seleccionar un contacto al que se transferirán los elementos relacionados',
	'SURE_TO_DELETE_CUSTOM_MAP':'¿Seguro que quieres eliminar la vinculación de campos?',
	'LBL_CLOSE_DATE':'Fecha Cierre',
	'LBL_EMAIL':'Email',
	'MORE_THAN_500' : 'Has seleccionado más de 500 registros. Esto puede tardar bastante tiempo. ¿Seguro que quieres continuar?',
	'LBL_MAPPEDALERT':'Esta campo ya está vinculado',
	'LBL_REPORT_NAME': 'Por favor introdúzca el nombre del nuevo informe.',
	'LBL_REPORT_NAME_ERROR': 'Debes dar un nombre al informe.',
	'LBL_IS' : 'es',
	'LBL_CONTAINS': 'contiene',
	'LBL_DOES_NOT_CONTAIN' : 'no contiene',
	'LBL_STARTS_WITH' : 'empieza por',
	'LBL_ENDS_WITH' : 'acaba por',
	'LBL_HAS_CHANGED' : 'ha cambiado',
	'LBL_HAS_CHANGED_TO' : 'ha cambiado a',
	'LBL_WAS' : 'era',
	'LBL_IS_EMPTY': 'está vacío',
	'LBL_IS_NOT_EMPTY' : 'no está vacío',
	'LBL_EQUAL_TO' : 'igual a',
	'LBL_LESS_THAN' : 'menor que',
	'LBL_GREATER_THAN' : 'mayor que',
	'LBL_DOEST_NOT_EQUAL' : 'no es igual a',
	'LBL_LESS_THAN_OR_EQUAL_TO' : 'menor o igual que',
	'LBL_GREATER_THAN_OR_EQUAL_TO' : 'mayor o igual que',
	'LBL_IS_NOT' : 'no es',
	'LBL_BETWEEN' : 'entre',
	'LBL_BEFORE' : 'antes',
	'LBL_DOES_NOT_START_WITH' : 'no empieza por',
	'LBL_DOES_NOT_END_WITH' : 'no acaba por',
	'DOES_NOT_START_WITH':'no empieza por',
	'DOES_NOT_END_WITH':'no acaba por',
	'LBL_AFTER' : 'después',
	'LBL_IS_TODAY' : 'es hoy',
	'LBL_LESS_THAN_DAYS_AGO' : 'hace menos de x días',
	'LBL_MORE_THAN_DAYS_AGO' : 'hace más de x días',
	'LBL_IN_LESS_THAN' : 'en menos que',
	'LBL_IN_MORE_THAN' : 'en más que',
	'LBL_DAYS_AGO' : 'hace x días',
	'LBL_DAYS_LATER' : 'x días después',
	'LBL_LESS_THAN_HOURS_BEFORE' : 'menos de x horas antes',
	'LBL_LESS_THAN_HOURS_LATER' : 'menos de x horas después',
	'LBL_MORE_THAN_HOURS_BEFORE' : 'más de x horas antes',
	'LBL_MORE_THAN_HOURS_LATER' : 'más de x horas después',
	'LBL_EXISTS' : 'existe',
	'MAXIMUM_OF_MODULES_PERMITTED' : 'Has llegado al máximo número de módulos relacionados permitido.',
	'ONLY_ONE_MODULE_PERMITTED_FOR_REPORT' : 'Solo se permite relacionar con un módulo para este tipo de informe',
	'MUST_SELECT_ONE_MODULE_FOR_REPORT' : 'Debes seleccionar un módulo relacionado para este tipo de informe',
	'LBL_NEW_CONDITION' : 'New Condition',
	'WF_UPDATE_MAP_ERROR' : '**ERROR**: Esta acción utiliza un campo que no está disponible: ',
	'WF_UPDATE_MAP_ERROR_INFO' : 'Se cargará la acción con información INCORRECTA para que puedas arreglarla. La información mostrada NO ES CORRECTA!',
	'MoveUp' : 'Mover Arriba',
	'MoveDown' : 'Mover Abajo',
	'Products' : 'Productos',
	'Services' : 'Servicios',
	'LBL_Hide' : 'Esconder',
	'LBL_Show' : 'Mostrar',
	'ERR_INVALID_DATE_FORMAT'  :  'El formato de la fecha debe ser: aaaa-mm-dd',
	'ERR_INVALID_MONTH'  :  ' Por favor, introduzca un mes válido.',
	'ERR_INVALID_DAY'  :  'Por favor, introduzca un dia válido.',
	'ERR_INVALID_YEAR'  :  'Por favor, introduzca un año de 4 dígitos.',
	'ERR_INVALID_DATE'  :  'Por favor, introduzca una fecha válida',
	'ERR_INVALID_HOUR'  :  'Por favor, introduzca una hora válida',
	'ERR_INVALID_TIME'  :  'Por favor, introduzca un tiempo válido',
	'ERR_EMAIL_WITH_NO_SUBJECT' : 'No has introducido un asunto para este email. Puedes añadir uno ahora.',
	'EMAIL_WITH_NO_SUBJECT' : '(sin-asunto)',
	'INTEGERVALS':'Solo están permitidos valores enteros',
	'JSLBL_Delete': 'Eliminar',
	'JSLBL_Loading': 'Cargando',
	'JSLBL_ATTACHMENT_NOT_DELETED': 'No se ha podido eliminar el adjunto',
	'JSLBL_FILEUPLOAD_LIMIT_EXCEEDED': 'Límite de carga excedida!!',
	'JSLBL_CANCEL': 'Cancelar',
	'JSLBL_SAVEAS': 'Guardar como',
	'JSLBL_SAVE': 'Guardar',
	'JSLBL_PREVIOUS': 'Anterior',
	'JSLBL_NEXT': 'Siguiente',
	'JSLBL_CURRENT': 'paso actual:',
	'JSLBL_PAGINATION': 'Paginado',
	'JSLBL_FINISH': 'Terminar',
	'SHOWING' : 'Mostrando',
	'OF' : 'de',
	'ERR_Massedit' : 'Error en Edición Masiva',
	'ProcessFINISHED' : 'Proceso Terminado'
};
