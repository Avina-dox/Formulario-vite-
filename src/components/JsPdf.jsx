import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const FormularioRecepcionEntrega = () => {
    const formRef = useRef();

    const generarPDF = async () => {
        const input = formRef.current;

        if (!input) return;

        // Asegúrate de que el nodo esté completamente visible antes de capturarlo
        window.scrollTo(0, 0);

        const canvas = await html2canvas(input, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4',
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // Primera página
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Más páginas si es necesario
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save('formulario-recepcion-entrega.pdf');
    };

    return (
        <div>
            {/* Formulario completo */}
            <form
                ref={formRef}
                className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8"
            >
                {/* ... TODO tu formulario aquí ... */}
                {/* NO toques nada de las clases ni cambies la estructura */}
                {/* Asegúrate de que los inputs y checkboxes estén DENTRO de este form */}
            </form>

            {/* Botón fuera del <form> para que no interfiera con onSubmit */}
            <div className="flex justify-end mt-6 max-w-3xl mx-auto">
                <button
                    onClick={generarPDF}
                    type="button"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
                >
                    Guardar en PDF
                </button>
            </div>
        </div>
    );
};

export default FormularioRecepcionEntrega;
// Asegúrate de que el formulario tenga un ID único y que los inputs tengan nombres únicos