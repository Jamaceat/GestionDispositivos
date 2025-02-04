// Declaracion constantes
db_name = "db_gestion";

// Declaracion collections
cll_role = "cll_role";
cll_device = "cll_device";
cll_order = "cll_order";
cll_order_detail = "cll_order_detail";
cll_user = "cll_user";
cll_device_type = "cll_device_type";

// creacion de base de datos
db_config_server = db.getSiblingDB(dbNameDev);

db_gestion = db.getSiblingDB(db_name);
db_gestion.createUser({
	user: "user_back",
	pwd: "12345",
	roles: [{ role: "readWrite", db: dbNameDev }],
});

//crear coleccion Roles

db_gestion.createCollection(cll_role);
cll_role = db_gestion.getCollection(cll_role);

role_sample = [
	{
		role: "ROLE_ADMIN",
		description:
			"Este rol es para el administrador de toda la aplicacion, tiene todos los privilegios",
	},
];

cll_role.insertMany(role_sample);

db_gestion.createCollection(cll_user);
db_gestion.createCollection(cll_device_type);

// Creacion colecciones
db_gestion.createCollection(cll_device);
db_gestion.createCollection(cll_order);
db_gestion.createCollection(cll_order_detail);
