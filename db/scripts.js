// Declaracion constantes
db_name = "db_gestion";

// Declaracion collections
cll_role = "cll_role";
cll_device = "cll_device";
cll_order = "cll_order";
cll_order_detail = "cll_order_detail"

// creacion de base de datos
<<<<<<< Updated upstream
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
=======

db_gestion = db.getSiblingDB(db_name);
db_gestion.createUser({
	user: "user_application",
	pwd: "12345",
	roles: [{ role: "readWrite", db: dbNameDev }],
});

//crear coleccion Roles

db_gestion.createCollection(cll_role);
cll_role = db_gestion.getCollection(cll_role);
>>>>>>> Stashed changes
