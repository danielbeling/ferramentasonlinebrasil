import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './styles/Conversor.css';
import Footer from '../Footer';
import AdBanner from '../../components/AdBanner';

const ImageToPDFConverter = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPDF = () => {
    const input = document.getElementById('image-to-pdf');
    input.style.display = 'block'; // Garantir que a imagem está visível

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('download.pdf');
    }).finally(() => {
      input.style.display = 'none'; // Esconder novamente depois de capturar
    });
  };

  return (
    <>
      <div className="container-img">
        <h1 className="titulo-img">Converter Imagem para PDF</h1>
        <div className="drop-box">
          <input
            id="file-upload"
            className="input-img"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <label htmlFor="file-upload" className="drop-text">
            Clique para escolher a imagem
          </label>
        </div>
        {image && (
          <div>
            <div id="image-to-pdf" style={{ display: 'none' }}>
              <img src={image} alt="Imagem para PDF" />
            </div>
            <button className="btn-img" onClick={handleDownloadPDF}>Baixar PDF</button>
          </div>
        )}
      </div>
       <AdBanner />
      <Footer />
    </>
  );
};

export default ImageToPDFConverter;
