function generateQR() {
  const text = document.getElementById('text').value;
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = '';

  if (!text.trim()) {
    alert("Please enter some text or a URL!");
    return;
  }

  // Create QR code and append to div
  QRCode.toCanvas(document.createElement('canvas'), text, function (error, canvas) {
    if (error) {
      console.error(error);
      alert("Error generating QR code.");
      return;
    }
    canvas.id = "canvasQR";
    qrContainer.appendChild(canvas);
  });
}

function downloadQR() {
  const canvas = document.getElementById('canvasQR');
  if (!canvas) {
    alert("Generate a QR code first!");
    return;
  }

  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = canvas.toDataURL("image/png");
  link.click();
}
