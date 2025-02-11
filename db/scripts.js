load("/docker-entrypoint-initdb.d/data.js");

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
db_config_server = db.getSiblingDB(db_name);

db_gestion = db.getSiblingDB(db_name);
db_gestion.createUser({
	user: "user_back",
	pwd: "12345",
	roles: [{ role: "readWrite", db: db_name }],
});

// Creacion colecciones
db_gestion.createCollection(cll_role);
db_gestion.createCollection(cll_user);
db_gestion.createCollection(cll_device_type);
db_gestion.createCollection(cll_device);
db_gestion.createCollection(cll_order);
db_gestion.createCollection(cll_order_detail);

cll_role_document = db_gestion.getCollection(cll_role);
cll_role_document.insertMany(role_sample);

// Insercion de ids de roles en usuarios
id_admin = cll_role_document.findOne({ role: "ROLE_ADMIN" }, {});
id_sell = cll_role_document.findOne({ role: "ROLE_SELLER" }, {});
id_user = cll_role_document.findOne({ role: "ROLE_USER" }, {});

admin_example = {
	first_name: "Jesus admin",
	last_name: "Ospino",
	email: "edgarmipapa@gmail.com",
	password: "1234",
	roles: [id_admin],
	orders: [],
};

sell_example = {
	first_name: "Jesus vendedor",
	last_name: "Ospino",
	email: "edgarmipapavendedor@gmail.com",
	password: "1234",
	roles: [id_sell],
	orders: [],
};

user_example = {
	first_name: "Jesus usuario",
	last_name: "Ospino",
	email: "edgarmipapauser@gmail.com",
	password: "1234",
	roles: [id_user],
	orders: [],
};

//

cll_user_document = db_gestion.getCollection(cll_user);
cll_user_document.insertMany([admin_example, sell_example, user_example]);
