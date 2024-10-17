document.getElementById('realizarPago').addEventListener('click', function() {
    const datosFormulario = {
        nombre: document.getElementById('nombre').value,
        codigoEstudiante: document.getElementById('codigoEstudiante').value,
        semestre: document.getElementById('semestre').value,
        carrera: document.getElementById('carrera').value,
        modalidadPago: document.getElementById('modalidadPago').value,
        descripcion: document.getElementById('descripcion').value,
        monto: document.getElementById('monto').value,
        numeroTarjeta: document.getElementById('numeroTarjeta').value,
        fechaVencimiento: document.getElementById('fechaVencimiento').value,
        codigoSeguridad: document.getElementById('codigoSeguridad').value,
    };

    const fechaActual = new Date().toLocaleDateString();
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const logo = new Image();
    logo.src = 'logo.png'; // Asegúrate de que la ruta sea correcta
    logo.onload = function() {
        // Añadir el logo
        doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Ajusta el tamaño y la posición

        // Título
        doc.setFontSize(16);
        doc.text("Boleta Electrónica", 50, 20);
        
        // Línea separadora
        doc.setLineWidth(0.5);
        doc.line(10, 25, 200, 25); // Línea horizontal

        // Detalles
        doc.setFontSize(12);
        const detalles = [
            `Nombre del Titular: ${datosFormulario.nombre}`,
            `Código de Estudiante: ${datosFormulario.codigoEstudiante}`,
            `Semestre: ${datosFormulario.semestre}`,
            `Carrera: ${datosFormulario.carrera}`,
            `Modalidad de Pago: ${datosFormulario.modalidadPago}`,
            `Descripción: ${datosFormulario.descripcion}`,
            `Monto: S/. ${datosFormulario.monto}`,
            `Número de Tarjeta: ${datosFormulario.numeroTarjeta}`,
            `Fecha de Vencimiento: ${datosFormulario.fechaVencimiento}`,
            `Código de Seguridad: ${datosFormulario.codigoSeguridad}`,
            `Fecha de Emisión: ${fechaActual}`,
            `RUC: 12345678912` // RUC ficticio
        ];

        // Añadir los detalles al PDF
        let yOffset = 30; // Y offset para empezar a escribir detalles
        detalles.forEach((linea) => {
            doc.text(linea, 10, yOffset);
            yOffset += 10; // Espacio entre líneas
        });

        // Línea final
        doc.line(10, yOffset, 200, yOffset); // Línea horizontal final

        // Simular la descarga del PDF
        setTimeout(() => {
            doc.save("boleta_electronica.pdf");
        }, 2000);
    };

    logo.onerror = function() {
        console.error("Error al cargar la imagen. Verifica la ruta.");
    };
});
