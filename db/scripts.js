// Declaracion constantes
db_name = "gestion_db";

cll_role = "cll_role";

// creacion de base de datos

db_config_server = db.getSiblingDB(dbNameDev);
db_config_server.createUser({
	user: "usercs",
	pwd: "328Dc2f873Gd",
	roles: [{ role: "readWrite", db: dbNameDev }],
});
