
//Definir datos de consultorio, y resguardar.
function Consultorio(nombre, paciente){
    var _nombre = nombre;
    var _paciente = paciente || [];
    

    Object.defineProperty(this, "_nombre", {
        get: function () {
            return _nombre;
        },
        set: function (nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_paciente", {
        get: function (){
            return _paciente;          
        }
    });
    
};

   
//Definir datos de pacientes, y resguardar.
function Paciente(nombre,edad,rut,diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "_nombre", {
        get: function () {
            return _nombre;
        },
        set: function (nombre) {
            _nombre = nombre;
        }
    });
    Object.defineProperty(this, "_edad", {
        get: function () {
            return _edad;
        },
        
        set: function (edad) {
            _edad = edad;
        }
    });
    Object.defineProperty(this, "_rut", {
        get: function () {
            return _rut;
        },
        set: function (rut) {
            this._rut = rut;
        }
    });
    Object.defineProperty(this, "_diagnostico", {
        get: function () {
            return _diagnostico;
        },
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
};



//constructor
Consultorio.prototype.getNombre = function () {
    return this._nombre;
};

Consultorio.prototype.setNombre  = function (nombreConsulta) {
    return this._nombre = nombreConsulta;
};

Consultorio.prototype.getPaciente = function () {
    return this._paciente;
};

Consultorio.prototype.setPaciente  = function (paciente) {
    return this._paciente = paciente;
};





Paciente.prototype.getNombre = function () {
    return this._nombre;
};

Paciente.prototype.setNombre  = function (nombre) {
    return this._nombre = nombre;
};
Paciente.prototype.getEdad = function () {
    return this._edad;
};

Paciente.prototype.setEdad  = function (edad) {
    return this._edad = edad;
};
Paciente.prototype.getRut = function () {
    return this._rut;
};

Paciente.prototype.setRut  = function (rut) {
    return this._rut = rut;
};
Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico;
};

Paciente.prototype.setDiagnostico  = function (diagnostico) {
    return this._diagnostico = diagnostico;
};

//se establece Consultio Chiguayante con 2 pacientes



 var paciente1 = new Paciente('Pablo','32','17345674-3','malestar');
 var paciente2 = new Paciente('Eduardo','30','17345444','dolor espalda');
 var consultorioC = new Consultorio('Consultorio Chiguayante', [paciente1,paciente2]);

var paciente3 = new Paciente("lilu","7","1200000-3","dolor de patas");
console.log(consultorioC.getPaciente())

// se agrega paciente3 
Consultorio.prototype.agregarPaciente = function(nuevopaciente){
    this._paciente.push(nuevopaciente);
}
consultorioC.agregarPaciente(paciente3);





//buscar paciente 4.1
Consultorio.prototype.buscar = function (comparar){
    this._paciente.forEach(function(elemento){
      if(elemento.getNombre==comparar){
          console.log(elemento.getNombre(),elemento.getRut(),elemento.getEdad(),elemento.getDiagnostico())
      } else {
          console.log("busqueda no encontrada")
      }

    });
}
consultorioC.buscar("John Doe")


//mostrar informacion de pacientes 4.2
Consultorio.prototype.mostrar = function (){
    this._paciente.forEach(function(elemento){
       console.log(elemento.getNombre(),elemento.getRut(),elemento.getEdad(),elemento.getDiagnostico());

    });
}
consultorioC.mostrar();