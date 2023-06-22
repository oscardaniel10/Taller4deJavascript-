function showMenu() {
    var option = prompt("Elija un ejercicio (1-6):\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Ejercicio 5\n6. Ejercicio 6");
  
    switch (option) {
      case "1":
        var word = prompt("Ingrese una palabra:");
var option = prompt("Seleccione una opción:\n1. Longitud de la palabra\n2. Convertir a mayúsculas\n3. Convertir a minúsculas\n4. Primer carácter");

switch (option) {
  case "1":
    var length = word.length;
    alert("La longitud de la palabra es: " + length);
    break;
  case "2":
    var uppercase = word.toUpperCase();
    alert("La palabra en mayúsculas es: " + uppercase);
    break;
  case "3":
    var lowercase = word.toLowerCase();
    alert("La palabra en minúsculas es: " + lowercase);
    break;
  case "4":
    var firstChar = word.charAt(0);
    alert("El primer carácter de la palabra es: " + firstChar);
    break;
  default:
    alert("Opción inválida");
    break;
}

        break;
      case "2":
        var temperature = parseFloat(prompt("Ingrese una temperatura en grados:"));

var fromUnit = prompt("Seleccione la unidad de temperatura de origen:\n1. Celsius\n2. Fahrenheit\n3. Kelvin");
var toUnit = prompt("Seleccione la unidad de temperatura de destino:\n1. Celsius\n2. Fahrenheit\n3. Kelvin");

var convertedTemperature;

switch (fromUnit) {
  case "1": // Celsius
    switch (toUnit) {
      case "1": // Celsius to Celsius
        convertedTemperature = temperature;
        break;
      case "2": // Celsius to Fahrenheit
        convertedTemperature = (temperature * 9/5) + 32;
        break;
      case "3": // Celsius to Kelvin
        convertedTemperature = temperature + 273.15;
        break;
      default:
        alert("Unidad de temperatura de destino inválida");
        break;
    }
    break;
  case "2": // Fahrenheit
    switch (toUnit) {
      case "1": // Fahrenheit to Celsius
        convertedTemperature = (temperature - 32) * 5/9;
        break;
      case "2": // Fahrenheit to Fahrenheit
        convertedTemperature = temperature;
        break;
      case "3": // Fahrenheit to Kelvin
        convertedTemperature = (temperature + 459.67) * 5/9;
        break;
      default:
        alert("Unidad de temperatura de destino inválida");
        break;
    }
    break;
  case "3": // Kelvin
    switch (toUnit) {
      case "1": // Kelvin to Celsius
        convertedTemperature = temperature - 273.15;
        break;
      case "2": // Kelvin to Fahrenheit
        convertedTemperature = (temperature * 9/5) - 459.67;
        break;
      case "3": // Kelvin to Kelvin
        convertedTemperature = temperature;
        break;
      default:
        alert("Unidad de temperatura de destino inválida");
        break;
    }
    break;
  default:
    alert("Unidad de temperatura de origen inválida");
    break;
}

alert("La temperatura convertida es: " + convertedTemperature.toFixed(2));

        break;
      case "3":
        var lado1 = parseFloat(prompt("Ingrese el valor del primer lado del triángulo:"));
var lado2 = parseFloat(prompt("Ingrese el valor del segundo lado del triángulo:"));
var lado3 = parseFloat(prompt("Ingrese el valor del tercer lado del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
  alert("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  alert("El triángulo es isósceles");
} else {
  alert("El triángulo es escaleno");
}

        break;
      case "4":
        // Definir la lista de nombres, apellidos y actividades de los instructores
var nombres = ["Juan", "María", "Pedro"];
var apellidos = ["Pérez", "Gómez", "López"];
var actividades = ["Programación", "Diseño", "Marketing"];

// Obtener la selección del usuario
var seleccionNombre = prompt("Seleccione un nombre:\n1. Juan\n2. María\n3. Pedro");
var seleccionApellido = prompt("Seleccione un apellido:\n1. Pérez\n2. Gómez\n3. López");
var seleccionActividad = prompt("Seleccione una actividad:\n1. Programación\n2. Diseño\n3. Marketing");

// Convertir las selecciones a índices numéricos
var indiceNombre = parseInt(seleccionNombre) - 1;
var indiceApellido = parseInt(seleccionApellido) - 1;
var indiceActividad = parseInt(seleccionActividad) - 1;

// Verificar la selección del usuario
if (
  nombres[indiceNombre] &&
  apellidos[indiceApellido] &&
  actividades[indiceActividad]
) {
  alert("La respuesta es correcta");
} else {
  alert("La respuesta es incorrecta");
}

        break;
      case "5":
        // Obtener elementos del DOM
var circleCard = document.getElementById('circleCard');
var triangleCard = document.getElementById('triangleCard');
var rectangleCard = document.getElementById('rectangleCard');
var squareCard = document.getElementById('squareCard');
var modal = document.getElementById('modal');
var modalTitle = document.getElementById('modalTitle');
var modalForm = document.getElementById('modalForm');
var closeBtn = document.getElementsByClassName('close')[0];
var calculateBtn = document.getElementsByClassName('btn-calculate')[0];
var perimeterBtns = document.getElementsByClassName('btn-perimeter');
var areaBtns = document.getElementsByClassName('btn-area');

// Event listeners para abrir y cerrar la ventana modal
circleCard.addEventListener('click', function() {
  openModal('Círculo');
});

triangleCard.addEventListener('click', function() {
  openModal('Triángulo');
});

rectangleCard.addEventListener('click', function() {
  openModal('Rectángulo');
});

squareCard.addEventListener('click', function() {
  openModal('Cuadrado');
});

closeBtn.addEventListener('click', closeModal);

// Event listener para calcular el perímetro
for (var i = 0; i < perimeterBtns.length; i++) {
  perimeterBtns[i].addEventListener('click', function() {
    var shape = this.parentNode.id;
    openModalForm(shape, 'Perímetro');
  });
}

// Event listener para calcular el área
for (var i = 0; i < areaBtns.length; i++) {
  areaBtns[i].addEventListener('click', function() {
    var shape = this.parentNode.id;
    openModalForm(shape, 'Área');
  });
}

// Función para abrir la ventana modal
function openModal(shape) {
  modal.style.display = 'block';
  modalTitle.innerHTML = shape;
  modalForm.innerHTML = '';
}

// Función para abrir la ventana modal con el formulario
function openModalForm(shape, operation) {
  openModal(shape);

  var shapeInputs = getShapeInputs(shape);
  for (var i = 0; i < shapeInputs.length; i++) {
    var inputLabel = document.createElement('label');
    inputLabel.textContent = shapeInputs[i].label + ': ';
    var input = document.createElement('input');
    input.type = 'number';
    input.className = 'modalInput';
    inputLabel.appendChild(input);
    var inputRow = document.createElement('div');
    inputRow.className = 'modalFormRow';
    inputRow.appendChild(inputLabel);
    modalForm.appendChild(inputRow);
  }

  calculateBtn.onclick = function() {
    var inputs = modal.getElementsByClassName('modalInput');
    var values = [];
    for (var i = 0; i < inputs.length; i++) {
      values.push(parseFloat(inputs[i].value));
    }
    var result = calculate(shape, operation, values);
    alert('El ' + operation.toLowerCase() + ' del ' + shape.toLowerCase() + ' es: ' + result);
    closeModal();
  };
}

// Función para cerrar la ventana modal
function closeModal() {
  modal.style.display = 'none';
}

// Función para obtener los inputs necesarios para cada figura
function getShapeInputs(shape) {
  switch (shape) {
    case 'circleCard':
      return [{ label: 'Radio' }];
    case 'triangleCard':
      return [{ label: 'Lado 1' }, { label: 'Lado 2' }, { label: 'Lado 3' }];
    case 'rectangleCard':
      return [{ label: 'Base' }, { label: 'Altura' }];
    case 'squareCard':
      return [{ label: 'Lado' }];
    default:
      return [];
  }
}

// Función para calcular el perímetro y área de las figuras
function calculate(shape, operation, values) {
  switch (shape) {
    case 'circleCard':
      if (operation === 'Perímetro') {
        var radius = values[0];
        return 2 * Math.PI * radius;
      } else if (operation === 'Área') {
        var radius = values[0];
        return Math.PI * radius * radius;
      }
      break;
    case 'triangleCard':
      if (operation === 'Perímetro') {
        var side1 = values[0];
        var side2 = values[1];
        var side3 = values[2];
        return side1 + side2 + side3;
      } else if (operation === 'Área') {
        var base = values[0];
        var height = values[1];
        return (base * height) / 2;
      }
      break;
    case 'rectangleCard':
      if (operation === 'Perímetro') {
        var base = values[0];
        var height = values[1];
        return 2 * (base + height);
      } else if (operation === 'Área') {
        var base = values[0];
        var height = values[1];
        return base * height;
      }
      break;
    case 'squareCard':
      if (operation === 'Perímetro') {
        var side = values[0];
        return 4 * side;
      } else if (operation === 'Área') {
        var side = values[0];
        return side * side;
      }
      break;
    default:
      break;
  }
}

        break;
      case "6":
        // Llamar a la función del Ejercicio 6
        alert("Has elegido el Ejercicio 6");
        break;
      default:
        alert("Opción inválida");
        break;
    }
  }

  showMenu();
  


  