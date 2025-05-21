"use client";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (elementId = "cv-preview", filename = "My_CV.pdf") => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element dengan ID "${elementId}" tidak ditemukan.`);
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = {
      width: canvas.width,
      height: canvas.height,
    };

    const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
    const imgWidth = imgProps.width * ratio;
    const imgHeight = imgProps.height * ratio;

    const x = (pageWidth - imgWidth) / 2;
    const y = 0;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save(filename);
  } catch (error) {
    console.error("Gagal generate PDF:", error);
  }
};
