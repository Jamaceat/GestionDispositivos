// Declaracion constantes
db_name = "gestion_db";

// Declaracion collections
cll_role = "cll_role";
cll_device = "cll_device";
cll_order = "cll_order";
cll_order_detail = "cll_order_detail"

// creacion de base de datos
db_config_server = db.getSiblingDB(dbNameDev);

db_config_server.createUser({
	user: "usercs",
	pwd: "328Dc2f873Gd",
	roles: [{ role: "readWrite", db: dbNameDev }],
});


// Creacion colecciones
db_name.createCollection(cll_device);
db_name.createCollection(cll_order);
db_name.createCollection(cll_order_detail);