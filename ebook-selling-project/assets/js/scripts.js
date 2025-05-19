document.addEventListener('DOMContentLoaded', () => {
  // Function to handle ebook purchase
  const purchaseEbook = (ebookTitle) => {
    alert(`Thank you for purchasing "${ebookTitle}"!`);
  };

  // Event listener for purchase buttons
  const purchaseButtons = document.querySelectorAll('.purchase-btn');
  purchaseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const ebookTitle = event.target.dataset.title;
      purchaseEbook(ebookTitle);
    });
  });

  // Function to handle ebook download
  const downloadEbook = (ebookFile) => {
    window.open(ebookFile, '_blank');
  };

  // Event listener for download buttons
  const downloadButtons = document.querySelectorAll('.download-btn');
  downloadButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const ebookFile = event.target.dataset.file;
      downloadEbook(ebookFile);
    });
  });
});