export function hasPermission(staff,permission){return staff?.enabled===true&&staff.permissions?.includes(permission)===true;}
export function permittedNavigation(config,staff){return config.navigation.filter(item=>item.permissionAny?item.permissionAny.some(permission=>hasPermission(staff,permission)):!item.permission||hasPermission(staff,item.permission));}
export function validateStaffAssignment(values,config){
 if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(values.target))throw Error('Enter the existing account ID.');
 if(values.scopes.some(scope=>!config.permissions.some(item=>item.id===scope)))throw Error('Choose registered permissions.');
 return values;
}
