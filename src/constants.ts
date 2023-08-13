const CommonConsts = Object.freeze({
    API_URL: "https://fepruebatecnicaculqi-backend-production.up.railway.app",
    sidebar: {
        employeeIcon: "people_outline",
        employee: "Empleados",
        recruitmentIcon: "work_outline",
        recruitment: "Reclutamiento",
        logout: "Salir",
    },
    searchComponent: {
        placeholder: "Buscar Empleado",
        searchIcon: "search",
    },
    pagination: {
        prev: "chevron_left",
        next: "chevron_right",
        control: (perPage: string, total: string) => `Mostrando <strong>1</strong> a <strong>${perPage}</strong> de <strong>${total}</strong> registros`,
    },
    login: {
        mail: "Correo electrónico",
        password: "Contraseña",
        errorIcon: "error_outline",
        error: "Correo electrónico o contraseña incorrectos",
        login: "Iniciar sesión",
        register: `¿Eres nuevo aquí? <a href="" class="text-[#27A376]">Crea una cuenta</a>`,
        init: "Inicia sesión",
    },
    header: {
        title: "Dale más power ⚡ a tus empleados hoy 💪",
        subtitle: "Te ayudamos a gestionarlos de manera más sencilla",
    },
    footer: {
        legal: "© 2023 Culqi . Todos los derechos reservados",
    },
    table: {
        name: "Nombre",
        charge: "Nombre cargo",
        dept: "Departamento",
        office: "Oficina",
        account: "Cuenta",
        actions: "Acciones",
        visibility: "visibility",
        edit: "mode_edit",
        delete: "delete",
    },
    home: {
        employees: "Empleados",
        employeeText: "Gestiona tus empleados",
        download: "Descargar",
        downloadIcon: "insert_drive_file",
        new: "Nuevo",
        newIcon: "add",
    }
});

export default CommonConsts;