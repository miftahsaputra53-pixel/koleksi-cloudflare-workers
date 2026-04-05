export default {
  async fetch(request) {
    // Ganti nomor di bawah dengan nomor WhatsApp kamu sendiri
    const myWhatsApp = "https://wa.me/628XXXXXXXXXX"; 
    
    return Response.redirect(myWhatsApp, 301);
  },
};
